<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/solutions/get-funding-ready/+page.svelte        ║
║  URL:   /solutions/get-funding-ready/                              ║
║  ROLE:  Solution page for DPIIT / Startup India funding readiness  ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → repeating              ║
║  · Cards, buttons, and accordion follow existing patterns           ║
║  · Hero section uses bold typography with trust bullets             ║
║  · FAQ accordion with local state management                        ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Uses Svelte 5 runes ($state) for accordion interactivity         ║
║  · Inline HTML + Tailwind CSS only (no component imports)           ║
║  · SEO: svelte:head with full meta tags and canonical URL           ║
║  · All links use href for navigation                                ║
╠══════════════════════════════════════════════════════════════════════╣
║  CMS NOTES                                                            ║
║  · Pricing: ₹30,000 flat (non-negotiable)                           ║
║  · FAQ items can be CMS-driven in production                        ║
║  · Trust bullets and card content are hardcoded for MVP             ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const trustBullets = [
		'Flat fee: ₹30,000 (non-negotiable)',
		'Innovation statement drafting (short + expanded)',
		'Pitch deck optimization (10–15 slides)',
		'Query/clarification handling support (case-dependent)',
		'Eligibility-first guidance (don\'t waste cycles if you don\'t qualify)'
	];

	const whoThisIsFor = [
		{
			title: 'Early-stage startups preparing for investors',
			desc: 'Use DPIIT recognition as a credibility signal and to unlock eligibility pathways (where applicable).'
		},
		{
			title: 'Startups applying for Startup India schemes',
			desc: 'A cleaner narrative and documentation pack reduces preventable rejections and repeat queries.'
		},
		{
			title: 'Founders building a compliance-first brand',
			desc: 'If you want your incorporation, filings, and story to align across portals, decks, and contracts.'
		}
	];

	const whatDPIITHelps = [
		{
			title: 'Credibility and documentation signal',
			desc: 'A structured recognition can help during vendor onboarding, partnerships, and investor diligence.'
		},
		{
			title: 'Scheme eligibility pathways',
			desc: 'Some Startup India programs and processes reference DPIIT status for eligibility checks.'
		}
	];

	const approach = [
		{
			step: '1) Eligibility screening',
			desc: 'We confirm baseline eligibility signals before investing effort.'
		},
		{
			step: '2) Innovation narrative crafting',
			desc: 'We draft your innovation statement (short + expanded) to match your model and evidence.'
		},
		{
			step: '3) Consistency across documents',
			desc: 'We ensure your entity details, founder details, and core story align across portals and your deck.'
		}
	];

	const whatsIncluded = [
		'DPIIT recognition application support',
		'Innovation statement drafting',
		'Pitch deck optimization (10–15 slides)',
		'Government query/clarification handling',
		'Guidance for 80-IAC (tax exemption) readiness (where eligible)',
		'Seed fund / SISFS application support (where eligible)'
	];

	const process = [
		{
			title: '1) Intake + eligibility checkpoint',
			desc: 'We capture your model, traction, team, and proof points to sanity-check fit.'
		},
		{
			title: '2) Document collection + evidence mapping',
			desc: 'We map what you have vs what the portal expects and fill gaps.'
		},
		{
			title: '3) Narrative + drafting',
			desc: 'We draft the innovation statement and application language.'
		},
		{
			title: '4) Submission + queries',
			desc: 'We support submission and handle clarifications (case-dependent).'
		},
		{
			title: '5) Next steps',
			desc: 'If your goal is investment readiness, we can connect follow-on work: contracts, compliance, and structure.'
		}
	];

	const whatWeNeed = [
		{
			title: 'Business summary',
			desc: 'What you do, who you serve, and why your approach is innovative.'
		},
		{
			title: 'Evidence',
			desc: 'Screenshots, product docs, traction metrics, IP filings (if any), customer proof, or demos.'
		},
		{
			title: 'Founder and entity details',
			desc: 'Incorporation details, PAN, and accurate founder KYC.'
		},
		{
			title: 'Pitch materials (if any)',
			desc: 'Existing deck, one-pager, or investor notes.'
		}
	];

	const commonIssues = [
		{
			title: 'Generic innovation narrative',
			desc: 'We tailor your story to measurable differentiation.'
		},
		{
			title: 'Missing proof points',
			desc: 'We identify what evidence is missing and how to present what you do have.'
		},
		{
			title: 'Inconsistent details',
			desc: 'We align names, dates, and entity details across documents and your deck.'
		}
	];

	const relatedSolutions = [
		{
			title: 'Start a Business (India)',
			desc: 'If you\'re not incorporated yet or need company + GST alignment.',
			href: '/solutions/start-a-business-india/'
		},
		{
			title: 'Compliance & Governance',
			desc: 'If you want your filings and books investment-ready year-round.',
			href: '/solutions/compliance-governance/'
		},
		{
			title: 'Legal Support',
			desc: 'If you need NDAs, founder agreements, MSAs, or investor-ready contracts.',
			href: '/solutions/legal-support/'
		}
	];

	const faqItems = [
		{
			question: 'Do you guarantee DPIIT recognition or funding?',
			answer: 'No. Outcomes depend on eligibility and government review. We focus on documentation readiness, narrative clarity, and consistency.'
		},
		{
			question: 'What is included in the ₹30,000 package?',
			answer: 'DPIIT recognition support, innovation statement drafting, deck optimization (10–15 slides), query handling support (case-dependent), and guidance for 80-IAC and SISFS readiness where eligible.'
		},
		{
			question: 'Can you help if I don\'t have a deck yet?',
			answer: 'Yes. We can help you structure a clean deck flow and create an optimized 10–15 slide version.'
		},
		{
			question: 'Is this service only for tech startups?',
			answer: 'Not necessarily. Eligibility depends on DPIIT rules and how your innovation is demonstrated.'
		},
		{
			question: 'Should I do incorporation first or DPIIT first?',
			answer: 'Usually you\'ll need a valid entity. We\'ll advise the correct sequence during consultation.'
		}
	];
