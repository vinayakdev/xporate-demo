<!--
  /contact/ — Contact Xporate
  ================================================================
  DESIGNER:
  - Hero: slate-900 bg, H1 + subtext, orange CTA + WhatsApp, phone + email links
  - What do you need help with: white, 6 tiles 2-col mobile / 3-col desktop
  - Contact options: slate-50, 3 cards (WhatsApp / Call / Email)
  - Contact form: white, full $state form with conditional fields per category
  - What happens next: slate-50, 3 steps
  - Helpful links: white, orange-arrow link list
  - Final CTA: slate-900 dark, Book + WhatsApp
  FRONTEND:
  - All form state via $state (Svelte 5)
  - Conditional fields derived from category selection
  - handleSubmit: e.preventDefault(); submitted = true;
  - No server-side action needed
  SEO:
  - Title: "Contact Xporate | Book a Consultation or Get Support"
  - Meta description targets: virtual office, coworking, UAE, compliance contact intent
-->

<script lang="ts">
	// ── Form base state ──────────────────────────────────────────────────────
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let contactMethod = $state('WhatsApp');
	let category = $state('');
	let city = $state('');
	let locality = $state('');
	let timeline = $state('');
	let budget = $state('');
	let message = $state('');
	let consent = $state(false);
	let submitted = $state(false);

	// ── Conditional: Virtual Office ──────────────────────────────────────────
	let voUseCase = $state('');
	let voEntityStatus = $state('');
	let voDocDate = $state('');

	// ── Conditional: Coworking ───────────────────────────────────────────────
	let cwSeats = $state('');
	let cwStartDate = $state('');
	let cwTerm = $state('');

	// ── Conditional: Managed Office ──────────────────────────────────────────
	let moTeamSize = $state('');
	let moCabins = $state('');
	let moBranding = $state('');

	// ── Conditional: Commercial Leasing ──────────────────────────────────────
	let clArea = $state('');
	let clLeaseTerm = $state('');
	let clMicroMarkets = $state('');

	// ── Conditional: Compliance ───────────────────────────────────────────────
	let compEntityType = $state('');
	let compInvoiceBand = $state('');

	// ── Conditional: Legal ────────────────────────────────────────────────────
	let legalNeed = $state('');
	let legalUrgency = $state('');

	// ── Conditional: UAE Expansion ────────────────────────────────────────────
	let uaeActivity = $state('');
	let uaeZonePreference = $state('');
	let uaeFounders = $state('');

	// ── Derived flags ─────────────────────────────────────────────────────────
	let isVO = $derived(category === 'Virtual Office');
	let isCW = $derived(category === 'Coworking');
	let isMO = $derived(category === 'Managed Office');
	let isCL = $derived(category === 'Commercial Leasing');
	let isComp = $derived(category === 'Compliance');
	let isLegal = $derived(category === 'Legal');
	let isUAE = $derived(category === 'UAE Expansion');

	// ── Submit handler ────────────────────────────────────────────────────────
	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}

	// ── Data ──────────────────────────────────────────────────────────────────
	const helpTiles = [
		{
			title: 'Virtual Office',
			subtitle: 'GST/MCA document pack',
			desc: 'Best for: address + documentation-ready pack.',
			href: '/virtual-office/'
		},
		{
			title: 'Coworking / Dedicated Seats',
			subtitle: '',
			desc: 'Best for: desks with flexibility.',
			href: '/coworking-space/'
		},
		{
			title: 'Managed Office',
			subtitle: 'private suite',
			desc: 'Best for: private branded office without long leases.',
			href: '/manage-office/'
		},
		{
			title: 'Commercial Leasing',
			subtitle: 'long-term HQ',
			desc: 'Best for: conventional leases and negotiation support.',
			href: '/commercial-leasing/'
		},
		{
			title: 'Compliance & Legal Support',
			subtitle: '',
			desc: 'Best for: ongoing compliance, contracts, notices.',
			href: '/solutions/compliance-governance/'
		},
		{
			title: 'Dubai / UAE Expansion',
			subtitle: '',
			desc: 'Best for: setup + office + visa workflow planning.',
			href: '/solutions/expand-to-uae/'
		}
	];

	const helpfulLinks = [
		{ label: 'Virtual Office guidelines', href: '/important-guidelines-for-virtual-office' },
		{ label: 'FAQs', href: '/faqs' },
		{ label: 'Locations', href: '/locations/' },
		{ label: 'Solutions Overview', href: '/solutions/' },
		{ label: 'Case Studies', href: '/case-studies/' }
	];
