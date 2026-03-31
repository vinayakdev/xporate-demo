<script lang="ts">
	let openItem = $state<number | null>(null);
	let selectedTab = $state<'company-gst' | 'gst-only'>('company-gst');

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const plans = {
		'company-gst': [
			{
				name: 'Essential (Budget)',
				price: '₹15,000 + GST',
				bestFor: 'Founders who want the core setup done correctly with standard support.',
				included: [
					'Incorporation filing workflow (COI)',
					'GST application filing workflow (GSTIN)',
					'Core deliverables: COI + GST docs pack',
					'Standard support'
				],
				not_included: [
					'Statutory payments (government fees, stamp duty)',
					'Ongoing monthly filing',
					'Bank account setup assistance'
				]
			},
			{
				name: 'Growth (Standard)',
				price: '₹40,000 + GST',
				bestFor: 'Teams that want additional governance readiness and higher-touch support.',
				included: [
					'Everything in Essential',
					'Enhanced governance/ROC readiness support',
					'CA support + dedicated relationship manager',
					'Post-incorporation checklists'
				],
				not_included: [
					'Statutory payments (government fees, stamp duty)',
					'Ongoing monthly filing',
					'Litigation support'
				]
			},
			{
				name: 'Pro (Premium)',
				price: '₹60,000 + GST',
				bestFor: 'High-growth startups that need speed, checklists, and bank readiness.',
				included: [
					'Everything in Growth',
					'Faster cycle targets where feasible',
					'Post-incorporation checklists + bank assistance',
					'Dedicated RM + WhatsApp support'
				],
				not_included: [
					'Statutory payments (government fees, stamp duty)',
					'Ongoing monthly filing',
					'Court representation'
				]
			}
		],
		'gst-only': [
			{
				name: 'GST Only — Essential',
				price: '₹12,500 + 18% GST',
				bestFor: 'When you only need GST registration.',
				included: [
					'GST application filing workflow',
					'Document alignment support',
					'GST registration certificate (REG-06)',
					'Standard support'
				],
				not_included: [
					'Company incorporation',
					'Statutory payments',
					'Ongoing monthly filing'
				]
			},
			{
				name: 'GST Only — Growth',
				price: '₹15,000 + 18% GST',
				bestFor: 'GST setup with CA support.',
				included: [
					'Everything in Essential',
					'CA support included',
					'Higher touch support'
				],
				not_included: [
					'Company incorporation',
					'Ongoing monthly filing',
					'Court representation'
				]
			},
			{
				name: 'GST Only — Pro',
				price: '₹20,000 + 18% GST',
				bestFor: 'Fastest GST setup with dedicated support.',
				included: [
					'Everything in Growth',
					'Dedicated RM',
					'Faster turnaround targets'
				],
				not_included: [
					'Company incorporation',
					'Ongoing monthly filing',
					'Litigation support'
				]
			}
		]
	};

	const timeline = [
		{
			phase: 'Phase 1: DSC/DIN',
			duration: 'Day 1–2',
			desc: 'Securing digital signatures and director IDs for all required people.'
		},
		{
			phase: 'Phase 2: Name reservation',
			duration: 'Day 2–3',
			desc: 'Reserving the company name via MCA workflows.'
		},
		{
			phase: 'Phase 3: Incorporation filing',
			duration: 'Day 4–7',
			desc: 'Drafting MOA/AOA and filing incorporation forms.'
		},
		{
			phase: 'Phase 4: GST filing',
			duration: 'Day 8–12',
			desc: 'Filing GST application after COI issuance and completing authentication steps.'
		},
		{
			phase: 'Phase 5: Post-incorporation readiness',
			duration: 'Ongoing',
			desc: 'Bank account linking and mandatory signage readiness (as applicable).'
		}
	];

	const requirements = [
		{
			title: 'Promoter KYC',
			desc: 'PAN, Aadhaar, and passport-size photos for all directors/partners.'
		},
		{
			title: 'Registered office proof',
			desc: 'Utility bill (electricity/water/etc.) not older than 2 months + supporting address proof.'
		},
		{
			title: 'Authorization for signatory',
			desc: 'Board resolution or authorization letter (as applicable).'
		},
		{
			title: 'Nature of business',
			desc: 'HSN/SAC codes for goods/services + a simple business description.'
		}
	];

	const deliverables = [
		'Custom-drafted MOA and AOA (scope/tier dependent)',
		'Certificate of Incorporation, PAN, and TAN',
		'GST registration certificate (Form REG-06) + GSTIN',
		'Signage board (Pro extras, where applicable)',
		'Letterhead/logo design and bank account assistance'
	];

	const whyChoose = [
		{
			title: 'Bundled alignment reduces mismatch rejections',
			desc: 'One data set, one checklist, fewer "detail mismatch" loops.'
		},
		{
			title: 'Tiered support (budget → pro)',
			desc: 'Choose the plan that matches your speed and support needs.'
		},
		{
			title: 'High-touch support when it matters',
			desc: 'Dedicated relationship manager options for founders who need ownership and clarity.'
		},
		{
			title: 'Works alongside your CA',
			desc: 'Already have a CA/CS? We can coordinate with them and handle only the defined scope.'
		}
	];

	const faqs = [
		{
			q: 'Do you guarantee GST or MCA approval?',
			a: 'No. Outcomes depend on your profile and authority checks. We focus on documentation readiness and consistency to reduce preventable delays.'
		},
		{
			q: 'Should I do company incorporation and GST together?',
			a: 'If you need both, bundling helps align details and reduce mismatch risks. If you only need GST, choose a GST-only tier.'
		},
		{
			q: 'What if I don\'t have a registered office proof?',
			a: 'You\'ll need valid proof of principal place of business for GST and incorporation. You can use a verification-ready virtual office document pack.'
		},
		{
			q: 'How long does it take?',
			a: 'Timelines vary by authority processing and document readiness. Typical phases include a 4–7 day incorporation filing cycle and GST filing after COI.'
		},
		{
			q: 'Can you help with bank account readiness?',
			a: 'Yes, in Pro tier. Bank decisions are made by the bank; we focus on documentation readiness and sequencing.'
		},
		{
			q: 'Do you handle post-incorporation compliance every month?',
			a: 'Yes, via a compliance retainer. See Compliance Management (Retainer) service.'
		}
	];
