import style from "../styles/card.module.css";
import { useState } from "react";
export default function Card({ id, imgUrl, title, price, editCartCount }) {
  const [count, setCount] = useState(0);
  function decrement() {
    if (count != 0) {
      setCount((count) => count - 1);
      editCartCount(id, count);
    }
  }

  function increment() {
    setCount((count) => count + 1);
    editCartCount(id, count);
  }

  function changeQuantity(event) {
    console.log(event);
    setCount(Number(event.target.value));
  }

  function addToCart() {}

  return (
    <article className={style.card}>
      <img src={imgUrl} alt="" />
      <div className={style.container}>
        <h3>{title}</h3>
        <p>${price}</p>
        <div className={style["quantity-container"]}>
          <button onClick={() => decrement()}>-</button>
          <input
            type="number"
            Value={count}
            onChange={(event) => changeQuantity(event)}
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
  );
}
