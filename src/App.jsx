import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
import styled from "@emotion/styled";
import style from "../src/App.module.css";
const useItemData = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((jsonData) => {
        if (ignore) return;
        let data = jsonData.map((element) => ({
          id: element.id,
          image: element.image,
          price: element.price,
          cartCount: 0,
          title: element.title,
        }));
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { error, loading, data, setData };
};

export default function App() {
  const { error, loading, data, setData } = useItemData();
  let totalCount = 0;
  let totalPrice = 0;
  if (loading) return <div className={style.loading}>Loading...</div>;
  if (error) return <div>error occured {error}</div>;
  if (data) {
    totalCount = data.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.cartCount;
    }, 0);
    totalPrice = data.reduce((accumulator, currentElement) => {
      return accumulator + currentElement.cartCount * currentElement.price;
    }, 0);
  }

  function editCartCount(id, count) {
    setData((prevData) => {
      return prevData.map((element) => {
        if (element.id === id) {
          return { ...element, cartCount: count };
        }
        return element;
      });
    });
  }

  return (
    <>
      <Nav totalCount={totalCount} />
      <Outlet context={{ data, editCartCount, totalCount, totalPrice }} />
    </>
  );
}
