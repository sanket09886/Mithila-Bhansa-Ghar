import { Metadata } from "next";
import { getAllProducts } from "@/lib/shopify/client";
import { ShopContainer } from "@/features/shop/components/shop-container";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export const metadata: Metadata = {
  title: "Shop | Mithila Bhansa Ghar",
  description: "Browse our authentic, handmade Mithila delicacies.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">All Offerings</h1>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
              Our <span className="italic">Kitchen</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Everything here is handmade in small batches. We take our time, so you can taste the patience in every bite.
            </p>
          </FadeIn>
        </div>

        <ShopContainer products={products} />

      </div>
      
      <SectionDivider className="mt-32" />
    </div>
  );
}
