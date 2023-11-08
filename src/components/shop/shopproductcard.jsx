import React, { useContext } from "react";
import { MainData } from "../../Productcontext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shopproductcard = ({ productData }) => {
  const { value, setValue } = useContext(MainData);
  // const [cartshow, setCartshow] = useState(false);

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
      toast.success("Item Added To The Cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Item Already Exist in The Cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      {productData.map((curElem) => {
        const { id, image, price, title, quantity, subtotal, category } =
          curElem;
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
