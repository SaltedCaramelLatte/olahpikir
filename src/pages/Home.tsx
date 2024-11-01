import HeroSection from '@/components/home/HeroSections';
import Footer from '@/components/Footer'; // Pastikan path ini benar

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Footer /> {/* Memanggil Footer di bawah HeroSection */}
    </div>
  );
};

export default Home;
