import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

import espressoImage from "@/images/coffee_p.jpg";
import latteImage from "@/images/coffee.jpg";
import cappuccinoImage from "@/images/coffee.jpg";
import milkImage from "@/images/coffee.jpg";
import orangeImage from "@/images/coffee.jpg";
import tangerineImage from "@/images/coffee.jpg";
import raspberryImage from "@/images/coffee.jpg";

interface MenuItemType {
    title: string;
    img: string;
    price: string;
    description: string;
    status: string;
}

const coffeeList: MenuItemType[] = [
    { title: "Espresso", img: espressoImage, price: "$4.00", description: "Strong and bold", status: "" },
    { title: "Latte", img: latteImage, price: "$5.00", description: "Smooth and creamy", status: "" },
    { title: "Cappuccino", img: cappuccinoImage, price: "$5.50", description: "Rich and frothy", status: "" },
];

const nonCoffeeList: MenuItemType[] = [
    { title: "Orange", img: orangeImage, price: "$5.50", description: "Fresh and tangy", status: "" },
    { title: "Tangerine", img: tangerineImage, price: "$3.00", description: "Sweet and juicy", status: "" },
    { title: "Raspberry", img: raspberryImage, price: "$10.00", description: "Tart and sweet", status: "" },
];

const milkList: MenuItemType[] = [
    { title: "Whole Milk", img: milkImage, price: "$2.50", description: "Rich and creamy", status: "" },
    { title: "Almond Milk", img: milkImage, price: "$3.00", description: "Nutty and smooth", status: "" },
    { title: "Soy Milk", img: milkImage, price: "$3.00", description: "Light and healthy", status: "" },
];

const MenuSection = () => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(coffeeList.length + nonCoffeeList.length + milkList.length).fill(false));
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
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
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.menu-item');
        elements.forEach((item) => observer.current?.observe(item));

        return () => {
            elements.forEach((item) => observer.current?.unobserve(item));
        };
    }, []);

    const renderMenuItems = (list: MenuItemType[], offset: number) => {
        return list.map((item, index) => (
            <MenuItem
                item={item}
                index={index + offset}
                visible={visibleItems[index + offset]}
                key={index + offset}
            />
        ));
    };

    return (
        <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background min-h-screen py-10 px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-primary mb-8 dark:text-gray-200">Our Menu</h2>

            {/* Section Coffee */}
            <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-light-secondary">Coffee</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                {renderMenuItems(coffeeList, 0)}
            </div>

            {/* Section Non-Coffee */}
            <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-light-secondary">Non-Coffee</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                {renderMenuItems(nonCoffeeList, coffeeList.length)}
            </div>

            {/* Section Milk */}
            <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-light-secondary">Milk</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                {renderMenuItems(milkList, coffeeList.length + nonCoffeeList.length)}
            </div>
        </div>
    );
}

export default MenuSection;