</script>

<svelte:head>
	<title>Contact Xporate | Book a Consultation or Get Support</title>
	<meta
		name="description"
		content="Contact Xporate for virtual office, coworking, managed office, leasing, compliance, legal, or UAE expansion. Call, WhatsApp, or book a consultation."
	/>
	<link rel="canonical" href="https://xporate.in/contact" />
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════
     1. HERO — slate-900
════════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">Contact Xporate</h1>
		<p class="mb-8 text-lg leading-relaxed text-slate-300">
			Tell us what outcome you want and your timeline—we'll route you to the cleanest path.
			Workspaces across India, plus corporate backbone support (India + Dubai).
		</p>

		<!-- Primary CTAs -->
		<div class="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href="/book/"
				class="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-green-400 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-slate-900"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
					/>
				</svg>
				WhatsApp Us
			</a>
		</div>

		<!-- Direct contact -->
		<div class="flex flex-col items-center justify-center gap-4 text-sm text-slate-400 sm:flex-row sm:gap-8">
			<a href="tel:7060706076" class="flex items-center gap-2 transition hover:text-orange-400">
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				70 6070 6076
			</a>
			<a
				href="mailto:enquire@xporate.in"
				class="flex items-center gap-2 transition hover:text-orange-400"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				enquire@xporate.in
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     2. WHAT DO YOU NEED HELP WITH — white
════════════════════════════════════════════════════════════ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What do you need help with?
		</h2>
		<div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
			{#each helpTiles as tile (tile.href)}
				<a
					href={tile.href}
					class="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-orange-400 hover:shadow-md"
				>
					<h3 class="mb-1 font-semibold text-slate-900 group-hover:text-orange-600">
						{tile.title}
						{#if tile.subtitle}
							<span class="block text-xs font-normal text-slate-500">({tile.subtitle})</span>
						{/if}
					</h3>
					<p class="text-sm text-slate-600">{tile.desc}</p>
					<span class="mt-3 inline-block text-xs font-semibold text-orange-500 group-hover:underline">
						Learn more →
					</span>
				</a>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
			>
				Not sure? Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     3. CONTACT OPTIONS — slate-50
════════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Contact options</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			<!-- WhatsApp -->
			<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
				<div class="mb-3 flex justify-center">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
							/>
						</svg>
					</span>
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">WhatsApp <span class="text-xs font-normal text-orange-500">(fastest)</span></h3>
				<p class="mb-4 text-sm text-slate-600">
					Share your city, locality preference, headcount, and move-in date.
				</p>
				<a
					href="https://wa.me/917060706076"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
				>
					Open WhatsApp →
				</a>
			</div>

			<!-- Call -->
			<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
				<div class="mb-3 flex justify-center">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</span>
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">Call</h3>
				<p class="mb-4 text-sm text-slate-600">Speak directly with our team.</p>
				<a
					href="tel:7060706076"
					class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
				>
					70 6070 6076
				</a>
			</div>

			<!-- Email -->
			<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
				<div class="mb-3 flex justify-center">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</span>
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">Email</h3>
				<p class="mb-4 text-sm text-slate-600">For detailed requirements or attachments.</p>
				<a
					href="mailto:enquire@xporate.in"
					class="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
				>
					enquire@xporate.in
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     4. CONTACT FORM — white
════════════════════════════════════════════════════════════ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-8 text-3xl font-bold text-slate-900">Send your requirement</h2>

		{#if submitted}
			<!-- Success state -->
			<div class="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
				<div class="mb-3 flex justify-center">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</span>
				</div>
				<p class="mb-2 text-lg font-semibold text-slate-900">Thanks—our team will contact you shortly.</p>
				<p class="mb-5 text-sm text-slate-600">
					For urgent requirements, WhatsApp us directly.
				</p>
				<a
					href="https://wa.me/917060706076"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						/>
					</svg>
					WhatsApp Us →
				</a>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-6">
				<!-- Full name -->
				<div>
					<label for="name" class="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						required
						placeholder="Your full name"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Email -->
				<div>
					<label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						placeholder="you@company.com"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Phone -->
				<div>
					<label for="phone" class="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
					<input
						id="phone"
						type="tel"
						bind:value={phone}
						required
						placeholder="10-digit mobile number"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Preferred contact method -->
				<fieldset>
					<legend class="mb-2 block text-sm font-medium text-slate-700">Preferred contact method</legend>
					<div class="flex flex-wrap gap-4">
						{#each ['WhatsApp', 'Call', 'Email'] as method (method)}
							<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
								<input
									type="radio"
									name="contactMethod"
									value={method}
									bind:group={contactMethod}
									class="accent-orange-500"
								/>
								{method}
							</label>
						{/each}
					</div>
				</fieldset>

				<!-- Category -->
				<div>
					<label for="category" class="mb-1.5 block text-sm font-medium text-slate-700">
						What do you need?
					</label>
					<select
						id="category"
						bind:value={category}
						required
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					>
						<option value="" disabled>Select a category</option>
						{#each ['Virtual Office', 'Coworking', 'Managed Office', 'Commercial Leasing', 'Meeting Rooms', 'Day Pass', 'Event Spaces', 'Compliance', 'Legal', 'UAE Expansion', 'Other'] as opt (opt)}
							<option value={opt}>{opt}</option>
						{/each}
					</select>
				</div>

				<!-- ── Conditional: Virtual Office ── -->
				{#if isVO}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Virtual Office details</legend>
						<div class="space-y-4">
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Use-case</span>
								<div class="flex flex-wrap gap-4">
									{#each ['GST', 'MCA', 'APOB'] as uc (uc)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="voUseCase" value={uc} bind:group={voUseCase} class="accent-orange-500" />
											{uc}
										</label>
									{/each}
								</div>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Entity status</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Not formed yet', 'Incorporated'] as es (es)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="voEntityStatus" value={es} bind:group={voEntityStatus} class="accent-orange-500" />
											{es}
										</label>
									{/each}
								</div>
							</div>
							<div>
								<label for="voDocDate" class="mb-1.5 block text-sm font-medium text-slate-700">
									Need documents by
								</label>
								<input
									id="voDocDate"
									type="date"
									bind:value={voDocDate}
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: Coworking ── -->
				{#if isCW}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Coworking details</legend>
						<div class="space-y-4">
							<div>
								<label for="cwSeats" class="mb-1.5 block text-sm font-medium text-slate-700">Seats needed</label>
								<input
									id="cwSeats"
									type="number"
									bind:value={cwSeats}
									min="1"
									placeholder="Number of seats"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<label for="cwStartDate" class="mb-1.5 block text-sm font-medium text-slate-700">Start date</label>
								<input
									id="cwStartDate"
									type="date"
									bind:value={cwStartDate}
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Term preference</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Daily', 'Monthly', '3+ months'] as t (t)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="cwTerm" value={t} bind:group={cwTerm} class="accent-orange-500" />
											{t}
										</label>
									{/each}
								</div>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: Managed Office ── -->
				{#if isMO}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Managed Office details</legend>
						<div class="space-y-4">
							<div>
								<label for="moTeamSize" class="mb-1.5 block text-sm font-medium text-slate-700">Team size</label>
								<input
									id="moTeamSize"
									type="number"
									bind:value={moTeamSize}
									min="1"
									placeholder="Number of people"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Cabins / meeting rooms required?</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Yes', 'No'] as v (v)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="moCabins" value={v} bind:group={moCabins} class="accent-orange-500" />
											{v}
										</label>
									{/each}
								</div>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Branding required?</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Yes', 'No'] as v (`branding-${v}`)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="moBranding" value={v} bind:group={moBranding} class="accent-orange-500" />
											{v}
										</label>
									{/each}
								</div>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: Commercial Leasing ── -->
				{#if isCL}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Commercial Leasing details</legend>
						<div class="space-y-4">
							<div>
								<label for="clArea" class="mb-1.5 block text-sm font-medium text-slate-700">Required area (sq ft)</label>
								<input
									id="clArea"
									type="number"
									bind:value={clArea}
									min="0"
									placeholder="e.g. 2000"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<label for="clLeaseTerm" class="mb-1.5 block text-sm font-medium text-slate-700">Lease term target</label>
								<input
									id="clLeaseTerm"
									type="text"
									bind:value={clLeaseTerm}
									placeholder="e.g. 3 years"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<label for="clMicroMarkets" class="mb-1.5 block text-sm font-medium text-slate-700">Preferred micro-markets</label>
								<input
									id="clMicroMarkets"
									type="text"
									bind:value={clMicroMarkets}
									placeholder="e.g. Sector 44, Cyber City"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: Compliance ── -->
				{#if isComp}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Compliance details</legend>
						<div class="space-y-4">
							<div>
								<label for="compEntityType" class="mb-1.5 block text-sm font-medium text-slate-700">Entity type</label>
								<input
									id="compEntityType"
									type="text"
									bind:value={compEntityType}
									placeholder="e.g. Private Limited, LLP"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Approx monthly invoices</span>
								<div class="flex flex-wrap gap-4">
									{#each ['0–50', '51–200', '200+'] as band (band)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="compInvoiceBand" value={band} bind:group={compInvoiceBand} class="accent-orange-500" />
											{band}
										</label>
									{/each}
								</div>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: Legal ── -->
				{#if isLegal}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">Legal details</legend>
						<div class="space-y-4">
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Need</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Draft', 'Review', 'Notice', 'Dispute'] as n (n)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="legalNeed" value={n} bind:group={legalNeed} class="accent-orange-500" />
											{n}
										</label>
									{/each}
								</div>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Urgency</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Normal', 'Urgent'] as u (u)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="legalUrgency" value={u} bind:group={legalUrgency} class="accent-orange-500" />
											{u}
										</label>
									{/each}
								</div>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- ── Conditional: UAE Expansion ── -->
				{#if isUAE}
					<fieldset class="rounded-lg border border-orange-100 bg-orange-50 p-4">
						<legend class="mb-3 text-sm font-semibold text-orange-700">UAE Expansion details</legend>
						<div class="space-y-4">
							<div>
								<label for="uaeActivity" class="mb-1.5 block text-sm font-medium text-slate-700">Business activity</label>
								<input
									id="uaeActivity"
									type="text"
									bind:value={uaeActivity}
									placeholder="e.g. IT services, Consulting"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
							<div>
								<span class="mb-2 block text-sm font-medium text-slate-700">Mainland vs Free Zone preference</span>
								<div class="flex flex-wrap gap-4">
									{#each ['Mainland', 'Free Zone', 'No preference'] as z (z)}
										<label class="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
											<input type="radio" name="uaeZonePreference" value={z} bind:group={uaeZonePreference} class="accent-orange-500" />
											{z}
										</label>
									{/each}
								</div>
							</div>
							<div>
								<label for="uaeFounders" class="mb-1.5 block text-sm font-medium text-slate-700">Founders count</label>
								<input
									id="uaeFounders"
									type="number"
									bind:value={uaeFounders}
									min="1"
									placeholder="Number of founders"
									class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
								/>
							</div>
						</div>
					</fieldset>
				{/if}

				<!-- City -->
				<div>
					<label for="city" class="mb-1.5 block text-sm font-medium text-slate-700">City</label>
					<input
						id="city"
						type="text"
						bind:value={city}
						required
						placeholder="e.g. Gurugram, Mumbai"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Locality -->
				<div>
					<label for="locality" class="mb-1.5 block text-sm font-medium text-slate-700">
						Locality preference <span class="font-normal text-slate-400">(optional)</span>
					</label>
					<input
						id="locality"
						type="text"
						bind:value={locality}
						placeholder="e.g. Sector 44, Cyber City"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Timeline -->
				<div>
					<label for="timeline" class="mb-1.5 block text-sm font-medium text-slate-700">Timeline</label>
					<select
						id="timeline"
						bind:value={timeline}
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					>
						<option value="" disabled>Select your timeline</option>
						{#each ['ASAP', '1–2 weeks', '2–4 weeks', '1–3 months', '3+ months'] as t (t)}
							<option value={t}>{t}</option>
						{/each}
					</select>
				</div>

				<!-- Budget -->
				<div>
					<label for="budget" class="mb-1.5 block text-sm font-medium text-slate-700">
						Budget range <span class="font-normal text-slate-400">(optional)</span>
					</label>
					<input
						id="budget"
						type="text"
						bind:value={budget}
						placeholder="e.g. ₹10,000–₹20,000/month"
						class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
					<textarea
						id="message"
						bind:value={message}
						rows="4"
						placeholder="Any additional context about your requirement..."
						class="w-full resize-y rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
					></textarea>
				</div>

				<!-- Consent -->
				<div class="flex items-start gap-3">
					<input
						id="consent"
						type="checkbox"
						bind:checked={consent}
						required
						class="mt-0.5 h-4 w-4 rounded accent-orange-500"
					/>
					<label for="consent" class="cursor-pointer text-sm text-slate-600">
						I agree to be contacted about my request.
					</label>
				</div>

				<!-- Submit -->
				<button
					type="submit"
					disabled={!consent}
					class="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
				>
					Send request
				</button>
			</form>
		{/if}
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     5. WHAT HAPPENS NEXT — slate-50
════════════════════════════════════════════════════════════ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What happens next</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
				<div class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
					1
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">We confirm fit and route you</h3>
				<p class="text-sm text-slate-600">
					We confirm whether your requirement matches the right workspace or solution pathway.
				</p>
			</div>
			<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
				<div class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
					2
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">We share a shortlist or workflow plan</h3>
				<p class="text-sm text-slate-600">
					For workspaces: options and trade-offs. For corporate backbone: steps, inputs, and timeline expectations.
				</p>
			</div>
			<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
				<div class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
					3
				</div>
				<h3 class="mb-2 font-semibold text-slate-900">No approval promises</h3>
				<p class="text-sm text-slate-600">
					We don't guarantee approvals for GST/MCA/UAE visas/banking. Outcomes depend on authority and institution checks.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     6. HELPFUL LINKS — white
════════════════════════════════════════════════════════════ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-8 text-3xl font-bold text-slate-900">Helpful links</h2>
		<ul class="divide-y divide-slate-100">
			{#each helpfulLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="group flex items-center justify-between py-4 text-slate-700 transition hover:text-orange-600"
					>
						<span class="font-medium">{link.label}</span>
						<span class="text-orange-500 transition group-hover:translate-x-1">→</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- ═══════════════════════════════════════════════════════════
     7. FINAL CTA — slate-900
════════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Want the fastest route?</h2>
		<p class="mb-8 text-lg text-slate-300">
			Book a consultation and we'll map your cleanest path in one call.
		</p>
		<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href="/book/"
				class="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-green-400 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-slate-900"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
					/>
				</svg>
				WhatsApp Us
			</a>
		</div>
	</div>
</section>
