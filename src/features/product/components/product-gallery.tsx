"use client";

import Image from "next/image";
import { useState } from "react";
import { Image as ShopifyImage } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: { node: ShopifyImage }[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className="flex flex-col md:flex-row-reverse gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] w-full md:w-4/5 overflow-hidden rounded-sm bg-[var(--color-warm-white)]">
        <Image
          src={images[selectedIndex].node.url}
          alt={images[selectedIndex].node.altText || "Product Image"}
          fill
          priority
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 w-full md:w-1/5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative aspect-square md:aspect-[4/5] w-20 md:w-full flex-shrink-0 overflow-hidden rounded-sm border transition-all",
              selectedIndex === index 
                ? "border-[var(--color-terracotta)] ring-1 ring-[var(--color-terracotta)]" 
                : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={image.node.url}
              alt={image.node.altText || `Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
