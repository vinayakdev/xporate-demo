<!--
╔══════════════════════════════════════════════════════════════════════╗
║  FILE:  src/lib/components/Footer.svelte                            ║
║  ROLE:  Site-wide footer — link columns + brand block + bottom bar  ║
╠══════════════════════════════════════════════════════════════════════╣
║  DESIGNER NOTES                                                      ║
║  · Layout: Brand (2 cols) + Company + Solutions + Workspaces on     ║
║    the top row; Resources + Legal on a second row below a divider.  ║
║  · Mobile: stacks to 2-column grid, then 1-column on small screens. ║
║  · Brand block has CTA buttons (Book + WhatsApp) — these are the    ║
║    same as the header CTAs. Keep styling consistent.                ║
║  · Consider adding social media icons (LinkedIn, Twitter/X) to the  ║
║    brand block once social accounts are confirmed.                  ║
║  · Bottom bar: copyright + tagline. Add registered address/CIN      ║
║    of the entity below the tagline if legally required.             ║
╠══════════════════════════════════════════════════════════════════════╣
║  FRONTEND NOTES                                                      ║
║  · All link arrays are hardcoded. In production, extract to a       ║
║    footer.ts config or load from CMS.                               ║
║  · Copyright year uses new Date().getFullYear() — dynamic, no edit. ║
║  · WhatsApp number: 917060706076 — keep in a shared config file.    ║
╠══════════════════════════════════════════════════════════════════════╣
║  BACKEND / CMS NOTES                                                 ║
║  · Footer links should be manageable from CMS without a redeploy.  ║
║  · "New" pages (e.g., /how-we-work/, /solutions/) need to exist     ║
║    before going live or will return 404.                            ║
║  · Policy pages (/privacy-policy etc.) are listed as existing —     ║
║    confirm they are live before launch.                             ║
╠══════════════════════════════════════════════════════════════════════╣
║  SEO NOTES                                                           ║
║  · Footer links help distribute crawl equity to new pages.          ║
║  · /services/ (new) is not in the footer currently — add once live. ║
╚══════════════════════════════════════════════════════════════════════╝
-->
<script lang="ts">
	const footerCompany = [
		{ label: 'About Us', href: '/about-us' },
		{ label: 'How We Work', href: '/how-we-work/' },
		{ label: 'Case Studies', href: '/case-studies/' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'List Your Space', href: '/list-your-space' }
	];

	const footerSolutions = [
		{ label: 'Solutions Overview', href: '/solutions/' },
		{ label: 'Start a Business (India)', href: '/solutions/start-a-business-india/' },
		{ label: 'Compliance & Governance', href: '/solutions/compliance-governance/' },
		{ label: 'Legal Support', href: '/solutions/legal-support/' },
		{ label: 'Expand to UAE', href: '/solutions/expand-to-uae/' },
		{ label: 'Get Funding-Ready', href: '/solutions/get-funding-ready/' },
		{ label: 'Scale Your Workspace', href: '/solutions/scale-your-workspace/' }
	];

	const footerWorkspaces = [
		{ label: 'Virtual Office', href: '/virtual-office/' },
		{ label: 'Coworking Space', href: '/coworking-space/' },
		{ label: 'Managed Office', href: '/manage-office/' },
		{ label: 'Commercial Leasing', href: '/commercial-leasing/' },
		{ label: 'Meeting Rooms', href: '/meeting-rooms/' },
		{ label: 'Day Pass', href: '/day-pass/' },
		{ label: 'Event Spaces', href: '/event-spaces/' },
		{ label: 'Locations Directory', href: '/locations/' }
	];

	const footerResources = [
		{ label: 'Guides', href: '/blogs/' },
		{ label: 'FAQs', href: '/faqs' },
		{ label: 'Templates & Checklists', href: '/resources/templates/' },
		{ label: 'Comparisons', href: '/resources/comparisons/' }
	];

	const footerPolicies = [
		{ label: 'Privacy Policy', href: '/privacy-policy' },
		{ label: 'Refund Policy', href: '/refund-policy' },
		{ label: 'Terms & Conditions', href: '/terms-and-conditions' },
		{ label: 'Virtual Office Guidelines', href: '/important-guidelines-for-virtual-office' }
	];
</script>

<footer class="bg-slate-900 text-slate-300">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<!-- Top: Brand + columns -->
		<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
			<!-- Brand block -->
			<div class="col-span-2 md:col-span-3 lg:col-span-2">
				<a href="/" class="inline-block">
					<span class="text-2xl font-bold tracking-tight text-white">
						<span class="text-orange-500">X</span>porate
					</span>
				</a>
				<p class="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
					India's workspace marketplace and corporate backbone — helping businesses start, stay
					compliant, and scale.
				</p>
				<div class="mt-5 flex items-center gap-3">
					<a
						href="/book/"
						class="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
					>
						Book Consultation
					</a>
					<a
						href="https://wa.me/917060706076"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1.5 rounded-md bg-[#25d366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
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

			<!-- Company -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-white">Company</h3>
				<ul class="mt-4 space-y-2.5">
					{#each footerCompany as item (item.href)}
						<li>
							<a
								href={item.href}
								class="text-sm text-slate-400 transition hover:text-white"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Solutions -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-white">Solutions</h3>
				<ul class="mt-4 space-y-2.5">
					{#each footerSolutions as item (item.href)}
						<li>
							<a
								href={item.href}
								class="text-sm text-slate-400 transition hover:text-white"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Workspaces -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-white">Workspaces</h3>
				<ul class="mt-4 space-y-2.5">
					{#each footerWorkspaces as item (item.href)}
						<li>
							<a
								href={item.href}
								class="text-sm text-slate-400 transition hover:text-white"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Resources + Policies row -->
		<div class="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-white">Resources</h3>
				<ul class="mt-4 space-y-2.5">
					{#each footerResources as item (item.href)}
						<li>
							<a href={item.href} class="text-sm text-slate-400 transition hover:text-white">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
				<ul class="mt-4 space-y-2.5">
					{#each footerPolicies as item (item.href)}
						<li>
							<a href={item.href} class="text-sm text-slate-400 transition hover:text-white">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div
			class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
		>
			<p class="text-sm text-slate-500">
				© {new Date().getFullYear()} Xporate. All rights reserved.
			</p>
			<p class="text-xs text-slate-600">
				Workspace Marketplace + Corporate Backbone for India
			</p>
		</div>
	</div>
</footer>
