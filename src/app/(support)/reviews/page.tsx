import Image from "next/image";
import { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Customer Reviews | Mithila Bhansa Ghar",
  description: "Read what our customers have to say about the authentic taste of our Thekua.",
};

const allReviews = [
  { quote: "Priyanka the thekuas are heavenly.. just like my mum's ❤️", author: "Ayushi", image: "/images/reviews/whatsapp-ayushi.jpg" },
  { quote: "Best theekua.. loved it. I'll be a loyal customer.", author: "Gargi", image: "/images/reviews/whatsapp-gargi.jpg" },
  { quote: "Hi Ma'am, hope are you making it soon, let me have 400gm this time.", author: "Rahul", image: "/images/reviews/whatsapp-rahul.jpg" },
  { quote: "It was so good.. softer than what we used to make at home.", author: "Manu", image: "/images/reviews/whatsapp-manu.jpg" },
  { quote: "too yum... Amazing thekua", author: "Preeti", image: "/images/reviews/whatsapp-preeti-savarni.jpg" },
  { quote: "I'm your regular client.", author: "Ankiita", image: "/images/reviews/whatsapp-ankiita.jpg" },
  { quote: "Really yumm", author: "Customer", image: "/images/reviews/whatsapp-yumm.jpg" },
  { quote: "It's heavenly like mum's", author: "DD Foodies Community", image: "/images/reviews/whatsapp-community-1.jpg" }
];

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-warm-white)] min-h-screen">
      
      <div className="container mx-auto px-4 md:px-8 mb-20 text-center">
        <FadeIn>
          <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">Reviews</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)]">
            Messages from <span className="italic">home.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, index) => (
            <StaggerItem key={index} className="bg-[var(--color-cream)] p-8 rounded-sm shadow-sm border border-[var(--color-terracotta)]/10 flex flex-col h-full relative group">
              <div className="absolute -top-4 -left-2 text-6xl font-serif text-[var(--color-beige)] opacity-50 group-hover:text-[var(--color-terracotta)]/30 transition-colors pointer-events-none">
                "
              </div>
              
              <p className="font-serif text-xl text-[var(--color-text-primary)] mb-6 flex-grow relative z-10 italic">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[var(--color-terracotta)]/20">
                  <Image 
                    src={review.image} 
                    alt={`WhatsApp review from ${review.author}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-sans text-sm tracking-wider uppercase text-[var(--color-text-secondary)]">
                  {review.author}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
