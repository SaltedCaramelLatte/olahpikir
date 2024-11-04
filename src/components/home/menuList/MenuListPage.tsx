// components/home/menuList/MenuListPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import MenuItem from "../MenuItem";
import { coffeeList, nonCoffeeList, milkList, MenuItemType } from "./menuData";

const MenuListPage = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    let itemsToDisplay: MenuItemType[] = [];
    if (category === "coffee") itemsToDisplay = coffeeList;
    else if (category === "non-coffee") itemsToDisplay = nonCoffeeList;
    else if (category === "milk") itemsToDisplay = milkList;

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 lg:px-20">
            {/* Tombol Kembali */}
            <button
                onClick={() => navigate(-1)}
                className="self-start mb-6 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition duration-200"
            >
                ← Kembali
            </button>

            <h3 className="text-4xl font-bold text-primary dark:text-gray-200 mb-8 capitalize">
                {category} Menu
            </h3>
            <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {itemsToDisplay.map((item, index) => (
                    <MenuItem item={item} index={index} visible={true} key={index} />
                ))}
            </div>
        </section>
    );
};

export default MenuListPage;
