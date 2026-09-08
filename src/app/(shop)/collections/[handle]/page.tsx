import { notFound } from "next/navigation";
import { getCollectionProducts } from "@/lib/shopify/client";
import { ProductCard } from "@/features/shop/components/product-card";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = await getCollectionProducts(handle);
  if (!collection) return { title: "Not Found" };

  return {
    title: `${collection.title} | Mithila Bhansa Ghar`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = await getCollectionProducts(handle);

  if (!collection) {
    notFound();
  }

  const products = collection.products.edges.map(e => e.node);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">Collection</h1>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
              {collection.title}
            </h2>
            {collection.description && (
              <p className="text-[var(--color-text-secondary)] text-lg">
                {collection.description}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 0.1} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-secondary)]">
            There are no products in this collection right now.
          </div>
        )}

      </div>
      
      <SectionDivider className="mt-32" />
    </div>
  );
}
