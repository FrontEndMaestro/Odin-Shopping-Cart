import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
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

  return { error, loading, data,setData };
};

export default function App() {
  const { error, loading, data, setData } = useItemData();

  if (loading) return <div>loading</div>;
  if (error) return <div>error occured {error}</div>;
  console.log(data);

  function editCartCount(id, count) {
    let index = data.findIndex((element) => element.id == id);
    let newData = [...data];
    newData[index].cartCount = count;
    setData(newData);
  }

  return (
    <>
      <Nav />
      <Outlet context={{ data, editCartCount }} />
    </>
  );
}
