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
            className={`menu-item transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'
                }`}
            data-index={index}
        >
            <Card
                shadow="lg"
                isPressable
                radius="lg"
                className="rounded-xl bg-gray-50 dark:bg-gray-800 overflow-hidden max-w-[150px] max-h-[300px] mx-auto" // Menggunakan max-w dan max-h
                onPress={() => console.log(`${item.title} pressed`)}
            >

                <CardBody className="bg-gray-200 dark:bg-gray-700 w-full h-full p-0 overflow-hidden flex items-center justify-center">
                    {imageError ? (
                        <div className="bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center">
                            <span className="text-gray-500 dark:text-gray-300">Image Placeholder</span>
                        </div>
                    ) : (
                        <Image
                            alt={item.title}
                            src={item.img}
                            style={{
                                opacity: visible ? 1 : 0.3,

                                objectFit: 'cover', // Mengisi seluruh tinggi CardBody
                                width: 'auto', // Sesuaikan dengan lebar CardBody
                                height: '100%', // Mengisi tinggi CardBody
                                maxHeight: '300px' // Batasi tinggi maksimal jika diperlukan
                            }}
                            onError={() => setImageError(true)}
                            className="bg-gray-200 dark:bg-gray-700"
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
