"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row bg-[var(--color-cream)] overflow-hidden">
      {/* Left Column: Minimalistic Editorial Typography */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-40 pb-20 md:py-28 relative z-10">
        <FadeIn delay={0.4} duration={1.5} yOffset={30}>
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-terracotta)] mb-8 block font-semibold">
            Mithila Bhansa Ghar
          </span>
        </FadeIn>

        <FadeIn delay={0.6} duration={1.5} yOffset={40}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] leading-[0.95] tracking-tight max-w-xl">
            Some recipes <br className="hidden lg:block" />
            deserve to stay <br />
            <span className="italic font-light text-[var(--color-terracotta)]">exactly</span> as <br className="hidden lg:block" />
            they were.
          </h1>
        </FadeIn>

        <FadeIn delay={1.0} duration={1.5} yOffset={25}>
          <p className="mt-12 text-[var(--color-text-secondary)] text-base md:text-lg font-light max-w-md leading-relaxed">
            Handcrafted in small batches with patience, reverence, and the warmth of pure ghee and unrefined jaggery.
          </p>
        </FadeIn>

        <FadeIn delay={1.3} duration={1.5} yOffset={20}>
          <div className="mt-16">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-4 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors duration-300 pb-1.5 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)] cursor-pointer"
            >
              <span className="font-sans text-xs tracking-widest uppercase font-semibold">Explore The Offerings</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-2 transition-transform duration-300 stroke-current"
              >
                <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Right Column: Stunning Uncompromised Photography Crop */}
      <div className="w-full md:w-[55%] h-96 md:min-h-screen relative overflow-hidden bg-[var(--color-warm-white)] flex-shrink-0 md:flex-grow">
        <ParallaxImage
          src="/images/product/thekua-closeup.jpg"
          alt="Close up of traditional handmade Khasta Thekua"
          containerClassName="w-full h-full"
          imageClassName="object-cover object-center"
          speed={1.08}
          priority
        />
        {/* Subtle, soft light gradient at bottom for smooth blending into the body canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    </section>
  );
}
