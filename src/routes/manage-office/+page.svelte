<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/manage-office/+page.svelte                       ║
║  URL:   /manage-office/                                              ║
║  ROLE:  India hub for Managed Office (Office-as-a-Service)          ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: dark slate-900 for brand consistency.                      ║
║  · Quick picker: 4 cards by team size.                              ║
║  · Inclusions section: 7-item list with icons.                      ║
║  · How it works: 5-step numbered flow.                              ║
║  · FAQ accordion uses $state toggle.                                ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · FAQ uses $state accordion pattern (same as locations page).      ║
║  · Filters section is static for demo; wire to API in production.   ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · CANONICAL: /manage-office/ — India hub for managed offices.      ║
║  · H1 includes "Office-as-a-Service" — intentional differentiator.  ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const quickPicker = [
		{
			seats: '5–15 seats',
			label: 'Fast private office',
			desc: 'Best for early teams who want privacy, a professional setup, and quick activation.',
			cta: 'Shortlist in your city →',
			href: '/book/'
		},
		{
			seats: '15–50 seats',
			label: 'Custom office suite',
			desc: 'Best for growing teams who want branding and a stable monthly operating system.',
			cta: 'Shortlist in your city →',
			href: '/book/'
		},
		{
			seats: '50+ seats',
			label: 'Enterprise office-as-a-service',
			desc: 'Best for larger teams, GCC pilots, or project teams with clear timelines.',
			cta: 'Enterprise consultation →',
			href: '/book/'
		},
		{
			seats: 'Multi-year lease?',
			label: 'Need a long-term lease instead?',
			desc: 'If you want full control and long-term stability.',
			cta: 'Commercial Leasing →',
			href: '/commercial-leasing/'
		}
	];

	const whatIsItems = [
		{
			title: 'Customization',
			desc: 'Total control over branding, layout, and furniture.'
		},
		{
			title: 'Savings',
			desc: 'Often 40–60% lower than traditional office setup costs by avoiding major upfront furniture and IT investments (scope dependent).'
		},
		{
			title: 'Flexible terms',
			desc: 'Contracts typically range from 6 to 12 months (scope and city dependent).'
		}
	];

	const whyItems = [
		{
			title: 'Skip ₹15–20L in upfront capex (common for 5–50 seat offices)',
			desc: 'Traditional office setup can require significant deposits, fit-out, furniture, and IT investments. Managed office bundles these into a predictable monthly operating model (scope dependent).'
		},
		{
			title: 'Move faster',
			desc: 'Build and activation is coordinated through one accountable workflow.'
		},
		{
			title: 'Operate cleanly',
			desc: 'Utilities, maintenance, housekeeping, and building coordination are managed—so founders don't become office managers.'
		}
	];

	const inclusions = [
		{
			title: 'Private, lockable office suite',
			desc: 'Dedicated space for your team with controlled access.'
		},
		{
			title: 'Design + build coordination',
			desc: 'Layout planning, workstation planning, and space setup coordination.'
		},
		{
			title: 'Furniture + fit-out (scope dependent)',
			desc: 'Workstations, chairs, storage, and space setup aligned to your brand and team needs.'
		},
		{
			title: 'IT readiness (scope dependent)',
			desc: 'Internet provisioning options and basic setup coordination.'
		},
		{
			title: 'Utilities and daily operations',
			desc: 'Electricity, HVAC, housekeeping, maintenance coordination, and building support.'
		},
		{
			title: 'Front desk + visitor handling (building dependent)',
			desc: 'Reception experience, visitor coordination, and basic admin support.'
		},
		{
			title: 'Meeting room access (provider dependent)',
			desc: 'Meeting rooms often available as credits or paid usage (depends on centre policies).'
		}
	];

	const optionalUpgrades = [
		'Dedicated meeting room hours / credits',
		'Branding enhancements (wall branding, signage upgrades)',
		'Security/access controls (scope dependent)',
		'Pantry options and catered services (building dependent)'
	];

	const howItWorks = [
		{
			n: '1',
			title: 'Share requirements',
			desc: 'City, locality preference, seat count, budget, start date, and must-have requirements.'
		},
		{
			n: '2',
			title: 'Receive a shortlist',
			desc: 'We share options with trade-offs explained clearly.'
		},
		{
			n: '3',
			title: 'Layout and inclusions confirmation',
			desc: 'We confirm your layout, branding needs, and what\'s included in the monthly pricing.'
		},
		{
			n: '4',
			title: 'Final proposal + paperwork',
			desc: 'We finalize the proposal and coordinate the commercial process.'
		},
		{
			n: '5',
			title: 'Move-in activation',
			desc: 'We coordinate the setup and operational handover.'
		}
	];

	const compareOptions = [
		{
			title: 'Coworking',
			desc: 'Best for individuals and small teams who want flexibility inside a shared environment.',
			href: '/coworking-space/',
			current: false
		},
		{
			title: 'Managed office (Office-as-a-Service)',
			desc: 'Best for teams that want a private branded office with operations managed.',
			href: '/manage-office/',
			current: true
		},
		{
			title: 'Commercial leasing',
			desc: 'Best for companies ready for multi-year terms and full control.',
			href: '/commercial-leasing/',
			current: false
		}
	];

	const whoForItems = [
		{
			title: 'Startups & SMEs (5–50 employees)',
			desc: 'Professional setup without ₹15–20L in upfront capex.'
		},
		{
			title: 'Enterprises',
			desc: 'Satellite offices, project spaces, and specialized teams.'
		}
	];

	const whyXporate = [
		{
			title: 'Single accountable workflow',
			desc: 'From shortlist to activation—one owner instead of multiple vendors.'
		},
		{
			title: 'Outcome-first recommendations',
			desc: 'We match options to seat count, timeline, privacy needs, and budget.'
		},
		{
			title: 'Upgrade-ready planning',
			desc: 'Start with a managed office, then scale to a lease when you\'re ready.'
		}
	];

	const faqs = [
		{
			q: 'What is a managed office?',
			a: 'A private office suite where you control branding, layout, and experience, while the provider handles setup and daily operations.'
		},
		{
			q: 'What contract terms are available?',
			a: 'Managed office contracts are typically 6–12 months (scope and city dependent). We confirm terms during consultation.'
		},
		{
			q: 'Is a managed office cheaper than leasing?',
			a: 'Often, yes for many teams—because it reduces upfront capex (fit-out, furniture, IT) and bundles operations (scope dependent). We provide a transparent comparison.'
		},
		{
			q: 'Can I brand the office?',
			a: 'Yes—managed offices are designed for customization of branding, layout, and furniture (scope dependent).'
		},
		{
			q: 'Does it include meeting rooms?',
			a: 'Many centres offer meeting rooms as paid access or credits (provider dependent). We confirm for your shortlisted options.'
		},
		{
			q: 'What if I only need desks in a shared environment?',
			a: 'Coworking is typically better for that. Explore our coworking options at /coworking-space/.'
		}
	];
