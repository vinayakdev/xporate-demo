<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/virtual-office/[city]/+page.svelte               ║
║  URL:   /virtual-office/{city}/                                      ║
║  ROLE:  Primary SEO landing page for "virtual office in {City}"     ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: dark slate/sky gradient, same pattern as India hub.        ║
║    Breadcrumb: Home → Virtual Office → {City}.                      ║
║  · Centres section is the primary conversion module — give it the   ║
║    most visual weight. Consider a card-based grid with a sidebar    ║
║    filter panel on desktop.                                         ║
║  · Locality chips: pill buttons. Active chip = sky-500 fill.        ║
║    In production, clicking a chip should filter the centres grid.   ║
║  · Centre cards: name + locality + address + price + doc pack tags  ║
║    + "View centre" CTA. Add a "Popular" or "Premium" badge where    ║
║    available.                                                       ║
║  · Cost comparison table: keep it simple — 2 rows is enough.       ║
║  · Mobile: all cards stack to full-width. Locality chips scroll      ║
║    horizontally.                                                    ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · City name and localities come from +page.ts (load function).     ║
║  · Centres are placeholder data — replace with real inventory API.  ║
║  · Locality chip filter: currently UI-only (scroll anchor).         ║
║    In production, wire to ?locality= query param + reactive filter. ║
║  · FAQ accordion: same $state pattern as other pages.               ║
║  · Pricing badge is per-centre in production; currently static.     ║
║  · svelte:head uses data.cityName for dynamic title/description.    ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Centres listing: replace buildPlaceholderCentres() in +page.ts  ║
║    with a real DB/API query: GET /api/inventory?city={city}&cat=vo  ║
║  · Centre detail pages: /virtual-office/{city}/{locality}/{slug}    ║
║    Build as a separate [locality]/[slug] route.                     ║
║  · Locality chips: should be generated from actual inventory —      ║
║    only show localities that have at least one active centre.       ║
║  · Pricing anchor: CMS-editable per city and per centre.            ║
║  · Analytics: track locality chip clicks, centre card clicks,       ║
║    consultation starts. See implementation notes at bottom of file. ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · CANONICAL: /virtual-office/{city}/ — never redirect to a centre. ║
║  · H1 pattern: "Virtual Office in {City} (verification-ready...)"   ║
║    Do not change this pattern without SEO sign-off.                 ║
║  · Centre detail URL: /virtual-office/{city}/{locality}/{slug}      ║
║    Keep slug consistent across all workspace categories.            ║
║  · Schema to add before launch:                                      ║
║    Organization, WebSite, FAQPage, CollectionPage, ItemList(centres)║
║  · Internal link to India hub: /virtual-office/ (on every city pg)  ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let openFaq = $state<number | null>(null);

	// FRONTEND NOTE: In production, wire this to ?locality= query param
	// and use it to filter the centres grid reactively.
	let activeLocality = $state<string | null>(null);

	const faqItems = $derived([
		{
			q: `Can I use a virtual office in ${data.cityName} for GST registration?`,
			a: `In many genuine cases, yes—when the premises is real, commercially suitable, and supported with the correct permission trail and current address proofs. Acceptance depends on the authority's checks.`
		},
		{
			q: `Can I use a virtual office in ${data.cityName} for company registration (MCA)?`,
			a: `In many cases, yes. You'll need a clear proof-of-right-to-use (rent agreement) plus permission (NOC) and a recent utility bill.`
		},
		{
			q: 'What documents will I receive?',
			a: 'Typically: rent agreement, owner NOC (explicit consent for GST/MCA), and a recent utility bill copy (typically not older than ~2 months). Signage support may be provided (as applicable).'
		},
		{
			q: 'How fast can I receive the document pack?',
			a: 'Often within 24–48 hours after KYC/KYB submission (as applicable). Timelines can vary by centre and document requirements.'
		},
		{
			q: 'Do you guarantee approval?',
			a: "No. We focus on documentation completeness, consistency, and verification readiness. Acceptance depends on the authority's checks."
		},
		{
			q: 'What if a verification visit is requested?',
			a: 'If physical verification is requested, we assist with on-ground coordination (case dependent).'
		}
	]);

	const docPackItems = [
		'Rent Agreement (11-month / multi-year)',
		'Owner NOC (GST/MCA consent)',
		'Recent Utility Bill (~2 months)',
		'Signage at Premises'
	];

	const useCases = $derived([
		{
			title: 'Company Registration (MCA)',
			desc: 'Compliant registered office address with a clear permission trail and current proofs.'
		},
		{
			title: 'GST Registration',
			desc: 'Verifiable commercial address supported by the correct document set.'
		},
		{
			title: 'APOB / Multi-State Expansion',
			desc: `For businesses expanding into ${data.cityName} needing additional GST coverage (case dependent).`
		},
		{
			title: 'Brand Credibility',
			desc: `A premium ${data.cityName} address for website, letterheads and client trust — without the overhead.`
		}
	]);
