import React, { useEffect, useState } from "react";
import "./cart.css";
import Cartcard from "./Cartcard";
import { NavLink } from "react-router-dom";

import Products from "../components/shop/shopapi";

const Cart = () => {
  return (
    <div className="cartcontainer">
      <div className="cartheading">
        <div className="carttitle">
          <NavLink to="/shop">
            <i
              class="fa-solid fa-cart-arrow-down"
              style={{ color: "#3f7fee", fontSize: "22px" }}
            ></i>
          </NavLink>
          My Cart{" "}
        </div>
        <div className="titleitem">price</div>
        <div className="titleitem">quantity</div>
        <div className="titleitem">subtotal</div>
        <div className="titleitem"></div>
      </div>
      <Cartcard />
    </div>
  );
};

export default Cart;
