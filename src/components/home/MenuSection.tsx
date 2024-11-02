// MenuSection.tsx
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { Tabs, Tab } from "@nextui-org/react";

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
    const [activeTab, setActiveTab] = useState<string>("coffee");
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

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
            observer.current?.disconnect();
        };
    }, [activeTab]);

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
            
            <div className="w-full max-w-3xl"> 
                <Tabs 
                    aria-label="Menu Categories" 
                    className="bg-white dark:bg-dark-surface rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700" 
                    style={{ marginTop: '20px' }}
                    onSelectionChange={(key) => setActiveTab(String(key))}
                >
                    <Tab key="coffee" title="Coffee">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(coffeeList, 0)}
                        </div>
                    </Tab>
                    <Tab key="non-coffee" title="Non-Coffee">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(nonCoffeeList, coffeeList.length)}
                        </div>
                    </Tab>
                    <Tab key="milk" title="Milk">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(milkList, coffeeList.length + nonCoffeeList.length)}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default MenuSection;
