import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mithila Bhansa Ghar",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="font-serif text-4xl text-[var(--color-text-primary)] mb-8">Terms of Service</h1>
        <div className="prose prose-lg prose-p:text-[var(--color-text-secondary)]">
          <p><em>(Detailed terms of service will be provided by the store owner)</em></p>
        </div>
      </div>
    </div>
  );
}
