import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export function CultureSection() {
  return (
    <section className="py-28 md:py-40 bg-[var(--color-terracotta)] text-[var(--color-cream)] relative overflow-hidden">
      <MadhubaniBorder variant="horizontal" className="absolute top-0 left-0 w-full opacity-20 stroke-current text-[var(--color-cream)]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-cream)]/80 mb-6">Mithila Heritage</h2>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              "Paga Paga Pokhari, Macha Makhan"<br />
              <span className="italic font-light text-[var(--color-cream)]/90">Fried on a clay chulha for the Sun God.</span>
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-cream)]/90 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Our recipe is inseparable from our rituals. The Thekua we bake is the central offering of Chhath Puja—kneaded with pure cow ghee and raw jaggery, pressed on hand-carved wooden sancha moulds, and offered to the Sun God in gratitude.
            </p>
            
            <Link 
              href="/mithila-culture"
              className="inline-flex items-center gap-3 text-[var(--color-cream)] hover:text-white transition-colors group pb-1.5 border-b border-[var(--color-cream)]/50 hover:border-white"
            >
              <span className="tracking-widest uppercase text-xs font-semibold">Discover our culture</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </div>
      
      <MadhubaniBorder variant="horizontal" className="absolute bottom-0 left-0 w-full opacity-20 stroke-current text-[var(--color-cream)] transform rotate-180" />
    </section>
  );
}
