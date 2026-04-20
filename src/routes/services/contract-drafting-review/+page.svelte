<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const trustBullets = [
		'First drafts often delivered in 48–72 hours (scope dependent)',
		'Plain-English risk summary + recommended changes',
		'DPDP-aware data clauses where applicable',
		'Vendor/client agreements aligned to revenue protection',
		'Optional contract repository + renewal reminders (as scoped)'
	];

	const whoFor = [
		{
			title: 'Founders and SMEs closing clients',
			desc: 'Need enforceable terms for payments, scope, timelines, and liability.'
		},
		{
			title: 'Teams hiring or onboarding vendors',
			desc: 'Employment, consultancy, and vendor agreements with clear termination and confidentiality.'
		},
		{
			title: 'Businesses handling data',
			desc: 'Need DPDP-aware clauses and practical data handling obligations (where applicable).'
		},
		{
			title: 'Companies preparing for funding or due diligence',
			desc: 'Need clean contract hygiene, consistent templates, and a managed repository.'
		}
	];

	const serviceOptions = [
		{
			label: 'Option 1',
			title: 'Draft a new contract',
			best: 'Best when you need a contract from scratch tailored to your business.',
			output: 'Full draft + risk notes + execution checklist.'
		},
		{
			label: 'Option 2',
			title: 'Review an existing contract',
			best: 'Best when the other party sent their paper and you want protection before signing.',
			output: 'Plain-English risk summary + recommended edits + negotiation points.'
		},
		{
			label: 'Option 3',
			title: 'Redline + negotiation support',
			best: 'Best when you want us to mark up the document and help you close with safe compromises.',
			output: 'Redlined version + fallback clause options + negotiation script (scope-based).'
		}
	];

	const contractCategories = [
		{
			title: 'Client / revenue contracts',
			items: [
				'MSA (Master Service Agreement)',
				'SoW (Statement of Work)',
				'SLA (Service Level Agreement)',
				'Consulting / retainer agreements'
			]
		},
		{
			title: 'Confidentiality and IP',
			items: [
				'NDA (Mutual or one-way)',
				'IP assignment and invention clauses',
				'Work-for-hire and ownership clauses'
			]
		},
		{
			title: 'Vendor and partnership contracts',
			items: [
				'Vendor/supplier agreements',
				'Channel/partner agreements',
				'SaaS tools and procurement contracts'
			]
		},
		{
			title: 'Employment and HR',
			items: [
				'Employment agreements',
				'Consultant agreements',
				'Offer letters + confidentiality clauses'
			]
		},
		{
			title: 'Web and data',
			items: [
				'Terms of service',
				'Privacy policy alignment notes (as applicable)',
				'DPDP-aware data processing clauses (as applicable)'
			]
		}
	];

	const riskChecklist = [
		{
			title: 'Payment protection',
			desc: 'Advance/retainers, milestone payments, late fees, and invoice dispute windows.'
		},
		{
			title: 'Scope control',
			desc: 'Clear deliverables, revision caps, change requests, and acceptance criteria.'
		},
		{
			title: 'Liability control',
			desc: 'Limitation of liability, indemnity boundaries, and exclusions.'
		},
		{
			title: 'Termination and exit',
			desc: 'Termination for convenience, notice periods, fees owed, and handover terms.'
		},
		{
			title: 'IP and confidentiality',
			desc: 'Ownership, usage rights, and confidentiality obligations aligned to real operations.'
		},
		{
			title: 'Dispute management',
			desc: 'Jurisdiction, arbitration/mediation clauses, and escalation steps.'
		},
		{
			title: 'Data handling (where applicable)',
			desc: 'Data access, security obligations, confidentiality, and DPDP-aware clauses.'
		}
	];

	const inputs = [
		{
			title: 'Your business context',
			desc: 'What you sell, typical deal size, delivery model, and risk profile.'
		},
		{
			title: 'Counterparty details',
			desc: 'Who the other party is and what you\'re agreeing to.'
		},
		{
			title: 'Commercial terms',
			desc: 'Pricing, payment timeline, scope, and delivery expectations.'
		},
		{
			title: 'Your preferred deal posture',
			desc: 'Where you can compromise and what is non-negotiable.'
		}
	];

	const notDoing = [
		'Court representation and litigation filings',
		'Specialized areas outside commercial contracts (e.g., criminal, family law)',
		'Guaranteed outcomes in disputes or enforcement'
	];

	const relatedServices = [
		{
			title: 'Notice / Dispute Support',
			desc: 'If you received a notice or need to send one.',
			href: '/services/notice-dispute-support/'
		},
		{
			title: 'Compliance Management (Retainer)',
			desc: 'If you want your filings and governance kept clean year-round.',
			href: '/services/compliance-management/'
		},
		{
			title: 'Company + GST Registration (One-Stop)',
			desc: 'If you\'re still setting up your entity.',
			href: '/services/company-gst-registration/'
		}
	];

	const faqs = [
		{
			q: 'How fast can you draft or review a contract?',
			a: 'Many first drafts and reviews are completed in 48–72 hours depending on scope and inputs.'
		},
		{
			q: 'Can you review the other party\'s contract and suggest edits?',
			a: 'Yes. We provide a plain-English risk summary and recommended edits, and can support redlining and negotiation (scope-based).'
		},
		{
			q: 'Do you provide NDAs and client agreements?',
			a: 'Yes. NDAs, MSAs, SoWs, vendor agreements, employment/consultant agreements, and more.'
		},
		{
			q: 'Do you guarantee the contract will protect me in court?',
			a: 'No. Outcomes depend on facts and enforcement. We focus on drafting clarity, balanced risk allocation, and practical enforceability.'
		},
		{
			q: 'Can you include DPDP clauses?',
			a: 'Yes—where your business involves data handling, we add DPDP-aware clauses and practical data obligations.'
		}
	];
