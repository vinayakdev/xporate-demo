<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/routes/solutions/start-a-business-india/+page.svelte   ║
║  URL:   /solutions/start-a-business-india/                         ║
║  ROLE:  Solution page for Company + GST registration bundle        ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · BG rhythm: slate-900 → white → slate-50 → white → slate-50      ║
║    → white → orange-50 → slate-50 → white → slate-900             ║
║  · Cards, buttons, and accordion follow existing patterns           ║
║  · Hero section uses bold typography with trust bullets             ║
║  · FAQ accordion (variant B) with local state management            ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · Uses Svelte 5 runes ($state) for accordion and interactivity     ║
║  · Inline HTML + Tailwind CSS only (no component imports)           ║
║  · SEO: svelte:head with full meta tags and canonical URL           ║
║  · All links use href for navigation                                ║
╠══════════════════════════════════════════════════════════════════════╣
║  CMS NOTES                                                            ║
║  · Pricing tiers and details should be CMS-editable in production   ║
║  · FAQ items can be stored in CMS and pulled dynamically            ║
║  · Trust bullets and card content are hardcoded for MVP             ║
╚══════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
	// ─── FAQ Accordion State ──────────────────────────────────────────
	let openFaqIndex = $state<number | null>(null);

	// ─── Data ─────────────────────────────────────────────────────────
	const trustBullets = [
		'MOA/AOA drafted to match your business model',
		'COI + PAN + TAN included in the incorporation workflow',
		'GST REG-01 filing support post-COI (timeline varies by case)',
		'We handle modern e-KYC / biometric verification requirements (where applicable)',
		'Post-incorporation checklist + guidance for bank-account linking and compliance setup'
	];

	const isRightForYou = [
		{
			title: 'New founders starting their first Pvt Ltd / LLP / OPC',
			desc: 'Get the entity built on clean documentation and a clear sequence (DSC/DIN → name → SPICe+ → GST).'
		},
		{
			title: 'Freelancers / consultants who need GST to bill clients and claim inputs',
			desc: 'GST registration can unlock B2B billing and input credits, if your documentation and place-of-business proofs are aligned.'
		},
		{
			title: 'E-commerce sellers (Amazon / Flipkart) who need GSTIN from day one',
			desc: 'Set up the GST path early so onboarding to platforms isn\'t blocked by paperwork gaps.'
		},
		{
			title: 'Businesses expanding into new states (additional GSTIN needs)',
			desc: 'Plan state expansion with consistent naming + address formats and clear proof-of-business documents.'
		}
	];

	const preventableIssues = [
		'Name/address format mismatch across documents and forms',
		'Utility bill recency or illegibility issues for registered office proof',
		'Missing authorization letter / board resolution for the GST signatory',
		'Incorrect or unclear HSN/SAC mapping (goods/services classification)',
		'Incomplete e-KYC/biometric readiness when requested by the portal/authority'
	];

	const structures = [
		{
			name: 'Private Limited (Pvt Ltd)',
			desc: 'Often chosen for investor readiness, structured ownership, and scale planning.'
		},
		{
			name: 'LLP',
			desc: 'Often chosen for professional services and partner-led businesses that want flexibility with limited liability.'
		},
		{
			name: 'OPC',
			desc: 'Often chosen for solo founders who want a company structure with single ownership.'
		}
	];

	const deliverables = [
		{
			title: 'Company charter + drafting',
			desc: 'Custom-drafted MOA and AOA aligned to your activity.'
		},
		{
			title: 'Legal identity pack',
			desc: 'Certificate of Incorporation (COI) + PAN + TAN.'
		},
		{
			title: 'GST identity pack',
			desc: 'GST Registration Certificate (Form REG-06), once issued by the department.'
		},
		{
			title: 'Pro plan extras (where applicable)',
			desc: 'Permanent signage board, letterhead/logo design support, and bank account assistance.'
		}
	];

	const timeline = [
		{
			phase: 'Phase 1 (Day 1–2)',
			title: 'DSC / DIN',
			desc: 'Securing digital signatures and director IDs for all partners.'
		},
		{
			phase: 'Phase 2 (Day 2–3)',
			title: 'Name reservation',
			desc: 'Reserving a unique company name via the MCA RUN service.'
		},
		{
			phase: 'Phase 3 (Day 4–7)',
			title: 'Filing',
			desc: 'Drafting MOA/AOA and filing SPICe+ Part B for incorporation.'
		},
		{
			phase: 'Phase 4 (Day 8–12)',
			title: 'GST',
			desc: 'Filing GST REG-01 for GSTIN once COI is issued.'
		},
		{
			phase: 'Phase 5 (Ongoing)',
			title: 'Post-incorporation compliance setup',
			desc: 'Linking bank accounts (Rule 10A) and setting up mandatory signage, as applicable.'
		}
	];

	const requirements = [
		{
			title: 'Promoter KYC',
			desc: 'PAN, Aadhaar, and passport-size photos for all directors.'
		},
		{
			title: 'Business proof (registered office)',
			desc: 'Proof of registered office such as an electricity/utility bill (typically not older than ~2 months).'
		},
		{
			title: 'Authorization',
			desc: 'Board resolution or authorization letter for the signatory.'
		},
		{
			title: 'Nature of business',
			desc: 'HSN/SAC codes for goods or services being supplied.'
		}
	];

	const plans = [
		{
			tier: 'Essential (Budget)',
			price: '₹15,000 + GST',
			subtitle: 'Best for founders who want the core setup done correctly with standard support.',
			includes: 'Includes core charter + incorporation workflow + GST documentation support.'
		},
		{
			tier: 'Growth (Standard)',
			price: '₹40,000 + GST',
			subtitle: 'Best for founders who want higher-touch guidance and expanded support.',
			includes: 'Includes everything in Essential + expanded ROC support (as applicable).'
		},
		{
			tier: 'Pro (Premium)',
			price: '₹60,000 + GST',
			subtitle: 'Best for teams moving fast and wanting priority handling + dedicated coordination.',
			includes: 'Includes everything in Growth + dedicated RM + WhatsApp support (scope-based). May include Pro extras like signage board + bank account assistance (as applicable).'
		}
	];

	const scopeIncluded = [
		'Company name reservation (RUN)',
		'MOA and AOA drafting (customized to your business type)',
		'Director + Shareholder KYC documentation',
		'SPICe+ Part B filing (incorporation)',
		'COI, PAN, TAN support post-approval',
		'GST REG-01 filing (post-incorporation)',
		'Post-incorporation checklist + compliance guidance'
	];

	const scopeNotIncluded = [
		'Office space or lease agreement procurement',
		'Government approval guarantee (registrations depend on authority review)',
		'Ongoing compliance retainer (available separately as /services/compliance-management/)',
		'Business license / sector-specific clearances (municipal, environmental, etc.)'
	];

	const faqItems = [
		{
			question: 'How long does company registration typically take?',
			answer: 'The incorporation process typically takes 8–12 business days from filing to COI issuance, depending on portal responsiveness and document completeness. GST registration, once COI is issued, usually takes 3–5 working days but can vary by state.'
		},
		{
			question: 'Do I need an office address before applying for company registration?',
			answer: 'Yes, you need a registered office address for SPICe+ filing. The address must be supported by utility bills, lease agreements, or similar proofs. If you don\'t have a compliant office address, we can help you arrange documentation via /virtual-office/ services.'
		},
		{
			question: 'What if my GST application gets rejected or delayed?',
			answer: 'Delays and rejections are usually due to document mismatches or missing information. Our "one workflow" approach is designed to minimize these issues by aligning COI details with GST submission details upfront. If an issue arises, we\'ll guide you through the remedy process.'
		},
		{
			question: 'Can I apply for GST immediately after getting the COI?',
			answer: 'Yes, we file GST REG-01 immediately after the COI is issued (within the same day, typically). However, GST approval timelines vary by state and authority workload.'
		},
		{
			question: 'What if I already have a company registered elsewhere and want to open a new one in a different state?',
			answer: 'Each company registration is independent. If you\'re expanding into a new state, you\'ll typically register a new company entity in that state. Alternatively, you can register for an additional GSTIN (if you already have a company). We can advise based on your business structure.'
		},
		{
			question: 'Do you guarantee GST approval?',
			answer: 'No, we don\'t guarantee approvals. Registration outcomes depend on your documents, profile, business legitimacy, and the authority\'s checks. Our role is to make your application documentation-ready and reduce preventable mismatches.'
		},
		{
			question: 'What happens after the COI and GST certificate are issued?',
			answer: 'We provide a post-incorporation checklist covering bank account linking (Rule 10A), signage board requirements, filing the first board meeting minutes, updating ROC with registered office proof, and compliance calendar setup. Ongoing compliance is available as a separate retainer.'
		},
		{
			question: 'Do you provide support for sector-specific registrations (like FSSAI for food)?',
			answer: 'We cover standard company + GST registration. Sector-specific registrations (FSSAI, IEC, trademark, etc.) are handled on a case-by-case basis. Reach out via /book/ to discuss your specific needs.'
		}
	];

	const nextSteps = [
		{
			title: 'Set a compliant office address trail (if needed)',
			desc: 'Virtual Office documents and verification readiness where applicable.',
			href: '/virtual-office/'
		},
		{
			title: 'Put compliance on autopilot',
			desc: 'Ongoing filings, calendars, and reminders so the company stays operational.',
			href: '/services/compliance-management/'
		},
		{
			title: 'Protect revenue with contracts',
			desc: 'Client agreements, vendor agreements, and reviews.',
			href: '/services/contract-drafting-review/'
		}
	];

	// ─── Toggle FAQ item ──────────────────────────────────────────────
	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>Start a Business in India | Company + GST Setup | Xporate</title>
	<meta
		name="description"
		content="Start your company + GST in one workflow. Tiers from ₹15,000 + GST. MOA/AOA, COI + PAN/TAN, GSTIN support, and a post-incorporation checklist. Book a consult."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href="https://xporate.in/solutions/start-a-business-india/" />
	<meta property="og:title" content="Start a Business in India | Company + GST Setup | Xporate" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://xporate.in/solutions/start-a-business-india/" />
	<meta
		property="og:description"
		content="Start your company + GST in one workflow. Tiers from ₹15,000 + GST. MOA/AOA, COI + PAN/TAN, GSTIN support, and a post-incorporation checklist. Book a consult."
	/>
