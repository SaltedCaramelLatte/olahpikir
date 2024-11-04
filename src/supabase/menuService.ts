import { MenuItemType } from "./menuData";
import { supabase } from "./supabaseClient"; 


// Fungsi untuk memeriksa sesi pengguna
const checkUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
        throw new Error("User not authenticated. Please log in.");
    }
    return data.session.user;
};
// Fungsi untuk menambahkan item baru
export const addMenuItem = async (item: MenuItemType) => {
    try {
        await checkUserSession();

        const { data, error } = await supabase.from("menu_items").insert([item]);
        if (error) {
            console.error("Error adding menu item:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error:", error);
        return null;
    }
};

// Fungsi untuk mengambil semua item menu berdasarkan kategori
export const fetchMenuItems = async () => {
    try {
        await checkUserSession();

        const { data, error } = await supabase.from("menu_items").select("*");
        if (error) {
            console.error("Error fetching menu items:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error:", error);
        return null;
    }
};

// Fungsi untuk meng-update item menu berdasarkan ID
export const updateMenuItem = async (id: string, updatedFields: Partial<MenuItemType>) => {
    try {
        await checkUserSession();

        const { data, error } = await supabase
            .from("menu_items")
            .update(updatedFields)
            .eq("id", id);

        if (error) {
            console.error("Error updating menu item:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error:", error);
        return null;
    }
};

// Fungsi untuk menghapus item menu berdasarkan ID
export const deleteMenuItem = async (id: string) => {
    try {
        await checkUserSession();

        const { data, error } = await supabase
            .from("menu_items")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting menu item:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error:", error);
        return null;
    }
};
