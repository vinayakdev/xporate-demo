interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
	prompt(): Promise<void>;
}

export const pwaState = $state({
	deferredPrompt: null as BeforeInstallPromptEvent | null,
	canInstall: false,
	isInstalled: false,
	showPopup: false
});

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
}
