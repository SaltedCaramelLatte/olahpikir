export interface MenuItemType {
    id?: string;  // ID item, opsional karena akan ditambahkan oleh Supabase
    title: string;
    img: string;
    price: string;
    description: string;
    status: string;
    category: string;  // kategori seperti "coffee", "non-coffee", atau "milk"
}
