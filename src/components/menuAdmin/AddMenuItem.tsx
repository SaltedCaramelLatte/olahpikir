import { useState } from 'react';
import { MenuItemType } from '../home/menuList/menuData';
import { Input, Button } from "@nextui-org/react";

interface AddMenuItemProps {
    onAdd: (newItem: Partial<MenuItemType>) => Promise<void>;
}

const AddMenuItem = ({ onAdd }: AddMenuItemProps) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('available');
    const [category, setCategory] = useState('coffee');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !img || !price || !description) {
            alert("Please fill in all required fields.");
            return;
        }

        const formattedPrice = parseFloat(price.replace('$', ''));
        if (isNaN(formattedPrice)) {
            alert("Please enter a valid price.");
            return;
        }

        await onAdd({ 
            title, 
            img, 
            price: `$${formattedPrice.toFixed(2)}`, 
            description, 
            status, 
            category 
        });

        setTitle('');
        setImg('');
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
                    className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                />
                <Input
                    label="Image URL"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter image URL"
                    className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                />
                <Input
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter price"
                    className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                />
                <Input
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    required
                    placeholder="Enter description"
                    className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                />
                <Input
                    label="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border border-light-border dark:border-dark-border rounded-md bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
                >
                    <option value="coffee">Coffee</option>
                    <option value="non-coffee">Non-Coffee</option>
                    <option value="milk">Milk</option>
                </select>
                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    className="mt-4 bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                    Add Item
                </Button>
            </form>
        </div>
    );
};

export default AddMenuItem;
