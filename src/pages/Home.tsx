import HeroSection from '@/components/home/HeroSections';
import Footer from '@/components/Footer'; // Pastikan path ini benar
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/home/MenuSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <MenuSection />
      <Footer /> 
    </div>
  );
};

export default Home;
