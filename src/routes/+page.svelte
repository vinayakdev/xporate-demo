<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/+page.svelte                                     ║
║  URL:   /                                                            ║
║  ROLE:  Brand + Router — NOT the primary SEO money page             ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero bg: currently a gradient — replace with a proper brand      ║
║    hero image or motion graphic (min 1440 × 760 px).                ║
║  · Each "featured" section has an alternating bg rhythm:            ║
║    white → slate-50 → white → sky-50 → white → slate-800 → ...     ║
║    Maintain this rhythm when adding/reordering sections.            ║
║  · Solution cards: icons are placeholder SVGs. Swap with the        ║
║    final icon set (Lucide / Phosphor / custom).                     ║
║  · Dubai section uses a dark bg (slate-800). Keep it distinct.      ║
║  · Pricing anchors are styled as badges. CMS-editable in prod.      ║
║  · Trust bullets: 3-col grid desktop / 2-col tablet / 1-col mobile. ║
║  · "Proof" section is a placeholder — wire up reviews + logos.      ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · FAQ accordion uses local $state — no lib needed.                 ║
║  · Workspace tabs: currently filter tabs only — wire up to actual   ║
║    category route on tab click (each tab already links to root).    ║
║  · Top Cities grid: hardcoded for demo — replace with data from     ║
║    /api/locations or a CMS collection.                              ║
║  · Pricing badges: extract into a PricingBadge.svelte component     ║
║    in production so they can pull from CMS.                         ║
║  · Schema markup: add JSON-LD in <svelte:head> before launch:       ║
║    Organization, WebSite (SearchAction), FAQPage, ItemList.         ║
║  · Reviews / logos section: wire up to a reviews CMS or API.       ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Pricing anchors must be CMS-editable (location/zone-dependent).  ║
║  · FAQ items should be stored in CMS and also shared with /faqs.    ║
║  · Proof / reviews section: connect to review aggregator or CMS.   ║
║  · Trust bullets: make configurable from CMS.                       ║
║  · "Book Consultation" CTA → /book/ — ensure booking form is live.  ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · This page must NOT try to rank for "Virtual Office India" alone. ║
║    Primary SEO hubs: /virtual-office/ /coworking-space/ etc.        ║
║  · Every featured section links to ONE primary hub (no overlap).    ║
║  · Avoid "guaranteed approval" language — use                        ║
║    "documentation-ready / verification-ready / reduce preventable   ║
║    delays" throughout.                                               ║
║  · URL patterns to NEVER rename (existing, SEO-safe):               ║
║    /virtual-office/{city}/   /virtual-office/{city}/{loc}/{slug}     ║
║    /coworking-space/{city}/  /manage-office/{city}/  etc.           ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	// ─── FAQ accordion ───────────────────────────────────────────────
	let openFaq = $state<number | null>(null);

	// ─── Workspace tab switcher ───────────────────────────────────────
	let activeWorkspace = $state('virtual-office');

	// ─── Data ─────────────────────────────────────────────────────────
	const trustBullets = [
		{ text: 'Virtual office starts at ₹8,000/year (location-dependent)' },
		{ text: 'GST-ready document pack delivered in 24–48 hours (as applicable)' },
		{ text: 'Physically verifiable locations with on-ground verification support' },
		{ text: 'Structured pricing tiers for Company + GST (reduced mismatch risk)' },
		{ text: 'Compliance management at ₹15,000/month (fixed up to 50 invoices/month)' },
		{ text: 'Legal drafting 48–72 hours for many agreements (scope-dependent)' }
	];

	const workspaceTabs = [
		{ id: 'virtual-office', label: 'Virtual Office', href: '/virtual-office/' },
		{ id: 'coworking', label: 'Coworking Space', href: '/coworking-space/' },
		{ id: 'managed-office', label: 'Managed Office', href: '/manage-office/' },
		{ id: 'commercial-leasing', label: 'Commercial Leasing', href: '/commercial-leasing/' },
		{ id: 'meeting-rooms', label: 'Meeting Rooms', href: '/meeting-rooms/' },
		{ id: 'day-pass', label: 'Day Pass', href: '/day-pass/' },
		{ id: 'event-spaces', label: 'Event Spaces', href: '/event-spaces/' }
	];

	const solutionCards = [
		{
			label: 'Start a Business (India)',
			href: '/solutions/start-a-business-india/',
			desc: 'Company + GST planning with alignment checks to reduce preventable mismatch delays.',
			icon: 'building'
		},
		{
			label: 'Compliance & Governance',
			href: '/solutions/compliance-governance/',
			desc: 'Monthly compliance management to keep filings, books, and governance on track.',
			icon: 'shield'
		},
		{
			label: 'Legal Support',
			href: '/solutions/legal-support/',
			desc: 'Risk-first drafting, reviews, and notice/dispute support—built for enforceability.',
			icon: 'document'
		},
		{
			label: 'Expand to Dubai / UAE',
			href: '/solutions/expand-to-uae/',
			desc: 'A single workflow for Dubai setup + compliant office lease + residency visa process.',
			icon: 'globe'
		},
		{
			label: 'Scale Your Workspace',
			href: '/solutions/scale-your-workspace/',
			desc: 'Move up the workspace ladder without vendor chaos. Virtual → Seats → Managed → Lease.',
			icon: 'arrow-up'
		},
		{
			label: 'Get Funding-Ready (DPIIT)',
			href: '/solutions/get-funding-ready/',
			desc: 'Eligibility-first guidance and application support with credibility-first drafting.',
			icon: 'coin'
		}
	];

	const differentiators = [
		{
			title: 'Verification-first infrastructure',
			desc: 'Physically verifiable locations and document packs designed for real-world checks—not paper-only setups.'
		},
		{
			title: 'Single window, fewer handoffs',
			desc: 'Workspaces + setup + compliance + legal + UAE expansion coordinated under one accountable workflow.'
		},
		{
			title: 'Clear trade-offs, not vague promises',
			desc: "We explain constraints, timelines, and what's needed so you can make clean decisions."
		},
		{
			title: 'Support after purchase',
			desc: 'We stay involved through activation, verification readiness, renewals, scaling, and transitions.'
		}
	];

	const howWeWork = [
		{
			step: '01',
			title: 'Define the outcome',
			desc: 'Workspace, company + GST, compliance, legal, Dubai, or funding-readiness—choose the primary goal and timeline.'
		},
		{
			step: '02',
			title: 'Map the checklist',
			desc: 'We confirm what documents are needed, what can be bundled, and where mismatches typically happen.'
		},
		{
			step: '03',
			title: 'Execute in sequence',
			desc: 'We coordinate drafting, filing, shortlisting, and next steps—reducing preventable delays.'
		},
		{
			step: '04',
			title: 'Support beyond launch',
			desc: 'Renewals, upgrades, filings, contract updates, and expansion steps—without vendor chaos.'
		}
	];

	const topCities = [
		'Bangalore',
		'Delhi',
		'Mumbai',
		'Gurgaon',
		'Noida',
		'Pune',
		'Hyderabad',
		'Chennai',
		'Kolkata',
		'Ahmedabad'
	];

	const faqItems = [
		{
			q: 'Can a virtual office be used for GST or company registration?',
			a: "In many genuine cases it can—when the premises is real, verifiable, and supported with the correct permission trail and address proofs. Acceptance depends on your profile and the authority's checks."
		},
		{
			q: 'What documents are typically included with a virtual office?',
			a: 'Rent agreement, owner NOC (with GST/MCA consent), and a recent utility bill (typically not older than 2 months, where required). Some cases need additional supporting documents.'
		},
		{
			q: 'Do you guarantee GST/MCA approvals, UAE visas, or bank account opening?',
			a: 'No. We focus on documentation completeness, consistency, and verification readiness to reduce preventable delays.'
		},
		{
			q: 'Can you handle Company + GST together?',
			a: 'Yes. Bundled workflows help keep details aligned across COI and GST to reduce mismatch risk.'
		},
		{
			q: "What's included in Dubai Business-in-a-Box?",
			a: "Company setup + compliant office lease + one residency visa workflow (package contents vary by zone and activity). We guide the steps and documents end-to-end with one point of contact."
		}
	];
