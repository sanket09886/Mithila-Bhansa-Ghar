import Image from "next/image";
import { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export const metadata: Metadata = {
  title: "Mithila Culture | Mithila Bhansa Ghar",
  description: "Discover the heritage, art, and culinary traditions of Mithilanchal.",
};

export default function MithilaCulturePage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-warm-white)] min-h-screen">
      
      <div className="container mx-auto px-4 md:px-8 mb-24 text-center max-w-4xl">
        <FadeIn>
          <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-6">Our Heritage</h1>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-text-primary)] leading-tight mb-8">
            The Soul of <span className="italic">Mithilanchal</span>
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-24">
        
        {/* Section 1: The Kitchen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <h3 className="font-serif text-3xl text-[var(--color-text-primary)] mb-6">The Sacred Bhansa Ghar</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                In Mithila, the kitchen (Bhansa Ghar) is the most sacred space in the home. It often houses the family deity (Gosain) on a designated altar. Cooking here is considered a rhythmic, almost meditative act, guided by seasonal Ayurvedic principles and deep devotion.
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                Traditional cooking relies on earthen pots (mitti ke bartan) for slow-cooking, and brass (pital) or bronze (kansa) for their health-promoting properties. The earthy aroma of mustard oil and the heat of a wood-fired chulha define its sensory landscape.
              </p>
            </FadeIn>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn delay={0.2} className="relative w-full aspect-square rounded-sm overflow-hidden border border-[var(--color-terracotta)]/20 p-2">
              <div className="w-full h-full relative bg-[var(--color-cream)] flex items-center justify-center">
                {/* Placeholder for an eventual authentic kitchen photo */}
                <span className="font-serif italic text-[var(--color-text-secondary)]/50">The Hearth</span>
              </div>
            </FadeIn>
          </div>
        </div>

        <SectionDivider />

        {/* Section 2: Chhath Puja */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <FadeIn delay={0.2} className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
               <Image 
                src="/images/product/thekua-closeup.jpg"
                alt="Thekua - The Prasad of Chhath Puja"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
          <div>
            <FadeIn>
              <h3 className="font-serif text-3xl text-[var(--color-text-primary)] mb-6">Chhath Puja & Thekua</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                Chhath Puja is the most revered festival of the region, dedicated to the Sun God (Surya Dev) and Chhathi Maiya. It is a rigorous four-day observance of purity and gratitude.
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                Thekua is the quintessential 'prasad' (holy offering) of this festival. Made with whole wheat, jaggery, and ghee, it is prepared with utmost purity. The act of making Thekua is communal—generations gather to knead the dough and shape it in wooden moulds, weaving family bonds into every piece.
              </p>
            </FadeIn>
          </div>
        </div>

        <SectionDivider />

        {/* Section 3: Madhubani Art */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <h3 className="font-serif text-3xl text-[var(--color-text-primary)] mb-6">Madhubani Art</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                Mithila's visual identity is defined by Madhubani art. Originally painted on the freshly plastered mud walls of homes, this art form is characterized by its bold double-line borders, vibrant natural colors, and lack of empty space.
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                Every motif has a meaning. The fish symbolizes fertility and prosperity, the lotus represents purity, and the peacock signifies love. You will see these subtle motifs woven throughout our packaging and our website, honoring the visual language of our ancestors.
              </p>
            </FadeIn>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <FadeIn delay={0.2} className="relative w-full aspect-square rounded-sm overflow-hidden bg-[var(--color-terracotta)]/10 p-8 flex items-center justify-center">
               {/* Abstract Madhubani SVG representation */}
               <svg width="100%" height="100%" viewBox="0 0 100 100" className="stroke-[var(--color-terracotta)] fill-none stroke-2 opacity-50">
                 <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                 <circle cx="50" cy="50" r="35" />
                 <path d="M50 15 L50 85 M15 50 L85 50" />
                 <circle cx="50" cy="50" r="10" className="fill-[var(--color-terracotta)]" />
               </svg>
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
