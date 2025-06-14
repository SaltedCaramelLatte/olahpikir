import { Button, Image } from '@nextui-org/react';
import { useState } from 'react';
import coffeeImage from "@/images/wifiid.png";
import logoImage from "@/images/Logopanjang.jpg";


const HeroSection = () => {
    const [imageError, setImageError] = useState(false);

    interface ScrollToSectionProps {
        id: string;
    }

    const scrollToSection = (id: ScrollToSectionProps['id']): void => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background pt-24 px-4 lg:px-20 px-4 sm:px-6 lg:px-8 lg:gap-x-10">
            <div className="flex flex-col items-start md:w-1/2 max-w-lg text-left md:ml-10">
                <h1 className="font-bold font-bossa text-6xl sm:text-5xl lg:text-6xl text-light mb-4 leading-tight dark:text-gray-200">
                    Wico Gowa 
                </h1>
                <p className="text-xl sm:text-2xl text-dark-secondary dark:text-light-secondary mb-6">
                    Segelas kopi,colokan aman dan wifi kencang. Tempat yang ngerti kamu butuh kerja sambil nyeruput tenang.
                    </p>
                <p className="text-md sm:text-lg text-dark-secondary dark:text-light-secondary mb-4">
                    Bayar jadi lebih mudah dengan Qris
                </p>

                <div className="flex w-full justify-between items-center mt-4 px-2">
                    <Button
                        color="secondary"
                        size="md"
                        className="bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background rounded-md shadow-md hover:bg-[#924F29] dark:hover:bg-[#CCAA84] transition"
                        onClick={() => scrollToSection('menu')}
                    >
                        See Menu
                    </Button>
                </div>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center mt-8 md:mt-0 md:mr-10 overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={logoImage}
                    alt="Gelas kopi"
                    className="object-cover w-auto h-auto"
                    onError={() => setImageError(true)}
                    style={{ opacity: 1, visibility: 'visible' }}
                />
            </div>
        </section>

    );
};

export default HeroSection;
