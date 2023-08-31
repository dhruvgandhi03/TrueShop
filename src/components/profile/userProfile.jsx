import React from "react";
import Navigation from "../pages/navigation";

const UserProfile = () => {
  return (
    <>
      {/* <div className="profileheading">THIS IS PROFILE</div> */}
      <div className="profilecontainer">
        <div className="profilepic">
          <p>Profile</p>
          <div className="userimage"></div>
          <div>
            <div className="profilemenu">menu1</div>
            <div className="profilemenu">menu2</div>
          </div>
        </div>
        <div className="profileinfo">
          <div className="fields">
            Name : <br />
            <input readOnly value="name field" />
          </div>
          <div className="fields">
            Name : <br />
            <input readOnly value="name field" />
          </div>
          <div className="fields">
            Name : <br />
            <input readOnly value="name field" />
          </div>
          <div className="fields">
            Name : <br />
            <input readOnly value="name field" />
          </div>
        </div>
        <div className="profileextra"></div>
      </div>
    </>
  );
};

export default UserProfile;