</script>

<svelte:head>
	<title>Get Funding-Ready (DPIIT / Startup India) | Xporate</title>
	<meta
		name="description"
		content="DPIIT recognition + Startup India scheme support (where eligible). Innovation statement drafting, deck optimization, and query handling. Flat ₹30,000. Book consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/get-funding-ready/" />
	<meta property="og:title" content="Get Funding-Ready (DPIIT / Startup India) | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/get-funding-ready/" />
	<meta
		property="og:description"
		content="DPIIT recognition + Startup India scheme support (where eligible). Innovation statement drafting, deck optimization, and query handling. Flat ₹30,000. Book consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ─────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Get funding-ready with DPIIT recognition + Startup India support
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				This solution helps eligible startups present a credibility-first application—so you can reduce preventable delays and strengthen your case for recognition and related schemes.
			</p>
			<p class="text-sm text-slate-400">
				DPIIT Recognition • Startup India workflows • Documentation + narrative readiness
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
				<strong>Compliance note:</strong> We don't guarantee recognition, funding, tax exemptions, or approvals. Outcomes depend on eligibility and government review. We focus on documentation readiness, clarity, and consistency.
			</p>
		</div>

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl">
			<a href="/services/startup-india-dpiit-support/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Explore DPIIT Service →
			</a>
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ─── WHO THIS IS FOR ──────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Who this is for</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each whoThisIsFor as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT DPIIT HELPS WITH ───────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-8">What DPIIT recognition can help with (high level)</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			DPIIT recognition can support credibility and unlock scheme eligibility pathways (where applicable). Actual benefits depend on your eligibility and government evaluation.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each whatDPIITHelps as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-4 text-slate-900">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── THE XPORATE APPROACH ────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">The Xporate approach: eligibility-first + narrative-first</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			Most applications fail because the story is generic or the documents don't match. We focus on three pillars: eligibility checks, innovation narrative, and consistency across proofs.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each approach as item (item.step)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{item.step}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT'S INCLUDED ──────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-8">What's included (scope)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
			{#each whatsIncluded as item (item)}
				<div class="bg-white border border-slate-200 rounded-lg p-6 flex gap-4">
					<svg class="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					<p class="text-slate-700">{item}</p>
				</div>
			{/each}
		</div>

		<!-- Pricing -->
		<div class="bg-white border border-slate-200 rounded-lg p-8">
			<h3 class="text-xl font-bold text-slate-900 mb-6">Pricing</h3>
			<h4 class="text-lg font-bold text-slate-900 mb-4">Flat fee: ₹30,000 (non-negotiable)</h4>
			<p class="text-slate-700 mb-4">This covers the defined scope above. Any additional services (company setup, compliance, legal) are separate.</p>

			<div class="flex flex-col sm:flex-row gap-4 mt-8">
				<a href="/services/startup-india-dpiit-support/" class="inline-flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-sm">
					Start onboarding →
				</a>
				<a href="/book/" class="inline-flex items-center justify-center px-6 py-2 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold rounded-lg transition text-sm">
					Book consultation →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ─── HOW IT WORKS ────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">How it works</h2>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
			{#each process as step, idx (step.title)}
				<div class="relative">
					{#if idx < process.length - 1}
						<div class="hidden md:block absolute top-20 left-full w-full h-1 bg-slate-200 -ml-6"></div>
					{/if}

					<div class="bg-slate-50 rounded-lg p-6 border border-slate-200">
						<div class="text-sm font-semibold text-blue-600 mb-2">{step.title}</div>
						<p class="text-slate-700 text-sm">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT WE NEED FROM YOU ───────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What we need from you (inputs)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each whatWeNeed as req (req.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{req.title}</h3>
					<p class="text-slate-700">{req.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── COMMON ISSUES ────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Common reasons applications get stuck (and how we reduce that risk)</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each commonIssues as item (item.title)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── RELATED SOLUTIONS ────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Related solutions</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each relatedSolutions as step (step.href)}
				<a href={step.href} class="block bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
					<p class="text-slate-700 text-sm">{step.desc}</p>
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
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Start your DPIIT / Startup India readiness</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Share your model, proof points, and current stage—we'll confirm fit and map the fastest compliant route.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/services/startup-india-dpiit-support/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Start onboarding →
			</a>
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				Book consultation →
			</a>
		</div>

		<!-- WhatsApp CTA -->
		<div class="mt-8 pt-8 border-t border-slate-700">
			<p class="text-slate-300 mb-4">Prefer WhatsApp? <a href="https://wa.me/917060706076" class="text-blue-400 hover:text-blue-300 underline">Message us here →</a></p>
		</div>
	</div>
</section>
