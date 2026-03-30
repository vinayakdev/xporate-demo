<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const faqs = [
		{
			q: 'What does monthly compliance management cover?',
			a: 'Bookkeeping support, income tax/TDS workflows, GST monthly filings and reconciliation, and ROC/secretarial governance (scope and caps apply).'
		},
		{
			q: 'Can I manage some items myself while outsourcing others?',
			a: 'Yes. We tailor the scope to your capacity. You handle some tasks, and we handle others—as long as the workflow stays aligned.'
		},
		{
			q: 'What happens if I miss a filing deadline?',
			a: 'Late fees apply based on the authority. We help you file and respond to any queries, but cannot prevent regulatory penalties for missed deadlines.'
		}
	];
</script>

<svelte:head>
	<title>Compliance & Governance (Ongoing) | Xporate</title>
	<meta
		name="description"
		content="Stay compliant with monthly compliance management. GST filings, income tax workflows, ROC governance. Expert support. Coming soon."
	/>
	<link rel="canonical" href="https://xporate.in/solutions/compliance-governance/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
			Stay compliant with monthly management
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-slate-300">
			Coming soon — full solution details are being prepared.
		</p>

		<!-- CTAs -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Back to Solutions →
			</a>
		</div>
	</div>
</section>

<!-- CONTENT -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-4 text-2xl font-bold text-slate-900">What this solution includes</h2>
		<p class="text-slate-600">
			Detailed breakdown coming soon. Meanwhile, chat with us about your specific compliance and governance needs.
		</p>

		<div class="mt-8">
			<a
				href="/book/"
				class="inline-flex items-center gap-1 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Schedule a 15-minute consult →
			</a>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-2xl font-bold text-slate-900">Common Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i (i)}
				<div class="rounded-lg border border-slate-200 bg-white">
					<button
						onclick={() => toggleAccordion(i)}
						class="w-full px-6 py-4 text-left transition hover:bg-slate-50"
					>
						<div class="flex items-center justify-between gap-4">
							<span class="font-medium text-slate-900">{faq.q}</span>
							<svg
								class="h-5 w-5 shrink-0 text-slate-400 transition duration-200"
								class:rotate-180={openItem === i}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</button>
					{#if openItem === i}
						<div class="border-t border-slate-200 bg-slate-50 px-6 py-4">
							<p class="text-sm leading-relaxed text-slate-600">{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FINAL CTA -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold">Ready to stay compliant?</h2>
		<p class="mt-4 text-lg text-slate-300">
			Let's discuss your compliance and governance needs.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Back to Solutions →
			</a>
		</div>
	</div>
</section>
