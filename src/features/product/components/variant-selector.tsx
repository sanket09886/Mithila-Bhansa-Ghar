"use client";

import { useState } from "react";
import { ProductVariant, Product } from "@/lib/shopify/types";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  product: Product;
}

export function VariantSelector({ product }: VariantSelectorProps) {
  const variants = product.variants.edges.map(e => e.node);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(selectedVariant, quantity);
  };

  return (
    <div className="flex flex-col gap-8">
      
      {/* Price */}
      <div className="flex items-end gap-3">
        <span className="font-sans text-3xl text-[var(--color-text-primary)]">
          ₹{selectedVariant.price.amount}
        </span>
        {selectedVariant.compareAtPrice && (
          <span className="font-sans text-lg text-[var(--color-text-secondary)] line-through mb-1">
            ₹{selectedVariant.compareAtPrice.amount}
          </span>
        )}
      </div>

      {/* Options (assuming one option like "Size" for now based on mock data) */}
      {variants.length > 1 && (
        <div className="space-y-4">
          <span className="font-sans text-sm tracking-widest uppercase text-[var(--color-text-secondary)]">Size / Variant</span>
          <div className="flex flex-wrap gap-3">
            {variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={cn(
                    "px-6 py-3 border rounded-sm text-sm tracking-wide transition-all",
                    isSelected 
                      ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-white" 
                      : "border-[var(--color-terracotta)]/20 text-[var(--color-text-primary)] hover:border-[var(--color-terracotta)]"
                  )}
                >
                  {variant.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity & Add to Cart */}
      <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-terracotta)]/10">
        
        {/* Quantity Selector */}
        <div className="flex items-center border border-[var(--color-terracotta)]/20 rounded-sm">
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-12 h-12 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            -
          </button>
          <div className="w-8 text-center font-sans text-lg">{quantity}</div>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            className="w-12 h-12 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!selectedVariant.availableForSale}
          className="flex-1 h-12 bg-[var(--color-terracotta)] text-white font-sans tracking-widest uppercase text-sm rounded-sm hover:bg-[var(--color-madhubani-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {selectedVariant.availableForSale ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
      
    </div>
  );
}
