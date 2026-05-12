import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
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
        setData(jsonData);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, []);

  return { error, loading, data };
};

export default function App() {
  const { error, loading, data } = useItemData();

  if (loading) return <div>loading</div>;
  if (error) return <div>error occured {error}</div>;
  console.log(data);
  return (
    <>
      <Outlet />
      <div>HOME</div>
      <Link to="shop">Btn</Link>
    </>
  );
}
