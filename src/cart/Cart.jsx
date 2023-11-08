import React from "react";
import "./cart.css";
import Cartcard from "./Cartcard";
import { useNavigate } from "react-router-dom";

// import Products from "../components/shop/shopapi";

const Cart = () => {
  const Nav = useNavigate();
  return (
    <div className="cartcontainer">
      <div className="cartheading">
        <div id="leftarr" className="titleitem" onClick={() => Nav(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>

        <div className="carttitle">
          <i
            class="fa-solid fa-cart-arrow-down"
            style={{ color: "#3f7fee", fontSize: "22px" }}
          ></i>
          My Cart{" "}
        </div>

        <div className="titleitem">Price</div>
        <div className="titleitem">Quantity</div>
        <div className="titleitem">SubTotal</div>
        <div className="titleitem"></div>
      </div>
      <Cartcard />
    </div>
  );
};

export default Cart;
