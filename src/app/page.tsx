import {
  HomeHeader,
  RatingSection,
  KeyFeaturesSection,
  MultiApplicationSection,
  ProductInsightSection,
  ClientSection,
  ProductGlimpseSection,
  ContactSection,
  TestimonialSection,
} from "@/components/HomePage Components";

import NonErrorLayout from "@/layouts/NonErrorLayout";

export default function Home() {
  return (
    <NonErrorLayout>
      <HomeHeader />
      <RatingSection />
      <KeyFeaturesSection />
      <MultiApplicationSection />
      {/* <ProductInsightSection /> */}
      {/* <TestimonialSection /> */}
      <ProductGlimpseSection />
      <ClientSection />
      <ContactSection />
    </NonErrorLayout>
  );
}
