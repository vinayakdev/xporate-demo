<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/how-we-work/+page.svelte                         ║
║  URL:   /how-we-work/                                                ║
║  ROLE:  Process / trust page — reduce friction, explain workflow     ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → white → slate-50      ║
║    → slate-900 → white → slate-50 → white → slate-900              ║
║  · 6-step timeline module in slate-50 section                       ║
║  · Two-path router sections (Path A workspaces / Path B backbone)   ║
║  · Strong CTA placement: top, mid (path sections), and bottom       ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Svelte 5 runes ($state) for FAQ accordion                        ║
║  · Inline HTML + Tailwind CSS only — no component imports           ║
║  · SEO: svelte:head with full meta + canonical                      ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	// ─── FAQ Accordion State ──────────────────────────────────────────
	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	// ─── Data ─────────────────────────────────────────────────────────
	const trustBullets = [
		'Clarity-first shortlisting with trade-offs',
		'Documentation-ready workflows (no approval promises)',
		'Support beyond purchase: scale, transition, and stay compliant'
	];

	const promises = [
		{
			title: 'No guesswork',
			desc: 'We define inputs, outputs, and the next step in plain language.'
		},
		{
			title: 'No vendor juggling',
			desc: 'We coordinate and keep details consistent across address, workspace, and compliance.'
		},
		{
			title: 'Verification-ready mindset',
			desc: 'We prioritize documentation completeness and consistency to reduce preventable delays.'
		}
	];

	const steps = [
		{
			num: '1',
			title: 'Intake',
			subtitle: '10 minutes',
			desc: 'We capture your goal, city/locality preferences, headcount (if workspace), and timeline.',
			inputs: ['City', 'Locality preferences', 'Budget range', 'Team size', 'Move-in date', 'GST/MCA use-case (if registrations)']
		},
		{
			num: '2',
			title: 'Route to the right path',
			subtitle: 'Instant',
			desc: 'We route you into the correct engine: Workspaces marketplace or Corporate Backbone.',
			inputs: []
		},
		{
			num: '3',
			title: 'Shortlist + trade-offs',
			subtitle: 'Same session',
			desc: 'You get a shortlist with clear comparisons and what to choose based on your constraints.',
			inputs: ['Locality', 'Access', 'Amenities', 'Contract flexibility', 'Total monthly cost']
		},
		{
			num: '4',
			title: 'Documentation readiness',
			subtitle: 'Pre-activation',
			desc: 'We confirm what documents are needed for your specific flow and help you avoid mismatches.',
			inputs: []
		},
		{
			num: '5',
			title: 'Activation',
			subtitle: 'Go live',
			desc: 'We coordinate the next steps: document packs, onboarding, negotiations, and compliance workflow initiation.',
			inputs: []
		},
		{
			num: '6',
			title: 'Ongoing support',
			subtitle: 'Scale phase',
			desc: 'As you grow we help you transition stages and stay compliant and legally protected.',
			inputs: []
		}
	];

	const workspacePaths = [
		{
			title: 'Virtual Office',
			subtitle: 'Address + document pack',
			best: 'Registrations and business presence without leasing a physical seat.',
			links: [
				{ label: 'Virtual Office India hub', href: '/virtual-office/' },
				{ label: 'Browse by city', href: '/locations/' }
			]
		},
		{
			title: 'Coworking',
			subtitle: 'Desks and flexibility',
			best: 'Teams that want desk access without long leases.',
			links: [{ label: 'Coworking hub', href: '/coworking-space/' }]
		},
		{
			title: 'Managed Office',
			subtitle: 'Private branded suite',
			best: 'Teams that need privacy and operations handled.',
			links: [{ label: 'Managed Office hub', href: '/manage-office/' }]
		},
		{
			title: 'Commercial Leasing',
			subtitle: 'Long-term HQ',
			best: 'Teams ready for conventional leases and full control.',
			links: [
				{ label: 'Commercial Leasing hub', href: '/commercial-leasing/' },
				{ label: 'Lease toolkit', href: '/resources/lease-negotiation-checklist/' }
			]
		},
		{
			title: 'Meeting Rooms, Day Pass, Event Spaces',
			subtitle: 'Short-term needs',
			best: 'One-off or recurring short-duration bookings.',
			links: [
				{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
				{ label: 'Day Pass', href: '/day-pass/' },
				{ label: 'Event Spaces', href: '/event-spaces/' }
			]
		}
	];

	const backbonePaths = [
		{
			title: 'Start a Business (India)',
			desc: 'One workflow to plan incorporation + GST readiness.',
			links: [
				{ label: 'Solutions: Start a Business', href: '/solutions/start-a-business-india/' },
				{ label: 'Service: Company + GST Registration', href: '/services/company-gst-registration/' }
			]
		},
		{
			title: 'Compliance & Governance',
			desc: 'A predictable system to keep your company active and filing-proof.',
			links: [
				{ label: 'Solutions: Compliance & Governance', href: '/solutions/compliance-governance/' },
				{ label: 'Service: Compliance Management', href: '/services/compliance-management/' },
				{ label: 'Free: Compliance Calendar', href: '/resources/compliance-calendar/' }
			]
		},
		{
			title: 'Legal Support',
			desc: 'Risk-first contract drafting/review and dispute workflows.',
			links: [
				{ label: 'Solutions: Legal Support', href: '/solutions/legal-support/' },
				{ label: 'Service: Contract Drafting & Review', href: '/services/contract-drafting-review/' },
				{ label: 'Service: Notice & Dispute Support', href: '/services/notice-dispute-support/' }
			]
		},
		{
			title: 'Expand to Dubai / UAE',
			desc: 'Bundled workflow: license + office + 1 visa process (zone dependent).',
			links: [
				{ label: 'Solutions: Expand to UAE', href: '/solutions/expand-to-uae/' },
				{ label: 'Service: Dubai Business-in-a-Box', href: '/services/dubai-business-in-a-box/' }
			]
		},
		{
			title: 'Get Funding-Ready',
			desc: 'Documentation and narrative readiness for DPIIT recognition and related schemes (where eligible).',
			links: [
				{ label: 'Solutions: Get Funding-Ready', href: '/solutions/get-funding-ready/' },
				{ label: 'Service: Startup India / DPIIT Support', href: '/services/startup-india-dpiit-support/' }
			]
		}
	];

	const inputs = [
		{
			label: 'Choosing a workspace',
			items: ['City + locality preferences', 'Headcount', 'Move-in date', 'Budget', 'Must-have amenities']
		},
		{
			label: 'Virtual office for registrations',
			items: ['Use-case (GST/MCA/APOB)', 'Business type', 'Basic KYC/KYB']
		},
		{
			label: 'Compliance / legal',
			items: ['Entity type', 'Approximate monthly invoice volume', 'Current compliance status', 'Priority risks']
		},
		{
			label: 'Expanding to UAE',
			items: ['Business activity', 'Timeline', 'Founders count', 'Zone preferences (if any)']
		}
	];

	const outputs = [
		{
			title: 'Clear routing',
			desc: 'We tell you what to do first and why.'
		},
		{
			title: 'Shortlists and comparisons',
			desc: 'Options with trade-offs, not just listings.'
		},
		{
			title: 'Documentation-ready guidance',
			desc: 'A checklist-driven approach to reduce preventable delays.'
		},
		{
			title: 'Support after activation',
			desc: 'Scale and stay compliant as you grow.'
		}
	];

	const faqItems = [
		{
			question: 'Are approvals guaranteed for GST/MCA/UAE?',
			answer: 'No. Approvals depend on authority checks. We focus on documentation readiness and correct sequencing to reduce preventable delays—not on guaranteeing outcomes.'
		},
		{
			question: 'Can you work alongside my CA/CS?',
			answer: 'Yes. We can coordinate and support the workflow while your advisor stays involved. We handle documentation alignment and execution coordination; your CA/CS remains your primary advisor.'
		},
		{
			question: 'How fast can I get started?',
			answer: 'You can start with a consultation today. Timelines vary by service scope and processing requirements. We will give you a realistic sequence in the first session.'
		},
		{
			question: 'Can I begin with a virtual office and later upgrade?',
			answer: 'Yes. Many teams start with an address-only virtual office for registrations, then move to coworking seats, a managed office, or a lease as they grow. We support every transition stage.'
		}
	];
</script>

<svelte:head>
	<title>How Xporate Works | Workspaces + Compliance, One Workflow</title>
	<meta
		name="description"
		content="See how Xporate helps you choose a workspace, get documentation-ready, and stay compliant. One intake, clear steps, and ongoing support. Book consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/how-we-work/" />
	<meta property="og:title" content="How Xporate Works | Workspaces + Compliance, One Workflow" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/how-we-work/" />
	<meta
		property="og:description"
		content="See how Xporate helps you choose a workspace, get documentation-ready, and stay compliant. One intake, clear steps, and ongoing support. Book consult."
	/>
</svelte:head>

<!-- ─── HERO ─────────────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-5 max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">How Xporate works</h1>
			<p class="text-lg lg:text-xl text-slate-300 leading-relaxed">
				One intake. One clear workflow. The right workspace and compliance path—without vendor chaos.
				Whether you need a virtual office, coworking, a managed office, a lease, or
				business/compliance support, we guide the cleanest sequence.
			</p>
		</div>

		<!-- Trust bullets -->
		<div class="mt-10 flex flex-col sm:flex-row flex-wrap gap-5">
			{#each trustBullets as bullet (bullet)}
				<div class="flex items-center gap-2">
					<svg class="h-5 w-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="text-sm text-slate-300">{bullet}</span>
				</div>
			{/each}
		</div>

		<!-- CTAs -->
		<div class="mt-10 flex flex-col sm:flex-row gap-4">
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="/locations/"
				class="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-lg transition"
			>
				Explore Locations →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition"
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

<!-- ─── THE XPORATE PROMISE ───────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What you can expect</h2>
		<p class="text-lg text-slate-600 mb-12 max-w-3xl">
			A predictable workflow with clear scope, timelines (case dependent), and the right internal
			routing.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each promises as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8 hover:border-orange-300 transition">
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
					<p class="text-slate-600 leading-relaxed">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── 6-STEP WORKFLOW ───────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
			The workflow (from inquiry to activation)
		</h2>
		<p class="text-lg text-slate-600 mb-12 max-w-3xl">
			Six clear steps. Each step has defined inputs and outputs so you always know what happens next.
		</p>

		<div class="space-y-6">
			{#each steps as step, idx (step.num)}
				<div class="flex gap-6">
					<!-- Step number column -->
					<div class="flex flex-col items-center">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
						>
							{step.num}
						</div>
						{#if idx < steps.length - 1}
							<div class="mt-2 w-0.5 flex-1 bg-orange-200"></div>
						{/if}
					</div>

					<!-- Content -->
					<div class="pb-8 flex-1">
						<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
							<div class="flex items-start justify-between flex-wrap gap-2 mb-3">
								<h3 class="text-lg font-bold text-slate-900">
									Step {step.num}: {step.title}
								</h3>
								<span
									class="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700"
								>
									{step.subtitle}
								</span>
							</div>
							<p class="text-slate-700 leading-relaxed">{step.desc}</p>

							{#if step.inputs.length > 0}
								<div class="mt-4 flex flex-wrap gap-2">
									{#each step.inputs as input (input)}
										<span
											class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
										>
											{input}
										</span>
									{/each}
								</div>
							{/if}

							<!-- Step-specific routing links -->
							{#if step.num === '2'}
								<div class="mt-4 flex flex-wrap gap-3">
									<a
										href="/solutions/"
										class="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
									>
										Solutions Overview →
									</a>
									<a
										href="/locations/"
										class="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
									>
										Locations →
									</a>
								</div>
							{/if}

							{#if step.num === '5'}
								<div class="mt-4 bg-blue-50 rounded-lg p-4">
									<p class="text-sm text-slate-700">
										<strong>Activation includes:</strong> Virtual office document pack · Coworking/managed
										office onboarding · Lease negotiation + paperwork · Compliance/legal workflow initiation
									</p>
								</div>
							{/if}

							{#if step.num === '6'}
								<div class="mt-4 flex flex-wrap gap-3">
									<a
										href="/solutions/scale-your-workspace/"
										class="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
									>
										Scale Your Workspace →
									</a>
									<a
										href="/solutions/compliance-governance/"
										class="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
									>
										Compliance & Governance →
									</a>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── PATH A: WORKSPACES MARKETPLACE ───────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="mb-12">
			<div class="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 mb-4">
				<span class="text-sm font-semibold text-orange-700">Path A</span>
			</div>
			<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
				Workspaces marketplace
			</h2>
			<p class="text-lg text-slate-600 max-w-3xl">
				Use this when you need an address, desks, a private office, a long-term lease, or bookable
				rooms.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each workspacePaths as path (path.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8 hover:border-orange-300 hover:shadow-md transition">
					<h3 class="text-lg font-bold text-slate-900 mb-1">{path.title}</h3>
					<p class="text-xs font-medium text-orange-600 uppercase tracking-wide mb-3">
						{path.subtitle}
					</p>
					<p class="text-sm text-slate-600 mb-5">
						<strong class="text-slate-700">Best for:</strong>
						{path.best}
					</p>
					<div class="space-y-2">
						{#each path.links as link (link.href)}
							<a
								href={link.href}
								class="flex items-center gap-2 text-sm text-slate-700 hover:text-orange-600 transition"
							>
								<span class="text-orange-400">›</span>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-10 rounded-xl bg-orange-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-slate-700 font-medium">Want a shortlist in your city?</p>
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shrink-0"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ─── PATH B: CORPORATE BACKBONE ───────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="mb-12">
			<div class="inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 mb-4">
				<span class="text-sm font-semibold text-slate-700">Path B</span>
			</div>
			<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
				Corporate Backbone solutions
			</h2>
			<p class="text-lg text-slate-600 max-w-3xl">
				Use this when you need registrations, compliance, legal protection, UAE expansion, or funding
				readiness.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each backbonePaths as path (path.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8 hover:border-slate-400 hover:shadow-md transition">
					<h3 class="text-lg font-bold text-slate-900 mb-2">{path.title}</h3>
					<p class="text-sm text-slate-600 mb-5">{path.desc}</p>
					<div class="space-y-2">
						{#each path.links as link (link.href)}
							<a
								href={link.href}
								class="flex items-center gap-2 text-sm text-slate-700 hover:text-orange-600 transition"
							>
								<span class="text-orange-400">›</span>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-10 rounded-xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-slate-700 font-medium">Not sure which solution fits?</p>
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shrink-0"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ─── WHAT WE NEED FROM YOU ─────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">What we need from you</h2>
		<p class="text-lg text-slate-300 mb-12 max-w-3xl">
			Non-exhaustive — we use the booking flow for full checklists. Here is what we typically ask up
			front:
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each inputs as section (section.label)}
				<div class="rounded-xl bg-white/10 ring-1 ring-white/10 p-6">
					<h3 class="text-base font-semibold text-orange-400 mb-4">
						If you're {section.label.toLowerCase()}
					</h3>
					<ul class="space-y-2">
						{#each section.items as item (item)}
							<li class="flex items-center gap-2 text-sm text-slate-300">
								<span class="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHAT YOU GET ───────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-12">What you get</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			{#each outputs as item (item.title)}
				<div class="flex gap-4">
					<div class="flex-shrink-0 mt-1">
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100"
						>
							<svg class="h-5 w-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
						<p class="text-slate-600 leading-relaxed">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── PROOF ─────────────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Proof and outcomes</h2>

		<div
			class="rounded-2xl border-2 border-dashed border-slate-200 bg-white px-8 py-16 text-center text-slate-400"
		>
			Testimonials and case study modules — coming soon
		</div>

		<div class="mt-6 text-center">
			<a
				href="/case-studies/"
				class="inline-block text-sm font-medium text-orange-600 hover:text-orange-700 transition"
			>
				Explore case studies →
			</a>
		</div>
	</div>
</section>

<!-- ─── FAQ ───────────────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-12">
			Frequently Asked Questions
		</h2>

		<div class="space-y-4 max-w-3xl">
			{#each faqItems as item, idx (item.question)}
				<div class="border border-slate-200 rounded-xl overflow-hidden">
					<button
						onclick={() => toggleFaq(idx)}
						class="w-full px-6 py-4 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition"
					>
						<h3 class="text-base font-semibold text-slate-900 text-left">{item.question}</h3>
						<svg
							class="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200"
							class:rotate-180={openFaqIndex === idx}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					{#if openFaqIndex === idx}
						<div class="px-6 py-4 bg-slate-50 border-t border-slate-200">
							<p class="text-slate-600 leading-relaxed">{item.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FINAL CTA ─────────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">Book a consultation</h2>
		<p class="text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
			Tell us your goal, city plan, and timeline—we'll map the cleanest path and next steps.
		</p>
		<p class="text-sm text-slate-400 mb-10 max-w-xl mx-auto">
			Share your goal (address / desks / private office / lease / compliance / legal / UAE), city/locality,
			headcount, budget, timeline, and whether you already have a CA.
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a
				href="/book/"
				class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
			>
				Book Consultation →
			</a>
			<a
				href="/locations/"
				class="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-lg transition"
			>
				Explore Locations →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition"
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
