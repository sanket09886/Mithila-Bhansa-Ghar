import Link from "next/link";
import { getAllProducts } from "@/lib/shopify/client";
import { ProductCard } from "@/features/shop/components/product-card";
import { FadeIn } from "@/components/motion/fade-in";

export async function FeaturedProducts() {
  const products = await getAllProducts();
  
  // For the homepage, we'll duplicate the single product variant in mock data 
  // or layout products in a staggered, curated offset grid.
  // Since we currently have 1 product in mock, we'll display two cards to demonstrate
  // the layout (e.g. the standard product and a mock variant box).
  const jaggeryProduct = products[0];
  
  if (!jaggeryProduct) return null;

  const smallPacketProduct = {
    ...jaggeryProduct,
    id: "gid://shopify/Product/1-small",
    title: "Traditional Jaggery & Ghee Thekua (Small Packet - 400g)",
    descriptionHtml: "<p>A single 400g pouch of our signature hand-pressed Thekua. Made with unrefined organic jaggery, pure cow ghee, and stone-ground wheat.</p>",
    priceRange: {
      minVariantPrice: { amount: "399.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "399.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        jaggeryProduct.variants.edges[0]
      ]
    },
    images: {
      edges: [
        jaggeryProduct.images.edges[2] || jaggeryProduct.images.edges[0]
      ]
    }
  };

  const bigPacketProduct = {
    ...jaggeryProduct,
    id: "gid://shopify/Product/1-big",
    title: "Traditional Jaggery & Ghee Thekua (Big Packet - 800g)",
    descriptionHtml: "<p>A premium Festive Gift Box containing 2x 400g pouches (800g total). Ideal for sharing the warmth of Mithila heritage with family.</p>",
    priceRange: {
      minVariantPrice: { amount: "749.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "749.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        jaggeryProduct.variants.edges[1] || jaggeryProduct.variants.edges[0]
      ]
    },
    images: {
      edges: [
        jaggeryProduct.images.edges[1] || jaggeryProduct.images.edges[0]
      ]
    }
  };

  return (
    <section className="py-28 md:py-40 bg-[var(--color-cream)]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-28 gap-8">
          <FadeIn duration={1.6}>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
              The Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] leading-[1.05] tracking-tight">
              Hand-pressed in traditional <span className="italic font-light text-[var(--color-terracotta)]">sancha</span> moulds,<br />
              slow-fried in pure cow <span className="italic font-light text-[var(--color-terracotta)]">ghee</span>.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} duration={1.6}>
            <Link 
              href="/shop"
              className="group inline-flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors duration-300 pb-1 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)] cursor-pointer"
            >
              <span className="font-sans text-xs tracking-widest uppercase font-semibold">View All Delicacies</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-current">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Symmetric Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <ProductCard product={smallPacketProduct} delay={0.1} />
          <ProductCard product={bigPacketProduct} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
