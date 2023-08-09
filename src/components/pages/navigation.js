import React from "react";
import { useNavigate } from "react-router-dom";


function Navigation() {

  const Nav = useNavigate();
  const homeclicked = () =>{
    Nav('/home')
  }
  const shopclicked = () =>{
    Nav('/shop')
  }







  return (
    <div className="navcontainer">
      <div className="logo">
        <div class="button">
          <div class="box">T</div>
          <div class="box">R</div>
          <div class="box">U</div>
          <div class="box">E</div>
        </div>
      </div>

      <div className="menus">
        <div className="menuitem" onClick={homeclicked}>Home</div>
        <div className="menuitem" onClick={shopclicked}>Shop</div>
        <div className="menuitem">Special Deals</div>
        <div className="menuitem">Contact</div>
        <div className="menuitem">About</div>
      </div>

      <div className="icons">
        <div className="search">
          <div class="form">
            <input
              class="input"
              placeholder="Search"
              required=""
              type="text"
            />
            <span class="input-border"></span>
          </div>
        </div>
        <i id="cart" class="fa-solid fa-cart-shopping"></i>
        <i id="cart" class="fa-solid fa-heart"></i>
        <i id="cart" class="fa-solid fa-user"></i>
      </div>
    </div>
  );
}

export default Navigation;
