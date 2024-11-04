// src/components/menuAdmin/AddMenuItem.tsx
import { useState } from 'react';
import { MenuItemType } from '../home/menuList/menuData';

// Definisi interface untuk props AddMenuItem
interface AddMenuItemProps {
    onAdd: (newItem: Partial<MenuItemType>) => Promise<void>; // Menggunakan Partial untuk fleksibilitas
}

const AddMenuItem = ({ onAdd }: AddMenuItemProps) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('available'); // Set default status
    const [category, setCategory] = useState('coffee'); // Set default category

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi input
        if (!title || !img || !price || !description) {
            alert("Please fill in all required fields.");
            return;
        }

        // Format harga
        const formattedPrice = parseFloat(price.replace('$', ''));
        if (isNaN(formattedPrice)) {
            alert("Please enter a valid price.");
            return;
        }

        // Panggil onAdd dengan semua data yang diperlukan
        await onAdd({ 
            title, 
            img, 
            price: `$${formattedPrice.toFixed(2)}`, 
            description, 
            status, 
            category 
        });

        // Reset form
        setTitle('');
        setImg('');
        setPrice('');
        setDescription('');
        setStatus('available');
        setCategory('coffee');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Menu Item</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" required />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            
            {/* Dropdown untuk kategori */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="coffee">Coffee</option>
                <option value="non-coffee">Non-Coffee</option>
                <option value="milk">Milk</option>
            </select>

            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddMenuItem;
