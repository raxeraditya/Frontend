import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CarouselProducts } from "@/Data/CarouselProducts";

export function HomeCarousel() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {CarouselProducts.map((product) => (
            <CarouselItem key={product.id}>
              <div className="p-1">
                <Card className="border-border/60 bg-linear-to-br from-card to-muted/40 overflow-hidden shadow-md">
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 sm:p-10 min-h-96">
                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center space-y-4 text-left">
                      <div>
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          {product.tag}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                        {product.title}
                      </h2>

                      <p className="text-muted-foreground text-sm sm:text-base line-clamp-2">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-2xl font-bold text-foreground">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex items-center gap-3 pt-2">
                        <Button size="default" className="font-semibold">
                          Shop Now
                        </Button>
                        <Button variant="outline" size="default">
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Image Container */}
                    <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-muted/30 border border-border/40">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority={product.id === 1}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background shadow-lg" />
      </Carousel>
    </div>
  );
}
