<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/coworking-space/+page.svelte                     ║
║  URL:   /coworking-space/                                            ║
║  ROLE:  India hub for Coworking Space — NOT a city page             ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: dark slate-900 with orange accents for brand consistency.  ║
║  · Quick picker: 4 equal-height cards. Hover state in orange.       ║
║  · Why coworking: 3-column grid with numbered callouts.             ║
║  · City directory: primary conversion section. Full-width grid.     ║
║  · City cards: name + arrow. Add count badge once inventory ready.  ║
║  · How it works: numbered steps, horizontal on desktop.             ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · FAQ uses $state accordion pattern (same as locations/virtual-    ║
║    office pages).                                                    ║
║  · City slugs use lowercase: /coworking-space/bangalore/ etc.       ║
║  · Finder section is static display (no interactive filters yet).  ║
║  · All city links go to /coworking-space/{city}/ (NEVER root).     ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Pricing range (₹3,000–8,000/month) must be CMS-editable.        ║
║  · City list should be dynamic — populated from inventory CMS.      ║
║  · FAQ items: share with /faqs CMS collection.                      ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · CANONICAL: /coworking-space/ must remain the India hub.          ║
║    Do NOT redirect /coworking-space/ → /coworking-space/{city}/     ║
║  · Keep these URL patterns unchanged:                                ║
║      /coworking-space/{city}/                                        ║
║      /coworking-space/{city}/{locality}/{center-slug}                ║
║  · Schema to add before launch: Organization, FAQPage,              ║
║    ItemList (top cities), Service (Coworking Space).                 ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const trustBullets = [
		'Verified spaces across major Indian cities (inventory dependent)',
		'Flexible plans: daily, monthly, and team options (provider dependent)',
		'Transparent quotes and clear inclusions (no surprise line items)',
		'Fast shortlisting for teams with seat count, budget, and start date',
		'Upgrade path: coworking → managed office → commercial lease'
	];

	const quickPicker = [
		{
			title: 'Hot desk (flexible seating)',
			desc: 'Best for individuals who want access without fixed seating.',
			cta: 'Browse by city →',
			href: '/coworking-space/'
		},
		{
			title: 'Dedicated desk (fixed seat)',
			desc: 'Best for stable weekly/monthly use with a fixed workstation. Dedicated seats are commonly in the ₹3,000–8,000/month range in India (location-dependent).',
			cta: 'Browse by city →',
			href: '/coworking-space/'
		},
		{
			title: 'Private cabin (small team)',
			desc: 'Best for teams that want privacy inside a coworking environment.',
			cta: 'Explore cabins by city →',
			href: '/coworking-space/'
		},
		{
			title: 'Need 10+ seats or a custom office?',
			desc: 'For dedicated branding, IT/security controls, and ops-managed suite.',
			cta: 'Managed Office →',
			href: '/manage-office/'
		}
	];

	const whyCoworking = [
		{
			title: 'Lower upfront cash burn',
			desc: 'Traditional office deposits and setup costs can be substantial. Coworking keeps upfront costs lighter so you can invest in growth.'
		},
		{
			title: 'Speed to start',
			desc: 'Move in faster with plug-and-play infrastructure.'
		},
		{
			title: 'Scale up or down',
			desc: 'Add seats as your team grows, or reduce when projects end (provider policy dependent).'
		}
	];

	const included = [
		{
			title: 'Core essentials',
			desc: 'High-speed internet, power backup, air-conditioned workspace, and ergonomic seating.'
		},
		{
			title: 'Business support',
			desc: 'Reception/front desk, meeting room access (paid/credits/provider dependent), printing/scanning options.'
		},
		{
			title: 'Pantry and breakout',
			desc: 'Common areas, pantry access, and breakout zones.'
		},
		{
			title: 'Security and access',
			desc: 'Building security and controlled entry (24/7 access provider dependent).'
		}
	];

	const compareOptions = [
		{
			title: 'Coworking',
			desc: 'Flexible teams who want desks/cabins inside a shared environment. Month-to-month options, shared amenities, quicker start.',
			cta: null,
			href: null
		},
		{
			title: 'Managed Office',
			desc: 'Teams that want a dedicated private office suite with ops handled.',
			cta: 'Managed Office →',
			href: '/manage-office/'
		},
		{
			title: 'Commercial Leasing',
			desc: 'Large teams needing long-term stability and full control.',
			cta: 'Commercial Leasing →',
			href: '/commercial-leasing/'
		}
	];

	const topCities = [
		{ name: 'Bangalore', slug: 'bangalore' },
		{ name: 'Delhi', slug: 'delhi' },
		{ name: 'Gurgaon', slug: 'gurgaon' },
		{ name: 'Noida', slug: 'noida' },
		{ name: 'Mumbai', slug: 'mumbai' },
		{ name: 'Pune', slug: 'pune' },
		{ name: 'Hyderabad', slug: 'hyderabad' },
		{ name: 'Chennai', slug: 'chennai' },
		{ name: 'Kolkata', slug: 'kolkata' },
		{ name: 'Ahmedabad', slug: 'ahmedabad' }
	];

	const howItWorks = [
		{
			n: '1',
			title: 'Share requirements',
			desc: 'City, locality preference, seat count, start date, monthly budget, and must-have amenities.'
		},
		{
			n: '2',
			title: 'Get a shortlist',
			desc: 'We share options with trade-offs explained clearly.'
		},
		{
			n: '3',
			title: 'Visit or review details',
			desc: 'Tour if needed, or confirm from photos and listing details.'
		},
		{
			n: '4',
			title: 'Book and move in',
			desc: 'We coordinate final steps with the workspace provider.'
		}
	];

	const faqs = [
		{
			q: 'What is a coworking space?',
			a: 'A shared office environment where individuals and teams work from a professionally managed workspace with shared amenities.'
		},
		{
			q: 'How much does coworking cost in India?',
			a: 'Pricing depends on city, locality, provider, and plan type. Dedicated desks are commonly in the ₹3,000–8,000/month range in India (location-dependent). Cabins and larger team spaces vary widely.'
		},
		{
			q: 'Can I start with one seat and scale up later?',
			a: 'Yes. Many providers allow adding seats as you grow (subject to availability and plan terms).'
		},
		{
			q: 'Is coworking good for teams?',
			a: 'Yes—teams often start with dedicated desks or cabins and later upgrade to managed offices when they need full privacy and customization.'
		},
		{
			q: 'Do coworking spaces provide meeting rooms?',
			a: 'Many do. Meeting rooms are often bookable hourly/daily and may be paid separately. For meeting-only needs, explore /meeting-rooms/'
		},
		{
			q: 'Can coworking be used for GST or company registration?',
			a: 'Some coworking centres can provide documentation for registration, but requirements vary. If your primary need is GST/MCA-ready documentation, explore Virtual Office → /virtual-office/'
		}
	];
