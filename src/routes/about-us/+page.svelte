<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const faqs = [
		{
			q: 'Are you a workspace provider?',
			a: 'Xporate is a marketplace and operations partner. We help teams shortlist, compare, and activate the right workspace stage.'
		},
		{
			q: 'Do you guarantee GST/MCA approvals or UAE outcomes?',
			a: 'No. We focus on documentation readiness and correct workflow sequencing.'
		},
		{
			q: 'Can you work alongside my CA/CS/lawyer?',
			a: 'Yes. We can coordinate and support the workflow while your advisor stays involved.'
		}
	];

	const workspaces = [
		{ label: 'Virtual Office', href: '/virtual-office/' },
		{ label: 'Coworking Space', href: '/coworking-space/' },
		{ label: 'Managed Office', href: '/manage-office/' },
		{ label: 'Commercial Leasing', href: '/commercial-leasing/' },
		{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
		{ label: 'Day Pass', href: '/day-pass/' },
		{ label: 'Event Spaces', href: '/event-spaces/' }
	];

	const principles = [
		{
			title: 'Clarity over complexity',
			desc: 'We explain trade-offs and make the next step obvious.'
		},
		{
			title: 'Documentation readiness',
			desc: 'We focus on consistency and completeness to reduce avoidable queries.'
		},
		{
			title: 'Operational thinking',
			desc: 'We plan for real-world activation, not just paper outcomes.'
		},
		{ title: 'Transparency', desc: 'Clear scope, clear handoffs, clear expectations.' }
	];

	const steps = [
		{
			n: '1',
			title: 'Understand your outcome',
			desc: 'Address for registrations, desks for a team, a private office, a long-term lease, compliance management, legal help, or Dubai expansion.'
		},
		{
			n: '2',
			title: 'Map the cleanest workflow',
			desc: 'We sequence steps and define what documents are needed to reduce preventable delays.'
		},
		{
			n: '3',
			title: 'Shortlist and activate',
			desc: 'We coordinate the right options and guide execution through activation.'
		},
		{
			n: '4',
			title: 'Support after activation',
			desc: 'Scale workspaces, stay compliant, and protect contracts as your business grows.'
		}
	];
</script>

<svelte:head>
	<title>About Xporate | Workspaces + Corporate Backbone Solutions</title>
	<meta
		name="description"
		content="Xporate helps teams start, stay compliant, and scale workspaces across India and Dubai. One partner for virtual offices, coworking, leasing, and compliance/legal."
	/>
	<link rel="canonical" href="https://xporate.in/about-us" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl text-center">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About Xporate</h1>
		<p class="mt-6 text-lg leading-relaxed text-slate-300">
			We help founders and teams start, stay compliant, and scale workspaces—without vendor chaos.
			Xporate combines a workspace marketplace with corporate backbone execution, so your address,
			office, and compliance stay aligned as you grow.
		</p>
		<p class="mt-3 text-sm font-medium text-orange-400">
			Workspaces Marketplace • Corporate Backbone • India + Dubai
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
				Explore Locations →
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
		<div class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
			{#each [
				'Compliance-first approach (documentation-ready workflows)',
				'Workspace transitions supported end-to-end',
				'One point of contact across vendors and steps'
			] as bullet (bullet)}
				<span class="flex items-center gap-2 text-sm text-slate-300">
					<span class="text-orange-400">✓</span>
					{bullet}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- MISSION -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold text-slate-900">Our mission</h2>
		<p class="mt-6 text-lg leading-relaxed text-slate-600">
			Make business operations simpler by giving teams one reliable partner for
			infrastructure—addresses, offices, and compliance. We focus on clarity, sequencing, and
			documentation consistency so teams can execute faster.
		</p>
	</div>
</section>

