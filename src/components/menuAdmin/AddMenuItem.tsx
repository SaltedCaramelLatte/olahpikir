import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Input, Button } from "@nextui-org/react";
import { MenuItemType } from '../home/menuList/menuData';

interface AddMenuItemProps {
    onAdd: (newItem: Partial<MenuItemType>) => Promise<void>;
    uploadImageAndGetUrl: (file: File) => Promise<string | null>;
}

const AddMenuItem = ({ onAdd, uploadImageAndGetUrl }: AddMenuItemProps) => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !imgUrl || !price || !description) {
            alert("Please fill in all required fields.");
            return;
        }

        const formattedPrice = parseFloat(price.replace('$', ''));
        await onAdd({
            title,
            img: imgUrl, // Menggunakan URL gambar dari Dropzone
            price: `$${formattedPrice.toFixed(2)}`,
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
                <div {...getRootProps()} className="dropzone border p-4 text-center">
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the files here...</p> : <p>Drag & drop an image here, or click to select one</p>}
                </div>
                {imgUrl && <img src={imgUrl} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
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
                <Input
                    label="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded-md"
                >
                    <option value="coffee">Coffee</option>
                    <option value="non-coffee">Non-Coffee</option>
                    <option value="milk">Milk</option>
                </select>
                <Button type="submit" color="primary" fullWidth>
                    Add Item
                </Button>
            </form>
        </div>
    );
};

export default AddMenuItem;
