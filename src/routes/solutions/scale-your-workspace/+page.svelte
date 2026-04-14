<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/solutions/scale-your-workspace/+page.svelte     ║
║  URL:   /solutions/scale-your-workspace/                           ║
║  ROLE:  Solution page for workspace scaling (Virtual→Lease ladder) ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → repeating              ║
║  · Cards, buttons, and accordion follow existing patterns           ║
║  · Workspace ladder as 4-card section with links                    ║
║  · FAQ accordion with local state management                        ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Uses Svelte 5 runes ($state) for accordion interactivity         ║
║  · Inline HTML + Tailwind CSS only (no component imports)           ║
║  · SEO: svelte:head with full meta tags and canonical URL           ║
║  · All links use href for navigation                                ║
╠══════════════════════════════════════════════════════════════════════╣
║  CMS NOTES                                                            ║
║  · Workspace ladder sections should be CMS-driven pricing            ║
║  · FAQ items can be CMS-driven in production                        ║
║  · Card content is hardcoded for MVP                                ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const trustBullets = [
		'Stage-based workspace ladder (don\'t overpay too early)',
		'Shortlists with trade-offs explained (not just listings)',
		'Transparent commercial terms (fees disclosed upfront)',
		'Negotiation + legal review support for leases (when applicable)',
		'Transition planning (people, seats, timelines, access)'
	];

	const workspaceLadder = [
		{
			stage: 'Stage 1: Virtual Office (verification-ready address)',
			subtitle: 'Best when you need a compliant business address without daily seats',
			details: 'Starting point for new entities, multi-city sellers, founders, and brand presence.',
			pricing: 'Virtual Office starts at ₹8,000/year (location-dependent)',
			delivery: 'often 24–48 hours (where applicable)',
			href: '/virtual-office/'
		},
		{
			stage: 'Stage 2: Dedicated Seats (coworking stability)',
			subtitle: 'Best when 1–15 people need consistent daily access',
			details: 'Dedicated seats in coworking without private office costs.',
			pricing: '₹3,000–8,000 per seat/month (city + building-dependent)',
			delivery: 'Immediate activation (typically)',
			href: '/coworking-space/'
		},
		{
			stage: 'Stage 3: Managed Office (private office, built for you)',
			subtitle: 'Best when your team needs privacy and brand control',
			details: 'Private office with flexible contracts without large upfront CAPEX.',
			pricing: 'Flexible 6–12 month contracts (provider and city dependent)',
			delivery: 'Customizable layout, branding, furniture',
			href: '/manage-office/'
		},
		{
			stage: 'Stage 4: Commercial Leasing (long-term HQ)',
			subtitle: 'Best when you\'re ready for a permanent headquarters',
			details: 'Multi-year commitment with full control and long-term stability.',
			pricing: '3–9 year terms; 5–7% annual rent escalation typical',
			delivery: 'Security deposit typically 3–6 months + stamp duty',
			href: '/commercial-leasing/'
		}
	];

	const decisionGuide = [
		{
			title: 'Choose Virtual Office if…',
			reasons: [
				'You need an address for registrations and credibility',
				'Your team is remote or field-based',
				'You want lowest overhead while staying verification-ready'
			],
			href: '/virtual-office/'
		},
		{
			title: 'Choose Dedicated Seats if…',
			reasons: [
				'1–15 people need daily access',
				'You want plug-and-play amenities',
				'You want flexibility to add/remove seats month to month'
			],
			href: '/coworking-space/'
		},
		{
			title: 'Choose Managed Office if…',
			reasons: [
				'10–200+ people need privacy and brand consistency',
				'You want a private suite with operations handled',
				'You want lower upfront cost vs traditional office'
			],
			href: '/manage-office/'
		},
		{
			title: 'Choose Commercial Leasing if…',
			reasons: [
				'You\'re committing for years, not months',
				'You need full control over your HQ and compliance',
				'You want negotiation and legal protection baked in'
			],
			href: '/commercial-leasing/'
		}
	];

	const whatXporateDoesItems = [
		{
			step: '1) Requirement mapping (fast + structured)',
			desc: 'We capture headcount, timeline, preferred micro-locations, budget range, privacy needs, and expansion plans.'
		},
		{
			step: '2) Shortlisting with trade-offs',
			desc: 'You receive 5–12 best-fit options with plain-English trade-offs (cost, commute, building quality, availability, policies).'
		},
		{
			step: '3) Fully loaded cost clarity',
			desc: 'We help you compare apples-to-apples (rent, maintenance, utilities, services, deposits, lock-ins) before you commit.'
		},
		{
			step: '4) Visits + activation',
			desc: 'Site visits and move-in coordination (where applicable). For virtual offices, we focus on documentation readiness.'
		},
		{
			step: '5) Transition planning',
			desc: 'When you outgrow your current stage, we map the next step: seats → private → managed → lease.'
		}
	];

	const moveUpTriggers = [
		{
			title: 'Virtual Office → Dedicated Seats',
			desc: 'Move when: 2–5+ team members need daily collaboration or client-facing presence.'
		},
		{
			title: 'Dedicated Seats → Managed Office',
			desc: 'Move when: you need privacy, brand control, team stability, and predictable operations.'
		},
		{
			title: 'Managed Office → Commercial Lease',
			desc: 'Move when: you\'re ready for multi-year commitments and want full control of your HQ.'
		}
	];

	const hybridAddOns = [
		{
			title: 'Meeting rooms (client calls, interviews, workshops)',
			desc: 'Book by the hour or day in professional locations.',
			href: '/meeting-rooms/'
		},
		{
			title: 'Day passes (flex work for occasional office days)',
			desc: 'A practical option for hybrid teams and visiting employees.',
			href: '/day-pass/'
		},
		{
			title: 'Event spaces (training, launches, offsites)',
			desc: 'Run corporate events without long-term venue contracts.',
			href: '/event-spaces/'
		}
	];

	const relatedSolutions = [
		{
			title: 'Start a Business (India)',
			desc: 'If you need incorporation + GST readiness along with workspace planning.',
			href: '/solutions/start-a-business-india/'
		},
		{
			title: 'Compliance & Governance (Ongoing)',
			desc: 'If you want filings and records kept investment-ready year-round.',
			href: '/solutions/compliance-governance/'
		},
		{
			title: 'Legal Support (Contracts + Notices)',
			desc: 'If you need contracts reviewed before you sign, or want risk-first drafting.',
			href: '/solutions/legal-support/'
		}
	];

	const faqItems = [
		{
			question: 'What\'s the difference between managed office and commercial leasing?',
			answer: 'Managed offices are private suites operated by a provider with services included and usually shorter terms. Commercial leases are longer-term traditional leases with deeper commitments and higher setup responsibility.'
		},
		{
			question: 'When should I move from coworking seats to a managed office?',
			answer: 'Usually when privacy, branding, and team stability become important—or when shared seating starts hurting productivity and culture.'
		},
		{
			question: 'Do you guarantee availability, pricing, or approvals?',
			answer: 'No. Inventory and pricing vary by city and partner availability. For any registrations/verifications, outcomes depend on authority checks. We focus on clean documentation and transparent execution.'
		},
		{
			question: 'Do you help with negotiation and legal checks for leases?',
			answer: 'Yes, for commercial leasing we can support negotiation, lease vetting, and clause protection (scope depends on the deal).'
		},
		{
			question: 'Can I run hybrid with meeting rooms and day passes instead of full-time seats?',
			answer: 'Yes. Many teams use meeting rooms and day passes as a flexible layer while they scale.'
		}
	];
