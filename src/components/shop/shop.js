import React, { useState } from "react";
import Navigation from "../pages/navigation";
import Shopproductcard from "./shopproductcard";

const Shop = () => {
  return (
    <div className="shopbox">
      <Navigation />

      <div className="shopcontainer">
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
        <Shopproductcard />
      </div>
    </div>
  );
};

export default Shop;
