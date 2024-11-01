import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";

const MenuSection = () => {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Menu</h2>
            <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {list.map((item, index) => {
                    const [imageError, setImageError] = useState(false);

                    return (
                        <Card 
                            shadow="lg" 
                            key={index} 
                            isPressable 
                            className="rounded-xl hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-900 overflow-hidden"
                            onPress={() => console.log(`${item.title} pressed`)}
                        >
                            <CardBody className="overflow-hidden p-0">
                                {imageError ? (
                                    <div className="bg-gray-200 dark:bg-gray-700 w-full h-[180px] flex items-center justify-center">
                                        <span className="text-gray-500 dark:text-gray-300">Image Placeholder</span>
                                    </div>
                                ) : (
                                    <Image
                                        shadow="sm"
                                        alt={item.title}
                                        className="w-full h-[180px] object-cover"
                                        src={item.img}
                                        onError={() => setImageError(true)}
                                    />
                                )}
                            </CardBody>
                            <CardFooter className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800">
                                <b className="text-sm text-primary">{item.title}</b>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.price}</p>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default MenuSection;
