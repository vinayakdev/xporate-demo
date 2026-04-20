<script lang="ts">
	let openItem = $state<number | null>(null);

	function toggleAccordion(i: number) {
		openItem = openItem === i ? null : i;
	}

	const trustBullets = [
		'Structured notice drafting/replies (commercial + employment scope)',
		'Evidence mapping: emails, invoices, agreements, payment proofs',
		'De-escalation-first strategy (settlement where possible)',
		'Clear next-step plan (mediation/arbitration/court referral as required)',
		'Work alongside your existing counsel (if you already have one)'
	];

	const whoFor = [
		{
			title: 'Businesses that received a legal notice',
			desc: 'Customer complaints, vendor disputes, contract breaches, payment disputes, or IP/confidentiality issues.'
		},
		{
			title: 'Businesses that need to send a notice',
			desc: 'Non-payment, breach of contract, service failure, or termination triggers.'
		},
		{
			title: 'Founders handling employment disputes',
			desc: 'Resignation issues, misconduct allegations, salary disputes, IP/confidentiality breaches.'
		},
		{
			title: 'Teams that want settlement-first outcomes',
			desc: 'Where facts allow, we aim for a structured response that supports negotiation before escalation.'
		}
	];

	const serviceOptions = [
		{
			label: 'Option 1',
			title: 'Draft a legal notice',
			best: 'Best when you want to assert your position, request performance/payment, or trigger termination.',
			output: 'Draft notice + evidence checklist + dispatch guidance.'
		},
		{
			label: 'Option 2',
			title: 'Reply to a legal notice',
			best: 'Best when you received a notice and need a structured, defensible response.',
			output: 'Reply draft + evidence mapping + risk notes + next steps.'
		},
		{
			label: 'Option 3',
			title: 'Dispute strategy + documentation pack',
			best: "Best when you're heading to mediation/arbitration and need a clean timeline and exhibits.",
			output: 'Case timeline + document bundle plan + negotiation posture notes (scope-based).'
		}
	];

	const disputeCategories = [
		{
			title: 'Commercial and vendor disputes',
			items: [
				'Non-payment / delayed payment',
				'Scope disputes and change request conflicts',
				'Vendor non-performance',
				'Refund and chargeback disputes'
			]
		},
		{
			title: 'Contract breach and termination',
			items: [
				'Breach notices',
				'Termination notices',
				'Cure period and handover disputes'
			]
		},
		{
			title: 'Employment and HR',
			items: [
				'Salary disputes',
				'Notice period disputes',
				'Misconduct allegations (documentation support)',
				'Confidentiality / IP misuse concerns'
			]
		},
		{
			title: 'Confidentiality and IP issues (commercial scope)',
			items: [
				'NDA breaches',
				'Data misuse claims',
				'IP ownership conflicts (contract-based)'
			]
		}
	];

	const processSteps = [
		{
			step: '1',
			title: 'Intake + risk triage',
			desc: 'We confirm what happened, what you want, and the realistic options.'
		},
		{
			step: '2',
			title: 'Evidence mapping',
			desc: 'We identify the strongest documents: agreements, emails/WhatsApp, invoices, delivery proofs, payment proofs.'
		},
		{
			step: '3',
			title: 'Timeline + narrative',
			desc: 'We create a clean timeline so your notice/reply is coherent and consistent.'
		},
		{
			step: '4',
			title: 'Draft + revision',
			desc: 'We draft the notice/reply with a calm, professional posture.'
		},
		{
			step: '5',
			title: 'Next-step plan',
			desc: 'We map what to do after sending: negotiation, settlement terms, mediation/arbitration, or counsel handoff.'
		}
	];

	const inputs = [
		{
			title: 'The notice (if received)',
			desc: 'PDF or photos of the notice and envelope (if relevant).'
		},
		{
			title: 'Your contract or agreement',
			desc: 'MSA/SoW, vendor agreement, employment agreement, NDA, etc.'
		},
		{
			title: 'Evidence bundle',
			desc: 'Invoices, payment proofs, delivery proofs, emails/WhatsApp screenshots, meeting notes.'
		},
		{
			title: 'Your desired outcome',
			desc: 'Payment, performance, termination, settlement, or a defensible reply.'
		}
	];

	const notDoing = [
		'Court representation, litigation filing, or courtroom appearances',
		'Criminal, family law, or specialized non-commercial matters',
		'Guaranteed outcomes'
	];

	const deEscalation = [
		{
			title: 'Clear ask',
			desc: 'What you want and by when.'
		},
		{
			title: 'Evidence-backed posture',
			desc: 'Aligned to documents and timeline.'
		},
		{
			title: 'Reasonable resolution path',
			desc: 'Settlement options and next steps.'
		}
	];

	const relatedServices = [
		{
			title: 'Contract Drafting & Review',
			desc: 'Reduce future disputes by fixing your contracts before you sign.',
			href: '/services/contract-drafting-review/'
		},
		{
			title: 'Compliance Management (Retainer)',
			desc: 'Maintain clean records, invoices, and filings to reduce dispute risk.',
			href: '/services/compliance-management/'
		},
		{
			title: 'Legal Support (Solution)',
			desc: 'If you want ongoing legal help across contracts and notices.',
			href: '/solutions/legal-support/'
		}
	];

	const faqs = [
		{
			q: 'I received a legal notice—what should I do first?',
			a: "Don't ignore it. Gather the notice, your agreement, invoices/payment proofs, and key communication. We'll triage risk and draft a structured reply."
		},
		{
			q: 'Can you guarantee the dispute will be resolved?',
			a: 'No. Outcomes depend on facts, counterparties, and legal processes. We focus on a clear, evidence-backed response and a realistic next-step plan.'
		},
		{
			q: 'Do you handle court cases?',
			a: 'Not within this standard service. Litigation/court representation requires separate scoping or coordination with external counsel.'
		},
		{
			q: 'Can you help send a notice for non-payment?',
			a: 'Yes. We can draft a notice with an evidence checklist and resolution pathway.'
		},
		{
			q: 'How fast can you draft a reply?',
			a: 'For urgent matters, drafts are often delivered within 24–72 hours depending on complexity and how quickly you provide documents.'
		}
	];
