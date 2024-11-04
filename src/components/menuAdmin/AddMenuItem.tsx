import { useState } from 'react';
import { MenuItemType } from '../home/menuList/menuData';

interface AddMenuItemProps {
    onAdd: (newItem: MenuItemType) => void;
}

const AddMenuItem = ({ onAdd }: AddMenuItemProps) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({ title, img, price, description, status });
        setTitle('');
        setImg('');
        setPrice('');
        setDescription('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Menu Item</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" required />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddMenuItem;
