"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when open
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

  const handleCheckout = () => {
    setIsRedirecting(true);
    
    // Construct Shopify cart permalink
    // Standard format: https://{shop}.myshopify.com/cart/{variant_id}:{quantity},{variant_id}:{quantity}
    // We parse the variant ID from the GID (e.g. gid://shopify/ProductVariant/1 -> 1)
    const cartParams = items
      .map((item) => {
        const variantId = item.variant.id.split("/").pop();
        return `${variantId}:${item.quantity}`;
      })
      .join(",");
    
    const shopDomain = "mithila-bhansa-ghar.myshopify.com"; 
    const checkoutUrl = `https://${shopDomain}/cart/${cartParams}`;
    
    // Add a short delay to display the redirection status
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 850);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-cream)] z-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[var(--color-terracotta)]/25">
          <h2 className="font-serif text-2xl text-[var(--color-text-primary)]">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="font-serif text-xl text-[var(--color-text-secondary)]">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="text-sm tracking-widest uppercase text-[var(--color-terracotta)] border-b border-[var(--color-terracotta)] pb-1 hover:text-[var(--color-madhubani-red)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-20 h-24 rounded-sm overflow-hidden bg-[var(--color-warm-white)] flex-shrink-0">
                  <Image 
                    src="/images/product/thekua-closeup.jpg" 
                    alt={item.variant.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-lg text-[var(--color-text-primary)] line-clamp-1">{item.variant.title}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-xs tracking-widest uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="font-sans text-sm text-[var(--color-text-secondary)] mb-auto">
                    ₹{item.variant.price.amount}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[var(--color-terracotta)]/20 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)]"
                      >
                        -
                      </button>
                      <div className="w-8 text-center font-sans text-sm">{item.quantity}</div>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-terracotta)]"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="font-sans text-lg text-[var(--color-text-primary)]">
                      ₹{(parseFloat(item.variant.price.amount) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-[var(--color-cream)] border-t border-[var(--color-terracotta)]/25 space-y-4">
            <div className="flex justify-between items-end mb-2">
              <span className="font-sans text-sm tracking-widest uppercase text-[var(--color-text-secondary)]">Subtotal</span>
              <span className="font-serif text-2xl text-[var(--color-text-primary)]">₹{totalPrice().toFixed(2)}</span>
            </div>
            
            <div className="bg-[var(--color-cream)] p-3 border border-[var(--color-terracotta)]/15 rounded-sm text-center mb-2">
              <p className="text-[10px] tracking-widest uppercase text-[var(--color-terracotta)] font-bold mb-1">
                🔒 Secure Guest Checkout
              </p>
              <p className="text-[9px] text-[var(--color-text-secondary)] leading-relaxed">
                Checkout directly on Shopify as a guest. No account or password creation required.
              </p>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isRedirecting}
              className="w-full h-14 bg-[var(--color-terracotta)] text-white font-sans tracking-widest uppercase text-sm rounded-sm hover:bg-[var(--color-madhubani-red)] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isRedirecting ? "Redirecting..." : "Checkout as Guest"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
