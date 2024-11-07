// src/pages/Home.tsx
import HeroSection from '@/components/home/HeroSections';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';
import FacilitiesSection from '@/components/home/FacilitiesSection';

const Home = () => {
  return (
    <div>
      <div
        id="home"
      >
        <HeroSection />
      </div>
      <div
        id="facility"
      >
        <FacilitiesSection />
      </div>
      <div
        id="menu"
      >
        <MenuSection />
      </div>
      <div
        id="gallery"
      >
        <GallerySection />
      </div>
    </div>
  );
};

export default Home;
