<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const faqs = [
		{
			q: 'What happens when we receive a legal notice?',
			a: 'We help you understand the notice, assess risk, and draft a response. We focus on settlement-first strategy and documentation readiness.'
		},
		{
			q: 'Can you represent us in court?',
			a: 'No. We support drafting, strategy, and negotiation. Court representation requires external counsel or litigation specialist coordination.'
		},
		{
			q: 'Do you negotiate directly with the other party?',
			a: 'We support your negotiation strategy and provide drafting/documentation support. Negotiation happens between your team and the other party.'
		},
		{
			q: 'What\'s the difference between mediation and arbitration?',
			a: 'Mediation is settlement-focused with a neutral third party facilitating. Arbitration is binding adjudication by an arbitrator. We can guide preparation for both.'
		},
		{
			q: 'How much does notice/dispute support cost?',
			a: 'Pricing is case-based depending on complexity, scope (notice response vs. settlement prep), and timeline.'
		},
		{
			q: 'What if settlement fails and we need litigation?',
			a: 'We hand off to external counsel or litigation specialist. Our role is preparation and documentation up to that point.'
		}
	];
</script>

<svelte:head>
	<title>Notice / Dispute Support | Xporate</title>
	<meta
		name="description"
		content="Settlement-first strategy for legal notices and disputes. Drafting, response support, mediation preparation. De-escalation focused. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/notice-dispute-support/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Notice / Dispute Support
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				When you receive (or need to send) a formal notice, we help you respond strategically, prepare for
				settlement or arbitration, and manage the documentation trail. Settlement-first thinking, but
				litigation-ready if needed.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Notice Response + Settlement Strategy + Mediation / Arbitration Prep
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'De-escalation-first mindset (settlement preferred over litigation)',
					'Risk assessment and response strategy in 24–48 hours',
					'Documentation and evidence preparation',
					'Mediation and arbitration process guidance',
					'Litigation handoff support (external counsel coordination)'
				] as bullet (bullet)}
					<div class="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3 text-sm text-slate-300">
						<span class="shrink-0 text-orange-400">✓</span>
						<span>{bullet}</span>
					</div>
				{/each}
			</div>

			<!-- Boundary note -->
			<div class="mt-8 rounded-lg bg-slate-800 px-6 py-4 text-sm text-slate-300">
				<p class="font-semibold text-slate-100">Important:</p>
				<p class="mt-2">
					Our scope is documentation, drafting, and strategy. We do not provide court representation or
					litigation filings. Those require external counsel coordination.
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
					href="/solutions/legal-support/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Legal Support →
				</a>
				<a
					href="https://wa.me/917060706076"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-md bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.sp-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
						/>
					</svg>
					WhatsApp
				</a>
			</div>
		</div>
	</div>
</section>

<!-- WHAT WE HANDLE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we help with</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each [
				{
					title: 'Notice response',
					examples: [
						'Cease & desist letters',
						'Payment demand notices',
						'Commercial / vendor disputes',
						'Employment-related notices',
						'IP or trademark disputes'
					]
				},
				{
					title: 'Settlement & negotiation',
					examples: [
						'Settlement letter drafting',
						'Demand and counter-offer strategy',
						'Mediation preparation',
						'Arbitration claim drafting',
						'MOU and settlement agreement prep'
					]
				}
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<ul class="mt-4 space-y-2">
						{#each item.examples as ex}
							<li class="flex gap-2 text-sm text-slate-600">
								<span class="shrink-0 text-orange-500">•</span>
								<span>{ex}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- OUR APPROACH -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Our de-escalation-first approach</h2>
		<div class="space-y-4">
			{#each [
				{
					title: 'Risk assessment (24–48 hours)',
					desc: 'Understand the notice/claim, assess legal risk, and identify settlement windows.'
				},
				{
					title: 'Response drafting',
					desc: 'Craft a response that protects your interests while leaving room for settlement discussion.'
				},
				{
					title: 'Settlement strategy',
					desc: 'Map negotiation points, settlement ranges, and walk-away thresholds.'
				},
				{
					title: 'Mediation / arbitration prep',
					desc: 'Prepare documentation, evidence bundles, and oral submissions for neutral forums.'
				},
				{
					title: 'Litigation handoff',
					desc: 'If settlement fails, coordinate with external counsel and provide case summary/documentation.'
				}
			] as step}
				<div class="flex gap-4 rounded-lg border border-slate-200 bg-white p-6">
					<div class="shrink-0">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
							<svg class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
					</div>
					<div>
						<h3 class="font-bold text-slate-900">{step.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- COMMON DISPUTES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Dispute types we support</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{ title: 'Commercial disputes', desc: 'Payment defaults, contract breaches, service quality disputes.' },
				{ title: 'Vendor / supplier issues', desc: 'Quality claims, delivery failures, pricing disputes.' },
				{ title: 'Customer complaints', desc: 'Service complaints, refund claims, product liability.' },
				{ title: 'Employment disputes', desc: 'Wrongful termination, wage disputes, non-compete claims.' },
				{ title: 'IP / IP infringement', desc: 'Patent/trademark claims, plagiarism, licensing disputes.' },
				{ title: 'Partnership / shareholder disputes', desc: 'Equity conflicts, buyout negotiations, deadlock resolution.' }
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TIMELINE & PRICING -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Timeline & pricing</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-lg font-bold text-slate-900">Notice received</h3>
				<ul class="mt-4 space-y-3">
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">24–48h:</span>
						<span class="text-slate-600">Risk assessment + response draft</span>
					</li>
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">48–72h:</span>
						<span class="text-slate-600">Final response delivery</span>
					</li>
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">Ongoing:</span>
						<span class="text-slate-600">Settlement negotiation support</span>
					</li>
				</ul>
				<p class="mt-6 font-medium text-orange-600">Pricing: Case-based</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-lg font-bold text-slate-900">Settlement / arbitration</h3>
				<ul class="mt-4 space-y-3">
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">1–2 weeks:</span>
						<span class="text-slate-600">Claim & documentation prep</span>
					</li>
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">2–4 weeks:</span>
						<span class="text-slate-600">Mediation / arbitration negotiation</span>
					</li>
					<li class="flex gap-2 text-sm">
						<span class="shrink-0 font-semibold text-slate-900">Ongoing:</span>
						<span class="text-slate-600">Process coordination</span>
					</li>
				</ul>
				<p class="mt-6 font-medium text-orange-600">Pricing: Case-based</p>
			</div>
		</div>

		<div class="mt-10 text-center">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Get a quote →
			</a>
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
		<h2 class="text-3xl font-bold">Navigate disputes with confidence</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share the notice or dispute details, timeline, and what you've done so far. We'll assess risk and chart
			the settlement-first path forward.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/legal-support/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Legal Support →
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
