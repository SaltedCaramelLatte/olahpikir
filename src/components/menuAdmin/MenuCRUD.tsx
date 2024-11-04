import { useState } from 'react';
import MenuItemList from './MenuItemList';
import AddMenuItem from './AddMenuItem';
import EditMenuItem from './EditMenuItem';
import { MenuItemType } from '../home/menuList/menuData';
import { useMenuData } from '../../hooks/useMenuData';

const MenuCRUD = () => {
    const { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem } = useMenuData();
    const [editingItem, setEditingItem] = useState<MenuItemType | null>(null);

    if (loading) return <div>Loading menu items...</div>;

    return (
        <div>
            <h1>Menu Management</h1>
            {editingItem ? (
                <EditMenuItem
                    item={editingItem}
                    onSave={(id, updatedItem) => {
                        editMenuItem(id, updatedItem);
                        setEditingItem(null);
                    }}
                    onCancel={() => setEditingItem(null)}
                />
            ) : (
                <div>
                    <AddMenuItem 
                        onAdd={async (newItem: Partial<MenuItemType>) => {
                            // Memastikan semua field yang diperlukan sudah diisi
                            if (newItem.title && newItem.img && newItem.price && newItem.description) {
                                await addMenuItem({
                                    ...newItem,
                                    status: newItem.status || 'available', // Default status jika tidak ada
                                    category: newItem.category || 'coffee'  // Default kategori jika tidak ada
                                } as MenuItemType);
                            } else {
                                alert("Please fill in all required fields.");
                            }
                        }}
                    />
                    <MenuItemList items={menuItems} onEdit={setEditingItem} onDelete={deleteMenuItem} />
                </div>
            )}
        </div>
    );
};

export default MenuCRUD;
