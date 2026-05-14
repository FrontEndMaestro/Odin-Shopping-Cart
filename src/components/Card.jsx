import style from "../styles/card.module.css";
import { useState } from "react";
export default function Card({ imgUrl, title, price }) {
  const [count, setCount] = useState(0);
  function decrement() {
    if (count != 0) setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function changeQuantity(event) {
    count = event.target.value;
  }
  return (
    <article className={`${style.card}`}>
      <img src={imgUrl} alt="" />
      <div className={`${style.container}`}>
        <h3>{title}</h3>
        <p>${price}</p>
        <div className={`${style.quantity_container}`}>
          <button onClick={() => decrement()}>-</button>
          <input
            type="number"
            Value={count}
            onChange={() => changeQuantity()}
          />
          <button onClick={() => increment()}>+</button>
        </div>
      </div>
    </article>
  );
}
