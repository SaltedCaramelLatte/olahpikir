import { Button } from '@nextui-org/react';
import backgroundImage from '@/images/background.jpg';

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 lg:px-8"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-3xl text-center text-white p-6 bg-opacity-75 bg-light-background dark:bg-dark-background rounded-md shadow-lg">
                <h1 className="text-3xl font-bold font-bossa sm:text-4xl lg:text-5xl mb-4">
                    Selamat Datang di Kedai Kopi Mahasiswa
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-light-secondary dark:text-dark-secondary mb-6">
                    Tempat yang nyaman untuk belajar, bersantai, dan berkreasi bersama
                    teman-teman. Dapatkan pengalaman unik dengan kopi khas kami dan
                    dukungan acara mahasiswa yang seru!
                </p>

                {/* Button Group */}
                <div className="flex justify-center space-x-4">
                    <Button className="bg-primary text-light-background dark:text-dark-background rounded-md shadow-md hover:bg-opacity-90 transition">
                        Lihat Menu
                    </Button>
                    <Button className="bg-primary text-light-background dark:text-dark-background rounded-md shadow-md hover:bg-opacity-90 transition">
                        Reservasi Sekarang
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