</script>

<svelte:head>
	<title>Managed Office India (Office-as-a-Service) | Xporate</title>
	<meta
		name="description"
		content="Private, branded managed offices with design, build & daily ops included. Flexible 6–12 month terms and 40–60% savings vs traditional setup (scope dependent)."
	/>
	<link rel="canonical" href="https://xporate.in/manage-office/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Managed Office India (Office-as-a-Service): a private branded office without the setup headache
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				A managed office is a private, fully customizable workspace inside a business center. Xporate
				designs, builds, and runs the office for you—so your team moves in faster, looks more
				professional, and avoids heavy upfront capex.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Private office • Branding + layout control • Design + build + daily ops included
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Flexible terms typically 6–12 months (scope and city dependent)',
					'40–60% savings vs traditional office setup by reducing capex (scope dependent)',
					'Designed for teams 5–50 (and enterprise satellite/project offices)',
					'Branding, layout, and furniture customization',
					'One accountable partner for build + ops + maintenance'
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
					href="/manage-office/"
					class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Browse managed offices by city →
				</a>
				<a
					href="/book/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Book Consultation →
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
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			What kind of managed office do you need?
		</h2>
		<p class="mb-10 text-center text-slate-600">
			Pick your team size so we can shortlist the right buildings and layout options.
		</p>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each quickPicker as card (card.seats)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
					<div class="mb-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
						{card.seats}
					</div>
					<h3 class="mt-2 font-semibold text-slate-900">{card.label}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{card.desc}</p>
					<a
						href={card.href}
						class="mt-4 inline-block rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
					>
						{card.cta}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT IS A MANAGED OFFICE -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">What is a managed office?</h2>
		<p class="mb-10 text-center leading-relaxed text-slate-600">
			A managed office is a private office suite where you control branding, layout, and workspace
			experience—but you don't manage the operational burden. Xporate handles design, build, and
			daily operations.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each whatIsItems as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHY MANAGED OFFICE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Why teams choose managed offices (instead of leasing)
		</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each whyItems as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 ring-1 ring-slate-100">
					<div class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
						<span class="text-orange-600 font-bold text-sm">✓</span>
					</div>
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-3 text-center text-3xl font-bold text-slate-900">
			What's included (typical managed office package)
		</h2>
		<p class="mb-10 text-center text-slate-500">
			Final inclusions depend on building, city, and scope. Your proposal will list inclusions clearly.
		</p>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each inclusions as item, i (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6 flex gap-4">
					<div class="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
						{i + 1}
					</div>
					<div>
						<h3 class="font-semibold text-slate-900">{item.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- OPTIONAL UPGRADES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Optional upgrades (based on availability)
		</h2>
		<div class="mx-auto max-w-2xl space-y-3">
			{#each optionalUpgrades as item (item)}
				<div class="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
					<span class="shrink-0 text-orange-500">+</span>
					<span class="text-sm">{item}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			How it works (shortlist → layout → activate)
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each howItWorks as step (step.n)}
				<div class="rounded-xl bg-white p-6 ring-1 ring-slate-200">
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

<!-- FINDER / DIRECTORY -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			Browse managed offices by city
		</h2>
		<p class="mb-6 text-center text-slate-600">
			Filter by city, locality, seats, private suite type, budget, and start date.
		</p>
		<div class="mb-6 flex flex-wrap justify-center gap-2">
			{#each ['City', 'Locality', 'Seat count', 'Move-in timeline', 'Budget', 'Meeting rooms', 'Parking', 'Metro connectivity', 'Branding flexibility'] as filter (filter)}
				<span class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
					{filter}
				</span>
			{/each}
		</div>
		<div class="flex flex-wrap items-center justify-center gap-3">
			<a
				href="/manage-office/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Browse by city →
			</a>
			<a
				href="/locations/"
				class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
			>
				View all locations →
			</a>
		</div>
	</div>
</section>

<!-- COMPARE OPTIONS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Compare: coworking vs managed office vs commercial leasing
		</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each compareOptions as option (option.title)}
				<a
					href={option.href}
					class="group rounded-xl border p-6 transition hover:shadow-md {option.current
						? 'border-orange-300 bg-orange-50'
						: 'border-slate-200 bg-white'}"
				>
					{#if option.current}
						<span class="mb-2 inline-block rounded-full bg-orange-500 px-3 py-0.5 text-xs font-semibold text-white">
							You are here
						</span>
					{/if}
					<h3 class="font-semibold text-slate-900 group-hover:text-orange-600">{option.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{option.desc}</p>
					<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
						Explore →
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- WHO THIS IS FOR -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Who managed offices are best for
		</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whoForItems as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="text-lg font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-3 leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHY XPORATE -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Why Xporate</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each whyXporate as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a
				href="/solutions/scale-your-workspace/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Scale Your Workspace →
			</a>
		</div>
	</div>
</section>

<!-- TRUST / PROOF -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="mb-6 text-3xl font-bold text-slate-900">
			Trusted by teams that need privacy and speed
		</h2>
		<div class="rounded-xl border border-slate-200 bg-slate-50 px-8 py-12 text-slate-400">
			<p class="text-sm">[Logos and testimonials — coming soon]</p>
		</div>
		<div class="mt-8">
			<a
				href="/case-studies/"
				class="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
			>
				Explore case studies →
			</a>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
		<div class="space-y-3">
			{#each faqs as faq, i (faq.q)}
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
		<h2 class="text-3xl font-bold">Get a managed office proposal in your city</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your seat count, start date, and budget—we'll shortlist private office options and map
			the fastest activation path.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/manage-office/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Browse by city →
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
