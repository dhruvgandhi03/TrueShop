import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MainData } from "../../Productcontext";

const Navigation = () => {
  const [show, setshow] = useState(true);
  const [category, setcategory] = useState(false);

  const { value } = useContext(MainData);
  console.log(value.length);

  const Nav = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const Sidebarclicked = () => {
    if (!show) {
      setshow(true);
      document.getElementById("setbar").style.left = "-300px";
      document.getElementById("threebar").style.color = "#0d1117";
    } else {
      setshow(false);
      document.getElementById("setbar").style.left = "0px";
      document.getElementById("threebar").style.color = "#2f81f7";
    }
  };

  async function Wishlistclicked() {
    try {
      const res = await fetch(
        "https://dhruvgandhi03.github.io/TrueShopAPI/new_Api.json"
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const categoryclicked = () => {
    if (!category) {
      setcategory(true);
      document.getElementById("categories").style.display = "block";
    } else {
      setcategory(false);
      document.getElementById("categories").style.display = "none";
    }
  };

  return (
    <div>
      <div id="setbar" className="sidebar">
        <div className="title">Title</div>
        <div class="input_shop">
          <button class="value_shop" onClick={categoryclicked}>
            Categories
          </button>
          <div id="categories">
            <p>All</p>
            <p>T shirts</p>
            <p>Shirts</p>
            <p>Bottoms</p>
            <p>Sweat shirt</p>
          </div>
          <button class="value_shop" onClick={() => Nav("/shop")}>
            Shop
          </button>
          <button class="value_shop" onClick={() => Nav("/SpecialDeals")}>
            Speacial Deals
          </button>
          <button class="value_shop" onClick={() => Nav("/Cart")}>
            My Cart
          </button>
          <button class="value_shop" onClick={() => Nav("/UserProfile")}>
            My Profile
          </button>
        </div>
      </div>
      <div className="navcontainer">
        <div id="threebar" onClick={Sidebarclicked}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <div className="logo" onClick={() => Nav("/home")}>
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
            Shop
          </NavLink>
          <NavLink
            to="/SpecialDeals"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            SpecialDeals
          </NavLink>
          <NavLink
            to="/contact"
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
            {/* <i id="cart" class="fa-solid fa-cart-shopping"></i> */}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={value.length} color="secondary">
                <ShoppingCartIcon
                  style={{ color: "black", fontSize: "25px" }}
                />
              </StyledBadge>
            </IconButton>
          </NavLink>
          <i id="cart" class="fa-solid fa-heart" onClick={Wishlistclicked}></i>
          <NavLink to="/userProfile">
            <i id="cart" class="fa-solid fa-user"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
