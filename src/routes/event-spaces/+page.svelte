<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const eventTypes = [
		{
			title: 'Workshop / training',
			desc: 'Classroom or theatre style with whiteboard/screen options.',
			icon: '🎓',
			cta: 'Find venues →',
			href: '/event-spaces/bangalore/'
		},
		{
			title: 'Meetup / community event',
			desc: 'Networking-friendly space with flexible seating.',
			icon: '🤝',
			cta: 'Find venues →',
			href: '/event-spaces/bangalore/'
		},
		{
			title: 'Corporate offsite',
			desc: 'Professional venue with AV and breakout areas (venue dependent).',
			icon: '🏢',
			cta: 'Find venues →',
			href: '/event-spaces/bangalore/'
		},
		{
			title: 'Product launch / brand event',
			desc: 'Premium space for announcements and press-friendly formats.',
			icon: '🚀',
			cta: 'Find venues →',
			href: '/event-spaces/bangalore/'
		},
		{
			title: 'Panel discussion / talk',
			desc: 'Theatre style seating with mic/speaker setup (venue dependent).',
			icon: '🎤',
			cta: 'Find venues →',
			href: '/event-spaces/bangalore/'
		},
		{
			title: 'Need a smaller room instead?',
			desc: 'For interviews, client meetings, and small sessions.',
			icon: '🚪',
			cta: 'Meeting Rooms →',
			href: '/meeting-rooms/'
		}
	];

	const whyReasons = [
		{
			title: 'Capacity and setup',
			desc: 'Event spaces are built for groups—where meeting rooms may be too small.'
		},
		{
			title: 'Professional experience',
			desc: 'Better seating, better acoustics, and a venue designed for hosting.'
		},
		{
			title: 'Flexible locations',
			desc: 'Pick venues close to your audience or team.'
		}
	];

	const seatingFormats = [
		{ label: 'Theatre style', desc: 'Best for talks, panels, and presentations.' },
		{ label: 'Classroom style', desc: 'Best for trainings and workshops.' },
		{ label: 'Boardroom style', desc: 'Best for leadership offsites and decision-making sessions.' },
		{ label: 'U-shape / collaborative', desc: 'Best for interactive sessions.' },
		{ label: 'Networking / standing setup', desc: 'Best for meetups and community gatherings.' }
	];

	const inclusions = [
		{
			title: 'AV essentials',
			desc: 'Screen/projector options, microphones, speakers (venue dependent).'
		},
		{
			title: 'Wi-Fi and power',
			desc: 'Internet access and power backup (venue dependent).'
		},
		{
			title: 'Front desk and entry support',
			desc: 'Visitor handling policies vary by venue.'
		},
		{
			title: 'Refreshments',
			desc: 'Tea/coffee/water options vary. Catering can be venue-provided or external (policy dependent).'
		}
	];

	const filterTags = [
		'City',
		'Locality',
		'Capacity',
		'Seating style',
		'Screen/projector',
		'Mic/speakers',
		'Stage area',
		'Parking',
		'Near metro',
		'Catering allowed'
	];

	const bookingSteps = [
		{
			step: 1,
			title: 'Share event details',
			desc: 'City, date, start/end time, expected attendees, and setup style.'
		},
		{
			step: 2,
			title: 'Shortlist and confirm availability',
			desc: 'We confirm venue availability and share rules and inclusions.'
		},
		{
			step: 3,
			title: 'Payment and confirmation',
			desc: 'Payment and invoicing follow venue/provider policy. We share terms before you confirm.'
		},
		{
			step: 4,
			title: 'Host your event',
			desc: 'Carry IDs if required and follow venue policies for equipment, vendors, and entry.'
		}
	];

	const otherWorkspaces = [
		{
			title: 'Meeting rooms',
			desc: 'For smaller meetings, interviews, and client sessions.',
			href: '/meeting-rooms/'
		},
		{
			title: 'Day pass',
			desc: 'For individual workspace access for a day.',
			href: '/day-pass/'
		},
		{
			title: 'Coworking space',
			desc: 'For ongoing desks and cabins.',
			href: '/coworking-space/'
		}
	];

	const cities = [
		{ name: 'Bangalore', slug: 'bangalore' },
		{ name: 'Delhi', slug: 'delhi' },
		{ name: 'Gurgaon', slug: 'gurgaon' },
		{ name: 'Noida', slug: 'noida' },
		{ name: 'Mumbai', slug: 'mumbai' },
		{ name: 'Pune', slug: 'pune' },
		{ name: 'Hyderabad', slug: 'hyderabad' },
		{ name: 'Chennai', slug: 'chennai' },
		{ name: 'Kolkata', slug: 'kolkata' },
		{ name: 'Ahmedabad', slug: 'ahmedabad' }
	];

	const faqs: { q: string; a: string }[] = [
		{
			q: 'What types of events can I host?',
			a: 'Workshops, meetups, trainings, offsites, talks, and corporate sessions—subject to venue policy.'
		},
		{
			q: 'How do I choose the right capacity?',
			a: "Share your expected attendee count and setup style. We'll shortlist venues that fit comfortably."
		},
		{
			q: 'Do venues include AV equipment?',
			a: 'Many venues offer screens/projectors and sound equipment, but inclusions vary. Check listing details.'
		},
		{
			q: 'Can I bring my own catering or vendors?',
			a: 'It depends on the venue policy. We confirm rules before you book.'
		},
		{
			q: 'Can I cancel or reschedule?',
			a: 'Cancellation and reschedule terms depend on venue/provider policy. We share terms before you confirm.'
		},
		{
			q: 'I need a private room for a meeting, not an event space. What should I book?',
			a: 'For smaller meetings and client sessions, explore our <a href="/meeting-rooms/" class="text-orange-500 underline">Meeting Rooms</a> instead.'
		}
	];

	const trustBullets = [
		'Filter by capacity, seating style, and equipment',
		'Transparent inclusions and venue rules (shown per listing)',
		'Great for audience events when meeting rooms are too small',
		'Add-on services vary by venue (confirmed before booking)'
	];
