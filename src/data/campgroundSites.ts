// Site data sourced from crawfordnotchcamping.com/campsite_map.php and the
// per-site detail pages under /CNCsites/*.html. The x/y values are positions on
// the campground map image (viewBox 0 0 994 758); all other fields mirror the
// real listing for each site.

export type SiteType = 'tent' | 'tent-popup' | 'rv-we' | 'rv-electric' | 'cabin' | 'yurt' | 'group';
export type Area = 'river' | 'central' | 'nature-trails' | 'roadside';

export interface CampgroundSite {
    id: string;
    number: string;
    type: SiteType;
    x: number;
    y: number;
    area: Area;
    siteClass: string;
    detailUrl: string;
    capacity?: string;
    beds?: string;
    parking?: string;
    carryInCarryOut?: boolean | string;
    maxTrailerLength?: string;
    maxMotorhomeLength?: string;
    amenities: string[];
    note?: string;
}

const BASE = 'https://crawfordnotchcamping.com/CNCsites';

function urlFor(number: string, type: SiteType): string {
    const n = number.toLowerCase();
    if (type === 'cabin') return `${BASE}/cabin${n}.html`;
    if (type === 'yurt') return `${BASE}/yurt${n}.html`;
    if (type === 'rv-we' || type === 'rv-electric') return `${BASE}/rv_${n}.html`;
    return `${BASE}/site${n}.html`;
}

function mk(base: Omit<CampgroundSite, 'detailUrl'>): CampgroundSite {
    return { ...base, detailUrl: urlFor(base.number, base.type) };
}

// Parking phrasings used across the listing
const P_2ND = 'Second car on site (additional fee)';
const P_ONE_REMOTE = 'One car on site; second car remote (additional fee)';
const P_DRIVEUP2 = 'Drive-up with parking for 2 cars';
const P_REMOTE = 'Second car remote parking (additional fee)';
const P_ONE = 'Parking for one car';
const P_PRIOR = 'Second car parking (prior notice & additional fee)';
const P_FIVE = 'Parking for 5 cars';

const FIRE = 'Fire Ring with Grill';
const CHARCOAL = 'Charcoal Grill';

function stdTent(id: string, number: string, x: number, y: number, area: Area): CampgroundSite {
    return mk({ id, number, type: 'tent', x, y, area, siteClass: 'Tent Site', parking: P_2ND, amenities: [FIRE] });
}

function puTent(id: string, number: string, x: number, y: number, area: Area): CampgroundSite {
    return mk({ id, number, type: 'tent-popup', x, y, area, siteClass: 'Tent / Pop-Up Site', parking: P_2ND, amenities: [FIRE] });
}

function cabin(
    id: string,
    number: string,
    x: number,
    y: number,
    rooms: 'One-Room' | 'Two-Room',
    beds: string,
    parking: string,
    petFriendly = false,
): CampgroundSite {
    return mk({
        id,
        number,
        type: 'cabin',
        x,
        y,
        area: 'roadside',
        siteClass: petFriendly ? `Pet-Friendly ${rooms} Cabin` : `${rooms} Cabin`,
        beds,
        parking,
        amenities: [CHARCOAL, FIRE],
    });
}

function rv(id: string, number: string, x: number, y: number, electric: boolean): CampgroundSite {
    return mk({
        id,
        number,
        type: electric ? 'rv-electric' : 'rv-we',
        x,
        y,
        area: 'roadside',
        siteClass: electric ? 'RV Site — Electric' : 'RV Site — Water & Electric',
        parking: P_REMOTE,
        maxTrailerLength: '20 feet',
        maxMotorhomeLength: '24 feet',
        amenities: [FIRE],
    });
}

