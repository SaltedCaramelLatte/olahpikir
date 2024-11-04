import { useState } from 'react';
import { MenuItemType } from '../home/menuList/menuData';

interface EditMenuItemProps {
    item: MenuItemType;
    onSave: (id: string, updatedItem: Partial<MenuItemType>) => void;
    onCancel: () => void;
}

const EditMenuItem = ({ item, onSave, onCancel }: EditMenuItemProps) => {
    const [title, setTitle] = useState(item.title);
    const [img, setImg] = useState(item.img);
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description);
    const [status, setStatus] = useState(item.status);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (item.id) {
            onSave(item.id, { title, img, price, description, status });
        } else {
            console.error("No ID found for item");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Menu Item</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" required />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditMenuItem;
