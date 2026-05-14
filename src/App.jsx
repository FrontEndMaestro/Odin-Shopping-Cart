import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import heroImage from "./assets/Hero-Banner.jpg";
import jewellaryImage from "./assets/Jewellary.jpg";
import electronicsImage from "./assets/electronics.jpg";
import womensClothingImage from "./assets/womens-clothing.jpg";
import style from "./App.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
      <main className={`${style.main_container}`}>
        <div className={`${style.hero_banner}`}>
          <div className={`${style.hero_content}`}>
            <h2>Upgrade Your Wardrobe with Immaculate Quality</h2>
            <h3>
              Discover clothing designed with refined style, lasting comfort,
              and premium attention to detail. Each piece is made to elevate
              your everyday look with confidence and ease.
            </h3>
            <Link to="/shop" className={`${style.shopping_link}`}>
              View All Products
              <div>
                <ArrowOutwardIcon />
              </div>
            </Link>
          </div>

          <img src={heroImage} alt="" />
        </div>
        <aside className={`${style.side_container}`}>
          <div className={`${style.card}`}>
            <img src={electronicsImage} alt="" />
            <h2>Electronics</h2>
          </div>
          <div className={`${style.card}`}>
            <img src={womensClothingImage} alt="" />
            <h2>Explore our Women's clothing range.</h2>
          </div>
          <div className={`${style.card}`}>
            <img src={jewellaryImage} alt="" />
            <h2>Jewellary</h2>
          </div>
        </aside>
      </main>
    </>
  );
}
