import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";
import fallbackImage from "@/images/coffee.jpg"; // Import gambar fallback

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
        <div className="menu-item" data-index={index}>
            <div
                className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
                data-index={index}
            >
                <div className="max-w-xs w-full mx-auto">
                    <Card
                        isFooterBlurred
                        className="w-full h-[300px] relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <CardHeader className="absolute z-10 top-3 left-3 flex-col items-start">
                            <p
                                className={`text-tiny uppercase font-bold ${item.status === 'New' ? 'text-green-500 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]' : 'text-white/60 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]'}`}
                            >
                                {item.status}
                            </p>
                            <h4
                                className="text-2xl font-medium text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]"
                            >
                                {item.title}
                            </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt={item.title}
                            className="z-0 w-full h-full object-cover scale-125 -translate-y-4"
                            src={imageError || !item.img ? fallbackImage : item.img} // Gunakan fallback jika img tidak ada atau error
                            onError={() => setImageError(true)}
                            style={{
                                opacity: visible ? 1 : 0.3,
                            }}
                        />

                        <CardFooter className="absolute bg-white/30 backdrop-blur-sm bottom-0 border-t border-zinc-100/50 z-10 w-full flex justify-between items-center p-4">
                            <div>
                                <p className="text-black text-sm">
                                    {item.description}
                                </p>
                            </div>
                            <Button
                                aria-label="Notify me button"
                                className="text-sm bg-light-primary dark:bg-dark-primary text-white dark:text-black"
                                radius="full"
                                size="sm">
                                Rp {item.price} K
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
