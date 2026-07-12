// app/shop/page.tsx
"use client";

import { useState } from "react";
import { products } from "@/Data/Products";
import { ProductCard } from "@/components/ProductCart";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Calculations
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Pagination Handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="p-10 min-h-screen">
      {/* 1. Header & Stats Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-border/60 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            All Products & Gadgets
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {startIndex + 1}
            </span>
            –
            <span className="font-semibold text-foreground">
              {Math.min(endIndex, totalProducts)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">
              {totalProducts}
            </span>{" "}
            items
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filter & Sort
          </Button>
        </div>
      </div>

      {/* 2. Product Cards Grid */}
      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* 3. Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border/60 gap-4">
        <p className="text-xs text-muted-foreground">
          Page{" "}
          <span className="font-medium text-foreground">{currentPage}</span> of{" "}
          <span className="font-medium text-foreground">{totalPages}</span>
        </p>

        <div className="flex items-center gap-1.5">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="gap-1 text-xs"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "ghost"}
                  size="icon"
                  className="h-8 w-8 text-xs font-medium"
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="gap-1 text-xs"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
