import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Mithila Bhansa Ghar",
  description: "Our shipping and delivery policies.",
};

export default function ShippingPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="font-serif text-4xl text-[var(--color-text-primary)] mb-8">Shipping Policy</h1>
        <div className="prose prose-lg prose-p:text-[var(--color-text-secondary)]">
          <p>We prepare our Thekua fresh after receiving your order. Please allow 2-3 days for preparation.</p>
          <p>Shipping usually takes 4-7 business days across India.</p>
          <p><em>(Detailed shipping policy will be provided by the store owner)</em></p>
        </div>
      </div>
    </div>
  );
}
