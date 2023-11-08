import React from "react";
import Navigation from "../pages/navigation";
import img1 from "../../../src/assets/overlays/img1.jpg";

const Specialdeals = () => {
  return (
    <div>
      <Navigation />
      {/* <div className="sdcontainer">
        <div className="heading">Welcome To SpecialDeals Section</div>
      </div> */}

      <div className="fullcontainer" style={{ marginTop: "10vh" }}>
        <img src={img1} alt="" width="100%" />
      </div>
    </div>
  );
};

export default Specialdeals;
