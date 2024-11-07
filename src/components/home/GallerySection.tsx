import { Card, CardHeader, Image } from "@nextui-org/react";

// Data untuk setiap card, menyimpan title dan description
const galleryData = [
  {
    title: "What to watch",
    imageUrl: "https://via.placeholder.com/300", // Placeholder sementara
  },
  {
    title: "Plant a tree",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Supercharged",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "New",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Your day your way",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const GallerySection = () => {
  return (
    <section className="py-10 bg-light-background dark:bg-dark-background text-center pt-24">
      <h2 className="text-4xl font-bold text-light mb-8 dark:text-gray-200 font-bossa">Gallery</h2>
      <div className="max-w-[900px] mx-auto gap-4 grid grid-cols-12 px-4 sm:px-8">
        
        {galleryData.map((item, index) => (
          <Card
            key={index}
            className={`col-span-12 ${index < 3 ? 'sm:col-span-4' : index === 3 ? 'sm:col-span-5' : 'sm:col-span-7'} h-[300px] relative bg-gray-300 dark:bg-gray-700`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-light uppercase font-bold">{item.title}</p>
            </CardHeader>
            <div className="w-full h-full object-cover bg-gray-300 dark:bg-gray-700"></div>
          </Card>
        ))}
        
      </div>
    </section>
  );
};

export default GallerySection;
