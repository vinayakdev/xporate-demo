<!--
  /case-studies/ — Case Studies Listing
  ================================================================
  DESIGNER:
  - Hero: slate-900 bg, orange accent H1, 3 trust bullets, disclaimer
  - Filters: sticky white bar below hero — search + 7 filter chips
  - Featured: 3-card grid (white cards, cover image placeholder, outcome headline)
  - Library: paginated 3-col grid (9 per page); tags row on each card
  - "What's inside": 2-col feature list on slate-50 bg
  - Routers: 3-col × 2 tile grid, orange hover border
  - Social proof: logos row placeholder + 2-col testimonial grid
  - Partner CTA: orange gradient banner
  - FAQ: accordion (slate-50 bg)
  - Final CTA: slate-900 bg, orange + whatsapp buttons
  FRONTEND:
  - $state: searchQuery, activeOutcome, activeSolution, showAll, openFaq
  - $derived filteredStudies: filters featured separately from library grid
  - Pagination: showAll toggles from 9 → all
  - FAQ: openFaq index tracks open accordion item
  - All card CTAs link to /case-studies/{slug} (individual pages not yet built)
  BACKEND:
  - Replace allStudies array with CMS fetch (slug, title, summary, tags, cover)
  - CMS fields: title, slug, coverImage, summaryLine, city, workspaceType,
    teamSize, industry, outcome, solutionLine, timeline, isFeatured
  - POST /api/case-studies/feature-request { name, company, email, storyUrl }
  - Track: filter interactions, card clicks, CTA clicks
  SEO:
  - Title: "Xporate Case Studies | Workspace Deals & Setup Outcomes"
  - Meta description targets: "Xporate case studies / client stories / workspace success stories"
  - H1 + H2s carry primary intent keywords
  - Schema: Organization, ItemList (case study cards), BreadcrumbList
  - Internal links to all workspace hubs, /solutions/, /book/, /locations/
-->

