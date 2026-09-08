import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function StoryPreview() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-28 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Storytelling */}
          <div className="w-full lg:w-1/2 space-y-8 z-10">
            <FadeIn duration={1.6}>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
                Our Hearth
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] leading-[1.05] tracking-tight mb-8">
                We didn’t start a company.<br />
                <span className="italic font-light text-[var(--color-terracotta)]">We started remembering.</span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.2} duration={1.6} className="space-y-6 text-[var(--color-text-secondary)] text-base md:text-lg font-light leading-relaxed max-w-xl">
              <p>
                The *Bhansa Ghar* is the most sacred room in a Mithila home. It is where faith, family, and food converge. For generations, the rhythmic sound of grinding spices and the warmth of the wood-fired chulha have been the heartbeat of our heritage.
              </p>
              <p>
                When we realized these slow, mindful ways of cooking were fading, we decided to preserve them. Every batch is prepared according to the traditional proportions: stone-ground wheat, unrefined jaggery, and pure cow ghee, slow-cooked over a clay chulha.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} duration={1.6} className="pt-4">
              <Link 
                href="/our-story"
                className="group inline-flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors duration-300 pb-1 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)] cursor-pointer"
              >
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Our Story</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-current">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Premium Overlapping Images & Details */}
          <div className="w-full lg:w-1/2 flex justify-center relative py-12">
            <FadeIn delay={0.3} duration={1.8} className="relative w-full max-w-md aspect-[3/4] shadow-sm border border-[var(--color-terracotta)]/10 group">
              <Image 
                src="/images/packaging/kraft-pouches-front.jpg"
                alt="Mithila Bhansa Ghar kraft packaging by a sunlit window"
                fill
                className="object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
