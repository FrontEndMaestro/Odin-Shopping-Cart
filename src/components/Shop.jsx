import { Outlet, useOutletContext } from "react-router";
import style from "../styles/shop.module.css";
import Card from "./card";
export default function Shop() {
  const { data, editCartCount } = useOutletContext();
  return (
    <>
      <div className={`${style.container}`}>
        {data.map((element) => (
          <Card
            id={element.id}
            imgUrl={element.image}
            title={element.title}
            price={element.price}
            editCartCount={editCartCount}
          ></Card>
        ))}
      </div>
    </>
  );
}