<script lang="ts">
	// ── Filter state ────────────────────────────────────────────
	let searchQuery = $state('');
	let activeOutcome = $state('all');
	let activeSolution = $state('all');
	let showAll = $state(false);
	let openFaq = $state<number | null>(null);

	const PAGE_SIZE = 9;

	// ── Filter options ───────────────────────────────────────────
	const outcomeFilters = [
		{ id: 'all', label: 'All Outcomes' },
		{ id: 'moved-faster', label: 'Moved In Faster' },
		{ id: 'cost-clarity', label: 'Cost Clarity' },
		{ id: 'consolidated', label: 'Consolidated Locations' },
		{ id: 'gst-ready', label: 'GST-Ready Address' },
		{ id: 'scaled', label: 'Scaled Headcount' },
		{ id: 'lease-terms', label: 'Better Lease Terms' }
	];

	const solutionFilters = [
		{ id: 'all', label: 'All Solutions' },
		{ id: 'marketplace', label: 'Workspaces Marketplace' },
		{ id: 'corporate-backbone', label: 'Corporate Backbone' },
		{ id: 'uae', label: 'UAE Expansion' }
	];

	// ── Case study data (replace with CMS fetch) ─────────────────
	interface CaseStudy {
		slug: string;
		title: string;
		summary: string;
		city: string;
		workspaceType: string;
		teamSize: string;
		industry: string;
		outcome: string;
		outcomeId: string;
		solutionId: string;
		timeline: string;
		isFeatured: boolean;
	}

	const allStudies: CaseStudy[] = [
		{
			slug: 'fintech-startup-virtual-to-managed-bangalore',
			title: 'From a virtual address to a 20-seat managed office in 6 weeks',
			summary:
				'A Bangalore fintech team needed GST-ready addresses in two states, then scaled to a private office as they closed Series A.',
			city: 'Bangalore',
			workspaceType: 'Managed Office',
			teamSize: '15–25',
			industry: 'Fintech',
			outcome: 'Moved in faster + GST-ready address',
			outcomeId: 'moved-faster',
			solutionId: 'marketplace',
			timeline: '6 weeks',
			isFeatured: true
		},
		{
			slug: 'consulting-firm-lease-negotiation-delhi',
			title: 'How a Delhi consulting firm cut occupancy cost through lease renegotiation',
			summary:
				'With a lease renewal coming up, the ops team used Xporate to shortlist alternatives and negotiate better terms on their existing space.',
			city: 'Delhi NCR',
			workspaceType: 'Commercial Lease',
			teamSize: '30–50',
			industry: 'Consulting',
			outcome: 'Better lease terms',
			outcomeId: 'lease-terms',
			solutionId: 'marketplace',
			timeline: '8 weeks',
			isFeatured: true
		},
		{
			slug: 'ecommerce-gst-address-multiple-cities',
			title: 'Multi-city GST addresses activated in under 2 weeks',
			summary:
				'An e-commerce brand expanding to Pune and Hyderabad needed verified addresses for GST registration before their catalogue went live.',
			city: 'Pune / Hyderabad',
			workspaceType: 'Virtual Office',
			teamSize: '5–15',
			industry: 'E-Commerce',
			outcome: 'GST-ready address',
			outcomeId: 'gst-ready',
			solutionId: 'corporate-backbone',
			timeline: '12 days',
			isFeatured: true
		},
		{
			slug: 'logistics-company-coworking-to-managed-mumbai',
			title: 'Logistics startup moved from scattered coworking seats to a private floor',
			summary:
				'The team was split across three coworking spaces in Mumbai. We shortlisted three managed office options with trade-offs on commute, fit-out, and lock-in.',
			city: 'Mumbai',
			workspaceType: 'Managed Office',
			teamSize: '25–40',
			industry: 'Logistics',
			outcome: 'Consolidated locations',
			outcomeId: 'consolidated',
			solutionId: 'marketplace',
			timeline: '5 weeks',
			isFeatured: false
		},
		{
			slug: 'saas-company-uae-expansion-dubai',
			title: 'SaaS company set up a Dubai free-zone entity with a registered address',
			summary:
				'An Indian SaaS founder needed a UAE free-zone registration, registered address, and bank account guidance before their first enterprise contract.',
			city: 'Dubai',
			workspaceType: 'Virtual Office',
			teamSize: '5–15',
			industry: 'SaaS',
			outcome: 'GST-ready address',
			outcomeId: 'gst-ready',
			solutionId: 'uae',
			timeline: '3 weeks',
			isFeatured: false
		},
		{
			slug: 'manufacturing-firm-hq-lease-chennai',
			title: 'Manufacturing firm signed a 3-year HQ lease with full due diligence support',
			summary:
				'First time taking a long-term commercial lease in Chennai — we provided a shortlist of 5 options, site visit coordination, and lease review sequencing.',
			city: 'Chennai',
			workspaceType: 'Commercial Lease',
			teamSize: '50+',
			industry: 'Manufacturing',
			outcome: 'Better lease terms',
			outcomeId: 'lease-terms',
			solutionId: 'marketplace',
			timeline: '10 weeks',
			isFeatured: false
		},
		{
			slug: 'agency-headcount-scale-coworking-hyderabad',
			title: 'Creative agency scaled from 8 to 30 seats without a lease commitment',
			summary:
				'Rapid hiring meant the agency needed flexible seat additions. We found a coworking space in Hyderabad that allowed month-on-month expansions.',
			city: 'Hyderabad',
			workspaceType: 'Coworking',
			teamSize: '25–40',
			industry: 'Agency / Creative',
			outcome: 'Scaled headcount',
			outcomeId: 'scaled',
			solutionId: 'marketplace',
			timeline: '4 weeks',
			isFeatured: false
		},
		{
			slug: 'healthcare-startup-compliant-address-pune',
			title: 'Healthcare startup activated a compliance-ready registered address in Pune',
			summary:
				'A DPIIT-registered startup needed a valid registered office address for MCA filings and investor due diligence — resolved in 8 business days.',
			city: 'Pune',
			workspaceType: 'Virtual Office',
			teamSize: '5–15',
			industry: 'Healthcare',
			outcome: 'GST-ready address',
			outcomeId: 'gst-ready',
			solutionId: 'corporate-backbone',
			timeline: '8 days',
			isFeatured: false
		},
		{
			slug: 'ngo-cost-clarity-shared-office-bangalore',
			title: 'NGO reduced total occupancy cost by switching to a shared managed office',
			summary:
				'With grant funding under scrutiny, the finance lead needed a lower, predictable monthly cost for their Bangalore office. We modelled three scenarios with total cost of occupancy.',
			city: 'Bangalore',
			workspaceType: 'Managed Office',
			teamSize: '5–15',
			industry: 'Non-Profit / NGO',
			outcome: 'Cost clarity',
			outcomeId: 'cost-clarity',
			solutionId: 'marketplace',
			timeline: '3 weeks',
			isFeatured: false
		},
		{
			slug: 'retail-brand-pop-up-to-coworking-chennai',
			title: 'Retail brand transitioned their admin team from pop-up to coworking',
			summary:
				'A Chennai-based retail brand needed a permanent coworking base for their back-office team after outgrowing a temporary setup.',
			city: 'Chennai',
			workspaceType: 'Coworking',
			teamSize: '5–15',
			industry: 'Retail',
			outcome: 'Moved in faster',
			outcomeId: 'moved-faster',
			solutionId: 'marketplace',
			timeline: '2 weeks',
			isFeatured: false
		},
		{
			slug: 'tech-startup-multiple-city-coworking-pass',
			title: 'Tech startup enabled remote team to work from coworking in 4 cities',
			summary:
				'Distributed team with members in Bangalore, Pune, Delhi, and Hyderabad — we sourced coworking plans with consistent access across all four cities.',
			city: 'Multi-city',
			workspaceType: 'Coworking',
			teamSize: '15–25',
			industry: 'Technology',
			outcome: 'Scaled headcount',
			outcomeId: 'scaled',
			solutionId: 'marketplace',
			timeline: '3 weeks',
			isFeatured: false
		},
		{
			slug: 'law-firm-private-office-delhi',
			title: 'Law firm secured a private office with meeting rooms in Connaught Place',
			summary:
				'Client-facing team needed a prestigious Delhi address with access to private meeting rooms. We shortlisted 4 options with per-meeting-room costs compared.',
			city: 'Delhi NCR',
			workspaceType: 'Managed Office',
			teamSize: '5–15',
			industry: 'Legal',
			outcome: 'Moved in faster',
			outcomeId: 'moved-faster',
			solutionId: 'marketplace',
			timeline: '4 weeks',
			isFeatured: false
		}
	];

	const featuredStudies = allStudies.filter((s) => s.isFeatured);

	// ── Derived filtered library ──────────────────────────────────
	const filteredLibrary = $derived(
		allStudies.filter((s) => {
			const q = searchQuery.toLowerCase().trim();
			const matchesSearch =
				q === '' ||
				s.title.toLowerCase().includes(q) ||
				s.summary.toLowerCase().includes(q) ||
				s.city.toLowerCase().includes(q) ||
				s.industry.toLowerCase().includes(q) ||
				s.workspaceType.toLowerCase().includes(q);
			const matchesOutcome = activeOutcome === 'all' || s.outcomeId === activeOutcome;
			const matchesSolution = activeSolution === 'all' || s.solutionId === activeSolution;
			return matchesSearch && matchesOutcome && matchesSolution;
		})
	);

	const visibleStudies = $derived(
		showAll ? filteredLibrary : filteredLibrary.slice(0, PAGE_SIZE)
	);

	const hasMore = $derived(filteredLibrary.length > PAGE_SIZE && !showAll);

	// ── Routers ───────────────────────────────────────────────────
	const routers = [
		{
			heading: 'Need a verification-ready address?',
			label: 'Virtual Office India Hub',
			href: '/virtual-office/'
		},
		{
			heading: 'Need desks for your team?',
			label: 'Coworking Hub',
			href: '/coworking-space/'
		},
		{
			heading: 'Need a private branded office without CapEx?',
			label: 'Managed Office Hub',
			href: '/manage-office/'
		},
		{
			heading: 'Ready for a long-term HQ lease?',
			label: 'Commercial Leasing Hub',
			href: '/commercial-leasing/'
		},
		{
			heading: 'Not sure which workspace stage fits?',
			label: 'Scale Your Workspace',
			href: '/solutions/scale-your-workspace/'
		},
		{
			heading: 'Need company / GST + ongoing compliance support?',
			label: 'Solutions Overview',
			href: '/solutions/'
		}
	];

	// ── What's inside ─────────────────────────────────────────────
	const insideItems = [
		{
			heading: 'The goal',
			body: 'What the team needed — address, desks, privacy, budget, and move-in window.'
		},
		{
			heading: 'The constraints',
			body: 'Location preferences, compliance needs, timing, procurement, and must-have amenities.'
		},
		{
			heading: 'The shortlist and trade-offs',
			body: 'Options compared with pros and cons so the team could make a confident decision.'
		},
		{
			heading: 'The workflow',
			body: 'How we moved from requirements to shortlist to site visit to paperwork to activation.'
		},
		{
			heading: 'The outcome',
			body: 'What changed after activation — time saved, smoother setup, cost clarity. Results vary by case.'
		}
	];

	// ── FAQ ───────────────────────────────────────────────────────
	const faqs = [
		{
			q: 'Are the results guaranteed?',
			a: 'No. Every deal and workflow varies by city, provider availability, timeline, and documentation profile. Case studies reflect specific outcomes and results may vary.'
		},
		{
			q: 'Can you help shortlist spaces for my city and budget?',
			a: 'Yes. Share your city, locality preferences, seat count, and move-in date and we will prepare a shortlist with trade-offs explained.'
		},
		{
			q: 'Do you handle documentation for registrations?',
			a: 'We support documentation readiness and workflow sequencing. Approvals depend on authority checks and timelines outside our control.'
		}
	];
