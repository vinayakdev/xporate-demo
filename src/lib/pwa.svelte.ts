interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
	prompt(): Promise<void>;
}

export type PwaBrowser = 'chromium' | 'safari-ios' | 'safari-mac' | 'firefox' | null;

export const pwaState = $state({
	deferredPrompt: null as BeforeInstallPromptEvent | null,
	canInstall: false,
	isInstalled: false,
	showPopup: false,
	browser: null as PwaBrowser
});

export function detectBrowser(): PwaBrowser {
	const ua = navigator.userAgent;

	// iOS — all browsers on iOS (including Chrome/Firefox on iOS) use Safari engine
	if (/iP(ad|hone|od)/.test(ua)) return 'safari-ios';

	// macOS Safari (not Chrome, not Android)
	if (/Safari/.test(ua) && !/Chrome/.test(ua) && !/Android/.test(ua)) return 'safari-mac';

	// Firefox (desktop or Android)
	if (/Firefox/.test(ua)) return 'firefox';

	// Chrome, Edge, Samsung Internet, Opera — all support beforeinstallprompt
	return 'chromium';
}

export function isAlreadyInstalled(): boolean {
	// iOS standalone check
	if ((navigator as any).standalone === true) return true;
	// All other browsers
	if (window.matchMedia('(display-mode: standalone)').matches) return true;
	return false;
}

export function wasDismissed(): boolean {
	try {
		return localStorage.getItem('pwa-dismissed') === '1';
	} catch {
		return false;
	}
}

export async function triggerInstall() {
	if (!pwaState.deferredPrompt) return;
	await pwaState.deferredPrompt.prompt();
	const { outcome } = await pwaState.deferredPrompt.userChoice;
	if (outcome === 'accepted') {
		pwaState.isInstalled = true;
		pwaState.canInstall = false;
	}
	pwaState.deferredPrompt = null;
	pwaState.showPopup = false;
}

export function dismissPopup() {
	pwaState.showPopup = false;
	try {
		localStorage.setItem('pwa-dismissed', '1');
	} catch {}
}
