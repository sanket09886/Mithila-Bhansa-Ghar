import type { Metadata } from "next";
import { cormorant, outfit } from "./fonts";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/layout/cart-drawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithila Bhansa Ghar | Digital Home",
  description: "Preserving memories, traditions, and recipes. The taste that waited for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-cream)] text-[var(--color-text-primary)]">
        <LenisProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
