import { Metadata } from "next";
import { FaqSection } from "@/features/home/faq-section";

export const metadata: Metadata = {
  title: "FAQ | Mithila Bhansa Ghar",
  description: "Frequently asked questions about our ingredients, shipping, and storage.",
};

export default function FaqPage() {
  return (
    <div className="pt-20 min-h-screen bg-[var(--color-warm-white)]">
      <FaqSection />
    </div>
  );
}
