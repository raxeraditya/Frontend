// data/products.ts

export interface HomeProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  badge?: string; // Optional badge property
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isWishlisted?: boolean;
}

// Ensure ids are strings, prices are numbers, and 'tag' is renamed to 'badge'
export const Homeproducts: HomeProduct[] = [
  {
    id: "1", // 👈 String (wrapped in quotes)
    title: "Minimalist Wireless Earbuds",
    description:
      "Immerse yourself in active noise-canceling audio with 30-hour battery life.",
    price: 129, // 👈 Raw number (no "$" sign or quotes)
    originalPrice: 179, // 👈 Raw number
    badge: "Best Seller", // 👈 Renamed from 'tag' to 'badge'
    rating: 4.8,
    reviewsCount: 240,
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    isWishlisted: true,
  },
  {
    id: "2", // 👈 String
    title: "Tactile Mechanical Keyboard",
    description:
      "Ultra-responsive hot-swappable mechanical switches with custom RGB profiles.",
    price: 149, // 👈 Number
    originalPrice: 199, // 👈 Number
    badge: "Trending", // 👈 Renamed from 'tag'
    rating: 4.9,
    reviewsCount: 185,
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
    isWishlisted: false,
  },
  {
    id: "3", // 👈 String
    title: "Ergonomic Smart Watch",
    description:
      "Track health metrics, heart rate, and workouts with a crisp AMOLED display.",
    price: 210, // 👈 Number
    originalPrice: 260, // 👈 Number
    badge: "New Arrival", // 👈 Renamed from 'tag'
    rating: 4.7,
    reviewsCount: 92,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    isWishlisted: false,
  },
];
