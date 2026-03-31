<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const faqs = [
		{
			q: 'What is DPIIT recognition?',
			a: 'DPIIT (Department for Promotion of Industry and Internal Trade) recognition certifies your company as a startup eligible for tax exemptions, funding support, and other Startup India scheme benefits.'
		},
		{
			q: 'Do you guarantee DPIIT approval?',
			a: 'No. We support your documentation quality and readiness. Final approval depends on DPIIT\'s eligibility assessment and verification.'
		},
		{
			q: 'What are the DPIIT eligibility criteria?',
			a: 'Generally: entity less than 7 years old, revenue under ₹100 crores, working on innovation/tech, not inherited business. We audit against latest criteria.'
		},
		{
			q: 'How long does DPIIT approval typically take?',
			a: 'Usually 3–6 weeks from submission, depending on document completeness and DPIIT processing queue.'
		},
		{
			q: 'Can I apply if I already have some traction?',
			a: 'Yes, as long as you meet the entity age, revenue, and innovation criteria. We assess your fit and support accordingly.'
		}
	];
</script>

<svelte:head>
	<title>DPIIT Recognition + Startup India Scheme Support | Xporate</title>
	<meta
		name="description"
		content="DPIIT recognition and Startup India support. Eligibility audit, application prep, tax exemption readiness. ₹30,000 fixed. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/startup-india-dpiit-support/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				DPIIT Recognition + Startup India Scheme Support
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				Eligible companies seeking DPIIT recognition and readiness for Startup India frameworks. We audit
				your eligibility, prepare documentation, and guide you through the application process.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				DPIIT Eligibility Audit + Application Support + Tax Exemption Readiness
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Eligibility audit against latest DPIIT criteria',
					'Application support + narrative drafting',
					'Query handling support (as applicable)',
					'Tax exemption / seed-fund readiness guidance',
					'Fixed pricing: ₹30,000'
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
					We support your readiness and submission quality. Final decisions are made by DPIIT based on
					eligibility criteria and their assessment.
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
					href="/solutions/get-funding-ready/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Get Funding-Ready →
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

<!-- PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Pricing</h2>
		<div class="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-12 text-center">
			<p class="text-sm font-medium text-slate-500 uppercase">Fixed pricing</p>
			<p class="mt-2 text-5xl font-bold text-orange-600">₹30,000</p>
			<p class="mt-4 text-slate-600">
				Includes eligibility audit, documentation support, application prep, and query handling.
			</p>
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's included</h2>
		<div class="space-y-8">
			<div>
				<h3 class="text-xl font-bold text-slate-900">Eligibility and documentation audit</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Assessment against latest DPIIT eligibility criteria (entity age, revenue, innovation)',
						'Document completeness review (incorporation docs, IP, team qualifications)',
						'Readiness checklist with gaps identified'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">Application support + drafting</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Narrative drafting for DPIIT application (innovation narrative, team background)',
						'Supporting documentation coordination',
						'Application filing guidance'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">Query handling + tax readiness</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Support for DPIIT clarification queries (if applicable)',
						'Tax exemption readiness guidance (Section 80-IAC and other relevant exemptions)',
						'Seed-fund readiness support (where applicable)'
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

<!-- DPIIT ELIGIBILITY CRITERIA -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">DPIIT eligibility criteria (typical)</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each [
				{
					title: 'Entity age',
					desc: 'Company incorporated in India, less than 7 years old (as of date of application).'
				},
				{
					title: 'Revenue cap',
					desc: 'Annual revenue (last financial year or current FY projection) under ₹100 crores.'
				},
				{
					title: 'Innovation / IP',
					desc: 'Working on an innovative idea, technology, or IP—not inherited or existing business.'
				},
				{
					title: 'Founder + team',
					desc: 'Credible founder(s) and team with relevant skills and background.'
				}
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
		<p class="mt-8 text-center text-sm text-slate-500">
			We audit against the latest DPIIT criteria and confirm fit before starting application work.
		</p>
	</div>
</section>

<!-- WHO THIS IS FOR -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Who this is for</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each [
				{
					title: 'Tech startups',
					desc: 'Companies building tech solutions, SaaS, AI/ML, or other innovation-driven products.'
				},
				{
					title: 'Pre-Series A founders',
					desc: 'Founders seeking DPIIT recognition before or during early funding rounds.'
				},
				{
					title: 'Tax exemption seekers',
					desc: 'Companies wanting to leverage Section 80-IAC and other startup tax benefits.'
				},
				{
					title: 'Accelerator / incubator alumni',
					desc: 'Startups exiting accelerators and needing DPIIT readiness for next fundraise.'
				}
			] as item}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TIMELINE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Typical process timeline</h2>
		<div class="space-y-4">
			{#each [
				{ phase: 'Eligibility check + document audit', time: 'Day 1–2' },
				{ phase: 'Application prep + narrative drafting', time: 'Day 3–5' },
				{ phase: 'Filing + submission', time: 'Day 6–7' },
				{ phase: 'DPIIT processing (typical)', time: '3–6 weeks' }
			] as step}
				<div class="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
					<div class="shrink-0 font-semibold text-orange-600">{step.time}</div>
					<div>
						<p class="font-medium text-slate-900">{step.phase}</p>
					</div>
				</div>
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
		<h2 class="text-3xl font-bold">Get DPIIT-ready</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your company details, innovation narrative, and team background. We'll assess eligibility and
			support your application.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/get-funding-ready/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Get Funding-Ready →
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
