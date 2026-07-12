// app/page.tsx
import Link from "next/link";
import { HomeCarousel } from "@/components/HomeCarousel";
import { ProductCard } from "@/components/ProductCart"; // Adjust path if named ProductCard
import { CarouselProducts } from "@/Data/CarouselProducts";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-8 pb-12 mx-auto text-center space-y-6 max-w-7xl">
        {/* Carousel Showcase */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-border/40 mb-8">
          <HomeCarousel />
        </div>

        {/* Hero Copy */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Next-Gen Workspace Setup
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
            Modern Products & Gadgets with{" "}
            <span className="text-purple-600">❤️ and Feel</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sleek design meets real human connection. Experience smart devices,
            audio gear, and everyday accessories crafted with care and built to
            feel just right in your hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/shop">
              <Button
                size="lg"
                className="w-full sm:w-auto font-semibold gap-2 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Explore Store <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Features Bar */}
      <section className="border-y border-border/40 bg-muted/30 my-8 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Truck className="h-7 w-7 text-purple-600 shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">Free Express Shipping</h4>
              <p className="text-xs text-muted-foreground">
                On all orders over $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-7 w-7 text-purple-600 shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">30 Days Return</h4>
              <p className="text-xs text-muted-foreground">
                Money back guarantee
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-purple-600 shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">Secure Checkout</h4>
              <p className="text-xs text-muted-foreground">
                100% protected payments
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="h-7 w-7 text-purple-600 shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">24/7 Support</h4>
              <p className="text-xs text-muted-foreground">
                Dedicated customer service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Featured Collections
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Handpicked gear designed to elevate your everyday setup
            </p>
          </div>
          <Link href="/shop">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-xs font-semibold gap-1"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CarouselProducts.map((product) => {
            // Helper to clean up pricing string safely
            const cleanPrice =
              typeof product.price === "number"
                ? product.price
                : Number(String(product.price).replace(/[^0-9.-]+/g, "")) || 0;

            const cleanOriginalPrice =
              typeof product.originalPrice === "number"
                ? product.originalPrice
                : Number(
                    String(product.originalPrice).replace(/[^0-9.-]+/g, ""),
                  ) || cleanPrice;

            const productWithStats = product as typeof product & {
              rating?: number;
              reviewsCount?: number;
            };

            return (
              <ProductCard
                key={product.id}
                id={String(product.id)}
                title={product.title}
                description={product.description}
                badge={product.tag}
                price={cleanPrice}
                originalPrice={cleanOriginalPrice}
                imageUrl={product.image ?? ""}
                rating={productWithStats.rating ?? 4.8}
                reviewsCount={productWithStats.reviewsCount ?? 100}
              />
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/shop">
            <Button variant="outline" className="w-full font-semibold">
              View All Products
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
