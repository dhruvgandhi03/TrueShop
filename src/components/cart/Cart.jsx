import React, { useEffect, useState } from "react";
import "./cart.css";
import Cartcard from "./Cartcard";

import Products from "../shop/shopapi";

const Cart = () => {
  return (
    <div className="cartcontainer">
      <div className="cartheading">
        <div className="carttitle">
          <i
            class="fa-solid fa-cart-arrow-down"
            style={{ color: "#3f7fee", fontSize: "22px" }}
          ></i>{" "}
          My Cart{" "}
        </div>
        <div className="titleitem">price</div>
        <div className="titleitem">quantity</div>
        <div className="titleitem">subtotal</div>
      </div>
      <Cartcard />
    </div>
  );
};

export default Cart;
