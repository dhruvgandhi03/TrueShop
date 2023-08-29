import React from "react";

const Shopproductcard = ({ productData }) => {
  const cartclicked = () => {
    window.alert("Item Added to Cart");
  };
  return (
    <>
      {productData.map((curElem) => {
        const { id, image, price, title } = curElem;
        return (
          <>
            <div className="products">
              <div class="card_prod" key={id}>
                <div class="image_prod">
                  <img src={image} alt="loading" height="250vh" width="227vw" />
                </div>
                <span class="title_prod">{title}</span>
                <span class="price_prod">{price}$</span>
                <span className="carticon" onClick={cartclicked}>
                  <i class="fa-solid fa-cart-plus"></i>
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Shopproductcard;
