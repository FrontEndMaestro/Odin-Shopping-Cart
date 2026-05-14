import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import style from "../styles/nav.module.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Nav() {
  return (
    <nav className={style.container}>
      <Link to="/" className={`${style.icon}`}>
        <HomeIcon className={`${style.svg}`} />
      </Link>
      <h1 className={`${style.name}`}>Urban Threads.</h1>
      <Link to="/shop" className={`${style.icon} ${style.shop}`}>
        <ShoppingBagIcon className={`${style.svg}`} />
      </Link>
      <Link to="/cart" className={`${style.icon}`}>
        <ShoppingCartIcon className={`${style.svg}`} />
      </Link>
    </nav>
  );
}
