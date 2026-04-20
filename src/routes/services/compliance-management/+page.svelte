<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const trustBullets = [
		'₹15,000/month standard retainer (up to 50 invoices/month)',
		'Cloud bookkeeping setup + monthly maintenance',
		'GST filing + reconciliations + input credit hygiene',
		'ROC/secretarial compliance (registers, minutes, annual filings)',
		'A compliance calendar you can actually follow'
	];

	const whoFor = [
		{
			title: 'Pvt Ltd companies and LLPs',
			desc: 'Entities that need a consistent compliance engine (not ad-hoc filing).'
		},
		{
			title: 'Founders who don\'t want compliance on WhatsApp threads',
			desc: 'A structured monthly system with deadlines, requests, and outputs.'
		},
		{
			title: 'Teams preparing for funding or due diligence',
			desc: 'Clean books, reconciled GST, and governance hygiene that investors expect.'
		},
		{
			title: 'Businesses with recurring invoices',
			desc: 'If you invoice monthly/weekly and need bookkeeping + GST hygiene.'
		}
	];

	const scopeCategories = [
		{
			title: '1) Bookkeeping (cloud tools)',
			items: [
				'Setup in cloud bookkeeping tool (Tally/Zoho Books or equivalent as applicable)',
				'Monthly bookkeeping based on invoices/bills/bank statements',
				'Chart of accounts alignment and cleanup guidance'
			]
		},
		{
			title: '2) GST compliance (monthly)',
			items: [
				'GSTR-1 and GSTR-3B preparation and filing support (as applicable)',
				'Reconciliation guidance to reduce mismatches and credit loss',
				'Input tax credit (ITC) hygiene checks (within scope)',
				'Query/notice coordination within standard support (as applicable)'
			]
		},
		{
			title: '3) TDS and income-tax workflows',
			items: [
				'TDS computation support and quarterly filing workflows (as applicable)',
				'Advance tax / income-tax computation support (as applicable)',
				'Guidance on challan payments (client pays; we compute and guide)'
			]
		},
		{
			title: '4) ROC / secretarial compliance (annual + periodic)',
			items: [
				'Statutory registers maintenance',
				'Board meeting minutes and resolutions (template + drafting support)',
				'Annual filings and secretarial calendar management (as applicable)',
				'Director compliance reminders (DIN KYC, DSC renewals as applicable)'
			]
		},
		{
			title: '5) Compliance calendar + monthly reporting',
			items: [
				'Monthly compliance calendar with due dates',
				'Monthly closure checklist and status update'
			]
		}
	];

	const notIncluded = [
		'Statutory audit and CA certification fees (handled by your CA)',
		'Litigation and court representation',
		'High-volume bookkeeping beyond 50 invoices/month without an upgraded plan',
		'Complex international taxation advisory or cross-border structuring',
		'Internal payroll processing (if needed, can be scoped separately)'
	];

	const howItWorks = [
		{
			week: 'Week 1',
			title: 'Data collection',
			desc: 'You upload invoices, bills, bank statements, and any payroll/expense records.'
		},
		{
			week: 'Week 2',
			title: 'Bookkeeping + reconciliation',
			desc: 'We post entries and reconcile accounts. You get clarifying questions early.'
		},
		{
			week: 'Week 3',
			title: 'Filing prep',
			desc: 'GST returns and tax computations are prepared with an approval workflow.'
		},
		{
			week: 'Week 4',
			title: 'Filing + closure',
			desc: 'Filings are submitted (within scope) and you receive a closure summary + next month checklist.'
		}
	];

	const onboarding = [
		{
			step: '1',
			title: 'Diagnostic call',
			desc: 'We confirm entity type, GSTIN count, last filed period, and data sources.'
		},
		{
			step: '2',
			title: 'Access + tool setup',
			desc: 'We set up bookkeeping tools and access workflows.'
		},
		{
			step: '3',
			title: 'Baseline status',
			desc: 'We confirm pending returns, notices, and gaps.'
		},
		{
			step: '4',
			title: 'Calendar activation',
			desc: 'We set your compliance calendar for GST, TDS, ROC, and tax tasks.'
		}
	];

	const inputs = [
		{
			title: 'Bank statements',
			desc: 'Monthly statements for all business accounts.'
		},
		{
			title: 'Sales and purchase invoices',
			desc: 'Invoices, bills, vendor agreements (as applicable).'
		},
		{
			title: 'GST access and history',
			desc: 'GST portal access (or coordination with your CA) + last filing status.'
		},
		{
			title: 'Corporate documents',
			desc: 'COI, PAN, TAN, GST certificates, and DSC details.'
		},
		{
			title: 'Single point of contact',
			desc: 'A designated person for approvals and clarifications.'
		}
	];

	const problems = [
		{
			title: 'Missed deadlines',
			desc: 'We run a calendar-based system so filings don\'t get forgotten.'
		},
		{
			title: 'Messy books that block funding',
			desc: 'We build predictable closure and reconciliations.'
		},
		{
			title: 'Input tax credit leakage',
			desc: 'We flag mismatch risks and improve ITC hygiene.'
		},
		{
			title: 'Governance gaps',
			desc: 'Registers, minutes, and compliance tasks are maintained consistently.'
		}
	];

	const relatedServices = [
		{
			title: 'Company + GST Registration (One-Stop)',
			desc: 'If you\'re new and need COI + GSTIN first.',
			href: '/services/company-gst-registration/'
		},
		{
			title: 'Legal Support (Contracts + Notices)',
			desc: 'If you want contracts and legal hygiene aligned with your compliance.',
			href: '/solutions/legal-support/'
		},
		{
			title: 'Get Funding-Ready (DPIIT / Startup India)',
			desc: 'If you\'re preparing for recognition and credibility.',
			href: '/solutions/get-funding-ready/'
		}
	];

	const faqs = [
		{
			q: 'What does "up to 50 invoices/month" mean?',
			a: 'It covers standard monthly bookkeeping volume for sales and purchases. If your volume is higher, we\'ll propose an upgraded plan.'
		},
		{
			q: 'Do you file GST every month?',
			a: 'Yes, we support monthly GST compliance workflows (as applicable). Filing frequency depends on your registration and obligations.'
		},
		{
			q: 'Do you handle ROC compliance too?',
			a: 'Yes—annual and periodic ROC/secretarial tasks are included within defined scope.'
		},
		{
			q: 'Will you pay taxes on my behalf?',
			a: 'No. We compute and guide; payments are made by the client via challans.'
		},
		{
			q: 'Do you guarantee no notices from GST or ROC?',
			a: 'No. Notices depend on authority checks and your transactions. We focus on clean records, timely filings, and documentation readiness.'
		},
		{
			q: 'Can you work alongside my CA?',
			a: 'Yes. We can coordinate alongside your CA/CS, or run the monthly engine if you want a single operations owner.'
		}
	];
