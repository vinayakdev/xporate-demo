<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/virtual-office/[city]/[locality]/[slug]/         ║
║         +page.svelte                                                 ║
║  URL:   /virtual-office/{city}/{locality}/{center-slug}/            ║
║  ROLE:  "Money detail" page — centre-level conversion               ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: same dark slate/sky gradient as city page.                 ║
║    Breadcrumb: Home → Virtual Office → {City} → {CenterName}.      ║
║  · Centre Snapshot: compact info card immediately below hero.       ║
║    Keep above the fold or very close to it.                         ║
║  · Pricing: 3-tier plan cards side-by-side. Middle card             ║
║    ("Standard") can be visually elevated (border/shadow).          ║
║  · Deliverables: icon checklist inside a sky-500 card.              ║
║  · How It Works: same 5-step stepper as city page.                  ║
║  · Location: map embed placeholder + commute/parking rows.          ║
║  · Final CTA: dark gradient, mirror city page pattern.              ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · All data comes from +page.ts (placeholder — replace with CMS).   ║
║  · FAQ accordion: $state pattern, same as all other pages.          ║
║  · Plan CTA buttons: prefill /book/ with centre ID + plan.          ║
║  · Map embed: replace placeholder div with real Google Maps embed.  ║
║  · commuteNotes / parkingAvailability: hidden if empty string.      ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Centre data: GET /api/centres/{slug} — replace +page.ts stub.   ║
║  · If centre slug is not found, throw error(404) in load function.  ║
║  · DocumentPackIncluded (bool): if false, do NOT market as          ║
║    GST/MCA-ready. Flag internally and hide doc-pack section.        ║
║  · Signage, mail handling, reception: show only if CMS = true.      ║
║  · PlanTiers: CMS-editable array — show all tiers dynamically.      ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · CANONICAL: /virtual-office/{city}/{locality}/{center-slug}/      ║
║  · Title pattern: Virtual Office {CenterName}, {Locality} {City}   ║
║    | Xporate — do not change without SEO sign-off.                 ║
║  · H1 must include CenterName + Locality + City.                    ║
║  · Schema to add before launch:                                      ║
║    Organization, LocalBusiness/Place (centre),                      ║
║    Product/Service (VO plan), FAQPage                               ║
║  · Ensure unique centre data (address, pricing, photos) to justify  ║
║    indexation. Thin/duplicate pages → consider noindex.             ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let openFaq = $state<number | null>(null);

	const faqItems = $derived([
		{
			q: `Can I use this centre for GST registration?`,
			a: `In many genuine cases, yes — when the premises is real, verifiable, and supported by the correct permission trail and current proofs. Acceptance depends on your profile and the authority's checks.`
		},
		{
			q: `What documents will I receive?`,
			a: `Typically: rent agreement, owner NOC (explicit consent for GST/MCA use), and a recent utility bill copy (typically not older than ~2 months). Signage support may be provided (as applicable).`
		},
		{
			q: `How fast will I receive the documents?`,
			a: `Often within 24–48 hours after KYC/KYB completion (as applicable). Timelines can vary by centre and document requirements.`
		},
		{
			q: `Do you guarantee GST or MCA approval?`,
			a: `No. We focus on documentation completeness, consistency, and verification readiness. Acceptance depends on the authority's checks.`
		},
		{
			q: `What if a verification visit is requested?`,
			a: `If physical verification is requested, we assist with on-ground coordination (case dependent).`
		}
	]);

	const deliverables = [
		{
			title: 'Rent Agreement',
			detail: '11-month or multi-year agreement (as applicable).'
		},
		{
			title: 'Owner NOC',
			detail: 'Signed consent from property owner explicitly supporting GST/MCA use.'
		},
		{
			title: 'Recent Utility Bill',
			detail: 'Electricity/water bill copy (typically not older than ~2 months).'
		},
		{
			title: 'Signage Support',
			detail: 'Company name displayed at premises to meet statutory expectations (as applicable).'
		}
	];

	const useCases = $derived([
		{
			title: `GST Registration in ${data.cityName}`,
			desc: 'Verifiable commercial address with consistent paperwork for GST filings.'
		},
		{
			title: 'Company Registration / Registered Office',
			desc: 'Compliant registered office for founders — without leasing a physical workspace.'
		},
		{
			title: 'APOB / Multi-State Expansion',
			desc: `For businesses adding GST coverage in ${data.cityName} (case dependent).`
		},
		{
			title: 'Credibility-First Presence',
			desc: `A premium ${data.localityName} address for clients, letterheads, and listings.`
		}
	]);

	const trustBullets = $derived([
		`Starting from ${data.startingPrice}/year (centre dependent)`,
		'Document delivery typically 24–48 hours after KYC/KYB (as applicable)',
		'Real, verifiable premises (centre dependent)',
		'Verification coordination if requested (as applicable)'
	]);

	const whyItems = [
		{
			title: 'Documentation clarity',
			desc: 'We focus on consistency and completeness to reduce preventable delays.'
		},
		{
			title: 'Centre screening',
			desc: 'We prioritize real, verifiable spaces and clarify what each centre supports.'
		},
		{
			title: 'Support beyond the address',
			desc: 'Need incorporation, GST filing, or ongoing compliance? We can coordinate next steps.'
		}
	];

	const intakeItems = [
		{
			label: 'PAN + Aadhaar',
			detail: 'Commonly required for GST/MCA filings (directors/authorised signatories).'
		},
		{
			label: 'Business nature and basic profile',
			detail: 'Brief on your activity so we can confirm address and zoning fit.'
		},
		{
			label: 'If already formed: COI or partnership deed',
			detail: 'Certificate of Incorporation or Partnership Deed (if entity exists).'
		}
	];
