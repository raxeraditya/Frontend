// components/ProductCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeProduct } from "@/Data/HomeProduct";

export function ProductCard({
  title,
  description,
  price,
  originalPrice,
  badge,
  rating,
  reviewsCount,
  imageUrl,
  isWishlisted = false,
}: HomeProduct) {
  const [liked, setLiked] = useState(isWishlisted);

  // Calculate discount percentage automatically
  const discountPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl border-border/60">
      {/* Product Image & Overlays */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 items-start">
          {badge && (
            <Badge
              variant="default"
              className="font-semibold text-xs shadow-sm"
            >
              {badge}
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge
              variant="destructive"
              className="font-semibold text-xs shadow-sm"
            >
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>

        {/* Wishlist / Bookmark Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-3 right-3 z-20 h-9 w-9 rounded-full bg-background/80 backdrop-blur-md border-border/40 transition-transform active:scale-95 hover:bg-background shadow-sm"
          onClick={() => setLiked(!liked)}
          aria-label="Bookmark product"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              liked
                ? "fill-red-500 text-red-500"
                : "text-muted-foreground hover:text-foreground"
            }`}
          />
        </Button>

        {/* Next.js Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Header Content */}
      <CardHeader className="p-4 pb-2">
        {/* Rating and Reviews */}
        <div className="flex items-center gap-1 text-sm mb-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-medium text-xs text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">
            ({reviewsCount})
          </span>
        </div>

        <CardTitle className="line-clamp-1 text-base font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-2 text-xs text-muted-foreground mt-1">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Card Footer: Pricing and Actions */}
      <CardFooter className="flex items-center justify-between p-4 pt-2 border-t border-border/40">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground line-through">
            ${originalPrice}
          </span>
          <span className="text-lg font-bold text-foreground">${price}</span>
        </div>

        <Button size="sm" className="gap-2 font-medium">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
