<!--
  src/routes/commercial-leasing/+page.svelte
  Commercial Leasing hub page — Grade A office leases across India.
  Follows visual style of /virtual-office/ and /locations/ pages.
  Svelte 5 runes syntax; FAQ accordion uses $state.
-->
<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const quickPickerCards = [
		{
			title: 'New HQ (50+ seats)',
			desc: 'For companies ready for long-term stability and full office control.',
			cta: 'Get shortlist →',
			href: '/book/'
		},
		{
			title: 'Expansion into a new city',
			desc: 'For teams that want a permanent footprint with signage and brand control.',
			cta: 'Browse city options →',
			href: '/commercial-leasing/'
		},
		{
			title: 'Large floorplate / multi-floor requirement',
			desc: 'For enterprises needing scale, parking, and building-grade infrastructure.',
			cta: 'Talk to an expert →',
			href: '/book/'
		},
		{
			title: 'Not ready for a long-term lease?',
			desc: 'If you want flexibility with a private office managed for you.',
			cta: 'Managed Office (Office-as-a-Service) →',
			href: '/manage-office/'
		}
	];

	const leasingTerms = [
		{
			title: 'Typical terms',
			desc: 'Long-term commitments typically 3–9 years with formal lock-in periods (deal dependent).'
		},
		{
			title: 'Typical escalation',
			desc: 'Standard leases commonly include a 5–7% annual rent escalation (lease dependent).'
		},
		{
			title: 'Typical financial commitments',
			desc: 'Security deposits are commonly 3–6 months of rent (deal dependent).'
		}
	];

	const whyXporate = [
		{
			title: 'Grade A focus + off-market sourcing',
			desc: 'We prioritize quality assets and leverage networks to source options that may not be visible on public portals.'
		},
		{
			title: 'Due diligence before you commit',
			desc: 'We verify landlord ownership title and check key property approvals like Occupancy Certificate and Fire NOC.'
		},
		{
			title: 'Negotiation that targets Total Cost of Occupancy (TCO)',
			desc: 'We negotiate beyond base rent—CAM, escalation, lock-in, notice, and fit-out terms.'
		},
		{
			title: 'Lease structure and exit clause fairness',
			desc: 'We vet lease deeds to ensure notice periods and exit clauses are workable.'
		}
	];

	const howItWorks = [
		{
			n: '1',
			title: 'Requirement definition',
			desc: 'Employee count, seat plan, micro-location preference, budget band, and branding/signage needs.'
		},
		{
			n: '2',
			title: 'Sourcing and shortlisting',
			desc: 'We identify Grade A options and shortlist based on connectivity, building quality, and commercial fit.'
		},
		{
			n: '3',
			title: 'Due diligence',
			desc: 'We verify ownership title and check key approvals (Occupancy Certificate / Fire NOC) before you move forward.'
		},
		{
			n: '4',
			title: 'Negotiation',
			desc: 'We negotiate base rent, escalation, security deposit, lock-in, notice periods, and CAM. We also aim for rent-free fit-out periods to reduce costs during your construction/setup phase.'
		},
		{
			n: '5',
			title: 'Legal registration and move-in plan',
			desc: 'We coordinate the lease deed steps and support compulsory registration where applicable (especially when lease exceeds 1 year).'
		}
	];

	const needToDecide = [
		{
			title: 'Seat plan and workstyle',
			desc: 'Open-plan vs cabins vs hybrid, plus meeting room and collaboration needs.'
		},
		{
			title: 'Micro-location preference',
			desc: 'Which business districts matter for hiring, clients, and commute.'
		},
		{
			title: 'Financial commitment',
			desc: 'Security deposits (typically 3–6 months) and a realistic fit-out budget.'
		},
		{
			title: 'Lease and legal fees',
			desc: 'Stamp duty and registration expenses are borne by the client as per state laws.'
		}
	];

	const leasingPack = [
		{
			title: 'Market benchmarking report',
			desc: 'Lease pricing benchmarks and expected escalations for your target micro-market.'
		},
		{
			title: 'Negotiation support',
			desc: 'Advocacy to reduce Total Cost of Occupancy (TCO), including CAM (Common Area Maintenance) fees.'
		},
		{
			title: 'Legal vetting of the lease deed',
			desc: 'Scrutiny of exit clauses, notice periods, lock-in structure, and commercial risk terms.'
		},
		{
			title: 'Due diligence checklist and verification',
			desc: 'Title ownership verification and approvals sanity check before signing.'
		},
		{
			title: 'Registration coordination (where applicable)',
			desc: 'Lease deed registration support for terms exceeding 1 year.'
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

	const compareOptions = [
		{
			title: 'Coworking (shared environment)',
			desc: 'Best for flexible teams that need desks/cabins without long leases.',
			href: '/coworking-space/'
		},
		{
			title: 'Managed office (Office-as-a-Service)',
			desc: 'Best for private branded offices with operations managed, typically 6–12 month terms.',
			href: '/manage-office/'
		},
		{
			title: 'Commercial leasing (conventional lease)',
			desc: 'Best for long-term HQ control, custom fit-outs, and full operational ownership.',
			href: '/commercial-leasing/'
		}
	];

	const faqs = [
		{
			q: 'How long are commercial office leases in India?',
			a: 'Commercial leases are typically long-term—often 3–9 years—with lock-in periods (deal dependent).'
		},
		{
			q: 'What is the typical annual escalation?',
			a: 'Many leases include a 5–7% annual rent escalation, but it depends on the deal.'
		},
		{
			q: 'What is CAM?',
			a: 'CAM (Common Area Maintenance) covers building common-area operating costs. It can materially impact TCO, so it must be negotiated and documented clearly.'
		},
		{
			q: 'How much security deposit is typical?',
			a: 'Security deposits are commonly 3–6 months of rent (deal dependent).'
		},
		{
			q: 'Can I negotiate a rent-free fit-out period?',
			a: 'Often yes—fit-out rent-free periods may be negotiated to reduce costs during your construction/setup phase (deal dependent).'
		},
		{
			q: 'Is lease deed registration mandatory?',
			a: 'If the lease term exceeds one year, registration is typically compulsory under the Registration Act, 1908. Stamp duty and registration costs vary by state.'
		}
	];

	const filterTags = [
		'City',
		'Business district',
		'Seat count',
		'Floorplate size',
		'Parking requirement',
		'Move-in timeline',
		'Budget',
		'Building grade'
	];
</script>

<svelte:head>
	<title>Commercial Leasing India: Grade A Office Leases | Xporate</title>
	<meta
		name="description"
		content="Commercial leasing across India with Grade A office search, due diligence, lease negotiation (rent-free fit-out) and lease registration support. Browse cities."
	/>
	<link rel="canonical" href="https://xporate.in/commercial-leasing/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Commercial Leasing India
				<span class="mt-2 block text-2xl font-semibold text-orange-400 sm:text-3xl">
					Grade A offices with clean lease structures
				</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Lease the right office for your company's long-term headquarters. Xporate supports commercial
				leasing end-to-end—from micro-market shortlisting and due diligence to negotiation and lease
				registration—so you don't get stuck in hidden clauses and surprise costs.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Grade A assets • Lease negotiation • Due diligence • Lease registration support
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Conventional leases typically 3–9 years with lock-in periods (deal dependent)',
					'Typical annual escalation range: 5–7% (lease dependent)',
					'Due diligence: ownership title + approvals (Occupancy Certificate / Fire NOC)',
					'Negotiation support to reduce Total Cost of Occupancy (TCO), including CAM',
					'Lease deed registration support for terms exceeding 1 year'
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
					href="/commercial-leasing/"
					class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
				>
					Browse commercial leasing by city →
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
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">What are you leasing for?</h2>
		<p class="mb-10 text-center text-slate-600">
			Pick your scenario so we can shortlist the right buildings and negotiate the right structure.
		</p>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each quickPickerCards as card (card.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-bold text-slate-900">{card.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{card.desc}</p>
					<a
						href={card.href}
						class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
					>
						{card.cta}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT IS COMMERCIAL LEASING -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			What is commercial leasing (and when it's the right choice)
		</h2>
		<p class="mb-10 text-center text-slate-600">
			Commercial leasing is a conventional office lease where you rent a physical office space for a
			long-term term. Unlike a virtual office, this is for businesses that need a permanent, physical
			headquarters.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each leasingTerms as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHY XPORATE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Why Xporate for commercial leasing
		</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whyXporate as item, i (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
						{i + 1}
					</div>
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			How commercial leasing works (end-to-end)
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

<!-- WHAT YOU NEED TO DECIDE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What you need to decide (before we shortlist)
		</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each needToDecide as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHAT XPORATE DELIVERS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What Xporate delivers (your leasing pack)
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each leasingPack as item (item.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
						<svg class="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="font-semibold text-slate-900">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ESG SECTION -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-4 text-3xl font-bold text-slate-900">Looking for ESG-aligned buildings?</h2>
		<p class="text-lg leading-relaxed text-slate-600">
			If sustainability mandates matter for your brand or compliance, we can shortlist buildings
			aligned with modern ESG expectations (availability dependent).
		</p>
		<a
			href="/book/"
			class="mt-6 inline-block rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
		>
			Discuss ESG requirements →
		</a>
	</div>
</section>

<!-- CITY DIRECTORY -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			Browse commercial leasing by city
		</h2>
		<p class="mb-6 text-center text-slate-600">
			Filter by city, business district, seat count, floorplate preference, budget, and move-in date.
		</p>

		<!-- Filter tags -->
		<div class="mb-8 flex flex-wrap justify-center gap-2">
			{#each filterTags as tag (tag)}
				<span class="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600">
					{tag}
				</span>
			{/each}
		</div>

		<!-- City grid -->
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
			{#each topCities as city (city.slug)}
				<a
					href="/commercial-leasing/{city.slug}/"
					class="rounded-lg border border-slate-200 bg-white px-6 py-4 text-center font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{city.name} →
				</a>
			{/each}
		</div>

		<div class="mt-8 text-center">
			<a
				href="/locations/"
				class="text-sm font-medium text-orange-600 hover:text-orange-700"
			>
				View all locations →
			</a>
		</div>
	</div>
</section>

<!-- COMPARE OPTIONS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Compare your workspace options
		</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each compareOptions as option (option.href)}
				<a
					href={option.href}
					class="group rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
					class:ring-2={option.href === '/commercial-leasing/'}
					class:ring-orange-500={option.href === '/commercial-leasing/'}
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-600">{option.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{option.desc}</p>
					<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
						Learn more →
					</span>
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
		<h2 class="text-3xl font-bold">Get a Grade A leasing shortlist</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your city, micro-location preference, seat plan, timeline, and budget—we'll shortlist
			options and negotiate a clean lease structure.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/commercial-leasing/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Browse by City →
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
