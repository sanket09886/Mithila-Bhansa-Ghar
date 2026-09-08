"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useCartStore } from "@/store/cart-store";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { href: "/shop", label: "Shop Offerings" },
  { href: "/our-story", label: "Our Story" },
  { href: "/mithila-culture", label: "Culture & Art" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openCart, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-[320px] bg-[var(--color-cream)] shadow-2xl z-50 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-[var(--color-terracotta)]/10">
              <span className="font-serif text-2xl tracking-wide text-[var(--color-text-primary)]">
                Bhansa Ghar
              </span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6 hide-scrollbar">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer / Actions */}
            <div className="p-6 bg-[var(--color-warm-white)] border-t border-[var(--color-terracotta)]/10 flex flex-col gap-4 relative">
              <MadhubaniBorder className="absolute -top-1 left-0 w-full opacity-20" />
              
              <button
                onClick={() => {
                  onClose();
                  openCart();
                }}
                className="w-full flex items-center justify-between bg-white border border-[var(--color-terracotta)]/20 hover:border-[var(--color-terracotta)] text-[var(--color-text-primary)] py-4 px-6 rounded-sm shadow-sm transition-all duration-300 font-medium cursor-pointer"
              >
                <span className="font-sans text-sm tracking-widest uppercase">Cart</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-terracotta)] text-white text-xs font-sans">
                  {totalItems()}
                </span>
              </button>
              
              <div className="text-center text-xs text-[var(--color-text-secondary)] italic mt-2">
                "Pure handmade tradition."
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
