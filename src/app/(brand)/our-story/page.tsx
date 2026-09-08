import Image from "next/image";
import { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export const metadata: Metadata = {
  title: "Our Story | Mithila Bhansa Ghar",
  description: "We didn't start a company. We started remembering.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cream)]">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 mb-24 md:mb-32 text-center max-w-4xl">
        <FadeIn>
          <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-6">Our Story</h1>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-text-primary)] leading-tight mb-8">
            We didn't start a company.<br />
            <span className="italic">We started remembering.</span>
          </h2>
        </FadeIn>
      </div>

      <MadhubaniBorder className="opacity-40 max-w-2xl mx-auto mb-24 md:mb-32" />

      {/* Story Sections */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-24 md:space-y-32">
        
        <FadeIn className="flex flex-col gap-8">
          <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">The Distance</h3>
          <div className="prose prose-lg prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed">
            <p>
              When you move away from home, you don't just leave a place; you leave a rhythm. The rhythm of festivals, the rhythm of seasons, and most importantly, the rhythm of the kitchen.
            </p>
            <p>
              Mithila Bhansa Ghar was born out of a profound sense of missing. We missed the aroma of ghee roasting wheat flour. We missed the communal act of making Thekua during Chhath Puja. We realized that in our fast-paced lives, the slow, mindful culinary traditions of our grandmothers were fading.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm mb-8">
            <Image 
              src="/images/product/thekua-plate-overhead.jpg"
              alt="Freshly made Thekua"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn className="flex flex-col gap-8">
          <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">The Bhansa Ghar</h3>
          <div className="prose prose-lg prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed">
            <p>
              In Mithila culture, the 'Bhansa Ghar' (kitchen) is not just where food is cooked—it is a sacred sanctuary. It is where the family deities are kept, where purity is strictly maintained, and where food is prepared as an offering before it is ever a meal.
            </p>
            <p>
              We decided to recreate this sanctuary. We didn't want to build a factory; we wanted to build a Bhansa Ghar. A place where women from our community could use the exact same recipes, the exact same brass and earthen utensils, and the exact same patience their mothers taught them.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="flex flex-col gap-8">
          <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">Preserving the Unchanged</h3>
          <div className="prose prose-lg prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed">
            <p>
              Today, the world demands speed and scale. But some recipes deserve to stay exactly as they were. Our Thekua takes time. The dough must be stiff, the kneading must be gentle, the frying must be slow. 
            </p>
            <p>
              When you open a pouch of Mithila Bhansa Ghar, we hope you don't just taste the jaggery and the ghee. We hope you feel the warmth of the chulha, the devotion of the hands that shaped it, and the timeless love of a grandmother's kitchen.
            </p>
          </div>
        </FadeIn>

      </div>

      <MadhubaniBorder className="opacity-40 max-w-2xl mx-auto mt-24 md:mt-32" />
      
    </div>
  );
}
