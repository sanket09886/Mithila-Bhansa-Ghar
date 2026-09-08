import { HeroSection } from "@/features/home/hero-section";
import { StoryPreview } from "@/features/home/story-preview";
import { KitchenSection } from "@/features/home/kitchen-section";
import { IngredientsSection } from "@/features/home/ingredients-section";
import { CultureSection } from "@/features/home/culture-section";
import { GalleryPreview } from "@/features/home/gallery-preview";
import { TestimonialsSection } from "@/features/home/testimonials-section";
import { FeaturedProducts } from "@/features/home/featured-products";
import { FaqSection } from "@/features/home/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <IngredientsSection />
      <TestimonialsSection />
      <StoryPreview />
      <KitchenSection />
      <CultureSection />
      <GalleryPreview />
      <FaqSection />
    </>
  );
}