</script>

<svelte:head>
	<title>Legal Notice & Dispute Support (Draft/Reply) | Xporate</title>
	<meta
		name="description"
		content="Received a legal notice? Send a structured reply with documentation and a de-escalation plan. Draft/reply support for commercial disputes (scope-based). Book consult."
	/>
	<link rel="canonical" href="https://xporate.in/services/notice-dispute-support/" />
</svelte:head>

<!-- HERO -->
<section class="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				Notice & dispute support: respond fast, respond structured
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-slate-300">
				If you received a legal notice—or need to send one—your first response often decides the trajectory.
				Xporate helps you draft or reply with a calm, documentation-backed strategy that reduces preventable
				escalation.
			</p>
			<p class="mt-3 text-sm font-medium text-orange-400">
				Draft • Reply • Documentation pack • Settlement-first strategy (scope-based)
			</p>

			<!-- Trust bullets -->
			<div class="mt-8 space-y-3">
				{#each trustBullets as bullet (bullet)}
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
					This service provides drafting, documentation support, and strategy guidance. We don't guarantee
					outcomes. Litigation/court representation is not included unless explicitly scoped.
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
					href="/services/contract-drafting-review/"
					class="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
				>
					Contract Drafting & Review →
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

<!-- WHO THIS IS FOR -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Who this is for</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each whoFor as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CHOOSE WHAT YOU NEED -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">Choose what you need</h2>
		<p class="mb-10 text-center text-slate-600">
			Not sure which fits? <a href="/book/" class="font-medium text-orange-600 hover:text-orange-700"
				>Book a 15-minute consult →</a
			>
		</p>
		<div class="grid gap-6 md:grid-cols-3">
			{#each serviceOptions as opt (opt.label)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<p class="text-xs font-semibold uppercase text-orange-600">{opt.label}</p>
					<h3 class="mt-2 text-xl font-bold text-slate-900">{opt.title}</h3>
					<p class="mt-4 text-sm text-slate-600">{opt.best}</p>
					<div class="mt-6 border-t border-slate-100 pt-4">
						<p class="text-xs font-semibold text-slate-500">Output:</p>
						<p class="mt-1 text-sm text-slate-700">{opt.output}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- COMMON DISPUTES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Common disputes we support</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each disputeCategories as cat (cat.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
					<h3 class="font-bold text-slate-900">{cat.title}</h3>
					<ul class="mt-4 space-y-2">
						{#each cat.items as item (item)}
							<li class="flex gap-2 text-sm text-slate-600">
								<span class="shrink-0 text-orange-500">•</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- HOW WE HANDLE NOTICES -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			How we handle notices (evidence-first)
		</h2>
		<p class="mb-10 text-center text-slate-600">A structured five-step process—not guesswork.</p>
		<div class="space-y-4">
			{#each processSteps as step (step.step)}
				<div class="flex gap-4 rounded-lg border border-slate-200 bg-white p-6">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600"
					>
						{step.step}
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

<!-- WHAT WE NEED FROM YOU -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">What we need from you (inputs)</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each inputs as input (input.title)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
					<h3 class="font-bold text-slate-900">{input.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{input.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TURNAROUND + PRICING -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h2 class="text-2xl font-bold text-slate-900">Turnaround</h2>
				<p class="mt-4 text-slate-600">
					For urgent matters, we prioritize intake and first-draft timelines. Drafts are often delivered
					within 24–72 hours depending on complexity and inputs.
				</p>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-white p-8">
				<h2 class="text-2xl font-bold text-slate-900">Pricing (scope-based)</h2>
				<p class="mt-4 text-slate-600">
					Pricing depends on the dispute type, document volume, and whether you need drafting, replying, or
					a full documentation pack. We'll confirm scope and quote during the consultation.
				</p>
				<div class="mt-6">
					<a
						href="/book/"
						class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
					>
						Book Consult →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- WHAT WE DON'T DO -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">
			What we don't do (unless separately scoped)
		</h2>
		<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
			<ul class="space-y-3">
				{#each notDoing as item (item)}
					<li class="flex gap-3 text-slate-600">
						<span class="shrink-0 text-slate-400">•</span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-6 text-sm text-slate-500">
				If a case requires litigation, we can coordinate with external counsel or your existing lawyer
				(separate scope).
			</p>
		</div>
	</div>
</section>

<!-- DE-ESCALATION FRAMEWORK -->
<section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-4 text-center text-3xl font-bold text-slate-900">
			De-escalation-first (when facts allow)
		</h2>
		<p class="mb-10 text-center text-slate-600">
			We often structure notices/replies to keep doors open for settlement while preserving your position.
		</p>
		<div class="grid gap-6 md:grid-cols-3">
			{#each deEscalation as item (item.title)}
				<div class="rounded-2xl border border-slate-200 bg-white p-8 text-center">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100"
					>
						<svg class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="font-bold text-slate-900">{item.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- RELATED SERVICES -->
<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-slate-900">Related services</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each relatedServices as svc (svc.href)}
				<a
					href={svc.href}
					class="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-orange-300 hover:bg-orange-50"
				>
					<h3 class="font-bold text-slate-900 group-hover:text-orange-700">{svc.title}</h3>
					<p class="mt-3 text-sm text-slate-600">{svc.desc}</p>
					<p class="mt-4 text-sm font-semibold text-orange-600">Learn more →</p>
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
		<h2 class="text-3xl font-bold">Get a structured notice or reply</h2>
		<p class="mt-4 text-lg text-slate-300">
			Share your notice (or situation), the agreement, and your desired outcome—we'll map the cleanest
			response.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book/"
				class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
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
				WhatsApp now
			</a>
		</div>
	</div>
</section>