</script>

<svelte:head>
	<title>Virtual Office {data.centerName}, {data.localityName} {data.cityName} | Xporate</title>
	<meta
		name="description"
		content="Virtual office in {data.localityName}, {data.cityName} with rent agreement, owner NOC and recent utility bill. Starting from {data.startingPrice}/year (centre dependent). Verification support (as applicable)."
	/>
	<!--
    FRONTEND NOTE: Add JSON-LD before launch:
    - Organization
    - LocalBusiness or Place (this centre)
    - Product or Service (Virtual Office plan)
    - FAQPage (faqItems)
  -->
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════
     HERO
     DESIGNER: Dark slate/sky gradient. Breadcrumb includes locality.
     SEO:      H1 must include CenterName + Locality + City.
               Compliance note must stay above the fold.
     ═══════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 py-20 text-white lg:py-28">
	<div
		class="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Breadcrumb — SEO NOTE: keep this exact hierarchy -->
		<nav class="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="transition hover:text-white">Home</a>
			<span>/</span>
			<a href="/virtual-office/" class="transition hover:text-white">Virtual Office</a>
			<span>/</span>
			<a href="/virtual-office/{data.city}/" class="transition hover:text-white">{data.cityName}</a>
			<span>/</span>
			<span class="text-slate-200">{data.centerName}</span>
		</nav>

		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
			Rent Agreement · Owner NOC · Utility Bill · Signage Support · Verification Coordination
		</p>

		<h1 class="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
			Virtual Office in {data.localityName}, {data.cityName}
			<span class="mt-2 block text-sky-400">({data.centerName})</span>
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Get a verification-ready business address at {data.centerName} with the document pack commonly
			required for GST and MCA filings. Best for founders, e-commerce sellers, service businesses,
			and companies expanding into {data.cityName}.
		</p>

		<!-- CTAs -->
		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				Get exact quote / book this centre
			</a>
			<a
				href="/virtual-office/{data.city}/"
				class="rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Compare centres in {data.cityName}
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
			{#each trustBullets as bullet (bullet)}
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
     CENTRE SNAPSHOT
     DESIGNER: White bg. Compact info card. Keep close to hero.
     BACKEND:  All fields CMS-driven. Hide rows with no data.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-12 lg:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-6 text-2xl font-bold text-slate-900 lg:text-3xl">Centre snapshot</h2>

		<div class="grid gap-6 lg:grid-cols-2 lg:items-start">
			<!-- Info rows -->
			<div class="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
				{#each [
					{ label: 'Centre name', value: data.centerName },
					{ label: 'Locality', value: `${data.localityName}, ${data.cityName}${data.state ? `, ${data.state}` : ''}` },
					{ label: 'Address', value: data.snapshot.address },
					{ label: 'Nearest landmark / metro', value: data.snapshot.nearestLandmark }
				] as row (row.label)}
					<div class="flex gap-4 px-5 py-4">
						<span class="w-40 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">{row.label}</span>
						<span class="text-sm text-slate-700">{row.value}</span>
					</div>
				{/each}
			</div>

			<!-- Operating support -->
			<div class="rounded-2xl border border-sky-100 bg-sky-50 p-6">
				<p class="mb-4 text-xs font-semibold uppercase tracking-wide text-sky-700">
					Operating support (centre dependent)
				</p>
				<ul class="space-y-3">
					{#each [
						{ label: 'Mail handling', available: data.snapshot.mailHandling },
						{ label: 'Reception', available: data.snapshot.reception },
						{ label: 'Meeting rooms on-site', available: data.snapshot.meetingRooms }
					] as item (item.label)}
						<li class="flex items-center gap-3 text-sm">
							{#if item.available}
								<svg class="h-4 w-4 shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span class="text-slate-700">{item.label}</span>
							{:else}
								<svg class="h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
								<span class="text-slate-400">{item.label} — not available at this centre</span>
							{/if}
						</li>
					{/each}
				</ul>
				<!-- BACKEND NOTE: Only show fields available in CMS. Hide unknown fields. -->
				<p class="mt-4 text-xs text-slate-400">
					Availability confirmed at booking — details may be subject to change.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     PRICING
     DESIGNER: Sky-50 bg. 3 plan cards in a row.
               Middle card slightly elevated (ring + shadow).
     BACKEND:  CMS-editable plan tiers and inclusions.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<h2 class="text-2xl font-bold text-slate-900 lg:text-3xl">Pricing</h2>
			<p class="mt-2 text-slate-500">
				Starting from {data.startingPrice}/year (centre dependent). Final pricing depends on plan,
				inclusions, and your use-case (GST/MCA/APOB).
			</p>
		</div>

		<!-- BACKEND NOTE: planTiers comes from CMS. Show all tiers dynamically. -->
		<div class="grid gap-5 sm:grid-cols-3">
			{#each data.planTiers as tier, i (tier.name)}
				<div
					class="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
					class:ring-2={i === 1}
					class:ring-sky-400={i === 1}
					class:shadow-lg={i === 1}
				>
					{#if i === 1}
						<span class="mb-3 self-start rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
							Most popular
						</span>
					{/if}
					<p class="text-sm font-semibold text-slate-500">{tier.name}</p>
					<div class="mt-2 flex items-baseline gap-1">
						<span class="text-3xl font-black text-slate-900">{tier.price}</span>
						<span class="text-slate-400">/year</span>
					</div>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{tier.inclusions}</p>
					<a
						href="/book/"
						class="mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition"
						class:bg-sky-500={i === 1}
						class:text-white={i === 1}
						class:hover:bg-sky-600={i === 1}
						class:bg-slate-100={i !== 1}
						class:text-slate-700={i !== 1}
						class:hover:bg-slate-200={i !== 1}
					>
						Get a quote — {tier.name}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHAT YOU GET (DELIVERABLES)
     DESIGNER: White bg. 2-col icon checklist on sky-500 card
               + a right-side summary.
     BACKEND:  If DocumentPackIncluded = false in CMS, remove
               this section and do NOT market as GST/MCA-ready.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h2 class="text-2xl font-bold text-slate-900 lg:text-3xl">
					What you get (verification-ready document pack)
				</h2>
				<p class="mt-3 text-slate-500">
					Standard deliverables from our playbook. Centre-specific notes shared at booking.
				</p>
				<!-- CTA -->
				<a
					href="/book/"
					class="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
				>
					Get a centre quote
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="rounded-2xl bg-sky-500 p-8 text-white">
				<p class="mb-5 text-sm font-semibold uppercase tracking-wide text-sky-100">
					Included in every plan
				</p>
				<ul class="space-y-5">
					{#each deliverables as item (item.title)}
						<li class="flex items-start gap-3">
							<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<div>
								<p class="text-sm font-semibold text-white">{item.title}</p>
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
     WHO THIS CENTRE FITS (USE CASES)
     DESIGNER: Sky-50 bg. 4-col cards, same style as city page.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900 lg:text-3xl">Best fit for</h2>
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
     HOW IT WORKS
     DESIGNER: White bg. 5-step stepper — same pattern as city page.
               Horizontal on desktop (connecting line), vertical mobile.
     BACKEND:  Delivery timeline editable per centre in CMS.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-12 text-3xl font-bold text-slate-900 lg:text-4xl">How it works</h2>

		<!-- Mobile: vertical stepper -->
		<ol class="space-y-0 lg:hidden">
			{#each [
				{ step: '01', title: 'Confirm the centre and plan', desc: 'We confirm plan inclusions and whether it fits your GST/MCA/APOB use-case.' },
				{ step: '02', title: 'Submit KYC/KYB', desc: 'Share basic director/partner KYC and business details for drafting.' },
				{ step: '03', title: 'Document drafting and issuance', desc: 'We prepare the document pack — rent agreement, NOC, utility bill — and share digitally.' },
				{ step: '04', title: 'Document delivery', desc: 'Typically 24–48 hours after KYC/KYB completion (as applicable).' },
				{ step: '05', title: 'Verification support (as applicable)', desc: 'If a verification visit is requested, we assist with on-ground coordination (case dependent).' }
			] as s (s.step)}
				<li class="relative flex gap-5 pb-8 last:pb-0">
					<div class="flex flex-col items-center">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
							{s.step}
						</span>
						<div class="mt-2 w-px flex-1 bg-sky-200"></div>
					</div>
					<div class="pb-2 pt-1.5">
						<h3 class="text-base font-semibold text-slate-900">{s.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
					</div>
				</li>
			{/each}
		</ol>

		<!-- Desktop: horizontal 5-col grid -->
		<div class="hidden lg:grid lg:grid-cols-5 lg:gap-4">
			{#each [
				{ step: '01', title: 'Confirm the centre and plan', desc: 'We confirm plan inclusions and whether it fits your use-case.' },
				{ step: '02', title: 'Submit KYC/KYB', desc: 'Basic director/partner KYC and business details for drafting.' },
				{ step: '03', title: 'Document drafting', desc: 'We prepare the rent agreement, NOC, and utility bill.' },
				{ step: '04', title: 'Document delivery', desc: 'Typically 24–48 hours after KYC/KYB (as applicable).' },
				{ step: '05', title: 'Verification support', desc: 'We assist with on-ground coordination if verification is requested.' }
			] as s, i (s.step)}
				<div class="relative">
					{#if i < 4}
						<div class="absolute top-5 left-10 right-0 h-px bg-sky-200" aria-hidden="true"></div>
					{/if}
					<span class="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
						{s.step}
					</span>
					<h3 class="text-sm font-semibold text-slate-900">{s.title}</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-500">{s.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHAT YOU NEED TO PROVIDE
     DESIGNER: Slate-50 bg. Single-column checklist card.
     FRONTEND: Keep short — full checklist lives in /book/ flow.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-6 text-2xl font-bold text-slate-900 lg:text-3xl">What you need from your side</h2>
		<div class="rounded-2xl border border-slate-200 bg-white p-8">
			<ul class="space-y-5">
				{#each intakeItems as item (item.label)}
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
			<p class="mt-5 text-xs text-slate-400">
				Full document checklist shared during the consultation and enquiry flow.
			</p>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     LOCATION & ACCESS
     DESIGNER: White bg. Map embed (or placeholder div) on left.
               Commute/parking rows on right. Hide rows if empty.
     BACKEND:  mapLink, commuteNotes, parkingAvailability from CMS.
               Avoid promises about parking unless confirmed.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900 lg:text-3xl">Location and access</h2>

		<div class="grid gap-8 lg:grid-cols-2 lg:items-start">
			<!-- Map placeholder — FRONTEND: replace with real Google Maps embed iframe -->
			<div class="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 lg:h-80">
				{#if data.mapLink}
					<iframe
						src={data.mapLink}
						class="h-full w-full rounded-2xl"
						title="Map showing {data.centerName}"
						loading="lazy"
						allowfullscreen
					></iframe>
				{:else}
					<div class="text-center">
						<svg class="mx-auto mb-2 h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<p class="text-xs text-slate-400">Map embed — add Google Maps link in CMS</p>
					</div>
				{/if}
			</div>

			<!-- Access details -->
			<div class="space-y-4">
				<div class="rounded-xl border border-slate-200 bg-white p-5">
					<p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Address</p>
					<p class="mt-1 text-sm text-slate-700">{data.snapshot.address}</p>
				</div>
				<div class="rounded-xl border border-slate-200 bg-white p-5">
					<p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Nearest landmark / metro</p>
					<p class="mt-1 text-sm text-slate-700">{data.snapshot.nearestLandmark}</p>
				</div>
				{#if data.commuteNotes}
					<div class="rounded-xl border border-slate-200 bg-white p-5">
						<p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Commute notes</p>
						<p class="mt-1 text-sm text-slate-700">{data.commuteNotes}</p>
					</div>
				{/if}
				{#if data.parkingAvailability}
					<div class="rounded-xl border border-slate-200 bg-white p-5">
						<p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Parking</p>
						<p class="mt-1 text-sm text-slate-700">{data.parkingAvailability}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     ADD-ONS (CENTRE DEPENDENT)
     DESIGNER: Sky-50 bg. 3 add-on cards + coworking CTA row.
     BACKEND:  Only show this section if centre offers add-ons.
               In production, conditionally render based on CMS flags.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-2 text-2xl font-bold text-slate-900 lg:text-3xl">Optional add-ons</h2>
		<p class="mb-8 text-sm text-slate-500">Centre dependent — availability confirmed at booking.</p>

		<!-- BACKEND NOTE: Show only add-ons this centre supports. -->
		<div class="grid gap-5 sm:grid-cols-3">
			{#each [
				{ title: 'Mail handling / forwarding', desc: 'Receive and forward postal mail to your preferred address (if available at this centre).' },
				{ title: 'Meeting room access', desc: 'Book meeting rooms by the hour — ideal for client visits or team calls (if available).' },
				{ title: 'Day pass / coworking', desc: 'Occasional desk access for days you need to work on-site (if available).' }
			] as addon (addon.title)}
				<div class="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
					<div class="mb-3 h-1.5 w-8 rounded-full bg-sky-300"></div>
					<h3 class="text-sm font-semibold text-slate-900">{addon.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{addon.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Coworking CTA -->
		<div class="mt-8 flex items-center gap-3 rounded-xl border border-sky-200 bg-white px-5 py-4">
			<svg class="h-5 w-5 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
			<p class="text-sm text-slate-700">
				Need a physical desk in {data.cityName}?
				<a href="/coworking-space/{data.city}/" class="ml-1 font-medium text-sky-600 underline underline-offset-2 hover:text-sky-800">
					Coworking Space in {data.cityName} →
				</a>
			</p>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY XPORATE
     DESIGNER: White bg. 3-col cards.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-10 text-2xl font-bold text-slate-900 lg:text-3xl">
			Why choose Xporate for this centre
		</h2>
		<div class="grid gap-5 sm:grid-cols-3">
			{#each whyItems as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div class="mb-3 h-1.5 w-8 rounded-full bg-sky-500"></div>
					<h3 class="text-base font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     INTERNAL LINKS — RELATED NEXT STEPS
     DESIGNER: Slate-50 bg. 4 link cards in a grid.
     SEO:      One primary URL per card. No duplicate anchors.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900">Related next steps</h2>
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ title: `Compare more centres in ${data.cityName}`, desc: 'Browse all virtual office locations by locality.', href: `/virtual-office/${data.city}/`, cta: 'View all centres' },
				{ title: 'Virtual Office India hub', desc: 'Explore coverage across all major Indian cities.', href: '/virtual-office/', cta: 'Explore India' },
				{ title: 'Company + GST Registration', desc: 'Bundle incorporation and GST planning in one step.', href: '/services/company-gst-registration/', cta: 'One-stop registration' },
				{ title: 'Start a Business (India)', desc: 'Outcome-first guidance for founders — right structure, right city.', href: '/solutions/start-a-business-india/', cta: 'Explore solution' }
			] as link (link.href)}
				<a
					href={link.href}
					class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:bg-sky-50"
				>
					<h3 class="text-sm font-semibold text-slate-900 transition group-hover:text-sky-700">{link.title}</h3>
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
     DESIGNER: White bg. Same accordion pattern as all pages.
     SEO:      Add FAQPage JSON-LD before launch.
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
     DESIGNER: Dark sky gradient. Mirror city page final CTA.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-gradient-to-br from-slate-900 to-sky-950 py-20 text-white lg:py-24">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white lg:text-4xl">
			Get an exact quote for {data.centerName}
		</h2>
		<p class="mt-4 text-lg leading-relaxed text-slate-300">
			Tell us your use-case (GST/MCA/APOB) and timeline — we'll confirm fit, quote, and document
			delivery expectations.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				Book this centre
			</a>
			<a
				href="/virtual-office/{data.city}/"
				class="rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Compare centres in {data.cityName}
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

		<p class="mt-8 text-sm text-slate-500">
			<a href="/virtual-office/{data.city}/" class="underline underline-offset-2 hover:text-slate-300">
				← All Virtual Office centres in {data.cityName}
			</a>
		</p>
	</div>
</section>
