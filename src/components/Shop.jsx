import { useOutletContext } from "react-router";
import style from "../styles/shop.module.css";
import Card from "./Card.jsx";
export default function Shop() {
  const { data, editCartCount } = useOutletContext();
  return (
    <>
      <div className={`${style.container}`}>
        {data.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            imgUrl={element.image}
            title={element.title}
            price={element.price}
            editCartCount={editCartCount}
            type={"shop"}
          ></Card>
        ))}
      </div>
    </>
  );
}
