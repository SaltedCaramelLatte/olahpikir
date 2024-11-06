import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Input, Button } from "@nextui-org/react";
import { MenuItemType } from '../home/menuList/menuData';

interface AddMenuItemProps {
    onAdd: (newItem: Partial<MenuItemType>) => Promise<void>;
    uploadImageAndGetUrl: (file: File) => Promise<string | null>;
    isSubmitting: boolean;
}

const AddMenuItem = ({ onAdd, uploadImageAndGetUrl, isSubmitting }: AddMenuItemProps) => {
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState(''); // Menyimpan URL gambar yang di-upload
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('available');
    const [category, setCategory] = useState('coffee');

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const url = await uploadImageAndGetUrl(file);
            if (url) {
                setImgUrl(url); // Update URL gambar setelah berhasil di-upload
            }
        }
    }, [uploadImageAndGetUrl]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] },
    });

    const handleRemoveImage = () => {
        setImgUrl('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !imgUrl || !price || !description) {
            alert("Please fill in all required fields.");
            return;
        }

        const formattedPrice = parseFloat(price.replace(/[^\d.]/g, '')); // Menghapus semua karakter kecuali angka dan titik desimal
        await onAdd({
            title,
            img: imgUrl,
            price: `${formattedPrice.toFixed(2)}`, // Menyimpan angka dengan dua desimal
            description,
            status,
            category
        });

        setTitle('');
        setImgUrl('');
        setPrice('');
        setDescription('');
        setStatus('available');
        setCategory('coffee');
    };

    return (
        <div className="p-6 bg-light-background dark:bg-dark-background rounded-md shadow-lg mb-6 max-w-lg mx-auto">
            <h2 className="text-lg font-semibold text-light-primary dark:text-dark-primary mb-4">Add New Menu Item</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter title"
                />
                
                <div {...getRootProps()} className="dropzone border p-4 text-center rounded-lg cursor-pointer">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here...</p>
                    ) : imgUrl ? (
                        <div className="relative">
                            <img src={imgUrl} alt="Preview" className="w-24 h-24 mx-auto" />
                            <button
                                onClick={handleRemoveImage}
                                type="button"
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                                aria-label="Remove image"
                            >
                                ×
                            </button>
                        </div>
                    ) : (
                        <p>Drag & drop an image here, or click to select one</p>
                    )}
                </div>

                <Input
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter price"
                />
                <Input
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter description"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="p-2 border rounded-md"
                >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded-md"
                >
                    <option value="coffee">Coffee</option>
                    <option value="non-coffee">Non-Coffee</option>
                    <option value="milk">Milk</option>
                    <option value="tea">Tea</option>
                </select>
                <Button type="submit" color="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Item'}
                </Button>
            </form>
        </div>
    );
};

export default AddMenuItem;
