import Image from "next/image";
import { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Gallery | Mithila Bhansa Ghar",
  description: "Visual glimpses from our kitchen and our products.",
};

const images = [
  { src: "/images/product/thekua-closeup.jpg", aspect: "aspect-[4/5]" },
  { src: "/images/packaging/kraft-pouches-front.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/product/thekua-plate-overhead.jpg", aspect: "aspect-square" },
  { src: "/images/packaging/kraft-pouches-back.jpg", aspect: "aspect-[4/5]" },
  { src: "/images/product/thekua-plate-overhead-alt.jpg", aspect: "aspect-[16/9]" },
  { src: "/images/packaging/kraft-pouches-front-alt.jpg", aspect: "aspect-[3/4]" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cream)] min-h-screen">
      
      <div className="container mx-auto px-4 md:px-8 mb-20 text-center">
        <FadeIn>
          <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">Gallery</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)]">
            Glimpses from <span className="italic">home.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <StaggerChildren className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <StaggerItem key={idx} className="break-inside-avoid">
              <div className={`relative w-full ${img.aspect} rounded-sm overflow-hidden bg-[var(--color-warm-white)] group`}>
                <Image 
                  src={img.src}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

    </div>
  );
}
