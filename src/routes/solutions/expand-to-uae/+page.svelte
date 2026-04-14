<script lang="ts">
	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const trustBullets = [
		'Trade license + office lease + visa workflow bundled',
		'Clear zone selection guidance (Mainland vs Free Zone)',
		'On-ground PRO support for medical + biometrics steps',
		'Documentation-ready approach to reduce preventable delays',
		'Renewal-ready handover (what to renew, when)'
	];

	const whyExpand = [
		{
			title: 'Global operations + international billing',
			desc: 'A UAE entity can support cross-border contracting and international billing structures (implementation depends on your model).'
		},
		{
			title: 'Residency and mobility',
			desc: 'A residency visa can enable practical on-ground operations and smoother vendor and banking processes (eligibility dependent).'
		},
		{
			title: 'Tax planning clarity (not advice)',
			desc: 'UAE tax frameworks can be attractive for certain businesses. We can guide you to the right advisors and help you remain documentation-ready.'
		}
	];

	const whatsIncluded = [
		{
			title: '1) Trade license (1 year, renewable)',
			desc: 'Company incorporation via Mainland (DED) or a strategic Free Zone (zone selection depends on activity and priorities).'
		},
		{
			title: '2) Legal office lease (Smart-Desk/Ejari)',
			desc: 'A compliant registered address required for licensing and commonly used for banking documentation.'
		},
		{
			title: '3) 1 residency visa workflow + Emirates ID',
			desc: 'Investor/Partner visa process including entry permit, medical, biometrics, and Emirates ID steps (timelines vary by authority and appointments).'
		}
	];

	const forWho = [
		{
			title: 'The Global CEO',
			desc: 'Indian founders who want UAE residency to operate globally and manage international client workflows.'
		},
		{
			title: 'The Digital Entrepreneur',
			desc: 'E-commerce, IT, or SaaS founders exploring UAE as a global HQ option.'
		},
		{
			title: 'The Consultant',
			desc: 'Professionals who benefit from a Dubai-based presence for higher-ticket international engagements.'
		},
		{
			title: 'The Investor',
			desc: 'Individuals who want a legitimate UAE residency + business footprint (eligibility dependent).'
		}
	];

	const timeline = [
		{
			phase: 'Phase 1: Setup (Day 1–3)',
			title: 'Name reservation + initial approval',
			desc: 'Name reservation + initial approval from UAE authorities.'
		},
		{
			phase: 'Phase 2: License (Day 4–5)',
			title: 'Trade license issuance',
			desc: 'Trade license issuance + office lease (Smart-Desk/Ejari) setup.'
		},
		{
			phase: 'Phase 3: E-Visa (Day 6–10)',
			title: 'Establishment card + entry permit',
			desc: 'Establishment card + entry permit (e-visa) issuance.'
		},
		{
			phase: 'Phase 4: Medical (Day 11–13)',
			title: 'Medical fitness test + biometrics',
			desc: 'Client visits Dubai for medical fitness test + biometrics.'
		},
		{
			phase: 'Phase 5: ID (Day 14–15)',
			title: 'Resident visa status + Emirates ID',
			desc: 'Resident visa status change + Emirates ID processing.'
		}
	];

	const requirements = [
		{
			title: 'Passport scan',
			desc: 'High-quality color scan (minimum 6 months validity).'
		},
		{
			title: 'Photo',
			desc: 'Digital passport-size photo with white background.'
		},
		{
			title: 'Activity choice',
			desc: 'Define your activity (example: consultancy, trading, e-commerce).'
		},
		{
			title: 'Entry record (if applicable)',
			desc: 'UID number or old entry stamp details.'
		}
	];

	const deliverables = [
		{
			title: 'Trade license (1 year, renewable)',
			desc: 'Your official UAE company license.'
		},
		{
			title: 'MOA + share certificate',
			desc: 'Core incorporation documents that establish legal ownership.'
		},
		{
			title: 'Lease agreement (Smart-Desk/Ejari)',
			desc: 'Official registered address for licensing and commonly used in banking documentation.'
		},
		{
			title: 'Residency visa + Emirates ID',
			desc: 'One stamped visa (validity depends on authority/category) and the physical Emirates ID.'
		},
		{
			title: 'On-ground PRO support',
			desc: 'Guidance through medical and biometrics appointments in Dubai.'
		}
	];

	const faqItems = [
		{
			question: 'What exactly is included in Dubai Business-in-a-Box?',
			answer: 'Trade license + legal office lease (Smart-Desk/Ejari) + one residency visa workflow including Emirates ID steps.'
		},
		{
			question: 'Do you guarantee visa or banking approvals?',
			answer: 'No. Outcomes depend on your profile, documents, and authority/bank checks. We focus on documentation readiness and clean execution.'
		},
		{
			question: 'How long does it take?',
			answer: 'A typical execution cycle is 15 days, but timelines can vary based on activity approvals, appointments, and document readiness.'
		},
		{
			question: 'Mainland or Free Zone—what\'s better?',
			answer: 'It depends on your activity, target customers, visa needs, and renewal preferences. We\'ll recommend the best fit during consultation.'
		},
		{
			question: 'Do I need to travel to Dubai?',
			answer: 'Yes, typically for medical and biometrics steps in the residency process.'
		},
		{
			question: 'What documents do I need from my side?',
			answer: 'Passport scan (minimum validity requirement), a digital photo, your activity choice, and prior UAE entry record details if applicable.'
		}
	];
