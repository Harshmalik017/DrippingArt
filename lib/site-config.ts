export const siteConfig = {
  name: "Dripping Art",
  owner: "Rashmi Tomar",
  tagline: "Personalised Resin Art Pieces",
  location: "Sanjay Nagar, Ghaziabad",
  phone: "9910450181",
  phoneDisplay: "+91 99104 50181",
  email: "rashmiit25@gmail.com",
  instagramHandle: "@dripping_art",
  instagramUrl: "https://instagram.com/dripping_art",
  whatsappUrl:
    "https://wa.me/919910450181?text=Hi%20Rashmi!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece%20from%20Dripping%20Art.",
  orderNowUrl:
    "https://wa.me/919910450181?text=Hi%20Rashmi!%20I%27d%20like%20to%20place%20an%20order%20with%20Dripping%20Art.%20Here%27s%20what%20I%20have%20in%20mind%3A%20",
  advancePaymentPercent: 50,
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  accent: "coral" | "gold" | "blush" | "plum" | "terracotta" | "sand";
  tags: string[];
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "wall-clocks",
    name: "Wall Clocks",
    description: "Statement resin clocks poured with marbled colour and gold veining.",
    accent: "coral",
    tags: ["Home Decor", "Bestseller"],
    featured: true,
  },
  {
    slug: "keychains",
    name: "Keychains",
    description: "Pocket-sized keepsakes with initials, dried flowers or tiny charms set in resin.",
    accent: "gold",
    tags: ["Accessories", "Gifting", "Budget Friendly"],
    featured: true,
  },
  {
    slug: "photo-frames",
    name: "Photo Frames",
    description: "Hand-poured frames that turn a favourite photo into a lasting piece of art.",
    accent: "blush",
    tags: ["Home Decor", "Personalised", "Gifting"],
    featured: true,
  },
  {
    slug: "nameplates",
    name: "Nameplates",
    description: "Custom door and desk nameplates finished with a glossy, drip-edge pour.",
    accent: "plum",
    tags: ["Home Decor", "Personalised"],
    featured: true,
  },
  {
    slug: "coasters",
    name: "Coasters",
    description: "Sets of ocean and geode-style coasters, no two pours ever quite the same.",
    accent: "terracotta",
    tags: ["Home Decor", "Gifting", "Budget Friendly"],
  },
  {
    slug: "jewellery-trays",
    name: "Jewellery Trays",
    description: "Little dishes for rings and earrings, poured in soft blush and gold tones.",
    accent: "sand",
    tags: ["Accessories", "Gifting"],
  },
];

export const allCategoryTags = Array.from(
  new Set(categories.flatMap((category) => category.tags))
).sort();

export type Service = {
  slug: string;
  name: string;
  description: string;
  accent: Category["accent"];
};

export const services: Service[] = [
  {
    slug: "wedding-mala-preservation",
    name: "Wedding Mala Preservation",
    description:
      "Your wedding varmala, set in clear resin with a custom base and colour so it can be displayed forever instead of packed away.",
    accent: "terracotta",
  },
  {
    slug: "bridal-bouquet-preservation",
    name: "Bridal Bouquet Preservation",
    description:
      "Real or dried bouquet flowers preserved in a resin dome or frame, so the day stays on your shelf, not just in photos.",
    accent: "blush",
  },
  {
    slug: "baby-milestone-keepsakes",
    name: "Baby Milestone Keepsakes",
    description:
      "A hospital band, first curl or tiny booties set into a resin block or ornament, dated and personalised.",
    accent: "gold",
  },
  {
    slug: "memorial-keepsakes",
    name: "Memorial Keepsakes",
    description:
      "A quiet, personal way to keep a photo, a note or a small memento of someone close, finished with care.",
    accent: "plum",
  },
  {
    slug: "corporate-bulk-gifting",
    name: "Corporate & Bulk Gifting",
    description:
      "Branded coasters, keychains or nameplates in matching colourways for weddings, offices and events.",
    accent: "sand",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  piece: string;
  // Shown in the homepage carousel when true; the /reviews page always
  // shows every testimonial in this array regardless of this flag.
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    location: "Ghaziabad",
    quote:
      "The wall clock matched our living room perfectly, and Rashmi kept adjusting the colours until we were happy. It arrived carefully packed and exactly on time.",
    piece: "Marble Wall Clock",
    featured: true,
  },
  {
    name: "Rohit Verma",
    location: "Delhi",
    quote:
      "We got our wedding mala preserved and it's now the centrepiece of our hallway. So much better than it sitting in a box somewhere.",
    piece: "Wedding Mala Preservation",
    featured: true,
  },
  {
    name: "Priya Malhotra",
    location: "Noida",
    quote:
      "Ordered a set of nameplate and keychains as return gifts. Every single piece looked a little different, which made them feel special.",
    piece: "Nameplate + Keychain Set",
    featured: true,
  },
  {
    name: "Karan Mehta",
    location: "Ghaziabad",
    quote:
      "Rashmi understood exactly what I wanted from a two-line description and a reference photo. Communication was easy throughout.",
    piece: "Custom Photo Frame",
    featured: true,
  },
  {
    name: "Simran Kaur",
    location: "Gurugram",
    quote:
      "Sent over our bouquet the week after the wedding and honestly forgot about it until it arrived — it looks better than the real flowers ever did.",
    piece: "Bridal Bouquet Preservation",
    featured: true,
  },
  {
    name: "Vikram Nair",
    location: "Ghaziabad",
    quote:
      "Ordered coasters for a housewarming and everyone asked where they were from. Fast replies on WhatsApp throughout the process too.",
    piece: "Ocean Geode Coaster Set",
    featured: true,
  },
  {
    name: "Divya Kapoor",
    location: "Delhi",
    quote:
      "The jewellery tray I ordered as a gift was even prettier in person. Well packed and delivered a day earlier than expected.",
    piece: "Jewellery Tray",
  },
  {
    name: "Arjun Bhatia",
    location: "Noida",
    quote:
      "We ordered 40 branded keychains for a corporate event on a tight deadline and Rashmi delivered on time with consistent quality across the batch.",
    piece: "Corporate & Bulk Gifting",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do you need payment in advance for custom orders?",
    answer:
      "Yes — custom and personalised pieces need a 50% advance to begin production, with the remaining balance due before the piece is shipped or handed over. Ready-made pieces can be paid for in full at the time of order.",
  },
  {
    question: "How long does a custom piece take?",
    answer:
      "Most pieces take 5–10 days from confirming your design, since resin needs several days to fully cure between layers. Wedding mala and bouquet preservation can take a little longer depending on the design.",
  },
  {
    question: "Can I send my own item to be preserved in resin?",
    answer:
      "Yes — for services like wedding mala, bouquet or milestone preservation, you'll ship or drop off the item, and Rashmi will confirm the design and base colour with you before pouring.",
  },
  {
    question: "Do you ship outside Ghaziabad/Delhi-NCR?",
    answer:
      "Yes, pieces are shipped pan-India with careful packaging. Message on WhatsApp with your pincode for a shipping estimate.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Tap any \"Order Now\" button to open WhatsApp with a message started for you, or reach out over Instagram or email. Rashmi will confirm details, pricing and the advance payment before starting.",
  },
];
