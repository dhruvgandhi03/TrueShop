import React from "react";
import { NavLink } from "react-router-dom";
// import Navigation from "../pages/navigation";

const UserProfile = () => {
  return (
    <>
      {/* <div className="profileheading">THIS IS PROFILE</div> */}
      <div className="profilecontainer">
        <div className="profilepic">
          <p>Profile</p>
          <div className="userimage"></div>
          <div>
            <div className="profilemenu">
              <NavLink
                to="/Cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                My Cart
              </NavLink>
            </div>
            <div className="profilemenu">
              <NavLink
                to="/Cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                My Orders
              </NavLink>
            </div>
          </div>
        </div>
        <div className="profileinfo">
          <div className="fields">
            Name : <br />
            <input readOnly value="" />
          </div>
          <div className="fields">
            Mobile No : <br />
            <input readOnly value="" />
          </div>
          <div className="fields">
            Email address : <br />
            <input readOnly value="" />
          </div>
          <div className="fields">
            Country : <br />
            <input readOnly value="" />
          </div>
        </div>
        <div className="profileextra">
          <div>
            <p>Settings</p>
          </div>
          <div> </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