</script>

<svelte:head>
	<title>Xporate Case Studies | Workspace Deals & Setup Outcomes</title>
	<meta
		name="description"
		content="See how Xporate helped teams shortlist workspaces, activate offices faster, and stay compliance-ready. Browse outcomes by city, team size, and solution."
	/>
</svelte:head>

<!-- ═══════════════════════════════════════════════
     HERO
     DESIGNER: slate-900 bg, H1 + sub, 3 trust bullets, disclaimer
     SEO: targets "Xporate case studies / client stories / workspace success stories"
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white sm:py-20">
	<div class="mx-auto max-w-3xl text-center">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex justify-center gap-1 text-sm text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="hover:text-white">Home</a>
			<span>/</span>
			<span class="text-white">Case Studies</span>
		</nav>

		<p class="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
			Client Stories
		</p>
		<h1 class="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
			Real outcomes, real workflows
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
			See how teams used Xporate to choose the right workspace stage, activate faster, and
			stay documentation-ready.
		</p>

		<!-- Trust bullets -->
		<div class="mb-8 flex flex-wrap justify-center gap-3">
			{#each [
				'Shortlists explained with trade-offs',
				'Virtual → seats → managed → lease transitions',
				'Documentation-ready approach for registrations'
			] as bullet (bullet)}
				<span
					class="rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm text-slate-300"
				>
					{bullet}
				</span>
			{/each}
		</div>

		<!-- CTAs -->
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href="/book/"
				class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
			>
				Book Consultation
			</a>
			<a
				href="/locations/"
				class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
			>
				Explore Locations
			</a>
			<a
				href="https://wa.me/917060706076"
				class="rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
			>
				WhatsApp
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FILTERS + SEARCH
     DESIGNER: sticky white bar; search full-width, filter chips below
     FRONTEND: searchQuery + activeOutcome + activeSolution → $derived filteredLibrary
     ═══════════════════════════════════════════════ -->
