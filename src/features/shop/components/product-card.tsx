"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import { FadeIn } from "@/components/motion/fade-in";
import { useCartStore } from "@/store/cart-store";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const minPrice = product.priceRange.minVariantPrice;
  const image = product.images.edges[0]?.node;
  const firstVariant = product.variants.edges[0]?.node;
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) {
      addItem(firstVariant, 1);
    }
  };

  return (
    <FadeIn delay={delay} className="group relative flex flex-col h-full bg-[var(--color-cream)] p-4 rounded-sm border border-[var(--color-terracotta)]/10 hover:border-[var(--color-terracotta)]/30 transition-all duration-300 shadow-sm hover:shadow-md">
      <Link href={`/products/${product.handle}`} className="flex flex-col h-full">
        {/* Image wrapper */}
        <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 rounded-sm bg-[var(--color-warm-white)]">
          {image && (
            <Image 
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          )}
          {!product.availableForSale && (
            <div className="absolute top-4 left-4 bg-[var(--color-terracotta)] text-white px-3 py-1 text-xs tracking-widest uppercase shadow-sm z-10">
              Sold Out
            </div>
          )}

          {/* Desktop Hover Quick Add overlay */}
          {product.availableForSale && firstVariant && (
            <div className="hidden md:flex absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-center pb-6">
              <button
                onClick={handleQuickAdd}
                className="bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-terracotta)] hover:text-white font-sans text-xs tracking-widest uppercase py-3 px-6 shadow-md transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 rounded-sm cursor-pointer font-medium"
              >
                Quick Add
              </button>
            </div>
          )}
        </div>
        
        {/* Info */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">
              {product.title}
            </h3>
            <div className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          </div>
          
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-terracotta)]/10">
            <span className="font-sans text-lg text-[var(--color-text-primary)] font-medium">
              {product.priceRange.minVariantPrice.amount === product.priceRange.maxVariantPrice.amount
                ? `₹${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0)}`
                : `From ₹${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0)}`}
            </span>
          </div>
        </div>
      </Link>

      {/* Mobile-visible Quick Add button */}
      {product.availableForSale && firstVariant && (
        <button
          onClick={handleQuickAdd}
          className="md:hidden mt-4 w-full bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-madhubani-red)] font-sans text-xs tracking-widest uppercase py-3 px-4 rounded-sm shadow-sm transition-all duration-300 font-medium cursor-pointer"
        >
          Quick Add
        </button>
      )}
    </FadeIn>
  );
}
