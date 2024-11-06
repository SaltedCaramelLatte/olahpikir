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
                    uploadImageAndGetUrl={uploadImageAndGetUrl} // Pass uploadImageAndGetUrl ke EditMenuItem
                />
            ) : (
                <div>
                    <AddMenuItem
                        onAdd={async (newItem: Partial<MenuItemType>) => {
                            if (newItem.title && newItem.img && newItem.price && newItem.description) {
                                await addMenuItem({
                                    ...newItem,
                                    status: newItem.status || 'available',
                                    category: newItem.category || 'coffee',
                                } as MenuItemType);
                            } else {
                                alert("Please fill in all required fields.");
                            }
                        }}
                        uploadImageAndGetUrl={uploadImageAndGetUrl} // Pass uploadImageAndGetUrl ke AddMenuItem
                    />
                    <DataTable columns={columns} data={data} />
                </div>
            )}
        </div>
    );
};

export default MenuCRUD;
