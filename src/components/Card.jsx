import style from "../styles/card.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

//round price since too many zeroes are coming

export default function Card({
  id,
  imgUrl,
  title,
  price,
  editCartCount,
  type,
  quantityInCart,
}) {
  const [count, setCount] = useState(type == "cart" ? quantityInCart : 0);
  function decrement() {
    if (count != 0) {
      setCount((count) => count - 1);
    }
  }

  function increment() {
    setCount((count) => count + 1);
  }

  function incrementInCart() {
    setCount((count) => count + 1);
    editCartCount(id, count + 1);
  }

  function decrementInCart() {
    if (count > 0) {
      setCount((count) => count - 1);
      editCartCount(id, count - 1);
    }
  }

  function changeQuantity(event) {
    if (event.target.value != "") {
      setCount(() => Number(event.target.value));
      if (type == "cart") editCartCount(id, Number(event.target.value));
    }
    if (event.target.value == "") {
      setCount(() => 0);
    }
  }

  function removeFromCart() {
    editCartCount(id, 0);
  }

  function addToCart() {
    editCartCount(id, count);
  }

  return (
    <>
      {type == "shop" && (
        <article className={style.card}>
          <img src={imgUrl} alt="" />
          <div className={style.container}>
            <h3>{title}</h3>
            <p>${price}</p>
            <div className={style["quantity-container"]}>
              <button onClick={() => decrement()}>-</button>
              <input
                type="number"
                value={count != 0 ? count : ""}
                onChange={(event) => changeQuantity(event)}
                placeholder="0"
              />
              <button onClick={() => increment()}>+</button>
            </div>
            <button
              className={style["add-to-cart-btn"]}
              onClick={() => addToCart()}
            >
              Add to Cart
            </button>
          </div>
        </article>
      )}

      {type == "cart" && (
        <div className={style["cart-container"]}>
          <div className={style["wrapper"]}>
            <img src={imgUrl} alt="" />
            <h3>{title}</h3>
          </div>

          <div className={style["quantity-container"]}>
            <p>${price * quantityInCart}</p>

            <div className={style["edit-cart-wrapper"]}>
              <button onClick={() => decrementInCart()}>-</button>
              <input
                type="number"
                value={count != 0 ? count : ""}
                onChange={(event) => changeQuantity(event)}
                placeholder="0"
              />
              <button onClick={() => incrementInCart()}>+</button>
            </div>
          </div>

          <button
            className={style["remove-btn"]}
            onClick={() => removeFromCart()}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
}
