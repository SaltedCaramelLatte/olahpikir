// src/pages/Home.tsx
import HeroSection from '@/components/home/HeroSections';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';
import ReachMeSection from '@/components/ReachMeSection';

const Home = () => {
  return (
    <div>
      <div
        id="home"
      >
        <HeroSection />
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
      <ReachMeSection />
    </div>
  );
};

export default Home;
