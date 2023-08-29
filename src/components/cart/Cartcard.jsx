import { React, useState, useEffect } from "react";
import "./cart.css";
import Products from "../shop/shopapi";

const Cartcard = () => {
  const [cartdata, setCartdata] = useState(Products);

  const plusclicked = (curelem_id, index) => {
    setCartdata((cartdata) =>
      cartdata.map((item) =>
        curelem_id === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < 10 ? 1 : 0),
              subtotal: item.price * item.quantity + item.price,
            }
          : item
      )
    );
  };
  const minusclicked = (curelem_id, index) => {
    setCartdata((cartdata) =>
      cartdata.map((item) =>
        curelem_id === item.id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
              subtotal:
                item.quantity > 1
                  ? item.quantity * item.price - item.price
                  : item.subtotal,
            }
          : item
      )
    );
  };

  return (
    <div>
      {cartdata.map((curElem, index) => {
        var { id, image, title, price, quantity, subtotal } = curElem;
        return (
          <>
            <div className="cartcard" key={id}>
              <div className="carditems">
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "top",
                    backgroundSize: "40vh",
                    height: "23vh",
                    width: "13vw",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <div className="carditems">{title}</div>
              <div className="carditems">{price}$</div>
              <div className="carditems">
                <button className="btn">
                  <i
                    class="fa-solid fa-square-minus"
                    style={{ color: "#e91c1c" }}
                    onClick={() => minusclicked(curElem.id, index)}
                  ></i>
                </button>
                {quantity}
                <button className="btn">
                  <i
                    class="fa-solid fa-square-plus"
                    style={{ color: "#4ce15e" }}
                    onClick={() => plusclicked(curElem.id, index)}
                  ></i>
                </button>
              </div>
              <div className="carditems">{subtotal}$</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cartcard;
