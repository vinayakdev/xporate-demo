<script lang="ts">
	import { pwaState, triggerInstall, dismissPopup } from '$lib/pwa.svelte';
</script>

{#if pwaState.showPopup && pwaState.canInstall && !pwaState.isInstalled}
	<!-- Backdrop (subtle) -->
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
				<!-- Icon -->
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xl font-bold text-white"
				>
					<span class="text-orange-500">X</span>
				</div>

				<div class="min-w-0 flex-1">
					<p class="text-sm font-semibold text-slate-900">Install Xporate App</p>
					<p class="mt-0.5 text-xs text-slate-500">
						Add to your home screen for quick access — works offline too.
					</p>
				</div>

				<!-- Close -->
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

			<!-- Actions -->
			<div class="mt-4 flex items-center gap-3">
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
		</div>
	</div>
{/if}
