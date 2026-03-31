<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const faqs = [
		{
			q: 'What types of contracts do you draft?',
			a: 'Common agreements: Founders agreements, NDAs, MSAs, SLAs, vendor contracts, employment agreements, service agreements, licensing, and IP agreements.'
		},
		{
			q: 'How fast can you draft a contract?',
			a: 'Many first drafts are delivered within 48–72 hours depending on agreement type, complexity, and input completeness.'
		},
		{
			q: 'Do you provide legal representation or court filings?',
			a: 'No. We draft and review agreements to be enforceable and risk-aware. Court representation and litigation require separate scoping or external counsel.'
		},
		{
			q: 'What if we already have a template?',
			a: 'We can review your template, flag risks, and customize it for your specific context and DPDP compliance.'
		},
		{
			q: 'Are your contracts DPDP-aware?',
			a: 'Yes. Our contracts include DPDP (Data Protection) clauses where applicable, especially for data-handling agreements.'
		},
		{
			q: 'Can you help negotiate with the other party?',
			a: 'We support strategy and drafting. Negotiation is handled by you and the other party, with our guidance on terms.'
		}
	];
</script>

<svelte:head>
	<title>Contract Drafting & Review | Xporate</title>
	<meta
		name="description"
		content="Risk-first contract drafting and reviews. Founders agreements, NDAs, MSAs, vendor contracts. DPDP-aware. 48-72hr turnaround. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/contract-drafting-review/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Contract Drafting & Review
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Risk-first drafting and reviews for enforceable agreements. Not generic templates—custom drafts built
				on your specific context, risk profile, and legal obligations.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Drafting, Review, DPDP Compliance, Negotiation Support
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Risk-first approach (liability, termination, indemnity, payment focus)',
					'DPDP-aware clauses (data protection compliance built in)',
					'Fast turnaround: many drafts in 48–72 hours',
					'Negotiation strategy and term guidance',
					'Enforceable, not boilerplate'
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
					We draft and review for enforceability and risk mitigation. We do not provide legal representation
					or court filings. Litigation requires external counsel coordination.
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
					href="/solutions/legal-support/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Legal Support →
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

<!-- WHAT WE HANDLE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we handle</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{
					title: 'Founders Agreements',
					examples: ['Equity splits, vesting, buyback clauses']
				},
				{
					title: 'Employment Agreements',
					examples: ['Offer letters, service agreements, IP assignment']
				},
				{
					title: 'Vendor & Service Agreements',
					examples: ['MSAs, SLAs, service level commitments']
				},
				{
					title: 'NDAs & Confidentiality',
					examples: ['One-way and mutual confidentiality agreements']
				},
				{
					title: 'Customer / Client Contracts',
					examples: ['Terms of service, license agreements, licensing']
				},
				{
					title: 'IP & Licensing Agreements',
					examples: ['License grants, trademark agreements, IP transfers']
				}
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<ul class="mt-4 space-y-1">
						{#each item.examples as ex}
							<li class="text-sm text-slate-600">• {ex}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- RISK FOCUS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Our risk-first approach</h2>
		<div class="space-y-6">
			{#each [
				{
					title: 'Liability & indemnity',
					desc: 'Clear limits on liability exposure and strong indemnification terms.'
				},
				{
					title: 'Termination & exit',
					desc: 'Clean termination procedures with notice periods and wind-down terms.'
				},
				{
					title: 'Payment & dispute',
					desc: 'Clear payment terms, late penalties, and escalation procedures.'
				},
				{
					title: 'Data & compliance',
					desc: 'DPDP compliance clauses, data handling, and privacy protections.'
				},
				{
					title: 'IP ownership',
					desc: 'Clear ownership of work product, pre-existing IP, and derivative works.'
				},
				{
					title: 'Confidentiality',
					desc: 'Strong confidentiality and non-disclosure provisions with clear exceptions.'
				}
			] as item}
				<div class="flex gap-6 rounded-lg border border-slate-200 bg-white p-6">
					<div class="shrink-0">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
							<svg class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
					</div>
					<div>
						<h3 class="font-bold text-slate-900">{item.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Pricing & turnaround</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h3 class="text-lg font-bold text-slate-900">Contract drafting</h3>
				<p class="mt-2 text-sm text-slate-600">
					First drafts typically delivered within <strong>48–72 hours</strong> (depending on complexity and
					input completeness).
				</p>
				<p class="mt-4 font-medium text-orange-600">Pricing: Case-based</p>
				<p class="text-xs text-slate-500">Founders agreements, employment, service agreements, NDAs</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h3 class="text-lg font-bold text-slate-900">Contract review</h3>
				<p class="mt-2 text-sm text-slate-600">
					Review of existing contracts with risk flags, term recommendations, and compliance notes.
				</p>
				<p class="mt-4 font-medium text-orange-600">Starts at ₹5,000 + GST</p>
				<p class="text-xs text-slate-500">Vendor contracts, customer agreements, templates</p>
			</div>
		</div>

		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Get a quote →
			</a>
		</div>
	</div>
</section>

<!-- PROCESS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Our process</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ n: '1', title: 'Input & context', desc: 'Share your parties, key terms, and risk concerns.' },
				{ n: '2', title: 'Risk audit', desc: 'Flag risks and identify key negotiation points.' },
				{ n: '3', title: 'Drafting or review', desc: 'First draft or detailed review with redlines.' },
				{ n: '4', title: 'Approval & execution', desc: 'Final version and execution guidance.' }
			] as step}
				<div class="rounded-xl bg-white p-6 ring-1 ring-slate-200">
					<div class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
						{step.n}
					</div>
					<h3 class="font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-2 text-sm text-slate-600">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
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
		<h2 class="text-3xl font-bold">Protect your agreements</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share the agreement type, parties, and key terms. We'll draft or review it with risk-first thinking and
			DPDP compliance.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/legal-support/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Legal Support →
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