</script>

<svelte:head>
	<title>Coworking Space India: Desks &amp; Cabins | Xporate</title>
	<meta
		name="description"
		content="Find verified coworking spaces across India—hot desks, dedicated desks, and cabins. Flexible plans, transparent quotes. Browse cities & book a consult."
	/>
	<link rel="canonical" href="https://xporate.in/coworking-space/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Coworking Space India
			</h1>
			<p class="mt-2 text-lg font-medium text-orange-400">
				verified desks, dedicated seats, and private cabins
			</p>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Book a productive workspace without long leases or complex fit-outs. Xporate helps you
				shortlist and book coworking spaces across India—built for solo professionals, growing teams,
				and companies expanding into new cities.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Hot desks • Dedicated desks • Cabins (within coworking) • Meeting rooms add-on (as available)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each trustBullets as bullet (bullet)}
					<div class="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm text-slate-300">
						<span class="shrink-0 text-orange-400">✓</span>
						<span>{bullet}</span>
					</div>
				{/each}
			</div>

			<!-- CTAs -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/coworking-space/"
					class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Browse coworking by city →
				</a>
				<a
					href="/locations/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					View all locations →
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

<!-- QUICK PICKER -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What do you need right now?</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each quickPicker as card (card.title)}
				<div class="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-bold text-slate-900">{card.title}</h3>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.desc}</p>
					<a
						href={card.href}
						class="mt-5 inline-block rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
					>
						{card.cta}
					</a>
				</div>
			{/each}
		</div>
		<p class="mt-8 text-center text-sm text-slate-500">
			Not sure what fits?
			<a href="/book/" class="font-medium text-orange-600 hover:underline">Book consultation →</a>
		</p>
	</div>
</section>

