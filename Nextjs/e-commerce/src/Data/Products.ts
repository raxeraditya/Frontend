// data/products.ts

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isWishlisted?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Minimalist Wireless Earbuds",
    description:
      "Active noise-canceling earphone audio with 30-hour total battery life and ergonomic fit.",
    price: 129,
    originalPrice: 179,
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 240,
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    isWishlisted: true,
  },
  {
    id: "2",
    title: "Tactile Mechanical Keyboard",
    description:
      "Ultra-responsive hot-swappable mechanical switches with custom RGB backlight profiles.",
    price: 149,
    originalPrice: 199,
    badge: "Trending",
    rating: 4.9,
    reviewsCount: 185,
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Ergonomic Smart Watch",
    description:
      "Track health metrics, heart rate, and daily workouts with a crisp AMOLED touchscreen display.",
    price: 210,
    originalPrice: 260,
    badge: "New Arrival",
    rating: 4.7,
    reviewsCount: 92,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Over-Ear Hi-Fi Headphones",
    description:
      "Studio-grade sound reproduction with memory foam ear cushions and detachable cable.",
    price: 299,
    originalPrice: 349,
    badge: "Top Rated",
    rating: 4.9,
    reviewsCount: 310,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Ultra-Slim Desk Mat",
    description:
      "Waterproof vegan leather desk pad providing smooth mouse tracking and desk protection.",
    price: 35,
    originalPrice: 50,
    badge: "Hot Deal",
    rating: 4.6,
    reviewsCount: 78,
    imageUrl:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Precision Ergonomic Mouse",
    description:
      "Multi-device wireless mouse with magnetic scrolling wheel and customizable side buttons.",
    price: 89,
    originalPrice: 110,
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 420,
    imageUrl:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "4K Webcam with Dual Mics",
    description:
      "Pro streaming webcam featuring auto-focus, low-light correction, and built-in privacy shutter.",
    price: 119,
    originalPrice: 150,
    badge: "Trending",
    rating: 4.5,
    reviewsCount: 115,
    imageUrl:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Portable Bluetooth Speaker",
    description:
      "Rugged IPX7 waterproof speaker delivering 360-degree punchy bass and 20 hours play time.",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviewsCount: 160,
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Aluminum Laptop Stand",
    description:
      "Vented heat-dissipating riser elevating screens to eye level for posture support.",
    price: 45,
    originalPrice: 65,
    badge: "Popular",
    rating: 4.8,
    reviewsCount: 290,
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Magnetic Power Bank 10,000mAh",
    description:
      "MagSafe compatible fast wireless charging battery pack with LED indicator.",
    price: 59,
    originalPrice: 75,
    badge: "New",
    rating: 4.6,
    reviewsCount: 88,
    imageUrl:
      "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "11",
    title: "Minimalist Leather Backpack",
    description:
      "Full-grain waterproof backpack equipped with padded 16-inch laptop compartment.",
    price: 165,
    originalPrice: 210,
    badge: "Featured",
    rating: 4.9,
    reviewsCount: 142,
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "12",
    title: "Noise-Isolating Desk Mic",
    description:
      "USB condenser microphone ideal for podcasts, remote meetings, and gaming voice chat.",
    price: 95,
    originalPrice: 130,
    rating: 4.7,
    reviewsCount: 210,
    imageUrl:
      "https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "13",
    title: "Smart RGB Ambient Light Bar",
    description:
      "Monitor-mounted anti-glare light bar with customizable color temperatures.",
    price: 68,
    originalPrice: 90,
    badge: "Trending",
    rating: 4.8,
    reviewsCount: 175,
    imageUrl:
      "https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "14",
    title: "GaN Fast Charger 65W",
    description:
      "Compact dual USB-C wall adapter capable of charging laptops, tablets, and phones.",
    price: 39,
    originalPrice: 55,
    rating: 4.9,
    reviewsCount: 380,
    imageUrl:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "15",
    title: "Wireless Charging Dock 3-in-1",
    description:
      "Simultaneously powers smartphone, smart watch, and earbuds with single cord setup.",
    price: 75,
    originalPrice: 100,
    badge: "Best Seller",
    rating: 4.7,
    reviewsCount: 265,
    imageUrl:
      "https://images.unsplash.com/photo-1622445268465-843d63d03700?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "16",
    title: "Smart Fitness Tracker Band",
    description:
      "Continuous SpO2 and sleep tracking band with water resistance up to 50 meters.",
    price: 49,
    originalPrice: 69,
    rating: 4.5,
    reviewsCount: 195,
    imageUrl:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "17",
    title: "Mechanical Macro Pad",
    description:
      "Programmable 9-key shortcut keypad with tactile rotary dial knob.",
    price: 52,
    originalPrice: 70,
    badge: "Niche",
    rating: 4.8,
    reviewsCount: 64,
    imageUrl:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "18",
    title: "Leather Cable Organizer Bag",
    description:
      "Travel pouch with elastic loops and zipper pockets for power banks and cables.",
    price: 28,
    originalPrice: 40,
    rating: 4.6,
    reviewsCount: 112,
    imageUrl:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "19",
    title: "Smart Mug Temperature Control",
    description:
      "App-controlled heated ceramic travel mug keeping drinks at your exact temperature.",
    price: 110,
    originalPrice: 140,
    badge: "Gift Idea",
    rating: 4.7,
    reviewsCount: 130,
    imageUrl:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "20",
    title: "Vertical Ergonomic Mouse",
    description:
      "Helps reduce wrist strain and carpal tunnel tension during long work sessions.",
    price: 42,
    originalPrice: 60,
    rating: 4.5,
    reviewsCount: 220,
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
  },
  // Adding items 21 through 50...
  ...Array.from({ length: 30 }).map((_, i) => {
    const idNum = i + 21;
    const names = [
      "Ultra-Wide Curved Monitor",
      "Smart Home Hub Speaker",
      "Noise-Canceling Earplugs",
      "Type-C USB Hub 7-in-1",
      "Adjustable Monitor Arm",
      "Desk Cable Management Tray",
      "Minimalist Wallet Clip",
      "Portable SSD Drive 1TB",
      "Wireless Presenter Pointer",
      "Ergonomic Lumbar Cushion",
    ];
    const name = names[i % names.length] + ` Gen ${Math.floor(i / 10) + 1}`;

    return {
      id: String(idNum),
      title: name,
      description: `High quality ${name.toLowerCase()} constructed with premium materials and optimized for productivity.`,
      price: 30 + ((idNum * 3) % 180),
      originalPrice: 50 + ((idNum * 3) % 180) + 25,
      badge:
        idNum % 4 === 0 ? "Trending" : idNum % 5 === 0 ? "Sale" : undefined,
      rating: Number((4.2 + (idNum % 8) * 0.1).toFixed(1)),
      reviewsCount: 50 + idNum * 7,
      imageUrl:
        [
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
        ][idNum % 5] + "?q=80&w=800&auto=format&fit=crop",
    };
  }),
];
