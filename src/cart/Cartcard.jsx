import { React, useState, useEffect, useContext } from "react";
import "./cart.css";
import Products from "../components/shop/shopapi";
import { MainData } from "../Productcontext";
const Cartcard = () => {
  const { value, setValue } = useContext(MainData);
  const [cartdata, setCartdata] = useState(value);
  console.log(cartdata);

  const plusclicked = (curelem_id, index) => {
    setCartdata((cartdata) =>
      cartdata.map((item) =>
        curelem_id === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < 10 ? 1 : 0),
              subtotal:
                item.quantity < 10
                  ? item.quantity * item.price + item.price
                  : item.subtotal,
            }
          : item
      )
    );
    window.location.reload(true);
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
    window.location.reload(true);
  };

  const itemDelete = (id) => {
    const updateItem = cartdata.filter((elem) => elem.id !== id);
    console.log(updateItem);
    setCartdata(updateItem);

    window.location.reload(true);
    // localStorage.setItem("mytodolist", JSON.stringify(updateItem));
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(cartdata));
  }, [cartdata]);

  return (
    <div>
      {cartdata.map((curElem, index) => {
        var { id, title, price, image, quantity, subtotal } = curElem;
        return (
          <>
            <div className="cartcard" key={id}>
              <div className="carditems">
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "30vh",
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
              <div className="carditems">
                <button className="deletebtn" onClick={() => itemDelete(id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cartcard;
