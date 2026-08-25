import {
  HeroSection,
  PopularCategories,
  SuperDelicious,
  CuratedCollections,
  LatestRecipes,
  NewsletterSection,
} from '@/components/home';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <SuperDelicious />
      <CuratedCollections />
      <LatestRecipes />
      <NewsletterSection />
    </>
  );
}
