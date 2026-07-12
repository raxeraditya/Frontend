// components/PromoBanner.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-12">
      <div className="relative rounded-2xl overflow-hidden bg-primary text-primary-foreground p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <Badge variant="secondary" className="font-bold">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Get 20% Off Your First Order
          </h2>
          <p className="text-primary-foreground/80 text-sm max-w-md">
            Use promo code{" "}
            <span className="font-mono font-bold underline">WELCOME20</span> at
            checkout to claim your deal.
          </p>
        </div>
        <Link href="/shop">
          <Button size="lg" variant="secondary" className="font-bold shrink-0">
            Claim Discount Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
