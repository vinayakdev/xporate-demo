<!--
  /resources/templates/ — Free Business Templates & Checklists Hub
  ================================================================
  DESIGNER:
  - Hero: slate-900 bg, orange accent H1, trust chips, disclaimer in muted text
  - Category chips: filter pills below search bar (slate outline → orange active)
  - Section rhythm: alternating white / slate-50 bg per category
  - Cards: white bg, shadow-sm border, 3-col grid on desktop → 1-col mobile
  - Card anatomy: category badge (top-left) | title | who-it's-for blurb | time badge | CTA button
  - Final CTA: orange gradient banner with two action buttons
  FRONTEND:
  - $state searchQuery and activeCategory for filter logic
  - $derived filteredSections computes visible categories + cards based on both filters
  - Each card CTA links to /resources/templates/{slug} (placeholder — pages not built yet)
  - Category anchor IDs (e.g. #start-a-business) allow direct linking from nav/email
  - "Download" CTAs should eventually fire a lead-capture modal before download
  BACKEND:
  - All template files are placeholders — wire up to a file storage system (S3/R2/CMS)
  - Lead capture before download: POST /api/templates/request { templateSlug, email, company }
  - Track downloads per template for analytics
  - Consider gating premium templates behind email verification
  SEO:
  - Title: "Free Business Templates & Checklists | Xporate Resources"
  - Meta description: 155 chars targeting "free business templates india", "company registration checklist"
  - H1 with primary keyword; each category H2 is a secondary keyword target
  - Breadcrumb schema + ItemList schema for template cards
  - Internal links: every template card → /resources/templates/{slug}
-->

<script lang="ts">
	let searchQuery = $state('');
	let activeCategory = $state('all');

	const categories = [
		{ id: 'all', label: 'All Templates' },
		{ id: 'start-a-business', label: 'Start a Business' },
		{ id: 'virtual-office', label: 'Virtual Office' },
		{ id: 'compliance', label: 'Compliance' },
		{ id: 'legal', label: 'Legal' },
		{ id: 'leasing', label: 'Leasing' },
		{ id: 'uae-expansion', label: 'UAE Expansion' },
		{ id: 'workspaces', label: 'Workspaces' }
	];

	interface TemplateCard {
		title: string;
		forWhom: string;
		timeToComplete: string;
		slug: string;
		badge: string | null;
	}

	interface CategorySection {
		id: string;
		heading: string;
		subheading: string;
		cards: TemplateCard[];
	}

	const allSections: CategorySection[] = [
		{
			id: 'start-a-business',
			heading: 'Start a Business',
			subheading:
				'Everything you need to plan, register, and launch your company in India — from naming to first invoice.',
			cards: [
				{
					title: 'Company Registration Checklist (Private Limited)',
					forWhom: 'Founders incorporating a Pvt Ltd for the first time',
					timeToComplete: '15 min',
					slug: 'company-registration-checklist-pvt-ltd',
					badge: 'Most Downloaded'
				},
				{
					title: 'LLP Incorporation Checklist',
					forWhom: 'Professionals and partners forming an LLP',
					timeToComplete: '10 min',
					slug: 'llp-incorporation-checklist',
					badge: null
				},
				{
					title: 'Business Name Availability Worksheet',
					forWhom: 'Founders shortlisting a brand name before MCA filing',
					timeToComplete: '20 min',
					slug: 'business-name-availability-worksheet',
					badge: null
				},
				{
					title: 'Founders Agreement Template',
					forWhom: 'Co-founders formalising equity, roles, and vesting',
					timeToComplete: '30 min',
					slug: 'founders-agreement-template',
					badge: 'Free'
				},
				{
					title: 'Pre-Launch Business Setup Checklist',
					forWhom: 'Solo founders and small teams doing a ground-up launch',
					timeToComplete: '25 min',
					slug: 'pre-launch-business-setup-checklist',
					badge: null
				}
			]
		},
		{
			id: 'virtual-office',
			heading: 'Virtual Office',
			subheading:
				'Templates to set up, manage, and get the most from a virtual office address across India.',
			cards: [
				{
					title: 'Virtual Office Service Agreement Template',
					forWhom: 'Businesses taking up a virtual office address for the first time',
					timeToComplete: '10 min',
					slug: 'virtual-office-service-agreement',
					badge: 'Free'
				},
				{
					title: 'GST Registration Document Checklist (Virtual Office)',
					forWhom: 'Business owners applying for GST at a virtual address',
					timeToComplete: '10 min',
					slug: 'gst-registration-checklist-virtual-office',
					badge: 'Most Downloaded'
				},
				{
					title: 'Mail Handling & Courier Instruction Template',
					forWhom: 'Teams outsourcing mail management to a virtual office provider',
					timeToComplete: '5 min',
					slug: 'mail-handling-courier-instruction',
					badge: null
				},
				{
					title: 'Virtual Office ROI Calculator',
					forWhom:
						'Finance leads comparing virtual office cost vs. a dedicated office lease',
					timeToComplete: '15 min',
					slug: 'virtual-office-roi-calculator',
					badge: null
				}
			]
		},
		{
			id: 'compliance',
			heading: 'Compliance',
			subheading:
				'Annual filing calendars, MCA checklists, and audit-readiness trackers to keep your company compliant.',
			cards: [
				{
					title: 'Annual Compliance Calendar (Pvt Ltd)',
					forWhom: 'Directors and company secretaries tracking MCA deadlines',
					timeToComplete: '10 min',
					slug: 'annual-compliance-calendar-pvt-ltd',
					badge: 'Most Downloaded'
				},
				{
					title: 'GST Filing Checklist — Monthly & Quarterly',
					forWhom: 'Finance teams managing GSTR-1, GSTR-3B, and GSTR-9 filings',
					timeToComplete: '10 min',
					slug: 'gst-filing-checklist',
					badge: null
				},
				{
					title: 'ROC Filing Tracker (AOC-4 & MGT-7)',
					forWhom: 'Company secretaries tracking annual return deadlines',
					timeToComplete: '10 min',
					slug: 'roc-filing-tracker',
					badge: null
				},
				{
					title: 'Startup India DPIIT Registration Checklist',
					forWhom: 'Eligible startups applying for DPIIT recognition and tax exemptions',
					timeToComplete: '20 min',
					slug: 'startup-india-dpiit-checklist',
					badge: 'Free'
				},
				{
					title: 'Audit Readiness Checklist',
					forWhom: 'Finance leads preparing books ahead of statutory audit',
					timeToComplete: '15 min',
					slug: 'audit-readiness-checklist',
					badge: null
				}
			]
		},
		{
			id: 'legal',
			heading: 'Legal',
			subheading:
				'Standard agreements, NDAs, and policy templates to protect your business from day one.',
			cards: [
				{
					title: 'Non-Disclosure Agreement (NDA) Template',
					forWhom:
						'Founders and business teams sharing confidential information with partners or vendors',
					timeToComplete: '10 min',
					slug: 'nda-template',
					badge: 'Free'
				},
				{
					title: 'Service Agreement / Freelancer Contract Template',
					forWhom: 'Businesses engaging consultants, agencies, or freelancers',
					timeToComplete: '20 min',
					slug: 'service-agreement-freelancer-contract',
					badge: 'Most Downloaded'
				},
				{
					title: 'Vendor Onboarding Checklist',
					forWhom: 'Procurement teams standardising vendor due diligence',
					timeToComplete: '15 min',
					slug: 'vendor-onboarding-checklist',
					badge: null
				},
				{
					title: 'Employee Offer Letter Template (India)',
					forWhom: 'HR teams drafting compliant offer letters for new hires',
					timeToComplete: '10 min',
					slug: 'employee-offer-letter-india',
					badge: null
				},
				{
					title: 'Privacy Policy Template (India — IT Act compliant)',
					forWhom: 'Website and app owners publishing a compliant privacy policy',
					timeToComplete: '15 min',
					slug: 'privacy-policy-template-india',
					badge: 'Free'
				}
			]
		},
		{
			id: 'leasing',
			heading: 'Leasing',
			subheading:
				'Due-diligence checklists, lease term glossaries, and negotiation guides for office space decisions.',
			cards: [
				{
					title: 'Commercial Lease Due Diligence Checklist',
					forWhom: 'Business owners reviewing a commercial lease before signing',
					timeToComplete: '20 min',
					slug: 'commercial-lease-due-diligence-checklist',
					badge: 'Most Downloaded'
				},
				{
					title: 'Office Space Requirements Worksheet',
					forWhom: 'Ops and admin teams scoping their next office hunt',
					timeToComplete: '15 min',
					slug: 'office-space-requirements-worksheet',
					badge: null
				},
				{
					title: 'Lease Negotiation Checklist',
					forWhom: 'Tenants negotiating rent, fit-out allowance, and lock-in terms',
					timeToComplete: '20 min',
					slug: 'lease-negotiation-checklist',
					badge: 'Free'
				},
				{
					title: 'Office Fit-Out Budget Template',
					forWhom: 'Ops leads estimating build-out costs for a new office',
					timeToComplete: '25 min',
					slug: 'office-fit-out-budget-template',
					badge: null
				}
			]
		},
		{
			id: 'uae-expansion',
			heading: 'UAE Expansion',
			subheading:
				'Step-by-step checklists for Indian companies setting up a presence in Dubai or other UAE free zones.',
			cards: [
				{
					title: 'UAE Free Zone Company Setup Checklist',
					forWhom: 'Indian founders exploring Dubai Mainland or free-zone incorporation',
					timeToComplete: '20 min',
					slug: 'uae-free-zone-setup-checklist',
					badge: 'Most Downloaded'
				},
				{
					title: 'Dubai Virtual Office Setup Checklist',
					forWhom:
						'Businesses needing a UAE registered address without a physical office',
					timeToComplete: '10 min',
					slug: 'dubai-virtual-office-checklist',
					badge: 'Free'
				},
				{
					title: 'India–UAE Business Expansion Roadmap Template',
					forWhom: 'Founders planning a phased expansion from India to the UAE',
					timeToComplete: '30 min',
					slug: 'india-uae-expansion-roadmap',
					badge: null
				},
				{
					title: 'UAE Bank Account Opening Checklist',
					forWhom: 'Businesses opening a UAE corporate bank account from India',
					timeToComplete: '15 min',
					slug: 'uae-bank-account-opening-checklist',
					badge: null
				}
			]
		},
		{
			id: 'workspaces',
			heading: 'Workspaces',
			subheading:
				'Coworking comparison sheets, move-in checklists, and desk utilisation trackers for modern teams.',
			cards: [
				{
					title: 'Coworking Space Comparison Worksheet',
					forWhom: 'Teams evaluating multiple coworking options in the same city',
					timeToComplete: '20 min',
					slug: 'coworking-space-comparison-worksheet',
					badge: 'Most Downloaded'
				},
				{
					title: 'Office Move-In Checklist',
					forWhom: 'Ops teams managing a new office or coworking onboarding',
					timeToComplete: '15 min',
					slug: 'office-move-in-checklist',
					badge: 'Free'
				},
				{
					title: 'Desk Utilisation Tracker Template',
					forWhom: 'Workplace managers monitoring seat utilisation in hybrid offices',
					timeToComplete: '10 min',
					slug: 'desk-utilisation-tracker',
					badge: null
				},
				{
					title: 'Hybrid Work Policy Template',
					forWhom: 'HR leads formalising a work-from-home and office schedule policy',
					timeToComplete: '20 min',
					slug: 'hybrid-work-policy-template',
					badge: 'Free'
				},
				{
					title: 'Workspace Vendor Evaluation Checklist',
					forWhom: 'Procurement teams vetting coworking or managed office providers',
					timeToComplete: '15 min',
					slug: 'workspace-vendor-evaluation-checklist',
					badge: null
				}
			]
		}
	];

	const trustBullets = [
		'30+ free templates',
		'Updated for 2025–26',
		'Trusted by 3,000+ founders'
	];

	// Filter logic
	const filteredSections = $derived(
		allSections
			.filter((s) => activeCategory === 'all' || s.id === activeCategory)
			.map((s) => ({
				...s,
				cards: s.cards.filter(
					(c) =>
						searchQuery.trim() === '' ||
						c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						c.forWhom.toLowerCase().includes(searchQuery.toLowerCase())
				)
			}))
			.filter((s) => s.cards.length > 0)
	);
</script>

<svelte:head>
	<title>Free Business Templates & Checklists | Xporate Resources</title>
	<meta
		name="description"
		content="Download 30+ free business templates and checklists — company registration, GST filing, virtual office, legal agreements, UAE expansion, and more. Updated for 2025–26."
	/>
</svelte:head>

<!-- ═══════════════════════════════════════════════
     HERO
     DESIGNER: slate-900 bg, constrained copy, trust chips row
     SEO: H1 targets "free business templates india"
     ═══════════════════════════════════════════════ -->
<section class="bg-slate-900 px-4 py-16 text-white sm:py-20">
	<div class="mx-auto max-w-3xl text-center">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex justify-center gap-1 text-sm text-slate-400" aria-label="Breadcrumb">
			<a href="/" class="hover:text-white">Home</a>
			<span>/</span>
			<span class="text-slate-300">Resources</span>
			<span>/</span>
			<span class="text-white">Templates</span>
		</nav>

		<p class="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
			Free Resources
		</p>
		<h1 class="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
			Free Business Templates<br />& Checklists
		</h1>
		<p class="mx-auto mb-6 max-w-2xl text-lg text-slate-300">
			Ready-to-use templates for every stage — from registering your company to expanding to
			the UAE. Download free, fill in your details, get moving.
		</p>

		<!-- Trust chips -->
		<div class="mb-6 flex flex-wrap justify-center gap-3">
			{#each trustBullets as bullet (bullet)}
				<span
					class="rounded-full border border-slate-700 bg-slate-800 px-4 py-1 text-sm text-slate-300"
				>
					{bullet}
				</span>
			{/each}
		</div>

		<!-- Disclaimer -->
		<p class="mx-auto max-w-xl text-xs text-slate-500">
			Templates are provided for informational purposes only and do not constitute legal or
			financial advice. Consult a qualified professional before use in formal proceedings.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     SEARCH + FILTER
     DESIGNER: sticky below hero on desktop; search input full-width mobile
     FRONTEND: searchQuery + activeCategory drive $derived filteredSections
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
				placeholder="Search templates — e.g. NDA, GST, Dubai..."
				class="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-9 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 focus:outline-none"
			/>
		</div>

		<!-- Category chips -->
		<div class="flex flex-wrap gap-2">
			{#each categories as cat (cat.id)}
				<button
					onclick={() => (activeCategory = cat.id)}
					class={[
						'rounded-full border px-4 py-1 text-sm font-medium transition-colors',
						activeCategory === cat.id
							? 'border-orange-500 bg-orange-500 text-white'
							: 'border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
					].join(' ')}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     TEMPLATE CATEGORY SECTIONS
     DESIGNER: alternating white/slate-50 bg per section
     FRONTEND: rendered from $derived filteredSections
     BACKEND: card CTA → /resources/templates/{slug} — individual pages TBD
     ═══════════════════════════════════════════════ -->
{#if filteredSections.length === 0}
	<section class="bg-white px-4 py-20 text-center">
		<p class="text-lg text-slate-500">No templates match your search. Try a different keyword.</p>
		<button
			onclick={() => {
				searchQuery = '';
				activeCategory = 'all';
			}}
			class="mt-4 text-sm font-medium text-orange-500 hover:underline"
		>
			Clear filters
		</button>
	</section>
{/if}

{#each filteredSections as section, i (section.id)}
	<section
		id={section.id}
		class={['px-4 py-14 sm:py-16', i % 2 === 0 ? 'bg-white' : 'bg-slate-50'].join(' ')}
	>
		<div class="mx-auto max-w-5xl">
			<!-- Section header -->
			<div class="mb-8">
				<h2 class="mb-2 text-2xl font-bold text-slate-900">{section.heading}</h2>
				<p class="max-w-2xl text-slate-600">{section.subheading}</p>
			</div>

			<!-- Cards grid -->
			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each section.cards as card (card.slug)}
					<article
						class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
					>
						<!-- Badges row -->
						<div class="mb-3 flex items-start justify-between gap-2">
							<span
								class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
							>
								{section.heading}
							</span>
							{#if card.badge}
								<span
									class={[
										'rounded-full px-2.5 py-0.5 text-xs font-semibold',
										card.badge === 'Most Downloaded'
											? 'bg-orange-100 text-orange-700'
											: 'bg-green-100 text-green-700'
									].join(' ')}
								>
									{card.badge}
								</span>
							{/if}
						</div>

						<!-- Title -->
						<h3 class="mb-2 flex-1 text-base font-semibold leading-snug text-slate-900">
							{card.title}
						</h3>

						<!-- Who it's for -->
						<p class="mb-4 text-sm text-slate-500">
							<span class="font-medium text-slate-700">For:</span>
							{card.forWhom}
						</p>

						<!-- Footer row -->
						<div class="mt-auto flex items-center justify-between">
							<span class="flex items-center gap-1.5 text-xs text-slate-400">
								<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								{card.timeToComplete}
							</span>
							<a
								href="/resources/templates/{card.slug}"
								class="rounded-lg bg-orange-500 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
							>
								Download Free
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- ═══════════════════════════════════════════════
     FINAL CTA
     DESIGNER: orange gradient banner, 2 CTA buttons
     FRONTEND: links to /contact (consultation) and WhatsApp
     ═══════════════════════════════════════════════ -->
<section class="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-16 text-white">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-3 text-2xl font-bold sm:text-3xl">
			Need help applying these templates?
		</h2>
		<p class="mb-8 text-orange-100">
			Our team can handle the registration, compliance, and workspace setup end-to-end — so
			you can focus on building your business.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/contact"
				class="rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
			>
				Book a Free Consultation
			</a>
			<a
				href="https://wa.me/919999999999"
				class="rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
			>
				Chat on WhatsApp
			</a>
		</div>
	</div>
</section>
