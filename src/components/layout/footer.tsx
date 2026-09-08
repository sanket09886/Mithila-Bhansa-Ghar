import Link from "next/link";
import Image from "next/image";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] pt-16 pb-8 text-[var(--color-text-secondary)] mt-auto relative overflow-hidden">
      <MadhubaniBorder className="absolute top-0 left-0" />
      
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-3xl text-[var(--color-text-primary)] mb-4">Bhansa Ghar</h2>
              <p className="max-w-md italic">
                "Some recipes deserve to stay exactly as they were. We preserve memories, traditions, and the taste of home."
              </p>
            </div>
            
            <div className="text-xs space-y-1">
              <p className="font-medium text-[var(--color-text-primary)]">Mithila Bhansa Ghar (by Priyanka Jha)</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                M73, Diamond District, Old Airport Road,<br />
                Bangalore East, Bangalore Urban, Karnataka - 560008
              </p>
              <p className="text-[var(--color-text-secondary)]">WhatsApp: +91 95386 60957</p>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/bhansaghar_mithila?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-terracotta)] transition-colors flex items-center gap-2 text-xs"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-current">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow us on Instagram</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="relative w-16 h-12 flex-shrink-0 bg-white p-0.5 rounded-sm border border-[var(--color-terracotta)]/15">
                <Image 
                  src="/images/brand/fssai-logo.png"
                  alt="FSSAI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[10px] leading-snug">
                <p className="font-semibold text-[var(--color-text-primary)]">FSSAI Approved Operator</p>
                <p className="text-[var(--color-text-secondary)]">Registration No. 21226009002763</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-[var(--color-text-primary)] mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="hover:text-[var(--color-terracotta)] transition-colors">All Products</Link></li>
              <li><Link href="/reviews" className="hover:text-[var(--color-terracotta)] transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-terracotta)] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-[var(--color-text-primary)] mb-4">Brand</h3>
            <ul className="space-y-3">
              <li><Link href="/our-story" className="hover:text-[var(--color-terracotta)] transition-colors">Our Story</Link></li>
              <li><Link href="/mithila-culture" className="hover:text-[var(--color-terracotta)] transition-colors">Mithila Culture</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-terracotta)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-terracotta)]/20 text-sm">
          <p>&copy; {new Date().getFullYear()} Mithila Bhansa Ghar. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--color-terracotta)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-terracotta)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
