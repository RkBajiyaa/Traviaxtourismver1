export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  inclusions: string[];
  category: "domestic" | "international";
}

export const domesticPackages: TourPackage[] = [
  {
    id: "goa-beach",
    name: "Goa Beach Paradise",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    highlights: ["Beach hopping", "Water sports", "Nightlife", "Portuguese heritage"],
    description: "Experience the vibrant beaches of Goa with golden sands, exciting water sports, and rich Portuguese heritage. Perfect for couples and groups seeking sun, sand, and adventure.",
    inclusions: ["3-star hotel stay", "Breakfast", "Airport transfers", "Sightseeing tours", "Water sports package"],
    category: "domestic"
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters Bliss",
    destination: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    highlights: ["Houseboat cruise", "Ayurvedic spa", "Tea plantations", "Wildlife sanctuary"],
    description: "Drift through the serene backwaters of Kerala on a traditional houseboat, experience authentic Ayurvedic treatments, and explore lush tea gardens in Munnar.",
    inclusions: ["Houseboat stay", "Resort accommodation", "All meals", "Ayurvedic massage", "Guided tours"],
    category: "domestic"
  },
  {
    id: "rajasthan-royal",
    name: "Royal Rajasthan Tour",
    destination: "Rajasthan",
    duration: "7 Days / 6 Nights",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    highlights: ["Palace visits", "Desert safari", "Cultural shows", "Heritage hotels"],
    description: "Step into the royal past of India with visits to magnificent palaces, thrilling desert safaris in Jaisalmer, and stays in heritage properties across Jaipur, Udaipur, and Jodhpur.",
    inclusions: ["Heritage hotel stays", "Breakfast & dinner", "Private AC vehicle", "Desert camp experience", "Elephant ride"],
    category: "domestic"
  },
  {
    id: "kashmir-paradise",
    name: "Kashmir Paradise Valley",
    destination: "Kashmir",
    duration: "6 Days / 5 Nights",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
    highlights: ["Dal Lake shikara", "Gulmarg gondola", "Mughal gardens", "Snow experiences"],
    description: "Discover why Kashmir is called Paradise on Earth. Glide on Dal Lake shikaras, ride the highest gondola in Gulmarg, and wander through stunning Mughal gardens.",
    inclusions: ["Deluxe houseboat", "Hotel stays", "All meals", "Shikara rides", "Gondola tickets", "Pony rides"],
    category: "domestic"
  },
  {
    id: "manali-adventure",
    name: "Manali Adventure Escape",
    destination: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    highlights: ["Rohtang Pass", "River rafting", "Solang Valley", "Old Manali"],
    description: "An adrenaline-packed adventure in the mountains of Himachal. Experience snow at Rohtang Pass, go river rafting in Beas, and explore the charming streets of Old Manali.",
    inclusions: ["3-star hotel", "Breakfast", "Rohtang permit", "River rafting", "Volvo bus transfers"],
    category: "domestic"
  },
  {
    id: "andaman-islands",
    name: "Andaman Island Explorer",
    destination: "Andaman & Nicobar",
    duration: "6 Days / 5 Nights",
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800",
    highlights: ["Scuba diving", "Cellular Jail", "Radhanagar Beach", "Sea walking"],
    description: "Explore the pristine islands of Andaman with crystal-clear waters, incredible marine life, and rich history at Cellular Jail. Perfect for beach lovers and adventure seekers.",
    inclusions: ["Beach resort stay", "All meals", "Ferry transfers", "Scuba diving session", "Island hopping tours"],
    category: "domestic"
  },
  {
    id: "darjeeling-sikkim",
    name: "Darjeeling & Sikkim Hills",
    destination: "West Bengal & Sikkim",
    duration: "7 Days / 6 Nights",
    price: "₹26,999",
    image: "https://images.unsplash.com/photo-1544634076-a90aad2947e4?w=800",
    highlights: ["Toy train ride", "Kanchenjunga views", "Tea garden tours", "Buddhist monasteries"],
    description: "Journey through the misty hills of Darjeeling and Sikkim. Ride the iconic toy train, witness sunrise over Kanchenjunga, and explore serene Buddhist monasteries.",
    inclusions: ["Hotel stays", "Breakfast & dinner", "Toy train tickets", "Sightseeing", "Permits"],
    category: "domestic"
  },
  {
    id: "varanasi-spiritual",
    name: "Varanasi Spiritual Journey",
    destination: "Uttar Pradesh",
    duration: "3 Days / 2 Nights",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
    highlights: ["Ganga Aarti", "Boat ride", "Temple visits", "Sarnath excursion"],
    description: "Experience the spiritual heart of India in Varanasi. Witness the mesmerizing Ganga Aarti, take a sunrise boat ride, and visit the ancient Buddhist site of Sarnath.",
    inclusions: ["Heritage hotel", "Breakfast", "Boat rides", "Guided temple tours", "Airport transfers"],
    category: "domestic"
  },
  {
    id: "ooty-kodaikanal",
    name: "Ooty & Kodaikanal Retreat",
    destination: "Tamil Nadu",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    highlights: ["Nilgiri toy train", "Botanical gardens", "Boating", "Coffee plantations"],
    description: "Escape to the cool hill stations of South India. Ride the heritage Nilgiri Mountain Railway, explore beautiful gardens, and enjoy the peaceful mountain atmosphere.",
    inclusions: ["Resort stays", "Breakfast", "Toy train tickets", "Boating", "Plantation visits"],
    category: "domestic"
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh Expedition",
    destination: "Ladakh",
    duration: "8 Days / 7 Nights",
    price: "₹35,999",
    image: "https://images.unsplash.com/photo-1537463488886-0d27e0f8299e?w=800",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"],
    description: "The ultimate Himalayan adventure through the mystical landscapes of Ladakh. Cross the highest motorable passes, camp by Pangong Lake, and explore ancient monasteries.",
    inclusions: ["Hotel & camp stays", "All meals", "Innova/Xylo transport", "Permits", "Oxygen cylinder"],
    category: "domestic"
  }
];

