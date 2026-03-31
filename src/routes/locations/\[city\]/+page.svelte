<script lang="ts">
	import { page } from '$app/stores';

	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	$: city = $page.params.city;
	$: cityDisplay = city.charAt(0).toUpperCase() + city.slice(1);

	const workspaceTypes = [
		{ title: 'Virtual Office', href: `/virtual-office/${city}/` },
		{ title: 'Coworking Space', href: `/coworking-space/${city}/` },
		{ title: 'Managed Office', href: `/manage-office/${city}/` },
		{ title: 'Commercial Leasing', href: `/commercial-leasing/${city}/` },
		{ title: 'Meeting Rooms', href: `/meeting-rooms/${city}/` },
		{ title: 'Day Pass', href: `/day-pass/${city}/` },
		{ title: 'Event Spaces', href: `/event-spaces/${city}/` }
	];

	const allHubs = [
		{ label: 'Virtual Office India', href: '/virtual-office/' },
		{ label: 'Coworking Space India', href: '/coworking-space/' },
		{ label: 'Managed Office India', href: '/manage-office/' },
		{ label: 'Commercial Leasing India', href: '/commercial-leasing/' },
		{ label: 'Meeting Rooms India', href: '/meeting-rooms/' },
		{ label: 'Day Pass India', href: '/day-pass/' },
		{ label: 'Event Spaces India', href: '/event-spaces/' }
	];

	const faqs = [
		{
			q: `Is this city page the same as "virtual office in ${cityDisplay}"?`,
			a: 'No. This is a cross-category discovery page. For virtual office inventory, use the Virtual Office in {City} page.'
		},
		{
			q: 'How do I choose the best locality?',
			a: 'Start with commute and client proximity. Use locality filters and shortlist 3–5 options.'
		},
		{
			q: 'Can you shortlist for my team?',
			a: 'Yes. Share your seats/capacity, budget, and move-in timeline.'
		},
		{
			q: `What if a workspace type isn't available in ${cityDisplay}?`,
			a: 'We hide that option and suggest nearby alternatives where possible.'
		}
	];
</script>

<svelte:head>
	<title>Workspaces in {cityDisplay}: Offices & Rooms | Xporate</title>
	<meta
		name="description"
		content="Explore {cityDisplay} workspaces—virtual offices, coworking, managed offices, leasing, meeting rooms, day pass and event spaces. Filter by locality and type."
	/>
	<link rel="canonical" href="https://xporate.in/locations/{city}/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Workspaces in {cityDisplay}
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Explore workspace options across {cityDisplay}—choose a locality, pick a workspace type, and compare
				options with clear inclusions.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Virtual Office • Coworking • Managed Office • Commercial Leasing • Meeting Rooms • Day Pass • Event
				Spaces
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Filter by locality, seats/capacity, and key amenities',
					'Cross-category exploration (choose product after you shortlist localities)',
					'If you want fastest routing, use the workspace type links below'
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
					href="/locations/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Back to all cities →
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

<!-- CHOOSE YOUR WORKSPACE TYPE IN CITY -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Choose your workspace type in {cityDisplay}</h2>
		<p class="mb-10 text-center text-slate-600">
			Pick the product you need—then narrow down to the best locality.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each workspaceTypes as type}
				<a
					href={type.href}
					class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-600">{type.title} in {cityDisplay}</h3>
					<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
						View options →
					</span>
				</a>
			{/each}
		</div>
		<div class="mt-8 text-center text-sm text-slate-500">
			Not sure what fits?
			<a href="/book/" class="font-medium text-orange-600 hover:text-orange-700">Book consultation →</a>
		</div>
	</div>
</section>

<!-- WHY THIS CITY PAGE -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">How to pick the right locality in {cityDisplay}</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">Commute and connectivity</h3>
				<p class="mt-3 text-sm text-slate-600">
					Near metro corridors, key highways, and business districts.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">Client credibility</h3>
				<p class="mt-3 text-sm text-slate-600">
					Premium districts can help brand perception for client-facing work.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">Budget vs access</h3>
				<p class="mt-3 text-sm text-slate-600">
					Balance monthly costs with time saved.
				</p>
			</div>
		</div>
		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Get shortlist for {cityDisplay} →
			</a>
		</div>
	</div>
</section>

<!-- EXPLORE INDIA-WIDE HUBS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Explore India-wide hubs</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each allHubs as hub}
				<a
					href={hub.href}
					class="rounded-lg border border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{hub.label} →
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
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
		<h2 class="text-3xl font-bold">Get a shortlist in {cityDisplay}</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your locality preference, workspace type, and timeline—we'll map the best options and
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
				href="/locations/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Back to all cities →
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
