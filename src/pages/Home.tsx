// src/pages/Home.tsx
import HeroSection from '@/components/home/HeroSections';
import MenuSection from '@/components/home/MenuSection';
import GallerySection from '@/components/home/GallerySection';
import ReachMeSection from '@/components/ReachMeSection';

const Home = () => {
  return (
    <div>
      <div id="home"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-10 px-4 sm:px-6 lg:px-8"
      >
        <HeroSection />
      </div>
      <div id="menu">
        <MenuSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>

      {/* Tambahkan modal di sini */}
      <ReachMeSection />
    </div>
  );
};

export default Home;
