import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";

interface MenuItemProps {
    item: {
        title: string;
        img: string;
        description: string;
        price: string;
        status: string;
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
            <div className="max-w-xs w-full mx-auto">
                <Card
                    isFooterBlurred
                    className="w-full h-[300px] relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <CardHeader className="absolute z-10 top-3 left-3 flex-col items-start">
                        <p className={`text-tiny uppercase font-bold text-shadow-light dark:text-shadow-dark ${item.status === 'New' ? 'text-green-500' : 'text-white/60'
                            }`}>
                            {item.status}
                        </p>
                        <h4 className="text-2xl font-medium text-white text-shadow">
                            {item.title}
                        </h4>
                    </CardHeader>

                    {imageError ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                            <p className="text-white text-lg">Image Not Available</p>
                        </div>
                    ) : (
                        <Image
                            removeWrapper
                            alt={item.title}
                            className="z-0 w-full h-full object-cover scale-125 -translate-y-4"
                            src={item.img}
                            onError={() => setImageError(true)}
                            style={{
                                opacity: visible ? 1 : 0.3,
                            }}
                        />
                    )}

                    <CardFooter className="absolute bg-white/30 backdrop-blur-sm bottom-0 border-t border-zinc-100/50 z-10 w-full flex justify-between items-center p-4">
                        <div>
                            <p className="text-black text-sm text-shadow-black">
                                {item.description}
                            </p>
                        </div>
                        <Button
                            aria-label="Notify me button"
                            className="text-sm bg-light-primary dark:bg-dark-primary text-white dark:text-black"
                            radius="full"
                            size="sm">
                            {item.price}
                        </Button>
                    </CardFooter>

                </Card>
            </div>
        </div>
    );
};

export default MenuItem;
