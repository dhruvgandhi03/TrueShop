import React from "react";

const Shopproductcard = () => {
  return (
    <div className="products">
      <div class="card_prod">
        <div class="image_prod">
          <span class="text_prod">This is a chair.</span>
        </div>
        <span class="title_prod">Cool Chair</span>
        <span class="price_prod">$100</span>
        <span className="carticon">
          {" "}
          <i class="fa-solid fa-cart-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default Shopproductcard;