</script>

<svelte:head>
	<title>Company + GST Registration (One-Stop) | Xporate</title>
	<meta
		name="description"
		content="Company incorporation + GST registration in one pack. Tiers from ₹15,000+GST; GST-only from ₹12,500+18% GST. Checklists + query support. Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/company-gst-registration/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Company + GST registration in one aligned workflow
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				A startup starter pack designed to take you from idea → a compliant, bank-ready legal entity. We handle
				two critical milestones under one coordinated process: Company incorporation (MCA) and GST registration.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				MCA Incorporation + GSTIN (documentation-ready, mismatch-resistant)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Tiered plans with upfront scope and clear inclusions',
					'One team for COI + GST to reduce mismatch rejections',
					'End-to-end drafting + filing coordination + query support (as applicable)',
					'Pro-level onboarding checklists + bank assistance (plan-dependent)',
					'Handles modern e-KYC and biometric verification expectations (as applicable)'
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
					We don't guarantee approvals. Acceptance depends on your case and the authority's checks. We focus
					on documentation completeness, consistency, and verification readiness to reduce preventable delays.
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
					href="/solutions/start-a-business-india/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Start a Business (India) →
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

<!-- WHY BUNDLE -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Why bundling Company + GST matters</h2>
		<p class="mx-auto mb-10 max-w-2xl text-center text-slate-600">
			Most delays come from mismatches across documents (names, addresses, business activity descriptions,
			signatory details). Bundling keeps your COI and GST data aligned so you don't lose weeks on avoidable
			rework.
		</p>
		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-xl font-bold text-slate-900">The common problem</h3>
				<p class="mt-4 text-slate-600">
					Separate vendors handle DSC/DIN, MOA/AOA, incorporation filing, and GST filing—each with different
					formats and assumptions.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="text-xl font-bold text-slate-900">The Xporate approach</h3>
				<p class="mt-4 text-slate-600">
					One workflow owner, one set of verified inputs, one consistency checklist.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- PLANS & PRICING -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Plans and pricing</h2>
		<p class="mb-10 text-center text-slate-600">
			Choose your plan based on how fast you need to go and how much support you want.
		</p>

		<!-- Tab toggle -->
		<div class="mb-10 flex justify-center gap-3">
			<button
				onclick={() => (selectedTab = 'company-gst')}
				class="rounded-lg px-6 py-3 font-semibold transition"
				class:bg-orange-500={selectedTab === 'company-gst'}
				class:text-white={selectedTab === 'company-gst'}
				class:bg-slate-100={selectedTab !== 'company-gst'}
				class:text-slate-900={selectedTab !== 'company-gst'}
			>
				Company + GST
			</button>
			<button
				onclick={() => (selectedTab = 'gst-only')}
				class="rounded-lg px-6 py-3 font-semibold transition"
				class:bg-orange-500={selectedTab === 'gst-only'}
				class:text-white={selectedTab === 'gst-only'}
				class:bg-slate-100={selectedTab !== 'gst-only'}
				class:text-slate-900={selectedTab !== 'gst-only'}
			>
				GST Only
			</button>
		</div>

		<!-- Plan cards -->
		<div class="grid gap-6 md:grid-cols-3">
			{#each plans[selectedTab] as plan}
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

					<div class="mt-6 border-t border-slate-200 pt-6">
						<p class="text-xs font-semibold text-slate-500">Not included:</p>
						<ul class="mt-3 space-y-1">
							{#each plan.not_included as item}
								<li class="flex gap-2 text-xs text-slate-500">
									<span class="shrink-0">•</span>
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

<!-- WHO THIS IS FOR -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Who this is built for</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">New entrepreneurs</h3>
				<p class="mt-3 text-sm text-slate-600">
					Founders forming their first Pvt Ltd / LLP and needing GST readiness.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">Expanding businesses</h3>
				<p class="mt-3 text-sm text-slate-600">
					Brands entering new states and requiring separate GSTINs.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">Freelancers and consultants</h3>
				<p class="mt-3 text-sm text-slate-600">
					High-earning professionals who need GST registration for invoicing and input claims.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h3 class="font-bold text-slate-900">E-commerce sellers</h3>
				<p class="mt-3 text-sm text-slate-600">
					Sellers working with marketplaces who often need a GSTIN to operate smoothly.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- WHAT'S INCLUDED -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What's included (scope)</h2>
		<div class="space-y-8">
			<div>
				<h3 class="text-xl font-bold text-slate-900">Company incorporation (MCA) — COI milestone</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'Director/partner ID setup support (DSC/DIN as applicable)',
						'Name reservation workflow',
						'MOA/AOA drafting and filing support (plan-dependent)',
						'SPICe+ filing coordination (as applicable)',
						'Certificate of Incorporation (COI) issuance support'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">GST registration — GSTIN milestone</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'GST application filing (REG-01) after COI (where applicable)',
						'Document alignment for principal place of business proof',
						'Query/clarification support (as applicable)',
						'GST registration certificate issuance support (REG-06)'
					] as item}
						<li class="flex gap-3 text-slate-600">
							<span class="shrink-0 text-orange-500">•</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold text-slate-900">Consistency and readiness checks</h3>
				<ul class="mt-4 space-y-2">
					{#each [
						'COI ↔ GST detail alignment checklist',
						'Signatory and address-proof readiness',
						'Step-by-step next actions (plan-defined)'
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
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Execution timeline (typical phases)</h2>
		<p class="mb-10 text-center text-slate-600">
			Timelines vary based on document readiness and authority processing.
		</p>
		<div class="grid gap-4 md:grid-cols-5">
			{#each timeline as phase}
				<div class="rounded-lg border border-slate-200 bg-white p-6">
					<p class="text-xs font-semibold uppercase text-orange-600">{phase.duration}</p>
					<h3 class="mt-2 font-bold text-slate-900">{phase.phase}</h3>
					<p class="mt-3 text-sm text-slate-600">{phase.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- REQUIREMENTS -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we need from you (requirements)</h2>
		<div class="grid gap-6 md:grid-cols-2">
			{#each requirements as req}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{req.title}</h3>
					<p class="mt-3 text-slate-600">{req.desc}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 rounded-lg bg-slate-50 px-6 py-4 text-sm text-slate-600">
			<p>
				<strong>Note:</strong> If you don't have office proof, you can use a verification-ready virtual office
				document pack. <a href="/virtual-office/" class="font-medium text-orange-600 hover:text-orange-700"
					>Explore Virtual Office →</a
				>
			</p>
		</div>
	</div>
</section>

<!-- DELIVERABLES -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What you receive (deliverables)</h2>
		<div class="space-y-6">
			{#each deliverables as item, i}
				<div class="flex gap-4 rounded-lg border border-slate-200 bg-white p-6">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600"
					>
						{i + 1}
					</div>
					<div>
						<p class="font-semibold text-slate-900">{item}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHY XPORATE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Why choose Xporate for Company + GST</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whyChoose as item}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
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
		<h2 class="text-3xl font-bold">Start your Company + GST setup</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us your entity preference (Pvt Ltd/LLP/OPC), your state, and whether you need GST now. We'll
			confirm fit, pick the right tier, and start the checklist.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/start-a-business-india/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Start a Business (India) →
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
