import { useEffect, useState } from "react";
import { fetchMenuItems } from "./menuService";
import { MenuItemType } from "./menuData";

export const useFetchMenu = () => {
  const [coffeeList, setCoffeeList] = useState<MenuItemType[]>([]);
  const [nonCoffeeList, setNonCoffeeList] = useState<MenuItemType[]>([]);
  const [milkList, setMilkList] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMenuItems = async () => {
      setLoading(true);  // Mulai loading
      const data = await fetchMenuItems();
      if (data) {
        // Memisahkan data berdasarkan kategori
        setCoffeeList(data.filter((item: MenuItemType) => item.category === "coffee"));
        setNonCoffeeList(data.filter((item: MenuItemType) => item.category === "non-coffee"));
        setMilkList(data.filter((item: MenuItemType) => item.category === "milk"));
      }
      setLoading(false);  // Selesai loading
    };
    getMenuItems();
  }, []);

  return { coffeeList, nonCoffeeList, milkList, loading };
};
