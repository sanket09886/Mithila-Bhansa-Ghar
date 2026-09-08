import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductVariant } from "@/lib/shopify/types";

export interface CartItem {
  id: string;
  variant: ProductVariant;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (variant: ProductVariant, quantity: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (variant, quantity) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.variant.id === variant.id);
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.variant.id === variant.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
              isOpen: true,
            };
          }

          return {
            items: [...state.items, { id: variant.id, variant, quantity }],
            isOpen: true,
          };
        });
      },

      removeItem: (variantId) => {
        set((state) => ({
          items: state.items.filter((item) => item.variant.id !== variantId),
        }));
      },

      updateQuantity: (variantId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.variant.id === variantId ? { ...item, quantity } : item
          ),
        }));
      },

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearCart: () => set({ items: [] }),

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = parseFloat(item.variant.price.amount);
          return total + (price * item.quantity);
        }, 0);
      },
    }),
    {
      name: "mbg-cart-storage",
      partialize: (state) => ({ items: state.items }), // Only persist items
    }
  )
);
