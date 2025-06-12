import { Card, CardBody, Divider } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
    const footer = {
        contact_email: "@gmail.com",
        contact_phone: "+62 000 0000 000",
        contact_address: "Jl. Sultan Hasanuddin No.180, Pandang Pandang, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan 90221",
        maps_link: "https://maps.app.goo.gl/RLdbhm26ZJNu5iYg9" 
    };
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-black text-black dark:text-white py-10 px-5 text-center pt-24">
            {/* <section className="py-10 bg-light-background dark:bg-dark-background text-center pt-24"> */}
            <h2 className="text-4xl font-bold text-light mb-8 dark:text-gray-200 font-bossa">Find Us</h2>
            <Divider className="my-6 bg-gray-600 dark:bg-gray-500" />

            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-screen-xl mx-auto"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center p-4">
                        <div className="relative col-span-6 md:col-span-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.491874647002!2d119.43887307498254!3d-5.185075694792437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee33fbf6d357d%3A0xc11460d73df7aa4c!2sOlah%20Pikir%20Coffee!5e0!3m2!1sid!2sid!4v1730545239284!5m2!1sid!2sid"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Olah Pikir Cafe"
                                className="rounded-lg"
                            ></iframe>
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-medium text-black dark:text-white">
                                    Email:
                                    <a
                                        href={`mailto:${footer.contact_email}`}
                                        className="text-blue-400 dark:text-blue-300 hover:underline"
                                    >
                                        {footer.contact_email}
                                    </a>
                                </p>
                                <p className="text-lg text-gray-500 dark:text-gray-400">
                                    Telepon:
                                    <a
                                        href={`tel:${footer.contact_phone}`}
                                        className="text-blue-400 dark:text-blue-300 hover:underline"
                                    >
                                        {footer.contact_phone}
                                    </a>
                                </p>
                                <p className="text-lg text-gray-500 dark:text-gray-400">
                                    Alamat: {footer.contact_address}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <div className="flex justify-between items-center flex-col-reverse sm:flex-row text-center text-sm mt-5 px-8 space-y-4 sm:space-y-0">
                <span className="text-gray-500 dark:text-gray-400">
                    &copy; {currentYear} Wico Gowa
                </span>
                <div className="flex items-center space-x-4 mt-3 sm:mt-0">
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