</script>

<svelte:head>
	<title>Compliance Management Retainer: GST, ROC, TDS | Xporate</title>
	<meta
		name="description"
		content="₹15,000/month retainer (up to 50 invoices). Bookkeeping, GST filings, ROC compliance, TDS/IT workflows, and monthly compliance calendar. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/compliance-management/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Compliance management retainer: stay active, filing-proof, and audit-ready
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				An outsourced compliance department for Indian companies. We manage bookkeeping, GST, ROC/secretarial,
				and tax workflows with a monthly operating system—so you don't miss filings, lose credits, or end up
				in last-minute panic.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Bookkeeping • GST • ROC/Secretarial • TDS/IT workflows (monthly ops)
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
					We don't guarantee outcomes with authorities. Processing and notices depend on your filings, data
					quality, and authority checks. We focus on clean records, timely submissions, and documentation
					readiness.
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

<!-- PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Pricing (standard retainer)</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h3 class="text-xl font-bold text-slate-900">₹15,000/month</h3>
				<p class="mt-1 text-sm font-medium text-orange-600">Up to 50 invoices/month</p>
				<p class="mt-4 text-slate-600">
					Includes a defined monthly scope. If your invoice volume is higher or your complexity requires
					additional work, we'll quote transparently.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h3 class="text-xl font-bold text-slate-900">Out-of-pocket expenses</h3>
				<p class="mt-4 text-slate-600">
					Government fees, challans, stamp duty, and third-party fees are charged at actuals.
				</p>
			</div>
		</div>
		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book a Consult →
			</a>
		</div>
	</div>
</section>

<!-- WHO THIS IS FOR -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Who this retainer is for</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whoFor as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's included (monthly scope)</h2>
		<div class="space-y-8">
			{#each scopeCategories as cat (cat.title)}
				<div>
					<h3 class="text-xl font-bold text-slate-900">{cat.title}</h3>
					<ul class="mt-4 space-y-2">
						{#each cat.items as item (item)}
							<li class="flex gap-3 text-slate-600">
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

<!-- WHAT'S NOT INCLUDED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What's not included (unless separately scoped)
		</h2>
		<div class="rounded-2xl border border-slate-200 bg-white p-8">
			<ul class="space-y-3">
				{#each notIncluded as item (item)}
					<li class="flex gap-3 text-slate-600">
						<span class="shrink-0 text-slate-400">•</span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			How it works (monthly operating system)
		</h2>
		<p class="mb-10 text-center text-slate-600">
			A predictable four-week cycle—not ad-hoc requests and last-minute panic.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howItWorks as phase, i (phase.week)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
					<div
						class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600"
					>
						{i + 1}
					</div>
					<p class="text-xs font-semibold uppercase text-orange-600">{phase.week}</p>
					<h3 class="mt-1 font-bold text-slate-900">{phase.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{phase.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ONBOARDING -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Onboarding (first 7 days)</h2>
		<p class="mb-10 text-center text-slate-600">
			We get you set up fast with a structured kickoff.
		</p>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each onboarding as step (step.step)}
				<div class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600"
					>
						{step.step}
					</div>
					<div>
						<h3 class="font-bold text-slate-900">{step.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- REQUIRED INPUTS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we need from you (inputs)</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each inputs as input (input.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
					<h3 class="font-bold text-slate-900">{input.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{input.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- COMMON PROBLEMS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Common problems this retainer fixes
		</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each problems as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- RELATED SERVICES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Related services</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each relatedServices as svc (svc.href)}
				<a
					href={svc.href}
					class="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-orange-300 hover:bg-orange-50"
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
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
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
		<h2 class="text-3xl font-bold">Start your compliance retainer</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your invoice volume, GSTIN count, and last filed month—we'll confirm fit and activate
			the monthly calendar.
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
