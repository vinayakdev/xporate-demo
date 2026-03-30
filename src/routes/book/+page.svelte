<!--
  /book/ — Book a Consultation
  ================================================================
  ROLE: Multi-step stepper form to collect consultation intent + qualifying details
  ================================================================
  FLOW:
  Step 0: Engine selection (workspace vs corporate)
  Step 1: Path selection (outcome cards based on engine)
  Step 2: Quick questionnaire (multi-step sub-form)
  After submission: Show checklist + scheduler placeholder

  DESIGN RHYTHM:
  - Hero: slate-900 (dark)
  - Step 1 (engines): white
  - Step 2 (paths): slate-50
  - Step 3 (form): white
  - After submit: slate-50 → white → slate-900 → slate-50 → white → slate-900
-->

<script lang="ts">
	// ─── Main form state ────────────────────────────────────────────────
	let step = $state(0);
	let selectedEngine = $state<'workspace' | 'corporate' | null>(null);
	let selectedPath = $state<string | null>(null);
	let submitted = $state(false);

	// ─── Form data (always collected) ──────────────────────────────────
	let formData = $state({
		fullName: '',
		phone: '',
		email: '',
		companyName: '',
		timeline: '',
		// Workspace-specific
		city: '',
		microLocations: '',
		workspaceType: '',
		headcountNow: '',
		headcount6M: '',
		budgetRange: '',
		moveInDate: '',
		// Corporate-specific
		entityType: '',
		directorsCount: '',
		stateCity: '',
		gstNeeded: '',
		officeProof: '',
		// Compliance-specific
		gstinCount: '',
		monthlyInvoiceVolume: '',
		cleanupNeeded: '',
		// Legal-specific
		legalNeed: '',
		documentType: '',
		legalTimeline: '',
		// Dubai-specific
		uaeActivity: '',
		canTravel: '',
		passportValidity: '',
		priorUaeEntry: '',
		// DPIIT-specific
		incorporatedAsPrivtLtd: '',
		websiteAppLink: '',
		proofPoints: [] as string[],
		deckAvailable: '',
		// Scale Workspace
		currentWorkspaceType: '',
		targetWorkspaceType: ''
	});

	// ─── Sub-step tracker for step 3 questionnaire ─────────────────────
	let substep = $state(0);

	// ─── Derived: visible fields based on selectedPath ──────────────────
	const visibleFields = $derived.by(() => {
		if (!selectedPath) return [];

		const workspaceFields = ['city', 'microLocations', 'workspaceType', 'headcountNow', 'headcount6M', 'budgetRange', 'moveInDate'];
		const startBusinessFields = ['entityType', 'directorsCount', 'stateCity', 'gstNeeded', 'officeProof'];
		const complianceFields = ['entityType', 'gstinCount', 'monthlyInvoiceVolume', 'cleanupNeeded'];
		const legalFields = ['legalNeed', 'documentType', 'legalTimeline'];
		const uaeFields = ['uaeActivity', 'canTravel', 'passportValidity', 'priorUaeEntry'];
		const dpiitFields = ['incorporatedAsPrivtLtd', 'websiteAppLink', 'proofPoints', 'deckAvailable'];
		const scaleFields = ['currentWorkspaceType', 'targetWorkspaceType', 'headcountNow', 'headcount6M', 'budgetRange', 'moveInDate'];

		switch (selectedPath) {
			case 'virtual-office':
			case 'coworking':
			case 'managed-office':
			case 'commercial-leasing':
			case 'meeting-rooms':
			case 'other-workspace':
				return workspaceFields;
			case 'start-business':
				return startBusinessFields;
			case 'compliance':
				return complianceFields;
			case 'legal':
				return legalFields;
			case 'dubai-expansion':
				return uaeFields;
			case 'dpiit-startup':
				return dpiitFields;
			case 'scale-workspace':
				return scaleFields;
			default:
				return [];
		}
	});

	// ─── Handlers ──────────────────────────────────────────────────────

	function selectEngine(engine: 'workspace' | 'corporate') {
		selectedEngine = engine;
		step = 1;
		substep = 0;
	}

	function selectPath(pathId: string) {
		selectedPath = pathId;
		step = 2;
		substep = 0;
	}

	function goBackToStep(targetStep: number) {
		step = targetStep;
		substep = 0;
	}

	function nextSubstep() {
		substep += 1;
	}

	function prevSubstep() {
		if (substep > 0) substep -= 1;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Validate required fields
		if (!formData.fullName || !formData.phone || !formData.email) {
			alert('Please fill in all required fields');
			return;
		}
		submitted = true;
		// In production, send data to backend here
	}

	function resetForm() {
		step = 0;
		selectedEngine = null;
		selectedPath = null;
		substep = 0;
		submitted = false;
		formData = {
			fullName: '',
			phone: '',
			email: '',
			companyName: '',
			timeline: '',
			city: '',
			microLocations: '',
			workspaceType: '',
			headcountNow: '',
			headcount6M: '',
			budgetRange: '',
			moveInDate: '',
			entityType: '',
			directorsCount: '',
			stateCity: '',
			gstNeeded: '',
			officeProof: '',
			gstinCount: '',
			monthlyInvoiceVolume: '',
			cleanupNeeded: '',
			legalNeed: '',
			documentType: '',
			legalTimeline: '',
			uaeActivity: '',
			canTravel: '',
			passportValidity: '',
			priorUaeEntry: '',
			incorporatedAsPrivtLtd: '',
			websiteAppLink: '',
			proofPoints: [],
			deckAvailable: '',
			currentWorkspaceType: '',
			targetWorkspaceType: ''
		};
	}

	// ─── Path + Engine Data ────────────────────────────────────────────

	const engineCards = [
		{
			id: 'workspace',
			title: 'Find a workspace',
			desc: 'Virtual office, coworking, managed office, commercial leasing, meeting rooms, day passes, event spaces.',
			links: ['/locations/', '/virtual-office/', '/coworking-space/']
		},
		{
			id: 'corporate',
			title: 'Corporate Backbone solutions',
			desc: 'Company + GST setup, ongoing compliance, legal contracts/notices, Dubai expansion, funding readiness.',
			links: ['/solutions/', '/services/']
		}
	];

	const pathCardsWorkspace = [
		{ id: 'virtual-office', title: 'Virtual Office', desc: 'Registered address without physical office' },
		{ id: 'coworking', title: 'Coworking / Dedicated Seats', desc: 'Shared workspace with dedicated desk' },
		{ id: 'managed-office', title: 'Managed Office', desc: 'Private suite, pre-furnished' },
		{ id: 'commercial-leasing', title: 'Commercial Leasing', desc: 'Long-term traditional office leases' },
		{ id: 'meeting-rooms', title: 'Meeting Rooms', desc: 'Hourly to monthly meeting space' },
		{ id: 'other-workspace', title: 'Other', desc: 'Event spaces, day passes, or other' }
	];

	const pathCardsCorporate = [
		{ id: 'start-business', title: 'Start a Business (India)', desc: 'Company + GST setup from scratch' },
		{ id: 'compliance', title: 'Compliance & Governance (Ongoing)', desc: 'Retainer for ongoing compliance' },
		{ id: 'legal', title: 'Legal Support (Contracts + Notices)', desc: 'Draft, review, or notice support' },
		{ id: 'dubai-expansion', title: 'Expand to Dubai / UAE', desc: 'Setup + office + visa planning' },
		{ id: 'dpiit-startup', title: 'Get Funding-Ready (DPIIT / Startup India)', desc: 'Readiness for investors' },
		{ id: 'scale-workspace', title: 'Scale Your Workspace', desc: 'Upgrade workspace as you grow' }
	];

	const checklistItems = {
		'virtual-office': [
			'PAN + Aadhaar',
			'COI or partnership deed',
			'Nature of business'
		],
		'coworking': [
			'PAN + Aadhaar',
			'COI or partnership deed',
			'Nature of business'
		],
		'managed-office': [
			'PAN + Aadhaar',
			'COI or partnership deed',
			'Nature of business'
		],
		'commercial-leasing': [
			'Budget range',
			'Preferred layout',
			'Stamp duty readiness'
		],
		'meeting-rooms': [
			'PAN + Aadhaar',
			'Nature of business',
			'Expected meeting frequency'
		],
		'other-workspace': [
			'PAN + Aadhaar',
			'COI or partnership deed',
			'Nature of business'
		],
		'start-business': [
			'Promoter KYC',
			'Registered office proof',
			'Authorization letter',
			'HSN/SAC codes'
		],
		'compliance': [
			'Bank statements',
			'Purchase/sales invoices',
			'GST filing status',
			'DSCs'
		],
		'legal': [
			'Business brief',
			'Existing agreements',
			'Dedicated POC'
		],
		'dubai-expansion': [
			'Passport scan',
			'Digital photo',
			'UID details'
		],
		'dpiit-startup': [
			'COI',
			'Proof of innovation',
			'CA-certified statements',
			'Authorization letter'
		],
		'scale-workspace': [
			'Budget range',
			'Preferred layout',
			'Headcount details',
			'Timeline'
		]
	};

	const faqs = [
		{
			q: 'Is the consultation free?',
			a: 'We\'ll confirm consultation availability and any charges (if applicable) on the booking screen.'
		},
		{
			q: 'Do you guarantee approvals for GST/MCA/UAE visa/banking?',
			a: 'No. We focus on documentation readiness and clean execution to reduce preventable delays.'
		},
		{
			q: 'Can I book for both India and UAE needs?',
			a: 'Yes—select your primary goal and mention the secondary goal in the notes.'
		},
		{
			q: 'What if I don\'t have my documents ready?',
			a: 'Book anyway. We\'ll tell you exactly what\'s required and what can be prepared later.'
		},
		{
			q: 'Can you work with my existing CA/CS or legal counsel?',
			a: 'Yes. We coordinate alongside your existing advisors.'
		}
	];

	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}
