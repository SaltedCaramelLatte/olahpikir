import { Card, CardBody, Divider } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
    // Fallback data kontak
    const footer = {
        contact_email: "olahpikicafe@gmail.com",
        contact_phone: "+62 123 4567 890",
        contact_address: "Jl. Bumi 2, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221",
    };
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-black text-black dark:text-white py-10 px-5">
            <Divider className="my-6 bg-gray-600 dark:bg-gray-500" />

            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-screen-xl mx-auto"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <div className="bg-gray-200 dark:bg-gray-700 w-full h-40 flex items-center justify-center rounded-lg">
                                <span className="text-gray-500 dark:text-gray-300">Logo Placeholder</span>
                            </div>
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <p className="text-lg font-medium mt-2 text-black dark:text-white">
                                        Email: <a href={`mailto:${footer.contact_email}`} className="text-blue-400 dark:text-blue-300 hover:underline">{footer.contact_email}</a>
                                    </p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Telepon: <a href={`tel:${footer.contact_phone}`} className="text-blue-400 dark:text-blue-300 hover:underline">{footer.contact_phone}</a>
                                    </p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Alamat: {footer.contact_address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <div className="flex justify-between items-center flex-col-reverse sm:flex-row text-center text-sm mt-5 px-8 space-y-4 sm:space-y-0">
                <span className="text-gray-500 dark:text-gray-400">
                    &copy; {currentYear} olahpikir Cafe
                </span>
                <div className="flex items-center space-x-4 mt-3 sm:mt-0">
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
