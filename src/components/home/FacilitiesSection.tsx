import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaWifi, FaTree } from "react-icons/fa";
import { IconType } from "react-icons";

interface FacilityCardProps {
    icon: IconType;
    title: string;
    description: string;
    className?: string;
}

const FacilityCard = ({ icon: Icon, title, description, className }: FacilityCardProps) => {
    return (
        <Card className={`flex flex-col items-center p-6 rounded-lg shadow-lg bg-light-primary dark:bg-dark-primary text-center w-full max-w-sm ${className}`}>
            <CardHeader className="mb-4">
                <Icon className="text-4xl text-light-background dark:text-dark-background" />
            </CardHeader>
            <CardBody>
                <h3 className="text-2xl font-bold font-bossa text-dark-text dark:text-light-text mb-2">{title}</h3>
                <p className="text-dark-text dark:text-light-text mt-2 text-base leading-relaxed">
                    {description}
                </p>
            </CardBody>
        </Card>
    );
};

const FacilitiesSection = () => {
    return (
        <section className="py-10 bg-light-background dark:bg-dark-background text-center pt-24">
            <h2 className=" font text-4xl font-bold text-light mb-8 dark:text-gray-200 font-bossa">Facilities</h2>
            <div className="max-w-[900px] mx-auto gap-4 grid grid-cols-12 px-4 sm:px-8">
                <FacilityCard
                    icon={FaWifi}
                    title="Wi-Fi Super Cepat 50 Mbps"
                    description="Nikmati akses internet cepat hingga 50 Mbps untuk berbagai kebutuhan. Tempat yang sempurna untuk belajar, bekerja, atau sekadar menikmati waktu luang dengan streaming tanpa hambatan."
                    className="col-span-12 sm:col-span-6"
                />

                <FacilityCard
                    icon={FaTree}
                    title="Area Terbuka yang Nyaman"
                    description="Rasakan suasana segar di area terbuka kami, ideal untuk berkumpul bersama teman atau menikmati waktu santai sambil menyeruput kopi favorit."
                    className="col-span-12 sm:col-span-6"
                />
            </div>
        </section>
    );
};


export default FacilitiesSection;
