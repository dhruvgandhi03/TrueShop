// import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useContext, useState } from "react";
import Navigation from "../pages/navigation";
import Shopproductcard from "./shopproductcard";
import Products from "./shopapi";
import { CategoryData } from "../../categoryContext";
import ColorToggleButton from "./category_comp";

const Shop = () => {
  // const { filter, setFilter } = useContext(CategoryData);

  // const [productData, setproductData] = useState(Products);
  const [productData, setproductData] = useState(Products);
  const [alignment, setAlignment] = React.useState("All");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const tshirtclicked = () => {
    const newcollection = Products.filter((elem) => {
      return elem.category === "Tshirt";
    });

    setproductData(newcollection);
  };
  const shirtclicked = () => {
    const newcollection = Products.filter((elem) => {
      return elem.category === "shirt";
    });

    setproductData(newcollection);
  };
  const bottomclicked = () => {
    const newcollection = Products.filter((elem) => {
      return elem.category === "bottoms";
    });

    setproductData(newcollection);
  };
  const sweatshirtclicked = () => {
    const newcollection = Products.filter((elem) => {
      return elem.category === "sweat shirt";
    });

    setproductData(newcollection);
  };

  return (
    <div className="shopbox">
      <Navigation />

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        style={{
          position: "relative",
          top: "12vh",
          left: "25vw",

          width: "60vw",
        }}
      >
        <ToggleButton
          value="All"
          onClick={() => setproductData(Products)}
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          All
        </ToggleButton>
        <ToggleButton
          value="tshirt"
          onClick={tshirtclicked}
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          T-Shirt
        </ToggleButton>
        <ToggleButton
          value="Shirt"
          onClick={shirtclicked}
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          Shirt
        </ToggleButton>
        <ToggleButton
          value="Bottoms"
          onClick={bottomclicked}
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          Bottoms
        </ToggleButton>
        <ToggleButton
          value="Sweat Shirt"
          onClick={sweatshirtclicked}
          style={{ paddingRight: "50px", paddingLeft: "50px" }}
        >
          Sweat Shirt
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="shopcontainer">
        <Shopproductcard productData={productData} />
      </div>
    </div>
  );
};

export default Shop;
