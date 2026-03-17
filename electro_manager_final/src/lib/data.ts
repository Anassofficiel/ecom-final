// ─────────────────────────────────────────────────────────────────────────────
// ELECTRO MANAGER — Central Data Store
// Edit this file to update all products, packs, categories, and promos.
// ─────────────────────────────────────────────────────────────────────────────

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
    hoverImage: string;
    stockStatus: StockStatus;
    inStock: boolean;
    description: string;
    specs?: Record<string, string>;
}

export interface Pack {
    id: string;
    name: string;
    products: string[]; // product names (display only)
    images: string[];   // one image per product in pack
    originalPrice: number;
    packPrice: number;
    discount: number;
    description: string;
    badge?: string;
}

export interface StoreLocation {
    id: string;
    city: string;
    address: string;
    hours: string;
    phone: string;
    mapUrl: string;
}

// ─── Categories ───────────────────────────────────────────────────────────────
export const categories = [
    "Refrigerators",
    "Washing Machines",
    "Televisions",
    "Air Fryers",
    "Coffee Machines",
    "Kitchen Appliances",
    "Ovens",
    "Dishwashers",
    "Small Appliances",
    "Cookware",
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const products: Product[] = [
    // REFRIGERATORS
    { id: "r1", name: "Samsung Bespoke 4-Door Flex 648L", category: "Refrigerators", price: 34999, originalPrice: 38999, discount: 10, rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Customize door colors and enjoy revolutionary multi-zone cooling. Perfect for modern kitchens.", specs: { Capacity: "648 L", "Energy Class": "A+", "No Frost": "Yes", Color: "Customizable" } },
    { id: "r2", name: "LG InstaView Door-in-Door 635L", category: "Refrigerators", price: 28999, originalPrice: 32999, discount: 12, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Knock twice to see inside without opening the door. Linear Cooling for precision temperatures.", specs: { Capacity: "635 L", "Energy Class": "A++", "No Frost": "Yes" } },
    { id: "r3", name: "Bosch Serie 6 French Door 598L", category: "Refrigerators", price: 22499, originalPrice: 25999, discount: 13, rating: 4.6, reviews: 55, image: "https://images.unsplash.com/photo-1620136577534-b4b4e0448dce?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "VitaFresh technology keeps food fresh up to 2x longer with optimal humidity levels.", specs: { Capacity: "598 L", "Energy Class": "A+" } },
    { id: "r4", name: "Whirlpool W9 RE2 Combi 462L", category: "Refrigerators", price: 14999, rating: 4.4, reviews: 40, image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1620136577534-b4b4e0448dce?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "6th Sense FreshControl adapts to your lifestyle and food storage needs.", specs: { Capacity: "462 L", "Energy Class": "A+" } },
    { id: "r5", name: "Haier Quad Door 521L A++", category: "Refrigerators", price: 18499, originalPrice: 21499, discount: 14, rating: 4.3, reviews: 31, image: "https://images.unsplash.com/photo-1584286594519-75691062b322?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Four zones maintain the ideal temperature for different food types.", specs: { Capacity: "521 L", "Energy Class": "A++" } },
    { id: "r6", name: "Siemens IQ500 NoFrost 400L", category: "Refrigerators", price: 16999, originalPrice: 18999, discount: 11, rating: 4.5, reviews: 22, image: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "noFrost technology prevents ice build-up. freshSense sensors react to temperature changes.", specs: { Capacity: "400 L", "Energy Class": "A+" } },
    { id: "r7", name: "AEG RCB83724VX French Door 530L", category: "Refrigerators", price: 24999, originalPrice: 27999, discount: 11, rating: 4.6, reviews: 18, image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1620136577534-b4b4e0448dce?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "CustomFlex drawers adapt to any type of food storage for maximum freshness.", specs: { Capacity: "530 L", "Energy Class": "A+" } },
    { id: "r8", name: "Gorenje NRK6202AXL4 Combi 331L", category: "Refrigerators", price: 8999, originalPrice: 10499, discount: 14, rating: 4.1, reviews: 65, image: "https://images.unsplash.com/photo-1620136577534-b4b4e0448dce?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "FastFreeze and FreshZone plus for rapid freezing and optimal vegetable storage.", specs: { Capacity: "331 L", "Energy Class": "A+" } },
    { id: "r9", name: "Beko BFFD7563W 4-Door 545L", category: "Refrigerators", price: 21999, originalPrice: 24499, discount: 10, rating: 4.4, reviews: 44, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "NeoFrost dual cooling keeps fridge and freezer humidity separate for fresher food.", specs: { Capacity: "545 L", "Energy Class": "A" } },
    { id: "r10", name: "Hisense RS818N4TFE Side-by-Side 632L", category: "Refrigerators", price: 19999, originalPrice: 22999, discount: 13, rating: 4.2, reviews: 38, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1620136577534-b4b4e0448dce?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Side-by-side design with Holiday Mode and Total No Frost for flexible family storage.", specs: { Capacity: "632 L", "Energy Class": "E" } },

    // WASHING MACHINES
    { id: "w1", name: "LG Vivace AI DD 10.5kg Front Load", category: "Washing Machines", price: 8499, originalPrice: 9999, discount: 15, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "AI DD detects fabric weight and softness for intelligent, gentle washing.", specs: { Capacity: "10.5 kg", RPM: "1400", "Energy Class": "A" } },
    { id: "w2", name: "Samsung EcoBubble 9kg Front Load", category: "Washing Machines", price: 6999, originalPrice: 7999, discount: 12, rating: 4.6, reviews: 112, image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "EcoBubble dissolves detergent quickly to penetrate fabrics faster and more effectively.", specs: { Capacity: "9 kg", RPM: "1200", "Energy Class": "A++" } },
    { id: "w3", name: "Bosch Serie 8 Smart i-DOS 10kg", category: "Washing Machines", price: 11299, originalPrice: 12999, discount: 13, rating: 4.8, reviews: 45, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "Automatic i-DOS dosing and Home Connect app control. The ultimate smart laundry.", specs: { Capacity: "10 kg", RPM: "1400", "Energy Class": "A" } },
    { id: "w4", name: "Whirlpool FSCML 10432 10kg Slim", category: "Washing Machines", price: 5999, originalPrice: 6999, discount: 14, rating: 4.3, reviews: 67, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "6th Sense SteamCare technology removes 99.9% of bacteria without pre-treatment.", specs: { Capacity: "10 kg", RPM: "1400" } },
    { id: "w5", name: "Electrolux EW6F4833H2 PerfectCare 8kg", category: "Washing Machines", price: 5499, originalPrice: 6299, discount: 13, rating: 4.4, reviews: 54, image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Woolmark Blue certified for perfect wool care. Vapor action for gentle deep cleaning.", specs: { Capacity: "8 kg", RPM: "1200" } },
    { id: "w6", name: "Miele WCG660 TDos&8kg Wifi", category: "Washing Machines", price: 14999, originalPrice: 17499, discount: 14, rating: 4.9, reviews: 28, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "TDos automatic dispensing and Miele@Home app control for ultimate convenience.", specs: { Capacity: "8 kg", RPM: "1600", "Energy Class": "A" } },
    { id: "w7", name: "Candy SmartPro 12kg Top Load", category: "Washing Machines", price: 4299, originalPrice: 4999, discount: 14, rating: 4.0, reviews: 120, image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "14 programs including delicates and synthetics. Rapid 14-min wash cycle.", specs: { Capacity: "12 kg", RPM: "1000" } },
    { id: "w8", name: "Beko BK 9125 EUI 9kg HygieneShield", category: "Washing Machines", price: 4999, originalPrice: 5999, discount: 17, rating: 4.2, reviews: 78, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "SteamCure removes wrinkles and allergens. HygieneShield keeps the drum clean.", specs: { Capacity: "9 kg", RPM: "1200" } },
    { id: "w9", name: "Haier HW100 Series 5 10kg Front Load", category: "Washing Machines", price: 5799, originalPrice: 6799, discount: 15, rating: 4.3, reviews: 42, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "I-Pro Series with Direct Motion Motor for silent, efficient washing.", specs: { Capacity: "10 kg", RPM: "1400" } },
    { id: "w10", name: "AEG LFR61144B OKOMix 10kg Serie 6", category: "Washing Machines", price: 9499, originalPrice: 10999, discount: 14, rating: 4.5, reviews: 33, image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "OKOMix combines water and detergent before the drum for superior cleaning.", specs: { Capacity: "10 kg", RPM: "1400", "Energy Class": "A" } },

    // TELEVISIONS
    { id: "t1", name: "Samsung 65\" Neo QLED 8K QN800B", category: "Televisions", price: 29999, originalPrice: 34999, discount: 14, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "8K resolution with Neural Quantum Processor 8K for the ultimate cinema experience.", specs: { Size: '65"', Resolution: "8K", Panel: "Neo QLED", Hz: "120" } },
    { id: "t2", name: "LG OLED C3 55\" 4K Smart TV", category: "Televisions", price: 15499, originalPrice: 17999, discount: 14, rating: 4.9, reviews: 133, image: "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "OLED evo self-lit pixels for perfect black, intense brightness and pure color.", specs: { Size: '55"', Resolution: "4K", Panel: "OLED", Hz: "120" } },
    { id: "t3", name: "Sony Bravia XR 65\" A80L OLED", category: "Televisions", price: 22499, originalPrice: 25999, discount: 13, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Cognitive Processor XR for beautifully realistic picture and Acoustic Surface Audio+.", specs: { Size: '65"', Panel: "OLED", Processor: "Cognitive XR" } },
    { id: "t4", name: "Hisense 75\" U8H Mini-LED", category: "Televisions", price: 12999, originalPrice: 14999, discount: 13, rating: 4.4, reviews: 56, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Mini-LED backlight with Hi-View Engine Plus Processor for exceptional brightness.", specs: { Size: '75"', Resolution: "4K", Hz: "144" } },
    { id: "t5", name: "TCL 55\" C745 QLED 4K 144Hz", category: "Televisions", price: 5999, originalPrice: 7499, discount: 20, rating: 4.3, reviews: 210, image: "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "AiPQ processor for automatic picture optimization and Dolby Vision IQ.", specs: { Size: '55"', Panel: "QLED", Hz: "144" } },
    { id: "t6", name: "Philips Ambilight 65\" 65OLED807", category: "Televisions", price: 18999, originalPrice: 21999, discount: 14, rating: 4.7, reviews: 44, image: "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "4-sided Ambilight creates an immersive light halo around your TV.", specs: { Size: '65"', Panel: "OLED", Hz: "120" } },
    { id: "t7", name: "Samsung 32\" The Frame LS03B", category: "Televisions", price: 6499, originalPrice: 7499, discount: 13, rating: 4.6, reviews: 178, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Displays art when not watching TV. Matte Display technology minimizes reflections.", specs: { Size: '32"', Resolution: "4K", Hz: "60" } },

    // AIR FRYERS
    { id: "af1", name: "Tefal Easy Fry XXL 6.2L Air Fryer", category: "Air Fryers", price: 1699, originalPrice: 1999, discount: 15, rating: 4.6, reviews: 342, image: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "8 preset programs and XL capacity. Crispy results with up to 99% less fat.", specs: { Capacity: "6.2 L", Power: "1550 W", Programs: "8" } },
    { id: "af2", name: "Cosori Dual Blaze 6.4L Air Fryer", category: "Air Fryers", price: 1899, originalPrice: 2199, discount: 14, rating: 4.7, reviews: 287, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Top and bottom heating elements cook food evenly without shaking.", specs: { Capacity: "6.4 L", Power: "1800 W" } },
    { id: "af3", name: "Ninja Foodi 11-in-1 SmartLid 7.5L", category: "Air Fryers", price: 3499, originalPrice: 3999, discount: 13, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "11 cooking functions in one lid: pressure cook, air fry, steam, bake and more.", specs: { Capacity: "7.5 L", Functions: "11", Power: "1760 W" } },
    { id: "af4", name: "Philips Essential Air Fryer XL 6.2L", category: "Air Fryers", price: 1499, originalPrice: 1799, discount: 17, rating: 4.5, reviews: 523, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Rapid Air technology for extra crispy results outside, tender inside.", specs: { Capacity: "6.2 L", Power: "2100 W" } },
    { id: "af5", name: "Moulinex Easy Fry & Grill 5.5L", category: "Air Fryers", price: 999, originalPrice: 1299, discount: 23, rating: 4.3, reviews: 189, image: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "2-in-1 air fryer and grill. Perfect chips, tender meat, crispy vegetables.", specs: { Capacity: "5.5 L", Power: "1500 W" } },

    // COFFEE MACHINES
    { id: "c1", name: "De'Longhi La Specialista Arte Espresso", category: "Coffee Machines", price: 5499, originalPrice: 6299, discount: 13, rating: 4.8, reviews: 88, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Built-in grinder and sensor grinding technology for the perfect barista espresso.", specs: { Type: "Bean-to-Cup", Pressure: "15 bar", Grinder: "Integrated" } },
    { id: "c2", name: "Nespresso Vertuo Next Premium", category: "Coffee Machines", price: 2299, originalPrice: 2899, discount: 20, rating: 4.6, reviews: 210, image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Centrifusion technology for 5 cup sizes from espresso to XL mug.", specs: { Capsule: "Vertuo", Sizes: "5 cup sizes", Tank: "1.1 L" } },
    { id: "c3", name: "Philips 3200 Series LatteGo Automatic", category: "Coffee Machines", price: 4299, originalPrice: 4999, discount: 14, rating: 4.5, reviews: 145, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "LatteGo milk system for easy and hygienic milk frothing. 5 varieties.", specs: { Type: "Automatic", Varieties: "5", Milk: "LatteGo" } },
    { id: "c4", name: "Krups EA8108 Espresso Auto XP", category: "Coffee Machines", price: 3299, originalPrice: 3799, discount: 13, rating: 4.4, reviews: 97, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Full-automatic with integrated grinder and steam nozzle for café-quality milk foam.", specs: { Type: "Full Automatic", Grinder: "Yes" } },
    { id: "c5", name: "Moka 6-Cup Stainless Steel Bialetti", category: "Coffee Machines", price: 399, originalPrice: 499, discount: 20, rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "The original Italian stovetop espresso maker. Iconic design since 1933.", specs: { Cups: "6", Material: "Stainless Steel" } },

    // KITCHEN APPLIANCES
    { id: "k1", name: "KitchenAid Artisan Stand Mixer 5.5L", category: "Kitchen Appliances", price: 6499, originalPrice: 7299, discount: 11, rating: 4.9, reviews: 512, image: "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "10 speeds and planetary mixing action. The professional choice for baking.", specs: { Capacity: "5.5 L", Speeds: "10", Power: "325 W" } },
    { id: "k2", name: "Kenwood Chef XL Titanium 7L", category: "Kitchen Appliances", price: 5299, originalPrice: 5999, discount: 12, rating: 4.7, reviews: 204, image: "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Full titanium construction with 7L bowl for large batches.", specs: { Capacity: "7 L", Power: "1400 W" } },
    { id: "k3", name: "Moulinex Blender LM8618 Ultrablend", category: "Kitchen Appliances", price: 1299, originalPrice: 1599, discount: 19, rating: 4.4, reviews: 267, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "1500W high-speed motor for smoothies, soups, and frozen drinks.", specs: { Power: "1500 W", Capacity: "2 L" } },
    { id: "k4", name: "Tefal FY2418 Air Fryer 4.2L Easy", category: "Kitchen Appliances", price: 1299, originalPrice: 1599, discount: 19, rating: 4.5, reviews: 667, image: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Actifry automatic paddle stirring. 99% less fat with no manual shaking.", specs: { Capacity: "4.2 L", Power: "1400 W" } },
    { id: "k5", name: "Braun MultiQuick 7 Hand Blender", category: "Kitchen Appliances", price: 899, originalPrice: 1099, discount: 18, rating: 4.4, reviews: 389, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "PowerBell Plus for finest blending. 21-speed settings for total control.", specs: { Power: "1000 W", Speeds: "21" } },
    { id: "k6", name: "Russell Hobbs Toaster 4-Slice Colours+", category: "Kitchen Appliances", price: 449, originalPrice: 549, discount: 18, rating: 4.2, reviews: 445, image: "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "4 extra-wide slots for larger slices. 6 browning levels with cancel, defrost & reheat.", specs: { Slots: "4", Power: "1800 W" } },

    // OVENS
    { id: "ov1", name: "Bosch Series 8 Built-in Oven 71L", category: "Ovens", price: 12499, originalPrice: 13999, discount: 11, rating: 4.9, reviews: 56, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "4D HotAir for perfect results on up to four levels simultaneously.", specs: { Capacity: "71 L", "Energy Class": "A+", Type: "Built-in" } },
    { id: "ov2", name: "AEG SteamPro Oven 60cm 70L", category: "Ovens", price: 9899, originalPrice: 11499, discount: 14, rating: 4.7, reviews: 33, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "SteamPro technology for healthy moist cooking results every time.", specs: { Capacity: "70 L", Type: "Built-in", Steam: "Yes" } },
    { id: "ov3", name: "Siemens iQ700 Compact Combi 45L", category: "Ovens", price: 10999, rating: 4.5, reviews: 28, image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop", stockStatus: "out-of-stock", inStock: false, description: "2-in-1 oven and microwave combination for ultimate flexibility in compact spaces.", specs: { Capacity: "45 L", Type: "Combi" } },
    { id: "ov4", name: "Smeg SF6390X Classic Oven 60cm", category: "Ovens", price: 13999, originalPrice: 15999, discount: 13, rating: 4.8, reviews: 41, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Italian design with 9 cooking functions and ThermoSteam technology.", specs: { Capacity: "70 L", Functions: "9", Steam: "Yes" } },

    // DISHWASHERS
    { id: "d1", name: "Miele G 7100 Built-under Dishwasher", category: "Dishwashers", price: 15499, originalPrice: 16999, discount: 8, rating: 4.9, reviews: 42, image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "EcoPower and 3D MultiFlex tray. Up to 15 place settings in perfect silence.", specs: { Places: "14", "Energy Class": "A", "Noise Level": "44 dB" } },
    { id: "d2", name: "Bosch Serie 6 SMS6HCI00E Dishwasher", category: "Dishwashers", price: 8999, originalPrice: 10499, discount: 14, rating: 4.6, reviews: 67, image: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "PerfectDry with Zeolith for perfect drying even on plastic items.", specs: { Places: "13", "Energy Class": "B", "Noise Level": "42 dB" } },
    { id: "d3", name: "Samsung DW60BG735 Zone Booster", category: "Dishwashers", price: 7499, rating: 4.4, reviews: 30, image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "Zone Booster deep cleans even the most heavily soiled dishes.", specs: { Places: "14", Programs: "9" } },

    // SMALL APPLIANCES
    { id: "sa1", name: "Dyson V15 Detect Cordless Vacuum", category: "Small Appliances", price: 7499, originalPrice: 8499, discount: 12, rating: 4.9, reviews: 345, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Laser illumination reveals hidden dust. Acoustic piezo sensor measures and displays particles.", specs: { Runtime: "60 min", Filtration: "HEPA", Suction: "230 AW" } },
    { id: "sa2", name: "Philips PerfectCare Elite Steam Generator", category: "Small Appliances", price: 1499, originalPrice: 1799, discount: 17, rating: 4.5, reviews: 178, image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "OptimalTEMP technology — no burns possible on any fabric at any temperature setting.", specs: { Power: "2400 W", Pressure: "6.5 bar", Tank: "1.5 L" } },

    // COOKWARE
    { id: "cw1", name: "Le Creuset Signature Casserole 28cm", category: "Cookware", price: 3499, originalPrice: 3999, discount: 12, rating: 5.0, reviews: 88, image: "https://images.unsplash.com/photo-1584286594519-75691062b322?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "The classic round casserole for slow-cooked stews and perfectly braised meats.", specs: { Material: "Enameled Cast Iron", Diameter: "28 cm", Capacity: "6.3 L" } },
    { id: "cw2", name: "Tefal Titanium Excellence Pan Set 5pcs", category: "Cookware", price: 1899, originalPrice: 2299, discount: 17, rating: 4.6, reviews: 215, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1584286594519-75691062b322?q=80&w=800&auto=format&fit=crop", stockStatus: "in-stock", inStock: true, description: "Professional titanium non-stick coating. Compatible with all hobs including induction.", specs: { Pieces: "5", Coating: "Titanium", Compatible: "All hobs" } },
    { id: "cw3", name: "Zwilling Pro Knife Set 7 Pieces", category: "Cookware", price: 2799, originalPrice: 3299, discount: 15, rating: 4.8, reviews: 143, image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=800&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop", stockStatus: "low-stock", inStock: true, description: "Ice-hardened FRIODUR blade stays sharper longer. Ergonomic handles for precision.", specs: { Pieces: "7", Steel: "FRIODUR Stainless" } },
];

// ─── Promotional Products (subset with big discounts) ────────────────────────
export const promotionProductIds = [
    "r3", "r5", "r8", "w2", "w4", "w5", "w7", "w8",
    "t4", "t5", "t7", "af1", "af4", "af5",
    "c2", "c3", "c5", "k3", "k4", "k6", "ov2", "sa2", "cw2", "cw3"
];

// ─── Packs ────────────────────────────────────────────────────────────────────
export const packs: Pack[] = [
    {
        id: "pack1",
        name: "Smart Kitchen Essential",
        products: ["Samsung Bespoke Fridge", "Bosch Serie 8 Oven", "LG Washing Machine"],
        images: [
            "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 55997,
        packPrice: 44999,
        discount: 20,
        description: "Complete your smart kitchen with this exclusive bundle.",
        badge: "Best Seller",
    },
    {
        id: "pack2",
        name: "Coffee Lover's Kit",
        products: ["De'Longhi Espresso Machine", "KitchenAid Stand Mixer", "Tefal Air Fryer"],
        images: [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 14297,
        packPrice: 11499,
        discount: 20,
        description: "The ultimate countertop setup for passionate home cooks.",
        badge: "Hot Deal",
    },
    {
        id: "pack3",
        name: "Cinema Room Bundle",
        products: ["LG OLED 55\" TV", "Sony Sound Bar", "Smart Lighting"],
        images: [
            "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 22999,
        packPrice: 17999,
        discount: 22,
        description: "Transform your living room into a luxury cinema.",
    },
    {
        id: "pack4",
        name: "Laundry Pro Pack",
        products: ["Bosch Washing Machine 10kg", "Miele Stacked Dryer", "Steam Iron"],
        images: [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 18797,
        packPrice: 14999,
        discount: 20,
        description: "Professional laundry care from wash to iron.",
        badge: "New",
    },
    {
        id: "pack5",
        name: "Chef's Dream Kitchen",
        products: ["KitchenAid Mixer", "Bosch Oven", "Le Creuset Set", "Zwilling Knives"],
        images: [
            "https://images.unsplash.com/photo-1594385208934-2c1ce9d8ec9a?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584286594519-75691062b322?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 26696,
        packPrice: 20999,
        discount: 21,
        description: "Everything a professional chef needs at home.",
        badge: "Premium",
    },
    {
        id: "pack6",
        name: "Family Appliance Bundle",
        products: ["LG Fridge 635L", "Samsung Washing Machine", "Bosch Dishwasher"],
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 44497,
        packPrice: 34999,
        discount: 21,
        description: "Keep your family home running perfectly.",
    },
    {
        id: "pack7",
        name: "Air Fry Master Set",
        products: ["Ninja Foodi 11-in-1", "Cosori Air Fryer", "Tefal Air Fryer XL"],
        images: [
            "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1648369949440-4f6a97ed1c52?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 7097,
        packPrice: 5499,
        discount: 22,
        description: "The complete air frying collection for the health-conscious family.",
        badge: "Trending",
    },
    {
        id: "pack8",
        name: "Barista Home Studio",
        products: ["De'Longhi Espresso", "Nespresso Vertuo", "Philips LatteGo"],
        images: [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 12097,
        packPrice: 9499,
        discount: 21,
        description: "Your private café at home — any style, any time.",
        badge: "Limited",
    },
    {
        id: "pack9",
        name: "Dyson Smart Clean Bundle",
        products: ["Dyson V15 Cordless Vacuum", "Philips Air Purifier", "Rowenta Steam Iron"],
        images: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616485828916-a2f2e2b7e3e3?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 10497,
        packPrice: 8299,
        discount: 21,
        description: "Keep your home spotless with premium Dyson technology.",
    },
    {
        id: "pack10",
        name: "Full Living Room Upgrade",
        products: ["Samsung Neo QLED 65\"", "LG OLED 55\"", "Philips Ambilight"],
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593784991095-a205ee297392?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584016681000-d2df0ccfdb0c?q=80&w=400&auto=format&fit=crop",
        ],
        originalPrice: 67497,
        packPrice: 51999,
        discount: 23,
        description: "The ultimate screen upgrade for your entire home.",
        badge: "VIP",
    },
];

// ─── Store Locations ──────────────────────────────────────────────────────────
export const storeLocations: StoreLocation[] = [
    {
        id: "casa",
        city: "Casablanca",
        address: "Boulevard Zerktouni, Espace Commercial ElectroPlaza, Casablanca 20000",
        hours: "Lun–Sam: 9h00 – 19h00  |  Dim: 10h00 – 17h00",
        phone: "+212 5 22 000 000",
        mapUrl: "https://maps.google.com/?q=Casablanca+Morocco",
    },
    {
        id: "marrakech",
        city: "Marrakech",
        address: "Avenue Mohammed VI, Centre Commercial Carrefour, Marrakech 40000",
        hours: "Lun–Sam: 9h00 – 19h30  |  Dim: 10h00 – 17h00",
        phone: "+212 5 24 000 000",
        mapUrl: "https://maps.google.com/?q=Marrakech+Morocco",
    },
];

// ─── Utility functions ────────────────────────────────────────────────────────
export const PRODUCTS_PER_PAGE = 10;

export function getProductsByCategory(category: string): Product[] {
    return products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
    );
}

export function getRelatedProducts(productId: string, category: string, count = 6): Product[] {
    return products.filter((p) => p.id !== productId && p.category === category).slice(0, count);
}

export function getPaginatedProducts(items: Product[], page: number, perPage = PRODUCTS_PER_PAGE) {
    return items.slice((page - 1) * perPage, page * perPage);
}

export function getTotalPages(items: Product[], perPage = PRODUCTS_PER_PAGE) {
    return Math.ceil(items.length / perPage);
}

export function getPromotionProducts(): Product[] {
    return products.filter((p) => promotionProductIds.includes(p.id) && p.discount && p.discount > 0);
}
