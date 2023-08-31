import React, { useEffect, useState } from "react";
import Navigation from "../pages/navigation";
import Shopproductcard from "./shopproductcard";
import Products from "./shopapi";

const Shop = () => {
  const [productData, setproductData] = useState(Products);

  return (
    <div className="shopbox">
      <Navigation />

      <div className="shopcontainer">
        <Shopproductcard productData={productData} />
      </div>
    </div>
  );
};

export default Shop;
