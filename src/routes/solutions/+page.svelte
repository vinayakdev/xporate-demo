<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const solutionCards = [
		{
			title: 'Start a Business (India)',
			desc: 'Company incorporation + GST workflow alignment to reduce mismatch delays.',
			href: '/solutions/start-a-business-india/'
		},
		{
			title: 'Compliance & Governance (Ongoing)',
			desc: 'Monthly compliance management so your entity stays active and filing-proof.',
			href: '/solutions/compliance-governance/'
		},
		{
			title: 'Legal Support (Contracts + Notices)',
			desc: 'Risk-first drafting + reviews (DPDP-aware clauses) + notice/dispute support.',
			href: '/solutions/legal-support/'
		},
		{
			title: 'Expand to Dubai / UAE',
			desc: 'Dubai setup + compliant office lease + 1 visa workflow—one coordinated cycle.',
			href: '/solutions/expand-to-uae/'
		},
		{
			title: 'Scale Your Workspace (Virtual → Seats → Managed → Lease)',
			desc: 'Plan the right workspace step for your team size, timeline, and budget.',
			href: '/solutions/scale-your-workspace/'
		},
		{
			title: 'Get Funding-Ready (DPIIT / Startup India)',
			desc: 'Eligibility-first support for DPIIT recognition + related Startup India workflows.',
			href: '/solutions/get-funding-ready/'
		}
	];

	const whyWorks = [
		{
			title: 'Verification-first documentation',
			desc: 'We build complete documentation packs aligned to real-world checks (not paper-only).'
		},
		{
			title: 'Workflow map before execution',
			desc: 'You get a step-by-step plan: what happens first, what\'s needed, what\'s bundled, and what depends on authorities.'
		},
		{
			title: 'Single point of contact',
			desc: 'One owner coordinating setup + compliance + legal + Dubai workflows (scope-based).'
		}
	];

	const howItWorks = [
		{
			n: '1',
			title: 'Requirement capture',
			desc: 'We confirm your entity type (or planned), founders count, city/state plan, GST needs, and timeline.'
		},
		{
			n: '2',
			title: 'Checklist + workflow plan',
			desc: 'We share an exact checklist and execution sequence designed to reduce preventable delays.'
		},
		{
			n: '3',
			title: 'Execution + query handling',
			desc: 'We coordinate drafting, filing support, and responses to queries (case-dependent).'
		},
		{
			n: '4',
			title: 'Ongoing support or next transition',
			desc: 'Stay compliant on retainer, refresh contracts, expand states, or scale your workspace.'
		}
	];

	const solutionPreviews = [
		{
			title: 'Start a Business (India)',
			summary: 'Best for founders who want a clean legal entity + tax identity without mismatches.',
			pricing: 'Company setup starts at ₹15,000 + GST. GST-only starts at ₹12,500 + 18% GST.',
			sequence: 'DSC/DIN → Name reservation → Incorporation filing → GST filing → bank linking + mandatory signage setup.',
			includes: 'COI + PAN/TAN + GST certificate + MOA/AOA drafting support + query handling (case-dependent).',
			solutionLink: '/solutions/start-a-business-india/',
			serviceLink: '/services/company-gst-registration/'
		},
		{
			title: 'Compliance & Governance (Ongoing)',
			summary: 'Best for growing entities staying active across filings and governance checkpoints.',
			pricing: 'Monthly retainer starts at ₹8,000 + GST (scope and caps apply).',
			sequence: 'Monthly income tax prep → TDS workflows → GST reconciliation and filing → ROC/secretarial governance.',
			includes: 'Bookkeeping support + income tax/TDS workflows + GST monthly filings and reconciliation + ROC/secretarial governance.',
			solutionLink: '/solutions/compliance-governance/',
			serviceLink: '/services/compliance-management/'
		},
		{
			title: 'Legal Support (Contracts + Notices)',
			summary: 'Best for protecting agreements and responding to regulatory notices.',
			pricing: 'Contract review starts at ₹5,000 + GST. Dispute support on case basis.',
			sequence: 'Risk audit → Drafting or review → DPDP/legal checklist → approval and execution.',
			includes: 'Risk-first contract drafting and reviews + DPDP-aware clauses + notice and dispute support.',
			solutionLink: '/solutions/legal-support/',
			serviceLink: '/services/legal-support/'
		},
		{
			title: 'Expand to Dubai / UAE',
			summary: 'Best for teams launching in UAE with coordinated setup, lease, and visa workflows.',
			pricing: 'Dubai Business-in-a-Box starts at AED 8,000 (package varies by zone/activity).',
			sequence: 'License application → Office lease negotiation → Emirates ID + visa workflow → Banking setup.',
			includes: 'Company registration + compliant office lease + 1 residency visa workflow including Emirates ID steps.',
			solutionLink: '/solutions/expand-to-uae/',
			serviceLink: '/services/dubai-business-in-a-box/'
		},
		{
			title: 'Get Funding-Ready (DPIIT / Startup India)',
			summary: 'Best for startups aiming for DPIIT recognition and related funding pathways.',
			pricing: 'DPIIT support starts at ₹10,000 + GST (varies by recognition type).',
			sequence: 'Eligibility check → Application prep → Documentation audit → Submission and follow-up.',
			includes: 'DPIIT eligibility check + recognition support + Startup India registration + compliance audit.',
			solutionLink: '/solutions/get-funding-ready/',
			serviceLink: '/services/dpiit-startup-india-support/'
		},
		{
			title: 'Scale Your Workspace',
			summary: 'Best for teams planning workspace transitions from virtual to managed to leased.',
			pricing: 'Workspace planning: Free. Lease negotiation support: ₹15,000 + GST.',
			sequence: 'Current state audit → Growth plan → Shortlist and compare → Activate and transition.',
			includes: 'Workspace roadmap + comparison support + lease negotiation guidance + transition coordination.',
			solutionLink: '/solutions/scale-your-workspace/',
			serviceLink: '/services/workspace-scaling/'
		}
	];

	const workspaces = [
		{ label: 'Virtual Office', href: '/virtual-office/' },
		{ label: 'Coworking Space', href: '/coworking-space/' },
		{ label: 'Managed Office', href: '/manage-office/' },
		{ label: 'Commercial Leasing', href: '/commercial-leasing/' },
		{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
		{ label: 'Day Pass', href: '/day-pass/' },
		{ label: 'Event Spaces', href: '/event-spaces/' }
	];

	const resources = [
		{ label: 'Templates & Checklists', href: '/resources/templates/' },
		{ label: 'Compliance Calendar', href: '/resources/compliance-calendar/' },
		{ label: 'Comparisons', href: '/resources/comparisons/' },
		{ label: 'Lease Negotiation Checklist', href: '/resources/lease-negotiation-checklist/' }
	];

	const faqs = [
		{
			q: 'Do you guarantee approvals for GST/MCA/UAE visa/banking?',
			a: 'No. We focus on documentation completeness, consistency, and verification readiness to reduce preventable delays.'
		},
		{
			q: 'Can you work with my existing CA/CS?',
			a: 'Yes. We coordinate documentation and workflow sequencing while your CA/CS handles representation and filings.'
		},
		{
			q: 'What\'s the fastest way to start in India: Company + GST together or separately?',
			a: 'It depends on your entity type and timeline. Bundling can help keep COI and GST details aligned, reducing mismatch risk.'
		},
		{
			q: 'What does compliance management typically cover?',
			a: 'Bookkeeping + income tax/TDS workflows + GST monthly filings and reconciliation + ROC/secretarial governance (scope and caps apply).'
		},
		{
			q: 'What\'s included in Dubai Business-in-a-Box?',
			a: 'Company registration + compliant office lease + 1 residency visa workflow including Emirates ID steps (package varies by zone/activity).'
		}
	];
</script>

<svelte:head>
	<title>Xporate Solutions | Start, Comply, Legal + Dubai</title>
	<meta
		name="description"
		content="Corporate solutions: Company+GST setup, compliance management, contracts, DPIIT/Startup India support, and Dubai Business-in-a-Box. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/solutions/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Corporate backbone solutions (India + Dubai)
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Start a company, stay compliant, protect contracts, expand to UAE, and get funding-ready—without
				juggling 3–5 disconnected vendors. Xporate maps the workflow first, then executes in sequence to
				reduce preventable delays.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Start a Business | Compliance & Governance | Legal Support | Dubai / UAE Expansion | Funding-Ready
				| Workspace Transitions
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Verification-first documentation approach (reduces rework)',
					'Single point of contact across setup + compliance + legal + UAE (scope-based)',
					'Clear checklists before filing (fewer back-and-forth queries)',
					'Transparent pricing anchors + scope boundaries'
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
					We don't guarantee approvals. Acceptance for registrations, verifications, visas, and banking
					depends on your case and the authority's checks. We focus on documentation completeness,
					consistency, and verification readiness.
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
					href="/services/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Services Index →
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

<!-- QUICK ROUTER -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Choose your outcome</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each solutionCards as card (card.href)}
				<a
					href={card.href}
					class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-600">{card.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-500">{card.desc}</p>
					<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
						Learn more →
					</span>
				</a>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<p class="text-sm text-slate-600">
				Not sure what you need?
				<a href="/book/" class="font-medium text-orange-600 transition hover:text-orange-700">
					Book a 15-minute consult →
				</a>
			</p>
		</div>
		<div class="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
			Already have a CA? We work alongside your CA.
		</div>
	</div>
