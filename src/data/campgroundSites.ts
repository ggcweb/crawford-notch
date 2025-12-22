export interface CampgroundSite {
    id: string;
    number: string;
    type: 'tent' | 'tent-popup' | 'rv-we' | 'electric' | 'cabin' | 'yurt' | 'group';
    x: number; // SVG viewBox coordinate (0-1000)
    y: number; // SVG viewBox coordinate (0-800)
    width: number; // approximate width for clickable area
    height: number; // approximate height for clickable area
    description: string;
    features: string[];
    area: 'river' | 'central' | 'nature-trails' | 'roadside';
}

// Map dimensions: viewBox="0 0 994 758"
// This matches a typical campground map aspect ratio
export const campgroundSites: CampgroundSite[] = [
    {
        "id": "s1",
        "number": "1",
        "type": "tent",
        "x": 79,
        "y": 295,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Riverside tent site with beautiful water views and morning sun.",
        "features": [
            "River View",
            "Fire Ring",
            "Picnic Table",
            "Shade Trees"
        ]
    },
    {
        "id": "s2",
        "number": "2",
        "type": "tent",
        "x": 110,
        "y": 295,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Secluded tent site nestled among tall pines near the river.",
        "features": [
            "River Access",
            "Fire Ring",
            "Picnic Table",
            "Private"
        ]
    },
    {
        "id": "s3",
        "number": "3",
        "type": "tent",
        "x": 158,
        "y": 300,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Spacious tent or popup site with level ground.",
        "features": [
            "Level Site",
            "Fire Ring",
            "Picnic Table",
            "Near Water"
        ]
    },
    {
        "id": "s4",
        "number": "4",
        "type": "tent",
        "x": 190,
        "y": 299,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Popular riverside camping spot with easy river access.",
        "features": [
            "River View",
            "Fire Ring",
            "Picnic Table",
            "Easy Access"
        ]
    },
    {
        "id": "s45",
        "number": "45",
        "type": "tent",
        "x": 230,
        "y": 283,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Electric site near the river with 30 amp service.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "River Nearby"
        ]
    },
    {
        "id": "s44",
        "number": "44",
        "type": "tent",
        "x": 280,
        "y": 283,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Convenient electric site with good shade coverage.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Shaded"
        ]
    },
    {
        "id": "s43",
        "number": "43",
        "type": "tent",
        "x": 321,
        "y": 285,
        "width": 35,
        "height": 35,
        "area": "river",
        "description": "RV site with water and electric hookups.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s42a",
        "number": "42A",
        "type": "tent",
        "x": 354,
        "y": 239,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Quiet tent site in a peaceful wooded area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wooded",
            "Quiet"
        ]
    },
    {
        "id": "s42b",
        "number": "42B",
        "type": "tent",
        "x": 338,
        "y": 258,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Adjacent tent site perfect for group camping.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Group Friendly",
            "Wooded"
        ]
    },
    {
        "id": "s42",
        "number": "42",
        "type": "tent",
        "x": 372,
        "y": 265,
        "width": 30,
        "height": 30,
        "area": "river",
        "description": "Electric site with easy access to upper bathhouse.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Near Bathhouse",
            "Picnic Table"
        ]
    },
    {
        "id": "s47",
        "number": "47",
        "type": "tent",
        "x": 381,
        "y": 222,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Full hookup RV site in central location.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Central Location"
        ]
    },
    {
        "id": "s48",
        "number": "48",
        "type": "tent",
        "x": 421,
        "y": 219,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Spacious RV site with level parking pad.",
        "features": [
            "Water",
            "Electric",
            "Level",
            "Fire Ring"
        ]
    },
    {
        "id": "s53",
        "number": "53",
        "type": "tent",
        "x": 455,
        "y": 212,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site near the upper loop.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Loop Access"
        ]
    },
    {
        "id": "s52",
        "number": "52",
        "type": "tent",
        "x": 490,
        "y": 207,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Well-maintained electric site with good drainage.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Good Drainage"
        ]
    },
    {
        "id": "s54",
        "number": "54",
        "type": "tent",
        "x": 520,
        "y": 167,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Premium RV site at the top of the loop with mountain views.",
        "features": [
            "Water",
            "Electric",
            "Mountain View",
            "Fire Ring"
        ]
    },
    {
        "id": "s55a",
        "number": "55A",
        "type": "tent",
        "x": 584,
        "y": 194,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site in a cluster, great for families.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Family Friendly",
            "Near Sites"
        ]
    },
    {
        "id": "s55b",
        "number": "55B",
        "type": "tent",
        "x": 620,
        "y": 195,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Cozy tent site with afternoon shade.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Shaded",
            "Quiet"
        ]
    },
    {
        "id": "s55c",
        "number": "55C",
        "type": "tent",
        "x": 656,
        "y": 194,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site near nature trails entrance.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Trail Access",
            "Wooded"
        ]
    },
    {
        "id": "s55",
        "number": "55",
        "type": "tent",
        "x": 694,
        "y": 189,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site with easy trail access.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Trail Access",
            "Picnic Table"
        ]
    },
    {
        "id": "s104",
        "number": "104",
        "type": "tent",
        "x": 707,
        "y": 163,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Remote tent site deep in the nature area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Secluded",
            "Nature Trails"
        ]
    },
    {
        "id": "s105",
        "number": "105",
        "type": "tent",
        "x": 738,
        "y": 152,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Peaceful tent site surrounded by forest.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wooded",
            "Wildlife Viewing"
        ]
    },
    {
        "id": "s106",
        "number": "106",
        "type": "tent",
        "x": 776,
        "y": 162,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Backcountry-style tent site with hiking access.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Hiking Access",
            "Remote"
        ]
    },
    {
        "id": "s107",
        "number": "107",
        "type": "tent",
        "x": 826,
        "y": 176,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Quiet tent site at the edge of the property.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Edge Site",
            "Private"
        ]
    },
    {
        "id": "s108",
        "number": "108",
        "type": "tent",
        "x": 840,
        "y": 223,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Secluded tent site for nature lovers.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Very Private",
            "Nature Trails"
        ]
    },
    {
        "id": "s46",
        "number": "46",
        "type": "tent",
        "x": 309,
        "y": 366,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Central electric site with easy access to facilities.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Central",
            "Near Bathhouse"
        ]
    },
    {
        "id": "s40",
        "number": "40",
        "type": "tent",
        "x": 354,
        "y": 355,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Popular RV site in the heart of the campground.",
        "features": [
            "Water",
            "Electric",
            "Central",
            "Fire Ring"
        ]
    },
    {
        "id": "s47a",
        "number": "47A",
        "type": "tent",
        "x": 428,
        "y": 258,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site adjacent to RV area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Near Facilities",
            "Level"
        ]
    },
    {
        "id": "s38",
        "number": "38",
        "type": "tent",
        "x": 355,
        "y": 415,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site with good tree coverage.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Shaded",
            "Picnic Table"
        ]
    },
    {
        "id": "s41",
        "number": "41",
        "type": "tent-popup",
        "x": 411,
        "y": 346,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Spacious RV site with full hookups.",
        "features": [
            "Water",
            "Electric",
            "Spacious",
            "Fire Ring"
        ]
    },
    {
        "id": "s39",
        "number": "39",
        "type": "tent",
        "x": 414,
        "y": 421,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Well-positioned electric site near the loop.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Good Location"
        ]
    },
    {
        "id": "s66",
        "number": "66",
        "type": "tent",
        "x": 475,
        "y": 376,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site near the dry riverbed.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Riverbed View",
            "Wooded"
        ]
    },
    {
        "id": "s65",
        "number": "65",
        "type": "tent-popup",
        "x": 430,
        "y": 389,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Quiet tent site with natural surroundings.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Natural Setting",
            "Quiet"
        ]
    },
    {
        "id": "s67",
        "number": "67",
        "type": "tent",
        "x": 450,
        "y": 416,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent or popup site in central area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Central",
            "Level"
        ]
    },
    {
        "id": "s49",
        "number": "49",
        "type": "tent-popup",
        "x": 437,
        "y": 289,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "RV site on the inner loop with easy maneuvering.",
        "features": [
            "Water",
            "Electric",
            "Easy Access",
            "Fire Ring"
        ]
    },
    {
        "id": "s50",
        "number": "50",
        "type": "tent-popup",
        "x": 452,
        "y": 341,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Full hookup RV site with level pad.",
        "features": [
            "Water",
            "Electric",
            "Level",
            "Fire Ring"
        ]
    },
    {
        "id": "s51",
        "number": "51",
        "type": "tent-popup",
        "x": 467,
        "y": 276,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site perfect for smaller RVs or campers.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Compact",
            "Picnic Table"
        ]
    },
    {
        "id": "s56",
        "number": "56",
        "type": "tent",
        "x": 491,
        "y": 336,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Premium RV site with mountain views.",
        "features": [
            "Water",
            "Electric",
            "Mountain View",
            "Fire Ring"
        ]
    },
    {
        "id": "s58",
        "number": "58",
        "type": "tent",
        "x": 517,
        "y": 360,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site near the center of the loop.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Central",
            "Picnic Table"
        ]
    },
    {
        "id": "s57",
        "number": "57",
        "type": "tent-popup",
        "x": 534,
        "y": 310,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Well-maintained electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Clean"
        ]
    },
    {
        "id": "s59",
        "number": "59",
        "type": "tent",
        "x": 576,
        "y": 305,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "RV site with full amenities.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s61",
        "number": "61",
        "type": "tent",
        "x": 591,
        "y": 354,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site near nature trails.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Trail Access",
            "Picnic Table"
        ]
    },
    {
        "id": "s60",
        "number": "60",
        "type": "tent",
        "x": 546,
        "y": 398,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Convenient electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Good Access"
        ]
    },
    {
        "id": "s68",
        "number": "68",
        "type": "tent-popup",
        "x": 491,
        "y": 402,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site in a peaceful setting.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Peaceful",
            "Wooded"
        ]
    },
    {
        "id": "s62",
        "number": "62",
        "type": "group",
        "x": 618,
        "y": 380,
        "width": 50,
        "height": 50,
        "area": "central",
        "description": "Large group camping area perfect for gatherings and events.",
        "features": [
            "Multiple Fire Rings",
            "Large Area",
            "Group Pavilion",
            "Picnic Tables",
            "Water Access"
        ]
    },
    {
        "id": "s63",
        "number": "63",
        "type": "tent-popup",
        "x": 570,
        "y": 427,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "RV site near the nature trails entrance.",
        "features": [
            "Water",
            "Electric",
            "Trail Access",
            "Fire Ring"
        ]
    },
    {
        "id": "s63a",
        "number": "63A",
        "type": "tent",
        "x": 593,
        "y": 472,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site adjacent to RV area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Near Trails",
            "Wooded"
        ]
    },
    {
        "id": "s64",
        "number": "64",
        "type": "tent-popup",
        "x": 634,
        "y": 458,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site at the edge of central area.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Edge Site"
        ]
    },
    {
        "id": "s103",
        "number": "103",
        "type": "tent",
        "x": 733,
        "y": 220,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site in the nature trails section.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Trail Access",
            "Wooded"
        ]
    },
    {
        "id": "s102",
        "number": "102",
        "type": "tent",
        "x": 716,
        "y": 258,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Secluded tent site among the pines.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Secluded",
            "Pine Forest"
        ]
    },
    {
        "id": "s101",
        "number": "101",
        "type": "tent",
        "x": 803,
        "y": 249,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Nature-focused tent site with hiking nearby.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Hiking",
            "Wildlife"
        ]
    },
    {
        "id": "s100",
        "number": "100",
        "type": "tent",
        "x": 696,
        "y": 287,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Peaceful tent site in natural setting.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Natural",
            "Quiet"
        ]
    },
    {
        "id": "s99",
        "number": "99",
        "type": "tent",
        "x": 833,
        "y": 270,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Remote tent site for solitude seekers.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Remote",
            "Private"
        ]
    },
    {
        "id": "s98",
        "number": "98",
        "type": "tent",
        "x": 727,
        "y": 320,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site along the nature trail loop.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Trail Loop",
            "Shaded"
        ]
    },
    {
        "id": "s97",
        "number": "97",
        "type": "tent",
        "x": 812,
        "y": 302,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Wooded tent site with natural beauty.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wooded",
            "Scenic"
        ]
    },
    {
        "id": "s96",
        "number": "96",
        "type": "tent",
        "x": 720,
        "y": 355,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site in dense forest area.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Dense Forest",
            "Cool"
        ]
    },
    {
        "id": "s95",
        "number": "95",
        "type": "tent",
        "x": 799,
        "y": 333,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Nature trails tent site with bird watching.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Bird Watching",
            "Nature"
        ]
    },
    {
        "id": "s94",
        "number": "94",
        "type": "tent",
        "x": 683,
        "y": 387,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site perfect for nature photography.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Scenic",
            "Photography"
        ]
    },
    {
        "id": "s93",
        "number": "93",
        "type": "tent",
        "x": 782,
        "y": 385,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Quiet tent site in the woods.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Quiet",
            "Wooded"
        ]
    },
    {
        "id": "s92",
        "number": "92",
        "type": "tent",
        "x": 827,
        "y": 367,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site with afternoon shade.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Shaded",
            "Cool"
        ]
    },
    {
        "id": "s91",
        "number": "91",
        "type": "tent",
        "x": 877,
        "y": 372,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Secluded tent site away from main areas.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Secluded",
            "Private"
        ]
    },
    {
        "id": "s90",
        "number": "90",
        "type": "tent",
        "x": 923,
        "y": 392,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site near the southern trail entrance.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Trail Access",
            "Wooded"
        ]
    },
    {
        "id": "s89",
        "number": "89",
        "type": "tent",
        "x": 955,
        "y": 439,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Nature area tent site with wildlife viewing.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wildlife",
            "Nature"
        ]
    },
    {
        "id": "s88",
        "number": "88",
        "type": "tent",
        "x": 952,
        "y": 484,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site in peaceful forest setting.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Forest",
            "Peaceful"
        ]
    },
    {
        "id": "s80",
        "number": "80",
        "type": "tent",
        "x": 679,
        "y": 442,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Southern tent site near trails.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Trail Access",
            "Quiet"
        ]
    },
    {
        "id": "s81",
        "number": "81",
        "type": "tent-popup",
        "x": 689,
        "y": 465,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site at the southern edge.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Edge Site",
            "Private"
        ]
    },
    {
        "id": "s82",
        "number": "82",
        "type": "tent-popup",
        "x": 722,
        "y": 491,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Wooded tent site with natural surroundings.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wooded",
            "Natural"
        ]
    },
    {
        "id": "s83",
        "number": "83",
        "type": "tent-popup",
        "x": 757,
        "y": 519,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site near the property boundary.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Boundary",
            "Quiet"
        ]
    },
    {
        "id": "s84",
        "number": "84",
        "type": "tent",
        "x": 806,
        "y": 545,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Secluded southern tent site.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Secluded",
            "Wooded"
        ]
    },
    {
        "id": "s85",
        "number": "85",
        "type": "tent",
        "x": 846,
        "y": 550,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Tent site with natural privacy.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Private",
            "Natural"
        ]
    },
    {
        "id": "s86",
        "number": "86",
        "type": "tent-popup",
        "x": 894,
        "y": 552,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Peaceful tent site in the woods.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Peaceful",
            "Wooded"
        ]
    },
    {
        "id": "s87",
        "number": "87",
        "type": "tent",
        "x": 938,
        "y": 560,
        "width": 30,
        "height": 30,
        "area": "nature-trails",
        "description": "Remote tent site for nature lovers.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Remote",
            "Nature"
        ]
    },
    {
        "id": "cabin10",
        "number": "10",
        "type": "cabin",
        "x": 117,
        "y": 448,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Convenient RV site near the general store and main bathhouse.",
        "features": [
            "Water",
            "Electric",
            "Near Store",
            "Near Bathhouse",
            "Fire Ring"
        ]
    },
    {
        "id": "s16a",
        "number": "16A",
        "type": "tent",
        "x": 232,
        "y": 441,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Tent site close to facilities.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Near Facilities",
            "Convenient"
        ]
    },
    {
        "id": "s16b",
        "number": "16B",
        "type": "tent",
        "x": 267,
        "y": 476,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Tent site with easy store access.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Near Store",
            "Easy Access"
        ]
    },
    {
        "id": "s12",
        "number": "12",
        "type": "rv-we",
        "x": 199,
        "y": 521,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site along the main road with full hookups.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Road Access"
        ]
    },
    {
        "id": "s14",
        "number": "14",
        "type": "rv-we",
        "x": 221,
        "y": 523,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Full hookup RV site near entrance.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Near Entrance"
        ]
    },
    {
        "id": "s18",
        "number": "18",
        "type": "rv-we",
        "x": 242,
        "y": 526,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Electric site along the access road.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Road Access"
        ]
    },
    {
        "id": "s20",
        "number": "20",
        "type": "rv-we",
        "x": 256,
        "y": 526,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Roadside electric site with easy access.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Easy Access"
        ]
    },
    {
        "id": "s22",
        "number": "22",
        "type": "rv-we",
        "x": 274,
        "y": 526,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site with convenient location.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Convenient"
        ]
    },
    {
        "id": "s27",
        "number": "27",
        "type": "tent",
        "x": 346,
        "y": 461,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Electric site near the dump station.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Near Dump Station",
            "Picnic Table"
        ]
    },
    {
        "id": "s28",
        "number": "28",
        "type": "tent",
        "x": 320,
        "y": 474,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Convenient electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Convenient"
        ]
    },
    {
        "id": "s29",
        "number": "29",
        "type": "tent",
        "x": 293,
        "y": 499,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site with full amenities.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Full Hookups"
        ]
    },
    {
        "id": "s25",
        "number": "25",
        "type": "tent-popup",
        "x": 372,
        "y": 477,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Electric site near facilities.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Near Facilities"
        ]
    },
    {
        "id": "s24",
        "number": "24",
        "type": "tent",
        "x": 370,
        "y": 507,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Well-positioned electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Good Location"
        ]
    },
    {
        "id": "s23",
        "number": "23",
        "type": "tent",
        "x": 321,
        "y": 519,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site near dump station for easy waste disposal.",
        "features": [
            "Water",
            "Electric",
            "Near Dump Station",
            "Fire Ring"
        ]
    },
    {
        "id": "s69",
        "number": "69",
        "type": "tent-popup",
        "x": 463,
        "y": 452,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site near the dry riverbed.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Riverbed View",
            "Natural"
        ]
    },
    {
        "id": "s70",
        "number": "70",
        "type": "tent",
        "x": 520,
        "y": 423,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Scenic tent site with riverbed access.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Scenic",
            "Riverbed Access"
        ]
    },
    {
        "id": "s71",
        "number": "71",
        "type": "tent",
        "x": 532,
        "y": 452,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent or popup site in natural setting.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Natural Setting",
            "Level"
        ]
    },
    {
        "id": "s74",
        "number": "74",
        "type": "tent-popup",
        "x": 552,
        "y": 472,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site near the riverbed.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Riverbed View"
        ]
    },
    {
        "id": "s75",
        "number": "75",
        "type": "tent",
        "x": 529,
        "y": 491,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Central electric site with good access.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Central"
        ]
    },
    {
        "id": "s72",
        "number": "72",
        "type": "tent",
        "x": 475,
        "y": 509,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site in peaceful location.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Peaceful",
            "Wooded"
        ]
    },
    {
        "id": "s73",
        "number": "73",
        "type": "tent-popup",
        "x": 510,
        "y": 514,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Wooded tent site near riverbed.",
        "features": [
            "Fire Ring",
            "Picnic Table",
            "Wooded",
            "Riverbed Nearby"
        ]
    },
    {
        "id": "s33",
        "number": "33",
        "type": "tent",
        "x": 432,
        "y": 490,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Electric site in lower central area.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Central"
        ]
    },
    {
        "id": "s32",
        "number": "32",
        "type": "tent",
        "x": 444,
        "y": 516,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Well-maintained electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Maintained"
        ]
    },
    {
        "id": "s31",
        "number": "31",
        "type": "tent",
        "x": 437,
        "y": 540,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "RV site in lower section.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Good Access"
        ]
    },
    {
        "id": "s30",
        "number": "30",
        "type": "tent",
        "x": 403,
        "y": 538,
        "width": 35,
        "height": 35,
        "area": "central",
        "description": "Full hookup RV site.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Full Hookups"
        ]
    },
    {
        "id": "cabin4",
        "number": "4",
        "type": "cabin",
        "x": 121,
        "y": 549,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Roadside RV site with easy highway access.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Highway Access"
        ]
    },
    {
        "id": "cabin1",
        "number": "1",
        "type": "cabin",
        "x": 193,
        "y": 448,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Cabin with easy highway access.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Highway Access"
        ]
    },
    {
        "id": "cabin2",
        "number": "2",
        "type": "cabin",
        "x": 168,
        "y": 438,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Cabin with easy highway access.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Highway Access"
        ]
    },
    {
        "id": "cabin3",
        "number": "3",
        "type": "cabin",
        "x": 199,
        "y": 482,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Roadside RV site with easy highway access.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Highway Access"
        ]
    },
    {
        "id": "s5",
        "number": "5",
        "type": "cabin",
        "x": 145,
        "y": 550,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site along the main road.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Road Access"
        ]
    },
    {
        "id": "s6",
        "number": "6",
        "type": "cabin",
        "x": 168,
        "y": 550,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Electric site near the entrance.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Near Entrance"
        ]
    },
    {
        "id": "s7",
        "number": "7",
        "type": "cabin",
        "x": 187,
        "y": 550,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Roadside electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Road Access"
        ]
    },
    {
        "id": "s8",
        "number": "8",
        "type": "cabin",
        "x": 210,
        "y": 548,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site with convenient road access.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Convenient"
        ]
    },
    {
        "id": "s9",
        "number": "9",
        "type": "cabin",
        "x": 232,
        "y": 549,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "Full hookup RV site near facilities.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Near Facilities"
        ]
    },
    {
        "id": "s17",
        "number": "17",
        "type": "electric",
        "x": 249,
        "y": 548,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Electric site along Route 302.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Road Access"
        ]
    },
    {
        "id": "s19",
        "number": "19",
        "type": "electric",
        "x": 266,
        "y": 549,
        "width": 30,
        "height": 30,
        "area": "roadside",
        "description": "Roadside electric site.",
        "features": [
            "30 Amp",
            "Fire Ring",
            "Picnic Table",
            "Easy Access"
        ]
    },
    {
        "id": "s21",
        "number": "21",
        "type": "electric",
        "x": 284,
        "y": 548,
        "width": 35,
        "height": 35,
        "area": "roadside",
        "description": "RV site with highway convenience.",
        "features": [
            "Water",
            "Electric",
            "Fire Ring",
            "Highway Access"
        ]
    },
    {
        "id": "s105b",
        "number": "105B",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 105B.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s109",
        "number": "109",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 109.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s110",
        "number": "110",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 110.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s111",
        "number": "111",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 111.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s112",
        "number": "112",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 112.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s47b",
        "number": "47B",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 47B.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    },
    {
        "id": "s55d",
        "number": "55D",
        "type": "tent",
        "x": 100,
        "y": 100,
        "width": 30,
        "height": 30,
        "area": "central",
        "description": "Tent site 55D.",
        "features": [
            "Fire Ring",
            "Picnic Table"
        ]
    }
];

// Helper function to get site type display name
export function getSiteTypeLabel(type: CampgroundSite['type']): string {
    switch (type) {
        case 'tent': return 'Tent Site';
        case 'tent-popup': return 'Tent/Popup Site';
        case 'rv-we': return 'RV Site (W/E)';
        case 'electric': return 'Electric Site';
        case 'cabin': return 'Cabin';
        case 'yurt': return 'Yurt';
        case 'group': return 'Group Site';
        default: return 'Campsite';
    }
}

// Helper function to get site type color
export function getSiteTypeColor(type: CampgroundSite['type']): string {
    switch (type) {
        case 'tent': return '#2D5016'; // forest green
        case 'tent-popup': return '#4A7C2C'; // lighter green
        case 'rv-we': return '#1E40AF'; // blue
        case 'electric': return '#EA580C'; // orange
        case 'cabin': return '#92400E'; // brown
        case 'yurt': return '#7C3AED'; // purple
        case 'group': return '#DC2626'; // red
        default: return '#2D5016';
    }
}
