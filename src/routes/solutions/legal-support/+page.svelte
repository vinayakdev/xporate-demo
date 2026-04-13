<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/solutions/legal-support/+page.svelte            ║
║  URL:   /solutions/legal-support/                                  ║
║  ROLE:  Solution page for Legal Support (Contracts + Notices)      ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → white → slate-50      ║
║    → white → slate-50 → orange-50 → white → slate-900             ║
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
		'Risk-first drafting aligned to your business model',
		'Plain-English walkthroughs (so teams actually follow the contract)',
		'DPDP-ready clauses for modern data/privacy requirements',
		'Contract milestone tracking (renewals, obligations, expiry)',
		'Support for routine legal issues and notices (scope-based)'
	];

	const pathCards = [
		{
			title: 'Contract Drafting & Review',
			desc: "Founders' agreements, MSAs/SoWs, NDAs, vendor contracts, SaaS/user terms, privacy policies, and more.",
			href: '/services/contract-drafting-review/'
		},
		{
			title: 'Notice / Dispute Support',
			desc: 'Support for legal notices, replies, dispute documentation, and strategy for negotiation/mediation/arbitration (scope-based).',
			href: '/services/notice-dispute-support/'
		}
	];

	const whatYouGet = [
		{
			title: 'Risk-first drafting (not clause-heavy)',
			desc: 'We focus on the clauses that actually create risk: indemnity, limitation of liability, termination, payment, IP, confidentiality, data handling, and dispute resolution.'
		},
		{
			title: 'Enforceability + alignment',
			desc: 'Drafts are built to be enforceable under Indian contract principles and aligned with your operational reality (who does what, when, and what happens if things go wrong).'
		},
		{
			title: 'DPDP-aware website and data clauses',
			desc: 'Where applicable, agreements include practical privacy/data clauses and DPDP-aligned language for modern compliance expectations.'
		},
		{
			title: 'Contract management (so obligations don\'t slip)',
			desc: 'A simple system to track milestones, expiry dates, renewal windows, and time-sensitive obligations.'
		},
		{
			title: 'Issue management for routine legal problems',
			desc: 'Guidance on routine legal issues, notices, and dispute workflows (scope-based), with clear documentation checklists and next steps.'
		}
	];

	const agreementCategories = [
		{
			category: 'Founder / Team',
			items: "Founders' Agreement (equity/vesting), employment contracts, ESOP documents."
		},
		{
			category: 'Operational',
			items: 'NDAs, service level agreements (SLAs), vendor and procurement contracts.'
		},
		{
			category: 'Strategic',
			items: 'Shareholder agreements (SHA), investment term sheets (support-level), IP assignment agreements.'
		},
		{
			category: 'Digital',
			items: 'Website Terms & Conditions, Privacy Policies (DPDP-aligned), SaaS user agreements.'
		}
	];

	const processSteps = [
		{
			num: '1',
			title: 'Discovery',
			desc: 'We understand the transaction, parties, commercial model, and your primary risks.'
		},
		{
			num: '2',
			title: 'Drafting / Review',
			desc: 'Drafts are created risk-first. First draft timelines vary by scope; many standard agreements can start with a 48–72 hour drafting cycle.'
		},
		{
			num: '3',
			title: 'Clause walkthrough (plain English)',
			desc: 'We walk you through key clauses so stakeholders understand the trade-offs and approvals happen faster.'
		},
		{
			num: '4',
			title: 'Finalization & execution support',
			desc: 'We support e-sign workflows and digital stamping where applicable.'
		}
	];

	const disputeSupport = [
		'Notice drafting and replies (based on facts and documents provided)',
		'Document checklist + evidence organization for your situation',
		'Strategy support for negotiation, mediation, or arbitration workflows (as applicable)',
		'Counterparty communication guardrails (what to say / what not to say)'
	];

	const disputeNotIncluded = [
		"We don't promise outcomes",
		'Court representation or formal litigation handling is not included by default',
		'May require a separate paid engagement for litigation representation'
	];

	const whoItIsFor = [
		{
			title: 'Funded startups and due-diligence prep',
			desc: "When contracts and filings need to look 'investment-ready' and consistent."
		},
		{
			title: 'High-growth SMEs',
			desc: "When you've outgrown DIY templates and need repeatable contract hygiene."
		},
		{
			title: 'Teams closing larger deals',
			desc: 'When MSAs/SoWs, liability caps, and termination clauses can make or break margins.'
		}
	];

	const differentiators = [
		{
			title: 'Human consulting for complex deal-making',
			desc: "You get a team that explains trade-offs, not a static template library."
		},
		{
			title: 'Business + compliance context',
			desc: "Contracts don't exist in isolation—your descriptions, invoices, and filings should stay consistent."
		},
		{
			title: 'Repeatable governance',
			desc: 'A practical legal workflow (templates + calendar + approvals) your team can actually use.'
		}
	];

	const faqItems = [
		{
			question: 'How fast can I get a first draft?',
			answer:
				'Timelines depend on complexity and inputs. Many standard agreements can begin with a 48–72 hour first draft cycle once requirements and base details are confirmed.'
		},
		{
			question: 'Do you only draft, or also review contracts we already have?',
			answer:
				'Both. Reviews focus on hidden risks in indemnity, termination, liability, IP, confidentiality, and dispute clauses, plus practical negotiation pointers.'
		},
		{
			question: 'Can you help with website Terms/Privacy Policy?',
			answer:
				'Yes. We support digital agreements like Terms & Conditions and Privacy Policies with DPDP-aware language (scope-based).'
		},
		{
			question: 'Do you handle legal notices and disputes?',
			answer:
				'We support notice drafting/replies and dispute documentation and strategy for negotiation/mediation/arbitration workflows (scope-based). Court representation is not included by default.'
		},
		{
			question: 'Is this the same as the Compliance solution?',
			answer:
				'Legal Support covers contracts and dispute workflows. Compliance & Governance covers ongoing filings and governance hygiene. Many companies use both.'
		}
	];

	// ─── Toggle FAQ item ──────────────────────────────────────────────
	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>Legal Support for Business Contracts & Notices | Xporate</title>
	<meta
		name="description"
		content="Business-first contract drafting & review, DPDP-ready website policies, and notice/dispute support. Risk-first, plain-English walkthroughs. Book a consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/legal-support/" />
	<meta property="og:title" content="Legal Support for Business Contracts & Notices | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/legal-support/" />
	<meta
		property="og:description"
		content="Business-first contract drafting & review, DPDP-ready website policies, and notice/dispute support. Risk-first, plain-English walkthroughs. Book a consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ─────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Legal support that helps you close deals—and avoid preventable disputes
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				Business-first legal infrastructure for Indian companies. We draft, review, and manage
				contracts (risk-first, enforceable, DPDP-aware) and support notices/disputes with clear
				next steps.
			</p>
			<p class="text-sm text-slate-400">Contracts • Notices • Dispute support (India)</p>
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
				<strong>Compliance note:</strong> We don't promise outcomes. Legal outcomes depend on facts,
				evidence, counterparties, and the forum/authority. We focus on clarity, enforceability, and
				process readiness.
			</p>
		</div>

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4">
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="/services/"
				class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
			>
				Explore Services →
			</a>
		</div>
	</div>
