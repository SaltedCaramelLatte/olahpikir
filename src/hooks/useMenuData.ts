import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MenuItemType } from '../components/home/menuList/menuData';

export const useMenuData = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchMenuItems = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('menu_items').select('*'); // Ganti 'menu_items' dengan nama tabel Anda
        if (error) console.error("Error fetching menu items:", error);
        else setMenuItems(data || []);
        setLoading(false);
    };

    const addMenuItem = async (newItem: MenuItemType) => {
        const { data, error } = await supabase.from('menu_items').insert([newItem]);
        if (error) console.error("Error adding menu item:", error);
        else if (data) setMenuItems((prev) => [...prev, data[0]]);
    };


    const editMenuItem = async (id: string, updatedItem: Partial<MenuItemType>) => {
        const { data, error } = await supabase.from('menu_items').update(updatedItem).eq('id', id);
        if (error) console.error("Error editing menu item:", error);
        else if (data) setMenuItems((prev) => prev.map((item) => (item.id === id ? data[0] : item)));
    };

    const deleteMenuItem = async (id: string) => {
        const { error } = await supabase.from('menu_items').delete().eq('id', id);
        if (error) console.error("Error deleting menu item:", error);
        else setMenuItems((prev) => prev.filter((item) => item.id !== id));
    };

    const uploadImageAndGetUrl = async (file: File) => {
        const { data, error } = await supabase.storage
            .from('menu_images')
            .upload(`public/${file.name}`, file);

        if (error) {
            console.error('Error uploading image:', error);
            return null;
        }

        // Dapatkan URL publik dari gambar yang diunggah
        const { publicUrl } = supabase.storage
            .from('menu_images')
            .getPublicUrl(`public/${file.name}`).data;

        return publicUrl;
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    return { menuItems, loading, addMenuItem, editMenuItem, deleteMenuItem };
};
