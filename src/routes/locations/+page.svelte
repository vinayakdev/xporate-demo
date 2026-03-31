<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const topCities = [
		{ name: 'Bangalore', slug: 'bangalore' },
		{ name: 'Delhi', slug: 'delhi' },
		{ name: 'Mumbai', slug: 'mumbai' },
		{ name: 'Gurgaon', slug: 'gurgaon' },
		{ name: 'Noida', slug: 'noida' },
		{ name: 'Pune', slug: 'pune' },
		{ name: 'Hyderabad', slug: 'hyderabad' },
		{ name: 'Chennai', slug: 'chennai' },
		{ name: 'Kolkata', slug: 'kolkata' },
		{ name: 'Ahmedabad', slug: 'ahmedabad' }
	];

	const workspaceTypes = [
		{
			title: 'Virtual Office',
			desc: 'For GST/MCA-ready documentation with a verifiable business address.',
			href: '/virtual-office/'
		},
		{
			title: 'Coworking Space',
			desc: 'For desks, dedicated seats, and cabins in a shared environment.',
			href: '/coworking-space/'
		},
		{
			title: 'Managed Office',
			desc: 'For private branded office suites with operations handled.',
			href: '/manage-office/'
		},
		{
			title: 'Commercial Leasing',
			desc: 'For long-term HQ leases and Grade A office sourcing.',
			href: '/commercial-leasing/'
		},
		{
			title: 'Meeting Rooms',
			desc: 'For hourly/daily rooms for meetings, interviews, and presentations.',
			href: '/meeting-rooms/'
		},
		{
			title: 'Day Pass',
			desc: 'For one-day access to coworking for a productive workday.',
			href: '/day-pass/'
		},
		{
			title: 'Event Spaces',
			desc: 'For workshops, trainings, meetups, and corporate sessions.',
			href: '/event-spaces/'
		}
	];

	const faqs = [
		{
			q: 'Is /locations/ replacing the workspace category pages?',
			a: 'No. Category hubs remain primary for each intent (virtual office, coworking, managed office, leasing, meeting rooms, day pass, event spaces). Locations is a discovery directory.'
		},
		{
			q: 'How do I find the best locality?',
			a: 'Start with your city page and filter by commute needs, client proximity, and budget.'
		},
		{
			q: 'Can you shortlist options for me?',
			a: 'Yes. Share your city, seats/capacity, budget, and start date.'
		},
		{
			q: 'What if a city doesn\'t have inventory for a workspace type?',
			a: 'We hide that type on the city directory and suggest nearby alternatives where possible.'
		}
	];
</script>

<svelte:head>
	<title>Xporate Locations: Offices & Workspaces Across India</title>
	<meta
		name="description"
		content="Explore Xporate locations across India for virtual offices, coworking, managed offices, leasing, meeting rooms, day pass and event spaces. Filter by city & locality."
	/>
	<link rel="canonical" href="https://xporate.in/locations/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Locations across India
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Find the right workspace in the right locality. Search by city, filter by workspace type, and compare
				options with clear inclusions.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Virtual Office • Coworking • Managed Office • Commercial Leasing • Meeting Rooms • Day Pass • Event
				Spaces
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Cross-category directory (choose city first, then choose workspace)',
					'Filters for locality, seats/capacity, and key amenities',
					'Transparent comparison and shortlisting support'
				] as bullet (bullet)}
					<div class="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm text-slate-300">
						<span class="shrink-0 text-orange-400">✓</span>
						<span>{bullet}</span>
					</div>
				{/each}
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
					href="/virtual-office/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Browse Virtual Office →
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

<!-- CHOOSE A CITY -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Choose a city</h2>
		<p class="mb-10 text-center text-slate-600">
			Start with your city—then select the workspace type and locality.
		</p>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
			{#each topCities as city}
				<a
					href="/locations/{city.slug}/"
					class="rounded-lg border border-slate-200 bg-slate-50 px-6 py-4 text-center font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{city.name} →
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CHOOSE YOUR WORKSPACE TYPE -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Choose a workspace type</h2>
		<p class="mb-10 text-center text-slate-600">
			Pick the product you need—then narrow down by city and locality.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each workspaceTypes as type}
				<a
					href={type.href}
					class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-600">{type.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-500">{type.desc}</p>
					<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
						Explore →
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">How locations work on Xporate</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ n: '1', title: 'Pick a city', desc: 'Go to the city directory page.' },
				{ n: '2', title: 'Choose the workspace type', desc: 'Virtual office, coworking, managed office, leasing, meeting room, day pass, or event space.' },
				{ n: '3', title: 'Filter by locality and requirements', desc: 'Seats/capacity, amenities, budget, and timeline.' },
				{ n: '4', title: 'Shortlist and book', desc: 'We confirm details and guide you to the cleanest option.' }
			] as step}
				<div class="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
					<div class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
						{step.n}
					</div>
					<h3 class="font-semibold text-slate-900">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- QUICK LINKS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">India-wide hubs</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ label: 'Virtual Office', href: '/virtual-office/' },
				{ label: 'Coworking Space', href: '/coworking-space/' },
				{ label: 'Managed Office', href: '/manage-office/' },
				{ label: 'Commercial Leasing', href: '/commercial-leasing/' },
				{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
				{ label: 'Day Pass', href: '/day-pass/' },
				{ label: 'Event Spaces', href: '/event-spaces/' }
			] as link}
				<a
					href={link.href}
					class="rounded-lg border border-slate-200 bg-white px-6 py-4 text-center text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{link.label} →
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i}
				<div class="rounded-lg border border-slate-200 bg-white">
					<button
						onclick={() => toggleAccordion(i)}
						class="w-full px-6 py-4 text-left transition hover:bg-slate-50"
					>
						<div class="flex items-center justify-between gap-4">
							<span class="font-medium text-slate-900">{faq.q}</span>
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
		<h2 class="text-3xl font-bold">Get a shortlist in your city</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us what you need, where you need it, and your timeline—we'll map the best options and
			trade-offs.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/virtual-office/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Browse Virtual Office →
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
