<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/solutions/compliance-governance/+page.svelte    ║
║  URL:   /solutions/compliance-governance/                          ║
║  ROLE:  Solution page for Compliance & Governance retainer         ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → white → slate-900     ║
║    → white → orange-50 → slate-50 → white → slate-900             ║
║  · Cards, buttons, and accordion follow existing patterns           ║
║  · Hero section uses bold typography with trust bullets             ║
║  · FAQ accordion with local state management                        ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Uses Svelte 5 runes ($state) for accordion and interactivity     ║
║  · Inline HTML + Tailwind CSS only (no component imports)           ║
║  · SEO: svelte:head with full meta tags and canonical URL           ║
║  · All links use href for navigation                                ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	// ─── FAQ Accordion State ──────────────────────────────────────────
	let openFaqIndex = $state<number | null>(null);

	// ─── Data ─────────────────────────────────────────────────────────
	const trustBullets = [
		'Monthly bookkeeping in cloud software (Zoho-ledgers)',
		'GST: GSTR-1 + GSTR-3B filing + ITC reconciliation (GSTR-2A/2B)',
		'TDS: quarterly workflow + certificates + annual corporate filing support',
		'ROC: statutory registers, board minutes, AGM minutes + annual ROC filings',
		'Filing proofs shared (acknowledgment receipts)'
	];

	const whoItIsFor = [
		{
			title: "Pvt Ltd / LLPs that want 'set-and-forget' compliance",
			desc: "If you don't want to chase due dates and portals monthly, this retainer keeps you current."
		},
		{
			title: 'Founders scaling invoices and vendors',
			desc: 'As invoices increase, so do reconciliation errors and notice risk. We build monthly controls.'
		},
		{
			title: 'Companies that already faced notices, late fees, or portal blocks',
			desc: 'We clean the workflow, reconcile gaps, and stabilize the monthly cycle.'
		},
		{
			title: 'Teams with an internal accountant but no strong compliance system',
			desc: 'We can complement your finance ops with governance, filings, and a structured calendar.'
		}
	];

	const pillars = [
		{
			num: '1',
			title: 'Bookkeeping & accounting (Zoho)',
			desc: 'Monthly recording of transactions in Zoho based on your bank statements and invoices. Monthly bank reconciliation statements. Initial setup: one-time chart of accounts configuration for new entities.'
		},
		{
			num: '2',
			title: 'Direct tax (Income Tax + TDS)',
			desc: 'Reviewing TDS liability on rentals, salaries, professional fees, and contractors. Filing quarterly TDS statements and generating certificates for deductees. Advance tax review each quarter to reduce interest exposure. Annual corporate ITR preparation and filing by statutory deadlines.'
		},
		{
			num: '3',
			title: 'GST compliance (monthly + annual)',
			desc: 'Monthly GSTR-1 filing (sales) by the 11th. Monthly GSTR-3B filing (payment) by the 20th. Input Tax Credit (ITC) reconciliation monthly using vendor data (GSTR-2A/2B) to identify non-compliant suppliers. Annual return: GSTR-9 filing and reconciliation of audited books with GST data.'
		},
		{
			num: '4',
			title: 'Secretarial & corporate governance (ROC)',
			desc: 'Mandatory meeting documentation: minutes for 4 board meetings per year + AGM. Maintaining statutory registers and governance records. Annual ROC filings: AOC-4 (financials) + MGT-7 (annual return). Director KYC: DIR-3 KYC filing to keep DINs active.'
		}
	];

	const xporateDelivers = [
		'Cloud books (Zoho ledger access)',
		'Bank reconciliation statement',
		'TDS certificates',
		'Digitized minutes and registers',
		'Acknowledgment receipts for GST/ROC/IT filings'
	];

	const clientProvides = [
		'Bank statements + invoices by 5th of each month',
		'Tax payment deposits (you pay, we calculate)',
		'Active DSCs of directors',
		'Notify changes in directors/address/shareholding'
	];

	const timeline = [
		{
			phase: 'By the 5th',
			title: 'Data handover',
			desc: 'You share bank statements + invoices + any changes (directors/address/shareholding).'
		},
		{
			phase: 'Days 6–10',
			title: 'Bookkeeping + reconciliation',
			desc: 'Zoho updates + bank reconciliation. GST ITC reconciliation using GSTR-2A/2B and vendor compliance checks.'
		},
		{
			phase: 'By the 11th',
			title: 'GSTR-1 filed',
			desc: 'Sales return filed with checks to reduce mismatch triggers.'
		},
		{
			phase: 'By the 20th',
			title: 'GSTR-3B filed',
			desc: 'Tax payment return filed with reconciliation controls.'
		},
		{
			phase: 'Quarterly',
			title: 'TDS + advance tax',
			desc: 'TDS statements + certificates; quarterly computation review.'
		},
		{
			phase: 'Year-end',
			title: 'Annual ITR + returns',
			desc: 'ITR filing and GSTR-9 support. ROC annual filings (AOC-4 + MGT-7) and DIR-3 KYC.'
		}
	];

	const scopeBoundaries = [
		{
			title: 'Out-of-pocket expenses',
			desc: 'Government filing fees, stamp duty, and travel (if required) are charged at actuals.'
		},
		{
			title: 'Limitations',
			desc: 'Scope does not include interacting with local government agencies or representing you in litigation/audits unless requested as an additional paid service.'
		}
	];

	const relatedSolutions = [
		{
			title: 'Start a Business (India)',
			desc: "If you're not incorporated yet, start here.",
			href: '/solutions/start-a-business-india/'
		},
		{
			title: 'Legal Support (Contracts + Notices)',
			desc: 'Protect revenue and reduce disputes with risk-first agreements.',
			href: '/solutions/legal-support/'
		},
		{
			title: 'Need an address proof pack for registrations?',
			desc: 'Use the Workspaces engine — virtual office and address documentation.',
			href: '/virtual-office/'
		}
	];

	const faqItems = [
		{
			question: 'What does the ₹15,000/month compliance retainer include?',
			answer:
				'A year-round engagement across bookkeeping (Zoho), GST filings + ITC reconciliation, TDS + annual ITR, and ROC governance (minutes/registers + annual filings). Scope assumes up to 50 invoices/month.'
		},
		{
			question: 'What do I need to share each month to keep compliance on track?',
			answer:
				'Bank statements and purchase/sales invoices by the 5th of each month, plus updates about any changes in directors, address, or shareholding.'
		},
		{
			question: 'Do you pay taxes on my behalf?',
			answer:
				'No. You deposit the actual tax amounts calculated. We coordinate preparation, filings, and documentation.'
		},
		{
			question: 'What happens if my invoice volume exceeds 50 per month?',
			answer:
				'We revise scope and fees to reflect the increased workload and reconciliation requirements.'
		},
		{
			question: 'Can you represent us in audits or litigation?',
			answer:
				'Not under the standard retainer. Audit/litigation representation can be scoped as an additional paid service.'
		},
		{
			question: 'Do you guarantee no notices or penalties?',
			answer:
				'No. We reduce preventable risks through accurate records, reconciliation controls, and on-time filings.'
		}
	];

	// ─── Toggle FAQ item ──────────────────────────────────────────────
	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>Compliance Management (GST + ROC) Retainer | Xporate</title>
	<meta
		name="description"
		content="Monthly compliance retainer: bookkeeping in Zoho, GSTR-1/3B + ITC reconciliation, TDS, annual ITR, ROC filings & minutes. From ₹15,000/mo (≤50 invoices). Book consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/compliance-governance/" />
	<meta property="og:title" content="Compliance Management (GST + ROC) Retainer | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/compliance-governance/" />
	<meta
		property="og:description"
		content="Monthly compliance retainer: bookkeeping in Zoho, GSTR-1/3B + ITC reconciliation, TDS, annual ITR, ROC filings & minutes. From ₹15,000/mo (≤50 invoices). Book consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ─────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Compliance &amp; governance, handled—so your company stays &ldquo;Active&rdquo;
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				Xporate acts as your outsourced Secretarial and Tax Department. We keep your books clean,
				filings on-time, and records audit-ready—so you don't get trapped in avoidable penalties,
				director disqualification risks, or last-minute compliance fire drills.
			</p>
			<p class="text-sm text-slate-400">
				Bookkeeping + GST + Income Tax/TDS + ROC/Secretarial Governance
			</p>
		</div>

		<!-- Trust bullets -->
		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
			{#each trustBullets as bullet (bullet)}
				<div class="flex gap-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<p class="text-slate-300 text-sm lg:text-base">{bullet}</p>
				</div>
			{/each}
		</div>

		<!-- Compliance note -->
		<div class="mt-12 bg-slate-800 rounded-lg p-6 max-w-3xl">
			<p class="text-sm text-slate-300">
				<strong>Compliance note:</strong> We don't guarantee outcomes with authorities. We focus on
				documentation completeness, accurate records, and on-time execution to reduce preventable
				compliance risks.
			</p>
		</div>

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 flex-wrap">
			<a
				href="/services/compliance-management/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				See Compliance Retainer Plans →
			</a>
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="https://wa.me/917060706076"
				class="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition text-sm"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
					/>
				</svg>
				WhatsApp Us
			</a>
		</div>
	</div>
</section>

<!-- ─── WHO THIS IS FOR ───────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Who this is for</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each whoItIsFor as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHY IT MATTERS ───────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">
			Why ongoing compliance is non-negotiable (2026 reality)
		</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			In 2026, automated penalty regimes are aggressive. Skipping even a single month can trigger
			automated daily fines (example: ₹100/day per form) and can escalate into bigger consequences,
			including director disqualification risks.
		</p>

		<h3 class="text-2xl font-bold mb-4 text-slate-900">
			Our job is to keep you &lsquo;Active&rsquo; and defensible
		</h3>
		<p class="text-slate-700 leading-relaxed max-w-3xl">
			Clean books + reconciled GST + on-time statutory filings + properly maintained minutes and
			registers.
		</p>
	</div>
</section>

<!-- ─── WHAT'S INCLUDED — 4 PILLARS ─────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What's included (4 compliance pillars)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each pillars as pillar (pillar.num)}
				<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-semibold mb-4 text-slate-900"
						>{pillar.num}) {pillar.title}</h3
					>
					<p class="text-slate-700 leading-relaxed">{pillar.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── DELIVERABLES VS CLIENT INPUTS ────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">
			Execution: what we deliver vs what you provide
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<!-- Xporate delivers -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">Xporate delivers</h3>
				<ul class="space-y-4">
					{#each xporateDelivers as item (item)}
						<li class="flex gap-3">
							<span class="text-green-600 font-bold flex-shrink-0">✓</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- You provide -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">You provide</h3>
				<ul class="space-y-4">
					{#each clientProvides as item (item)}
						<li class="flex gap-3">
							<span class="text-slate-400 font-bold flex-shrink-0">—</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ─── PRICING ───────────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">
			Pricing (simple and fixed for predictable operations)
		</h2>

		<div class="max-w-xl mx-auto">
			<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
				<h3 class="text-xl font-bold text-slate-900 mb-4">Compliance Management Retainer</h3>
				<div class="text-4xl font-bold text-slate-900 mb-2">
					₹15,000 <span class="text-xl font-normal text-slate-500">per month</span>
				</div>
				<p class="text-slate-600 mb-4">Fixed for up to 50 monthly invoices</p>
				<p class="text-sm text-slate-500">
					If invoice volume exceeds 50 per month, scope and fees are revised to match workload.
				</p>
			</div>
		</div>

		<div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/services/compliance-management/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				View scope &amp; onboarding →
			</a>
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ─── MONTHLY OPERATING SYSTEM / TIMELINE ──────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">
			Your monthly operating system (what happens each month)
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each timeline as step (step.title)}
				<div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
					<div class="text-sm font-semibold text-blue-400 mb-2">{step.phase}</div>
					<h4 class="text-lg font-bold mb-3">{step.title}</h4>
					<p class="text-slate-400 text-sm">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── SCOPE BOUNDARIES ──────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Scope boundaries (no surprises)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each scopeBoundaries as item (item.title)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
					<p class="text-slate-700 leading-relaxed">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── ALREADY HAVE A CA? ───────────────────────────────────────────────── -->
<section class="bg-orange-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Already have a CA?</h2>

		<p class="text-lg text-slate-700 mb-8 max-w-3xl leading-relaxed">
			We work alongside your CA. We can run the compliance operating system (books + filings +
			governance), while your CA continues strategic advisory and representation.
		</p>

		<a
			href="/book/"
			class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
		>
			Book Consultation →
		</a>
	</div>
</section>

<!-- ─── RELATED SOLUTIONS ─────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">
			Related solutions (recommended next steps)
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each relatedSolutions as solution (solution.href)}
				<a
					href={solution.href}
					class="block bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition"
				>
					<h3 class="text-lg font-bold text-slate-900 mb-3">{solution.title}</h3>
					<p class="text-slate-700 text-sm">{solution.desc}</p>
					<div class="mt-4 text-blue-600 font-semibold text-sm">Learn more →</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FAQ SECTION ──────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Frequently Asked Questions</h2>

		<div class="space-y-4">
			{#each faqItems as item, idx (item.question)}
				<div class="border border-slate-200 rounded-lg overflow-hidden">
					<button
						onclick={() => toggleFaq(idx)}
						class="w-full px-6 py-4 bg-white hover:bg-slate-50 flex items-center justify-between transition"
					>
						<h3 class="text-base font-semibold text-slate-900 text-left">{item.question}</h3>
						<svg
							class="h-5 w-5 text-slate-500 flex-shrink-0 transition-transform"
							class:rotate-180={openFaqIndex === idx}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{#if openFaqIndex === idx}
						<div class="px-6 py-4 bg-slate-50 border-t border-slate-200">
							<p class="text-slate-700 leading-relaxed">{item.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FINAL CTA SECTION ────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Get your compliance on autopilot</h2>

		<p class="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
			Tell us your entity type, GSTIN count, invoice volume, and whether you need a cleanup or
			ongoing management. We'll confirm fit, scope, and the cleanest monthly workflow.
		</p>

		<div class="flex flex-col sm:flex-row gap-4 flex-wrap">
			<a
				href="/services/compliance-management/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				View plans &amp; onboarding →
			</a>
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="https://wa.me/917060706076"
				class="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition text-sm"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
					/>
				</svg>
				WhatsApp Us
			</a>
		</div>
	</div>
</section>