</script>

<svelte:head>
	<title>Expand to Dubai / UAE | Business Setup + Office + 1 Visa | Xporate</title>
	<meta
		name="description"
		content="Dubai Business-in-a-Box: trade license + legal office lease + 1 residency visa workflow. Packages from AED 14,500–18,500 (zone-dependent). 15-day cycle. Book consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/expand-to-uae/" />
	<meta property="og:title" content="Expand to Dubai / UAE | Business Setup + Office + 1 Visa | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/expand-to-uae/" />
	<meta
		property="og:description"
		content="Dubai Business-in-a-Box: trade license + legal office lease + 1 residency visa workflow. Packages from AED 14,500–18,500 (zone-dependent). 15-day cycle. Book consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ───────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Expand to Dubai / UAE with one bundled workflow
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				Dubai Business-in-a-Box combines three essentials into one clean process: Company registration (Mainland DED or selected Free Zones), A compliant business address (Smart-Desk/Ejari lease), and One residency visa workflow (Investor/Partner visa + Emirates ID).
			</p>
			<p class="text-sm text-slate-400">
				Setup + Office + 1 Visa (single point of contact)
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
				<strong>Compliance note:</strong> We don't guarantee approvals. Licensing, visas, and banking outcomes depend on your profile, activity, documents, and authority/bank checks. We focus on documentation readiness and clean execution.
			</p>
		</div>

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/services/dubai-business-in-a-box/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Explore Dubai Business-in-a-Box →
			</a>
		</div>
	</div>
</section>

<!-- ─── WHY EXPAND TO UAE ────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Why founders expand to UAE</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each whyExpand as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT'S INCLUDED ──────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What "Dubai Business-in-a-Box" actually includes</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			This is a bundled setup so you don't have to coordinate license agents, office providers, and PRO/visa teams separately.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each whatsIncluded as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Pricing section -->
		<div class="mt-16">
			<h3 class="text-2xl font-bold mb-8">Pricing (transparent anchor)</h3>
			<p class="text-lg text-slate-700 mb-8 max-w-3xl">
				Bundled packages typically start at AED 14,500–18,500 (zone-dependent).
			</p>

			<div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
				<h4 class="font-semibold text-slate-900 mb-2">Why bundles usually cost less than coordinating 3 agents</h4>
				<p class="text-slate-700 mb-4">
					Many founders pay separately for license agent, office/Ejari provider, and visa/PRO support. Bundling reduces duplicate fees and handoffs.
				</p>
				<div class="flex flex-col sm:flex-row gap-4">
					<a href="/services/dubai-business-in-a-box/" class="inline-flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-sm">
						See full inclusions + onboarding →
					</a>
					<a href="/book/" class="inline-flex items-center justify-center px-6 py-2 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold rounded-lg transition text-sm">
						Book consultation →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ─── WHO THIS IS FOR ──────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Who this is built for</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each forWho as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── MAINLAND VS FREE ZONE ───────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-8">Mainland vs Free Zone: how we help you choose</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			We'll recommend the best fit based on your activity, client location, visa needs, and cost/renewal preferences.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="bg-white border border-slate-200 rounded-lg p-8">
				<h3 class="text-lg font-bold mb-4 text-slate-900">Mainland (DED)</h3>
				<p class="text-slate-700">Often preferred when you want broader local market flexibility and certain operational needs.</p>
			</div>
			<div class="bg-white border border-slate-200 rounded-lg p-8">
				<h3 class="text-lg font-bold mb-4 text-slate-900">Free Zones (examples: IFZA, RAKEZ, Meydan)</h3>
				<p class="text-slate-700">Often preferred for lean setups and specific activity structures.</p>
			</div>
		</div>
	</div>
