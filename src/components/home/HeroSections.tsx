import { Button, Image } from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate
import coffeeImage from "@/images/coffee.jpg";

const HeroSection = () => {
    const [imageError, setImageError] = useState(false);
    const navigate = useNavigate(); // Inisialisasi navigate

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-light-background dark:bg-dark-background px-4 lg:px-20 sm:px-6">
            <div className="flex flex-col items-start md:w-1/2 max-w-lg text-left md:ml-10">
                <h1 className="font-bold font-bossa text-6xl sm:text-5xl lg:text-6xl text-primary mb-4 leading-tight dark:text-gray-200">
                    olahpikir Cafe
                </h1>
                <p className="text-xl sm:text-2xl text-dark-secondary dark:text-light-secondary mb-6">
                    Nikmati berbagai varian kopi yang kami sajikan dengan penuh cinta dan dedikasi.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <Button
                        color="secondary"
                        size="md"
                        className="bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background rounded-md shadow-md hover:bg-[#924F29] dark:hover:bg-[#CCAA84] transition mb-4"
                        onClick={() => navigate('/menu')} // Navigasi ke halaman menu
                    >
                        Lihat Menu
                    </Button>

                    {/* Tombol WhatsApp */}
                    <Button
                        color="secondary"
                        size="md"
                        className="bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background rounded-md shadow-md hover:bg-[#924F29] dark:hover:bg-[#CCAA84] transition mb-4"
                        onClick={() => window.open('https://wa.me/6285156967944?text=Halo%20kak,%0A%0Asaya%20dari%20[Nama%20Anda]%20%0Aberminat%20mengadakan%20bazaar%20pada%20tanggal%20[Masukkan%20tanggal%20dan%20bulan].%0A%0AApakah%20bisa%20dibantu%3F', '_blank')}
                    >
                        Ingin mengadakan Bazaar?
                    </Button>
                </div>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center mt-8 md:mt-0 md:mr-10 overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={coffeeImage}
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
