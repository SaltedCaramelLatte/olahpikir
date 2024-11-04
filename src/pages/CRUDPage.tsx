import React, { useState, useEffect } from "react";
import { fetchMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from "../supabase/menuService";
import { MenuItemType } from "../supabase/menuData";

const CRUDPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [newItem, setNewItem] = useState<MenuItemType>({
    title: "",
    img: "",
    price: "",
    description: "",
    status: "",
    category: "coffee",
  });

  // Ambil data saat halaman dimuat
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMenuItems();
      if (data) {
        setMenuItems(data);
      }
    };
    getData();
  }, []);

  // Tambah item baru
  const handleAddItem = async () => {
    const addedItem = await addMenuItem(newItem);
    if (addedItem) {
      setMenuItems([...menuItems, addedItem[0]]); // Perbarui daftar item setelah menambah
      setNewItem({ title: "", img: "", price: "", description: "", status: "", category: "coffee" });
    }
  };

  // Update item
  const handleUpdateItem = async (id: string) => {
    const updatedFields = { price: "$4.00" }; // Contoh update harga
    const updatedItem = await updateMenuItem(id, updatedFields);
    if (updatedItem) {
      setMenuItems(menuItems.map(item => (item.id === id ? updatedItem[0] : item)));
    }
  };

  // Hapus item
  const handleDeleteItem = async (id: string) => {
    const deleted = await deleteMenuItem(id);
    if (deleted) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <h1>Manage Menu Items</h1>

      <div>
        <h2>Add New Item</h2>
        <input
          type="text"
          placeholder="Title"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.img}
          onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <select
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        >
          <option value="coffee">Coffee</option>
          <option value="non-coffee">Non-Coffee</option>
          <option value="milk">Milk</option>
        </select>
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <h2>Current Menu Items</h2>
      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <button onClick={() => handleUpdateItem(item.id)}>Update Price</button>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CRUDPage;
