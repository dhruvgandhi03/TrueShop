import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Nav = useNavigate();
  return (
    <div>
      <div id="setbar" className="sidebar">
        <div className="title">Title</div>
        <div class="input_shop">
          <button class="value_shop" onClick={() => Nav("/home")}>
            Home
          </button>
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
    </div>
  );
};

export default Sidebar;
