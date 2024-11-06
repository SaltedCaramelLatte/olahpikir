// components/home/menuList/MenuSection.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { useMenuData } from "../../hooks/useMenuData";
import { MenuItemType } from "./menuList/menuData";

const MenuSection = () => {
    const { menuItems, loading } = useMenuData(); // Ambil data dari Supabase
    const [activeTab, setActiveTab] = useState<string>("coffee");
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(menuItems.length).fill(false));
    const observer = useRef<IntersectionObserver | null>(null);
    const navigate = useNavigate();

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
    }, [activeTab, menuItems]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Filter data berdasarkan kategori
    const coffeeItems = menuItems.filter(item => item.category === "coffee");
    const nonCoffeeItems = menuItems.filter(item => item.category === "non-coffee");
    const milkItems = menuItems.filter(item => item.category === "milk");
    const teaItems = menuItems.filter(item => item.category === "tea");

    const renderMenuItems = (list: MenuItemType[], offset: number) => {
        return list.slice(0, 4).map((item, index) => (
            <MenuItem
                item={item}
                index={index + offset}
                visible={visibleItems[index + offset]}
                key={index + offset}
            />
        ));
    };

    const handleMoreClick = () => {
        navigate(`/menu/${activeTab}`);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background min-h-screen pt-24 px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-light mb-8 dark:text-gray-200">Our Menu</h2>

            <div className="w-full max-w-3xl">
                <Tabs
                    className="justify-center"
                    placement="top"
                    aria-label="Dynamic tabs"
                    style={{ marginTop: '20px' }}
                    selectedKey={activeTab}
                    classNames={{
                        tabList: 'dark:text-gray-200 overflow-x-auto hide-scrollbar bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg flex p-1',
                        base: 'mx-auto w-full',
                    }}
                    variant="bordered"
                    onSelectionChange={(key) => setActiveTab(String(key))}
                >
                    <Tab key="coffee" title="Coffee">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(coffeeItems, 0)}
                        </div>
                        <Button
                            onClick={handleMoreClick}
                            className="mt-4 px-4 py-2 text-white bg-[#b45f33] rounded-full shadow-md hover:bg-[#9e4e29] transition duration-200"
                        >
                            More
                        </Button>
                    </Tab>
                    <Tab key="non-coffee" title="Non-Coffee">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(nonCoffeeItems, coffeeItems.length)}
                        </div>
                        <Button
                            onClick={handleMoreClick}
                            className="mt-4 px-4 py-2 text-white bg-[#b45f33] rounded-full shadow-md hover:bg-[#9e4e29] transition duration-200"
                        >
                            More
                        </Button>
                    </Tab>
                    <Tab key="milk" title="Milk">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(milkItems, coffeeItems.length + nonCoffeeItems.length)}
                        </div>
                        <Button
                            onClick={handleMoreClick}
                            className="mt-4 px-4 py-2 text-white bg-[#b45f33] rounded-full shadow-md hover:bg-[#9e4e29] transition duration-200"
                        >
                            More
                        </Button>
                    </Tab>
                    <Tab key="tea" title="Tea">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center w-full">
                            {renderMenuItems(teaItems, coffeeItems.length + nonCoffeeItems.length + milkItems.length)}
                        </div>
                        <Button
                            onClick={handleMoreClick}
                            className="mt-4 px-4 py-2 text-white bg-[#b45f33] rounded-full shadow-md hover:bg-[#9e4e29] transition duration-200"
                        >
                            More
                        </Button>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default MenuSection;
