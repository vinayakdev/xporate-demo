<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/resources/comparisons/+page.svelte               ║
║  URL:   /resources/comparisons/                                      ║
║  ROLE:  Intent-capture hub for "X vs Y" workspace searches          ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Hero: slate-900 bg, orange accent H1, trust chips, CTAs          ║
║  · Search + filter chips: sticky below hero                         ║
║  · Decision map: 6-step numbered flow, white/slate-50 alternating   ║
║  · Comparison cards: 2-col grid with best-for / choose-if rows      ║
║  · FAQ: accordion (same $state pattern as other pages)              ║
║  · Final CTA: slate-900 bg with orange primary button               ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · $state searchQuery + activeFilter drive $derived filteredGroups  ║
║  · Each card section has an anchor ID for direct linking            ║
║  · Decision matrix download = email gate (placeholder CTA for now) ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · Title: "Workspace Comparisons: Virtual Office vs Coworking..."   ║
║  · Schema: FAQPage + ItemList (comparison cards)                    ║
║  · Do NOT publish deep city-specific cost guides here               ║
║  · Do NOT replace product hubs — each card routes to primary hub    ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	let searchQuery = $state('');
	let activeFilter = $state('all');
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const filterChips = [
		{ id: 'all', label: 'All Comparisons' },
		{ id: 'address', label: 'Address & Registration' },
		{ id: 'team', label: 'Team Workspace' },
		{ id: 'short-term', label: 'Short-term Bookings' },
		{ id: 'long-term', label: 'Long-term HQ' },
		{ id: 'cost', label: 'Cost & Commitments' }
	];

	const decisionSteps = [
		{
			n: '1',
			question: 'Do you need an address for GST/MCA registrations?',
			answer: 'Start with Virtual Office.',
			href: '/virtual-office/',
			linkLabel: 'Virtual Office →'
		},
		{
			n: '2',
			question: 'Do you need desks for daily work?',
			answer: 'Choose Coworking or Managed Office depending on privacy.',
			href: '/coworking-space/',
			linkLabel: 'Coworking →',
			href2: '/manage-office/',
			linkLabel2: 'Managed Office →'
		},
		{
			n: '3',
			question: 'Do you need a private branded office?',
			answer: 'Managed Office.',
			href: '/manage-office/',
			linkLabel: 'Managed Office →'
		},
		{
			n: '4',
			question: 'Are you ready for long-term HQ control (3–9 years)?',
			answer: 'Commercial Leasing.',
			href: '/commercial-leasing/',
			linkLabel: 'Commercial Leasing →'
		},
		{
			n: '5',
			question: 'Do you need a room for a meeting (hour/day)?',
			answer: 'Meeting Rooms.',
			href: '/meeting-rooms/',
			linkLabel: 'Meeting Rooms →'
		},
		{
			n: '6',
			question: 'Do you need a venue for a workshop or meetup?',
			answer: 'Event Spaces.',
			href: '/event-spaces/',
			linkLabel: 'Event Spaces →'
		}
	];

	interface ComparisonCard {
		title: string;
		bestFor: string;
		chooseALabel: string;
		chooseAIf: string;
		chooseBLabel: string;
		chooseBIf: string;
		commitment?: string;
		costAnchors?: string;
		linkA: { label: string; href: string };
		linkB: { label: string; href: string };
		tags: string[];
	}

	interface ComparisonGroup {
		id: string;
		heading: string;
		cards: ComparisonCard[];
	}

	const allGroups: ComparisonGroup[] = [
		{
			id: 'address',
			heading: 'Address and registration comparisons',
			cards: [
				{
					title: 'Virtual Office vs Renting a physical office',
					bestFor: 'Registrations + brand presence without leasing a seat or cabin.',
					chooseALabel: 'Virtual Office',
					chooseAIf: 'You need address proofs and want minimal overhead.',
					chooseBLabel: 'Physical Office',
					chooseBIf: 'You need daily on-site operations and storage.',
					commitment:
						'Virtual office annual plan; physical office long-term commitment.',
					costAnchors:
						'Virtual office from ₹8,000/year (location-dependent); physical seat from ~₹5,000/month (city dependent).',
					linkA: { label: 'Virtual Office →', href: '/virtual-office/' },
					linkB: { label: 'Scale Your Workspace →', href: '/solutions/scale-your-workspace/' },
					tags: ['address', 'cost']
				},
				{
					title: 'Virtual Office vs Coworking',
					bestFor: 'Address + docs (virtual office) vs daily desk access (coworking).',
					chooseALabel: 'Virtual Office',
					chooseAIf: 'You need GST/MCA-ready documents and not a daily desk.',
					chooseBLabel: 'Coworking',
					chooseBIf:
						'You need consistent desks, meeting room access, and a professional work environment.',
					linkA: { label: 'Virtual Office →', href: '/virtual-office/' },
					linkB: { label: 'Coworking →', href: '/coworking-space/' },
					tags: ['address', 'team', 'cost']
				}
			]
		},
		{
			id: 'team',
			heading: 'Team workspace comparisons',
			cards: [
				{
					title: 'Coworking vs Managed Office',
					bestFor: 'Shared environment (coworking) vs private branded suite (managed office).',
					chooseALabel: 'Coworking',
					chooseAIf: 'You want lower commitment and shared amenities.',
					chooseBLabel: 'Managed Office',
					chooseBIf: 'You need privacy, branding, and operations handled.',
					commitment:
						'Coworking often monthly; managed office commonly 6–12 months (centre dependent).',
					linkA: { label: 'Coworking →', href: '/coworking-space/' },
					linkB: { label: 'Managed Office →', href: '/manage-office/' },
					tags: ['team', 'cost']
				},
				{
					title: 'Managed Office vs Commercial Leasing',
					bestFor:
						'Fast private office activation (managed office) vs long-term HQ control (lease).',
					chooseALabel: 'Managed Office',
					chooseAIf: 'You want OaaS, speed, and lower CapEx.',
					chooseBLabel: 'Commercial Leasing',
					chooseBIf: 'You want full control, custom fit-outs, and 3–9 year stability.',
					commitment:
						'Managed office 6–12 months; leasing 3–9 years with lock-in (deal dependent).',
					linkA: { label: 'Managed Office →', href: '/manage-office/' },
					linkB: { label: 'Commercial Leasing →', href: '/commercial-leasing/' },
					tags: ['team', 'long-term', 'cost']
				}
			]
		},
		{
			id: 'short-term',
			heading: 'Short-term booking comparisons',
			cards: [
				{
					title: 'Day Pass vs Coworking membership',
					bestFor: 'Occasional workday (day pass) vs recurring access (membership).',
					chooseALabel: 'Day Pass',
					chooseAIf: 'You need 1–3 office days a month.',
					chooseBLabel: 'Membership',
					chooseBIf: 'You want frequent access and predictable monthly costs.',
					linkA: { label: 'Day Pass →', href: '/day-pass/' },
					linkB: { label: 'Coworking →', href: '/coworking-space/' },
					tags: ['short-term', 'cost']
				},
				{
					title: 'Meeting Rooms vs Event Spaces',
					bestFor: 'Small private meetings (meeting rooms) vs larger workshops and meetups (event spaces).',
					chooseALabel: 'Meeting Rooms',
					chooseAIf: 'You need privacy for interviews, client calls, or presentations.',
					chooseBLabel: 'Event Spaces',
					chooseBIf: 'You need higher capacity with event setup formats.',
					linkA: { label: 'Meeting Rooms →', href: '/meeting-rooms/' },
					linkB: { label: 'Event Spaces →', href: '/event-spaces/' },
					tags: ['short-term']
				}
			]
		}
	];

	const faqs = [
		{
			q: 'Which is best for GST registration: virtual office or coworking?',
			a: "If your primary goal is GST/MCA-ready address proofs, start with a virtual office. Coworking is primarily for daily desks. Final acceptance depends on authority checks."
		},
		{
			q: "What's the fastest way to get a private office for my team?",
			a: 'Managed office is often the fastest path because setup and operations are handled by the provider (centre dependent).'
		},
		{
			q: 'When should I choose commercial leasing?',
			a: 'When you need long-term HQ control, are ready for fit-out costs, and can commit to a conventional lease structure.'
		},
		{
			q: 'Can Xporate shortlist options and explain trade-offs?',
			a: "Yes. Share your city, team size, timeline, and budget — we'll map the cleanest path and shortlist options that fit."
		}
	];

	const trustBullets = [
		'Outcome-based guides — not sales brochures',
		'Covers address, desks, private office, and lease',
		'Scenario maps updated for 2025–26'
	];

	// Filter + search logic
	const filteredGroups = $derived(
		allGroups
			.map((group) => ({
				...group,
				cards: group.cards.filter((card) => {
					const matchesFilter = activeFilter === 'all' || card.tags.includes(activeFilter);
					const q = searchQuery.trim().toLowerCase();
					const matchesSearch =
						q === '' ||
						card.title.toLowerCase().includes(q) ||
						card.bestFor.toLowerCase().includes(q) ||
						card.chooseALabel.toLowerCase().includes(q) ||
						card.chooseBLabel.toLowerCase().includes(q);
					return matchesFilter && matchesSearch;
				})
			}))
			.filter((group) => group.cards.length > 0)
	);
