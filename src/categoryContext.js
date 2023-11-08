import { createContext, useState } from "react";
import Products from "./components/shop/shopapi";
export const CategoryData = createContext(null);

function CategoryContext({ children }) {
  const [filter, setFilter] = useState(Products);

  return (
    <CategoryData.Provider value={{ filter, setFilter }}>
      {children}
    </CategoryData.Provider>
  );
}

export default CategoryContext;