<!-- WHAT WE DO -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we do</h2>
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Workspaces -->
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<div
					class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100"
				>
					<svg
						class="h-5 w-5 text-orange-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-slate-900">Workspaces marketplace</h3>
				<p class="mt-2 text-sm text-slate-500">Find and compare workspace options across India:</p>
				<ul class="mt-4 space-y-2">
					{#each workspaces as ws (ws.href)}
						<li>
							<a
								href={ws.href}
								class="flex items-center gap-2 text-sm text-slate-700 transition hover:text-orange-600"
							>
								<span class="text-orange-400">›</span>
								{ws.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Corporate Backbone -->
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<div
					class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100"
				>
					<svg
						class="h-5 w-5 text-orange-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-slate-900">Corporate Backbone solutions</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-500">
					Outcome-first support for founders and operators: Start a business, stay compliant, handle
					legal support, expand to Dubai/UAE, and get funding-ready.
				</p>
				<ul class="mt-4 space-y-2">
					{#each [
						{ label: 'Solutions Overview', href: '/solutions/' },
						{ label: 'Services Index', href: '/services/' }
					] as item (item.href)}
						<li>
							<a
								href={item.href}
								class="flex items-center gap-2 text-sm text-slate-700 transition hover:text-orange-600"
							>
								<span class="text-orange-400">›</span>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- WHY WE EXIST -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold text-slate-900">Why Xporate exists</h2>
		<p class="mt-6 text-lg leading-relaxed text-slate-600">
			Most teams lose weeks and money in handoffs—address vendors, workspace brokers, compliance
			providers, legal drafts, and expansion consultants. We built Xporate to connect these decisions
			so your business details stay consistent and your next step is always clear.
		</p>
	</div>
</section>

<!-- HOW WE WORK -->
<section class="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold">How we work</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step (step.n)}
				<div class="rounded-xl bg-white/10 p-6 ring-1 ring-white/10">
					<div
						class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
					>
						{step.n}
					</div>
					<h3 class="font-semibold text-white">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a
				href="/how-we-work/"
				class="inline-flex items-center gap-1 text-sm font-medium text-orange-400 transition hover:text-orange-300"
			>
				How We Work →
			</a>
		</div>
	</div>
</section>

<!-- PRINCIPLES -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we stand for</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each principles as p (p.title)}
				<div class="rounded-xl border border-slate-200 bg-white p-6">
					<h3 class="font-semibold text-slate-900">{p.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PROOF -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold text-slate-900">Proof and credibility</h2>
		<div
			class="mt-8 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-8 py-12 text-slate-400"
		>
			Logos, testimonials, and case studies — coming soon
		</div>
		<a
			href="/case-studies/"
			class="mt-6 inline-block text-sm font-medium text-orange-600 transition hover:text-orange-700"
		>
			Explore case studies →
		</a>
	</div>
</section>

<!-- UAE CALLOUT -->
<section class="bg-orange-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold text-slate-900">Expanding to Dubai / UAE?</h2>
		<p class="mt-6 text-lg leading-relaxed text-slate-600">
			We offer a bundled launch workflow combining license, office lease, and a 1-visa
			process—managed with one point of contact. No approval guarantees. We focus on correct
			sequencing and documentation readiness.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/solutions/expand-to-uae/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Explore UAE expansion →
			</a>
			<a
				href="/services/dubai-business-in-a-box/"
				class="rounded-md border border-orange-300 bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
			>
				Dubai Business-in-a-Box →
			</a>
		</div>
	</div>
</section>

<!-- WORK WITH US -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Work with us</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-lg font-bold text-slate-900">List your space</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-500">
					If you operate a workspace and want qualified enquiries, list your space with Xporate.
				</p>
				<a
					href="/list-your-space/"
					class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700"
				>
					List your space →
				</a>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-lg font-bold text-slate-900">Need help as a business?</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-500">
					Tell us what you're trying to achieve and we'll route you to the cleanest path.
				</p>
				<a
					href="/book/"
					class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700"
				>
					Book a consultation →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			Frequently Asked Questions
		</h2>
		<div class="divide-y divide-slate-100">
			{#each faqs as faq, i (faq.q)}
				<div class="py-4">
					<button
						onclick={() => toggleFaq(i)}
						class="flex w-full items-center justify-between gap-4 text-left"
					>
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
					</button>
					{#if openFaq === i}
						<p class="mt-3 text-sm leading-relaxed text-slate-500">{faq.a}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FINAL CTA -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold">Let's map your next step</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your city plan, timeline, and what outcome you want—we'll guide the cleanest route.
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
				Explore Locations →
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
