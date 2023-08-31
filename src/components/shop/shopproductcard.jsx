import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainData } from "../../Productcontext";

const Shopproductcard = ({ productData }) => {
  const { value, setValue } = useContext(MainData);

  const cartclicked = (id, title, price, image, quantity, subtotal) => {
    let existing = value.find((elem) => elem.id === id);

    console.log(existing);

    if (!existing) {
      const newData = {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity,
        subtotal: subtotal,
      };
      setValue([...value, newData]);
      window.alert("item added");
    } else {
      window.alert("item already exist");
    }
  };

  return (
    <>
      {productData.map((curElem) => {
        const { id, image, price, title, quantity, subtotal } = curElem;
        return (
          <>
            <div className="products">
              <div class="card_prod" key={id}>
                <div
                  class="image_prod"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "28vh",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "white",
                  }}
                ></div>
                <span class="title_prod">{title}</span>
                <span class="price_prod">{price}$</span>
                <span
                  className="carticon"
                  onClick={() =>
                    cartclicked(id, title, price, image, quantity, subtotal)
                  }
                >
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