</svelte:head>

<!-- ─── HERO SECTION ─────────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<div class="space-y-6">
			<h1 class="text-4xl lg:text-5xl font-bold leading-tight">
				Start a business in India—company + GST, aligned from day one
			</h1>
			<p class="text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
				Go from idea → bank-ready legal entity with a single workflow. We bundle incorporation + GST readiness so your entity details stay consistent and you reduce preventable delays.
			</p>
			<p class="text-sm text-slate-400">
				Company Incorporation (MCA) + GSTIN (Form REG-06) + Post-incorporation checklist
			</p>
		</div>

		<!-- Trust bullets -->
		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
			{#each trustBullets as bullet (bullet)}
				<div class="flex gap-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<p class="text-slate-300 text-sm lg:text-base">{bullet}</p>
				</div>
			{/each}
		</div>

		<!-- Compliance note -->
		<div class="mt-12 bg-slate-800 rounded-lg p-6 max-w-3xl">
			<p class="text-sm text-slate-300">
				<strong>Compliance note:</strong> We don't guarantee approvals. Registration outcomes depend on your documents, profile, and the authority's checks. Our role is to make your application documentation-ready and reduce preventable mismatches.
			</p>
		</div>

		<!-- CTAs -->
		<div class="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/services/company-gst-registration/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				See plans & inclusions →
			</a>
		</div>
	</div>
</section>

<!-- ─── IS THIS RIGHT FOR YOU? ──────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Is this the right solution for you?</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each isRightForYou as card (card.title)}
				<div class="border border-slate-200 rounded-lg p-8 hover:border-slate-400 transition">
					<h3 class="text-lg font-semibold mb-4 text-slate-900">{card.title}</h3>
					<p class="text-slate-700 leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── WHY BUNDLING REDUCES DELAYS ────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Why bundling company + GST reduces delays</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			Many delays happen when COI details and GST application details don't match (name formatting, address proofs, signatory authorization, business activity codes). Our "one workflow" approach focuses on alignment so your submissions are consistent across steps.
		</p>

		<h3 class="text-2xl font-bold mb-8">Common preventable issues we design around</h3>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each preventableIssues as issue (issue)}
				<div class="flex gap-4">
					<div class="flex-shrink-0 mt-1">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4v2m0 4v2M3 7h18M3 7a2 2 0 012-2h14a2 2 0 012 2m0 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7" />
						</svg>
					</div>
					<p class="text-slate-700 font-medium">{issue}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── CHOOSE THE RIGHT STRUCTURE ───────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Choose the right structure (quick guidance)</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each structures as struct (struct.name)}
				<div class="border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-4 text-slate-900">{struct.name}</h3>
					<p class="text-slate-700">{struct.desc}</p>
				</div>
			{/each}
		</div>

		<p class="text-sm text-slate-600 mt-12">
			If we publish detailed comparisons later, link them from <a href="/resources/comparisons/" class="text-blue-600 hover:underline">/resources/comparisons/</a>.
		</p>
	</div>
