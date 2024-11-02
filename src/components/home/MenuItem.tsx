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
            className={`menu-item transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
            data-index={index}
        >
            <Card
                shadow="lg"
                isPressable
                radius="lg"
                className="rounded-xl hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-800 overflow-hidden w-full max-w-[350px] lg:max-w-[400px] mx-auto"
                onPress={() => console.log(`${item.title} pressed`)}
            >
                <CardBody className="overflow-hidden p-4">
                    {imageError ? (
                        <div className="bg-gray-200 dark:bg-gray-700 w-full h-[220px] flex items-center justify-center rounded-b-lg">
                            <span className="text-gray-500 dark:text-gray-300">Image Placeholder</span>
                        </div>
                    ) : (
                        <Image
                            shadow="sm"
                            alt={item.title}
                            className="w-full h-[220px] object-cover"
                            src={item.img}
                            onError={() => setImageError(true)}
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
