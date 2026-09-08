"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cart-store";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[var(--color-cream)]/95 backdrop-blur-md border-b border-[var(--color-terracotta)]/10",
          isScrolled ? "py-2 shadow-sm" : "py-4",
          scrollDirection === "down" && isScrolled ? "-translate-y-full" : "translate-y-0"
        )}
      >
        {/* Desktop Header Layout: Two-Tier Stack */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* Top Tier: Prominent Centered Brand Identity */}
          <div className={cn("transition-all duration-500 flex justify-center items-center pb-3 w-full border-b border-[var(--color-terracotta)]/5", isScrolled ? "hidden" : "flex")}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-28 h-20 flex-shrink-0">
                <Image
                  src="/images/brand/bhansaghar-logo-transparent.png"
                  alt="Bhansaghar logo"
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <span className="font-serif text-2xl lg:text-3xl tracking-wide text-[var(--color-text-primary)] group-hover:text-[var(--color-terracotta)] transition-colors">
                Mithila Bhansa Ghar
              </span>
            </Link>
          </div>

          {/* Bottom Tier: Nav Links & Cart */}
          <div className="container mx-auto px-8 pt-3 flex items-center justify-between relative w-full">
            {/* Left Spacer to balance Cart */}
            <div className="w-20" />
            
            {/* Centered Navigation */}
            <nav className="flex items-center gap-12 justify-center">
              <Link href="/shop" className="text-sm tracking-[0.2em] font-semibold uppercase hover:text-[var(--color-terracotta)] transition-colors">Shop</Link>
              <Link href="/our-story" className="text-sm tracking-[0.2em] font-semibold uppercase hover:text-[var(--color-terracotta)] transition-colors">Our Story</Link>
              <Link href="/mithila-culture" className="text-sm tracking-[0.2em] font-semibold uppercase hover:text-[var(--color-terracotta)] transition-colors">Culture</Link>
            </nav>

            {/* Right Cart Action */}
            <button 
              onClick={openCart}
              className="flex items-center gap-2 hover:text-[var(--color-terracotta)] transition-colors cursor-pointer font-sans"
            >
              <span className="text-sm font-semibold tracking-widest uppercase">Cart</span>
              {mounted && totalItems() > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-terracotta)] text-white text-xs">
                  {totalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Header Layout: Compact Single-Row */}
        <div className="md:hidden container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-20 h-12 flex-shrink-0">
              <Image
                src="/images/brand/bhansaghar-logo-transparent.png"
                alt="Bhansaghar logo"
                fill
                unoptimized
                className="object-contain"
                sizes="80px"
              />
            </div>
            <span className="font-serif text-xl tracking-wide text-[var(--color-text-primary)]">
              Mithila Bhansa Ghar
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button 
              onClick={openCart}
              className="flex items-center gap-1.5 hover:text-[var(--color-terracotta)] transition-colors cursor-pointer"
            >
              <span className="text-sm font-semibold tracking-widest uppercase">Cart</span>
              {mounted && totalItems() > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[var(--color-terracotta)] text-white text-[10px]">
                  {totalItems()}
                </span>
              )}
            </button>
            
            <button 
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={isMobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