</script>

<svelte:head>
	<title>Book Consultation | Virtual Office + Company Setup | Xporate</title>
	<meta
		name="description"
		content="Book a 15-minute consult for virtual office, workspaces, company+GST setup, compliance, legal support, or Dubai expansion. WhatsApp available."
	/>
	<meta property="og:title" content="Book Consultation | Virtual Office + Company Setup | Xporate" />
	<meta property="og:description" content="Book a 15-minute consult for virtual office, workspaces, company+GST setup, compliance, legal support, or Dubai expansion." />
	<link rel="canonical" href="https://xporate.in/book/" />
</svelte:head>

<div class="w-full">
	<!-- ═════════════════════════════════════════════════════════════════ -->
	<!-- HERO SECTION (Dark) -->
	<!-- ═════════════════════════════════════════════════════════════════ -->
	{#if !submitted}
		<section class="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h1 class="mb-4 text-4xl font-bold sm:text-5xl">Not sure what you need? Book a 15-minute consult</h1>
				<p class="mb-8 text-lg text-slate-300">
					Tell us your goal and timeline—we'll map the cleanest route and route you to the right solution or workspace.
				</p>

				<!-- Support line -->
				<p class="mb-6 text-sm text-slate-400">India Workspaces + Corporate Backbone (India + Dubai)</p>

				<!-- Trust bullets (4 items, responsive grid) -->
				<div class="mb-8 grid gap-4 sm:grid-cols-2">
					<div class="flex gap-3">
						<span class="flex-shrink-0 text-orange-500">✓</span>
						<span class="text-sm text-slate-300">Workflow-first guidance (what to do first, next, and why)</span>
					</div>
					<div class="flex gap-3">
						<span class="flex-shrink-0 text-orange-500">✓</span>
						<span class="text-sm text-slate-300">Documentation-ready approach (reduce preventable delays)</span>
					</div>
					<div class="flex gap-3">
						<span class="flex-shrink-0 text-orange-500">✓</span>
						<span class="text-sm text-slate-300">Transparent scope + pricing anchors (where applicable)</span>
					</div>
					<div class="flex gap-3">
						<span class="flex-shrink-0 text-orange-500">✓</span>
						<span class="text-sm text-slate-300">Single point of contact across setup + workspaces + compliance + legal + UAE (scope-based)</span>
					</div>
				</div>

				<!-- Compliance note -->
				<div class="mb-8 rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
					<strong class="block text-white">Important:</strong> We don't guarantee approvals. Outcomes for registrations, verifications, visas, and banking depend on your profile, documents, and authority/bank checks. We focus on documentation completeness, consistency, and verification readiness.
				</div>

				<!-- CTAs -->
				<div class="flex flex-col gap-3 sm:flex-row">
					<button
						onclick={() => (step = 0)}
						class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
					>
						Start quick questionnaire (on-page stepper)
					</button>
					<a
						href="https://wa.me/919876543210"
						target="_blank"
						class="rounded-lg border border-white px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
					>
						WhatsApp
					</a>
				</div>
			</div>
		</section>
	{/if}

	<!-- ═════════════════════════════════════════════════════════════════ -->
	<!-- STEP 0: ENGINE SELECTION (White) -->
	<!-- ═════════════════════════════════════════════════════════════════ -->
	{#if step === 0 && !submitted}
		<section class="bg-white px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-2 text-3xl font-bold text-slate-900">Step 1: Choose your goal</h2>
				<p class="mb-8 text-sm text-slate-600">Select the primary reason you're here today.</p>

				<!-- Engine cards -->
				<div class="mb-8 grid gap-6 sm:grid-cols-2">
					{#each engineCards as card (card.id)}

						<button
							onclick={() => selectEngine(card.id)}
							class="rounded-lg border border-slate-200 bg-white p-6 text-left transition hover:border-orange-400 hover:shadow-lg"
						>
							<h3 class="mb-2 text-xl font-semibold text-slate-900">{card.title}</h3>
							<p class="mb-4 text-sm text-slate-600">{card.desc}</p>
							<div class="flex flex-wrap gap-2">
								{#each card.links as link (link)}
									<span class="text-xs text-orange-600">{link}</span>
								{/each}
							</div>
						</button>
					{/each}
				</div>

				<!-- Microcopy -->
				<p class="text-sm text-slate-600">Already have a CA? We work alongside your CA.</p>
			</div>
		</section>
	{/if}

	<!-- ═════════════════════════════════════════════════════════════════ -->
	<!-- STEP 1: PATH SELECTION (Slate-50) -->
	<!-- ═════════════════════════════════════════════════════════════════ -->
	{#if step === 1 && selectedEngine && !submitted}
		<section class="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<button
					onclick={() => goBackToStep(0)}
					class="mb-6 text-sm font-semibold text-orange-600 hover:underline"
				>
					← Back
				</button>

				<h2 class="mb-2 text-3xl font-bold text-slate-900">Step 2: Select what you want help with</h2>
				<p class="mb-8 text-sm text-slate-600">Choose the outcome that matches your needs.</p>

				<!-- Path cards (conditional based on selectedEngine) -->
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each (selectedEngine === 'workspace' ? pathCardsWorkspace : pathCardsCorporate) as card (card.id)}

						<button
							onclick={() => selectPath(card.id)}
							class="rounded-lg border border-slate-200 bg-white p-6 text-left transition hover:border-orange-400 hover:shadow-lg"
						>
							<h3 class="mb-2 font-semibold text-slate-900">{card.title}</h3>
							<p class="text-sm text-slate-600">{card.desc}</p>
						</button>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- ═════════════════════════════════════════════════════════════════ -->
	<!-- STEP 2: QUICK QUESTIONNAIRE (White) -->
	<!-- ═════════════════════════════════════════════════════════════════ -->
	{#if step === 2 && selectedPath && !submitted}
		<section class="bg-white px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<button
					onclick={() => goBackToStep(1)}
					class="mb-6 text-sm font-semibold text-orange-600 hover:underline"
				>
					← Back
				</button>

				<h2 class="mb-2 text-3xl font-bold text-slate-900">Step 3: Quick questionnaire (90 seconds)</h2>
				<p class="mb-8 text-sm text-slate-600">Question {substep + 1} of 8</p>

				<!-- Form -->
				<form onsubmit={handleSubmit} class="space-y-6">
					<!-- SUBSTEP 0: Name + Phone + Email -->
					{#if substep === 0}
						<div class="space-y-4">
							<div>
								<label for="fullName" class="block text-sm font-semibold text-slate-900">
									Full name <span class="text-red-500">*</span>
								</label>
								<input
									id="fullName"
									type="text"
									bind:value={formData.fullName}
									required
									class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label for="phone" class="block text-sm font-semibold text-slate-900">
									Phone (preferably WhatsApp) <span class="text-red-500">*</span>
								</label>
								<input
									id="phone"
									type="tel"
									bind:value={formData.phone}
									required
									class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
									placeholder="+91 98765 43210"
								/>
							</div>

							<div>
								<label for="email" class="block text-sm font-semibold text-slate-900">
									Email <span class="text-red-500">*</span>
								</label>
								<input
									id="email"
									type="email"
									bind:value={formData.email}
									required
									class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
									placeholder="you@example.com"
								/>
							</div>

							<div>
								<label for="companyName" class="block text-sm font-semibold text-slate-900">
									Company name <span class="text-slate-500">(optional)</span>
								</label>
								<input
									id="companyName"
									type="text"
									bind:value={formData.companyName}
									class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
									placeholder="Your company (if applicable)"
								/>
							</div>
						</div>
					{/if}

					<!-- SUBSTEP 1: Timeline -->
					{#if substep === 1}
						<div>
							<fieldset class="space-y-3">
								<legend class="block text-sm font-semibold text-slate-900">
									When do you want to start? <span class="text-red-500">*</span>
								</legend>
								<div class="mt-4 space-y-3">
									{#each ['ASAP', '1–2 weeks', '1 month', '2–3 months'] as option (option)}
										<label class="flex items-center gap-3">
											<input
												type="radio"
												name="timeline"
												value={option}
												bind:group={formData.timeline}
												class="accent-orange-500"
											/>
											<span class="text-sm text-slate-700">{option}</span>
										</label>
									{/each}
								</div>
							</fieldset>
						</div>
					{/if}

					<!-- SUBSTEP 2+: Conditional fields based on selectedPath -->
					{#if substep >= 2}
						<!-- Workspace-specific fields -->
						{#if visibleFields().includes('city')}
							<div class="rounded-lg border border-orange-100 bg-orange-50 p-4 space-y-4">
								<div>
									<label for="city" class="block text-sm font-semibold text-slate-900">
										City <span class="text-red-500">*</span>
									</label>
									<select
										id="city"
										bind:value={formData.city}
										class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
									>
										<option value="">Select a city</option>
										<option value="Bangalore">Bangalore</option>
										<option value="Mumbai">Mumbai</option>
										<option value="Delhi NCR">Delhi NCR</option>
										<option value="Hyderabad">Hyderabad</option>
										<option value="Pune">Pune</option>
									</select>
								</div>

								{#if visibleFields().includes('microLocations')}
									<div>
										<label for="microLocations" class="block text-sm font-semibold text-slate-900">
											Preferred micro-locations <span class="text-slate-500">(optional)</span>
										</label>
										<input
											id="microLocations"
											type="text"
											bind:value={formData.microLocations}
											class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
											placeholder="e.g., Indiranagar, Whitefield"
										/>
									</div>
								{/if}

								{#if visibleFields().includes('workspaceType')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Workspace type <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Virtual', 'Seats', 'Managed', 'Lease', 'Meeting Room', 'Other'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="workspaceType"
														value={option}
														bind:group={formData.workspaceType}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('headcountNow')}
									<div>
										<label for="headcountNow" class="block text-sm font-semibold text-slate-900">
											Headcount now <span class="text-red-500">*</span>
										</label>
										<input
											id="headcountNow"
											type="number"
											bind:value={formData.headcountNow}
											class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
											placeholder="1"
										/>
									</div>
								{/if}

								{#if visibleFields().includes('headcount6M')}
									<div>
										<label for="headcount6M" class="block text-sm font-semibold text-slate-900">
											Headcount in 6 months <span class="text-red-500">*</span>
										</label>
										<input
											id="headcount6M"
											type="number"
											bind:value={formData.headcount6M}
											class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
											placeholder="5"
										/>
									</div>
								{/if}

								{#if visibleFields().includes('budgetRange')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Budget range <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Not decided yet', '< ₹5k/mo', '₹5-10k', '₹10-20k', '> ₹20k'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="budgetRange"
														value={option}
														bind:group={formData.budgetRange}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('moveInDate')}
									<div>
										<label for="moveInDate" class="block text-sm font-semibold text-slate-900">
											Move-in / start date <span class="text-red-500">*</span>
										</label>
										<input
											id="moveInDate"
											type="date"
											bind:value={formData.moveInDate}
											class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
										/>
									</div>
								{/if}
							</div>
						{/if}

						<!-- Corporate-specific fields -->
						{#if visibleFields().includes('entityType')}
							<div class="rounded-lg border border-orange-100 bg-orange-50 p-4 space-y-4">
								<fieldset class="space-y-2">
									<legend class="block text-sm font-semibold text-slate-900">
										Preferred entity type <span class="text-red-500">*</span>
									</legend>
									<div class="mt-3 space-y-2">
										{#each ['Pvt Ltd', 'LLP', 'OPC', 'Not sure'] as option (option)}
											<label class="flex items-center gap-3">
												<input
													type="radio"
													name="entityType"
													value={option}
													bind:group={formData.entityType}
													class="accent-orange-500"
												/>
												<span class="text-sm text-slate-700">{option}</span>
											</label>
										{/each}
									</div>
								</fieldset>

								{#if visibleFields().includes('directorsCount')}
									<label for="directorsCount" class="block text-sm font-semibold text-slate-900">
										Number of directors/partners <span class="text-red-500">*</span>
									</label>
									<input
										id="directorsCount"
										type="number"
										bind:value={formData.directorsCount}
										class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
										placeholder="1"
									/>
								{/if}

								{#if visibleFields().includes('stateCity')}
									<div>
										<label for="stateCity" class="block text-sm font-semibold text-slate-900">
											State/city for registered office <span class="text-red-500">*</span>
										</label>
										<select
											id="stateCity"
											bind:value={formData.stateCity}
											class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
										>
											<option value="">Select a state/city</option>
											<option value="Karnataka - Bangalore">Karnataka - Bangalore</option>
											<option value="Maharashtra - Mumbai">Maharashtra - Mumbai</option>
											<option value="Delhi - Delhi NCR">Delhi - Delhi NCR</option>
											<option value="Telangana - Hyderabad">Telangana - Hyderabad</option>
										</select>
									</div>
								{/if}

								{#if visibleFields().includes('gstNeeded')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											GST needed now? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="gstNeeded"
														value={option}
														bind:group={formData.gstNeeded}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('officeProof')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Do you already have office address proof? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="officeProof"
														value={option}
														bind:group={formData.officeProof}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('gstinCount')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											GSTIN count <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['1', 'Multiple'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="gstinCount"
														value={option}
														bind:group={formData.gstinCount}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('monthlyInvoiceVolume')}
									<label for="monthlyInvoiceVolume" class="block text-sm font-semibold text-slate-900">
										Monthly invoice volume (approx) <span class="text-red-500">*</span>
									</label>
									<input
										id="monthlyInvoiceVolume"
										type="number"
										bind:value={formData.monthlyInvoiceVolume}
										class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
										placeholder="10"
									/>
								{/if}

								{#if visibleFields().includes('cleanupNeeded')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Need cleanup or ongoing only? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Cleanup + ongoing', 'Ongoing'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="cleanupNeeded"
														value={option}
														bind:group={formData.cleanupNeeded}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('legalNeed')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Need <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Draft', 'Review', 'Notice support'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="legalNeed"
														value={option}
														bind:group={formData.legalNeed}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('documentType')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Document type <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['NDA', 'MSA', 'SoW', 'Vendor', 'Employment', 'Website terms', 'Privacy', 'Other'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="documentType"
														value={option}
														bind:group={formData.documentType}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('legalTimeline')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Timeline <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Today', 'This week', 'Next week'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="legalTimeline"
														value={option}
														bind:group={formData.legalTimeline}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('uaeActivity')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Activity <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Consultancy', 'Trading', 'E-commerce', 'Other'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="uaeActivity"
														value={option}
														bind:group={formData.uaeActivity}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('canTravel')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Can you travel to Dubai in next 2–3 weeks? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="canTravel"
														value={option}
														bind:group={formData.canTravel}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('passportValidity')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Passport validity <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['6+ months', 'Less'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="passportValidity"
														value={option}
														bind:group={formData.passportValidity}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('priorUaeEntry')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Prior UAE entry? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="priorUaeEntry"
														value={option}
														bind:group={formData.priorUaeEntry}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('incorporatedAsPrivtLtd')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Incorporated as Pvt Ltd / LLP? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="incorporatedAsPrivtLtd"
														value={option}
														bind:group={formData.incorporatedAsPrivtLtd}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('websiteAppLink')}
									<label for="websiteAppLink" class="block text-sm font-semibold text-slate-900">
										Website/app link available? <span class="text-slate-500">(optional)</span>
									</label>
									<input
										id="websiteAppLink"
										type="text"
										bind:value={formData.websiteAppLink}
										class="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
										placeholder="https://yoursite.com"
									/>
								{/if}

								{#if visibleFields().includes('proofPoints')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Proof points available <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Traction', 'Product docs', 'Customer proof', 'Other'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="checkbox"
														value={option}
														checked={formData.proofPoints.includes(option)}
														onchange={(e) => {
															if (e.currentTarget.checked) {
																formData.proofPoints = [...formData.proofPoints, option];
															} else {
																formData.proofPoints = formData.proofPoints.filter((p) => p !== option);
															}
														}}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('deckAvailable')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Deck available? <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Yes', 'No'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="deckAvailable"
														value={option}
														bind:group={formData.deckAvailable}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('currentWorkspaceType')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Current workspace type <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Virtual', 'None'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="currentWorkspaceType"
														value={option}
														bind:group={formData.currentWorkspaceType}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}

								{#if visibleFields().includes('targetWorkspaceType')}
									<fieldset class="space-y-2">
										<legend class="block text-sm font-semibold text-slate-900">
											Target workspace type <span class="text-red-500">*</span>
										</legend>
										<div class="mt-3 space-y-2">
											{#each ['Seats', 'Managed', 'Lease'] as option (option)}
												<label class="flex items-center gap-3">
													<input
														type="radio"
														name="targetWorkspaceType"
														value={option}
														bind:group={formData.targetWorkspaceType}
														class="accent-orange-500"
													/>
													<span class="text-sm text-slate-700">{option}</span>
												</label>
											{/each}
										</div>
									</fieldset>
								{/if}
							</div>
						{/if}
					{/if}

					<!-- Form navigation buttons -->
					<div class="flex gap-3">
						{#if substep > 0}
							<button
								type="button"
								onclick={prevSubstep}
								class="rounded-lg border border-slate-200 px-4 py-2.5 font-semibold text-slate-900 transition hover:bg-slate-100"
							>
								← Back
							</button>
						{/if}

						{#if substep < 2}
							<button
								type="button"
								onclick={nextSubstep}
								class="flex-1 rounded-lg bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600"
							>
								Next →
							</button>
						{:else}
							<button
								type="submit"
								class="flex-1 rounded-lg bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600"
							>
								Submit & Continue
							</button>
						{/if}
					</div>
				</form>
			</div>
		</section>
	{/if}

	<!-- ═════════════════════════════════════════════════════════════════ -->
	<!-- AFTER SUBMISSION: Checklist section -->
	<!-- ═════════════════════════════════════════════════════════════════ -->
	{#if submitted}
		<section class="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-6 text-3xl font-bold text-slate-900">What to prepare for the call (based on your selection)</h2>

				{#if selectedPath && checklistItems[selectedPath]}
					<ul class="space-y-3">
						{#each checklistItems[selectedPath] as item (item)}
							<li class="flex gap-3">
								<span class="flex-shrink-0 text-lg text-orange-500">✓</span>
								<span class="text-slate-700">{item}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</section>

		<!-- Scheduler placeholder section -->
		<section class="bg-white px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-6 text-3xl font-bold text-slate-900">Pick a time</h2>

				<div class="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
					<p class="text-slate-600">[DEV NOTE: Calendly embed would go here. Link to /book/ confirmation or use embedded widget.]</p>
				</div>

				<div class="mt-6 flex flex-col gap-3 sm:flex-row">
					<button
						class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
						onclick={() => alert('Booking confirmed')}
					>
						Confirm booking
					</button>
					<a
						href="https://wa.me/919876543210"
						target="_blank"
						class="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
					>
						WhatsApp
					</a>
				</div>
			</div>
		</section>

		<!-- What happens next -->
		<section class="bg-slate-900 px-4 py-12 text-white sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-12 text-3xl font-bold">What happens after you book</h2>

				<div class="grid gap-8 sm:grid-cols-2">
					<div class="rounded-lg border border-slate-700 bg-slate-800 p-6">
						<h3 class="mb-2 flex items-center gap-3 text-lg font-semibold">
							<span class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">1</span>
							You get a confirmation + checklist
						</h3>
						<p class="text-slate-300">We send the exact checklist for your selected intent.</p>
					</div>

					<div class="rounded-lg border border-slate-700 bg-slate-800 p-6">
						<h3 class="mb-2 flex items-center gap-3 text-lg font-semibold">
							<span class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">2</span>
							15-minute workflow call
						</h3>
						<p class="text-slate-300">We map the cleanest path, the sequence, and the documents needed.</p>
					</div>

					<div class="rounded-lg border border-slate-700 bg-slate-800 p-6">
						<h3 class="mb-2 flex items-center gap-3 text-lg font-semibold">
							<span class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">3</span>
							You get your action plan + scope
						</h3>
						<p class="text-slate-300">Clear next steps, inclusions/exclusions, timeline expectations, and a quote (where applicable).</p>
					</div>

					<div class="rounded-lg border border-slate-700 bg-slate-800 p-6">
						<h3 class="mb-2 flex items-center gap-3 text-lg font-semibold">
							<span class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">4</span>
							Execution starts (if you proceed)
						</h3>
						<p class="text-slate-300">We activate the service/workspace workflow and keep you updated on milestones.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Trust & safety section -->
		<section class="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-4 text-3xl font-bold text-slate-900">Trust and confidentiality</h2>
				<p class="mb-4 text-slate-700">We treat your documents as confidential and use them only to scope your workflow.</p>
				<p class="text-sm text-slate-600">Already have a CA? We work alongside your CA. We handle workflow coordination and documentation alignment.</p>
			</div>
		</section>

		<!-- Explore first section -->
		<section class="bg-white px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-6 text-3xl font-bold text-slate-900">Prefer to explore first?</h2>

				<div class="flex flex-col gap-3 sm:flex-row">
					<a href="/solutions/" class="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-100">
						Explore Solutions
					</a>
					<a href="/services/" class="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-100">
						Explore Services
					</a>
					<a href="/locations/" class="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-slate-100">
						Explore Locations
					</a>
				</div>
			</div>
		</section>

		<!-- FAQ section -->
		<section class="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h2 class="mb-6 text-3xl font-bold text-slate-900">FAQs</h2>

				<div class="space-y-4">
					{#each faqs as faq, i (i)}
						<div class="rounded-lg border border-slate-200 bg-white p-4">
							<button
								onclick={() => toggleFaq(i)}
								class="flex w-full items-center justify-between text-left font-semibold text-slate-900 transition hover:text-orange-600"
							>
								<span>{faq.q}</span>
								<span class="text-lg">{openFaq === i ? '−' : '+'}</span>
							</button>

							{#if openFaq === i}
								<p class="mt-4 text-sm text-slate-600">{faq.a}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Final CTA section -->
		<section class="bg-slate-900 px-4 py-12 text-white sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="mb-4 text-3xl font-bold">Book your consult</h2>
				<p class="mb-8 text-slate-300">Start the quick questionnaire and pick a time.</p>

				<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
					<button
						onclick={resetForm}
						class="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
					>
						Start questionnaire
					</button>
					<a
						href="https://wa.me/919876543210"
						target="_blank"
						class="rounded-lg border border-white px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
					>
						WhatsApp
					</a>
				</div>
			</div>
		</section>
	{/if}
</div>
