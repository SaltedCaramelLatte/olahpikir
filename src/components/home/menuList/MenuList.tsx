// components/home/menuList/MenuList.tsx
import { Spacer } from "@nextui-org/react";
import MenuItem from "../MenuItem";
import { useMenuData } from '../../../hooks/useMenuData';

interface MenuItemType {
    title: string;
    img: string;
    price: string;
    description: string;
    status: string;
    category?: string;
}

interface MenuListProps {
    title: string;
    category: string;
}

const MenuList = ({ title, category }: MenuListProps) => {
    const { menuItems, loading } = useMenuData();

    const itemsToDisplay = menuItems.filter(item => item.category === category);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-col items-center justify-center py-10 px-4 w-full">
            <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-light-secondary">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center">
                {itemsToDisplay.map((item, index) => (
                    <MenuItem item={item} index={index} visible={true} key={index} />
                ))}
            </div>
            <Spacer y={10} />
        </section>
    );
};

export default MenuList;
