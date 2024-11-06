import { useState } from 'react';
import DataTable from '../customComponent/DataTable';
import AddMenuItem from './AddMenuItem';
import EditMenuItem from './EditMenuItem';
import { MenuItemType } from '../home/menuList/menuData';
import { useMenuData } from '../../hooks/useMenuData';
import { Button } from '@nextui-org/button';

const MenuCRUD = () => {
    const { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem, uploadImageAndGetUrl } = useMenuData();
    const [editingItem, setEditingItem] = useState<MenuItemType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Status penyimpanan

    const columns = [
        { Header: 'Title', accessor: 'title' },
        { Header: 'Description', accessor: 'description' },
        { Header: 'Price', accessor: 'price' },
        { Header: 'Category', accessor: 'category' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }: any) => (
                <div>
                    <Button
                        onClick={() => setEditingItem(row.original)}
                        className="text-sm bg-light-danger dark:bg-danger text-white dark:text-light mt-2 mb-2 ml-2 mr-2"
                        radius="full"
                        size="sm"
                    >
                        Edit
                    </Button>
                    
                    <Button
                        onClick={() => deleteMenuItem(row.original.id)}
                        className="text-sm bg-light-warning dark:bg-warning text-white dark:text-light mt-2 mb-2 ml-2 mr-2"
                        radius="full"
                        size="sm"
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const data = menuItems.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
    }));

    const handleAddItem = async (newItem: Partial<MenuItemType>) => {
        if (!newItem.title || !newItem.img || !newItem.price || !newItem.description) {
            alert("Please fill in all required fields.");
            return;
        }
        setIsSubmitting(true); // Mulai proses penyimpanan
        await addMenuItem({
            ...newItem,
            status: newItem.status || 'available',
            category: newItem.category || 'coffee',
        } as MenuItemType);
        setIsSubmitting(false); // Selesai penyimpanan
    };

    const handleEditItem = async (id: string, updatedItem: Partial<MenuItemType>) => {
        setIsSubmitting(true); // Mulai proses pengeditan
        await editMenuItem(id, updatedItem);
        setIsSubmitting(false); // Selesai pengeditan
        setEditingItem(null); // Tutup form edit setelah selesai
    };

    if (loading) return <div>Loading menu items...</div>;

    return (
        <div>
            <h1>Menu Management</h1>
            {editingItem ? (
                <EditMenuItem
                    item={editingItem}
                    onSave={handleEditItem}
                    onCancel={() => setEditingItem(null)}
                    uploadImageAndGetUrl={uploadImageAndGetUrl}
                    isSubmitting={isSubmitting} // Kirim isSubmitting ke EditMenuItem
                />
            ) : (
                <div>
                    <AddMenuItem
                        onAdd={handleAddItem}
                        uploadImageAndGetUrl={uploadImageAndGetUrl}
                        isSubmitting={isSubmitting} // Kirim isSubmitting ke AddMenuItem
                    />
                    <DataTable columns={columns} data={data} />
                </div>
            )}
        </div>
    );
};

export default MenuCRUD;