<section class="sticky top-16 z-20 border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
	<div class="mx-auto max-w-5xl space-y-3">
		<h2 class="sr-only">Browse case studies</h2>

		<!-- Search input -->
		<div class="relative">
			<svg
				class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1 0 3 10a7 7 0 0 0 13.65 6.65z"
				/>
			</svg>
			<input
				type="search"
				bind:value={searchQuery}
				placeholder="Search by city, industry, workspace type, or outcome…"
				class="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
			/>
		</div>

		<!-- Outcome chips -->
		<div class="flex flex-wrap gap-2">
			{#each outcomeFilters as f (f.id)}
				<button
					onclick={() => (activeOutcome = f.id)}
					class={[
						'rounded-full border px-3.5 py-1 text-xs font-medium transition-colors',
						activeOutcome === f.id
							? 'border-orange-500 bg-orange-500 text-white'
							: 'border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
					].join(' ')}
				>
					{f.label}
				</button>
			{/each}
		</div>

		<!-- Solution chips -->
		<div class="flex flex-wrap gap-2">
			{#each solutionFilters as f (f.id)}
				<button
					onclick={() => (activeSolution = f.id)}
					class={[
						'rounded-full border px-3.5 py-1 text-xs font-medium transition-colors',
						activeSolution === f.id
							? 'border-slate-700 bg-slate-700 text-white'
							: 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-700'
					].join(' ')}
				>
					{f.label}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FEATURED CASE STUDIES (TOP 3)
     DESIGNER: 3-col grid, white cards, cover image placeholder, tag chips
     BACKEND: filter isFeatured === true from CMS
     ═══════════════════════════════════════════════ -->
{#if searchQuery === '' && activeOutcome === 'all' && activeSolution === 'all'}
	<section class="bg-slate-50 px-4 py-14 sm:py-16">
		<div class="mx-auto max-w-5xl">
			<h2 class="mb-2 text-2xl font-bold text-slate-900">Featured stories</h2>
			<p class="mb-8 text-slate-600">Handpicked outcomes across workspace types and cities.</p>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each featuredStudies as study (study.slug)}
					<article
						class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
					>
						<!-- Cover placeholder -->
						<div
							class="flex h-36 items-center justify-center bg-gradient-to-br from-slate-100 to-orange-50"
							aria-hidden="true"
						>
							<span class="text-3xl">🏢</span>
						</div>

						<div class="flex flex-1 flex-col p-5">
							<!-- Tag chips -->
							<div class="mb-3 flex flex-wrap gap-1.5">
								<span
									class="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700"
								>
									{study.city}
								</span>
								<span
									class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
								>
									{study.workspaceType}
								</span>
								<span
									class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
								>
									{study.teamSize} seats
								</span>
							</div>

							<!-- Title -->
							<h3 class="mb-2 flex-1 text-base font-semibold leading-snug text-slate-900">
								{study.title}
							</h3>

							<!-- Outcome + timeline -->
							<p class="mb-4 text-sm text-slate-500">
								<span class="font-medium text-slate-700">Outcome:</span>
								{study.outcome} · {study.timeline}
							</p>

							<a
								href="/case-studies/{study.slug}"
								class="mt-auto inline-block rounded-lg bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
							>
								Read case study
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- ═══════════════════════════════════════════════
     CASE STUDY LIBRARY (ALL)
     DESIGNER: 3-col paginated grid, tag chips, "Load more" button
     FRONTEND: visibleStudies limited to PAGE_SIZE; showAll reveals rest
     BACKEND: replace with paginated CMS query
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">All case studies</h2>
		<p class="mb-8 text-slate-600">
			{filteredLibrary.length} stories matching your filters.
		</p>

		{#if filteredLibrary.length === 0}
			<div class="py-16 text-center">
				<p class="mb-4 text-lg text-slate-500">
					No case studies match your search or filters.
				</p>
				<button
					onclick={() => {
						searchQuery = '';
						activeOutcome = 'all';
						activeSolution = 'all';
					}}
					class="text-sm font-medium text-orange-500 hover:underline"
				>
					Clear all filters
				</button>
			</div>
		{:else}
			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each visibleStudies as study (study.slug)}
					<article
						class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
					>
						<!-- Tag chips -->
						<div class="mb-3 flex flex-wrap gap-1.5">
							<span
								class="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700"
							>
								{study.city}
							</span>
							<span
								class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
							>
								{study.teamSize} seats
							</span>
							<span
								class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
							>
								{study.workspaceType}
							</span>
						</div>

						<!-- Title (H3) -->
						<h3 class="mb-2 flex-1 text-base font-semibold leading-snug text-slate-900">
							{study.title}
						</h3>

						<!-- Summary -->
						<p class="mb-4 line-clamp-3 text-sm text-slate-500">
							{study.summary}
						</p>

						<!-- Footer: outcome + CTA -->
						<div class="mt-auto flex items-center justify-between gap-2">
							<span class="text-xs font-medium text-slate-500">
								{study.outcome}
							</span>
							<a
								href="/case-studies/{study.slug}"
								class="shrink-0 rounded-lg bg-orange-500 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
							>
								Read more
							</a>
						</div>
					</article>
				{/each}
			</div>

			{#if hasMore}
				<div class="mt-10 text-center">
					<button
						onclick={() => (showAll = true)}
						class="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-400 hover:text-orange-600"
					>
						Load all {filteredLibrary.length} case studies
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     WHAT A CASE STUDY INCLUDES
     DESIGNER: slate-50 bg, 2-col grid of feature items, orange left border
     SEO: establishes content depth / E-E-A-T signals
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">What you'll see inside each case study</h2>
		<p class="mb-10 text-slate-600">
			Every story follows the same structure so you can compare apples to apples.
		</p>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each insideItems as item (item.heading)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
					<div class="mb-3 inline-block rounded-lg bg-orange-100 p-2">
						<svg
							class="h-5 w-5 text-orange-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-slate-900">{item.heading}</h3>
					<p class="text-sm leading-relaxed text-slate-600">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     ROUTERS (INTERNAL LINKING)
     DESIGNER: 3×2 tile grid, slate border → orange hover border + bg
     SEO: internal links into all hub pages and /solutions/
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Explore the same path</h2>
		<p class="mb-10 text-slate-600">
			Pick your goal and we'll route you to the right hub.
		</p>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each routers as r (r.href)}
				<a
					href={r.href}
					class="group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-orange-400 hover:bg-orange-50"
				>
					<p class="mb-2 text-sm text-slate-600 group-hover:text-slate-700">
						{r.heading}
					</p>
					<p class="font-semibold text-orange-500 group-hover:text-orange-600">
						{r.label} →
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     SOCIAL PROOF
     DESIGNER: light slate-50 bg, logos row placeholder + 2-col testimonial grid
     BACKEND: wire to CMS logos + testimonials arrays; no unverified counts
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-2xl font-bold text-slate-900">
			Trusted by teams across India
		</h2>

		<!-- Logos placeholder row -->
		<div
			class="mb-12 flex flex-wrap items-center justify-center gap-8 opacity-60"
			aria-label="Client logos"
		>
			{#each Array(6) as _, i (i)}
				<div class="h-8 w-24 rounded bg-slate-300" aria-hidden="true"></div>
			{/each}
		</div>

		<!-- Testimonial cards -->
		<div class="grid gap-6 sm:grid-cols-2">
			{#each [
				{
					quote:
						"Xporate didn't just send a list of coworking spaces — they explained the trade-offs for each option and we made a decision in one meeting.",
					name: 'Ops Lead',
					org: 'Series A Fintech, Bangalore'
				},
				{
					quote:
						'Our GST addresses in three cities were active within two weeks. The documentation sequencing saved us a lot of back-and-forth.',
					name: 'Founder',
					org: 'E-Commerce Brand, Pune'
				}
			] as t (t.org)}
				<blockquote
					class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
				>
					<p class="mb-4 text-slate-700 italic">"{t.quote}"</p>
					<footer class="text-sm font-medium text-slate-900">
						{t.name}
						<span class="font-normal text-slate-500"> — {t.org}</span>
					</footer>
				</blockquote>
			{/each}
		</div>

		<p class="mt-6 text-center text-xs text-slate-400">
			Results may vary by city, provider availability, team size, and documentation profile.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     CASE STUDY SUBMISSION (B2B PARTNERS)
     DESIGNER: orange gradient banner; single CTA button
     BACKEND: CTA links to /list-your-space/
     ═══════════════════════════════════════════════ -->
<section class="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-14 text-white">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-3 text-2xl font-bold sm:text-3xl">Want your story featured?</h2>
		<p class="mb-8 text-orange-100">
			If you listed your space with Xporate or used our marketplace and want to share an
			outcome, submit your details.
		</p>
		<a
			href="/list-your-space/"
			class="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
		>
			List your space
		</a>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FAQ
     DESIGNER: slate-50 bg, accordion with chevron rotate
     FRONTEND: openFaq index tracks open item; onclick toggles
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-8 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>

		<div class="space-y-3">
			{#each faqs as faq, i (faq.q)}
				<div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
					<button
						onclick={() => (openFaq = openFaq === i ? null : i)}
						class="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50"
						aria-expanded={openFaq === i}
					>
						<span>{faq.q}</span>
						<svg
							class={['h-5 w-5 shrink-0 text-slate-400 transition-transform', openFaq === i ? 'rotate-180' : ''].join(' ')}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === i}
						<div class="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
							<p>{faq.a}</p>
							{#if i === 1}
								<a
									href="/book/"
									class="mt-3 inline-block font-medium text-orange-500 hover:underline"
								>
									Book Consultation →
								</a>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FINAL CTA
     DESIGNER: slate-900 bg, orange primary + whatsapp buttons
     SEO: reinforces consult intent, links to /book/ and /locations/
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-3 text-2xl font-bold sm:text-3xl">Want a similar outcome?</h2>
		<p class="mb-8 text-slate-300">
			Tell us your city, headcount, timeline, and whether you need an address, desks, a
			private office, or a lease.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
			>
				Book Consultation
			</a>
			<a
				href="/locations/"
				class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
			>
				Explore Locations
			</a>
			<a
				href="https://wa.me/917060706076"
				class="rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
			>
				WhatsApp
			</a>
		</div>
	</div>
</section>
