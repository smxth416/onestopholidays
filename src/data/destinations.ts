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
    slug: "goa",
    name: "Goa",
    price: "₹24,000",
    category: "Coastal Luxury",
    duration: "5 Days / 4 Nights",
    bestTime: "October – March",
    desc: "Pristine sands and sunset rhythms at our curated coastal retreats.",
    longDesc: "Goa is where golden sunsets spill over endless Arabian Sea horizons, Portuguese-era churches stand alongside vibrant night markets, and every day feels like a celebration. Our curated coastal retreat places you in handpicked boutique villas steps from the finest beaches, with private transfers, sunset cruise experiences, and access to Goa's most exclusive beach clubs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8KIg52psEjZinlG2FF-64bDU8zj4tpEFwJvstCgYRXYMyiXpXfDxww3jBe2xykyXvD3h3l_4PbFEmBmyjTJ_RfMWkxNSy8Y1ouGKU3zPSf_Z-ev9CudODtYUI2mq_KJIL5iBln98oXKkxLELH69hjiTcPaO_i3kSqSDUQ1a1SkQpi92esT43dHwnrQ_2voP4Bj55RJewx-deYofIAYAjEi2v8jnRTYsj8jjrz0mG7XI0N3ylrahHkydUwTNVujP8S87NEJwInFdQ",
    highlights: ["Private sunset cruise on the Mandovi River", "Curated heritage walk through Old Goa", "Exclusive beach club access", "Authentic Goan cooking masterclass", "Spice plantation tour with lunch"],
    itinerary: [
      { day: "Day 1", title: "Arrival & Coastal Welcome", description: "Private airport transfer to your boutique villa. Evening welcome dinner at a beachfront restaurant with live Fado music." },
      { day: "Day 2", title: "Heritage & Culture", description: "Guided tour of Old Goa's UNESCO churches followed by a Latin Quarter walk in Fontainhas. Afternoon at leisure with spa access." },
      { day: "Day 3", title: "Sun, Sand & Spice", description: "Morning visit to a spice plantation with traditional lunch. Afternoon beach hopping across North Goa's finest shores." },
      { day: "Day 4", title: "Cruise & Cuisine", description: "Private sunset cruise on the Mandovi River with canapes. Evening Goan cooking masterclass with a celebrated local chef." },
      { day: "Day 5", title: "Farewell & Departure", description: "Leisurely breakfast, last-minute shopping at Anjuna flea market, and private transfer to the airport." },
    ],
    inclusions: ["4 nights luxury boutique accommodation", "Daily breakfast & 2 curated dinners", "Private airport transfers", "Sunset cruise experience", "Heritage walking tour", "Spice plantation visit", "24/7 concierge support"],
  },
  {
    slug: "manali",
    name: "Manali",
    price: "₹18,500",
    category: "Mountain Retreats",
    duration: "6 Days / 5 Nights",
    bestTime: "March – June, September – November",
    desc: "Find your peak in the heart of the Himalayas with bespoke alpine treks.",
    longDesc: "Manali sits cradled between snow-dusted peaks and lush cedar forests in the Kullu Valley, offering an intoxicating mix of adventure and tranquility. From challenging treks to Solang Valley and Rohtang Pass to peaceful mornings by the Beas River, our bespoke mountain retreat combines exhilarating alpine experiences with the warmth of Himalayan hospitality.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJPSFCeqnfVal6wVuwH6Cx6A3hCSn2aS_bl6BqvHxsdsLpYgL9EkyWf9RhSvEUOpDhv62rS6xwCku6lf5IqDKlQlbcl3GmgX34MfvyTl7KbCY7OmCLui-8sz35rjT9OqQIk3DPIWkcAL55L8MY7klZvSKhHi36vcu5uxD4u0ZTImfEk7V0l6a-NHqVuKRj0dinlwD_M-ibyjqogaU3g6BVdqUaHeJRpxS_hPGVN3ytYjDnwa3Bpc4g4bZTx7il7DAuvwzqy1K_ho",
    highlights: ["Guided trek to Solang Valley", "Rohtang Pass excursion", "River rafting on the Beas", "Visit to Hadimba Temple", "Bonfire evening with local folk music"],
    itinerary: [
      { day: "Day 1", title: "Arrival in the Valley", description: "Transfer from Chandigarh/Bhuntar to Manali. Settle into your riverside lodge. Evening orientation walk through Mall Road." },
      { day: "Day 2", title: "Old Manali & Temples", description: "Visit the ancient Hadimba Temple and Manu Temple. Explore the charming lanes of Old Manali with artisan cafés." },
      { day: "Day 3", title: "Solang Valley Adventure", description: "Full-day excursion to Solang Valley with options for paragliding, zorbing, and short treks amidst panoramic peaks." },
      { day: "Day 4", title: "Rohtang Pass Expedition", description: "Journey to the legendary Rohtang Pass (3,978m). Snow activities and breathtaking views of the Pir Panjal range." },
      { day: "Day 5", title: "River & Relaxation", description: "Morning river rafting on the Beas River. Afternoon at leisure with hot spring visit. Farewell bonfire with folk music." },
      { day: "Day 6", title: "Departure", description: "Leisurely breakfast and transfer to Bhuntar airport or Chandigarh with cherished mountain memories." },
    ],
    inclusions: ["5 nights mountain lodge stay", "Daily breakfast & dinner", "All transfers & excursions", "Certified trek guide", "River rafting session", "Rohtang Pass permits", "Emergency support kit"],
  },
  {
    slug: "dubai",
    name: "Dubai",
    price: "₹52,000",
    category: "International Gems",
    duration: "5 Days / 4 Nights",
    bestTime: "November – March",
    desc: "Experience ultimate grandeur where the golden desert meets the future.",
    longDesc: "Dubai is a city that defies imagination — where the world's tallest tower pierces the sky, man-made islands dot the coast, and ancient souks sit in the shadow of futuristic architecture. Our premium Dubai experience immerses you in unparalleled luxury, from private desert safaris under star-lit skies to exclusive access to the city's most iconic landmarks.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1aEcVP8fdLoU80XwGZNDeJ-Y81KUEJgsbR8-0sXe1VqEYRM6wJXFo-CCOfJxnjASvhQPJzv89Ox7E6q8fizHApU1OGyBCapqq_KHzQ4W6gHA_U8GAdVPtHcx4_IGvQzYv77tYsRQGBiQ9q7eWoDyujXaPB4CRK7fU51d5NV5RnYgU3k-fSpNAZLLYyvb3uTwvGTBoYbLr_Cg8nEJXsg8nFWXcMTkfUL0Ng0jwasBdi61Rxa-ZL7l-mde2sUaHAsKN_oGEhuHjpmY",
    highlights: ["Burj Khalifa 'At the Top' experience", "Private luxury desert safari", "Dubai Marina yacht cruise", "Gold & Spice Souk tour", "Aquaventure Waterpark access"],
    itinerary: [
      { day: "Day 1", title: "Arrival & City Lights", description: "Private transfer to your 5-star hotel. Evening visit to Burj Khalifa observation deck followed by dinner at a sky-high restaurant." },
      { day: "Day 2", title: "Old & New Dubai", description: "Morning abra ride across Dubai Creek, explore Gold and Spice Souks. Afternoon at Dubai Mall with aquarium visit." },
      { day: "Day 3", title: "Desert & Stars", description: "Luxury desert safari with dune bashing, camel rides, and a BBQ dinner under the stars with live entertainment." },
      { day: "Day 4", title: "Marina & Leisure", description: "Morning at Aquaventure Waterpark. Afternoon yacht cruise through Dubai Marina with views of Palm Jumeirah and Atlantis." },
      { day: "Day 5", title: "Farewell Shopping", description: "Last-minute shopping at Mall of the Emirates. Private transfer to Dubai International Airport." },
    ],
    inclusions: ["4 nights 5-star hotel", "Daily breakfast", "Private airport transfers", "Burj Khalifa tickets", "Desert safari experience", "Marina yacht cruise", "Aquaventure access"],
  },
  {
    slug: "maldives",
    name: "Maldives",
    price: "₹85,000",
    category: "Coastal Luxury",
    duration: "6 Days / 5 Nights",
    bestTime: "November – April",
    desc: "A sanctuary of turquoise waters and absolute seclusion for the elite traveler.",
    longDesc: "The Maldives is the epitome of paradise — a string of 1,190 coral islands scattered across the Indian Ocean like jewels on blue velvet. Our exclusive overwater villa experience offers total seclusion, crystal-clear lagoons teeming with marine life, and the kind of sunsets that redefine beauty. This is luxury distilled to its purest form.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-6rfuQqpzkouxjFv3x9ioHbgr8Ki8FO-1P3AEAhPS0vb3q0GxZmue7b7BTAmRO43L1SmiS9FKHHnl8DZExqKpiN5kqYiuY1o8Va16Hy4nRd8A6aEFd_gNOW2NbB9ozNPnN6dK3KVJ9603wuHBO3MbrWzCRchAKlouBQ9-4Sn0TSCN4dmpGP2vFSeyblW0bvgIDftDa5WHHzF932eb9n3M714vdv_BGRlXQsLo_zw5lI-hYy5cTZkCc3brFO0B9juKajoDyctbdY",
    highlights: ["Overwater villa with private pool", "Guided snorkeling & reef safari", "Dolphin watching cruise", "Underwater restaurant dining", "Sunset fishing with locals"],
    itinerary: [
      { day: "Day 1", title: "Island Arrival", description: "Seaplane transfer to your private island resort. Welcome cocktails and overwater villa check-in. Evening beach dinner." },
      { day: "Day 2", title: "Ocean Exploration", description: "Guided snorkeling safari across pristine reefs. Afternoon spa treatment. Dinner at the underwater restaurant." },
      { day: "Day 3", title: "Dolphin & Leisure", description: "Morning dolphin watching cruise. Rest of the day at leisure — kayaking, paddleboarding, or simply floating in your private pool." },
      { day: "Day 4", title: "Island Hopping", description: "Visit a local Maldivian island to experience authentic culture. Traditional lunch with a local family. Evening sunset fishing." },
      { day: "Day 5", title: "Pure Relaxation", description: "Full day of indulgence — couples spa, beach picnic on a private sandbank, stargazing dinner on the deck." },
      { day: "Day 6", title: "Farewell Paradise", description: "Final sunrise yoga session. Breakfast and seaplane transfer back to Malé for departure." },
    ],
    inclusions: ["5 nights overwater villa", "Full board (all meals)", "Seaplane transfers", "Snorkeling equipment & guide", "Dolphin cruise", "Underwater dining experience", "Spa credit & island hopping"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    price: "₹35,000",
    category: "Mountain Retreats",
    duration: "7 Days / 6 Nights",
    bestTime: "March – October",
    desc: "Ethereal valleys and slow shikara rides on the paradise on earth.",
    longDesc: "Kashmir, the crown jewel of India, is a land of breathtaking beauty — from the mirror-still waters of Dal Lake to the flower-carpeted meadows of Gulmarg and the ancient Mughal Gardens. Our immersive Kashmir experience combines the romance of houseboat stays with alpine adventures, offering a journey through what emperors once called 'Paradise on Earth'.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNlP-vxR9L2IirHvtUtK-IeUWPzdQq6qwQ_bAqYtH6-ZV8m3pAZFamVbyvhPAssaEQRhvjJwBzc7wBAPFed10on54Moc-kaopEM5oToKb4k4URhPMx7xL0q6NiPGh61JSmVlkbFjYIImLhjgAcR5za-q8RVn39Ugyro-0YllPK5Qluy2hp4G_NPiXApYP14V7N2lqKkUSb4Po7LTMjAgbdC1pv60bXQM7SLxpvkqNYmRI-GYf0VEmeNWbbIIkUqiUj-6AtQn5Pf3s",
    highlights: ["Shikara ride on Dal Lake", "Stay in a luxury houseboat", "Gondola ride in Gulmarg", "Mughal Gardens heritage tour", "Saffron field visit in Pampore"],
    itinerary: [
      { day: "Day 1", title: "Welcome to Paradise", description: "Arrival at Srinagar airport. Transfer to your luxury houseboat on Dal Lake. Evening shikara ride at sunset." },
      { day: "Day 2", title: "Mughal Heritage", description: "Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi — the legendary Mughal Gardens. Afternoon at the floating market." },
      { day: "Day 3", title: "Gulmarg Adventure", description: "Day trip to Gulmarg. Ride Asia's highest gondola for jaw-dropping views. Optional skiing or meadow walks." },
      { day: "Day 4", title: "Pahalgam & Valleys", description: "Drive to Pahalgam through saffron fields of Pampore. Explore Betaab Valley and Aru Valley." },
      { day: "Day 5", title: "Sonmarg Excursion", description: "Journey to Sonmarg — the 'Meadow of Gold'. Pony ride to Thajiwas Glacier surrounded by alpine flowers." },
      { day: "Day 6", title: "Local Life & Craft", description: "Visit a Pashmina weaving workshop. Explore Srinagar's old city and try Wazwan cuisine at a local home." },
      { day: "Day 7", title: "Fond Farewell", description: "Morning at leisure on the houseboat. Transfer to Srinagar airport with the beauty of Kashmir in your heart." },
    ],
    inclusions: ["2 nights luxury houseboat", "4 nights premium hotel", "Daily breakfast & dinner", "All transfers & sightseeing", "Gondola tickets", "Shikara rides", "Pashmina workshop visit"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    price: "₹28,000",
    category: "Desert Safari",
    duration: "8 Days / 7 Nights",
    bestTime: "October – March",
    desc: "Walk through the corridors of history in the land of kings and vibrant sands.",
    longDesc: "Rajasthan is India's most regal state — a land of imposing forts, opulent palaces, vibrant bazaars, and endless golden dunes. From the pink-hued streets of Jaipur to the blue city of Jodhpur and the romantic lakes of Udaipur, our royal Rajasthan circuit immerses you in centuries of history, art, and the legendary hospitality of the land of Maharajas.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOHD5qdTHi6zi6R5jK8ZxeLLxnlxmsVWrKmlsjMHT4vdq3Yz1l2EMnsX61EKGjuIqGwAnDZdhQy-GMrLLefDtOXJzO6SXWTVE6r2XFlg6NV0oT7NdqXnRnv72wMAAvdgl1_1ZfQrvCMnULtx517q8o_BPAjMJHEF8ulFDfc4eDmK2XbwBOjuQlUvyI1UEE1pMYqYWggNfS8s4rdUlAZ9PJG4JcPUynyv6DOK8YYRNnp78yjuQm-GBATQY5hN5YEeEsXx7qR3Xsamc",
    highlights: ["Amber Fort elephant/jeep ride", "Desert camping under the stars in Jaisalmer", "Sunset boat ride on Lake Pichola", "Explore Mehrangarh Fort, Jodhpur", "Traditional Rajasthani folk evening"],
    itinerary: [
      { day: "Day 1", title: "Pink City Welcome", description: "Arrive in Jaipur. Check into a heritage haveli. Evening visit to Nahargarh Fort for panoramic sunset views." },
      { day: "Day 2", title: "Jaipur Royalty", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening bazaar walk through Johari Bazaar." },
      { day: "Day 3", title: "Journey to Jodhpur", description: "Drive to the Blue City. Explore Mehrangarh Fort, one of India's most impressive citadels. Evening at the clock tower market." },
      { day: "Day 4", title: "Blue City Immersion", description: "Walking tour through Jodhpur's blue-washed old city. Visit Umaid Bhawan Palace museum. Afternoon zip-lining over Mehrangarh." },
      { day: "Day 5", title: "Golden City Jaisalmer", description: "Travel to Jaisalmer. Explore the living fort and Patwon Ki Haveli. Evening camel ride into the Thar Desert." },
      { day: "Day 6", title: "Desert Overnight", description: "Full desert experience — dune bashing, folk music, traditional dinner, and overnight camping under a canopy of stars." },
      { day: "Day 7", title: "Udaipur Romance", description: "Fly to Udaipur. Visit City Palace and Saheliyon Ki Bari. Sunset boat ride on Lake Pichola with Taj Lake Palace views." },
      { day: "Day 8", title: "Royal Farewell", description: "Morning at leisure by the lake. Transfer to Udaipur airport with memories of a lifetime." },
    ],
    inclusions: ["7 nights heritage accommodation", "Daily breakfast & select dinners", "All inter-city transfers", "Monument entry fees", "Desert safari & camping", "Lake Pichola boat ride", "Local English-speaking guides"],
  },
  {
    slug: "bali",
    name: "Bali",
    price: "Enquire Now",
    category: "International Gems",
    duration: "6 Days / 5 Nights",
    bestTime: "April – October",
    desc: "Experience a perfect blend of rich culture, stunning beaches, and romantic leisure in the Island of Gods.",
    longDesc: "Bali is an island paradise that offers a mesmerizing blend of vibrant culture, lush landscapes, and immaculate beaches. From the bustling streets of Kuta and Seminyak to the spiritual heart of Ubud, our curated 6-day itinerary ensures you experience the best of the Island of Gods. Enjoy thrilling water sports, breathtaking sunsets at Uluwatu, a full-day exploration of Nusa Penida, and relaxing romantic moments amidst nature.",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
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
  }
];