</section>

<!-- ─── 15-DAY CYCLE ────────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Execution timeline: the 15-day cycle</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Actual timelines can vary based on activity approvals, appointment availability, and document readiness.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
			{#each timeline as step, idx (step.title)}
				<div class="relative">
					{#if idx < timeline.length - 1}
						<div class="hidden md:block absolute top-20 left-full w-full h-1 bg-slate-700 -ml-6"></div>
					{/if}

					<div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
						<div class="text-sm font-semibold text-blue-400 mb-2">{step.phase}</div>
						<h4 class="text-base font-bold mb-3">{step.title}</h4>
						<p class="text-slate-400 text-sm">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── REQUIREMENTS ─────────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What we need from you (requirements)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each requirements as req (req.title)}
				<div class="flex gap-4">
					<div class="flex-shrink-0 mt-1">
						<svg class="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold text-slate-900 mb-1">{req.title}</h4>
						<p class="text-slate-700 text-sm">{req.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── DELIVERABLES ────────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What Xporate provides (deliverables)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each deliverables as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Banking readiness -->
		<div class="mt-16 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
			<h3 class="text-xl font-bold mb-4 text-slate-900">Banking readiness (reduce preventable delays)</h3>
			<p class="text-slate-700 mb-4">Bank account opening can be one of the toughest steps for new UAE entities. We help you prepare a clean bank-file and guide the sequence so documentation remains consistent across license, lease, and KYC.</p>

			<h4 class="font-semibold text-slate-900 mb-3">What we can do</h4>
			<ul class="space-y-2 mb-6 text-slate-700">
				<li>• Help you prepare a documentation-ready bank file</li>
				<li>• Coordinate the right sequencing and appointments (as applicable)</li>
				<li>• Reduce mismatch issues that commonly trigger rework</li>
			</ul>

			<h4 class="font-semibold text-slate-900 mb-2">What we can't promise</h4>
			<p class="text-slate-700">Bank decisions are made by the bank and compliance teams. We don't guarantee approvals.</p>
		</div>
	</div>
</section>

<!-- ─── WHY XPORATE ──────────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Why founders choose Xporate for UAE setup</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="border border-slate-200 rounded-lg p-8">
				<h3 class="text-lg font-semibold mb-3 text-slate-900">Single point of contact</h3>
				<p class="text-slate-700">One workflow for license + office lease + visa steps (no vendor chaos).</p>
			</div>
			<div class="border border-slate-200 rounded-lg p-8">
				<h3 class="text-lg font-semibold mb-3 text-slate-900">What others charge extra for</h3>
				<p class="text-slate-700">Many setup firms charge extra for establishment card and PRO assistance. We include the hand-holding across steps.</p>
			</div>
			<div class="border border-slate-200 rounded-lg p-8">
				<h3 class="text-lg font-semibold mb-3 text-slate-900">On-ground support</h3>
				<p class="text-slate-700">Support through medical/biometrics steps, not just "digital forms."</p>
			</div>
		</div>
	</div>
</section>

<!-- ─── FAQ SECTION ──────────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
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
						<div class="px-6 py-4 bg-white border-t border-slate-200">
							<p class="text-slate-700 leading-relaxed">{item.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FINAL CTA SECTION ────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Book a UAE expansion consult</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Tell us your activity, whether you prefer Mainland or Free Zone (if you have a preference), and your timeline. We'll map the cleanest route and confirm exact inclusions.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/services/dubai-business-in-a-box/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Explore Dubai Business-in-a-Box →
			</a>
		</div>

		<!-- WhatsApp CTA -->
		<div class="mt-8 pt-8 border-t border-slate-700">
			<p class="text-slate-300 mb-4">Prefer WhatsApp? <a href="https://wa.me/917060706076" class="text-blue-400 hover:text-blue-300 underline">Message us here →</a></p>
		</div>
	</div>
</section>
