import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import { useState } from "react";

const Navigation = () => {
  const [show, setshow] = useState(false);

  const Nav = useNavigate();

  const Sidebarclicked = () => {
    if (!show) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  return (
    <div>
      {show && <Sidebar />}
      <div className="navcontainer">
        <div id="threebar" onClick={Sidebarclicked}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <div className="logo">
          <div class="button">
            <div class="box">T</div>
            <div class="box">R</div>
            <div class="box">U</div>
            <div class="box">E</div>
          </div>
        </div>

        <div className="menus">
          {/* <div className="menuitem" onClick={homeclicked}>
            Home
          </div> */}
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            shop
          </NavLink>
          <NavLink
            to="/SpecialDeals"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            SpecialDeals
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About
          </NavLink>
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
          <NavLink to="/Cart">
            <i id="cart" class="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <i id="cart" class="fa-solid fa-heart"></i>
          <NavLink to="/userProfile">
            <i id="cart" class="fa-solid fa-user"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
