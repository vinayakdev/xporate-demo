<!--
  /list-your-space/ — Supply Acquisition / Partner Listing
  ================================================================
  DESIGNER:
  - Hero: slate-900 bg, H1, sub, support line, 3 trust bullets, 3 CTAs
  - Who should list: 5-card icon grid (white bg)
  - Why list: 4-card grid (slate-50 bg)
  - What we need: 6-item checklist on white bg
  - Listing standards: 3-item list (slate-50 bg)
  - How it works: 4-step timeline (white bg)
  - Partner benefits: 3-card grid (slate-50 bg)
  - Form: 3-step wizard (white bg) with progress bar + conditional fields
  - FAQ: accordion (slate-50 bg)
  - Final CTA: slate-900 bg, orange + whatsapp buttons
  FRONTEND:
  - Multi-step form: step 1 = contact + type select; step 2 = conditional per type;
    step 3 = uploads + consent + submit
  - $state: step, form fields, selectedTypes[], submitted, openFaq
  - Conditional sections rendered with {#if selectedTypes.includes('...')}
  - File inputs are UI-only — wire to actual upload endpoint in backend
  - scrollToForm() anchors hero CTA to #submit-form
  BACKEND:
  - POST /api/list-your-space { contact, address, types, conditionalFields, files }
  - File uploads: multipart/form-data to storage (S3/R2); store URLs in CMS
  - Email: auto-acknowledge to submitter + internal alert to partnerships team
  - Review queue in CMS/Notion; status: submitted → reviewing → live / rejected
  - Consent timestamp must be stored server-side
  SEO:
  - Title: "List Your Workspace on Xporate | Get Qualified Enquiries"
  - Meta: partner/supply-side intent only — NOT city workspace buying keywords
  - Canonical: /list-your-space/
  - Schema: Organization, FAQPage
-->

<script lang="ts">
	// ── Form state ───────────────────────────────────────────────
	let step = $state(1);
	let submitted = $state(false);
	let openFaq = $state<number | null>(null);

	// Step 1 fields
	let brandName = $state('');
	let contactName = $state('');
	let phone = $state('');
	let email = $state('');
	let city = $state('');
	let locality = $state('');
	let fullAddress = $state('');
	let mapsLink = $state('');
	let website = $state('');
	let selectedTypes = $state<string[]>([]);

	// Step 2 — Virtual Office
	let vo_docPack = $state('');
	let vo_signage = $state('');
	let vo_verification = $state('');
	let vo_price = $state('');

	// Step 2 — Coworking
	let cw_pricing = $state('');
	let cw_minTerm = $state('');
	let cw_amenities = $state<string[]>([]);

	// Step 2 — Managed Office
	let mo_cabinSizes = $state('');
	let mo_pricingRange = $state('');
	let mo_minTerm = $state('');

	// Step 2 — Commercial Leasing
	let cl_area = $state('');
	let cl_rentRange = $state('');
	let cl_deposit = $state('');
	let cl_leaseTerm = $state('');

	// Step 2 — Meeting Rooms / Event Spaces
	let mr_capacity = $state('');
	let mr_pricing = $state('');
	let mr_av = $state('');

	// Step 3
	let consent = $state(false);

	// ── Helpers ──────────────────────────────────────────────────
	const workspaceTypes = [
		{ id: 'virtual-office', label: 'Virtual Office' },
		{ id: 'coworking', label: 'Coworking' },
		{ id: 'managed-office', label: 'Managed Office' },
		{ id: 'commercial-leasing', label: 'Commercial Leasing' },
		{ id: 'meeting-rooms', label: 'Meeting Rooms' },
		{ id: 'day-pass', label: 'Day Pass' },
		{ id: 'event-spaces', label: 'Event Spaces' }
	];

	const cwAmenitiesOptions = [
		'High-speed Wi-Fi', 'Printing', 'Meeting rooms', 'Parking',
		'Cafeteria', 'Locker', '24/7 access', 'Reception'
	];

	function toggleType(id: string) {
		if (selectedTypes.includes(id)) {
			selectedTypes = selectedTypes.filter((t) => t !== id);
		} else {
			selectedTypes = [...selectedTypes, id];
		}
	}

	function toggleAmenity(a: string) {
		if (cw_amenities.includes(a)) {
			cw_amenities = cw_amenities.filter((x) => x !== a);
		} else {
			cw_amenities = [...cw_amenities, a];
		}
	}

	function scrollToForm() {
		document.getElementById('submit-form')?.scrollIntoView({ behavior: 'smooth' });
	}

	const step1Valid = $derived(
		brandName.trim() !== '' &&
		contactName.trim() !== '' &&
		phone.trim() !== '' &&
		email.trim() !== '' &&
		city.trim() !== '' &&
		selectedTypes.length > 0
	);

	function handleSubmit() {
		if (!consent) return;
		// TODO: POST to /api/list-your-space
		submitted = true;
	}

	// ── Static content ────────────────────────────────────────────
	const whoShouldList = [
		{
			icon: '🏢',
			heading: 'Coworking operators',
			body: 'Dedicated seats, hot desks, memberships, and community-led spaces.'
		},
		{
			icon: '🏬',
			heading: 'Managed / serviced office providers',
			body: 'Private suites, custom cabins, and office-as-a-service inventory.'
		},
		{
			icon: '📮',
			heading: 'Virtual office & business centers',
			body: 'Commercial address offerings with documentation support.'
		},
		{
			icon: '📅',
			heading: 'Meeting room & event venue partners',
			body: 'Hourly/daily rooms, training rooms, and workshop venues.'
		},
		{
			icon: '📋',
			heading: 'Commercial leasing brokers / landlords',
			body: 'Warm shell and furnished offices for long-term leases.'
		}
	];

	const whyList = [
		{
			heading: 'Qualified enquiries',
			body: 'We capture structured requirements so you can respond faster and close better.'
		},
		{
			heading: 'Better matching',
			body: 'We shortlist on locality, budget, seat count, and timeline — not just "send brochure".'
		},
		{
			heading: 'Listing clarity',
			body: 'Clear inclusions, photos, and terms reduce back-and-forth for everyone.'
		},
		{
			heading: 'Two demand engines',
			body: 'Marketplace demand plus corporate backbone demand routes enquiries to the right inventory.'
		}
	];

	const whatWeNeed = [
		{ label: 'Space basics', detail: 'Name, full address, locality, city, Google Maps link, nearest landmark/metro.' },
		{ label: 'Inventory details', detail: 'Workspace types offered and what makes your space distinct.' },
		{ label: 'Capacity and availability', detail: 'Total seats/cabins/rooms, current availability, minimum contract terms.' },
		{ label: 'Pricing and inclusions', detail: 'Starting price ranges, deposits, and what is included (internet, housekeeping, utilities).' },
		{ label: 'Photos and branding', detail: 'Minimum 8 high-quality photos, floor plan (if available), and logo.' },
		{ label: 'Commercial terms', detail: 'Contract terms, cancellation policy, and any building restrictions.' }
	];

	const standards = [
		{ heading: 'Accuracy', body: 'Details must match the real space and current availability.' },
		{ heading: 'Transparency', body: 'Include pricing ranges and key terms so teams can shortlist faster.' },
		{ heading: 'Verification readiness', body: 'Virtual office listings must clearly state the document pack provided and whether the premises supports verifications (as applicable).' }
	];

	const howItWorks = [
		{ n: '1', heading: 'Submit your space', body: 'Share your inventory and key details using the form below.' },
		{ n: '2', heading: 'Xporate review', body: 'We validate listing completeness, confirm category placement, and request any missing details.' },
		{ n: '3', heading: 'Publish and route enquiries', body: 'Your listing goes live and we route relevant enquiries to you with structured requirements.' },
		{ n: '4', heading: 'Keep details updated', body: 'You share availability and pricing updates so the listing stays accurate.' }
	];

	const benefits = [
		{ heading: 'Better-fit enquiries', body: 'We ask better questions upfront so you get fewer unqualified requests.' },
		{ heading: 'Faster decision cycles', body: 'Clear listing data helps teams shortlist and decide faster.' },
		{ heading: 'Long-term collaboration', body: 'As demand scales we can create preferred partnership workflows (case dependent).' }
	];

	const faqs = [
		{
			q: 'Do you guarantee leads?',
			a: 'No. We aim to provide qualified enquiries based on demand matching, but lead volume depends on market demand, your pricing, availability, and listing quality.'
		},
		{
			q: 'How long does it take to go live?',
			a: 'Once we have complete listing details, we can publish after review. Timelines depend on completeness and verification needs.'
		},
		{
			q: 'Can I update pricing and availability?',
			a: 'Yes. Keeping your listing current improves match quality and helps teams shortlist accurately.'
		},
		{
			q: 'Do you list commercial leasing inventory too?',
			a: 'Yes. We can list commercial leasing options where the details are clear and current.'
		}
	];

	const steps = ['Contact & space type', 'Space details', 'Photos & submit'];
</script>

<svelte:head>
	<title>List Your Workspace on Xporate | Get Qualified Enquiries</title>
	<meta
		name="description"
		content="List your coworking, managed office, meeting rooms, or virtual office with Xporate. Reach verified business demand and get structured leads. Submit your space."
	/>
</svelte:head>

<!-- ═══════════════════════════════════════════════
     HERO
     DESIGNER: slate-900 bg, H1, sub, support line, trust bullets, CTAs
     SEO: partner/supply intent — NOT consumer workspace buying keywords
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white sm:py-20">
	<div class="mx-auto max-w-3xl text-center">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex justify-center gap-1 text-sm text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="hover:text-white">Home</a>
			<span>/</span>
			<span class="text-white">List Your Space</span>
		</nav>

		<p class="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
			For Workspace Operators
		</p>
		<h1 class="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
			List your space on Xporate
		</h1>
		<p class="mx-auto mb-3 max-w-2xl text-lg text-slate-300">
			Reach teams actively searching for virtual offices, coworking seats, managed offices,
			meeting rooms, day passes, and event spaces.
		</p>
		<p class="mx-auto mb-6 max-w-xl text-base text-slate-400">
			We connect verified business requirements with the right inventory — so you get
			structured enquiries instead of random DMs.
		</p>

		<!-- Support line -->
		<p class="mb-6 text-sm text-slate-500">
			For workspace operators · Brokers/landlords (leasing) · Business centers
		</p>

		<!-- Trust bullets -->
		<div class="mb-8 flex flex-wrap justify-center gap-3">
			{#each [
				'Structured requirements (city, locality, budget, team size, move-in date)',
				'Faster shortlisting through clear listing data',
				'You control availability and pricing updates'
			] as bullet (bullet)}
				<span class="rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm text-slate-300">
					{bullet}
				</span>
			{/each}
		</div>

		<!-- CTAs -->
		<div class="flex flex-wrap justify-center gap-3">
			<button
				onclick={scrollToForm}
				class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
			>
				Submit your space
			</button>
			<a
				href="/contact"
				class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
			>
				Talk to partnerships
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
     WHO SHOULD LIST
     DESIGNER: white bg, 5-card grid with emoji icon
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Who should list</h2>
		<p class="mb-10 text-slate-600">
			If you operate or manage workspace inventory in India, this is for you.
		</p>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each whoShouldList as item (item.heading)}
				<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<div class="mb-3 text-2xl" aria-hidden="true">{item.icon}</div>
					<h3 class="mb-1.5 font-semibold text-slate-900">{item.heading}</h3>
					<p class="text-sm text-slate-600">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     WHY LIST WITH XPORATE
     DESIGNER: slate-50 bg, 4-card grid, orange icon bg
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Why list with Xporate</h2>
		<p class="mb-10 text-slate-600">
			Better information upfront makes every enquiry more useful.
		</p>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each whyList as item (item.heading)}
				<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-slate-900">{item.heading}</h3>
					<p class="text-sm text-slate-600">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     WHAT WE NEED FROM YOU
     DESIGNER: white bg, numbered checklist, 2-col on desktop
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">What we need from you</h2>
		<p class="mb-10 text-slate-600">
			Complete submissions get reviewed and published faster.
		</p>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each whatWeNeed as item, i (item.label)}
				<div class="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<span class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
						{i + 1}
					</span>
					<div>
						<h3 class="mb-1 font-semibold text-slate-900">{item.label}</h3>
						<p class="text-sm text-slate-600">{item.detail}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     LISTING STANDARDS
     DESIGNER: slate-50 bg, 3-col cards, warning tone is neutral
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Listing standards</h2>
		<p class="mb-10 text-slate-600">
			We publish listings that are clear, current, and verifiable.
		</p>

		<div class="grid gap-5 sm:grid-cols-3">
			{#each standards as s (s.heading)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
					<div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
						<svg class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-slate-900">{s.heading}</h3>
					<p class="text-sm leading-relaxed text-slate-600">{s.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     HOW THE PARTNERSHIP WORKS
     DESIGNER: white bg, 4-step numbered timeline
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">How the partnership works</h2>
		<p class="mb-10 text-slate-600">Four steps from submission to live listing.</p>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howItWorks as s (s.n)}
				<div class="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
						{s.n}
					</div>
					<h3 class="mb-2 font-semibold text-slate-900">{s.heading}</h3>
					<p class="text-sm text-slate-600">{s.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     PARTNER BENEFITS
     DESIGNER: slate-50 bg, 3-card grid
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Partner benefits</h2>
		<p class="mb-10 text-slate-600">What you get when you list with us.</p>

		<div class="grid gap-5 sm:grid-cols-3">
			{#each benefits as b (b.heading)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
					<h3 class="mb-2 font-semibold text-orange-600">{b.heading}</h3>
					<p class="text-sm leading-relaxed text-slate-600">{b.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     SUBMIT FORM (3-STEP WIZARD)
     DESIGNER: white bg, progress bar, step panels
     FRONTEND: step 1 = contact + type; step 2 = conditional per type; step 3 = uploads + consent
     BACKEND: POST /api/list-your-space (multipart/form-data)
     ═══════════════════════════════════════════════ -->
<section id="submit-form" class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-2 text-2xl font-bold text-slate-900">Submit your space</h2>
		<p class="mb-8 text-slate-600">
			Fill in the details below and our partnerships team will be in touch.
		</p>

		{#if submitted}
			<!-- Post-submit confirmation -->
			<div class="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
				<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
					<svg class="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-bold text-slate-900">Submission received</h3>
				<p class="text-slate-600">
					Thanks — our team will review your submission and contact you for any missing details.
				</p>
			</div>
		{:else}
			<!-- Progress bar -->
			<div class="mb-8">
				<div class="mb-3 flex justify-between">
					{#each steps as s, i (s)}
						<span class={['text-xs font-medium', step > i + 1 ? 'text-orange-500' : step === i + 1 ? 'text-slate-900' : 'text-slate-400'].join(' ')}>
							{i + 1}. {s}
						</span>
					{/each}
				</div>
				<div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
					<div
						class="h-full rounded-full bg-orange-500 transition-all duration-300"
						style="width: {((step - 1) / (steps.length - 1)) * 100}%"
					></div>
				</div>
			</div>

			<!-- ── STEP 1: Contact + type selection ── -->
			{#if step === 1}
				<div class="space-y-5">
					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="brandName">
								Business / Brand name <span class="text-red-500">*</span>
							</label>
							<input
								id="brandName"
								type="text"
								bind:value={brandName}
								placeholder="e.g. CoWork Central"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="contactName">
								Primary contact name <span class="text-red-500">*</span>
							</label>
							<input
								id="contactName"
								type="text"
								bind:value={contactName}
								placeholder="Your name"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="phone">
								Phone number <span class="text-red-500">*</span>
							</label>
							<input
								id="phone"
								type="tel"
								bind:value={phone}
								placeholder="+91 98765 43210"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="email">
								Email <span class="text-red-500">*</span>
							</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								placeholder="you@company.com"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="city">
								City <span class="text-red-500">*</span>
							</label>
							<input
								id="city"
								type="text"
								bind:value={city}
								placeholder="e.g. Bangalore"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="locality">
								Locality
							</label>
							<input
								id="locality"
								type="text"
								bind:value={locality}
								placeholder="e.g. Koramangala"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
					</div>

					<div>
						<label class="mb-1.5 block text-sm font-medium text-slate-700" for="fullAddress">
							Full address
						</label>
						<textarea
							id="fullAddress"
							bind:value={fullAddress}
							rows="2"
							placeholder="Building, street, area, city, PIN"
							class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
						></textarea>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mapsLink">
								Google Maps link
							</label>
							<input
								id="mapsLink"
								type="url"
								bind:value={mapsLink}
								placeholder="https://maps.google.com/..."
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="website">
								Website (optional)
							</label>
							<input
								id="website"
								type="url"
								bind:value={website}
								placeholder="https://yourspace.com"
								class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
					</div>

					<!-- Workspace types -->
					<div>
						<p class="mb-2 text-sm font-medium text-slate-700">
							Workspace types offered <span class="text-red-500">*</span>
						</p>
						<p class="mb-3 text-xs text-slate-500">Select all that apply.</p>
						<div class="flex flex-wrap gap-2">
							{#each workspaceTypes as t (t.id)}
								<button
									type="button"
									onclick={() => toggleType(t.id)}
									class={[
										'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
										selectedTypes.includes(t.id)
											? 'border-orange-500 bg-orange-500 text-white'
											: 'border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
									].join(' ')}
								>
									{t.label}
								</button>
							{/each}
						</div>
					</div>

					<div class="pt-2">
						<button
							onclick={() => (step = 2)}
							disabled={!step1Valid}
							class="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
						>
							Next: Space details →
						</button>
					</div>
				</div>
			{/if}

			<!-- ── STEP 2: Conditional fields per workspace type ── -->
			{#if step === 2}
				<div class="space-y-8">

					{#if selectedTypes.includes('virtual-office')}
						<div class="rounded-xl border border-slate-200 p-5">
							<h3 class="mb-4 font-semibold text-slate-900">Virtual Office details</h3>
							<div class="space-y-4">
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="vo_docPack">
										Document pack offered
									</label>
									<input
										id="vo_docPack"
										type="text"
										bind:value={vo_docPack}
										placeholder="e.g. Rent agreement, NOC, utility bill"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div class="grid gap-4 sm:grid-cols-2">
									<div>
										<label class="mb-1.5 block text-sm font-medium text-slate-700" for="vo_signage">
											Signage support
										</label>
										<select
											id="vo_signage"
											bind:value={vo_signage}
											class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
										>
											<option value="">Select…</option>
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</select>
									</div>
									<div>
										<label class="mb-1.5 block text-sm font-medium text-slate-700" for="vo_verification">
											Verification support (as applicable)
										</label>
										<select
											id="vo_verification"
											bind:value={vo_verification}
											class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
										>
											<option value="">Select…</option>
											<option value="yes">Yes — premises verification-ready</option>
											<option value="no">No</option>
											<option value="case-by-case">Case by case</option>
										</select>
									</div>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="vo_price">
										Starting price per year (range)
									</label>
									<input
										id="vo_price"
										type="text"
										bind:value={vo_price}
										placeholder="e.g. ₹1,200 – ₹3,000/year"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
							</div>
						</div>
					{/if}

					{#if selectedTypes.includes('coworking') || selectedTypes.includes('day-pass')}
						<div class="rounded-xl border border-slate-200 p-5">
							<h3 class="mb-4 font-semibold text-slate-900">Coworking / Day Pass details</h3>
							<div class="space-y-4">
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cw_pricing">
										Hot desk / Dedicated seat pricing
									</label>
									<input
										id="cw_pricing"
										type="text"
										bind:value={cw_pricing}
										placeholder="e.g. Hot desk ₹8,000/mo · Dedicated ₹12,000/mo"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cw_minTerm">
										Minimum term
									</label>
									<input
										id="cw_minTerm"
										type="text"
										bind:value={cw_minTerm}
										placeholder="e.g. 1 month"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<p class="mb-2 text-sm font-medium text-slate-700">Amenities</p>
									<div class="flex flex-wrap gap-2">
										{#each cwAmenitiesOptions as a (a)}
											<button
												type="button"
												onclick={() => toggleAmenity(a)}
												class={[
													'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
													cw_amenities.includes(a)
														? 'border-orange-500 bg-orange-500 text-white'
														: 'border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
												].join(' ')}
											>
												{a}
											</button>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/if}

					{#if selectedTypes.includes('managed-office')}
						<div class="rounded-xl border border-slate-200 p-5">
							<h3 class="mb-4 font-semibold text-slate-900">Managed Office details</h3>
							<div class="space-y-4">
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mo_cabinSizes">
										Private cabin sizes available
									</label>
									<input
										id="mo_cabinSizes"
										type="text"
										bind:value={mo_cabinSizes}
										placeholder="e.g. 4-seat, 8-seat, 12-seat, 20-seat"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div class="grid gap-4 sm:grid-cols-2">
									<div>
										<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mo_pricingRange">
											Pricing range
										</label>
										<input
											id="mo_pricingRange"
											type="text"
											bind:value={mo_pricingRange}
											placeholder="e.g. ₹18,000–₹25,000/seat/mo"
											class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
										/>
									</div>
									<div>
										<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mo_minTerm">
											Minimum term
										</label>
										<input
											id="mo_minTerm"
											type="text"
											bind:value={mo_minTerm}
											placeholder="e.g. 3 months"
											class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
										/>
									</div>
								</div>
							</div>
						</div>
					{/if}

					{#if selectedTypes.includes('commercial-leasing')}
						<div class="rounded-xl border border-slate-200 p-5">
							<h3 class="mb-4 font-semibold text-slate-900">Commercial Leasing details</h3>
							<div class="grid gap-4 sm:grid-cols-2">
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cl_area">
										Area (sq ft)
									</label>
									<input
										id="cl_area"
										type="text"
										bind:value={cl_area}
										placeholder="e.g. 2,500 sq ft"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cl_rentRange">
										Rent per sq ft (range)
									</label>
									<input
										id="cl_rentRange"
										type="text"
										bind:value={cl_rentRange}
										placeholder="e.g. ₹65–₹80/sq ft/mo"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cl_deposit">
										Deposit range
									</label>
									<input
										id="cl_deposit"
										type="text"
										bind:value={cl_deposit}
										placeholder="e.g. 3–6 months"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="cl_leaseTerm">
										Lease term
									</label>
									<input
										id="cl_leaseTerm"
										type="text"
										bind:value={cl_leaseTerm}
										placeholder="e.g. 3 years with lock-in"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
							</div>
						</div>
					{/if}

					{#if selectedTypes.includes('meeting-rooms') || selectedTypes.includes('event-spaces')}
						<div class="rounded-xl border border-slate-200 p-5">
							<h3 class="mb-4 font-semibold text-slate-900">Meeting Rooms / Event Spaces details</h3>
							<div class="grid gap-4 sm:grid-cols-3">
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mr_capacity">
										Capacity
									</label>
									<input
										id="mr_capacity"
										type="text"
										bind:value={mr_capacity}
										placeholder="e.g. 4, 8, 20, 50 seats"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mr_pricing">
										Hourly / daily pricing
									</label>
									<input
										id="mr_pricing"
										type="text"
										bind:value={mr_pricing}
										placeholder="e.g. ₹500/hr"
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									/>
								</div>
								<div>
									<label class="mb-1.5 block text-sm font-medium text-slate-700" for="mr_av">
										AV / projector available
									</label>
									<select
										id="mr_av"
										bind:value={mr_av}
										class="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
									>
										<option value="">Select…</option>
										<option value="yes">Yes</option>
										<option value="no">No</option>
										<option value="on-request">On request</option>
									</select>
								</div>
							</div>
						</div>
					{/if}

					{#if selectedTypes.length === 0}
						<p class="text-sm text-slate-500">
							No workspace types selected. Go back and select at least one.
						</p>
					{/if}

					<div class="flex gap-3 pt-2">
						<button
							onclick={() => (step = 1)}
							class="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
						>
							← Back
						</button>
						<button
							onclick={() => (step = 3)}
							class="flex-1 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
						>
							Next: Photos & submit →
						</button>
					</div>
				</div>
			{/if}

			<!-- ── STEP 3: Uploads + consent + submit ── -->
			{#if step === 3}
				<div class="space-y-6">
					<!-- Photos -->
					<div>
						<label class="mb-1.5 block text-sm font-medium text-slate-700" for="photos">
							Space photos <span class="text-red-500">*</span>
							<span class="ml-1 font-normal text-slate-500">(min 8)</span>
						</label>
						<div class="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
							<input
								id="photos"
								type="file"
								accept="image/*"
								multiple
								class="hidden"
							/>
							<label
								for="photos"
								class="cursor-pointer text-sm text-slate-500 hover:text-slate-700"
							>
								<span class="block text-2xl mb-2" aria-hidden="true">📷</span>
								Click to upload photos (JPG, PNG, WEBP)
							</label>
							<p class="mt-1 text-xs text-slate-400">Minimum 8 photos · Max 10 MB each</p>
						</div>
					</div>

					<!-- Logo -->
					<div>
						<label class="mb-1.5 block text-sm font-medium text-slate-700" for="logo">
							Logo
						</label>
						<input
							id="logo"
							type="file"
							accept="image/*,.svg"
							class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
						/>
					</div>

					<!-- Floor plan + brochure (optional) -->
					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="floorPlan">
								Floor plan <span class="font-normal text-slate-500">(optional)</span>
							</label>
							<input
								id="floorPlan"
								type="file"
								accept="image/*,.pdf"
								class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-sm font-medium text-slate-700" for="brochure">
								Brochure <span class="font-normal text-slate-500">(optional)</span>
							</label>
							<input
								id="brochure"
								type="file"
								accept=".pdf,.ppt,.pptx"
								class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
							/>
						</div>
					</div>

					<!-- Consent -->
					<label class="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
						<input
							type="checkbox"
							bind:checked={consent}
							class="mt-0.5 h-4 w-4 shrink-0 accent-orange-500"
						/>
						<span class="text-sm text-slate-700">
							I confirm the information submitted is accurate and I have the right to list this space.
						</span>
					</label>

					<div class="flex gap-3 pt-2">
						<button
							onclick={() => (step = 2)}
							class="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
						>
							← Back
						</button>
						<button
							onclick={handleSubmit}
							disabled={!consent}
							class="flex-1 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
						>
							Submit listing
						</button>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FAQ (PARTNER-SIDE)
     DESIGNER: slate-50 bg, accordion
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
							{faq.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FINAL CTA
     DESIGNER: slate-900 bg, orange + whatsapp buttons
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-3 text-2xl font-bold sm:text-3xl">Ready to list?</h2>
		<p class="mb-8 text-slate-300">
			Submit your space details and we'll set up your listing workflow.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<button
				onclick={scrollToForm}
				class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
			>
				Submit your space
			</button>
			<a
				href="/contact"
				class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
			>
				Contact partnerships
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
