<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const serviceCategories = [
		{
			title: 'Start / Registration',
			services: [
				{
					name: 'Company + GST Registration (One-Stop)',
					desc: 'Company incorporation + GST workflow with reduced mismatch delays.',
					href: '/services/company-gst-registration/'
				}
			]
		},
		{
			title: 'UAE Expansion',
			services: [
				{
					name: 'Dubai Business-in-a-Box (Setup + Office + 1 Visa)',
					desc: 'Dubai entity setup + compliant business address + 1 residency visa workflow.',
					href: '/services/dubai-business-in-a-box/'
				}
			]
		},
		{
			title: 'Funding Readiness',
			services: [
				{
					name: 'DPIIT Recognition + Startup India Scheme Support',
					desc: 'Eligibility audit and application support for DPIIT recognition.',
					href: '/services/startup-india-dpiit-support/'
				}
			]
		},
		{
			title: 'Compliance / Legal',
			services: [
				{
					name: 'Compliance Management (Retainer)',
					desc: 'Outsourced compliance: bookkeeping, GST, TDS, ROC, and governance.',
					href: '/services/compliance-management/'
				},
				{
					name: 'Contract Drafting & Review',
					desc: 'Risk-first drafting and reviews for enforceable agreements.',
					href: '/services/contract-drafting-review/'
				},
				{
					name: 'Notice / Dispute Support',
					desc: 'Settlement-first strategy and documentation for formal notices and disputes.',
					href: '/services/notice-dispute-support/'
				}
			]
		}
	];

	const whyChoose = [
		{
			title: 'Documentation-first, verification-ready thinking',
			desc: 'We design workflows to reduce preventable mismatches and gaps.'
		},
		{
			title: 'Single window, fewer handoffs',
			desc: 'Setup, compliance, and legal coordination under one accountable workflow.'
		},
		{
			title: 'High-touch support',
			desc: "Structured tiers and clear ownership so you're not stuck in ticket loops."
		},
		{
			title: 'Scale across India + UAE',
			desc: 'Build in India, expand to Dubai—without changing partners.'
		}
	];

	const howWorks = [
		{
			n: '1',
			title: 'Quick discovery',
			desc: 'We confirm your goal, timeline, current status, and any constraints.'
		},
		{
			n: '2',
			title: 'Checklist + scope confirmation',
			desc: 'You get a clear list of requirements and what we will handle vs. what you provide.'
		},
		{
			n: '3',
			title: 'Execution + query handling',
			desc: 'We coordinate filings, drafting, and documentation. If queries arise, we respond within scope.'
		},
		{
			n: '4',
			title: 'Handover + next steps',
			desc: 'You receive deliverables, proofs/acknowledgements (as applicable), and a next-step checklist.'
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

	const faqs = [
		{
			q: 'What\'s the difference between Solutions and Services?',
			a: 'Solutions are outcome-first pathways (start, stay compliant, expand, scale). Services are the specific deliverables you can buy (company+GST, compliance retainer, contracts, Dubai setup, DPIIT support).'
		},
		{
			q: 'Do you guarantee approvals for GST/MCA/UAE visas/banking?',
			a: 'No. We focus on documentation readiness, process correctness, and query handling within scope. Final decisions are made by the relevant authorities.'
		},
		{
			q: 'Can you work with my existing CA/CS?',
			a: 'Yes. We can coordinate alongside your CA/CS or handle only specific parts you want outsourced.'
		},
		{
			q: 'Do you offer GST-only registration?',
			a: 'Yes. GST-only tiers are available when you don\'t need incorporation.'
		},
		{
			q: 'What does a compliance retainer usually include?',
			a: 'Typically bookkeeping, GST filings/reconciliations, TDS/IT workflows, and ROC/secretarial compliance (scope and caps apply).'
		},
		{
			q: 'How fast can contracts be drafted?',
			a: 'Many first drafts are delivered within 48–72 hours depending on agreement type, complexity, and inputs.'
		},
		{
			q: 'What\'s included in Dubai Business-in-a-Box?',
			a: 'A bundled workflow that combines setup, a compliant business address/lease for licensing & banking needs (as applicable), and a 1-visa process. Package contents vary by zone and activity.'
		},
		{
			q: 'Can you handle notices and disputes?',
			a: 'We can support drafting and strategy for notices and dispute documentation. Litigation/court representation requires separate scoping or external counsel coordination.'
		}
	];
</script>

<svelte:head>
	<title>Services | Xporate: Company+GST, Compliance, Legal & UAE</title>
	<meta
		name="description"
		content="Explore Xporate services: Company + GST setup, compliance retainers, contract drafting/review, DPIIT support, and Dubai Business-in-a-Box. Book a consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Services that power your business behind the scenes
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				If you're building in India (or expanding to Dubai), Xporate helps you set up cleanly, stay compliant,
				and protect the business with the right legal and governance workflows.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Corporate Backbone Services (India + UAE)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each [
					'Clear scope + checklists before you pay',
					'Documentation-first workflows to reduce preventable delays',
					'One team across setup + compliance + legal',
					'Simple pricing anchors (where applicable)',
					'We work alongside your CA/CS (if you already have one)'
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
					We don't guarantee approvals. Outcomes for registrations, verifications, visas, and banking depend
					on your case and the authority's checks. Our role is to make you documentation-ready and
					process-ready.
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
					href="/solutions/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Explore Solutions →
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

<!-- CHOOSE A SERVICE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Choose a service</h2>
		<p class="mb-10 text-center text-slate-600">
			Pick what you want done. If you're unsure, start with Solutions (outcome-first) or book a consult.
		</p>
		<p class="mb-10 text-center text-sm text-slate-500">
			Not sure what you need?
			<a href="/book/" class="font-medium text-orange-600 hover:text-orange-700">Book a consult →</a>
			Already have a CA? We can coordinate alongside your CA/CS and handle only the pieces you want
			outsourced.
		</p>

		<!-- Service sections -->
		<div class="space-y-12">
			{#each serviceCategories as category}
				<div>
					<h3 class="mb-6 text-2xl font-bold text-slate-900">{category.title}</h3>
					<div class="grid gap-6 md:grid-cols-2">
						{#each category.services as service}
							<a
								href={service.href}
								class="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
							>
								<h4 class="font-bold text-slate-900 group-hover:text-orange-600">{service.name}</h4>
								<p class="mt-3 text-sm leading-relaxed text-slate-500">{service.desc}</p>
								<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600">
									Explore service →
								</span>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- HOW ENGAGEMENT WORKS -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">How engagement works</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each howWorks as step}
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

<!-- WHY XPORATE -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Why businesses choose Xporate</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whyChoose as item}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WORKSPACE CROSS-LINK -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Need a workspace instead?</h2>
		<p class="mb-10 text-center text-slate-600">
			If you're looking for inventory (virtual offices, coworking seats, managed offices, commercial leasing,
			meeting rooms, day passes, event spaces), use the marketplace hubs below.
		</p>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each workspaces as ws}
				<a
					href={ws.href}
					class="rounded-lg border border-slate-200 bg-white px-6 py-4 text-center text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
				>
					{ws.label} →
				</a>
			{/each}
		</div>
		<div class="mt-6 text-center">
			<a href="/locations/" class="text-sm font-medium text-orange-600 transition hover:text-orange-700">
				Browse all locations →
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
		<h2 class="text-3xl font-bold">Book a consultation</h2>
		<p class="mt-4 text-lg text-slate-300">
			Tell us what you're trying to achieve, your timeline, and where you are in the process. We'll recommend
			the cleanest path and the right service.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
			>
				Book Consultation →
			</a>
			<a
				href="/solutions/"
				class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
			>
				Explore Solutions →
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
