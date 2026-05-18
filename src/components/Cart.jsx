import style from "../styles/cart.module.css";
import Card from "./Card.jsx";
import { useOutletContext } from "react-router";
export default function Cart() {
  const { data, editCartCount, totalCount, totalPrice } = useOutletContext();
  return (
    <>
      <h1 className={style.heading}>Your Bag</h1>
      {totalCount != 0 ? (
        <div className={`${style.container}`}>
          <div className={style["card-container"]}>
            {data.map((element) =>
              element.cartCount != 0 ? (
                <Card
                  key={element.id}
                  id={element.id}
                  imgUrl={element.image}
                  title={element.title}
                  price={element.price}
                  editCartCount={editCartCount}
                  type="cart"
                  quantityInCart={element.cartCount}
                ></Card>
              ) : null,
            )}
          </div>
          <div className={style["order-summary"]}>
            <h2>Order Summary</h2>
            <hr />
            <div className={style["totalcount-display"]}>
              <p>Items</p> <p>{totalCount}</p>
            </div>
            <div className={style["total-price-display"]}>
              <p>Total</p> <p>${Math.round(totalPrice)}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>No Items in cart</h2>
      )}
    </>
  );
}
