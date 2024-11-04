// src/hooks/useMenuData.ts
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MenuItemType } from '../components/home/menuList/menuData';

export const useMenuData = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);

    // Fungsi untuk mengambil data menu
    const fetchMenuItems = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('menu').select('*');
        if (error) console.error("Error fetching menu items:", error);
        else setMenuItems(data || []);
        setLoading(false);
    };

    // Fungsi untuk menambah item baru
    const addMenuItem = async (newItem: MenuItemType) => {
        const { data, error } = await supabase.from('menu').insert([newItem]);
        if (error) console.error("Error adding menu item:", error);
        else if (data) setMenuItems((prev) => [...prev, data[0]]);
    };

    // Fungsi untuk mengedit item
    const editMenuItem = async (id: string, updatedItem: Partial<MenuItemType>) => {
        const { data, error } = await supabase.from('menu').update(updatedItem).eq('id', id);
        if (error) console.error("Error editing menu item:", error);
        else if (data) setMenuItems((prev) => prev.map((item) => (item.id === id ? data[0] : item)));
    };

    // Fungsi untuk menghapus item
    const deleteMenuItem = async (id: string) => {
        const { error } = await supabase.from('menu').delete().eq('id', id);
        if (error) console.error("Error deleting menu item:", error);
        else setMenuItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Panggil `fetchMenuItems` saat komponen pertama kali dimuat
    useEffect(() => {
        fetchMenuItems();
    }, []);

    return { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem };
};
