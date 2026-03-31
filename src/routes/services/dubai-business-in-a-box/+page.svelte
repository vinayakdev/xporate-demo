<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const plans = [
		{
			name: 'Essential',
			price: 'AED 14,500',
			bestFor: 'Founders wanting a straightforward Dubai setup with compliant address.',
			included: [
				'Company registration (Mainland or Free Zone)',
				'Business address/lease for licensing & banking',
				'1 residency visa entry + medical + biometrics',
				'PRO guidance for required steps',
				'Documentation coordination'
			]
		},
		{
			name: 'Standard',
			price: 'AED 16,000',
			bestFor: 'Teams that want faster cycles and dedicated support.',
			included: [
				'Everything in Essential',
				'Expedited cycle targets (inputs ready)',
				'Dedicated coordinator',
				'In-person guidance support',
				'Post-setup banking assistance'
			]
		},
		{
			name: 'Premium',
			price: 'AED 18,500',
			bestFor: 'Founders needing complete end-to-end coordination and visa expediting.',
			included: [
				'Everything in Standard',
				'Fastest available cycle targets',
				'Visa expediting support (where available)',
				'Post-incorporation checklists',
				'WhatsApp priority support'
			]
		}
	];

	const faqs = [
		{
			q: 'Do you guarantee visa approval?',
			a: 'No. We prepare documentation and guide you through the process. Final visa decisions are made by UAE authorities based on your profile.'
		},
		{
			q: 'What\'s the difference between Mainland and Free Zone?',
			a: 'Mainland allows business activity in any sector across UAE. Free Zones offer sector-specific benefits and tax exemptions but limit outside-zone trading. We recommend based on your activity.'
		},
		{
			q: 'How long does the full cycle take?',
			a: 'Typical cycles are 2–3 weeks for well-prepared cases (company + visa). Timelines depend on document readiness, authority processing, and travel availability.'
		},
		{
			q: 'Can you help with banking setup?',
			a: 'Yes. We guide you through post-visa banking steps. Banks make final decisions; we ensure your documentation is complete.'
		},
		{
			q: 'What if I need multiple visas?',
			a: 'This plan includes 1 residency visa. Additional visas can be added or handled separately. Contact us for custom scoping.'
		}
	];
</script>

<svelte:head>
	<title>Dubai Business-in-a-Box (Setup + Office + 1 Visa) | Xporate</title>
	<meta
		name="description"
		content="Dubai setup + compliant office address + 1 visa workflow. Packages AED 14,500–18,500. Mainland or Free Zone. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/dubai-business-in-a-box/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Dubai Business-in-a-Box
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Company setup + compliant business address + 1 residency visa workflow—coordinated as one cycle.
				Choose Mainland or Free Zone based on your activity fit.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Dubai Company Registration + Business Address + 1 Visa Workflow
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'One point of contact across setup, lease, visa, and banking readiness',
					'Zone selection based on your business activity (Mainland vs Free Zone)',
					'PRO guidance for in-person steps',
					'Timelines: typical 2–3 weeks for prepared cases',
					'Post-setup banking and visa tracking support (plan-dependent)'
				] as bullet (bullet)}
					<div class="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm text-slate-300">
						<span class="shrink-0 text-orange-400">✓</span>
						<span>{bullet}</span>
					</div>
				{/each}
			</div>

			<!-- Compliance disclaimer -->
			<div class="mt-8 rounded-lg bg-slate-800 px-6 py-4 text-sm text-slate-300">
				<p class="font-semibold text-slate-100">Important:</p>
				<p class="mt-2">
					We don't guarantee visa or company approvals. We prepare documentation, handle coordination, and
					guide you through the process. Final decisions are made by relevant UAE authorities.
				</p>
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
					href="/solutions/expand-to-uae/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Expand to UAE →
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

<!-- PLANS & PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Plans and pricing</h2>
		<p class="mb-10 text-center text-slate-600">
			Choose your plan based on timeline urgency and support needs.
		</p>

		<div class="grid gap-6 md:grid-cols-3">
			{#each plans as plan}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="text-xl font-bold text-slate-900">{plan.name}</h3>
					<p class="mt-2 text-2xl font-bold text-orange-600">{plan.price}</p>
					<p class="mt-4 text-sm text-slate-600">
						<strong>Best for:</strong> {plan.bestFor}
					</p>

					<div class="mt-6">
						<p class="font-semibold text-slate-900">Included:</p>
						<ul class="mt-3 space-y-2">
							{#each plan.included as item}
								<li class="flex gap-2 text-sm text-slate-600">
									<span class="shrink-0 text-orange-500">✓</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's included</h2>
		<div class="space-y-8">
			<div>
				<h3 class="text-xl font-bold text-slate-900">Company setup (Mainland or Free Zone)</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Zone recommendation based on business activity',
						'License application coordination',
						'Company registration documents',
						'Trade name registration'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">Business address & lease</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Verified business address for licensing',
						'Office lease documentation (where applicable)',
						'Proof of address for banking and visa'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">1 residency visa workflow</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Entry permit processing',
						'Medical and biometric coordination',
						'Emirates ID application',
						'In-person step guidance via PRO'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- EXECUTION TIMELINE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Typical execution timeline</h2>
		<div class="space-y-4">
			{#each [
				{ phase: 'Document preparation & zone selection', time: 'Days 1–2' },
				{ phase: 'Company registration & license application', time: 'Days 3–7' },
				{ phase: 'Business address finalization', time: 'Days 7–10' },
				{ phase: 'Entry permit & visa application', time: 'Days 10–14' },
				{ phase: 'Medical, biometrics & Emirates ID', time: 'Days 14–21' }
			] as step}
				<div class="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
					<div class="shrink-0 font-semibold text-orange-600">{step.time}</div>
					<div>
						<p class="font-medium text-slate-900">{step.phase}</p>
					</div>
				</div>
			{/each}
		</div>
		<p class="mt-8 text-center text-sm text-slate-500">
			Timelines vary based on document readiness, travel availability, and authority processing. These are
			typical timelines for well-prepared cases.
		</p>
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
		<h2 class="text-3xl font-bold">Launch your Dubai business</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your business activity, team size, visa needs, and timeline. We'll recommend the zone and plan
			that fits best.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/expand-to-uae/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Expand to UAE →
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
