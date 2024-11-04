import { useState } from 'react';
import MenuItemList from './MenuItemList';
import AddMenuItem from './AddMenuItem';
import EditMenuItem from './EditMenuItem';
import { MenuItemType } from '../home/menuList/menuData';
import { useMenuData } from '../../hooks/useMenuData';

const MenuCRUD = () => {
    const { menuItems, addMenuItem, editMenuItem, deleteMenuItem } = useMenuData();
    const [editingItem, setEditingItem] = useState<MenuItemType | null>(null);

    return (
        <div>
            <h1>Menu Management</h1>
            {editingItem ? (
                <EditMenuItem item={editingItem} onSave={(id, updatedItem) => {
                    editMenuItem(id, updatedItem);
                    setEditingItem(null);
                }} onCancel={() => setEditingItem(null)} />
            ) : (
                <AddMenuItem onAdd={addMenuItem} />
            )}
            <MenuItemList items={menuItems} onEdit={setEditingItem} onDelete={deleteMenuItem} />
        </div>
    );
};

export default MenuCRUD;
