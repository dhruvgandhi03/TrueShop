import React from "react";
import Navigation from "../pages/navigation";

const UserProfile = () => {
  return (
    <div className="profilecontainer">
      <div className="userdetail">
        <div
          className="userImage"
          style={{
            backgroundImage: `url("https://i.pinimg.com/236x/e4/8a/7f/e48a7faff4badb7d8dce46393eb263b4.jpg")`,
          }}
        ></div>
        <div className="username">this is name</div>
      </div>
      <div className="userdescription">
        <p className="userdata">email</p>
        <p className="userdata">number</p>
        <p className="userdata">adreess</p>
        <p className="userdata">postelcode</p>
      </div>
    </div>
  );
};

export default UserProfile;