</section>

<!-- ─── WHAT YOU GET (DELIVERABLES) ──────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What you get (deliverables)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each deliverables as item (item.title)}
				<div class="bg-white border border-slate-200 rounded-lg p-8">
					<h3 class="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
					<p class="text-slate-700">{item.desc}</p>
				</div>
			{/each}
		</div>

		<p class="text-sm text-slate-600 mt-12">
			<strong>Note:</strong> Do not promise 'bank account approval.' Use 'assistance' / 'documentation-ready.'
		</p>
	</div>
</section>

<!-- ─── TIMELINE SECTION ─────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">How it works (typical execution timeline)</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Timelines vary by case, portal activity, and authority review. Below is a common sequence:
		</p>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-6">
			{#each timeline as step, idx (step.title)}
				<div class="relative">
					<!-- Timeline line (hidden on last) -->
					{#if idx < timeline.length - 1}
						<div class="hidden md:block absolute top-20 left-full w-full h-1 bg-slate-700 -ml-6"></div>
					{/if}

					<!-- Card -->
					<div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
						<div class="text-sm font-semibold text-blue-400 mb-2">{step.phase}</div>
						<h4 class="text-lg font-bold mb-3">{step.title}</h4>
						<p class="text-slate-400 text-sm">{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── REQUIREMENTS CHECKLIST ───────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What we need from you (requirements checklist)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each requirements as req (req.title)}
				<div class="flex gap-4 items-start">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
							<svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
						</div>
					</div>
					<div>
						<h4 class="font-semibold text-slate-900 mb-1">{req.title}</h4>
						<p class="text-slate-700">{req.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Extra box for virtual office -->
		<div class="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
			<h4 class="font-semibold text-slate-900 mb-2">Don't have a compliant office address yet?</h4>
			<p class="text-slate-700 mb-4">
				If you need a documentation-ready address proof pack, route to the workspace engine: <a href="/virtual-office/" class="text-blue-600 hover:underline">/virtual-office/</a> (existing — India hub). Keep the /virtual-office/ hub canonical as India-wide.
			</p>
		</div>
	</div>
</section>

<!-- ─── PLANS SECTION ────────────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Plans (clear tiers, transparent scope)</h2>

		<p class="text-lg text-slate-700 mb-12 max-w-3xl leading-relaxed">
			Pricing varies by case and add-ons. Government fees and stamp duties are charged on actuals.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
			{#each plans as plan (plan.tier)}
				<div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition">
					<h3 class="text-xl font-bold text-slate-900 mb-2">{plan.tier}</h3>
					<div class="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
					<p class="text-slate-700 mb-4">{plan.subtitle}</p>
					<p class="text-sm text-slate-600">{plan.includes}</p>
				</div>
			{/each}
		</div>

		<!-- GST-only note -->
		<div class="bg-white border border-slate-200 rounded-lg p-6 mb-8">
			<h4 class="font-semibold text-slate-900 mb-2">GST-only pricing (if your entity already exists):</h4>
			<p class="text-slate-700">
				₹12,500 + 18% GST (Essential) | ₹15,000 + 18% GST (Growth) | ₹20,000 + 18% GST (Pro)
			</p>
		</div>

		<!-- Disclaimer -->
		<p class="text-sm text-slate-600 mb-8">
			<strong>Pricing note:</strong> Avoid competitor-style '₹999 + govt fee' bait pricing on this brand. Keep it credibility-first.
		</p>

		<!-- CTAs -->
		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/services/company-gst-registration/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Get pricing & onboarding →
			</a>
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold rounded-lg transition">
				Talk to an expert →
			</a>
		</div>
	</div>
</section>

<!-- ─── SCOPE CLARITY SECTION ────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Scope clarity (so there's no guesswork)</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<!-- Included -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">Included</h3>
				<ul class="space-y-4">
					{#each scopeIncluded as item (item)}
						<li class="flex gap-3">
							<span class="text-green-600 font-bold flex-shrink-0">✓</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Not Included -->
			<div>
				<h3 class="text-xl font-bold text-slate-900 mb-6">Not Included</h3>
				<ul class="space-y-4">
					{#each scopeNotIncluded as item (item)}
						<li class="flex gap-3">
							<span class="text-slate-400 font-bold flex-shrink-0">—</span>
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<p class="text-sm text-slate-600 mt-12">
			<strong>New service:</strong> <a href="/services/compliance-management/" class="text-blue-600 hover:underline">Compliance Management (Retainer)</a>
		</p>
	</div>
</section>

<!-- ─── ALREADY HAVE A CA? ───────────────────────────────────────────────── -->
<section class="bg-orange-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Already have a CA or CS?</h2>

		<p class="text-lg text-slate-700 mb-8 max-w-3xl leading-relaxed">
			No problem. We work alongside your CA/CS. We can handle documentation alignment + execution coordination, while your CA remains your primary advisor.
		</p>

		<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition">
			Book a consult and tell us your current setup →
		</a>
	</div>
</section>

<!-- ─── WHAT FOUNDERS DO NEXT ────────────────────────────────────────────── -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">What most founders do next</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each nextSteps as step (step.href)}
				<a href={step.href} class="block bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-slate-400 transition">
					<h3 class="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
					<p class="text-slate-700 text-sm">{step.desc}</p>
					<div class="mt-4 text-blue-600 font-semibold text-sm">Learn more →</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FAQ SECTION ──────────────────────────────────────────────────────── -->
<section class="bg-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-12">Frequently Asked Questions</h2>

		<div class="space-y-4">
			{#each faqItems as item, idx (item.question)}
				<div class="border border-slate-200 rounded-lg overflow-hidden">
					<button
						onclick={() => toggleFaq(idx)}
						class="w-full px-6 py-4 bg-white hover:bg-slate-50 flex items-center justify-between transition"
					>
						<h3 class="text-base font-semibold text-slate-900 text-left">{item.question}</h3>
						<svg
							class="h-5 w-5 text-slate-500 flex-shrink-0 transition-transform"
							class:rotate-180={openFaqIndex === idx}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</button>

					{#if openFaqIndex === idx}
						<div class="px-6 py-4 bg-slate-50 border-t border-slate-200">
							<p class="text-slate-700 leading-relaxed">{item.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FINAL CTA SECTION ────────────────────────────────────────────────── -->
<section class="bg-slate-900 text-white py-16 lg:py-24">
	<div class="max-w-5xl mx-auto px-6 lg:px-8">
		<h2 class="text-3xl lg:text-4xl font-bold mb-6">Book a consultation</h2>

		<p class="text-lg text-slate-300 mb-12 max-w-3xl leading-relaxed">
			Tell us what you're starting, your target state/city, and your timeline. We'll map the cleanest route and tell you what to do first.
		</p>

		<p class="text-sm text-slate-400 mb-8">
			Share entity type preference (Pvt Ltd/LLP/OPC), number of directors/partners, state, whether GST is needed immediately, and whether you already have an office address proof pack.
		</p>

		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/book/" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
				Book a Consultation →
			</a>
			<a href="/services/company-gst-registration/" class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition">
				See service scope & pricing →
			</a>
		</div>
	</div>
</section>
