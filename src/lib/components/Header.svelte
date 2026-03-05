<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/lib/components/Header.svelte                            ║
║  ROLE:  Sticky top navigation — desktop mega menus + mobile drawer  ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Header height: h-16 (64px). Adjust if logo requires more space.  ║
║  · Logo is currently text "Xporate" — replace with the actual SVG  ║
║    logo asset once finalized. Add to $lib/assets/logo.svg.          ║
║  · Mega menu widths are set per menu:                                ║
║      Solutions: w-[660px]  Workspaces: w-60                         ║
║      Locations: w-[500px]  Resources: w-72  About: w-52             ║
║    Adjust widths if column counts or content changes.               ║
║  · Mega menus use CSS group-hover (no JS needed on desktop).        ║
║    They appear on hover — if you need click-triggered menus for     ║
║    accessibility, refactor to use $state + focus/click handlers.    ║
║  · Locations mega menu has a city filter — wire typeahead to        ║
║    an API (/api/cities?q=) in production.                           ║
║  · Mobile breakpoint: xl (1280px). Adjust if nav items don't fit.  ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Nav data is hardcoded in this file. In production, extract to    ║
║    a separate nav.ts config file and import here.                   ║
║  · Mobile submenu state: mobileSubs object via $state.              ║
║    Each key (solutions/workspaces/resources/about) is toggled.      ║
║  · Active link highlight: not yet implemented. Use                  ║
║    $app/state's page.url.pathname to add active class.              ║
║  · "Book Consultation" → /book/ — ensure this page exists.          ║
║  · WhatsApp number is hardcoded: 917060706076 — keep in config.     ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND NOTES                                                       ║
║  · Nav links are static. No backend required for the nav itself.   ║
║  · Locations typeahead (if implemented): wire to GET /api/cities    ║
║    returning { name, slug } array.                                  ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · Navigation URLs must match IA v1.2 exactly.                      ║
║  · Workspaces category root URLs (/virtual-office/ etc.) must NEVER ║
║    auto-redirect to /{city}. Keep roots as India hub pages.         ║
╚══════════════════════════════════════════════════════════════════════╝
-->
<script lang="ts">
	let mobileOpen = $state(false);
	let mobileSubs = $state<Record<string, boolean>>({});

	function toggleSub(key: string) {
		mobileSubs[key] = !mobileSubs[key];
	}

	const navSolutionsColA = {
		heading: 'Start / Stay Compliant / Expand',
		items: [
			{ label: 'Solutions Overview', href: '/solutions/' },
			{ label: 'Start a Business (India)', href: '/solutions/start-a-business-india/' },
			{ label: 'Compliance & Governance', href: '/solutions/compliance-governance/' },
			{ label: 'Legal Support', href: '/solutions/legal-support/' },
			{ label: 'Expand to Dubai / UAE', href: '/solutions/expand-to-uae/' },
			{ label: 'Get Funding-Ready (DPIIT)', href: '/solutions/get-funding-ready/' }
		]
	};

	const navSolutionsColB = {
		heading: 'Workspace Transitions',
		items: [
			{
				label: 'Scale Your Workspace',
				href: '/solutions/scale-your-workspace/',
				desc: 'Virtual → Seats → Managed → Lease'
			}
		]
	};

	const navWorkspaces = [
		{ label: 'Virtual Office', href: '/virtual-office/' },
		{ label: 'Coworking Space', href: '/coworking-space/' },
		{ label: 'Managed Office', href: '/manage-office/' },
		{ label: 'Commercial Leasing', href: '/commercial-leasing/' },
		{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
		{ label: 'Day Pass', href: '/day-pass/' },
		{ label: 'Event Spaces', href: '/event-spaces/' }
	];

	const topCities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Noida', 'Gurgaon'];
	const locationFilters = ['Virtual Office', 'Coworking', 'Managed Office', 'Meeting Rooms', 'Day Pass'];

	const navResources = [
		{ label: 'Guides', href: '/blogs/' },
		{ label: 'FAQs', href: '/faqs' },
		{ label: 'Templates & Checklists', href: '/resources/templates/' },
		{ label: 'Comparisons', href: '/resources/comparisons/' },
		{ label: 'Compliance Calendar', href: '/resources/compliance-calendar/', badge: 'Free' },
		{
			label: 'Lease Negotiation Checklist',
			href: '/resources/lease-negotiation-checklist/',
			badge: 'Free'
		}
	];

	const navAbout = [
		{ label: 'About Us', href: '/about-us' },
		{ label: 'How We Work', href: '/how-we-work/' },
		{ label: 'List Your Space', href: '/list-your-space/' }
	];

	const allSolutionItems = [...navSolutionsColA.items, ...navSolutionsColB.items];
</script>

<header class="sticky top-0 z-50 bg-slate-900 shadow-lg">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between gap-4">
			<!-- Logo -->
			<a href="/" class="shrink-0">
				<span class="text-xl font-bold tracking-tight text-white">
					<span class="text-orange-500">X</span>porate
				</span>
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden items-center gap-0.5 xl:flex">
				<a
					href="/"
					class="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Home
				</a>

				<!-- Solutions ▾ -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Solutions
						<svg
							class="h-4 w-4 transition duration-200 group-hover:rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute top-full left-0 z-50 w-[660px] rounded-b-xl bg-white opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100"
					>
						<div class="grid grid-cols-2 p-6">
							<div class="border-r border-slate-100 pr-6">
								<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
									{navSolutionsColA.heading}
								</p>
								{#each navSolutionsColA.items as item (item.href)}
									<a
										href={item.href}
										class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
									>
										<span class="text-orange-400">›</span>
										{item.label}
									</a>
								{/each}
							</div>
							<div class="pl-6">
								<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
									{navSolutionsColB.heading}
								</p>
								{#each navSolutionsColB.items as item (item.href)}
									<a
										href={item.href}
										class="flex flex-col rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
									>
										<span class="flex items-center gap-2">
											<span class="text-orange-400">›</span>
											{item.label}
										</span>
										{#if item.desc}
											<span class="ml-4 mt-0.5 text-xs text-slate-400">{item.desc}</span>
										{/if}
									</a>
								{/each}
							</div>
						</div>
						<div
							class="flex items-center justify-between rounded-b-xl border-t border-slate-100 bg-slate-50 px-6 py-3"
						>
							<a
								href="/book/"
								class="text-sm font-medium text-orange-600 transition hover:text-orange-700"
							>
								Not sure what you need? → Book a free consultation
							</a>
							<span class="text-xs text-slate-400">Already have a CA? We work alongside them.</span>
						</div>
					</div>
				</div>

				<!-- Workspaces ▾ -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Workspaces
						<svg
							class="h-4 w-4 transition duration-200 group-hover:rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute top-full left-0 z-50 w-60 rounded-b-xl bg-white opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100"
					>
						<div class="p-3">
							{#each navWorkspaces as item (item.href)}
								<a
									href={item.href}
									class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
								>
									<span class="text-orange-400">›</span>
									{item.label}
								</a>
							{/each}
						</div>
					</div>
				</div>

				<!-- Locations ▾ -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Locations
						<svg
							class="h-4 w-4 transition duration-200 group-hover:rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute top-full left-0 z-50 w-[500px] rounded-b-xl bg-white opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100"
					>
						<div class="p-5">
							<input
								type="text"
								placeholder="Search city…"
								class="mb-4 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
							/>
							<div class="mb-4 flex flex-wrap gap-1.5">
								{#each locationFilters as filter (filter)}
									<button
										class="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition hover:border-orange-400 hover:text-orange-600"
									>
										{filter}
									</button>
								{/each}
							</div>
							<p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
								Top Cities
							</p>
							<div class="grid grid-cols-4 gap-1">
								{#each topCities as city (city)}
									<a
										href={`/locations/${city.toLowerCase()}/`}
										class="rounded-lg px-3 py-2 text-center text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
									>
										{city}
									</a>
								{/each}
							</div>
							<div
								class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3"
							>
								<a
									href="/locations/"
									class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
								>
									View all cities →
								</a>
								<a
									href="/book/"
									class="text-xs text-slate-500 transition hover:text-orange-600"
								>
									Not sure which city works for GST/MCA? Book →
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Resources ▾ -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Resources
						<svg
							class="h-4 w-4 transition duration-200 group-hover:rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute top-full left-0 z-50 w-72 rounded-b-xl bg-white opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100"
					>
						<div class="p-3">
							{#each navResources as item (item.href)}
								<a
									href={item.href}
									class="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
								>
									<span class="flex items-center gap-2">
										<span class="text-orange-400">›</span>
										{item.label}
									</span>
									{#if item.badge}
										<span
											class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700"
										>
											{item.badge}
										</span>
									{/if}
								</a>
							{/each}
						</div>
					</div>
				</div>

				<a
					href="/case-studies/"
					class="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Case Studies
				</a>

				<!-- About ▾ -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						About
						<svg
							class="h-4 w-4 transition duration-200 group-hover:rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						class="invisible absolute top-full right-0 z-50 w-52 rounded-b-xl bg-white opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100"
					>
						<div class="p-3">
							{#each navAbout as item (item.href)}
								<a
									href={item.href}
									class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
								>
									<span class="text-orange-400">›</span>
									{item.label}
								</a>
							{/each}
						</div>
					</div>
				</div>

				<a
					href="/contact"
					class="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Contact
				</a>
			</nav>

			<!-- Desktop CTAs -->
			<div class="hidden shrink-0 items-center gap-2 xl:flex">
				<a
					href="/book/"
					class="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Book Consultation
				</a>
				<a
					href="https://wa.me/917060706076"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1.5 rounded-md bg-[#25d366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						/>
					</svg>
					WhatsApp
				</a>
			</div>

			<!-- Mobile Hamburger -->
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="rounded-md p-2 text-slate-200 transition hover:bg-white/10 hover:text-white xl:hidden"
				aria-label="Toggle navigation menu"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="border-t border-white/10 bg-slate-900 xl:hidden">
			<nav class="mx-auto max-w-7xl space-y-0.5 px-4 py-4">
				<a
					href="/"
					class="block rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Home
				</a>

				<!-- Mobile Solutions -->
				<div>
					<button
						onclick={() => toggleSub('solutions')}
						class="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Solutions
						<svg
							class="h-4 w-4 transition duration-200"
							class:rotate-180={mobileSubs['solutions']}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if mobileSubs['solutions']}
						<div class="ml-4 mt-1 space-y-0.5 border-l-2 border-orange-500/30 pl-4">
							{#each allSolutionItems as item (item.href)}
								<a
									href={item.href}
									class="block rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
								>
									{item.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Mobile Workspaces -->
				<div>
					<button
						onclick={() => toggleSub('workspaces')}
						class="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Workspaces
						<svg
							class="h-4 w-4 transition duration-200"
							class:rotate-180={mobileSubs['workspaces']}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if mobileSubs['workspaces']}
						<div class="ml-4 mt-1 space-y-0.5 border-l-2 border-orange-500/30 pl-4">
							{#each navWorkspaces as item (item.href)}
								<a
									href={item.href}
									class="block rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
								>
									{item.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href="/locations/"
					class="block rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Locations
				</a>

				<!-- Mobile Resources -->
				<div>
					<button
						onclick={() => toggleSub('resources')}
						class="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						Resources
						<svg
							class="h-4 w-4 transition duration-200"
							class:rotate-180={mobileSubs['resources']}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if mobileSubs['resources']}
						<div class="ml-4 mt-1 space-y-0.5 border-l-2 border-orange-500/30 pl-4">
							{#each navResources as item (item.href)}
								<a
									href={item.href}
									class="flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
								>
									{item.label}
									{#if item.badge}
										<span class="rounded-full bg-green-800/50 px-2 py-0.5 text-xs text-green-300">
											{item.badge}
										</span>
									{/if}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href="/case-studies/"
					class="block rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Case Studies
				</a>

				<!-- Mobile About -->
				<div>
					<button
						onclick={() => toggleSub('about')}
						class="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
					>
						About
						<svg
							class="h-4 w-4 transition duration-200"
							class:rotate-180={mobileSubs['about']}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if mobileSubs['about']}
						<div class="ml-4 mt-1 space-y-0.5 border-l-2 border-orange-500/30 pl-4">
							{#each navAbout as item (item.href)}
								<a
									href={item.href}
									class="block rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
								>
									{item.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<a
					href="/contact"
					class="block rounded-md px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
				>
					Contact
				</a>

				<!-- Mobile CTAs -->
				<div class="flex flex-col gap-2 border-t border-white/10 pt-4 mt-4">
					<a
						href="/book/"
						class="block rounded-md bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
					>
						Book Consultation
					</a>
					<a
						href="https://wa.me/917060706076"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
					>
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
							/>
						</svg>
						WhatsApp
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
