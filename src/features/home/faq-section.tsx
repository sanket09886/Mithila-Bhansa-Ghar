"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does the Thekua stay fresh?",
    answer: "Since we do not use any preservatives, our Thekua is best consumed within 15-20 days of opening. We recommend storing it in an airtight container in a cool, dry place."
  },
  {
    question: "Do you use white sugar or jaggery?",
    answer: "We use only pure, unrefined jaggery (gur). It not only provides a deeper, earthier sweetness but also carries the traditional flavor of authentic Mithila Thekua."
  },
  {
    question: "Where do you ship?",
    answer: "We currently ship pan-India. Your order is freshly prepared after you place it, and usually takes 4-7 business days to reach you depending on your location."
  },
  {
    question: "Is this made in a factory?",
    answer: "No. Every single piece of Thekua is handmade in small batches in our own Bhansa Ghar (kitchen). From kneading the dough to frying it on a low flame, everything is done by hand."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-40 bg-[var(--color-cream)]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">Questions</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)]">
              Before you <span className="italic">order</span>
            </h3>
          </FadeIn>
        </div>

        <StaggerChildren className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <StaggerItem key={index}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left bg-[var(--color-cream)] p-6 rounded-sm border border-[var(--color-terracotta)]/10 hover:border-[var(--color-terracotta)]/30 transition-colors flex justify-between items-center group"
                >
                  <span className="font-serif text-xl text-[var(--color-text-primary)] pr-8">{faq.question}</span>
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--color-terracotta)] -translate-y-1/2" />
                    <div className={cn("absolute top-0 left-1/2 w-px h-full bg-[var(--color-terracotta)] -translate-x-1/2 transition-transform duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
                  </div>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out px-6",
                    isOpen ? "max-h-[200px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
                  )}
                >
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
