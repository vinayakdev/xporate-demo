<script lang="ts">
	import { pwaState, triggerInstall, dismissPopup } from '$lib/pwa.svelte';
</script>

{#if pwaState.showPopup && !pwaState.isInstalled}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-[9998] bg-black/10 backdrop-blur-[2px]"
		onclick={dismissPopup}
		aria-hidden="true"
	></div>

	<!-- Popup card -->
	<div
		class="fixed bottom-6 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0"
		role="dialog"
		aria-modal="true"
		aria-label="Install Xporate app"
	>
		<!-- Top stripe -->
		<div class="h-1.5 w-full rounded-t-2xl bg-orange-500"></div>

		<div class="p-5">
			<!-- Header row -->
			<div class="flex items-start gap-4">
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold"
				>
					<span class="text-orange-500">X</span>
				</div>

				<div class="min-w-0 flex-1">
					<p class="text-sm font-semibold text-slate-900">Install Xporate App</p>
					<p class="mt-0.5 text-xs text-slate-500">
						{#if pwaState.browser === 'safari-ios'}
							Add to your Home Screen for quick access.
						{:else if pwaState.browser === 'safari-mac'}
							Add to your Dock — works like a native app.
						{:else if pwaState.browser === 'firefox'}
							Install via your browser for quick access.
						{:else}
							Add to your home screen — works offline too.
						{/if}
					</p>
				</div>

				<button
					onclick={dismissPopup}
					class="shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
					aria-label="Dismiss"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Instructions or button -->
			<div class="mt-4">
				{#if pwaState.browser === 'chromium' && pwaState.canInstall}
					<!-- Chrome/Edge: native install button -->
					<div class="flex items-center gap-3">
						<button
							onclick={triggerInstall}
							class="flex-1 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-95"
						>
							Install App
						</button>
						<button
							onclick={dismissPopup}
							class="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
						>
							Maybe later
						</button>
					</div>

				{:else if pwaState.browser === 'safari-ios'}
					<!-- Safari iOS: share sheet instructions -->
					<ol class="space-y-2.5">
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">1</span>
							<span>Tap the <strong>Share</strong> button</span>
							<!-- Share icon -->
							<svg class="ml-auto h-5 w-5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
							</svg>
						</li>
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">2</span>
							<span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
						</li>
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">3</span>
							<span>Tap <strong>"Add"</strong> to confirm</span>
						</li>
					</ol>
					<button
						onclick={dismissPopup}
						class="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
					>
						Got it
					</button>

				{:else if pwaState.browser === 'safari-mac'}
					<!-- Safari macOS: File menu instructions -->
					<ol class="space-y-2.5">
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">1</span>
							<span>Open the <strong>File</strong> menu in Safari</span>
						</li>
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">2</span>
							<span>Click <strong>"Add to Dock…"</strong></span>
						</li>
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">3</span>
							<span>Click <strong>"Add"</strong> to confirm</span>
						</li>
					</ol>
					<button
						onclick={dismissPopup}
						class="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
					>
						Got it
					</button>

				{:else if pwaState.browser === 'firefox'}
					<!-- Firefox: address bar instructions -->
					<ol class="space-y-2.5">
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">1</span>
							<span>Look for the <strong>install icon</strong> in the address bar</span>
							<!-- House/install icon -->
							<svg class="ml-auto h-5 w-5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
						</li>
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">2</span>
							<span>Click it and select <strong>"Install"</strong></span>
						</li>
					</ol>
					<button
						onclick={dismissPopup}
						class="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
					>
						Got it
					</button>

				{:else}
					<!-- Fallback: generic dismiss -->
					<button
						onclick={dismissPopup}
						class="w-full rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
					>
						Dismiss
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}
