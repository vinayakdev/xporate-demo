<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PwaInstallPopup from '$lib/components/PwaInstallPopup.svelte';
	import { pwaState, detectBrowser, isAlreadyInstalled, wasDismissed } from '$lib/pwa.svelte';

	let { children } = $props();

	onMount(() => {
		// Already installed — nothing to show
		if (isAlreadyInstalled()) {
			pwaState.isInstalled = true;
			return;
		}

		// Already dismissed by user — don't annoy them again
		if (wasDismissed()) return;

		// Register service worker
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		}

		const browser = detectBrowser();
		pwaState.browser = browser;

		if (browser === 'chromium') {
			// Chromium: wait for beforeinstallprompt (captured early in app.html)
			function activatePrompt(e: any) {
				pwaState.deferredPrompt = e;
				pwaState.canInstall = true;
				pwaState.showPopup = true;
			}

			const w = window as any;
			if (w.__pwaPrompt) {
				activatePrompt(w.__pwaPrompt);
			} else {
				const onReady = () => activatePrompt((window as any).__pwaPrompt);
				window.addEventListener('pwa-prompt-ready', onReady);
				window.addEventListener('appinstalled', onInstalled);
				return () => {
					window.removeEventListener('pwa-prompt-ready', onReady);
					window.removeEventListener('appinstalled', onInstalled);
				};
			}

			window.addEventListener('appinstalled', onInstalled);
			return () => window.removeEventListener('appinstalled', onInstalled);
		} else {
			// Safari / Firefox: no beforeinstallprompt — show instructions popup
			pwaState.showPopup = true;
		}

		function onInstalled() {
			pwaState.isInstalled = true;
			pwaState.canInstall = false;
			pwaState.showPopup = false;
			pwaState.deferredPrompt = null;
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

<PwaInstallPopup />