<!-- WHY COWORKING -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			Why coworking beats traditional office setup (for most teams)
		</h2>
		<p class="mb-10 text-center text-slate-600">
			Coworking gives you a ready-to-work office environment without heavy deposits, fit-out delays,
			or multi-year lock-ins.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each whyCoworking as item, i (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<div
						class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
					>
						{i + 1}
					</div>
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">What's typically included</h2>
		<p class="mb-10 text-center text-sm text-slate-500">
			Amenities vary by centre. Your final proposal should list inclusions clearly.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each included as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FINDER / DIRECTORY -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			Find coworking spaces by city, seats, and budget
		</h2>
		<p class="mb-8 text-center text-slate-600">
			Filter by city, locality, seat count, start date, monthly budget, and key amenities.
		</p>
		<div class="rounded-xl border border-slate-200 bg-white p-6">
			<p class="mb-4 text-sm font-medium text-slate-500">Filter options</p>
			<div class="flex flex-wrap gap-2">
				{#each [
					'City',
					'Locality',
					'Seat count',
					'Hot desk / Dedicated desk / Cabin',
					'Monthly budget',
					'24/7 access',
					'Meeting rooms',
					'Parking',
					'Metro connectivity'
				] as filter (filter)}
					<span
						class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
					>
						{filter}
					</span>
				{/each}
			</div>
		</div>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/locations/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Browse all cities →
			</a>
			<a
				href="/book/"
				class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-400 hover:text-orange-600"
			>
				Talk to an expert →
			</a>
		</div>
	</div>
</section>

<!-- COMPARE OPTIONS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Not sure if coworking is right? Compare your options
		</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each compareOptions as option (option.title)}
				<div class="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-bold text-slate-900">{option.title}</h3>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{option.desc}</p>
					{#if option.cta && option.href}
						<a
							href={option.href}
							class="mt-5 inline-block rounded-md border border-orange-500 px-4 py-2 text-center text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
						>
							{option.cta}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- EXPANDING INTO NEW CITY -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-3xl font-bold text-slate-900">
			Expanding into a new city? Start with a ready office
		</h2>
		<p class="mb-8 text-slate-600">
			Launch quickly with desks or cabins while you validate hiring and operations in that city.
			When the team stabilizes, upgrade to a managed office or long-term lease.
		</p>
		<a
			href="/solutions/scale-your-workspace/"
			class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
		>
			Scale Your Workspace →
		</a>
	</div>
</section>

<!-- VIRTUAL OFFICE ROUTE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-3xl font-bold text-slate-900">
			Need a business address and registration documents?
		</h2>
		<p class="mb-8 text-slate-600">
			If your primary need is GST/MCA documentation for registration (rent agreement, owner NOC,
			recent utility bill), a Virtual Office is often the right product.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-3">
			<a
				href="/virtual-office/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Virtual Office India →
			</a>
			<a
				href="/virtual-office/"
				class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-400 hover:text-orange-600"
			>
				Browse by city →
			</a>
		</div>
	</div>
</section>

<!-- TOP CITIES -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Coworking in top cities</h2>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
			{#each topCities as city (city.slug)}
				<a
					href="/coworking-space/{city.slug}/"
					class="rounded-lg border border-slate-200 bg-slate-50 px-6 py-4 text-center font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{city.name} →
				</a>
			{/each}
		</div>
		<p class="mt-8 text-center">
			<a
				href="/locations/"
				class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-400 hover:text-orange-600"
			>
				View all locations →
			</a>
		</p>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">How booking works</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howItWorks as step (step.n)}
				<div class="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
					<div
						class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
					>
						{step.n}
					</div>
					<h3 class="font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TRUST / PROOF -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-6 text-3xl font-bold text-slate-900">
			Trusted by teams that need speed and flexibility
		</h2>
		<div class="mb-8 rounded-xl border border-slate-200 bg-white p-10">
			<p class="text-slate-400 text-sm">[Logos / testimonials module — placeholder]</p>
		</div>
		<a
			href="/case-studies/"
			class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-400 hover:text-orange-600"
		>
			Explore case studies →
		</a>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Frequently Asked Questions
		</h2>
		<div class="space-y-3">
			{#each faqs as faq, i (faq.q)}
				<div class="rounded-lg border border-slate-200 bg-white">
					<button
						onclick={() => toggleFaq(i)}
						class="w-full px-6 py-4 text-left transition hover:bg-slate-50"
					>
						<div class="flex items-center justify-between gap-4">
							<span class="font-medium text-slate-900">{faq.q}</span>
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
						</div>
					</button>
					{#if openFaq === i}
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
		<h2 class="text-3xl font-bold">Get a coworking shortlist in your city</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your seat count, budget, and start date—we'll share options that fit and explain
			trade-offs clearly.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/coworking-space/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Browse coworking by city →
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