</script>

<svelte:head>
	<title>Workspace Comparisons: Virtual Office vs Coworking vs Lease | Xporate</title>
	<meta
		name="description"
		content="Compare virtual office, coworking, managed office and commercial leasing. Use decision guides, cost ranges and scenario maps to choose the right workspace stage."
	/>
	<link rel="canonical" href="https://xporate.in/resources/comparisons/" />
</svelte:head>

<!-- ═══════════════════════════════════════════════
     HERO
     slate-900 bg, orange accent, trust chips, CTAs
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white sm:py-20">
	<div class="mx-auto max-w-3xl text-center">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex justify-center gap-1 text-sm text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="hover:text-white">Home</a>
			<span>/</span>
			<span class="text-slate-300">Resources</span>
			<span>/</span>
			<span class="text-white">Comparisons</span>
		</nav>

		<p class="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
			Decision Guides
		</p>
		<h1 class="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
			Comparisons and<br />decision guides
		</h1>
		<p class="mx-auto mb-6 max-w-2xl text-lg text-slate-300">
			Deciding between a virtual office, coworking, a managed office, or a long-term lease? Use
			these scenario maps to choose the right stage.
		</p>

		<!-- Trust chips -->
		<div class="mb-8 flex flex-wrap justify-center gap-3">
			{#each trustBullets as bullet (bullet)}
				<span
					class="rounded-full border border-slate-700 bg-slate-800 px-4 py-1 text-sm text-slate-300"
				>
					{bullet}
				</span>
			{/each}
		</div>

		<!-- CTAs -->
		<div class="flex flex-wrap items-center justify-center gap-3">
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
				Explore locations →
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

<!-- ═══════════════════════════════════════════════
     SEARCH + FILTER CHIPS
     sticky below hero, drives $derived filteredGroups
     ═══════════════════════════════════════════════ -->
<section class="sticky top-16 z-20 border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
	<div class="mx-auto max-w-5xl space-y-3">
		<!-- Search -->
		<div class="relative">
			<svg
				class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1 0 3 10a7 7 0 0 0 13.65 6.65z"
				/>
			</svg>
			<input
				type="search"
				bind:value={searchQuery}
				placeholder='Search — e.g. "virtual office vs coworking", "managed office vs lease"'
				class="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
			/>
		</div>

		<!-- Filter chips -->
		<div class="flex flex-wrap gap-2">
			{#each filterChips as chip (chip.id)}
				<button
					onclick={() => (activeFilter = chip.id)}
					class={[
						'rounded-full border px-4 py-1 text-sm font-medium transition-colors',
						activeFilter === chip.id
							? 'border-orange-500 bg-orange-500 text-white'
							: 'border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
					].join(' ')}
				>
					{chip.label}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     QUICK DECISION MAP
     6-step numbered flow to route users quickly
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-14 sm:py-16">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 text-center">
			<h2 class="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
				Quick decision map
			</h2>
			<p class="text-slate-600">Answer 6 questions to find the right workspace stage.</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each decisionSteps as step (step.n)}
				<div class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
					<div
						class="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
					>
						{step.n}
					</div>
					<p class="mb-2 text-sm font-semibold text-slate-800">{step.question}</p>
					<p class="mb-4 flex-1 text-sm text-slate-500">
						<span class="font-medium text-slate-700">If yes:</span>
						{step.answer}
					</p>
					<div class="flex flex-wrap gap-2">
						<a
							href={step.href}
							class="rounded-md border border-orange-500 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-50"
						>
							{step.linkLabel}
						</a>
						{#if step.href2 && step.linkLabel2}
							<a
								href={step.href2}
								class="rounded-md border border-orange-500 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-50"
							>
								{step.linkLabel2}
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Decision matrix CTA -->
		<div class="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
			<p class="mb-1 font-semibold text-slate-900">Not sure after the map?</p>
			<p class="mb-4 text-sm text-slate-600">
				Download the workspace decision matrix (PDF) — covers all 6 products with cost ranges,
				commitment windows, and scenario rules in one sheet.
			</p>
			<a
				href="/book/"
				class="inline-block rounded-md bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
			>
				Get the decision matrix →
			</a>
			<p class="mt-2 text-xs text-slate-400">Shared after a short consultation call.</p>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     COMPARISON CARD GROUPS
     rendered from $derived filteredGroups
     ═══════════════════════════════════════════════ -->
{#if filteredGroups.length === 0}
	<section class="bg-slate-50 px-4 py-20 text-center">
		<p class="text-lg text-slate-500">No comparisons match your search. Try a different keyword.</p>
		<button
			onclick={() => {
				searchQuery = '';
				activeFilter = 'all';
			}}
			class="mt-4 text-sm font-medium text-orange-500 hover:underline"
		>
			Clear filters
		</button>
	</section>
{/if}

{#each filteredGroups as group, i (group.id)}
	<section
		id={group.id}
		class={['px-4 py-14 sm:py-16', i % 2 === 0 ? 'bg-slate-50' : 'bg-white'].join(' ')}
	>
		<div class="mx-auto max-w-5xl">
			<h2 class="mb-8 text-2xl font-bold text-slate-900">{group.heading}</h2>

			<div class="grid gap-6 md:grid-cols-2">
				{#each group.cards as card (card.title)}
					<article
						class="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
					>
						<!-- Title -->
						<h3 class="mb-3 text-base font-bold text-slate-900">{card.title}</h3>

						<!-- Best for -->
						<p class="mb-4 text-sm text-slate-600">
							<span class="font-medium text-slate-800">Best for:</span>
							{card.bestFor}
						</p>

						<!-- Choose-if rows -->
						<div class="mb-4 space-y-2">
							<div class="rounded-lg bg-slate-50 px-4 py-3">
								<p class="text-xs font-semibold uppercase tracking-wide text-orange-600">
									Choose {card.chooseALabel} if
								</p>
								<p class="mt-1 text-sm text-slate-700">{card.chooseAIf}</p>
							</div>
							<div class="rounded-lg bg-slate-50 px-4 py-3">
								<p class="text-xs font-semibold uppercase tracking-wide text-slate-500">
									Choose {card.chooseBLabel} if
								</p>
								<p class="mt-1 text-sm text-slate-700">{card.chooseBIf}</p>
							</div>
						</div>

						<!-- Commitment + Cost anchors -->
						{#if card.commitment || card.costAnchors}
							<div class="mb-5 space-y-1 border-t border-slate-100 pt-4">
								{#if card.commitment}
									<p class="text-xs text-slate-500">
										<span class="font-medium text-slate-700">Typical commitment:</span>
										{card.commitment}
									</p>
								{/if}
								{#if card.costAnchors}
									<p class="text-xs text-slate-500">
										<span class="font-medium text-slate-700">Cost anchors:</span>
										{card.costAnchors}
									</p>
								{/if}
							</div>
						{/if}

						<!-- Routing CTAs -->
						<div class="mt-auto flex flex-wrap gap-2">
							<a
								href={card.linkA.href}
								class="rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
							>
								{card.linkA.label}
							</a>
							<a
								href={card.linkB.href}
								class="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-orange-400 hover:text-orange-600"
							>
								{card.linkB.label}
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- ═══════════════════════════════════════════════
     CITY-FIRST ROUTER
     Reinforce /locations/ experience
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-3 text-2xl font-bold sm:text-3xl">Still deciding? Start with your city</h2>
		<p class="mb-8 text-slate-300">
			Explore options in your city and compare by locality, seat count, and budget.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-3">
			<a
				href="/locations/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Explore all cities →
			</a>
			<a
				href="/book/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FAQ
     Accordion pattern matching other pages
     ═══════════════════════════════════════════════ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
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
							{#if i === 3}
								<a
									href="/book/"
									class="mt-3 inline-block text-sm font-medium text-orange-600 hover:underline"
								>
									Book Consultation →
								</a>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     FINAL CTA
     slate-900 bg, orange primary, WhatsApp
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-2xl font-bold sm:text-3xl">
			Get the right workspace decision in one call
		</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us what you're trying to achieve — we'll map the cleanest path (address, desks, private
			office, or lease) and shortlist options.
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
				Explore locations →
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
