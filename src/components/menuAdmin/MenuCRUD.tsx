import React, { useState, useCallback } from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddMenuItem from './AddMenuItem';
import EditMenuItem from './EditMenuItem';
import { MenuItemType } from '../home/menuList/menuData';
import { useMenuData } from '../../hooks/useMenuData';

const statusColorMap: { [key: string]: "success" | "danger" | "warning" | "default" | "primary" | "secondary" } = {
    available: "success",
    unavailable: "danger",
    limited: "warning",
};

const MenuCRUD = () => {
    const { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem, uploadImageAndGetUrl } = useMenuData();
    const [editingItem, setEditingItem] = useState<MenuItemType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fungsi untuk menangani sel tabel
    const renderCell = useCallback((item: MenuItemType, columnKey: string) => {
        const cellValue = item[columnKey as keyof MenuItemType];

        switch (columnKey) {
            case "title":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: item.img }}
                        name={cellValue as string}
                        description={item.description}
                    />
                );
            case "price":
                return <span className="font-semibold">Rp {cellValue}</span>;
            case "status":
                return (
                    <Chip
                        className="capitalize"
                        color={statusColorMap[item.status] || "success"}
                        size="sm"
                        variant="flat"
                    >
                        {cellValue || 'N/A'}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Edit">
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => setEditingItem(item)}
                            >
                                <FaEdit />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete">
                            <span
                                className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => deleteMenuItem(item.id!)}
                            >
                                <FaTrash />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [setEditingItem, deleteMenuItem]);

    const columns = [
        { name: "Title", uid: "title" },
        { name: "Description", uid: "description" },
        { name: "Price", uid: "price" },
        { name: "Status", uid: "status" },
        { name: "Actions", uid: "actions" },
    ];

    const handleAddItem = async (newItem: Partial<MenuItemType>) => {
        if (!newItem.title || !newItem.img || !newItem.price || !newItem.description) {
            alert("Please fill in all required fields.");
            return;
        }
        setIsSubmitting(true);
        await addMenuItem({
            ...newItem,
            status: newItem.status || 'available',
            category: newItem.category || 'coffee',
        } as MenuItemType);
        setIsSubmitting(false);
    };

    const handleEditItem = async (id: string, updatedItem: Partial<MenuItemType>) => {
        setIsSubmitting(true);
        await editMenuItem(id, updatedItem);
        setIsSubmitting(false);
        setEditingItem(null);
    };

    if (loading) return <div>Loading menu items...</div>;

    return (
        <div className='pt-20'>
            <h1 className='text-3xl font-bold text-center mb-8'>Menu Items</h1>
            {editingItem ? (
                <EditMenuItem
                    item={editingItem}
                    onSave={handleEditItem}
                    onCancel={() => setEditingItem(null)}
                    uploadImageAndGetUrl={uploadImageAndGetUrl}
                    isSubmitting={isSubmitting}
                />
            ) : (
                <div>
                    <AddMenuItem
                        onAdd={handleAddItem}
                        uploadImageAndGetUrl={uploadImageAndGetUrl}
                        isSubmitting={isSubmitting} // Kirim isSubmitting ke AddMenuItem
                    />
                    {/* Table Component */}
                    <Table aria-label="Menu items table with custom cells">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={menuItems}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => (
                                        <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
                                    )}
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
