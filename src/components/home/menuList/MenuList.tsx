// components/home/menuList/MenuList.tsx
import { Spacer } from "@nextui-org/react";
import MenuItem from "../MenuItem";

interface MenuItemType {
    title: string;
    img: string;
    price: string;
    description: string;
    status: string;
}

interface MenuListProps {
    title: string;
    list: MenuItemType[];
}

const MenuList = ({ title, list }: MenuListProps) => {
    return (
        <section className="flex flex-col items-center justify-center py-10 px-4 w-full">
            <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-light-secondary">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center">
                {list.map((item, index) => (
                    <MenuItem item={item} index={index} visible={true} key={index} />
                ))}
            </div>
            <Spacer y={10} />
        </section>
    );
};

export default MenuList;
