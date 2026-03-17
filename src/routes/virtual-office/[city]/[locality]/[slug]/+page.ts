/**
 * +page.ts — /virtual-office/[city]/[locality]/[slug]/
 *
 * FRONTEND NOTE:
 * Universal load (SSR + CSR). Centre data is placeholder for demo.
 * In production:
 *   - Switch to +page.server.ts
 *   - Query CMS/DB: GET /api/centres/{slug}
 *   - Return 404 error() if slug not found
 *
 * BACKEND NOTE:
 * Minimum CMS fields recommended:
 *   CenterName, City, State, Locality, FullAddress, NearestLandmark,
 *   MapLink, CommuteNotes, ParkingAvailability, StartingPrice,
 *   PlanTiers[], DocumentPackIncluded, SignageIncluded,
 *   DeliveryTimeline, VerificationSupport,
 *   MailHandling, Reception, MeetingRooms, AddOns[].
 *
 * SEO NOTE:
 * For static prerendering of known centre slugs, add:
 *   export const prerender = true;
 *   export function entries() { return knownSlugs.map(s => ({ city, locality, slug: s })); }
 */

import type { PageLoad } from './$types';

export interface PlanTier {
	name: string;
	price: string;
	inclusions: string;
}

export interface CentreSnapshot {
	address: string;
	nearestLandmark: string;
	mailHandling: boolean;
	reception: boolean;
	meetingRooms: boolean;
}

function formatSlug(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

// BACKEND NOTE: Replace with CMS/DB lookup in production.
// These plan tiers are illustrative placeholders.
const defaultPlanTiers: PlanTier[] = [
	{
		name: 'Basic',
		price: '₹8,000',
		inclusions: 'Business address, rent agreement, owner NOC, recent utility bill'
	},
	{
		name: 'Standard',
		price: '₹10,500',
		inclusions: 'Basic + signage at premises + mail handling (as applicable)'
	},
	{
		name: 'Premium',
		price: '₹14,000',
		inclusions: 'Standard + reception support + meeting room access — 4 hrs/month (as applicable)'
	}
];

export const load: PageLoad = ({ params }) => {
	const { city, locality, slug } = params;

	const cityName = formatSlug(city);
	const localityName = formatSlug(locality);
	// Derive a readable centre name from the slug.
	// In production this comes from CMS — do not rely on slug formatting.
	const centerName = formatSlug(slug);

	// BACKEND NOTE: Replace all placeholder values below with real CMS data.
	const snapshot: CentreSnapshot = {
		address: `[Full address — ${localityName}, ${cityName}]`,
		nearestLandmark: `[Nearest metro / landmark — ${localityName}]`,
		mailHandling: true,
		reception: false,
		meetingRooms: true
	};

	return {
		city,
		locality,
		slug,
		cityName,
		localityName,
		centerName,
		state: '', // BACKEND: populate from CMS (e.g. "Karnataka")
		startingPrice: '₹8,000', // BACKEND: CMS-editable per centre
		planTiers: defaultPlanTiers,
		snapshot,
		// BACKEND: populate from CMS — leave empty strings to hide in UI
		commuteNotes: '',
		parkingAvailability: '',
		mapLink: ''
	};
};