</script>

<svelte:head>
	<title>Virtual Office in {data.cityName} (GST/MCA Docs) | Xporate</title>
	<meta
		name="description"
		content="Virtual office in {data.cityName} from ₹8,000/year (location-dependent). Get rent agreement, owner NOC and utility bill in 24–48 hours after KYC/KYB, plus signage support."
	/>
	<!--
    FRONTEND NOTE: Add JSON-LD before launch:
    - Organization
    - WebSite (SearchAction)
    - Service (Virtual Office {cityName})
    - FAQPage (faqItems)
    - CollectionPage (city centre listing)
    - ItemList (centres → /virtual-office/{city}/{locality}/{slug})
  -->
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════
     HERO
     DESIGNER: Same dark gradient as India hub. Breadcrumb included.
               Right side: consider a simple locality map pin cluster
               graphic or a city skyline silhouette.
     SEO:      H1 pattern must remain: "Virtual Office in {City}..."
     ═══════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 py-20 text-white lg:py-28">
	<div
		class="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Breadcrumb — SEO NOTE: keep this exact hierarchy -->
		<nav class="mb-5 flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="transition hover:text-white">Home</a>
			<span>/</span>
			<a href="/virtual-office/" class="transition hover:text-white">Virtual Office</a>
			<span>/</span>
			<span class="text-slate-200">{data.cityName}</span>
		</nav>

		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
			Address for Registrations · Document Pack · Locality-Wise Options · Verification Support
		</p>

		<h1 class="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
			Virtual Office in {data.cityName}
			<span class="block text-sky-400">verification-ready address + GST/MCA document pack</span>
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Get a legal commercial address in {data.cityName} without renting a physical seat or cabin.
			Designed for founders and businesses that need clean, consistent address proofs for GST and
			MCA filings.
		</p>

		<!-- CTAs -->
		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href="#centres"
				class="rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				View Centres in {data.cityName}
			</a>
			<a
				href="/book/"
				class="rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Book Consultation
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-lg border border-[#25d366]/50 bg-[#25d366]/10 px-6 py-3 text-base font-semibold text-[#4ade80] transition hover:bg-[#25d366]/20"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
				</svg>
				WhatsApp
			</a>
		</div>

		<!-- Trust bullets -->
		<div class="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
			{#each ['Rent agreement + owner NOC + utility bill', 'Documents in 24–48 hours after KYC/KYB (as applicable)', 'Signage support at premises (as applicable)', 'Verification coordination if requested (as applicable)'] as bullet (bullet)}
				<div class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
					<svg class="mt-0.5 h-4 w-4 shrink-0 text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm leading-snug text-slate-200">{bullet}</span>
				</div>
			{/each}
		</div>

		<!-- Compliance disclaimer — LEGAL: Do not remove -->
		<p class="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
			<strong class="text-slate-400">Note:</strong> We don't guarantee GST/MCA approvals. Acceptance
			depends on your profile and the authority's checks. We focus on documentation completeness,
			consistency, and verification readiness.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     PRICING ANCHOR
     DESIGNER: White bg. Simple 2-col: price anchor left, doc pack right.
     BACKEND:  Starting price must be CMS-editable per city.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-12 lg:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 lg:grid-cols-2 lg:items-center">
			<div>
				<h2 class="text-2xl font-bold text-slate-900 lg:text-3xl">
					Pricing in {data.cityName}
				</h2>
				<div class="mt-4 flex items-baseline gap-2">
					<span class="text-4xl font-black text-slate-900">₹8,000</span>
					<span class="text-slate-500">/year</span>
					<span class="text-sm text-slate-400">(location-dependent)</span>
				</div>
				<p class="mt-2 text-sm text-slate-500">
					Final pricing varies by locality, building, and plan inclusions.
				</p>
				<a
					href="#centres"
					class="mt-5 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
				>
					See centres and quotes in {data.cityName}
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</a>
			</div>

			<!-- Document pack summary -->
			<div class="rounded-2xl border border-sky-100 bg-sky-50 p-6">
				<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-700">
					Included in every plan
				</p>
				<ul class="space-y-2.5">
					{#each docPackItems as item (item)}
						<li class="flex items-center gap-3 text-sm text-slate-700">
							<svg class="h-4 w-4 shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
     USE CASES
     DESIGNER: Sky-50 bg. 4-col grid. Same card style as India hub.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900 lg:text-3xl">
			Why businesses use a virtual office in {data.cityName}
		</h2>
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each useCases as uc (uc.title)}
				<div class="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
					<div class="mb-3 h-1.5 w-8 rounded-full bg-sky-400"></div>
					<h3 class="text-sm font-semibold text-slate-900">{uc.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{uc.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     CENTRES LISTING — PRIMARY CONVERSION MODULE
     DESIGNER: White bg. Search bar + locality chips + card grid.
               Filter sidebar optional on desktop.
               Centre cards: name, locality, address, price, doc tags, CTA.
               "Popular" / "Premium" badge on select cards.
     FRONTEND: Locality chip filter is UI-only for demo.
               In production:
               1. Active chip sets activeLocality state
               2. Centres grid filters reactively: centres.filter(c => ...)
               3. URL reflects filter: /virtual-office/{city}/?locality=koramangala
     BACKEND:  Replace placeholder centres with real inventory query.
               Shape: { name, locality, localitySlug, address, pricePerYear, slug, badge? }
     ANALYTICS: Track chip clicks (locality), centre card clicks, CTA clicks.
     ═══════════════════════════════════════════════════════════ -->
<section id="centres" class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">
				Centres in {data.cityName}
			</h2>
			<p class="mt-3 text-slate-500">
				Browse virtual office locations by locality — select a centre to view documents, inclusions,
				and quote.
			</p>
		</div>

		<!-- Search bar — FRONTEND: wire to locality/centre name filter -->
		<div class="mb-8 flex overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm">
			<svg class="ml-4 h-5 w-5 self-center shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input
				type="text"
				placeholder="Search by locality, landmark, or centre name…"
				class="flex-1 border-0 bg-transparent px-3 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-0"
			/>
			<button class="bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
				Search
			</button>
		</div>

		<!-- Locality filter chips
             FRONTEND NOTE: In production, onclick sets activeLocality and filters the grid.
             DESIGNER NOTE: Chips scroll horizontally on mobile (overflow-x-auto). -->
		<div class="mb-8 flex flex-wrap gap-2">
			<button
				onclick={() => (activeLocality = null)}
				class="rounded-full px-4 py-1.5 text-sm font-medium transition"
				class:bg-sky-500={activeLocality === null}
				class:text-white={activeLocality === null}
				class:bg-slate-100={activeLocality !== null}
				class:text-slate-600={activeLocality !== null}
			>
				All localities
			</button>
			{#each data.localities as locality (locality)}
				<button
					onclick={() => (activeLocality = locality === activeLocality ? null : locality)}
					class="rounded-full px-4 py-1.5 text-sm font-medium transition"
					class:bg-sky-500={activeLocality === locality}
					class:text-white={activeLocality === locality}
					class:bg-slate-100={activeLocality !== locality}
					class:text-slate-600={activeLocality !== locality}
				>
					{locality}
				</button>
			{/each}
		</div>

		<!-- Centre cards
             BACKEND NOTE: Replace with real inventory data.
             DESIGNER NOTE: Badge ("Popular"/"Premium") appears top-right on card. -->
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
			{#each data.centres as centre (centre.slug)}
				<div class="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md">
					{#if centre.badge}
						<span class="absolute top-4 right-4 rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
							{centre.badge}
						</span>
					{/if}

					<!-- Location pin -->
					<div class="mb-4 flex items-start gap-3">
						<div class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50">
							<svg class="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-base font-semibold text-slate-900">{centre.name}</h3>
							<p class="text-sm text-slate-500">{centre.locality}{data.state ? `, ${data.state}` : ''}</p>
						</div>
					</div>

					<!-- Address — BACKEND: replace with real address -->
					<p class="mb-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 italic">
						{centre.address}
						<!-- DESIGNER: replace italic placeholder with real address once live -->
					</p>

					<!-- Price + doc pack -->
					<div class="mb-5 flex items-center justify-between">
						<div>
							<p class="text-xs text-slate-400">Starting from</p>
							<p class="text-xl font-bold text-slate-900">
								{centre.pricePerYear}<span class="text-sm font-normal text-slate-500">/year</span>
							</p>
						</div>
						<div class="text-right">
							<p class="text-xs text-slate-400">Document pack</p>
							<p class="text-xs font-medium text-sky-600">Rent Agreement + NOC + Utility Bill</p>
						</div>
					</div>

					<!-- Tags -->
					<div class="mb-5 flex flex-wrap gap-1.5">
						{#each ['GST-ready', 'MCA-ready', 'Signage', '24–48h delivery'] as tag (tag)}
							<span class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600">
								{tag}
							</span>
						{/each}
					</div>

					<!-- CTA — links to centre detail page -->
					<a
						href={`/virtual-office/${data.city}/${centre.localitySlug}/${centre.slug}/`}
						class="mt-auto flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
					>
						View centre details
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			{/each}
		</div>

		<!-- No results / CTA if inventory is thin -->
		<div class="mt-8 rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/50 p-8 text-center">
			<!-- DESIGNER NOTE: Show this only when filtered results = 0, or always show in demo -->
			<p class="text-sm text-slate-500">
				Don't see your preferred locality? We may have unlisted options or can shortlist alternatives.
			</p>
			<a
				href="/book/"
				class="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
			>
				Book a consultation to shortlist
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     HOW IT WORKS
     DESIGNER: Slate-50 bg. Same 5-step pattern as India hub.
               Horizontal on desktop (connecting line), vertical mobile.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-3xl font-bold text-slate-900 lg:text-4xl">
			How it works (from selection to documents)
		</h2>

		<!-- Mobile: vertical stepper -->
		<ol class="space-y-0 lg:hidden">
			{#each [{ step: '01', title: `Select a location in ${data.cityName}`, desc: 'Choose a locality and centre based on your needs.' }, { step: '02', title: 'Submit KYC/KYB digitally', desc: 'We collect the minimum required identity and business details for drafting.' }, { step: '03', title: 'Document processing', desc: 'We draft the rent agreement and secure the owner\'s NOC.' }, { step: '04', title: 'Document delivery', desc: 'GST-ready documents typically delivered within 24–48 hours after KYC/KYB (as applicable).' }, { step: '05', title: 'Verification support (as applicable)', desc: 'If a physical verification visit is requested, we assist with on-ground coordination (case dependent).' }] as step (step.step)}
				<li class="relative flex gap-5 pb-8 last:pb-0">
					<div class="flex flex-col items-center">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
							{step.step}
						</span>
						<div class="mt-2 w-px flex-1 bg-sky-200"></div>
					</div>
					<div class="pb-2 pt-1.5">
						<h3 class="text-base font-semibold text-slate-900">{step.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-500">{step.desc}</p>
					</div>
				</li>
			{/each}
		</ol>

		<!-- Desktop: horizontal 5-col grid -->
		<div class="hidden lg:grid lg:grid-cols-5 lg:gap-4">
			{#each [{ step: '01', title: `Select a location in ${data.cityName}`, desc: 'Choose a locality and centre based on your needs.' }, { step: '02', title: 'Submit KYC/KYB digitally', desc: 'We collect the minimum required identity and business details for drafting.' }, { step: '03', title: 'Document processing', desc: "We draft the rent agreement and secure the owner's NOC." }, { step: '04', title: 'Document delivery', desc: 'GST-ready documents typically within 24–48 hours after KYC/KYB (as applicable).' }, { step: '05', title: 'Verification support (as applicable)', desc: 'We assist with on-ground coordination if verification is requested.' }] as step, i (step.step)}
				<div class="relative">
					{#if i < 4}
						<div class="absolute top-5 left-10 right-0 h-px bg-sky-200" aria-hidden="true"></div>
					{/if}
					<span class="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
						{step.step}
					</span>
					<h3 class="text-sm font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-500">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHAT YOU PROVIDE + WHAT WE PROVIDE
     DESIGNER: White bg. Two-column: intake checklist left,
               deliverables checklist right.
     FRONTEND: Static content. Pull into /book/ form as a pre-checklist.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2">
			<!-- What you provide -->
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h2 class="mb-5 text-xl font-bold text-slate-900">What you'll need (from your side)</h2>
				<ul class="space-y-4">
					{#each [{ label: 'KYC of directors / authorised signatory', detail: 'PAN and Aadhaar (commonly required for MCA/GST).' }, { label: 'KYB (Know Your Business)', detail: 'If already formed: Certificate of Incorporation or Partnership Deed.' }, { label: 'Nature of business', detail: 'A brief on what you do so we can ensure the address and zoning fit a commercial use-case.' }] as item (item.label)}
						<li class="flex items-start gap-3">
							<svg class="mt-0.5 h-5 w-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
							<div>
								<p class="text-sm font-semibold text-slate-800">{item.label}</p>
								<p class="mt-0.5 text-sm text-slate-500">{item.detail}</p>
							</div>
						</li>
					{/each}
				</ul>
				<!-- DEV NOTE: Do not list exhaustive documents here — keep in enquiry flow -->
				<p class="mt-4 text-xs text-slate-400">
					Full document checklist shared during the consultation and enquiry flow.
				</p>
			</div>

			<!-- What we provide -->
			<div class="rounded-2xl bg-sky-500 p-8 text-white">
				<h2 class="mb-5 text-xl font-bold">What you get (verification-ready pack)</h2>
				<ul class="space-y-4">
					{#each [{ label: 'Rent Agreement', detail: 'A legally binding 11-month or multi-year agreement (as applicable).' }, { label: 'Owner NOC', detail: 'Signed by the property owner with explicit consent for GST/MCA use.' }, { label: 'Utility Bill', detail: 'Latest electricity/water bill copy (typically not older than ~2 months).' }, { label: 'Signage Support', detail: 'We display your company name at the premises to meet statutory expectations (as applicable).' }] as item (item.label)}
						<li class="flex items-start gap-3">
							<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<div>
								<p class="text-sm font-semibold text-white">{item.label}</p>
								<p class="mt-0.5 text-sm text-sky-100">{item.detail}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY XPORATE IN THIS CITY
     DESIGNER: Sky-50 bg. 3-col cards.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-10 text-2xl font-bold text-slate-900 lg:text-3xl">
			Why choose Xporate for a virtual office in {data.cityName}
		</h2>
		<div class="grid gap-5 sm:grid-cols-3">
			{#each [{ title: 'Compliance-first approach', desc: 'We prioritize documentation completeness and consistency to reduce preventable delays.' }, { title: 'Physically verifiable premises', desc: 'Not "paper-only" addresses — spaces are real and built for verification-first expectations.' }, { title: 'Support if verification is requested', desc: 'We assist with on-ground coordination if the authority requests a physical verification visit (as applicable).' }] as item (item.title)}
				<div class="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
					<div class="mb-3 h-1.5 w-8 rounded-full bg-sky-500"></div>
					<h3 class="text-base font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     COST COMPARISON
     DESIGNER: White bg. Simple 2-row comparison table + CTA.
     FRONTEND: Numbers are illustrative — confirm with ops/pricing.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-6 text-2xl font-bold text-slate-900 lg:text-3xl">
			Virtual office vs renting a seat in {data.cityName}
		</h2>
		<p class="mb-8 text-slate-600">
			A single dedicated coworking seat in a prime Indian metro starts at roughly ₹5,000/month
			(₹60,000/year). Xporate virtual office plans start from ₹8,000/year (location-dependent),
			saving over 85% in annual overhead while keeping address rights for registrations.
		</p>
		<div class="overflow-hidden rounded-2xl border border-slate-200">
			<div class="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
				<span class="text-sm text-slate-600">Dedicated coworking seat ({data.cityName}, prime locality)</span>
				<span class="text-sm font-semibold text-slate-700">~₹60,000/year</span>
			</div>
			<div class="flex items-center justify-between bg-sky-500 px-6 py-4">
				<span class="text-sm font-medium text-white">Xporate Virtual Office ({data.cityName})</span>
				<span class="text-sm font-bold text-white">from ₹8,000/year</span>
			</div>
		</div>
		<p class="mt-5 text-sm text-slate-500">
			Need a physical desk instead?
			<a href="/coworking-space/" class="font-medium text-sky-600 underline underline-offset-2 hover:text-sky-800">
				Coworking Space in India →
			</a>
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     INTERNAL LINKS — NEXT STEPS
     DESIGNER: Slate-50 bg. 3 link cards (same style as India hub).
     SEO:      One primary URL per card. No duplicate links.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900">Need more than an address?</h2>
		<div class="grid gap-5 sm:grid-cols-3">
			{#each [{ title: 'Company + GST Setup', desc: 'Bundle incorporation and GST planning to keep COI and GST details aligned.', href: '/services/company-gst-registration/', cta: 'One-stop registration' }, { title: `Start a Business (India)`, desc: 'Outcome-first guidance for founders — right structure, right city, right timeline.', href: '/solutions/start-a-business-india/', cta: 'Explore solution' }, { title: 'Scale Your Workspace', desc: 'Move from address → seats → managed office → lease when you\'re ready.', href: '/solutions/scale-your-workspace/', cta: 'Explore solution' }] as link (link.href)}
				<a
					href={link.href}
					class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:bg-sky-50"
				>
					<h3 class="text-base font-semibold text-slate-900 transition group-hover:text-sky-700">{link.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{link.desc}</p>
					<span class="mt-4 flex items-center gap-1 text-sm font-medium text-sky-600 transition group-hover:gap-2">
						{link.cta}
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FAQ
     DESIGNER: White bg. Same accordion pattern as all other pages.
     SEO:      Add FAQPage JSON-LD. Questions are city-specific.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Frequently Asked Questions</h2>
		</div>
		<div class="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
			{#each faqItems as item, i (item.q)}
				<div>
					<button
						onclick={() => (openFaq = openFaq === i ? null : i)}
						class="flex w-full items-center justify-between px-6 py-5 text-left"
						aria-expanded={openFaq === i}
					>
						<span class="pr-4 text-sm font-medium text-slate-900">{item.q}</span>
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
						<div class="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FINAL CTA
     DESIGNER: Dark sky gradient. Mirror homepage/hub final CTA.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-gradient-to-br from-slate-900 to-sky-950 py-20 text-white lg:py-24">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white lg:text-4xl">
			Get a virtual office in {data.cityName}
		</h2>
		<p class="mt-4 text-lg leading-relaxed text-slate-300">
			Pick a locality and centre — or tell us your use-case and timeline and we'll shortlist the
			best options.
		</p>
		<!-- Form helper — DESIGNER: if a short form is added here, pre-fill city and show these fields -->
		<p class="mt-2 text-sm text-slate-500">
			Share your locality preference, use-case (GST/MCA/APOB), business type, expected filing
			timeline, and whether you already have a CA.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="#centres"
				class="rounded-lg bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				View Centres in {data.cityName}
			</a>
			<a
				href="/book/"
				class="rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Book Consultation
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

		<!-- Back to India hub — SEO internal link -->
		<p class="mt-8 text-sm text-slate-500">
			<a href="/virtual-office/" class="underline underline-offset-2 hover:text-slate-300">
				← All Virtual Office India locations
			</a>
		</p>
	</div>
</section>
