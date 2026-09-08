import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const galleryImages = [
  { src: "/images/product/thekua-closeup.jpg", alt: "Thekua close up", className: "aspect-square" },
  { src: "/images/packaging/kraft-pouches-front.jpg", alt: "Packaging by window", className: "aspect-[4/5] md:translate-y-12" },
  { src: "/images/product/thekua-plate-overhead.jpg", alt: "Thekua on plate", className: "aspect-square" },
  { src: "/images/packaging/kraft-pouches-back.jpg", alt: "Handwritten batch numbers", className: "aspect-[3/4] md:translate-y-8" }
];

export function GalleryPreview() {
  return (
    <section className="py-28 md:py-40 bg-[var(--color-cream)]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-6">
          <FadeIn>
            <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4">Glimpses</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)]">
              From our <span className="italic">home to yours.</span>
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors group pb-1.5 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)]"
            >
              <span className="tracking-widest uppercase text-xs font-semibold">View full gallery</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <StaggerItem key={idx}>
              <div className={`relative w-full overflow-hidden rounded-sm bg-[var(--color-warm-white)] group ${img.className}`}>
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[var(--color-terracotta)]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
