import React from "react";
import { useFetchMenu } from "../supabase/useFetchMenu"; // Path sudah disesuaikan berdasarkan struktur folder Anda

const UserMenuList = () => {
  const { coffeeList, nonCoffeeList, milkList, loading } = useFetchMenu();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Coffee</h2>
      {coffeeList.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} style={{ width: "100px" }} />
        </div>
      ))}

      <h2>Non-Coffee</h2>
      {nonCoffeeList.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} style={{ width: "100px" }} />
        </div>
      ))}

      <h2>Milk</h2>
      {milkList.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} style={{ width: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default UserMenuList;
