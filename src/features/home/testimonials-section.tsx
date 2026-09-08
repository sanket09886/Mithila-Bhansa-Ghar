import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const reviews = [
  {
    author: "Ayushi",
    location: "Delhi",
    image: "/images/reviews/whatsapp-ayushi.jpg",
    rotate: "rotate-[-1deg]"
  },
  {
    author: "Gargi",
    location: "Mumbai",
    image: "/images/reviews/whatsapp-gargi.jpg",
    rotate: "rotate-[1deg]"
  },
  {
    author: "Rahul",
    location: "Patna",
    image: "/images/reviews/whatsapp-rahul.jpg",
    rotate: "rotate-[-1.5deg]"
  },
  {
    author: "Manu",
    location: "Bangalore",
    image: "/images/reviews/whatsapp-manu.jpg",
    rotate: "rotate-[0.5deg]"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-40 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <FadeIn duration={1.6}>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
              Client Praises
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] leading-[1.05] tracking-tight">
              Real conversations.<br />
              <span className="italic font-light text-[var(--color-terracotta)]">Unfiltered feedback.</span>
            </h3>
          </FadeIn>
        </div>

        {/* Collage Grid */}
        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <StaggerItem 
              key={index} 
              className={`bg-[#FCFAF2] p-5 pb-7 rounded-sm shadow-sm border border-[var(--color-terracotta)]/10 flex flex-col h-full relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 cursor-pointer ${review.rotate}`}
            >
              {/* WhatsApp Image Screenshot */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm border border-[var(--color-terracotta)]/10 mb-6 bg-white flex-grow">
                <Image 
                  src={review.image} 
                  alt={`WhatsApp screenshot testimonial by ${review.author}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              {/* Author / Metadata Footer */}
              <div className="pt-4 border-t border-[var(--color-terracotta)]/10 flex justify-between items-center">
                <span className="font-serif text-xl italic text-[var(--color-text-primary)]">
                  {review.author}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-[var(--color-text-secondary)] font-semibold">
                  {review.location}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
