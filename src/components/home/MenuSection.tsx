// components/home/MenuSection.tsx
import MenuList from "./menuList/MenuList";

// Impor gambar untuk setiap menu
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

// Daftar menu untuk setiap kategori
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
    return (
        <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background min-h-screen py-10">
            <h2 className="text-4xl font-bold text-primary mb-8 dark:text-gray-200">Our Menu</h2>
            
            {/* Section Coffee */}
            <MenuList title="Coffee" list={coffeeList} />

            {/* Section Non-Coffee */}
            <MenuList title="Non-Coffee" list={nonCoffeeList} />

            {/* Section Milk */}
            <MenuList title="Milk" list={milkList} />
        </div>
    );
};

export default MenuSection;
