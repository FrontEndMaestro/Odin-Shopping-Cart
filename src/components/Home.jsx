
import { Link } from "react-router";
import heroImage from "../assets/Hero-Banner.jpg";
import jewellaryImage from "../assets/Jewellary.jpg";
import electronicsImage from "../assets/electronics.jpg";
import womensClothingImage from "../assets/womens-clothing.jpg";
import style from "../styles/home.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Outlet } from "react-router";
export default function Home() {
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
            <h2> Women's Clothing</h2>
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