</script>

<svelte:head>
	<title>Contract Drafting & Review (48–72 hrs) | Xporate Legal</title>
	<meta
		name="description"
		content="Risk-first contract drafting and review in 48–72 hours (scope dependent). NDAs, MSAs, SoWs, vendor, employment, and DPDP-aware clauses. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/contract-drafting-review/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Contract drafting & review that protects revenue, not just paperwork
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Stop closing deals on templates. Xporate helps you draft, review, and negotiate business contracts
				with risk-first clarity—so your payment terms, liability, and exit clauses actually protect you when
				it matters.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Draft • Review • Redline • Negotiation support (scope-based)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each trustBullets as bullet (bullet)}
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
					This is legal drafting and review support. Outcomes depend on negotiation, counterparties, and
					facts. We don't guarantee results in disputes or enforcement.
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

<!-- WHO THIS IS FOR -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Who this is for</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whoFor as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CHOOSE WHAT YOU NEED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Choose what you need</h2>
		<p class="mb-10 text-center text-slate-600">
			Not sure which fits? <a href="/book/" class="font-medium text-orange-600 hover:text-orange-700"
				>Book a 15-minute consult →</a
			>
		</p>
		<div class="grid gap-6 md:grid-cols-3">
			{#each serviceOptions as opt (opt.label)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<p class="text-xs font-semibold uppercase text-orange-600">{opt.label}</p>
					<h3 class="mt-2 text-xl font-bold text-slate-900">{opt.title}</h3>
					<p class="mt-4 text-sm text-slate-600">{opt.best}</p>
					<div class="mt-6 border-t border-slate-100 pt-4">
						<p class="text-xs font-semibold text-slate-500">Output:</p>
						<p class="mt-1 text-sm text-slate-700">{opt.output}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CONTRACTS WE HANDLE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Contracts we commonly handle</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each contractCategories as cat (cat.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
					<h3 class="font-bold text-slate-900">{cat.title}</h3>
					<ul class="mt-4 space-y-2">
						{#each cat.items as item (item)}
							<li class="flex gap-2 text-sm text-slate-600">
								<span class="shrink-0 text-orange-500">•</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TURNAROUND -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Turnaround and delivery</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-xl font-bold text-slate-900">Standard turnaround</h3>
				<p class="mt-1 text-sm font-medium text-orange-600">Often 48–72 hours</p>
				<p class="mt-4 text-slate-600">
					First drafts and reviews are often completed within 48–72 hours depending on complexity and how
					quickly you provide inputs.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-xl font-bold text-slate-900">Urgent turnaround</h3>
				<p class="mt-4 text-slate-600">
					If you need same-day or next-day support, we'll confirm feasibility and scope during
					consultation.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- RISK-FIRST CHECKLIST -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			Our risk-first checklist (what we look for)
		</h2>
		<p class="mb-10 text-center text-slate-600">
			Every draft and review is structured around these seven protection points.
		</p>
		<div class="space-y-4">
			{#each riskChecklist as item (item.title)}
				<div class="flex gap-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
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

<!-- WHAT WE NEED FROM YOU -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we need from you (inputs)</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each inputs as input (input.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{input.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{input.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-3xl font-bold text-slate-900">Pricing (scope-based)</h2>
		<p class="text-slate-600">
			Pricing depends on the contract type, complexity, and whether you need drafting, review, redlining,
			and negotiation support. We'll confirm scope and quote during the consultation.
		</p>
		<div class="mt-8">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consult →
			</a>
		</div>
	</div>
</section>

<!-- OPTIONAL ADD-ON -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
			<h2 class="text-2xl font-bold text-slate-900">
				Optional add-on: contract repository + renewal reminders
			</h2>
			<p class="mt-4 text-slate-600">
				If you manage multiple contracts, we can help you create a simple agreement repository and renewal
				reminder system (as scoped).
			</p>
		</div>
	</div>
</section>

<!-- WHAT WE DON'T DO -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What we don't do (unless separately scoped)
		</h2>
		<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
			<ul class="space-y-3">
				{#each notDoing as item (item)}
					<li class="flex gap-3 text-slate-600">
						<span class="shrink-0 text-slate-400">•</span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- RELATED SERVICES -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Related services</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each relatedServices as svc (svc.href)}
				<a
					href={svc.href}
					class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-orange-300 hover:bg-orange-50"
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-700">{svc.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{svc.desc}</p>
					<p class="mt-4 text-sm font-semibold text-orange-600">Learn more →</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i (faq.q)}
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
		<h2 class="text-3xl font-bold">Get your contract reviewed before you sign</h2>
		<p class="mt-4 text-lg text-slate-300">
			Send the document, your deal terms, and your priorities. We'll return a clear risk summary and
			recommended edits.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
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
				WhatsApp now
			</a>
		</div>
	</div>
</section>