</script>

<svelte:head>
	<title>Xporate | Virtual Office India + Workspaces + Business Setup</title>
	<meta
		name="description"
		content="Virtual Office India from ₹8,000/year with GST-ready docs. Compare workspaces in India. Company+GST setup, compliance and Dubai/UAE expansion support."
	/>
	<!--
    FRONTEND NOTE: Add JSON-LD schema before launch:
    - Organization (name, url, logo, contactPoint)
    - WebSite with SearchAction (sitelinks searchbox)
    - FAQPage (from faqItems array)
    - ItemList for Solutions cards
  -->
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════
     HERO
     DESIGNER: Replace gradient with brand hero image/video.
               Trust bullets: 3-col desktop / 2-col tablet / 1-col mobile.
     FRONTEND: Trust bullets + compliance note can be CMS-driven.
     SEO:      H1 is intentionally NOT keyword-stuffed. Page role = router.
     ═══════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white lg:py-28">
	<!-- DESIGNER NOTE: decorative radial glow — remove or replace with brand visual -->
	<div
		class="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Support line -->
		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400">
			Workspaces Marketplace · Business Setup · Compliance · Legal · India + Dubai
		</p>

		<h1 class="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
			Workspaces + Corporate Backbone.<br />
			<span class="text-orange-400">One partner</span> to start, stay compliant, and scale.
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Xporate combines a workspace marketplace across India (virtual office, coworking, managed
			office, leasing, meeting rooms, day pass, event spaces) with corporate backbone solutions
			(start a business, compliance, legal, UAE expansion, funding-readiness).<br class="hidden lg:block" />
			Pick your outcome—we'll map the cleanest path with fewer handoffs and clearer accountability.
		</p>

		<!-- CTAs -->
		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
			>
				Book Consultation
			</a>
			<a
				href="/locations/"
				class="rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Explore Locations
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-lg border border-[#25d366]/50 bg-[#25d366]/10 px-6 py-3 text-base font-semibold text-[#4ade80] transition hover:bg-[#25d366]/20"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
					/>
				</svg>
				WhatsApp
			</a>
		</div>

		<!-- Trust bullets
             DESIGNER: 3-col grid on desktop, 2-col tablet, 1-col mobile
             FRONTEND/BACKEND: Make CMS-editable in production -->
		<div class="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each trustBullets as bullet (bullet.text)}
				<div class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
					<svg
						class="mt-0.5 h-4 w-4 shrink-0 text-green-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="text-sm leading-snug text-slate-200">{bullet.text}</span>
				</div>
			{/each}
		</div>

		<!-- Compliance disclaimer
             SEO/LEGAL: Keep this exact language — avoid "guaranteed" anywhere on the page -->
		<p class="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
			<strong class="text-slate-400">Note:</strong> We don't guarantee approvals. Acceptance for
			registrations, verifications, visas, and banking depends on your profile and the authority's
			checks. We focus on documentation completeness, consistency, and verification readiness.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     TWO-ENGINE ROUTER
     DESIGNER: 2 large side-by-side cards. Keep them equal height.
               Left = Workspaces (blue), Right = Corporate (orange).
               Could also be implemented as a tab switch — see DEV NOTE.
     FRONTEND: DEV NOTE — could convert to tabs if A/B test warrants it.
               Each card's secondary links are the category root URLs.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">What are you here for?</h2>
			<p class="mt-3 text-slate-500">Two engines. Pick the one that fits your goal.</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Workspaces card -->
			<div class="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-8 transition hover:shadow-xl">
				<div class="mb-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
					Marketplace
				</div>
				<h3 class="mt-2 text-2xl font-bold text-slate-900">Workspaces Marketplace (India)</h3>
				<p class="mt-3 text-slate-600">
					Virtual office, coworking, managed office, commercial leasing, meeting rooms, day pass,
					event spaces—compare options and shortlist faster.
				</p>
				<a
					href="/virtual-office/"
					class="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
				>
					Browse Workspaces
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</a>
				<!-- Secondary links -->
				<div class="mt-5 flex flex-wrap gap-2">
					{#each [{ label: 'Coworking', href: '/coworking-space/' }, { label: 'Managed Office', href: '/manage-office/' }, { label: 'Leasing', href: '/commercial-leasing/' }, { label: 'Meeting Rooms', href: '/meeting-rooms/' }, { label: 'Day Pass', href: '/day-pass/' }, { label: 'Events', href: '/event-spaces/' }] as link (link.href)}
						<a
							href={link.href}
							class="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 transition hover:bg-blue-50"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>

			<!-- Corporate Backbone card -->
			<div class="group relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-8 transition hover:shadow-xl">
				<div class="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
					Corporate Backbone
				</div>
				<h3 class="mt-2 text-2xl font-bold text-slate-900">
					Corporate Backbone (Start / Comply / Legal / Dubai / Funding)
				</h3>
				<p class="mt-3 text-slate-600">
					Company + GST setup, compliance governance, legal contracts and notices, Dubai expansion,
					DPIIT/Startup India support.
				</p>
				<a
					href="/solutions/"
					class="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Explore Solutions
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</a>
				<a
					href="/services/"
					class="mt-3 inline-flex items-center gap-1 text-sm text-orange-700 transition hover:text-orange-900"
				>
					Browse all services →
				</a>
				<!-- CA helper -->
				<div class="mt-5 rounded-xl border border-orange-200 bg-white/70 px-4 py-3 text-sm text-slate-600">
					<strong class="text-slate-800">Already have a CA?</strong> We work alongside your CA. You
					can keep your CA—Xporate fills gaps, runs checklists, and keeps workflows aligned.
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     CHOOSE YOUR OUTCOME — SOLUTION CARDS
     DESIGNER: 2×3 grid of cards. Equal height cards in each row.
               Icons are placeholder SVG shapes — replace with final icon set.
     FRONTEND: Card data is in the solutionCards array above.
               Add hover animation (lift + shadow) if desired.
     SEO:      Each card links to exactly ONE solution page — no overlap.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-4 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Choose your outcome</h2>
			<p class="mt-3 max-w-xl mx-auto text-slate-500">
				Pick the outcome. We'll guide the workflow, documents, and realistic timelines.
			</p>
		</div>

		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each solutionCards as card (card.href)}
				<a
					href={card.href}
					class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-orange-200"
				>
					<!-- DESIGNER NOTE: Replace placeholder icon div with the final SVG icon -->
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
						{#if card.icon === 'building'}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						{:else if card.icon === 'shield'}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						{:else if card.icon === 'document'}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						{:else if card.icon === 'globe'}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{:else if card.icon === 'arrow-up'}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
							</svg>
						{:else}
							<svg class="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{/if}
					</div>

					<h3 class="text-base font-semibold text-slate-900 group-hover:text-orange-600 transition">
						{card.label}
					</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{card.desc}</p>
					<span class="mt-4 flex items-center gap-1 text-sm font-medium text-orange-500 transition group-hover:gap-2">
						Learn more
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</span>
				</a>
			{/each}
		</div>

		<p class="mt-10 text-center">
			<a href="/book/" class="text-sm font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
				Not sure which path fits? Book a consultation →
			</a>
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WORKSPACES FINDER
     DESIGNER: Tab bar + search bar. Active tab = orange pill.
               On tab click → show tab content (currently links to root).
     FRONTEND: Tab click navigates to category root page.
               Search: wire up to /locations/ with query params.
               DEV NOTE: Consider converting to a full search widget
               that queries /api/search?city=&type= in production.
     SEO:      Keep all 7 category root URLs as canonical India hubs.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Find the right workspace in minutes</h2>
			<p class="mt-3 text-slate-500">
				Compare workspace types across India—then shortlist based on budget, locality, team size,
				and timeline.
			</p>
		</div>

		<!-- Workspace type tabs -->
		<div class="flex flex-wrap justify-center gap-2">
			{#each workspaceTabs as tab (tab.id)}
				<button
					onclick={() => (activeWorkspace = tab.id)}
					class="rounded-full px-4 py-2 text-sm font-medium transition"
					class:bg-orange-500={activeWorkspace === tab.id}
					class:text-white={activeWorkspace === tab.id}
					class:shadow-sm={activeWorkspace === tab.id}
					class:bg-slate-100={activeWorkspace !== tab.id}
					class:text-slate-600={activeWorkspace !== tab.id}
				>
					{tab.label}
				</button>
			{/each}
		</div>

		<!-- Search bar
             FRONTEND NOTE: Wire up to /locations/ with ?type= + ?city= query params -->
		<div class="mx-auto mt-8 max-w-2xl">
			<div class="flex overflow-hidden rounded-xl border border-slate-200 shadow-sm">
				<input
					type="text"
					placeholder="Search by city, locality, or workspace type…"
					class="flex-1 border-0 px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-0"
				/>
				<button class="bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
					Search
				</button>
			</div>
			<p class="mt-2 text-center text-xs text-slate-400">
				If you prefer a callback, share requirements and we'll shortlist options.
			</p>
		</div>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="/locations/"
				class="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
			>
				View all locations
			</a>
			<a
				href="/book/"
				class="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
			>
				Talk to an expert
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FEATURED: VIRTUAL OFFICE INDIA
     DESIGNER: Light sky-blue bg. Two-column on desktop:
               left = content, right = "How it works" steps.
     FRONTEND: Pricing badge is hardcoded — make CMS-editable.
     SEO:      Links to /virtual-office/ (the existing India hub).
               Do NOT create a competing URL from this section.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<div>
				<span class="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
					Featured — Virtual Office
				</span>
				<h2 class="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Virtual office that's verification-ready (not just "an address")
				</h2>
				<p class="mt-4 text-slate-600">
					A legal commercial address in a premium location—without renting a dedicated seat or cabin.
					Built for founders, proprietors, freelancers, brand builders, and multi-state sellers who
					need a compliant, physically verifiable setup.
				</p>

				<!-- Pricing badge — BACKEND: make this CMS-editable -->
				<div class="mt-5 inline-flex items-baseline gap-1 rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-100">
					<span class="text-sm text-slate-500">Starting from</span>
					<span class="text-2xl font-bold text-slate-900">₹8,000</span>
					<span class="text-sm text-slate-500">/year</span>
					<span class="ml-1 text-xs text-slate-400">(location-dependent)</span>
				</div>

				<div class="mt-6">
					<h3 class="text-sm font-semibold uppercase tracking-wide text-slate-700">
						Documents included (address-proof pack)
					</h3>
					<ul class="mt-3 space-y-2">
						{#each ['Rent Agreement (11-month or multi-year, as applicable)', 'Owner NOC explicitly permitting GST/MCA use', 'Recent utility bill (typically not older than 2 months, where required)', 'Signage support (company name displayed at premises, where applicable)'] as item (item)}
							<li class="flex items-start gap-2 text-sm text-slate-600">
								<svg class="mt-0.5 h-4 w-4 shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/virtual-office/" class="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700">
						Explore Virtual Office
					</a>
					<a href="/locations/" class="rounded-lg border border-sky-200 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
						Browse locations
					</a>
				</div>
			</div>

			<!-- How it works steps -->
			<div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
				<h3 class="mb-6 text-lg font-semibold text-slate-900">How it works</h3>
				<ol class="space-y-5">
					{#each ['Pick your city/location', 'Submit KYC/KYB digitally', 'Documents drafted and delivered (typically 24–48 hours, as applicable)', 'If verification is requested, we assist with on-ground coordination (as applicable)'] as step, i (step)}
						<li class="flex items-start gap-4">
							<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600">
								{i + 1}
							</span>
							<span class="mt-1 text-sm leading-relaxed text-slate-600">{step}</span>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FEATURED SERVICE: COMPANY + GST REGISTRATION
     DESIGNER: White bg. Two-column: left = content + pricing tiers,
               right = "What's included" checklist card.
     FRONTEND: Pricing tiers are hardcoded — make CMS-editable.
     SEO:      Primary link → /services/company-gst-registration/ (new).
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<div>
				<span class="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
					Featured Service
				</span>
				<h2 class="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Company + GST registration (one workflow, aligned details)
				</h2>
				<p class="mt-4 text-slate-600">
					A startup starter pack that takes you from "idea" to a bank-ready legal entity—without
					juggling multiple vendors. Bundling keeps COI and GST details aligned to reduce common
					mismatch rejections that delay businesses.
				</p>

				<!-- Pricing tiers — BACKEND: CMS-editable, location-dependent -->
				<div class="mt-6 grid gap-3 sm:grid-cols-2">
					<div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Company + GST</p>
						<p class="mt-1 text-lg font-bold text-slate-900">₹15,000 <span class="text-sm font-normal text-slate-500">+ GST</span></p>
						<p class="mt-1 text-xs text-slate-400">Location-dependent</p>
					</div>
					<div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
						<p class="text-xs font-semibold uppercase tracking-wide text-slate-500">GST Only</p>
						<p class="mt-1 text-lg font-bold text-slate-900">₹12,500 <span class="text-sm font-normal text-slate-500">+ 18% GST</span></p>
						<p class="mt-1 text-xs text-slate-400">Location-dependent</p>
					</div>
				</div>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/services/company-gst-registration/" class="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
						Explore Company + GST Registration
					</a>
					<a href="/book/" class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
						Book consultation
					</a>
				</div>
			</div>

			<div class="rounded-2xl bg-orange-50 p-8 ring-1 ring-orange-100">
				<h3 class="mb-5 text-base font-semibold text-slate-900">What's included</h3>
				<ul class="space-y-3">
					{#each ['Company incorporation (MCA) → Certificate of Incorporation', 'GST registration → GSTIN', 'Drafting + filing coordination and query-handling support (case-dependent)', 'Pro-tier: often 7-day incorporation + post-incorporation checklist + bank account assistance (as applicable)'] as item (item)}
						<li class="flex items-start gap-3 text-sm text-slate-700">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     DUBAI / UAE SECTION
     DESIGNER: Dark slate-800 bg, white text. Premium look.
               15-day workflow is a timeline — could be a visual
               stepper/timeline component in production.
     FRONTEND: AED pricing is hardcoded — make CMS-editable.
     SEO/LEGAL: NEVER use "guaranteed visa/bank" language here.
                Keep all "as applicable", "process-dependent" disclaimers.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-800 py-16 text-white lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<span class="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
					Dubai / UAE Expansion
				</span>
				<h2 class="mt-4 text-3xl font-bold text-white lg:text-4xl">
					Expand to Dubai / UAE (Setup + Office + 1 Visa workflow)
				</h2>
				<p class="mt-4 text-slate-300">
					Dubai Business-in-a-Box bundles three essentials into one coordinated workflow: company
					incorporation, a compliant business address via legal lease, and one residency visa process
					including Emirates ID.
				</p>

				<!-- Pricing badge — BACKEND: CMS-editable, zone-dependent -->
				<div class="mt-5 inline-flex items-baseline gap-1 rounded-xl bg-white/10 px-5 py-3">
					<span class="text-sm text-slate-400">Bundled package from</span>
					<span class="text-2xl font-bold text-white">AED 14,500</span>
					<span class="text-sm text-slate-400">– 18,500</span>
					<span class="ml-1 text-xs text-slate-500">(zone-dependent)</span>
				</div>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/services/dubai-business-in-a-box/" class="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
						Dubai Business-in-a-Box
					</a>
					<a href="/solutions/expand-to-uae/" class="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10">
						Expand to UAE (solution)
					</a>
					<a href="/book/" class="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10">
						Book consultation
					</a>
				</div>

				<!-- Disclaimer — LEGAL: Keep as-is -->
				<p class="mt-6 text-xs leading-relaxed text-slate-500">
					Timelines vary by zone, activity, and government processing. We reduce preventable delays
					by keeping documentation complete and steps coordinated.
				</p>
			</div>

			<div class="space-y-6">
				<!-- Deliverables -->
				<div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
						What you receive
					</h3>
					<ul class="space-y-2">
						{#each ['Trade license (valid 1 year, renewable)', 'MOA + share certificate (ownership proof)', 'Lease agreement (official address for licensing/banking, as applicable)', 'Residency visa workflow for 1 founder + Emirates ID (process-dependent)', 'PRO support guidance for medical/biometrics in Dubai'] as item (item)}
							<li class="flex items-start gap-2.5 text-sm text-slate-300">
								<svg class="mt-0.5 h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<!-- 15-day timeline — DESIGNER: convert to visual stepper in production -->
				<div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
						Typical 15-day workflow
					</h3>
					<ol class="space-y-3">
						{#each [{ days: 'Day 1–3', desc: 'Name reservation + initial approvals' }, { days: 'Day 4–5', desc: 'Trade license + office lease issuance' }, { days: 'Day 6–10', desc: 'Establishment card + entry permit (e-visa, as applicable)' }, { days: 'Day 11–13', desc: 'Medical + biometrics (client travel required)' }, { days: 'Day 14–15', desc: 'Visa status update + Emirates ID processing (as applicable)' }] as step (step.days)}
							<li class="flex items-start gap-3 text-sm">
								<span class="shrink-0 rounded-full bg-orange-500/20 px-2.5 py-0.5 text-xs font-medium text-orange-300">{step.days}</span>
								<span class="text-slate-300">{step.desc}</span>
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     COMPLIANCE & GOVERNANCE
     DESIGNER: Slate-50 bg. Two-column: left = content, right = scope card.
     FRONTEND: Pricing is hardcoded (₹15,000/mo) — make CMS-editable.
     LEGAL:    "taxes paid by client" and "litigation not included" notes
               must remain visible. Do not remove or hide these.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<div>
				<span class="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
					Ongoing Compliance
				</span>
				<h2 class="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Stay compliant (so you stay operational)
				</h2>
				<p class="mt-4 text-slate-600">
					A recurring compliance engine that keeps your company active on MCA and consistent across
					GST, tax, and governance.
				</p>

				<div class="mt-5 inline-flex items-baseline gap-1 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
					<span class="text-2xl font-bold text-slate-900">₹15,000</span>
					<span class="text-sm text-slate-500">/month</span>
					<span class="ml-2 text-xs text-slate-400">(fixed up to 50 invoices/month)</span>
				</div>

				<!-- Legal notes — Do not remove -->
				<div class="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
					<strong class="text-slate-700">Important:</strong> Government fees and out-of-pocket costs
					are charged at actuals. Client pays the actual tax amounts; Xporate computes and files based
					on provided data. Representation in litigation/audits is not included unless separately
					scoped.
				</div>

				<div class="mt-6 flex flex-wrap gap-3">
					<a href="/services/compliance-management/" class="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
						Compliance Management
					</a>
					<a href="/solutions/compliance-governance/" class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white">
						Compliance & Governance (solution)
					</a>
				</div>
			</div>

			<div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
				<h3 class="mb-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
					What ongoing compliance can include
				</h3>
				<ul class="space-y-3">
					{#each ['Bookkeeping in cloud software (e.g., ZOHO) + monthly reconciliation', 'GST: GSTR-1 + GSTR-3B monthly filing and ITC reconciliation (as applicable)', 'Direct tax: TDS reviews + quarterly returns + annual ITR coordination', 'ROC governance: minutes, statutory registers, and annual filings (AOC-4, MGT-7, DIR-3 KYC, as applicable)'] as item (item)}
						<li class="flex items-start gap-3 text-sm text-slate-600">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     LEGAL SUPPORT
     DESIGNER: White bg. Two cards side-by-side (Contracts + Notices).
     SEO:      Two separate service pages — do not merge the links.
               /services/contract-drafting-review/
               /services/notice-dispute-support/
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<span class="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
				Legal Support
			</span>
			<h2 class="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
				Legal support built for enforceability (not templates)
			</h2>
			<p class="mt-4 max-w-2xl text-slate-600">
				Risk-first drafting and reviews aligned with modern data privacy expectations (DPDP-aware
				clauses) and your real business model.
			</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Contract Drafting -->
			<div class="rounded-2xl border border-purple-100 bg-purple-50 p-7">
				<h3 class="text-lg font-semibold text-slate-900">Contract Drafting & Review</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600">
					Founders' agreements, MSAs, NDAs, SLAs, vendor contracts, employment/ESOP docs, term
					sheets, IP assignment, website policies (DPDP-aligned).
				</p>
				<p class="mt-3 text-xs text-slate-500">
					Turnaround: Often 48–72 hours (scope-dependent)
				</p>
				<a href="/services/contract-drafting-review/" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 transition hover:text-purple-900">
					Contract Drafting & Review →
				</a>
			</div>

			<!-- Notice / Dispute -->
			<div class="rounded-2xl border border-purple-100 bg-purple-50 p-7">
				<h3 class="text-lg font-semibold text-slate-900">Notice / Dispute Support</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600">
					Support for routine notices and dispute workflows with clear documentation and next-step
					options (case-dependent).
				</p>
				<a href="/services/notice-dispute-support/" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 transition hover:text-purple-900">
					Notice / Dispute Support →
				</a>
			</div>
		</div>

		<div class="mt-8 flex flex-wrap gap-3">
			<a href="/solutions/legal-support/" class="rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800">
				Legal Support (solution overview)
			</a>
			<a href="/book/" class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
				Book consultation
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FUNDING-READY (DPIIT / STARTUP INDIA)
     DESIGNER: Amber-50 bg. One column content + checklist card.
     FRONTEND: Pricing is fixed ₹30,000 — clearly note "non-negotiable".
     LEGAL:    "where eligible" language is mandatory throughout.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-amber-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<div>
				<span class="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
					Funding Readiness
				</span>
				<h2 class="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
					Get funding-ready (DPIIT / Startup India support)
				</h2>
				<p class="mt-4 text-slate-600">
					We don't just "apply." We sanity-check your eligibility, audit your narrative, and prepare
					the documentation to handle government queries (where eligible).
				</p>

				<div class="mt-5 inline-flex items-baseline gap-1 rounded-xl border border-amber-200 bg-white px-5 py-3 shadow-sm">
					<span class="text-2xl font-bold text-slate-900">₹30,000</span>
					<span class="ml-2 text-xs font-medium text-amber-700">(flat · non-negotiable)</span>
				</div>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/services/startup-india-dpiit-support/" class="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600">
						DPIIT + Startup India Support
					</a>
					<a href="/solutions/get-funding-ready/" class="rounded-lg border border-amber-300 px-5 py-2.5 text-sm font-semibold text-amber-800 transition hover:bg-amber-100">
						Get Funding-Ready (solution)
					</a>
				</div>
			</div>

			<div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
				<h3 class="mb-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
					What support can include
				</h3>
				<ul class="space-y-3">
					{#each ['DPIIT recognition application support', 'Innovation statement drafting (short-form + expanded narrative)', 'Pitch deck optimization (10–15 slides, as applicable)', 'Guidance for tax exemption (80-IAC) documentation readiness (where eligible)', 'Seed fund application support (SISFS) guidance (where eligible)'] as item (item)}
						<li class="flex items-start gap-3 text-sm text-slate-600">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY XPORATE — DIFFERENTIATORS
     DESIGNER: Dark bg (slate-900), white text. 4-col grid on desktop.
               Icons are placeholder SVGs — replace with final icon set.
     FRONTEND: Data is in the differentiators array above.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 py-16 text-white lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold text-white lg:text-4xl">Why teams choose Xporate</h2>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each differentiators as item, i (item.title)}
				<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
					<!-- DESIGNER NOTE: Replace number badge with final icon -->
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-lg font-bold text-orange-400">
						{i + 1}
					</div>
					<h3 class="text-base font-semibold text-white">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     LOCATIONS BROWSER
     DESIGNER: White bg. City grid — 5-col on desktop.
               Consider adding a map visual or India outline graphic.
     FRONTEND: Top cities are hardcoded — replace with API/CMS data.
               Each city links to /locations/{city}/ (new template route).
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Browse locations</h2>
			<p class="mt-3 text-slate-500">
				Explore cities, then filter by workspace type and locality.
			</p>
		</div>
		<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
			{#each topCities as city (city)}
				<a
					href={`/locations/${city.toLowerCase()}/`}
					class="rounded-xl border border-slate-200 px-4 py-4 text-center text-sm font-medium text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
				>
					{city}
				</a>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="/locations/" class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
				View all cities
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     HOW WE WORK
     DESIGNER: Sky-50 bg. 4-step horizontal process on desktop,
               vertical stacked on mobile.
               Consider adding connecting lines between steps.
     FRONTEND: Links to /how-we-work/ (new page, full detail).
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">How we work</h2>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howWeWork as step (step.step)}
				<div class="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
					<span class="mb-4 block text-3xl font-black text-sky-100">{step.step}</span>
					<h3 class="text-base font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="/how-we-work/" class="text-sm font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900">
				How We Work (full page) →
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     PROOF — REVIEWS + CASE STUDIES
     DESIGNER: Slate-50 bg. 3 placeholder review cards + logo row.
               Replace with real reviews and client logos in production.
     FRONTEND: Wire up to reviews CMS or Google Reviews API.
               Do NOT hardcode review counts — only show if verified.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Proof and outcomes</h2>
		</div>

		<!-- PLACEHOLDER: Replace with real reviews component -->
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [1, 2, 3] as i (i)}
				<div class="rounded-2xl border border-slate-200 bg-white p-6">
					<div class="mb-3 flex text-orange-400" aria-label="5 stars">
						{#each [1, 2, 3, 4, 5] as s (s)}
							<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{/each}
					</div>
					<!-- FRONTEND NOTE: Replace placeholder text with real review content -->
					<p class="text-sm italic leading-relaxed text-slate-500">
						[Review {i} — placeholder. Wire up to reviews CMS or API before launch.]
					</p>
					<p class="mt-3 text-xs font-semibold text-slate-400">[Client Name · City]</p>
				</div>
			{/each}
		</div>

		<!-- DESIGNER NOTE: Add logo strip (client logos) below reviews -->
		<div class="mt-8 rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center text-sm text-slate-400">
			[Client logo strip — DESIGNER: add logos here. BACKEND: load from CMS.]
		</div>

		<div class="mt-8 text-center">
			<a href="/case-studies/" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
				View Case Studies →
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FAQ
     DESIGNER: White bg. Accordion expand/collapse.
               Max width ~700px centered for readability.
     FRONTEND: FAQ data is in faqItems array above.
               In production, load from CMS and share with /faqs page.
     SEO:      Add FAQPage JSON-LD schema from these items before launch.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Frequently Asked Questions</h2>
		</div>
		<div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
			{#each faqItems as item, i (item.q)}
				<div>
					<button
						onclick={() => (openFaq = openFaq === i ? null : i)}
						class="flex w-full items-center justify-between px-6 py-5 text-left"
						aria-expanded={openFaq === i}
					>
						<span class="pr-4 text-base font-medium text-slate-900">{item.q}</span>
						<svg
							class="h-5 w-5 shrink-0 text-slate-400 transition duration-200"
							class:rotate-180={openFaq === i}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === i}
						<div class="px-6 pb-5 text-sm leading-relaxed text-slate-600">
							{item.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FINAL CTA
     DESIGNER: Warm dark gradient bg. Centered layout.
               Optional: add a subtle pattern or texture overlay.
     FRONTEND: Form helper text is shown — if a contact form is
               embedded here, wire it to the /book/ backend.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-gradient-to-br from-slate-900 to-orange-950 py-20 text-white lg:py-24">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white lg:text-4xl">Book a consultation</h2>
		<p class="mt-4 text-lg leading-relaxed text-slate-300">
			Tell us your city plan, business type, and timeline—we'll recommend the cleanest route and the
			right hub page to start from.
		</p>

		<!-- Form helper — DESIGNER: If a short form is added here, show these fields -->
		<p class="mt-3 text-sm text-slate-500">
			Share your city, business type, founders count, whether you need GST now, whether you already
			have a CA/CS, and whether you're also considering Dubai/UAE.
		</p>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
			>
				Book Consultation
			</a>
			<a
				href="/locations/"
				class="rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Explore Locations
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-lg border border-[#25d366]/50 bg-[#25d366]/10 px-8 py-3.5 text-base font-semibold text-[#4ade80] transition hover:bg-[#25d366]/20"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
				</svg>
				WhatsApp
			</a>
		</div>
	</div>
</section>
