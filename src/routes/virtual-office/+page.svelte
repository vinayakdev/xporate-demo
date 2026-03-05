<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/virtual-office/+page.svelte                      ║
║  URL:   /virtual-office/                                             ║
║  ROLE:  India hub for Virtual Office — NOT a city page              ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: same dark slate-900 as homepage for brand consistency.      ║
║    Consider a subtle map-of-India or city-skyline graphic (right).  ║
║  · Use-case picker: 4 equal-height cards. Active/hover state in     ║
║    sky blue to match this page's category colour.                   ║
║  · Deliverables: icon + label cards. Replace placeholder icons with ║
║    final icon set (Lucide / Phosphor / custom).                     ║
║  · City directory: this is the primary conversion section.          ║
║    Give it maximum visual prominence — full-width search bar,       ║
║    prominent city cards (not just text links).                      ║
║  · City cards: show city name + state label. Optionally add a       ║
║    count badge ("12 locations") once inventory data is available.   ║
║  · How it works: numbered vertical stepper on mobile,               ║
║    horizontal on desktop.                                           ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · City search input: hardcoded list for demo. Wire to              ║
║    GET /api/cities?category=virtual-office&q={query} in prod.       ║
║  · City slugs use lowercase: /virtual-office/bangalore/ etc.        ║
║  · FAQ uses same $state accordion pattern as homepage.              ║
║  · All city links go to /virtual-office/{city}/ (NEVER to root).   ║
║  · Pricing badge is hardcoded — make CMS-editable in production.   ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Pricing anchor (₹8,000/year) must be CMS-editable.              ║
║  · City list should be dynamic — populated from inventory CMS.      ║
║  · FAQ items: share with /faqs CMS collection.                      ║
║  · Add-ons copy: "centre and plan dependent" — confirm with ops      ║
║    team what is available at each centre before publishing.         ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · CANONICAL: /virtual-office/ must remain the India hub.           ║
║    Do NOT add a redirect from /virtual-office/ → /virtual-office/{city}/ ║
║  · Keep these URL patterns unchanged:                                ║
║      /virtual-office/{city}/                                         ║
║      /virtual-office/{city}/{locality}/{center-slug}                 ║
║  · Schema to add before launch: Organization, WebSite,              ║
║    FAQPage, ItemList (top cities), Service (Virtual Office).         ║
║  · H1 includes "verification-ready" — intentional differentiator.   ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let openFaq = $state<number | null>(null);

	const useCases = [
		{
			title: 'Company registration address (MCA)',
			desc: 'For Pvt Ltd / LLP / OPC founders who want a compliant registered office without a full lease.',
			icon: 'building'
		},
		{
			title: 'GST registration (new GSTIN)',
			desc: 'For businesses that need a verifiable principal place of business with the right permission trail.',
			icon: 'receipt'
		},
		{
			title: 'APOB / multi-state expansion',
			desc: 'For e-commerce and growing brands needing an additional place of business in another state.',
			icon: 'expand'
		},
		{
			title: 'Brand presence (tier-1 address)',
			desc: 'For founders who want a premium address for website/letterheads and credibility.',
			icon: 'star'
		}
	];

	const deliverables = [
		{
			title: 'Rent Agreement',
			desc: 'A legally binding 11-month or multi-year lease (as applicable).'
		},
		{
			title: 'Owner NOC',
			desc: 'Signed by the property owner, specifically mentioning consent for GST/MCA use.'
		},
		{
			title: 'Recent Utility Bill',
			desc: 'Latest electricity or water bill (typically not older than 2 months) as valid address proof.'
		},
		{
			title: 'Signage Support',
			desc: 'We display your company name at the premises to meet statutory requirements.'
		},
		{
			title: 'Verification Coordination',
			desc: 'If physical verification is requested, we assist with on-ground coordination at the premises (as applicable).'
		}
	];

	const howItWorks = [
		{
			step: '01',
			title: 'Select a city and location',
			desc: 'Choose a prime location that fits your business narrative and compliance needs.'
		},
		{
			step: '02',
			title: 'Submit KYC/KYB digitally',
			desc: 'You share the director/partner KYC and basic business details.'
		},
		{
			step: '03',
			title: 'We prepare the document pack',
			desc: 'Our team drafts the rent agreement and secures the owner NOC.'
		},
		{
			step: '04',
			title: 'Receive your GST/MCA-ready documents',
			desc: 'Documents delivered digitally within 24–48 hours once inputs are complete (scope dependent).'
		},
		{
			step: '05',
			title: 'If verification happens, we coordinate',
			desc: 'If an officer requests physical verification, we assist with on-ground coordination (as applicable).'
		}
	];

	const intakeItems = [
		{
			label: 'KYC of directors/partners',
			detail: 'PAN + Aadhaar (commonly required for MCA/GST filings).'
		},
		{
			label: 'KYB (Know Your Business)',
			detail: 'Certificate of Incorporation or partnership deed (if already formed).'
		},
		{
			label: 'Nature of business',
			detail: 'A brief description of what you do so location/commercial zoning aligns.'
		}
	];

	const topCities = [
		{ name: 'Bangalore', slug: 'bangalore', state: 'Karnataka' },
		{ name: 'Delhi', slug: 'delhi', state: 'Delhi NCR' },
		{ name: 'Gurgaon', slug: 'gurgaon', state: 'Haryana' },
		{ name: 'Noida', slug: 'noida', state: 'Uttar Pradesh' },
		{ name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra' },
		{ name: 'Pune', slug: 'pune', state: 'Maharashtra' },
		{ name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana' },
		{ name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu' },
		{ name: 'Kolkata', slug: 'kolkata', state: 'West Bengal' },
		{ name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat' },
		{ name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan' },
		{ name: 'Kochi', slug: 'kochi', state: 'Kerala' }
	];

	const differentiators = [
		{
			title: 'Verification-ready premises',
			desc: 'We prioritize real, verifiable spaces—not just "address-only" setups.'
		},
		{
			title: 'Documentation clarity',
			desc: 'Consent language, address proof freshness, and document consistency handled carefully to reduce avoidable queries.'
		},
		{
			title: 'Signage support',
			desc: 'Company name displayed at the premises to meet statutory requirements—often missed by competitors.'
		},
		{
			title: 'Single partner for your next step',
			desc: 'If you also need incorporation, GST filing, or ongoing compliance, we route you to the right solution without vendor chaos.'
		}
	];

	const faqItems = [
		{
			q: 'Is a virtual office legal for GST or company registration in India?',
			a: "In many genuine cases, yes—when the premises is real, verifiable, and supported by the right documentation trail. Acceptance depends on your profile and the authority's checks."
		},
		{
			q: 'What documents will I receive?',
			a: 'Typically: a rent agreement, owner NOC mentioning consent for GST/MCA use, and a recent utility bill (usually not older than 2 months). Xporate also supports signage at premises.'
		},
		{
			q: 'How fast will I get the documents?',
			a: 'Documents are typically delivered digitally within 24–48 hours once KYC/KYB inputs are complete (scope dependent).'
		},
		{
			q: 'Will there be physical verification?',
			a: 'Sometimes authorities may request it. If verification is requested, we assist with on-ground coordination at the premises (as applicable).'
		},
		{
			q: 'Can I use this for APOB / multi-state expansion?',
			a: 'Yes, many businesses use virtual offices to support expansion into other states. The right setup depends on your structure and use-case.'
		},
		{
			q: 'Do you guarantee GST/MCA approvals?',
			a: 'No. We focus on documentation completeness, consistency, and verification readiness to reduce preventable delays.'
		},
		{
			q: 'Can Xporate also help with company incorporation and GST filing?',
			a: 'Yes. If you want a bundled "one partner" workflow, explore our Company + GST Registration service.'
		}
	];
</script>

<svelte:head>
	<title>Virtual Office India (GST/MCA-Ready Docs) | Xporate</title>
	<meta
		name="description"
		content="Virtual office India from ₹8,000/year with rent agreement, owner NOC and recent utility bill. Verification-ready locations + mail handling. Browse cities."
	/>
	<!--
    FRONTEND NOTE: Add JSON-LD before launch:
    - Organization
    - WebSite with SearchAction
    - Service (Virtual Office India)
    - FAQPage (from faqItems)
    - ItemList (topCities → /virtual-office/{slug}/)
  -->
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════
     HERO
     DESIGNER: Dark slate-900 bg. Right side: consider an India
               map graphic or city skyline collage image.
     FRONTEND: Trust bullets can be CMS-driven in production.
     SEO:      H1 includes "verification-ready" as a differentiator.
               Do NOT change the H1 structure without SEO sign-off.
     ═══════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 py-20 text-white lg:py-28">
	<div
		class="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="mb-5 flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="hover:text-white transition">Home</a>
			<span>/</span>
			<span class="text-slate-200">Virtual Office</span>
		</nav>

		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
			Address for GST / MCA · Signage Support · Verification Coordination
		</p>

		<h1 class="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
			Virtual Office India
			<span class="block text-sky-400">verification-ready address + GST/MCA document pack</span>
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
			Get a premium commercial address in India without leasing a physical seat or cabin. Xporate's
			virtual offices are built for compliance: real, verifiable premises + the documentation trail
			authorities expect.
		</p>

		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				Book a Consultation
			</a>
			<a
				href="#cities"
				class="rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Browse by City
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

		<!-- Trust bullets — BACKEND: CMS-editable -->
		<div class="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
			{#each ['Starts at ₹8,000/year (location-dependent)', 'GST/MCA-ready docs: rent agreement + owner NOC + utility bill', 'Documents in 24–48 hours after KYC/KYB and payment (scope dependent)', 'Signage support — company name displayed at premises', 'Verification coordination if physical check is requested (as applicable)'] as bullet (bullet)}
				<div class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
					<svg class="mt-0.5 h-4 w-4 shrink-0 text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm leading-snug text-slate-200">{bullet}</span>
				</div>
			{/each}
		</div>

		<!-- Compliance disclaimer — LEGAL: Do not remove or soften -->
		<p class="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
			<strong class="text-slate-400">Note:</strong> We don't guarantee approvals. Acceptance for
			registrations and verifications depends on your case and the authority's checks. We focus on
			documentation completeness, consistency, and verification readiness.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     USE-CASE PICKER
     DESIGNER: 4 equal cards in a 2×2 grid (desktop: 4-col).
               Sky-blue icon bg. Hover: border turns sky-blue.
     FRONTEND: Each card CTA routes to /virtual-office/{city}/.
               City is chosen after use-case — this is a UX bridge.
               Could add a modal/popup to let user pick city inline.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">
				What are you using the virtual office for?
			</h2>
			<p class="mt-3 text-slate-500">
				Pick your primary goal so we can shortlist the right city/location and document format.
			</p>
		</div>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each useCases as uc (uc.title)}
				<div class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md">
					<!-- DESIGNER: Replace placeholder icon div with final SVG icon -->
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
						{#if uc.icon === 'building'}
							<svg class="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						{:else if uc.icon === 'receipt'}
							<svg class="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
							</svg>
						{:else if uc.icon === 'expand'}
							<svg class="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{:else}
							<svg class="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
							</svg>
						{/if}
					</div>

					<h3 class="text-base font-semibold text-slate-900">{uc.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{uc.desc}</p>

					<a
						href="#cities"
						class="mt-5 flex items-center gap-1 text-sm font-medium text-sky-600 transition group-hover:gap-2"
					>
						Choose a city
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			{/each}
		</div>

		<p class="mt-8 text-sm text-slate-400">
			<strong class="text-slate-600">Already have a CA?</strong> We work alongside your CA.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY VIRTUAL OFFICE (COMPLIANCE-LED)
     DESIGNER: Sky-50 bg. Two columns: costs comparison left,
               compliance argument right.
     FRONTEND: Cost comparison numbers are illustrative —
               confirm with ops/pricing team before launch.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">
				Why a virtual office (and why "verification-ready" matters)
			</h2>
			<p class="mt-4 max-w-2xl text-slate-600">
				A virtual office is not a PO box. It's a structured, documented right to use a commercial
				address. Authorities care about whether the premises exists, can be verified, and is backed
				by consistent paperwork.
			</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Cost comparison card -->
			<div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
				<h3 class="text-lg font-semibold text-slate-900">Save overheads without losing compliance</h3>
				<p class="mt-3 text-sm leading-relaxed text-slate-600">
					A dedicated coworking seat in prime metros often starts around ₹5,000/month (₹60,000/year).
					Xporate virtual offices start at ₹8,000/year, so you stay lean while keeping the legal
					right to the address for registrations.
				</p>
				<!-- DESIGNER: visual comparison bar or table would work here -->
				<div class="mt-6 space-y-3">
					<div class="flex items-center justify-between rounded-xl bg-slate-50 px-5 py-3">
						<span class="text-sm text-slate-600">Dedicated coworking seat (metro)</span>
						<span class="text-sm font-semibold text-slate-700">~₹60,000/year</span>
					</div>
					<div class="flex items-center justify-between rounded-xl bg-sky-500 px-5 py-3">
						<span class="text-sm font-medium text-white">Xporate Virtual Office</span>
						<span class="text-sm font-bold text-white">from ₹8,000/year</span>
					</div>
				</div>
			</div>

			<!-- Compliance argument card -->
			<div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
				<h3 class="text-lg font-semibold text-slate-900">Built to reduce preventable delays</h3>
				<p class="mt-3 text-sm leading-relaxed text-slate-600">
					Where "paper-only" setups can trigger queries, we focus on documentation consistency,
					proper consent language, and verifiable premises.
				</p>
				<ul class="mt-5 space-y-3">
					{#each ['Real, verifiable commercial premises', 'Owner NOC with explicit GST/MCA consent language', 'Utility bill freshness maintained (not older than 2 months)', 'Physical signage for statutory compliance', 'On-ground verification support if needed'] as point (point)}
						<li class="flex items-start gap-2.5 text-sm text-slate-600">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-sky-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							{point}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     DELIVERABLES
     DESIGNER: White bg. 5 cards in a grid (3+2 or 2+3 or scroll).
               Each card: icon + title + description.
               "Verification Coordination" card should be visually
               distinct (e.g., dashed border) since it's conditional.
     FRONTEND: Static content — wire to CMS in production.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">
				What you get with Xporate Virtual Office
			</h2>
		</div>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each deliverables as d, i (d.title)}
				<!-- Last card (Verification Coordination) is conditional — shown with dashed border -->
				<div
					class="rounded-2xl p-6 {i === deliverables.length - 1
						? 'border-2 border-dashed border-sky-200 bg-sky-50'
						: 'border border-slate-200 bg-white shadow-sm'}"
				>
					<div class="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100">
						<svg class="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-base font-semibold text-slate-900">{d.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
					{#if i === deliverables.length - 1}
						<span class="mt-3 inline-block text-xs text-sky-600">(as applicable)</span>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     HOW IT WORKS
     DESIGNER: Slate-50 bg. Vertical numbered stepper on mobile,
               horizontal timeline on desktop (5 steps).
               Consider a connecting line between step numbers.
     FRONTEND: Static. Step 5 is conditional — keep "(as applicable)" label.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">How it works</h2>
		</div>

		<!-- Mobile: vertical stepper -->
		<ol class="space-y-0 lg:hidden">
			{#each howItWorks as step (step.step)}
				<li class="relative flex gap-5 pb-8 last:pb-0">
					<!-- Connector line -->
					<div class="flex flex-col items-center">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
							{step.step}
						</span>
						<div class="mt-2 w-px flex-1 bg-sky-200 last:hidden"></div>
					</div>
					<div class="pb-2 pt-1.5">
						<h3 class="text-base font-semibold text-slate-900">{step.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-500">{step.desc}</p>
						{#if step.step === '01'}
							<a href="#cities" class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-800">
								Browse cities →
							</a>
						{/if}
					</div>
				</li>
			{/each}
		</ol>

		<!-- Desktop: horizontal 5-col grid -->
		<div class="hidden lg:grid lg:grid-cols-5 lg:gap-4">
			{#each howItWorks as step, i (step.step)}
				<div class="relative">
					<!-- Connecting line (except last) -->
					{#if i < howItWorks.length - 1}
						<div class="absolute top-5 left-10 right-0 h-px bg-sky-200" aria-hidden="true"></div>
					{/if}
					<span class="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
						{step.step}
					</span>
					<h3 class="text-sm font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-500">{step.desc}</p>
					{#if step.step === '01'}
						<a href="#cities" class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-800">
							Browse cities →
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHAT WE NEED FROM YOU
     DESIGNER: White bg. Simple 3-item checklist with icon.
               Could be a sidebar widget on the booking flow later.
     FRONTEND: Static intake checklist. In production, pull these
               into the /book/ form as a pre-fill or checklist widget.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">
					What we need from you
				</h2>
				<p class="mt-3 text-slate-500">A quick checklist — most clients have these ready.</p>
				<ul class="mt-8 space-y-4">
					{#each intakeItems as item (item.label)}
						<li class="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
							<svg class="mt-0.5 h-5 w-5 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
							<div>
								<p class="text-sm font-semibold text-slate-800">{item.label}</p>
								<p class="mt-0.5 text-sm text-slate-500">{item.detail}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="rounded-2xl bg-sky-500 p-8 text-white">
				<h3 class="text-lg font-semibold">Ready to get started?</h3>
				<p class="mt-2 text-sm leading-relaxed text-sky-100">
					Book a consultation and we'll confirm which city/location fits your use-case, walk you
					through the document pack, and give you an exact quote.
				</p>
				<a
					href="/book/"
					class="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
				>
					Book a Consultation
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</a>
				<p class="mt-4 text-xs text-sky-200">
					Or WhatsApp us at +91 70607 06076
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     CITY DIRECTORY — PRIMARY CONVERSION SECTION
     DESIGNER: Sky-50 bg. Full-width search bar + city card grid.
               City cards: name + state label + "View locations →".
               Add a count badge ("12 centres") when inventory data
               is available. Make this the most prominent section.
     FRONTEND: Search is a UI stub — wire to GET /api/cities?q=
               returning { name, slug, state } in production.
               Each city link goes to /virtual-office/{slug}/
               (NEVER to the hub page or to /locations/).
     SEO:      ItemList schema should include all cities shown.
     ═══════════════════════════════════════════════════════════ -->
<section id="cities" class="bg-sky-50 py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold text-slate-900 lg:text-4xl">Browse virtual offices by city</h2>
			<p class="mt-3 text-slate-500">
				Choose your city to see localities/centres and request an exact quote.
			</p>
		</div>

		<!-- Search bar — FRONTEND: wire to city search API -->
		<div class="mx-auto mb-10 max-w-xl">
			<div class="flex overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm">
				<svg class="ml-4 h-5 w-5 self-center shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input
					type="text"
					placeholder="Search by city or locality…"
					class="flex-1 border-0 bg-transparent px-3 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-0"
				/>
				<button class="bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
					Search
				</button>
			</div>
			<p class="mt-2 text-center text-xs text-slate-400">
				For a fast shortlist, book a consult and share your use-case.
			</p>
		</div>

		<!-- City cards grid -->
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
			{#each topCities as city (city.slug)}
				<a
					href={`/virtual-office/${city.slug}/`}
					class="group flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
				>
					<!-- DESIGNER: Add city icon/illustration here (small India pin or city silhouette) -->
					<div class="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50">
						<svg class="h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<p class="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition">{city.name}</p>
					<p class="mt-0.5 text-xs text-slate-400">{city.state}</p>
					<span class="mt-3 flex items-center gap-1 text-xs font-medium text-sky-600 transition group-hover:gap-2">
						View locations
						<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</span>
				</a>
			{/each}
		</div>

		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a
				href="/locations/"
				class="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
			>
				View all cities →
			</a>
			<a
				href="/book/"
				class="rounded-lg border border-sky-300 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
			>
				Book a Consultation
			</a>
		</div>

		<!-- SEO note inline reminder -->
		<!--
      DEV NOTE: /locations/ is the cross-category directory.
      City links on this page should always go to /virtual-office/{city}/
      NOT to /locations/{city}/. Keep them separate.
    -->
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     WHY XPORATE
     DESIGNER: Dark slate-900 bg, white text. 4-col grid.
               Same pattern as homepage — keep visual consistency.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 py-16 text-white lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold text-white lg:text-4xl">
				Why Xporate (compliance-first virtual offices)
			</h2>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each differentiators as d, i (d.title)}
				<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-lg font-bold text-sky-400">
						{i + 1}
					</div>
					<h3 class="text-sm font-semibold text-white">{d.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-400">{d.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     ADD-ONS + PRICING
     DESIGNER: White bg. Two-column layout: left = add-ons callout,
               right = pricing anchor card.
     FRONTEND: Pricing and add-ons are CMS-editable in production.
     BACKEND:  Add-ons availability must be confirmed per centre —
               do NOT promise mail/meeting room unless ops confirms.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Add-ons — BACKEND: confirm availability per centre before publishing -->
			<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
				<h2 class="text-xl font-bold text-slate-900">
					Optional add-ons
					<span class="ml-2 text-sm font-normal text-slate-400">(centre and plan dependent)</span>
				</h2>
				<p class="mt-3 text-sm leading-relaxed text-slate-600">
					Some centres may offer mail/courier handling options, scans/forwarding, and meeting room
					access. We'll confirm what's available at your chosen location.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Mail / courier handling and forwarding', 'Scanned mail notifications', 'Meeting room access (hourly/day pass, where available)', 'Dedicated number / receptionist service (select centres)'] as addon (addon)}
						<li class="flex items-center gap-2.5 text-sm text-slate-600">
							<svg class="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
							</svg>
							{addon}
						</li>
					{/each}
				</ul>
				<p class="mt-4 text-xs text-slate-400">
					Availability varies by centre. Confirm during consultation.
				</p>
			</div>

			<!-- Pricing anchor — BACKEND: CMS-editable -->
			<div class="rounded-2xl bg-sky-500 p-8 text-white">
				<h2 class="text-xl font-bold">Pricing</h2>
				<div class="mt-4 flex items-baseline gap-2">
					<span class="text-4xl font-black">₹8,000</span>
					<span class="text-sky-200">/year</span>
				</div>
				<p class="mt-1 text-sm text-sky-200">
					Location-dependent. Your exact quote depends on city, locality, and use-case
					(MCA/GST/APOB).
				</p>
				<div class="mt-6 space-y-2 border-t border-sky-400/40 pt-5">
					<p class="text-xs text-sky-200">Price includes the full document pack:</p>
					{#each ['Rent Agreement', 'Owner NOC', 'Recent Utility Bill', 'Signage Support'] as item (item)}
						<div class="flex items-center gap-2 text-sm text-white">
							<svg class="h-3.5 w-3.5 text-sky-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							{item}
						</div>
					{/each}
				</div>
				<a
					href="/book/"
					class="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
				>
					Get an exact quote
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     FAQ
     DESIGNER: Slate-50 bg. Same accordion pattern as homepage.
               Max-width ~760px centered.
     FRONTEND: Share faqItems with /faqs CMS collection.
     SEO:      Add FAQPage JSON-LD schema from faqItems before launch.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 lg:py-20">
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
						<div class="px-6 pb-5 text-sm leading-relaxed text-slate-600">
							{item.a}
							{#if i === faqItems.length - 1}
								<a
									href="/services/company-gst-registration/"
									class="mt-2 block font-medium text-sky-600 hover:text-sky-800"
								>
									Company + GST Registration (One-Stop) →
								</a>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     RELATED NEXT STEPS (INTERNAL LINKS)
     DESIGNER: White bg. 3 horizontal link cards.
               Each card leads to a related solution/service page.
     SEO:      Internal linking distributes crawl equity to new pages.
               Keep one primary link per card — no duplicate URLs.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900">Related next steps</h2>
		<div class="grid gap-5 sm:grid-cols-3">
			{#each [{ title: 'Start a Business (India)', desc: 'Right setup plan for your company type, registration, and GST alignment.', href: '/solutions/start-a-business-india/', cta: 'Explore solution' }, { title: 'Company + GST Registration', desc: 'One-stop bundled workflow — incorporation + GST with aligned details.', href: '/services/company-gst-registration/', cta: 'Explore service' }, { title: 'Scale Your Workspace', desc: 'Virtual → Seats → Managed → Lease — move up without vendor chaos.', href: '/solutions/scale-your-workspace/', cta: 'Explore solution' }] as link (link.href)}
				<a
					href={link.href}
					class="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-300 hover:bg-sky-50"
				>
					<h3 class="text-base font-semibold text-slate-900 group-hover:text-sky-700 transition">{link.title}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{link.desc}</p>
					<span class="mt-4 flex items-center gap-1 text-sm font-medium text-sky-600 group-hover:gap-2 transition">
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
     FINAL CTA
     DESIGNER: Dark gradient bg. Centered layout.
               Mirror the homepage final CTA for brand consistency.
     ═══════════════════════════════════════════════════════════ -->
<section class="bg-gradient-to-br from-slate-900 to-sky-950 py-20 text-white lg:py-24">
	<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-white lg:text-4xl">Get your virtual office quote</h2>
		<p class="mt-4 text-lg leading-relaxed text-slate-300">
			Tell us your city/state, business type, and whether you need MCA, GST, or APOB—we'll
			shortlist the cleanest options.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href="/book/"
				class="rounded-lg bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
			>
				Book a Consultation
			</a>
			<a
				href="#cities"
				class="rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
			>
				Browse by City
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
