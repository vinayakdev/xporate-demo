/**
 * +page.ts — /virtual-office/[city]/
 *
 * FRONTEND NOTE:
 * This load function runs on both server and client (universal load).
 * City data is hardcoded here for the demo. In production:
 *   - Move cityData to a CMS or database
 *   - Replace placeholder centres with real inventory from an API/DB
 *   - Consider switching to +page.server.ts to query inventory server-side
 *
 * BACKEND NOTE:
 * Replace the `centres` array with a real inventory query:
 *   e.g. GET /api/virtual-office?city={city} → { centres: [...] }
 * Each centre should have: name, locality, address, pricePerYear, slug, features[]
 *
 * SEO NOTE:
 * This page uses universal rendering (SSR + CSR hydration).
 * For static prerendering of known cities, add:
 *   export const prerender = true;
 *   export function entries() { return knownCities.map(c => ({ city: c })); }
 */

import type { PageLoad } from './$types';

interface CityData {
	state: string;
	localities: string[];
}

function formatCityName(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

// BACKEND NOTE: Replace with CMS/DB lookup in production.
// Add more cities as inventory grows.
const cityData: Record<string, CityData> = {
	bangalore: {
		state: 'Karnataka',
		localities: [
			'Koramangala',
			'Indiranagar',
			'HSR Layout',
			'Whitefield',
			'MG Road',
			'Marathahalli',
			'Jayanagar',
			'Electronic City',
			'Bellandur',
			'Yelahanka',
			'Rajajinagar',
			'JP Nagar'
		]
	},
	delhi: {
		state: 'Delhi NCR',
		localities: [
			'Connaught Place',
			'Nehru Place',
			'Saket',
			'Janakpuri',
			'Laxmi Nagar',
			'Rohini',
			'Dwarka',
			'Okhla',
			'South Extension',
			'Pitampura',
			'Karol Bagh',
			'Rajouri Garden'
		]
	},
	mumbai: {
		state: 'Maharashtra',
		localities: [
			'Andheri',
			'BKC',
			'Lower Parel',
			'Nariman Point',
			'Powai',
			'Malad',
			'Borivali',
			'Thane',
			'Navi Mumbai',
			'Bandra',
			'Kurla',
			'Goregaon'
		]
	},
	gurgaon: {
		state: 'Haryana',
		localities: [
			'DLF Cyber City',
			'MG Road',
			'Golf Course Road',
			'Sohna Road',
			'Sector 44',
			'Sector 18',
			'Sector 15',
			'Udyog Vihar',
			'Sector 56',
			'South City'
		]
	},
	noida: {
		state: 'Uttar Pradesh',
		localities: [
			'Sector 62',
			'Sector 18',
			'Sector 16',
			'Sector 63',
			'Sector 128',
			'Sector 132',
			'Sector 144',
			'Greater Noida',
			'Sector 2',
			'Sector 58'
		]
	},
	pune: {
		state: 'Maharashtra',
		localities: [
			'Koregaon Park',
			'Hinjewadi',
			'Baner',
			'Hadapsar',
			'Kharadi',
			'Wakad',
			'Viman Nagar',
			'Shivajinagar',
			'Pimpri-Chinchwad',
			'Kalyani Nagar'
		]
	},
	hyderabad: {
		state: 'Telangana',
		localities: [
			'Hitech City',
			'Gachibowli',
			'Madhapur',
			'Banjara Hills',
			'Jubilee Hills',
			'Secunderabad',
			'Kondapur',
			'Nanakramguda',
			'Begumpet',
			'Kukatpally'
		]
	},
	chennai: {
		state: 'Tamil Nadu',
		localities: [
			'T Nagar',
			'Anna Nagar',
			'Adyar',
			'Nungambakkam',
			'OMR',
			'Sholinganallur',
			'Guindy',
			'Velachery',
			'Perungudi',
			'Ambattur'
		]
	},
	kolkata: {
		state: 'West Bengal',
		localities: [
			'Park Street',
			'Salt Lake',
			'Newtown',
			'EM Bypass',
			'Howrah',
			'Alipore',
			'Ballygunge',
			'Camac Street',
			'Rajarhat',
			'Kasba'
		]
	},
	ahmedabad: {
		state: 'Gujarat',
		localities: [
			'Navrangpura',
			'SG Highway',
			'Bodakdev',
			'Vastrapur',
			'Prahladnagar',
			'CG Road',
			'Maninagar',
			'Chandkheda',
			'Satellite',
			'Bopal'
		]
	},
	jaipur: {
		state: 'Rajasthan',
		localities: [
			'C-Scheme',
			'Malviya Nagar',
			'Vaishali Nagar',
			'Tonk Road',
			'MI Road',
			'Bani Park',
			'Mansarovar',
			'Jagatpura'
		]
	},
	kochi: {
		state: 'Kerala',
		localities: [
			'MG Road',
			'Kakkanad',
			'Edapally',
			'Aluva',
			'Marine Drive',
			'Fort Kochi',
			'Thrippunithura',
			'Kalamassery'
		]
	}
};

// BACKEND NOTE: Replace with real inventory query in production.
// Placeholder centres are generated from the first few localities.
// Real data shape: { name, locality, localitySlug, address, pricePerYear, slug, badge? }
function buildPlaceholderCentres(city: string, cityName: string, localities: string[]) {
	const tiers = [
		{ suffix: 'Business Centre', price: '₹8,000', badge: null },
		{ suffix: 'Corporate Hub', price: '₹9,500', badge: 'Popular' },
		{ suffix: 'Premium Suite', price: '₹12,000', badge: null },
		{ suffix: 'Executive Centre', price: '₹15,000', badge: 'Premium' }
	];

	return localities.slice(0, 4).map((locality, i) => ({
		name: `${locality} ${tiers[i].suffix}`,
		locality,
		localitySlug: locality.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
		address: `[Full address — ${locality}, ${cityName}]`,
		pricePerYear: tiers[i].price,
		badge: tiers[i].badge,
		slug: `${locality.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${tiers[i].suffix.toLowerCase().replace(/\s+/g, '-')}`
	}));
}

export const load: PageLoad = ({ params }) => {
	const { city } = params;
	const cityName = formatCityName(city);
	const data = cityData[city] ?? {
		state: '',
		localities: ['Central Business District', 'Business Park', 'Tech Hub', 'Commercial Zone']
	};

	return {
		city,
		cityName,
		state: data.state,
		localities: data.localities,
		centres: buildPlaceholderCentres(city, cityName, data.localities)
	};
};
