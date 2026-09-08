"use client";

import { useState } from "react";
import { Product } from "@/lib/shopify/types";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

export function ShopContainer({ products }: { products: Product[] }) {
  const [selectedSweetener, setSelectedSweetener] = useState<string>("all");
  const [selectedMedium, setSelectedMedium] = useState<string>("all");

  const sweeteners = [
    { id: "all", label: "All Bases" },
    { id: "sugar", label: "Sugar Based" },
    { id: "jaggery", label: "Jaggery Based" }
  ];

  const mediums = [
    { id: "all", label: "All Oils/Ghee" },
    { id: "ghee", label: "Ghee Based" },
    { id: "rice-bran", label: "Rice Bran Oil Based" }
  ];

  const filteredProducts = products.filter(product => {
    const tags = product.tags || [];
    const matchesSweetener = selectedSweetener === "all" || 
      tags.some(tag => tag.toLowerCase().includes(selectedSweetener));
    
    // Normalize spaces for tagging check (e.g. "rice bran oil based" -> "rice-bran-oil-based")
    const matchesMedium = selectedMedium === "all" || 
      tags.some(tag => {
        const normalized = tag.toLowerCase().replace(/\s+/g, "-");
        return normalized.includes(selectedMedium);
      });
    
    return matchesSweetener && matchesMedium;
  });

  return (
    <div className="space-y-12">
      {/* Filters Panel */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center py-6 border-y border-[var(--color-terracotta)]/10 font-sans">
        {/* Sweetener Filters */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] font-semibold">Sweetener Base</span>
          <div className="flex items-center gap-6">
            {sweeteners.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSweetener(s.id)}
                className={cn(
                  "text-xs tracking-wider uppercase transition-colors hover:text-[var(--color-terracotta)] cursor-pointer pb-0.5 border-b-2",
                  selectedSweetener === s.id 
                    ? "border-[var(--color-terracotta)] text-[var(--color-terracotta)] font-semibold" 
                    : "border-transparent text-[var(--color-text-secondary)]"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-10 bg-[var(--color-terracotta)]/10" />

        {/* Medium Filters */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] font-semibold">Frying Medium</span>
          <div className="flex items-center gap-6">
            {mediums.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMedium(m.id)}
                className={cn(
                  "text-xs tracking-wider uppercase transition-colors hover:text-[var(--color-terracotta)] cursor-pointer pb-0.5 border-b-2",
                  selectedMedium === m.id 
                    ? "border-[var(--color-terracotta)] text-[var(--color-terracotta)] font-semibold" 
                    : "border-transparent text-[var(--color-text-secondary)]"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} delay={index * 0.05} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-[var(--color-text-secondary)] font-light">
          No products match the selected filters.
        </div>
      )}
    </div>
  );
}
