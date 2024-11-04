// src/components/home/menuList/menuData.ts
import espressoImage from "@/images/coffee_p.jpg";
import latteImage from "@/images/coffee.jpg";
import cappuccinoImage from "@/images/coffee.jpg";
import milkImage from "@/images/coffee.jpg";
import orangeImage from "@/images/coffee.jpg";
import tangerineImage from "@/images/coffee.jpg";
import raspberryImage from "@/images/coffee.jpg";

export interface MenuItemType {
    id?: string;
    title: string;
    img: string;
    price: string;
    description: string;
    status: string;
}

export const coffeeList: MenuItemType[] = [
    { title: "Espresso", img: espressoImage, price: "$4.00", description: "Strong and bold", status: "" },
    { title: "Latte", img: latteImage, price: "$5.00", description: "Smooth and creamy", status: "" },
    { title: "Cappuccino", img: cappuccinoImage, price: "$5.50", description: "Rich and frothy", status: "" },
    { title: "Mocha", img: latteImage, price: "$5.75", description: "Chocolate-flavored", status: "" },
    { title: "Macchiato", img: espressoImage, price: "$4.50", description: "Bold with a touch of milk", status: "" }
];

export const nonCoffeeList: MenuItemType[] = [
    { title: "Orange", img: orangeImage, price: "$5.50", description: "Fresh and tangy", status: "" },
    { title: "Tangerine", img: tangerineImage, price: "$3.00", description: "Sweet and juicy", status: "" },
    { title: "Raspberry", img: raspberryImage, price: "$10.00", description: "Tart and sweet", status: "" },
    { title: "Apple Juice", img: orangeImage, price: "$4.00", description: "Fresh and crisp", status: "" },
    { title: "Lemonade", img: tangerineImage, price: "$3.50", description: "Sweet and tangy", status: "" }
];

export const milkList: MenuItemType[] = [
    { title: "Whole Milk", img: milkImage, price: "$2.50", description: "Rich and creamy", status: "" },
    { title: "Almond Milk", img: milkImage, price: "$3.00", description: "Nutty and smooth", status: "" },
    { title: "Soy Milk", img: milkImage, price: "$3.00", description: "Light and healthy", status: "" },
    { title: "Oat Milk", img: milkImage, price: "$3.50", description: "Smooth and subtle", status: "" },
    { title: "Coconut Milk", img: milkImage, price: "$3.75", description: "Tropical and light", status: "" }
];
