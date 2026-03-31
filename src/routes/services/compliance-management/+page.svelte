<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const tiers = [
		{
			name: 'Standard (50 invoices/month)',
			price: '₹15,000/month + GST',
			bestFor: 'Growing entities managing standard GST, TDS, and ROC compliance.',
			included: [
				'Monthly bookkeeping and income tax prep',
				'GST compliance filings and reconciliations',
				'TDS workflows (quarterly/annual)',
				'ROC/secretarial compliance and filing',
				'Compliance calendar and due-date tracking'
			]
		},
		{
			name: 'Growth (100+ invoices/month)',
			price: '₹25,000/month + GST',
			bestFor: 'High-transaction entities needing expanded compliance support.',
			included: [
				'Everything in Standard',
				'Higher invoice volume cap (100+ per month)',
				'Enhanced GST reconciliation support',
				'Multi-state GST compliance (where applicable)',
				'Dedicated compliance officer'
			]
		},
		{
			name: 'Enterprise (Custom)',
			price: 'Custom pricing',
			bestFor: 'Large teams with multi-entity or complex tax structures.',
			included: [
				'Everything in Growth',
				'Multi-entity coordination',
				'Advanced tax planning support',
				'Custom compliance workflows',
				'Quarterly business reviews'
			]
		}
	];

	const faqs = [
		{
			q: 'What does "compliance management" actually mean?',
			a: 'We handle monthly bookkeeping, GST filings/reconciliations, TDS workflows, and ROC/secretarial governance. We compute tax obligations; you remain responsible for payment.'
		},
		{
			q: 'Are government fees and stamp duty included?',
			a: 'No. Government fees and stamp duty are charged at actuals and billed separately.'
		},
		{
			q: 'Do you handle audits and litigation?',
			a: 'No. Audit and litigation support requires separate scoping or external counsel. Our focus is preventive compliance and filing readiness.'
		},
		{
			q: 'What if I exceed the invoice cap?',
			a: 'We discuss overage pricing upfront. Alternatively, you can upgrade to a higher tier.'
		},
		{
			q: 'Can I keep my CA and use your retainer for specific tasks?',
			a: 'Yes. We can coordinate with your CA and handle only the pieces you want outsourced.'
		},
		{
			q: 'How do you handle multi-state GST?',
			a: 'Standard tier covers single-state. Growth and Enterprise tiers support multi-state compliance coordination.'
		}
	];
</script>

<svelte:head>
	<title>Compliance Management (Retainer) | Xporate</title>
	<meta
		name="description"
		content="Outsourced compliance: bookkeeping, GST filings, TDS, ROC governance. From ₹15,000/month. Stay audit-ready and filing-proof."
	/>
	<link rel="canonical" href="https://xporate.in/services/compliance-management/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Compliance Management (Retainer)
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				An outsourced compliance department that keeps your entity active, filing-proof, and audit-ready.
				Monthly bookkeeping, GST filings, TDS workflows, and ROC governance—all in one coordinated retainer.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Bookkeeping + GST + TDS + ROC (Monthly Retainer Model)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'One team for all compliance workflows (fewer handoffs)',
					'Monthly filing and reconciliation coordination',
					'Compliance calendar and deadline tracking',
					'We compute tax; you authorize payments',
					'Audit trail and documentation ready'
				] as bullet (bullet)}
					<div class="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm text-slate-300">
						<span class="shrink-0 text-orange-400">✓</span>
						<span>{bullet}</span>
					</div>
				{/each}
			</div>

			<!-- Compliance disclaimer -->
			<div class="mt-8 rounded-lg bg-slate-800 px-6 py-4 text-sm text-slate-300">
				<p class="font-semibold text-slate-100">Important:</p>
				<p class="mt-2">
					We handle computation, filing support, and documentation. Tax payment responsibility remains
					with you. Audit and litigation support require separate scoping.
				</p>
			</div>

			<!-- CTAs -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/book/"
					class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Book Consultation →
				</a>
				<a
					href="/solutions/compliance-governance/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Compliance & Governance →
				</a>
				<a
					href="https://wa.me/917060706076"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-md bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						/>
					</svg>
					WhatsApp
				</a>
			</div>
		</div>
	</div>
</section>

<!-- PRICING TIERS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Pricing tiers</h2>
		<p class="mb-10 text-center text-slate-600">
			Choose based on transaction volume and complexity.
		</p>

		<div class="grid gap-6 md:grid-cols-3">
			{#each tiers as tier}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="text-xl font-bold text-slate-900">{tier.name}</h3>
					<p class="mt-2 text-2xl font-bold text-orange-600">{tier.price}</p>
					<p class="mt-4 text-sm text-slate-600">
						<strong>Best for:</strong> {tier.bestFor}
					</p>

					<div class="mt-6">
						<p class="font-semibold text-slate-900">Included:</p>
						<ul class="mt-3 space-y-2">
							{#each tier.included as item}
								<li class="flex gap-2 text-sm text-slate-600">
									<span class="shrink-0 text-orange-500">✓</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- WHAT'S COVERED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's covered</h2>
		<div class="space-y-8">
			<div>
				<h3 class="text-xl font-bold text-slate-900">Monthly bookkeeping</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Cloud-based bookkeeping setup (QuickBooks, Zoho, etc.)',
						'Monthly transaction recording and bank reconciliation',
						'Income statement and balance sheet maintenance',
						'Monthly reporting and financial tracking'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">GST compliance</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Monthly GST input/output reconciliation',
						'GST return filing (GSTR-1, GSTR-3B, etc.)',
						'ITC tracking and reconciliation',
						'GST audit trail maintenance'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">TDS & income tax workflows</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'TDS computation and payment tracking (quarterly/annual)',
						'Income tax quarterly/annual compliance prep',
						'Deduction claim documentation',
						'IT return filing support and guidance'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">ROC / secretarial compliance</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Annual forms filing (AOA, board resolutions, registers)',
						'Board/shareholder meeting coordination and minutes',
						'Compliance calendar and deadline tracking',
						'Governance audit trail maintenance'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- WHAT'S NOT INCLUDED -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's not included</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each [
				{ title: 'Government fees & stamp duty', desc: 'Charged at actuals and billed separately.' },
				{ title: 'Tax payments', desc: 'You authorize and make payments. We compute and guide.' },
				{ title: 'Audit & litigation', desc: 'Requires separate scoping or external counsel coordination.' },
				{ title: 'Strategic tax planning', desc: 'Beyond standard filing compliance.' }
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i}
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
		<h2 class="text-3xl font-bold">Stay audit-ready</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your entity type, transaction volume, and current compliance state. We'll recommend the right
			tier and confirm fit.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/compliance-governance/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Compliance & Governance →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-md bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
					/>
				</svg>
				WhatsApp
			</a>
		</div>
	</div>
</section>