</script>

<svelte:head>
	<title>Scale Your Workspace: Virtual Office to Lease | Xporate</title>
	<meta
		name="description"
		content="Scale from virtual office to dedicated seats, managed offices, and leases. Shortlists, cost trade-offs, negotiation support, and move-in planning. Book consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/scale-your-workspace/" />
	<meta property="og:title" content="Scale Your Workspace: Virtual Office to Lease | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/scale-your-workspace/" />
	<meta
		property="og:description"
		content="Scale from virtual office to dedicated seats, managed offices, and leases. Shortlists, cost trade-offs, negotiation support, and move-in planning. Book consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ─────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Scale your workspace without expensive wrong turns
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				Xporate helps teams move step-by-step: Virtual Office → Dedicated Seats → Managed Office → Commercial Lease. You get the right workspace for your stage, plus a clean transition plan (shortlist, cost comparison, documentation, and move-in support).
			</p>
			<p class="text-sm text-slate-400">
				Workspaces Marketplace + Transition Advisory (India)
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

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/locations/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Explore Locations →
			</a>
		</div>
	</div>
</section>

<!-- ─── WORKSPACE LADDER ─────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">The workspace ladder: choose the right stage</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			Most teams fail by jumping to the wrong stage. Use this ladder to pick what fits your size, timeline, and operating model.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each workspaceLadder as item (item.stage)}
				<a href={item.href} class="border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{item.stage}</h3>
					<p class="text-slate-700 font-medium mb-4">{item.subtitle}</p>
					<p class="text-slate-600 text-sm mb-4">{item.details}</p>
					<div class="space-y-2 text-sm text-slate-600">
						<p><strong>Pricing anchor:</strong> {item.pricing}</p>
						<p><strong>Document delivery:</strong> {item.delivery}</p>
					</div>
					<div class="mt-4 text-blue-600 font-semibold text-sm">Explore →</div>
				</a>
			{/each}
		</div>

		<div class="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
			<p class="text-slate-700 mb-4"><strong>Not sure which stage fits?</strong> Book a 15-minute consult <a href="/book/" class="text-blue-600 hover:underline">→</a></p>
		</div>
	</div>
