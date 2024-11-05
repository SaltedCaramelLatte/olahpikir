import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import { useState } from 'react';
import AddMenuItem from './AddMenuItem';
import EditMenuItem from './EditMenuItem';
import { MenuItemType } from '../home/menuList/menuData';
import { useMenuData } from '../../hooks/useMenuData';

const MenuCRUD = () => {
    const { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem } = useMenuData();
    const [editingItem, setEditingItem] = useState<MenuItemType | null>(null);

    const columns: { Header: string; accessor: keyof MenuItemType | 'actions'; Cell?: (props: any) => JSX.Element }[] = [
        { Header: 'Title', accessor: 'title' },
        { Header: 'Description', accessor: 'description' },
        { Header: 'Price', accessor: 'price' },
        { Header: 'Category', accessor: 'category' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }: any) => (
                <div>
                    <Button color="primary" size="sm" onClick={() => setEditingItem(row.original)}>
                        Edit
                    </Button>
                    <Button color="danger" size="sm" onClick={() => deleteMenuItem(row.original.id)} className="ml-2">
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const data: (MenuItemType & { actions?: string })[] = menuItems.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        img: item.img,
        status: item.status,
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
                    />
                    <Table aria-label="Menu Items Table">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.accessor}>{column.Header}</TableColumn>}
                        </TableHeader>
                        <TableBody items={data}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {columns.map((col) => (
                                        <TableCell key={col.accessor}>{item[col.accessor]}</TableCell>
                                    ))}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default MenuCRUD;
