import HeroSection from '@/components/home/HeroSections';
import Footer from '@/components/Footer'; // Pastikan path ini benar
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/home/MenuSection';

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Memanggil Navbar di atas HeroSection */}
      <HeroSection />
      <MenuSection />
      <Footer /> {/* Memanggil Footer di bawah HeroSection */}
    </div>
  );
};

export default Home;
