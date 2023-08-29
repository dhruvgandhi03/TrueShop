import React, { useEffect, useState } from "react";
import Navigation from "../pages/navigation";
import Shopproductcard from "./shopproductcard";
import Products from "./shopapi";

const Shop = () => {
  const [productData, setproductData] = useState(Products);

  // useEffect(() => {
  //   fakedata();
  // }, []);

  // const fakedata = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products?limit=6");

  //   const jsondata = await res.json();

  //   setproductData(jsondata);
  // };

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
