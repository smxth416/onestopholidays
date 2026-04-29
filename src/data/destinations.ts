export interface Destination {
  slug: string;
  name: string;
  price: string;
  desc: string;
  img: string;
  category: string;
  duration: string;
  bestTime: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  inclusions: string[];
  exclusions?: string[];
  longDesc: string;
}

export const destinations: Destination[] = [
  {
    slug: "dubai-tour-packages-from-rajkot",
    name: "Dubai",
    price: "Enquire Now",
    category: "International Gems",
    duration: "5 Days / 4 Nights",
    bestTime: "November – March",
    desc: "Experience ultimate grandeur where the golden desert meets the future in a spectacular 5-day journey.",
    longDesc: "Dubai is a city that defies imagination — where the world's tallest tower pierces the sky, man-made islands dot the coast, and ancient souks sit in the shadow of futuristic architecture. Our premium 5-day Dubai experience immerses you in unparalleled luxury, from the gleaming skyscrapers of the Marina to the golden sands of the Arabian desert. Enjoy curated city tours, private desert adventures, and a romantic dhow cruise under the stars.",
    img: "/destinations/Dubai.webp",
    highlights: [
      "Burj Khalifa 'At the Top' (124th/125th Floor)",
      "Premium Desert Safari with BBQ Dinner",
      "Dubai Marina Dhow Cruise Experience",
      "Comprehensive City Tour (Palm Jumeirah & Burj Al Arab)",
      "Dubai Mall Fountain Show & Leisure"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & Marina Welcome", description: "Arrival at Dubai International Airport. Meet & greet with private transfer to your 4★ hotel in the Dubai Marina or Al Barsha area. Evening at leisure to explore the Marina Walk and enjoy the vibrant skyline. Dinner included at the hotel." },
      { day: "Day 2", title: "City Tour & Burj Khalifa", description: "Comprehensive half-day Dubai City Tour including Jumeirah Mosque, Burj Al Arab (photo stop), Palm Jumeirah, and Dubai Marina. Evening visit to the Burj Khalifa 'At the Top' (124/125th floor) followed by the spectacular Dubai Mall Fountain Show. Optional upgrades available for Sky Views Edge Walk or the 148th floor." },
      { day: "Day 3", title: "Desert Safari Adventure", description: "Morning at leisure. Afternoon departure for a thrilling Desert Safari experience featuring Dune Bashing, Camel Rides, and Sandboarding. Conclude the day with a BBQ Dinner and live traditional shows (Tanoura and Belly Dance) at the desert camp. Optional: VIP seating or Quad Biking." },
      { day: "Day 4", title: "Dhow Cruise & City Leisure", description: "Day at leisure for optional visits to the Museum of the Future, Dubai Frame, or Global Village. In the evening, enjoy a traditional Dhow Cruise Dinner at Dubai Marina with live entertainment and a lavish buffet while sailing past the illuminated towers." },
      { day: "Day 5", title: "Departure", description: "Final breakfast at the hotel. Free time for last-minute shopping at the Mall of the Emirates before your private transfer to Dubai International Airport for your onward journey." }
    ],
    inclusions: [
      "4 Nights stay in 4★ hotel (or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Private airport transfers",
      "Half-Day Dubai City Tour",
      "Burj Khalifa Entry (124/125 floor)",
      "Desert Safari with BBQ Dinner",
      "Marina Dhow Cruise Dinner",
      "All internal transfers (SIC / private as per package)"
    ],
    exclusions: [
      "International flights",
      "Dubai Visa (~₹6,000–₹8,000)",
      "Tourism Dirham (payable at hotel)",
      "Optional tours & custom upgrades",
      "Travel Insurance"
    ]
  },
  {
    slug: "bali-tour-packages-from-rajkot",
    name: "Bali",
    price: "Enquire Now",
    category: "International Gems",
    duration: "6 Days / 5 Nights",
    bestTime: "April – October",
    desc: "Experience a perfect blend of rich culture, stunning beaches, and romantic leisure in the Island of Gods.",
    longDesc: "Bali is an island paradise that offers a mesmerizing blend of vibrant culture, lush landscapes, and immaculate beaches. From the bustling streets of Kuta and Seminyak to the spiritual heart of Ubud, our curated 6-day itinerary ensures you experience the best of the Island of Gods. Enjoy thrilling water sports, breathtaking sunsets at Uluwatu, a full-day exploration of Nusa Penida, and relaxing romantic moments amidst nature.",
    img: "/destinations/Bali.webp",
    highlights: [
      "Water Sports at Nusa Dua Beach",
      "Uluwatu Sunset Tour & Optional Kecak Dance",
      "Nusa Penida West Island Tour",
      "Ubud Nature Tour: waterfalls & rice terraces",
      "Optional Floating Breakfast & Romantic experiences"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Bali – Kuta/Seminyak", description: "Arrival at Denpasar Airport. Meet & greet with private transfer. Check-in at 4★ hotel in Kuta/Seminyak area. Evening at leisure for beach walk or shopping. Dinner at hotel." },
      { day: "Day 2", title: "Water Sports + Uluwatu Sunset Tour", "description": "Visit Nusa Dua Beach for included basic water sports like Banana Boat. Optional upgrades for Jet Ski or Parasailing. Later, visit Uluwatu Temple and witness the spectacular sunset and optional Kecak Fire Dance." },
      { day: "Day 3", title: "Nusa Penida Island Tour", description: "Full-day West Island Tour including Kelingking Beach, Broken Beach, and Angel's Billabong. Options to upgrade to a snorkeling experience or private tour." },
      { day: "Day 4", title: "Ubud Transfer + Nature Tour", description: "Private transfer to Ubud. Enroute sightseeing including Tegenungan Waterfall, Tegalalang Rice Terrace, and a Coffee Plantation. Check-in at your 4★ Resort/Villa. Optional Bali Swing or ATV Ride." },
      { day: "Day 5", title: "Leisure / Romantic Experiences", description: "Free day to relax. Perfect for premium clients to add optional experiences like a Floating Breakfast, Candlelight Dinner, or a Private Pool Villa upgrade. Shopping in Ubud Market." },
      { day: "Day 6", title: "Departure", description: "Leisurely breakfast depending on flight timings. Check-out and private airport transfer for your onward journey." }
    ],
    inclusions: [
      "Return airport transfers (private)",
      "5 Nights accommodation (4★ or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "All tours & transfers on private basis (excluding shared boat to Nusa Penida)",
      "Nusa Penida tour with transfers",
      "Water sports (basic inclusion)"
    ],
    exclusions: [
      "International flights",
      "Visa on arrival (~₹3,000–₹3,500)",
      "Optional activities and custom upgrades",
      "Travel insurance",
      "Personal expenses"
    ]
  },
  {
    slug: "singapore-malaysia-tour-packages-from-rajkot",
    name: "Singapore & Malaysia",
    price: "Enquire Now",
    category: "International Gems",
    duration: "6 Days / 5 Nights",
    bestTime: "Year-round (Best: February – August)",
    desc: "A futuristic twin-city escape blending the neon gardens of Singapore with the cultural heights of Kuala Lumpur.",
    longDesc: "Embark on an extraordinary journey through two of Southeast Asia's most dynamic nations. Witness the perfect fusion of nature and technology at Singapore's Gardens by the Bay, explore the island thrills of Sentosa, and then cross into the vibrant heart of Malaysia. From the iconic Petronas Twin Towers to the sacred heights of Batu Caves, this dual-country experience is crafted for those who seek both modern spectacle and rich cultural depth.",
    img: "/destinations/Malaysia.webp",
    highlights: [
      "Gardens by the Bay (Cloud Forest & SuperTree Light Show)",
      "Sentosa Island: Cable Car, Madame Tussauds & SEA Aquarium",
      "Kuala Lumpur Night View (Petronas Twin Towers)",
      "Batu Caves Cultural Experience",
      "Luxury Coach Transfer from Singapore to KL"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Singapore – Garden Lights", description: "Arrival at Changi Airport. Private transfer to your 4★ hotel in the Little India or Orchard area. In the evening, visit Gardens by the Bay to explore the ethereal Cloud Forest and witness the spectacular SuperTree Grove light show. Dinner included at a curated Indian restaurant." },
      { day: "Day 2", title: "City Tour & Sentosa Island Thrills", description: "Morning Singapore City Tour visiting Merlion Park, Marina Bay Sands (photo stop), and Chinatown. Afternoon transfer to Sentosa Island via Cable Car. Visit Madame Tussauds or the SEA Aquarium. Optional upgrades: Universal Studios or SkyHelix ride. Breakfast and Dinner included." },
      { day: "Day 3", title: "Cross-Border to Kuala Lumpur", description: "Travel to Kuala Lumpur via luxury coach or flight. Upon arrival, check into your 4★ hotel. Evening visit to the iconic Petronas Twin Towers for a photo stop and a breathtaking KL city night view. Breakfast and Dinner included." },
      { day: "Day 4", title: "KL City Heritage & Batu Caves", description: "Discover the heart of Malaysia with visits to the King's Palace, Independence Square, and the vibrant local markets. Head to the colorful Batu Caves for a cultural immersion. Optional: KL Tower observation deck or a Genting Highlands day trip. Breakfast and Dinner included." },
      { day: "Day 5", title: "Leisure & Urban Exploration", description: "Free day for personal exploration or optional theme park adventures. Highly recommended add-ons include a full-day Genting Highlands tour with cable car or a visit to Sunway Lagoon Theme Park. Breakfast and Dinner included." },
      { day: "Day 6", title: "Final Farewell & Departure", description: "Enjoy a final Malaysian breakfast before your private transfer to the airport for your flight back home, carrying memories of two spectacular nations. Breakfast included." }
    ],
    inclusions: [
      "5 Nights stay in 4★ hotels (or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Airport transfers (private)",
      "Singapore City Tour & Sentosa Experience",
      "Gardens by the Bay Entry",
      "Kuala Lumpur City Tour & Batu Caves Visit",
      "Intercity transfer (Singapore to KL)",
      "All managed tours & transfers"
    ],
    exclusions: [
      "International flights",
      "Singapore + Malaysia Visa (~₹6,000–₹8,000)",
      "Tourism taxes in Malaysia (payable at hotel)",
      "Optional tours & custom upgrades",
      "Travel Insurance"
    ]
  },
  {
    slug: "vietnam-tour-packages-from-rajkot",
    name: "Vietnam",
    price: "Enquire Now",
    category: "International Gems",
    duration: "6 Days / 5 Nights",
    bestTime: "October – April",
    desc: "From the emerald waters of Halong Bay to the lantern-lit streets of Hoi An, discover the soul of Southeast Asia.",
    longDesc: "Vietnam is a tapestry of ancient traditions and modern energy. Our curated 6-day journey takes you through the historic heart of Hanoi, across the limestone karsts of Halong Bay, and down to the coastal beauty of Da Nang. Witness the engineering marvel of the Golden Bridge at Ba Na Hills and lose yourself in the timeless romance of Hoi An. Every moment is crafted to reveal the deep-rooted hospitality and breathtaking landscapes of this legendary land.",
    img: "/destinations/Vietnam.webp",
    highlights: [
      "Full-Day Halong Bay Cruise & Kayaking",
      "Golden Bridge & Ba Na Hills Cable Car",
      "Hanoi Old Quarter Heritage Tour",
      "Hoi An Lantern City Excursion",
      "Domestic Flight from Hanoi to Da Nang included"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Hanoi – Old Quarter Echoes", description: "Arrival at Noi Bai International Airport. Private transfer to your 4★ hotel in the historic Old Quarter. Spend your evening soaking in the vibrant atmosphere of the night markets or exploring the narrow lanes. Welcome dinner included at the hotel." },
      { day: "Day 2", title: "Halong Bay Sights & Kayaking", description: "Full-day excursion to the UNESCO World Heritage site, Halong Bay. Explore ancient limestone caves and enjoy kayaking or a bamboo boat ride through emerald waters. A traditional seafood lunch is served onboard. Optional upgrade: 1-night luxury cruise stay. Breakfast and Dinner included." },
      { day: "Day 3", title: "Cultural Hanoi & Flight to Da Nang", description: "Discover Hanoi's heritage with visits to the Ho Chi Minh Mausoleum, the Temple of Literature, and Hoan Kiem Lake. In the evening, take a domestic flight to Da Nang. Check into your 4★ beachfront hotel. Breakfast and Dinner included." },
      { day: "Day 4", title: "Ba Na Hills & The Golden Bridge", description: "Experience a world-class cable car ride up to Ba Na Hills. Walk across the iconic Golden Bridge held by giant stone hands and explore the Fantasy Park. Optional: Private guide or premium lunch upgrades. Breakfast and Dinner included." },
      { day: "Day 5", title: "The Romance of Hoi An", description: "Guided excursion to the lantern-lit town of Hoi An. Visit the Japanese Covered Bridge, explore riverside markets, and enjoy a lantern city tour. Optional experiences: Basket boat ride or a tailor-made clothing session. Breakfast and Dinner included." },
      { day: "Day 6", title: "Farewell from Vietnam", description: "Enjoy a final Vietnamese breakfast before your private transfer to Da Nang International Airport for your departure, carrying the timeless stories of Vietnam with you. Breakfast included." }
    ],
    inclusions: [
      "5 Nights stay in 4★ hotels (Hanoi & Da Nang)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Private airport transfers",
      "Full-day Halong Bay Day Cruise with Lunch",
      "Domestic Flight (Hanoi to Da Nang)",
      "Ba Na Hills & Golden Bridge Entry",
      "Hoi An City Excursion",
      "All managed tours & transfers"
    ],
    exclusions: [
      "International flights",
      "Vietnam Visa (~₹2,500–₹4,000 e-visa)",
      "Tips & Personal expenses",
      "Optional activities & cruise upgrades",
      "Travel Insurance"
    ]
  },
  {
    slug: "euro-trio-tour-packages-from-rajkot",
    name: "Euro Trio",
    price: "Enquire Now",
    category: "International Gems",
    duration: "8 Days / 7 Nights",
    bestTime: "May – September",
    desc: "A grand odyssey through the timeless icons of France, the alpine majesty of Switzerland, and the artistic soul of Italy.",
    longDesc: "The Euro Trio is the ultimate pilgrimage for the romantic and the explorer alike. Start your journey in the city of lights, Paris, before sweeping through the emerald landscapes of Switzerland via high-speed rail. Conclude your adventure in Italy, wandering through the floating streets of Venice and the ancient corridors of Rome. This 8-day curated journey combines sophisticated urban charm with breathtaking natural wonders and centuries of deep history.",
    img: "/destinations/Europe.webp",
    highlights: [
      "Eiffel Tower 2nd Level Entry & Paris City Tour",
      "High-Speed Intercity Train Transfers",
      "Mount Titlis Alpine Excursion (Ice Flyer included)",
      "Venice Walking Tour & St. Mark’s Square",
      "Rome Highlights & Leaning Tower of Pisa photo stop"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Paris – City of Lights", description: "Arrival at Charles de Gaulle Airport and private transfer to your central 4★ hotel in the Opera area. Spend your evening at leisure soaking in the Parisian atmosphere or opt for a romantic Seine River Cruise. Dinner included." },
      { day: "Day 2", title: "Paris Landmarks & Eiffel Tower", description: "A guided city tour taking you past the Arc de Triomphe, Champs-Élysées, and the Louvre (photo stop). Culminate the tour with an included entry to the 2nd Level of the Eiffel Tower for panoramic views. Optional upgrades for Disneyland Paris or an internal Louvre visit. Breakfast and Dinner included." },
      { day: "Day 3", title: "Paris to Lucerne via High-Speed Rail", description: "Journey into the heart of Switzerland on a scenic high-speed train. Arrive in Lucerne and check into your 4★ hotel. In the evening, take a relaxing walk across the historic Chapel Bridge and enjoy the lakeside charm. Breakfast and Dinner included." },
      { day: "Day 4", title: "The Heights of Mount Mt. Titlis", description: "Embark on an alpine adventure with a cable car ride to the summit of Mt. Titlis. Experience the Ice Flyer chairlift and various snow activities at the peak. Optional upgrade for a premium Jungfraujoch excursion. Breakfast and Dinner included." },
      { day: "Day 5", title: "Swiss Scenery to Venetian Lagoons", description: "Board a scenic train journey crossing the Alps into Italy. Arrive in Venice and check into your 4★ hotel in the Mestre or Venice island area. Evening at leisure with an optional classic Gondola ride through the canals. Breakfast and Dinner included." },
      { day: "Day 6", title: "Venice Discovery & Florence Transfer", description: "Immerse yourself in Venice with a walking tour of St. Mark’s Square and the surrounding historic bridges. Afternoon transfer to the Renaissance capital, Florence, for your overnight stay. Breakfast and Dinner included." },
      { day: "Day 7", title: "Pisa Heritage & Eternal Rome", description: "Enroute to Rome, stop for a quintessential photo at the Leaning Tower of Pisa. Arrive in Rome for a highlights tour covering the Colosseum (exterior) and the Trevi Fountain. Breakfast and Dinner included." },
      { day: "Day 8", title: "Final Italian Farewells", description: "Enjoy a final European breakfast before your private transfer to Rome International Airport for your flight back home, carrying the memories of three legendary countries. Breakfast included." }
    ],
    inclusions: [
      "7 Nights stay in 4★ hotels (Paris, Lucerne, Italy)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Professional Schengen Visa assistance",
      "Intercity High-Speed Train transfers",
      "Paris City Tour & Eiffel Tower 2nd Level entry",
      "Full-day Mount Titlis Excursion",
      "Guided City Tours across Italy",
      "All managed transfers"
    ],
    exclusions: [
      "International flights",
      "Schengen Visa fees (~₹8,000–₹12,000)",
      "City taxes (payable at hotels)",
      "Optional tours (Disneyland, Jungfraujoch, Gondola)",
      "Travel Insurance"
    ]
  },
  {
    slug: "sri-lanka-tour-packages-from-rajkot",
    name: "Sri Lanka Wellness & Safari",
    price: "Enquire Now",
    category: "Coastal Luxury",
    duration: "6 Days / 5 Nights",
    bestTime: "December – April (West/South) & May – September (East)",
    desc: "A restorative journey blending ancient Ayurveda wellness with the raw beauty of the Yala Wilderness.",
    longDesc: "Sri Lanka is a land of emerald hills, golden shores, and untamed wildlife. Our unique 6-day Wellness & Safari Escape is designed to nourish both body and soul. Traverse the misty tea plantations of Nuwara Eliya, witness the majesty of leopards in Yala National Park, and find your center with included Ayurveda spa sessions. From the sacred Temple of the Tooth in Kandy to the colonial charm of Galle Fort, this is a journey of profound peace and exhilarating discovery.",
    img: "/destinations/Srilanka.webp",
    highlights: [
      "2 Included Ayurveda Wellness Spa Sessions",
      "Private Jeep Safari at Yala National Park",
      "Kandy Cultural Heritage & Temple of the Tooth",
      "Nuwara Eliya Tea Plantation & Ramboda Waterfall",
      "Galle Fort Exploration & Bentota Beach Relaxation"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & The Hills of Kandy", description: "Arrival at Bandaranaike International Airport. Enjoy a warm meet & greet followed by a private transfer to Kandy. Enroute, visit the Pinnawala Elephant Orphanage to see these majestic creatures. Check into your wellness-focused 4★ hotel. Dinner included." },
      { day: "Day 2", title: "Kandy Culture & Ayurveda Peace", description: "Visit the sacred Temple of the Tooth and the lush Royal Botanical Gardens in Peradeniya. Later, immerse yourself in a restorative 60-minute Ayurveda spa session (included) to melt away travel stress. Optional: Evening cultural dance show. Breakfast and Dinner included." },
      { day: "Day 3", title: "The Tea Trails of Nuwara Eliya", description: "Take a scenic drive through rolling tea plantations. Visit a tea factory to learn the secrets of Ceylon tea and witness the beauty of Ramboda Waterfall. Arrive in Nuwara Eliya and check into your hill retreat. Optional: Scenic train ride experience. Breakfast and Dinner included." },
      { day: "Day 4", title: "Yala Wilderness Safari", description: "Transfer to the rugged landscapes of Yala. In the afternoon, embark on an included private Jeep Safari at Yala National Park to spot leopards, elephants, and rare bird species. Stay at a premium safari lodge or resort. Breakfast and Dinner included." },
      { day: "Day 5", title: "Galle Fort & Bentota Sands", description: "Travel towards the southern coast. Enroute, explore the historic UNESCO-listed Galle Fort. Cross over to Bentota for an evening Ayurveda relaxation session. Optional: Water sports or a river safari. Breakfast and Dinner included." },
      { day: "Day 6", title: "Colombo Sights & Farewell", description: "Final transfer back to Colombo. If time permits, enjoy a brief city tour and last-minute shopping before your private transfer to the airport for your onward journey, carrying the serenity of Sri Lanka. Breakfast included." }
    ],
    inclusions: [
      "5 Nights stay in 4★/Wellness Resorts (or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Private vehicle with dedicated Chauffeur Guide",
      "Airport transfers (private)",
      "1 Private Jeep Safari at Yala National Park",
      "2 Included Wellness sessions (Ayurveda Spa)",
      "All managed sightseeing as per itinerary",
      "All service charges and government taxes"
    ],
    exclusions: [
      "International and domestic flights",
      "Sri Lanka Visa (ETA fees)",
      "Water sports & optional island activities",
      "Tips, porterage, and personal expenses",
      "Travel Insurance"
    ]
  },
  {
    slug: "hong-kong-macau-tour-packages-from-rajkot",
    name: "Hong Kong & Macau",
    price: "Enquire Now",
    category: "International Gems",
    duration: "5 Days / 4 Nights",
    bestTime: "September – December",
    desc: "A dazzling twin-city high-roller adventure blending the neon magic of Disneyland with the colonial grandeur of Macau.",
    longDesc: "Step into a world where neon skyscrapers meet ancient traditions. Our 5-day Hong Kong & Macau experience is designed for families and explorers alike. Delight in the magic of Hong Kong Disneyland, witness the Symphony of Lights over Victoria Harbour, and enjoy a high-speed ferry ride to the 'Vegas of the East'. From the historic Ruins of St. Paul’s in Macau to the panoramic heights of Victoria Peak, this journey offers the perfect balance of modern thrills and old-world charm.",
    img: "/destinations/HongKong.webp",
    highlights: [
      "Full-Day Hong Kong Disneyland Experience",
      "Victoria Harbour Symphony of Lights Show",
      "Victoria Peak & Avenue of Stars Tour",
      "High-Speed Ferry between Hong Kong & Macau",
      "Macau Heritage Tour: Ruins of St. Paul’s & Venetian Macao"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Hong Kong – Neon Welcome", description: "Arrival at Hong Kong International Airport. Private transfer to your 4★ hotel in the Tsim Sha Tsui or Kowloon area. Spend your evening by the stunning Victoria Harbour to witness the world-famous Symphony of Lights show across the skyline. Welcome dinner included." },
      { day: "Day 2", title: "The Magic of Hong Kong Disneyland", description: "A full day of wonder at Hong Kong Disneyland. Enjoy world-class rides, meet your favorite characters, and stay for the enchanting parades and nightly fireworks display. Optional upgrade: Disney Express Pass or character dining. Breakfast and Dinner included." },
      { day: "Day 3", title: "HK Landmarks & Ferry to Macau", description: "Discover Hong Kong's highlights with a tour including the panoramic Victoria Peak, Repulse Bay, and the Avenue of Stars. In the afternoon, board a high-speed ferry to Macau. Upon arrival, check into your 4★ luxury hotel. Breakfast and Dinner included." },
      { day: "Day 4", title: "Macau Heritage & The Venetian", description: "Explore the UNESCO-listed Ruins of St. Paul’s and the vibrant Senado Square. In the afternoon, witness the grandeur of the Venetian Macao and its famous canals. Optional: Macau Tower Skywalk or a high-stakes casino experience. Breakfast and Dinner included." },
      { day: "Day 5", title: "Final Farewell & Departure", description: "Enjoy a final Asian breakfast before taking a ferry or private transfer back to Hong Kong International Airport for your departure flight, carrying the excitement of two world-class cities. Breakfast included." }
    ],
    inclusions: [
      "4 Nights stay in 4★ hotels (Hong Kong & Macau)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "All airport and city transfers",
      "Hong Kong Half-Day City Tour",
      "1-Day Disneyland Entry Ticket",
      "Round-trip High-Speed Ferry (HK ↔ Macau)",
      "Macau City & Heritage Tour",
      "All managed sightseeing"
    ],
    exclusions: [
      "International flights",
      "Hong Kong & Macau Visa (if applicable)",
      "Optional tours & Disney Express upgrades",
      "Tips and personal expenses",
      "Travel Insurance"
    ]
  },
  {
    slug: "thailand-tour-packages-from-rajkot",
    name: "BANGKOK + PATTAYA + PHUKET + KRABI",
    price: "Enquire Now",
    category: "International Gems",
    duration: "7 Days / 6 Nights",
    bestTime: "November – April",
    desc: "A spectacular circuit spanning the neon lights of Bangkok to the turquoise waters of Phuket, Krabi, and Pattaya.",
    longDesc: "Experience the absolute best of the Land of Smiles in one legendary journey. Our Ultimate Thailand Escape takes you from the world-class beaches of Phuket and the limestone cliffs of Krabi to the vibrant street life of Bangkok and the island thrills of Pattaya. This curated 7-day itinerary includes multiple speedboat island tours, high-end 4★ stays, and all internal logistics — allowing you to immerse yourself fully in the beauty and hospitality of Thailand.",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Phi Phi Islands Speedboat Tour (Maya Bay & Snorkeling)",
      "Krabi 4-Islands Adventure with Picnic Lunch",
      "Domestic Flight from Krabi to Bangkok included",
      "Coral Island Excursion in Pattaya",
      "Luxury 4★ Stays throughout Phuket, Krabi & Pattaya"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Phuket – Tropical Welcome", description: "Arrival at Phuket International Airport. Meet & greet with private transfer to your 4★ hotel. Spend your first evening relaxing by the pool or taking a sunset walk along the beach. Welcome dinner served at the hotel." },
      { day: "Day 2", title: "Phi Phi Islands Speedboat Odyssey", description: "Embark on a full-day speedboat tour of the iconic Phi Phi Islands. Visit Maya Bay, Viking Cave, and Loh Samah Bay. Enjoy snorkeling in crystal-clear waters and a gourmet island lunch. Breakfast and Dinner included." },
      { day: "Day 3", title: "Phuket to Krabi Transfer", description: "Enjoy a final Phuket breakfast before a private transfer to the scenic province of Krabi. After check-in at your 4★ retreat, spend the evening at leisure exploring the limestone-framed Ao Nang beach. Breakfast and Dinner included." },
      { day: "Day 4", title: "Krabi 4-Islands Adventure", description: "Discover the best of Krabi's archipelago with a tour of the Four Islands: Phra Nang Cave Beach, Chicken Island, and Tup Island. Enjoy snorkeling amidst colorful reefs and lunch on the beach. Breakfast and Dinner included." },
      { day: "Day 5", title: "Flight to the Capital & Pattaya", description: "Private transfer to the airport for your domestic flight to Bangkok. Upon arrival, take a private transfer to the vibrant city of Pattaya. Check into your 4★ resort. Breakfast and Dinner included." },
      { day: "Day 6", title: "Coral Island & Bangkok Sunset", description: "Morning tour to the beautiful Coral Island for sun, sand, and turquoise waters. In the late afternoon, transfer back to Bangkok for your final night in the heart of the capital. Breakfast and Dinner included." },
      { day: "Day 7", title: "Final Farewell & Departure", description: "Enjoy your final Thai breakfast before your private transfer to Suvarnabhumi or Don Mueang Airport for your onward journey. Breakfast included." }
    ],
    inclusions: [
      "6 Nights accommodation in 4★ hotels (or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "All airport and city transfers (private)",
      "Domestic Flight (Krabi to Bangkok)",
      "Full-Day Phi Phi Island tour with Lunch",
      "Full-Day Krabi 4-Island tour with Lunch",
      "Coral Island tour in Pattaya",
      "All managed sightseeing and boat transfers"
    ],
    exclusions: [
      "International flights",
      "Thailand Visa fees (VOA if applicable)",
      "National Park fees (payable locally in cash)",
      "Water sports and adventure activities",
      "Optional tours & custom upgrades",
      "Travel Insurance"
    ]
  },
  {
    slug: "thailand-highlights-tour-packages-from-rajkot",
    name: "BANGKOK + PATTAYA",
    price: "Enquire Now",
    category: "International Gems",
    duration: "5 Days / 4 Nights",
    bestTime: "Year-round",
    desc: "A focused 5-day getaway capturing the neon energy of Pattaya and the spiritual grandeur of Bangkok.",
    longDesc: "Discover the perfect snapshot of Thailand with our Bangkok & Pattaya Highlights tour. Spend your first few days on the shores of Pattaya, enjoying speedboat island excursions and vibrant evening shows. Then, transition to the majestic capital, Bangkok, where ancient temples and modern luxury coexist. This 5-day journey is meticulously planned to ensure you experience the most iconic landmarks of both cities with local expertise and comfort.",
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Coral Island Speedboat Tour in Pattaya",
      "Bangkok City & Temple Tour (Wat Pho & Wat Arun)",
      "Optional Alcazar Show & Chao Phraya River Cruise",
      "Visit to the World-Famous Gems Gallery",
      "Managed transfers between all cities"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Bangkok & Pattaya Transfer", description: "Arrival at Bangkok Airport. Meet & greet with private transfer to your 4★ hotel in Pattaya. Evening at leisure to explore the vibrant Walking Street or opt for the spectacular Alcazar Show. Dinner served at the hotel." },
      { day: "Day 2", title: "Coral Island Speedboat Excursion", description: "Full-day tour to the beautiful Coral Island via speedboat. Enjoy the pristine beaches and turquoise waters. Optional water sports: Parasailing, Jet Ski, or Sea Walking. Return to Pattaya for an evening of relaxation. Breakfast and Dinner included." },
      { day: "Day 3", title: "Pattaya to Bangkok Transfer", description: "After breakfast, transfer to Bangkok. Enroute visit the world-famous Gems Gallery. After check-in at your 4★ Bangkok hotel, enjoy an optional evening on the Chao Phraya River Cruise with a buffet dinner. Breakfast and Dinner included." },
      { day: "Day 4", title: "Bangkok City & Temple Discovery", description: "Discover the spiritual heart of Bangkok with visits to Wat Pho (Reclining Buddha) and Wat Arun. Optional upgrades for Grand Palace interior or a full-day Safari World & Marine Park excursion. Breakfast and Dinner included." },
      { day: "Day 5", title: "Final Departure", description: "Enjoy a final Thai breakfast before your private transfer to the airport for your flight back home. Breakfast included." }
    ],
    inclusions: [
      "4 Nights accommodation in 4★ hotels (or similar)",
      "Daily Breakfast + Dinner (MAP Plan)",
      "Airport and inter-city transfers (private)",
      "Coral Island tour via speedboat",
      "Bangkok City & Highlights Tour",
      "All managed sightseeing"
    ],
    exclusions: [
      "International flights",
      "Thailand Visa fees (VOA if applicable)",
      "Entrance fees to temples and shows",
      "Water sports and adventure activities",
      "Optional excursions & custom upgrades",
      "Travel Insurance"
    ]
  },
  {
    slug: "spiritual-circuit-tour-packages-from-rajkot",
    name: "Ultimate Spiritual Circuit",
    price: "Enquire Now",
    category: "Heritage & Spiritual",
    duration: "8 Days / 7 Nights",
    bestTime: "October – March",
    desc: "A sacred odyssey through India's holiest cities — Kashi, Prayagraj, Ayodhya, and Gaya.",
    longDesc: "The Ultimate Spiritual Circuit is more than a journey; it is a pilgrimage of the soul. From the eternal ghats of Varanasi and the sacred confluence of the Triveni Sangam to the divine birthplace of Lord Ram in Ayodhya and the enlightenment grounds of Bodh Gaya, this 8-day experience is curated for the devout seeker. We provide a seamless blend of deep spirituality and modern comfort, featuring VIP temple access, private rituals with dedicated priests, and premium accommodations in every holy city.",
    img: "https://images.unsplash.com/photo-1518005020250-ecaec5f28d22?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "VIP Darshan at Kashi Vishwanath Temple",
      "Private Sunrise & Ganga Aarti Boat Rides",
      "Guided Ram Janmabhoomi & Saryu River Experience",
      "Triveni Sangam Snan with Priest Assistance",
      "Pind Daan Rituals at Gaya & Bodh Gaya Exploration"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Varanasi – The Eternal City", description: "Arrival at Varanasi Airport or Railway Station. Warm welcome and private transfer to your premium hotel. In the evening, witness the soul-stirring Ganga Aarti at Dashashwamedh Ghat from a private boat. Welcome dinner included." },
      { day: "Day 2", title: "Kashi Vishwanath VIP Darshan", description: "Early morning VIP Darshan at the Kashi Vishwanath Temple. Later, visit the Kaal Bhairav Temple and embark on a curated heritage walk through the ancient lanes of the old city. Enjoy the spiritual vibrations of the world's oldest living city. Breakfast and Dinner included." },
      { day: "Day 3", title: "Sunrise Devotion & Sarnath Peace", description: "Experience a peaceful sunrise boat ride on the Ganga. In the afternoon, visit Sarnath, where Lord Buddha delivered his first sermon. Evening at leisure or an optional premium cruise dinner. Breakfast and Dinner included." },
      { day: "Day 4", title: "The Confluence at Prayagraj", description: "Private drive to Prayagraj. Visit the Triveni Sangam, the holy confluence of Ganga, Yamuna, and Saraswati. Experience a private Sangam snan and puja with priest assistance. Visit the Anand Bhawan and Allahabad Fort. Breakfast and Dinner included." },
      { day: "Day 5", title: "The Divine Birthplace – Ayodhya", description: "Journey to the holy city of Ayodhya. Visit the Ram Janmabhoomi and Hanuman Garhi. In the evening, attend the serene Aarti at the Saryu River Ghat. Experience the revitalized energy of this sacred land. Breakfast and Dinner included." },
      { day: "Day 6", title: "Transfer to Gaya", description: "Proceed to Gaya via Varanasi or premium rail/flight options. Check into your hotel and prepare for the final leg of the circuit. Evening orientation of the spiritual sites. Breakfast and Dinner included." },
      { day: "Day 7", title: "Gaya Rituals & Bodh Gaya", description: "Perform essential rituals and Pind Daan at the Vishnupad Temple with dedicated priest assistance. Later, visit the Mahabodhi Temple in Bodh Gaya, the place of Buddha's enlightenment. Spend silent time in meditation. Breakfast and Dinner included." },
      { day: "Day 8", title: "Final Departure", description: "After a final spiritual breakfast, take a private transfer to the nearest airport (Patna or Varanasi) for your flight back home, carrying a renewed spirit. Breakfast included." }
    ],
    inclusions: [
      "7 Nights Premium 4★ or 5★ accommodation",
      "Daily Breakfast & Dinner (with 1 special dinner experience)",
      "Private AC vehicle for all transfers & sightseeing",
      "VIP Darshan assistance at Kashi Vishwanath Temple",
      "Private Boat Rides (Sunrise & Ganga Aarti)",
      "Dedicated Priest assistance for Sangam & Gaya Rituals",
      "Professional Spiritual Guides in selected cities",
      "All tolls, parking, and driver allowances"
    ],
    exclusions: [
      "International or domestic airfare/train tickets",
      "Lunch and personal discretionary expenses",
      "Special individual pujas not mentioned in the plan",
      "Laundry and tips",
      "Travel Insurance"
    ]
  }
];