export const internationalPackages: TourPackage[] = [
  {
    id: "dubai-dazzle",
    name: "Dubai Dazzle",
    destination: "UAE",
    duration: "5 Days / 4 Nights",
    price: "₹45,999",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    highlights: ["Burj Khalifa", "Desert safari", "Dubai Mall", "Palm Jumeirah"],
    description: "Experience the glamour of Dubai with visits to iconic landmarks, thrilling desert adventures, world-class shopping, and stunning beach resorts.",
    inclusions: ["4-star hotel", "Breakfast", "Desert safari with BBQ", "Burj Khalifa tickets", "City tour", "Visa assistance"],
    category: "international"
  },
  {
    id: "thailand-treasures",
    name: "Thailand Treasures",
    destination: "Thailand",
    duration: "6 Days / 5 Nights",
    price: "₹38,999",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    highlights: ["Bangkok temples", "Pattaya beaches", "Floating market", "Thai massage"],
    description: "Discover the Land of Smiles with vibrant Bangkok, the beaches of Pattaya, traditional floating markets, and authentic Thai cuisine and wellness experiences.",
    inclusions: ["4-star hotels", "Breakfast", "Coral Island tour", "City tours", "Thai massage", "Visa on arrival"],
    category: "international"
  },
  {
    id: "singapore-splendor",
    name: "Singapore Splendor",
    destination: "Singapore",
    duration: "5 Days / 4 Nights",
    price: "₹52,999",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    highlights: ["Marina Bay Sands", "Sentosa Island", "Universal Studios", "Gardens by the Bay"],
    description: "Explore the futuristic city-state of Singapore with iconic attractions, world-class entertainment, and a perfect blend of culture and modernity.",
    inclusions: ["4-star hotel", "Breakfast", "Universal Studios tickets", "Sentosa pass", "Night safari", "City tour"],
    category: "international"
  },
  {
    id: "bali-bliss",
    name: "Bali Island Bliss",
    destination: "Indonesia",
    duration: "6 Days / 5 Nights",
    price: "₹42,999",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    highlights: ["Ubud temples", "Rice terraces", "Beach clubs", "Sunset at Tanah Lot"],
    description: "Immerse yourself in the magical island of Bali with ancient temples, stunning rice terraces, beautiful beaches, and rich Balinese culture and spirituality.",
    inclusions: ["Beach resort", "Breakfast", "Temple tours", "Kintamani excursion", "Spa treatment", "Visa on arrival"],
    category: "international"
  },
  {
    id: "maldives-luxury",
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "4 Days / 3 Nights",
    price: "₹75,999",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    highlights: ["Overwater villa", "Snorkeling", "Sunset cruise", "Spa retreat"],
    description: "The ultimate luxury getaway in the Maldives. Stay in an overwater villa, snorkel in crystal-clear waters, and experience world-class hospitality in paradise.",
    inclusions: ["Overwater villa", "All meals", "Speedboat transfers", "Snorkeling gear", "Sunset cruise", "Spa credit"],
    category: "international"
  },
  {
    id: "malaysia-adventure",
    name: "Malaysia Adventure",
    destination: "Malaysia",
    duration: "6 Days / 5 Nights",
    price: "₹35,999",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800",
    highlights: ["Petronas Towers", "Langkawi island", "Batu Caves", "Genting Highlands"],
    description: "From the modern skyline of Kuala Lumpur to the tropical beaches of Langkawi, experience the diverse attractions of Malaysia.",
    inclusions: ["4-star hotels", "Breakfast", "City tours", "Cable car rides", "Island hopping", "eVisa assistance"],
    category: "international"
  },
  {
    id: "vietnam-discovery",
    name: "Vietnam Discovery",
    destination: "Vietnam",
    duration: "7 Days / 6 Nights",
    price: "₹48,999",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Ha Long Bay cruise", "Ho Chi Minh City", "Hoi An old town", "Cu Chi Tunnels"],
    description: "Journey through Vietnam from the bustling streets of Ho Chi Minh to the stunning limestone karsts of Ha Long Bay and the charming ancient town of Hoi An.",
    inclusions: ["Hotels & cruise", "Breakfast & some meals", "Ha Long Bay cruise", "City tours", "Internal flights", "Visa assistance"],
    category: "international"
  },
  {
    id: "sri-lanka-wonder",
    name: "Sri Lanka Wonder",
    destination: "Sri Lanka",
    duration: "6 Days / 5 Nights",
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1586613835341-e0fe0e6b4a02?w=800",
    highlights: ["Sigiriya Rock", "Kandy Temple", "Tea country", "Beach stay"],
    description: "Explore the pearl of the Indian Ocean with ancient ruins, sacred temples, scenic train rides through tea plantations, and beautiful coastal beaches.",
    inclusions: ["Hotels", "Breakfast & dinner", "Private vehicle", "Sigiriya entrance", "Train tickets", "ETA visa"],
    category: "international"
  },
  {
    id: "europe-highlights",
    name: "Europe Highlights",
    destination: "France, Switzerland, Italy",
    duration: "10 Days / 9 Nights",
    price: "₹1,25,999",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    highlights: ["Eiffel Tower", "Swiss Alps", "Venice gondola", "Vatican City"],
    description: "The classic European dream tour covering Paris, Swiss Alps, and Italian gems. Experience world-famous landmarks, stunning landscapes, and rich cultural heritage.",
    inclusions: ["3-star hotels", "Breakfast & dinner", "Coach transport", "Eurostar train", "Guided tours", "Schengen visa assistance"],
    category: "international"
  },
  {
    id: "egypt-ancient",
    name: "Ancient Egypt Explorer",
    destination: "Egypt",
    duration: "7 Days / 6 Nights",
    price: "₹65,999",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800",
    highlights: ["Pyramids of Giza", "Nile cruise", "Valley of Kings", "Abu Simbel"],
    description: "Walk in the footsteps of pharaohs with visits to the iconic Pyramids, a luxurious Nile cruise, and exploration of ancient temples and tombs.",
    inclusions: ["Hotels & cruise", "All meals on cruise", "Domestic flights", "Guided tours", "Entrance fees", "Visa assistance"],
    category: "international"
  }
];

export const allPackages = [...domesticPackages, ...internationalPackages];

export function getPackageById(id: string): TourPackage | undefined {
  return allPackages.find(pkg => pkg.id === id);
}
