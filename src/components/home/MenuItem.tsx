import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";

interface MenuItemProps {
    item: {
        title: string;
        img: string;
        price: string;
    };
    index: number;
    visible: boolean;
}

const MenuItem = ({ item, index, visible }: MenuItemProps) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div
        className={`menu-item transition-opacity duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
        }`}
        data-index={index}
        >
            <Card
                shadow="lg"
                isPressable
                radius="lg"
                className="rounded-xl hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-800 overflow-hidden w-[150px] h-[300px]" // Tetapkan ukuran Card di sini
                onPress={() => console.log(`${item.title} pressed`)}
            >
                <CardBody className="p-0 h-[180px]"> {/* Tetapkan tinggi tetap untuk CardBody */}
                    {imageError ? (
                        <div className="bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center rounded-b-lg">
                            <span className="text-gray-500 dark:text-gray-300">Image Placeholder</span>
                        </div>
                    ) : (
                        <Image
                        style={{ opacity: visible ? 1 : 0.3 }} // Atur opacity di elemen gambar

                            alt={item.title}
                            src={item.img}
                            onError={() => setImageError(true)}
                            className="w-full h-full object-cover" // Gambar memenuhi area CardBody
                            // style={{ objectFit: "cover" }} // Pastikan gambar menutupi seluruh CardBody
                        />
                    )}
                </CardBody>
                <CardFooter className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800">
                    <b className="text-sm text-primary dark:text-gray-400">{item.title}</b>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.price}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MenuItem;
