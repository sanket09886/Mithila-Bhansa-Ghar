import { notFound } from "next/navigation";
import { getProduct } from "@/lib/shopify/client";
import { ProductGallery } from "@/features/product/components/product-gallery";
import { VariantSelector } from "@/features/product/components/variant-selector";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return { title: "Not Found" };

  return {
    title: `${product.title} | Mithila Bhansa Ghar`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  // Generate JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images.edges.map(e => e.node.url),
    brand: {
      '@type': 'Brand',
      name: 'Mithila Bhansa Ghar',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: product.priceRange.minVariantPrice.amount,
      highPrice: product.priceRange.maxVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Mithila Bhansa Ghar',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
      
      <div className="pt-32 pb-24 min-h-screen bg-[var(--color-cream)]">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Gallery */}
            <div className="order-1">
              <FadeIn>
                <ProductGallery images={product.images.edges} />
              </FadeIn>
            </div>

            {/* Right: Info & Actions */}
            <div className="order-2 flex flex-col pt-4 lg:pt-12">
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
                  {product.title}
                </h1>
                
                <div 
                  className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />

                <VariantSelector product={product} />
              </FadeIn>
            </div>
          </div>

          <SectionDivider className="mt-24 md:mt-32 mb-16 md:mb-24" />

          {/* Product Metafields / Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {product.ingredients && (
              <FadeIn delay={0.1} className="flex flex-col">
                <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4 pb-4 border-b border-[var(--color-terracotta)]/20">
                  Ingredients
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {product.ingredients.value}
                </p>
              </FadeIn>
            )}
            
            {product.preparation && (
              <FadeIn delay={0.2} className="flex flex-col">
                <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4 pb-4 border-b border-[var(--color-terracotta)]/20">
                  Preparation
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {product.preparation.value}
                </p>
              </FadeIn>
            )}

            {product.storage && (
              <FadeIn delay={0.3} className="flex flex-col">
                <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4 pb-4 border-b border-[var(--color-terracotta)]/20">
                  Storage & Life
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {product.storage.value}
                </p>
                {product.shelfLife && (
                  <p className="font-sans text-sm tracking-widest uppercase text-[var(--color-terracotta)] mt-auto">
                    Shelf Life: {product.shelfLife.value}
                  </p>
                )}
              </FadeIn>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