</section>

<!-- ─── QUICK DECISION GUIDE ─────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Quick decision guide (pick your best fit)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each decisionGuide as guide (guide.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold text-slate-900 mb-4">{guide.title}</h3>
					<ul class="space-y-3 mb-6">
						{#each guide.reasons as reason (reason)}
							<li class="flex gap-3 text-slate-700">
								<span class="text-blue-600 flex-shrink-0">•</span>
								<span>{reason}</span>
							</li>
						{/each}
					</ul>
					<a href={guide.href} class="text-blue-600 hover:underline font-semibold">Explore →</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT XPORATE DOES ────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What Xporate does at every stage</h2>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
			{#each whatXporateDoesItems as item, idx (item.step)}
				<div class="relative">
					{#if idx < whatXporateDoesItems.length - 1}
						<div class="hidden md:block absolute top-20 left-full w-full h-1 bg-slate-200 -ml-6"></div>
					{/if}

					<div class="bg-slate-50 rounded-lg p-6 border border-slate-200">
						<div class="text-sm font-semibold text-blue-600 mb-2">{item.step}</div>
						<p class="text-slate-700 text-sm">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── MOVE-UP TRIGGERS ─────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">When to move up a stage (avoid overpaying)</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each moveUpTriggers as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── HYBRID ADD-ONS ───────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-8">Hybrid add-ons for distributed teams</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			You don't always need a full-time office to run full-time operations.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each hybridAddOns as addon (addon.title)}
				<a href={addon.href} class="block bg-slate-50 border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-2">{addon.title}</h3>
					<p class="text-slate-700 text-sm mb-4">{addon.desc}</p>
					<span class="text-blue-600 font-semibold text-sm">Learn more →</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ─── LOCATION STRATEGY ────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-8">Location strategy: pick the city and micro-market that fits your hiring</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			We help you choose a location that matches commute, talent pool, client access, and budget.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/locations/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Browse all cities →
			</a>
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold rounded-lg transition">
				Talk to a workspace advisor →
			</a>
		</div>
	</div>
</section>

<!-- ─── RELATED SOLUTIONS ────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Related solutions (for founders who want one partner)</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each relatedSolutions as step (step.href)}
				<a href={step.href} class="block bg-slate-50 border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
					<p class="text-slate-700 text-sm">{step.desc}</p>
					<div class="mt-4 text-blue-600 font-semibold text-sm">Learn more →</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ─── HOW IT WORKS ─────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">How it works</h2>

		<div class="space-y-8">
			<div class="flex gap-6 items-start">
				<div class="flex-shrink-0">
					<div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">1</div>
				</div>
				<div>
					<h3 class="text-lg font-bold text-slate-900 mb-2">Share your stage + timeline</h3>
					<p class="text-slate-700">Tell us your headcount, city preferences, and whether you need an address, seats, private space, or an HQ.</p>
				</div>
			</div>

			<div class="flex gap-6 items-start">
				<div class="flex-shrink-0">
					<div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">2</div>
				</div>
				<div>
					<h3 class="text-lg font-bold text-slate-900 mb-2">We shortlist and compare</h3>
					<p class="text-slate-700">We send best-fit options with a clear comparison of costs and constraints.</p>
				</div>
			</div>

			<div class="flex gap-6 items-start">
				<div class="flex-shrink-0">
					<div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">3</div>
				</div>
				<div>
					<h3 class="text-lg font-bold text-slate-900 mb-2">We coordinate visits and final selection</h3>
					<p class="text-slate-700">You pick the best option with clarity—not guesswork.</p>
				</div>
			</div>

			<div class="flex gap-6 items-start">
				<div class="flex-shrink-0">
					<div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">4</div>
				</div>
				<div>
					<h3 class="text-lg font-bold text-slate-900 mb-2">Activate + plan your next scale step</h3>
					<p class="text-slate-700">Move-in support (as applicable) and a simple plan for when to upgrade.</p>
				</div>
			</div>
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
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Get a workspace scale plan</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Tell us your team size, city, timeline, and privacy needs. We'll recommend the best stage and shortlist options.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/locations/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Explore Locations →
			</a>
		</div>

		<!-- WhatsApp CTA -->
		<div class="mt-8 pt-8 border-t border-slate-700">
			<p class="text-slate-300 mb-4">Prefer WhatsApp? <a href="https://wa.me/917060706076" class="text-blue-400 hover:text-blue-300 underline">Message us here →</a></p>
		</div>
	</div>
</section>
