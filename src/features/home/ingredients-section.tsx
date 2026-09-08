import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const ingredients = [
  {
    num: "01",
    name: "Pure Hand-churned Ghee",
    description: "The soul of our Thekua. It brings the rich aroma and the soft, biscuit-like crumbly texture that melts in your mouth."
  },
  {
    num: "02",
    name: "Unrefined Jaggery (Gur)",
    description: "Unprocessed and raw. It provides a deep, earthy sweetness with notes of caramel that white sugar can never replicate."
  },
  {
    num: "03",
    name: "Stone-Ground Wheat",
    description: "Stone-ground wheat flour (Atta) forms the robust, hearty base of this traditional delicacy, retaining its organic texture."
  },
  {
    num: "04",
    name: "Aromatic Fennel Seeds",
    description: "Hand-sorted Saunf adds a subtle, refreshing licorice note that cuts through the richness of the ghee."
  },
  {
    num: "05",
    name: "Shredded Dry Coconut",
    description: "Grated by hand in our kitchen, it offers a beautiful textural contrast and a hint of nuttiness in every bite."
  },
  {
    num: "06",
    name: "Warming Cardamom",
    description: "A gentle dusting of freshly ground green cardamom pods to elevate the aroma to something heavenly."
  }
];

export function IngredientsSection() {
  return (
    <section className="py-28 md:py-40 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Editorial Philosophy */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-32 h-fit">
            <FadeIn duration={1.6}>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-6 block font-semibold">
                Pure Ingredients
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] leading-[1.05] tracking-tight mb-8">
                Nothing you can’t <span className="italic font-light text-[var(--color-terracotta)]">pronounce.</span>
              </h3>
              
              <div className="h-px w-16 bg-[var(--color-terracotta)]/40 mb-8" />
              
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg font-light leading-relaxed mb-6">
                Our recipe relies on the purity of nature. White sugar belongs to factories; our kitchen uses unrefined jaggery and pure hand-churned ghee.
              </p>
              
              <p className="text-[var(--color-text-secondary)]/85 text-xs italic font-light">
                * No preservatives. No artificial flavors. No palm oil. Ever.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Asymmetric Unequal-Weight Grid */}
          <div className="w-full lg:w-[70%]">
            <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
              
              {/* Card 1: Pure Hand-churned Ghee (Largest Block - col-span-6) */}
              <StaggerItem className="col-span-1 md:col-span-6 bg-transparent border border-[var(--color-terracotta)]/20 p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-start transition-all duration-300 hover:border-[var(--color-terracotta)]/50 group">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                      01
                    </span>
                    <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                      Pure Hand-churned Ghee
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed">
                    The absolute soul of our Thekua. Sourced from grass-fed cows and churned using traditional wooden bilona methods, it brings the rich, toasted aroma and the delicate, biscuit-like crumbly texture that melts instantly in your mouth.
                  </p>
                </div>
                <div className="flex-shrink-0 font-serif text-[var(--color-terracotta)] text-sm tracking-widest uppercase italic pt-1 group-hover:translate-x-1 transition-transform">
                  Primary Ingredient
                </div>
              </StaggerItem>

              {/* Card 2: Unrefined Jaggery (Gur) (Medium Block - col-span-3) */}
              <StaggerItem className="col-span-1 md:col-span-3 bg-transparent border border-[var(--color-terracotta)]/15 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[var(--color-terracotta)]/40 group">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors">
                      02
                    </span>
                    <h4 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                      Unrefined Jaggery (Gur)
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed">
                    Unprocessed and raw. It provides a deep, complex sweetness with distinct hints of caramel and earth that factory-refined white sugar can never replicate.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 3: Stone-Ground Wheat (Medium Block - col-span-3) */}
              <StaggerItem className="col-span-1 md:col-span-3 bg-transparent border border-[var(--color-terracotta)]/15 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[var(--color-terracotta)]/40 group">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors">
                      03
                    </span>
                    <h4 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                      Stone-Ground Wheat
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed">
                    Milled slowly on stone chakki rollers to retain its wholesome bran and nutrient profile. Stone-ground flour (Atta) forms the robust, hearty base of this traditional delicacy.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 4: Aromatic Fennel Seeds (Small Block - col-span-2) */}
              <StaggerItem className="col-span-1 md:col-span-2 bg-transparent border border-[var(--color-terracotta)]/10 p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:border-[var(--color-terracotta)]/35 group">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors">
                      04
                    </span>
                    <h4 className="font-serif text-lg text-[var(--color-text-primary)]">
                      Aromatic Fennel Seeds
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-xs font-light leading-relaxed">
                    Hand-sorted Saunf adds a cooling, refreshing licorice note that cuts through the richness of the ghee.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 5: Shredded Dry Coconut (Small Block - col-span-2) */}
              <StaggerItem className="col-span-1 md:col-span-2 bg-transparent border border-[var(--color-terracotta)]/10 p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:border-[var(--color-terracotta)]/35 group">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors">
                      05
                    </span>
                    <h4 className="font-serif text-lg text-[var(--color-text-primary)]">
                      Shredded Dry Coconut
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-xs font-light leading-relaxed">
                    Grated by hand in our kitchen to offer a beautiful textural contrast and a hint of nuttiness in every single bite.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 6: Warming Cardamom (Small Block - col-span-2) */}
              <StaggerItem className="col-span-1 md:col-span-2 bg-transparent border border-[var(--color-terracotta)]/10 p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:border-[var(--color-terracotta)]/35 group">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors">
                      06
                    </span>
                    <h4 className="font-serif text-lg text-[var(--color-text-primary)]">
                      Warming Cardamom
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-xs font-light leading-relaxed">
                    Freshly crushed green cardamom pods sprinkled in the dough to elevate the overall fragrance to something truly heavenly.
                  </p>
                </div>
              </StaggerItem>

            </StaggerChildren>
          </div>

        </div>
      </div>
    </section>
  );
}
