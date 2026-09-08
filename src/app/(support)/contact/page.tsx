import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export const metadata: Metadata = {
  title: "Contact Us | Mithila Bhansa Ghar",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cream)] min-h-screen">
      
      <div className="container mx-auto px-4 md:px-8 mb-20 text-center max-w-2xl">
        <FadeIn>
          <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">Contact</h1>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
            Get in <span className="italic">touch.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Whether you have a question about our ingredients, need help with an order, or just want to share a memory, we're here to listen.
          </p>
        </FadeIn>
      </div>

      <MadhubaniBorder className="opacity-40 max-w-2xl mx-auto mb-20" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <FadeIn delay={0.1} className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4">Our Kitchen</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Mithila Bhansa Ghar (by Priyanka Jha)<br />
                M73, Diamond District, Old Airport Road,<br />
                Bangalore East, Bangalore Urban, Karnataka - 560008<br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4">Reach Out</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2">
                <span className="font-medium text-[var(--color-text-primary)]">Email:</span> hello@mithilabhansaghar.com
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                <span className="font-medium text-[var(--color-text-primary)]">WhatsApp:</span> +91 95386 60957
              </p>
              <a 
                href="https://wa.me/919538660957"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-terracotta)] text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors text-sm tracking-widest uppercase rounded-sm"
              >
                Message on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-4">FSSAI Registration</h3>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-12 flex-shrink-0 bg-white p-0.5 rounded-sm border border-[var(--color-terracotta)]/15">
                  <Image 
                    src="/images/brand/fssai-logo.png"
                    alt="FSSAI Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-[var(--color-text-primary)]">FSSAI Approved Operator</p>
                  <p className="text-[var(--color-text-secondary)]">Registration No. 21226009002763</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="space-y-6 bg-[var(--color-warm-white)] p-8 rounded-sm shadow-sm border border-[var(--color-terracotta)]/10">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-text-secondary)] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-[var(--color-terracotta)]/30 focus:border-[var(--color-terracotta)] outline-none py-2 transition-colors text-[var(--color-text-primary)]" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-[var(--color-terracotta)]/30 focus:border-[var(--color-terracotta)] outline-none py-2 transition-colors text-[var(--color-text-primary)]" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[var(--color-text-secondary)] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-terracotta)]/30 focus:border-[var(--color-terracotta)] outline-none py-2 transition-colors text-[var(--color-text-primary)] resize-none" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[var(--color-text-primary)] text-white py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-terracotta)] transition-colors rounded-sm"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