</script>

<svelte:head>
	<title>Event Spaces India: Workshops &amp; Corporate Events | Xporate</title>
	<meta
		name="description"
		content="Book event spaces across India for workshops, meetups and corporate sessions. Filter by city, capacity and setup. Transparent inclusions. Quick booking."
	/>
	<link rel="canonical" href="/event-spaces/" />
</svelte:head>

<!-- ═══════════════════════════════════════════
     1. HERO
════════════════════════════════════════════ -->
<section class="bg-slate-900 text-white py-20 px-4">
	<div class="max-w-5xl mx-auto">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Event Spaces India</h1>
		<p class="text-lg md:text-xl text-slate-300 mb-3 max-w-3xl">
			Host your next workshop, meetup, training, or corporate session in a professional venue—without
			committing to long-term leases. Xporate helps you find and book event spaces across India based
			on capacity, location, and setup.
		</p>
		<p class="text-sm text-slate-400 mb-8">
			Workshops • Meetups • Trainings • Corporate sessions • Launch events (inventory dependent)
		</p>
		<div class="flex flex-wrap gap-3 mb-10">
			<a
				href="/event-spaces/bangalore/"
				class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				Browse event spaces by city →
			</a>
			<a
				href="/locations/"
				class="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
			>
				View all locations →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
					/>
					<path
						d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.856L.057 23.215a.75.75 0 0 0 .916.938l5.53-1.453A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 0 1-4.951-1.355l-.355-.21-3.676.965.983-3.588-.231-.369A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"
					/>
				</svg>
				WhatsApp us
			</a>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
			{#each trustBullets as bullet}
				<div
					class="flex items-start gap-2 bg-white/5 rounded-lg px-4 py-3 text-sm text-slate-300"
				>
					<svg
						class="w-4 h-4 text-orange-500 mt-0.5 shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
							clip-rule="evenodd"
						/>
					</svg>
					{bullet}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     2. WHAT ARE YOU HOSTING (Quick Picker)
════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-2">What are you hosting?</h2>
		<p class="text-slate-600 mb-8">Pick your event type so we can shortlist the right setup.</p>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
			{#each eventTypes as type}
				<a
					href={type.href}
					class="group bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-md transition-all flex flex-col gap-3"
				>
					<span class="text-3xl" aria-hidden="true">{type.icon}</span>
					<h3 class="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
						{type.title}
					</h3>
					<p class="text-sm text-slate-600 flex-1">{type.desc}</p>
					<span class="text-sm font-medium text-orange-500 group-hover:text-orange-600"
						>{type.cta}</span
					>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     3. WHY TEAMS BOOK EVENT SPACES
════════════════════════════════════════════ -->
<section class="bg-white py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-8">Why teams book event spaces on-demand</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each whyReasons as reason}
				<div class="bg-slate-50 rounded-xl p-6 border border-slate-100">
					<h3 class="font-semibold text-slate-900 text-lg mb-2">{reason.title}</h3>
					<p class="text-slate-600 text-sm">{reason.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     4. POPULAR SEATING AND SETUP FORMATS
════════════════════════════════════════════ -->
<section class="bg-white py-16 px-4 border-t border-slate-100">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-8">Popular seating and setup formats</h2>
		<div class="flex flex-wrap gap-4">
			{#each seatingFormats as format}
				<div class="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
					<p class="font-semibold text-slate-900 mb-1">{format.label}</p>
					<p class="text-sm text-slate-500">{format.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     5. WHAT'S TYPICALLY INCLUDED
════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-2">What's typically included</h2>
		<p class="text-slate-500 text-sm mb-8">
			Inclusions vary by venue. Your listing/proposal will show inclusions clearly.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
			{#each inclusions as item}
				<div class="bg-white rounded-xl border border-slate-200 p-5">
					<h3 class="font-semibold text-slate-900 mb-1">{item.title}</h3>
					<p class="text-sm text-slate-600">{item.desc}</p>
				</div>
			{/each}
		</div>
		<p class="text-xs text-slate-400 italic">
			Catering, on-site staff, and equipment are confirmed at listing level.
		</p>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     6. FIND EVENT SPACES (Finder section)
════════════════════════════════════════════ -->
<section class="bg-white py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-2">
			Find event spaces by city, capacity, and setup
		</h2>
		<p class="text-slate-600 mb-2">
			Search event spaces across India and shortlist venues that match your format.
		</p>
		<p class="text-sm text-slate-500 mb-6">
			Filter by city/locality, capacity, seating format, and equipment.
		</p>
		<div class="flex flex-wrap gap-2 mb-8">
			{#each filterTags as tag}
				<span
					class="inline-block bg-slate-100 hover:bg-orange-50 hover:border-orange-300 border border-slate-200 text-slate-700 text-sm px-4 py-1.5 rounded-full cursor-pointer transition-colors"
				>
					{tag}
				</span>
			{/each}
		</div>
		<div
			class="bg-slate-50 border border-dashed border-slate-300 rounded-xl py-16 text-center mb-8"
		>
			<p class="text-slate-500 text-sm">Browse by city to see listings</p>
		</div>
		<div class="flex flex-wrap gap-3">
			<a
				href="/event-spaces/bangalore/"
				class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				Browse by city →
			</a>
			<a
				href="/book/"
				class="inline-block bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				Talk to an expert →
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     7. HOW BOOKING WORKS
════════════════════════════════════════════ -->
<section class="bg-slate-900 text-white py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold mb-10">How booking works</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each bookingSteps as item}
				<div class="flex flex-col gap-3">
					<div
						class="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-lg shrink-0"
					>
						{item.step}
					</div>
					<h3 class="font-semibold text-white">{item.title}</h3>
					<p class="text-sm text-slate-400">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     8. NEED A DIFFERENT WORKSPACE?
════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-8">Need a different workspace type?</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
			{#each otherWorkspaces as ws}
				<a
					href={ws.href}
					class="group bg-white border border-slate-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all flex flex-col gap-2"
				>
					<h3 class="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
						{ws.title}
					</h3>
					<p class="text-sm text-slate-600 flex-1">{ws.desc}</p>
					<span class="text-sm font-medium text-orange-500 group-hover:text-orange-600 mt-1"
						>Explore →</span
					>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     9. TOP CITIES
════════════════════════════════════════════ -->
<section class="bg-white py-16 px-4">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-2">Event spaces in top cities</h2>
		<p class="text-slate-600 mb-8">Choose your city to explore localities and venue options.</p>
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
			{#each cities as city}
				<a
					href={`/event-spaces/${city.slug}/`}
					class="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center text-slate-800 font-medium hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700 transition-all text-sm"
				>
					{city.name}
				</a>
			{/each}
		</div>
		<a href="/locations/" class="text-orange-500 hover:text-orange-600 font-medium text-sm">
			View all locations →
		</a>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     10. TRUST / PROOF
════════════════════════════════════════════ -->
<section class="bg-slate-50 py-16 px-4">
	<div class="max-w-5xl mx-auto text-center">
		<h2 class="text-3xl font-bold text-slate-900 mb-8">Built for teams and communities</h2>
		<div
			class="bg-white border border-dashed border-slate-300 rounded-xl py-14 px-6 mb-8 text-slate-400 text-sm"
		>
			[Testimonials, partner logos, and case studies — coming soon]
		</div>
		<a
			href="/case-studies/"
			class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
		>
			Explore case studies →
		</a>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     11. FAQ (Accordion)
════════════════════════════════════════════ -->
<section class="bg-white py-16 px-4">
	<div class="max-w-3xl mx-auto">
		<h2 class="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
		<div class="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
			{#each faqs as faq, i}
				<div>
					<button
						onclick={() => toggleFaq(i)}
						class="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
						aria-expanded={openFaq === i}
					>
						<span class="font-medium text-slate-900">{faq.q}</span>
						<svg
							class="w-5 h-5 text-slate-400 shrink-0 transition-transform {openFaq === i
								? 'rotate-180'
								: ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{#if openFaq === i}
						<div class="px-6 pb-5 text-sm text-slate-600">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html faq.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     12. FINAL CTA
════════════════════════════════════════════ -->
<section class="bg-slate-900 text-white py-20 px-4">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-3xl font-bold mb-4">Book an event space in your city</h2>
		<p class="text-slate-300 mb-8">
			Share your event type, date/time, attendee count, and setup preferences—we'll shortlist
			venues and confirm availability.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href="/event-spaces/bangalore/"
				class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				Browse by city →
			</a>
			<a
				href="/book/"
				class="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
			>
				Book Consultation →
			</a>
			<a
				href="https://wa.me/917060706076"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
					/>
					<path
						d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.856L.057 23.215a.75.75 0 0 0 .916.938l5.53-1.453A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 0 1-4.951-1.355l-.355-.21-3.676.965.983-3.588-.231-.369A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"
					/>
				</svg>
				WhatsApp us
			</a>
		</div>
	</div>
</section>