</section>

<!-- WHY THIS WORKS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Why this works (and why most setups get delayed)</h2>
		<p class="mx-auto mb-10 max-w-2xl text-center text-slate-600">
			Most delays come from inconsistencies and missing proofs—especially across address, business activity,
			signatory authority, and document formats. Xporate's role is to make you documentation-ready and
			verification-ready, then execute in the correct sequence.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each whyWorks as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold">How it works</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howItWorks as step (step.n)}
				<div class="rounded-xl bg-white/10 p-6 ring-1 ring-white/10">
					<div
						class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
					>
						{step.n}
					</div>
					<h3 class="font-semibold text-white">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SOLUTION PREVIEWS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Solution previews</h2>
		<div class="space-y-3">
			{#each solutionPreviews as item, i (i)}
				<div class="rounded-xl border border-slate-200">
					<button
						onclick={() => toggleAccordion(i)}
						class="w-full px-6 py-4 text-left transition hover:bg-slate-50"
					>
						<div class="flex items-center justify-between gap-4">
							<h3 class="font-semibold text-slate-900">{item.title}</h3>
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
							<div class="space-y-4 text-sm">
								<div>
									<p class="font-semibold text-slate-900">{item.summary}</p>
								</div>
								<div>
									<p class="font-semibold text-slate-700">Pricing anchors:</p>
									<p class="mt-1 text-slate-600">{item.pricing}</p>
								</div>
								<div>
									<p class="font-semibold text-slate-700">Typical sequence:</p>
									<p class="mt-1 text-slate-600">{item.sequence}</p>
								</div>
								<div>
									<p class="font-semibold text-slate-700">What you get:</p>
									<p class="mt-1 text-slate-600">{item.includes}</p>
								</div>
								<div class="flex gap-3 pt-2">
									<a
										href={item.solutionLink}
										class="inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700"
									>
										Solution page →
									</a>
									<a
										href={item.serviceLink}
										class="inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700"
									>
										Service →
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ALREADY HAVE A CA -->
<section class="bg-orange-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Already have a CA?</h2>
		<p class="mb-10 text-center text-slate-600">We work alongside your CA.</p>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-orange-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">What Xporate handles</h3>
				<ul class="mt-4 space-y-2 text-sm text-slate-600">
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Documentation packs</span>
					</li>
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Workflow sequencing</span>
					</li>
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Verification readiness</span>
					</li>
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Coordination and implementation support</span>
					</li>
				</ul>
			</div>
			<div class="rounded-2xl border border-orange-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">What your CA/CS can continue handling</h3>
				<ul class="mt-4 space-y-2 text-sm text-slate-600">
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Statutory representation and filings</span>
					</li>
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Attestations</span>
					</li>
					<li class="flex gap-2">
						<span class="text-orange-500">•</span>
						<span>Finance and tax decisions</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="mt-8 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- WORKSPACES ESCAPE HATCH -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Looking for a workspace instead?</h2>
		<p class="mb-10 text-center text-slate-600">
			If your goal is a virtual office, coworking, managed office, leasing, meeting room, day pass, or event
			space—use the Workspaces marketplace hubs.
		</p>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each workspaces as ws (ws.href)}
				<a
					href={ws.href}
					class="rounded-lg border border-slate-200 bg-white px-6 py-4 text-center text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{ws.label} →
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- RESOURCES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Resources to plan cleanly (and avoid common delays)</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each resources as res (res.href)}
				<a
					href={res.href}
					class="rounded-lg border border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{res.label} →
				</a>
			{/each}
		</div>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<a href="/blogs/" class="text-sm font-medium text-orange-600 transition hover:text-orange-700">
				Blog →
			</a>
			<span class="text-slate-300">|</span>
			<a href="/faqs/" class="text-sm font-medium text-orange-600 transition hover:text-orange-700">
				FAQs →
			</a>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i (i)}
				<div class="rounded-lg border border-slate-200 bg-white">
					<button
						onclick={() => toggleAccordion(i + solutionPreviews.length)}
						class="w-full px-6 py-4 text-left transition hover:bg-slate-50"
					>
						<div class="flex items-center justify-between gap-4">
							<span class="font-medium text-slate-900">{faq.q}</span>
							<svg
								class="h-5 w-5 shrink-0 text-slate-400 transition duration-200"
								class:rotate-180={openItem === i + solutionPreviews.length}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
					</button>
					{#if openItem === i + solutionPreviews.length}
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
		<h2 class="text-3xl font-bold">Book a consultation</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your goal, timeline, founders count, and whether you need India setup, Dubai setup, ongoing
			compliance, or contract support. We'll map the cleanest path and route you to the right service page.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/services/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Services Index →
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
