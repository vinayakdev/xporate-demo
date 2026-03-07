<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PwaInstallPopup from '$lib/components/PwaInstallPopup.svelte';
	import { pwaState } from '$lib/pwa.svelte';

	let { children } = $props();

	onMount(() => {
		// Already installed as standalone? Mark it and stop.
		if (window.matchMedia('(display-mode: standalone)').matches) {
			pwaState.isInstalled = true;
			return;
		}

		// Register service worker
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		}

		function activatePrompt(e: any) {
			pwaState.deferredPrompt = e;
			pwaState.canInstall = true;
			pwaState.showPopup = true;
		}

		// beforeinstallprompt may have already fired before onMount ran —
		// the inline script in app.html captured it in window.__pwaPrompt
		const w = window as any;
		if (w.__pwaPrompt) {
			activatePrompt(w.__pwaPrompt);
		} else {
			// Still waiting — listen for our custom event
			const onReady = () => activatePrompt(w.__pwaPrompt);
			window.addEventListener('pwa-prompt-ready', onReady);
			// Cleanup handled below
			const onInstalled = () => {
				pwaState.isInstalled = true;
				pwaState.canInstall = false;
				pwaState.showPopup = false;
				pwaState.deferredPrompt = null;
			};
			window.addEventListener('appinstalled', onInstalled);
			return () => {
				window.removeEventListener('pwa-prompt-ready', onReady);
				window.removeEventListener('appinstalled', onInstalled);
			};
		}

		const onInstalled = () => {
			pwaState.isInstalled = true;
			pwaState.canInstall = false;
			pwaState.showPopup = false;
			pwaState.deferredPrompt = null;
		};
		window.addEventListener('appinstalled', onInstalled);
		return () => window.removeEventListener('appinstalled', onInstalled);
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