export const campgroundSites: CampgroundSite[] = [
    // --- Riverside prime tent sites ---
    mk({ id: 's1', number: '1', type: 'tent', x: 79, y: 295, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's2', number: '2', type: 'tent', x: 110, y: 295, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's3', number: '3', type: 'tent', x: 158, y: 300, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's4', number: '4', type: 'tent', x: 190, y: 299, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's45', number: '45', type: 'tent', x: 230, y: 283, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's44', number: '44', type: 'tent', x: 280, y: 283, area: 'river', siteClass: 'Prime Tent Site', capacity: '1 large or 2 medium tents', parking: P_2ND, amenities: [FIRE] }),
    mk({ id: 's43', number: '43', type: 'tent', x: 321, y: 285, area: 'river', siteClass: 'Prime Tent Site', capacity: '1 large or 2 medium tents', parking: P_REMOTE, amenities: [FIRE] }),
    mk({ id: 's42a', number: '42A', type: 'tent', x: 354, y: 239, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', parking: P_DRIVEUP2, amenities: [FIRE] }),
    mk({ id: 's42b', number: '42B', type: 'tent', x: 338, y: 258, area: 'river', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', parking: P_DRIVEUP2, amenities: [FIRE] }),
    mk({ id: 's42', number: '42', type: 'tent', x: 372, y: 265, area: 'river', siteClass: 'Prime Riverfront Tent Site', parking: P_REMOTE, amenities: [FIRE] }),

    // --- Central / upper loop prime tent sites ---
    mk({ id: 's47', number: '47', type: 'tent', x: 381, y: 222, area: 'central', siteClass: 'Prime Tent Site', capacity: '1 large or 2 medium tents', carryInCarryOut: true, parking: P_2ND, amenities: [FIRE] }),
    mk({ id: 's48', number: '48', type: 'tent', x: 421, y: 219, area: 'central', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_2ND, amenities: [FIRE] }),
    mk({ id: 's53', number: '53', type: 'tent', x: 455, y: 212, area: 'central', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's52', number: '52', type: 'tent', x: 490, y: 207, area: 'central', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent (room for 1 large & 1 small)', parking: P_ONE, amenities: [], note: 'Usually reserved for 5 nights or longer' }),
    mk({ id: 's54', number: '54', type: 'tent', x: 520, y: 167, area: 'central', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's55a', number: '55A', type: 'tent', x: 584, y: 194, area: 'central', siteClass: 'Prime Tent Site', capacity: '1 large or 2 medium tents', carryInCarryOut: true, parking: P_DRIVEUP2, amenities: [FIRE] }),
    mk({ id: 's55b', number: '55B', type: 'tent', x: 620, y: 195, area: 'central', siteClass: 'Prime Tent Site', capacity: '1 large or 2 medium tents', carryInCarryOut: true, parking: P_DRIVEUP2, amenities: [FIRE] }),
    mk({ id: 's55c', number: '55C', type: 'tent', x: 656, y: 194, area: 'central', siteClass: 'Prime Tent Site', carryInCarryOut: true, parking: P_DRIVEUP2, amenities: [FIRE] }),
    mk({ id: 's55', number: '55', type: 'tent', x: 694, y: 189, area: 'central', siteClass: 'Prime Tent Site', carryInCarryOut: true, parking: P_DRIVEUP2, amenities: [FIRE] }),

    // --- Nature trails prime tent sites ---
    mk({ id: 's104', number: '104', type: 'tent', x: 707, y: 163, area: 'nature-trails', siteClass: 'Prime Tent Site', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's105', number: '105', type: 'tent', x: 738, y: 152, area: 'nature-trails', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's106', number: '106', type: 'tent', x: 776, y: 162, area: 'nature-trails', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's107', number: '107', type: 'tent', x: 826, y: 176, area: 'nature-trails', siteClass: 'Prime Tent Site', capacity: '2 small or 1 medium tent', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's108', number: '108', type: 'tent', x: 840, y: 223, area: 'nature-trails', siteClass: 'Prime Tent Site', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),

    // --- Tent sites with carry-in / room descriptions ---
    mk({ id: 's47a', number: '47A', type: 'tent', x: 428, y: 258, area: 'central', siteClass: 'Tent Site', carryInCarryOut: true, parking: P_ONE_REMOTE, amenities: [FIRE] }),
    mk({ id: 's38', number: '38', type: 'tent', x: 355, y: 415, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 1 medium & 1 small tent', carryInCarryOut: '25 yards', parking: P_PRIOR, amenities: [] }),
    mk({ id: 's39', number: '39', type: 'tent', x: 414, y: 421, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 1 large & 1 medium tent', carryInCarryOut: '20 yards', parking: P_PRIOR, amenities: [] }),
    mk({ id: 's66', number: '66', type: 'tent', x: 475, y: 376, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 2 medium tents', parking: P_ONE, amenities: [] }),
    mk({ id: 's67', number: '67', type: 'tent', x: 450, y: 416, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 1 large & 1 small tent', parking: P_PRIOR, amenities: [] }),
    mk({ id: 's70', number: '70', type: 'tent', x: 520, y: 423, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 1 medium & 1 small tent', carryInCarryOut: '10 yards', parking: P_PRIOR, amenities: [] }),
    mk({ id: 's71', number: '71', type: 'tent', x: 532, y: 452, area: 'central', siteClass: 'Tent Site', capacity: 'Room for 1 large & 1 medium tent', carryInCarryOut: '10 yards', parking: P_PRIOR, amenities: [] }),

    // --- Group site ---
    mk({ id: 's62', number: '62', type: 'group', x: 618, y: 380, area: 'central', siteClass: 'Group Site', capacity: 'Room for 3–4 large & several small tents', carryInCarryOut: true, parking: P_FIVE, amenities: [] }),

    // --- Standard tent sites (second car on site, fire ring) ---
    stdTent('s46', '46', 309, 366, 'central'),
    stdTent('s40', '40', 354, 355, 'central'),
    stdTent('s56', '56', 491, 336, 'central'),
    stdTent('s58', '58', 517, 360, 'central'),
    stdTent('s59', '59', 576, 305, 'central'),
    stdTent('s61', '61', 591, 354, 'central'),
    stdTent('s60', '60', 546, 398, 'central'),
    stdTent('s63a', '63A', 593, 472, 'central'),
    stdTent('s33', '33', 432, 490, 'central'),
    stdTent('s32', '32', 444, 516, 'central'),
    stdTent('s31', '31', 437, 540, 'central'),
    stdTent('s30', '30', 403, 538, 'central'),
    stdTent('s72', '72', 475, 509, 'central'),
    stdTent('s75', '75', 529, 491, 'central'),
    stdTent('s16a', '16A', 232, 441, 'roadside'),
    stdTent('s16b', '16B', 267, 476, 'roadside'),
    stdTent('s27', '27', 346, 461, 'roadside'),
    stdTent('s28', '28', 320, 474, 'roadside'),
    stdTent('s29', '29', 293, 499, 'roadside'),
    stdTent('s24', '24', 370, 507, 'roadside'),
    stdTent('s23', '23', 321, 519, 'roadside'),
    stdTent('s103', '103', 733, 220, 'nature-trails'),
    stdTent('s102', '102', 716, 258, 'nature-trails'),
    stdTent('s101', '101', 803, 249, 'nature-trails'),
    stdTent('s100', '100', 696, 287, 'nature-trails'),
    stdTent('s99', '99', 833, 270, 'nature-trails'),
    stdTent('s98', '98', 727, 320, 'nature-trails'),
    stdTent('s97', '97', 812, 302, 'nature-trails'),
    stdTent('s96', '96', 720, 355, 'nature-trails'),
    stdTent('s95', '95', 799, 333, 'nature-trails'),
    stdTent('s94', '94', 683, 387, 'nature-trails'),
    stdTent('s93', '93', 782, 385, 'nature-trails'),
    stdTent('s92', '92', 827, 367, 'nature-trails'),
    stdTent('s91', '91', 877, 372, 'nature-trails'),
    stdTent('s90', '90', 923, 392, 'nature-trails'),
    stdTent('s89', '89', 955, 439, 'nature-trails'),
    stdTent('s88', '88', 952, 484, 'nature-trails'),
    stdTent('s80', '80', 679, 442, 'nature-trails'),
    stdTent('s84', '84', 806, 545, 'nature-trails'),
    stdTent('s85', '85', 846, 550, 'nature-trails'),
    stdTent('s87', '87', 938, 560, 'nature-trails'),

    // --- Tent / pop-up camper sites ---
    puTent('s41', '41', 411, 346, 'central'),
    puTent('s65', '65', 430, 389, 'central'),
    puTent('s49', '49', 437, 289, 'central'),
    puTent('s50', '50', 452, 341, 'central'),
    puTent('s51', '51', 467, 276, 'central'),
    puTent('s57', '57', 534, 310, 'central'),
    puTent('s68', '68', 491, 402, 'central'),
    puTent('s63', '63', 570, 427, 'central'),
    puTent('s64', '64', 634, 458, 'central'),
    puTent('s69', '69', 463, 452, 'central'),
    puTent('s74', '74', 552, 472, 'central'),
    puTent('s73', '73', 510, 514, 'central'),
    puTent('s25', '25', 372, 477, 'roadside'),
    puTent('s81', '81', 689, 465, 'nature-trails'),
    puTent('s82', '82', 722, 491, 'nature-trails'),
    puTent('s83', '83', 757, 519, 'nature-trails'),
    puTent('s86', '86', 894, 552, 'nature-trails'),

    // --- Cabins ---
    cabin('cabin1', '1', 193, 448, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('cabin2', '2', 168, 438, 'Two-Room', '1 double bed, 2 sets of bunk beds', P_2ND),
    cabin('cabin3', '3', 199, 482, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('cabin4', '4', 121, 549, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE, true),
    cabin('s5', '5', 145, 550, 'Two-Room', '2 double beds, 1 set of bunk beds', P_2ND),
    cabin('s6', '6', 168, 550, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('s7', '7', 187, 550, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('s8', '8', 210, 548, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('s9', '9', 232, 549, 'One-Room', '1 double bed, 1 set of bunk beds', P_ONE_REMOTE),
    cabin('cabin10', '10', 117, 448, 'Two-Room', '2 double beds, 2 sets of bunk beds', P_2ND),

    // --- RV sites ---
    rv('s12', '12', 199, 521, false),
    rv('s14', '14', 221, 523, false),
    rv('s18', '18', 242, 526, false),
    rv('s20', '20', 256, 526, false),
    rv('s22', '22', 274, 526, false),
    rv('s17', '17', 249, 548, true),
    rv('s19', '19', 266, 549, true),
    rv('s21', '21', 284, 548, true),
];

export function getSiteTypeLabel(type: SiteType): string {
    switch (type) {
        case 'tent': return 'Tent Site';
        case 'tent-popup': return 'Tent / Pop-Up Site';
        case 'rv-we': return 'RV Site — Water & Electric';
        case 'rv-electric': return 'RV Site — Electric';
        case 'cabin': return 'Cabin';
        case 'yurt': return 'Yurt';
        case 'group': return 'Group Site';
        default: return 'Campsite';
    }
}

export function getSiteTypeColor(type: SiteType): string {
    switch (type) {
        case 'tent': return '#2d5a27'; // forest green
        case 'tent-popup': return '#4a7c2c'; // lighter green
        case 'rv-we': return '#1e40af'; // blue
        case 'rv-electric': return '#ea580c'; // orange
        case 'cabin': return '#5d3a1e'; // bark brown
        case 'yurt': return '#7c3aed'; // purple
        case 'group': return '#b91c1c'; // red
        default: return '#2d5a27';
    }
}

export function getSiteTypeEmoji(type: SiteType): string {
    switch (type) {
        case 'tent': return '⛺';
        case 'tent-popup': return '🏕️';
        case 'rv-we': return '🚐';
        case 'rv-electric': return '🔌';
        case 'cabin': return '🏠';
        case 'yurt': return '🛖';
        case 'group': return '👥';
        default: return '⛺';
    }
}
