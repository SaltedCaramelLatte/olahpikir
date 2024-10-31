import { Button } from '@nextui-org/react';
import backgroundImage from '@/images/background.jpg';

const HeroSection = () => {
    return (
        <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            {/* Frame Pembatas untuk Gambar */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <img
                    src={backgroundImage}
                    alt="Background Kedai Kopi"
                    className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                />
            </div>
            {/* Content Overlay */}
            <div className="relative z-10 text-center max-w-3xl p-5 bg-opacity-75 bg-light-background dark:bg-dark-background rounded-md shadow-lg">
                <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                    Selamat Datang di Kedai Kopi Mahasiswa
                </h1>
                <p className="text-lg md:text-xl text-light-secondary dark:text-dark-secondary mb-6">
                    Tempat yang nyaman untuk belajar, bersantai, dan berkreasi bersama
                    teman-teman. Dapatkan pengalaman unik dengan kopi khas kami dan
                    dukungan acara mahasiswa yang seru!
                </p>
                <div className="flex justify-center space-x-4">
                    <Button className="px-6 py-3 bg-primary text-light-background dark:text-dark-background rounded-md shadow-md hover:bg-opacity-90 transition">
                        Lihat Menu
                    </Button>
                    <Button className="px-6 py-3 bg-primary text-light-background dark:text-dark-background rounded-md shadow-md hover:bg-opacity-90 transition">
                        Reservasi Sekarang
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
