// src/pages/Home.tsx
import HeroSection from '@/components/home/HeroSections';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <MenuSection />
      <GallerySection />
    </div>
  );
};

export default Home;