</section>

<!-- ─── QUICK PATH SELECTOR ───────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Choose your legal path</h2>
		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			Pick what you need right now. If you're unsure, book a consult and we'll recommend the
			fastest clean route.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
			{#each pathCards as card (card.href)}
				<a
					href={card.href}
					class="block border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition"
				>
					<h3 class="text-lg font-bold text-slate-900 mb-4">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed mb-6">{card.desc}</p>
					<div class="text-blue-600 font-semibold text-sm">Explore →</div>
				</a>
			{/each}
		</div>

		<p class="text-slate-600">
			Not sure what fits?
			<a href="/book/" class="text-blue-600 hover:underline font-semibold"
				>Book a 15-minute consult →</a
			>
		</p>
	</div>
</section>

<!-- ─── WHAT YOU GET ─────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">What you get with Xporate Legal Support</h2>
		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			No "template dumping." We build enforceable, business-usable documents and a workflow your
			team can repeat.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each whatYouGet as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
					<p class="text-slate-700 leading-relaxed">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── AGREEMENT LIBRARY ─────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">
			Agreement library (common documents we handle)
		</h2>
		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			If your document isn't listed, we can still help—share the requirement on the consult.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
			{#each agreementCategories as cat (cat.category)}
				<div class="border border-slate-200 rounded-lg p-6 hover:border-slate-400 transition">
					<h3 class="text-base font-bold text-slate-900 mb-3">{cat.category}</h3>
					<p class="text-slate-700 text-sm leading-relaxed">{cat.items}</p>
				</div>
			{/each}
		</div>

		<div class="flex flex-col sm:flex-row gap-4">
			<a
				href="/services/contract-drafting-review/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Get Contract Support →
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

<!-- ─── HOW IT WORKS ──────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">How it works</h2>
		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			A clean process built for speed without sacrificing enforceability.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each processSteps as step (step.num)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<div
						class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600 mb-4"
					>
						{step.num}
					</div>
					<h3 class="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
					<p class="text-slate-700 leading-relaxed">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── NOTICES + DISPUTES ────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Notices & dispute support (scope-based)</h2>
		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			When a dispute starts, the first mistake is usually documentation. We help you respond with
			clarity and a consistent record.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
			<!-- What we can support -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">What we can support</h3>
				<ul class="space-y-4">
					{#each disputeSupport as item (item)}
						<li class="flex gap-3">
							<span class="text-green-600 font-bold flex-shrink-0">✓</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- What this is not -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">What this is not</h3>
				<ul class="space-y-4">
					{#each disputeNotIncluded as item (item)}
						<li class="flex gap-3">
							<span class="text-slate-400 font-bold flex-shrink-0">—</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col sm:flex-row gap-4">
			<a
				href="/services/notice-dispute-support/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Get Notice / Dispute Support →
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

<!-- ─── WHO THIS IS FOR ───────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Who this is for</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each whoItIsFor as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHY XPORATE ───────────────────────────────────────────────────────── -->
<section class="bg-orange-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">
			Why Xporate instead of template platforms
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each differentiators as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
					<p class="text-slate-700 leading-relaxed">{item.desc}</p>
				</div>
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
							{#if idx === 4}
								<p class="text-slate-700 leading-relaxed">
									Legal Support covers contracts and dispute workflows.
									<a href="/solutions/compliance-governance/" class="text-blue-600 hover:underline"
										>Compliance &amp; Governance</a
									>
									covers ongoing filings and governance hygiene. Many companies use both.
								</p>
							{:else}
								<p class="text-slate-700 leading-relaxed">{item.answer}</p>
							{/if}
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
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Book a legal consult</h2>

		<p class="text-lg text-slate-300 mb-4 max-w-3xl leading-relaxed">
			Share what you're trying to do (close a deal, reduce risk, send a notice, reply to one).
			We'll recommend the cleanest route and scope.
		</p>

		<p class="text-sm text-slate-400 mb-10">
			Helpful to share: business type, deal type (NDA/MSA/vendor/etc.), counterparty type,
			timeline, and any existing document version.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="/services/contract-drafting-review/"
				class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
			>
				Explore Contract Service →
			</a>
		</div>
	</div>
</section>
