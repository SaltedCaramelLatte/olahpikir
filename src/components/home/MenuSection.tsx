import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

const MenuSection = () => {
    const coffeeList = [
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
        { title: "Espresso", img: "/images/coffee-1.jpeg", price: "$4.00" },
        { title: "Latte", img: "/images/coffee-2.jpeg", price: "$5.00" },
        { title: "Cappuccino", img: "/images/coffee-3.jpeg", price: "$5.50" },
    ];

    const nonCoffeeList = [
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
        { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
        { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
        { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
    ];

    const [visibleItems, setVisibleItems] = useState(Array(coffeeList.length + nonCoffeeList.length).fill(false));
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = (entry.target as HTMLElement).dataset.index;
                    if (index !== undefined) {
                        setVisibleItems((prev) => {
                            const newVisibleItems = [...prev];
                            newVisibleItems[parseInt(index)] = true;
                            return newVisibleItems;
                        });
                        observer.current?.unobserve(entry.target);
                    }
                }
            });
        });

        const elements = document.querySelectorAll('.menu-item');
        elements.forEach((item) => observer.current?.observe(item));

        return () => {
            elements.forEach((item) => observer.current?.unobserve(item));
        };
    }, []);

    const renderMenuItems = (list: { title: string; img: string; price: string; }[], offset: number) => {
        return list.map((item: { title: string; img: string; price: string; }, index: number) => {
            const [imageError, setImageError] = useState(false);
            return (
                <div
                    className={`menu-item transition-opacity duration-1000 ${visibleItems[index + offset] ? 'opacity-100' : 'opacity-0'}`}
                    data-index={index + offset}
                    key={index + offset}
                >
                    <Card
                        shadow="lg"
                        isPressable
                        radius="lg"
                        className="rounded-xl hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-800 overflow-hidden w-[200px] h-[400px]"
                        onPress={() => console.log(`${item.title} pressed`)}
                    >

                        <CardBody className="overflow-hidden p-0">
                            {imageError ? (
                                <div className="bg-gray-200 dark:bg-gray-700 w-full h-[400px] flex items-center justify-center rounded-b-lg">
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
                </div>
            );
        });
    };

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-2 sm:px-4 lg:px-6">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Menu</h2>

            <h3 className="text-2xl font-semibold text-primary mb-4">Coffee</h3>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {renderMenuItems(coffeeList, 0)}
            </div>

            <h3 className="text-2xl font-semibold text-primary mb-4">Non-Coffee</h3>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {renderMenuItems(nonCoffeeList, coffeeList.length)}
            </div>
        </section>


    );
};

export default MenuSection;
