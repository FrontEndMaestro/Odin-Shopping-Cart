import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import style from "../styles/nav.module.css";
export default function Nav() {
  return (
    <div className={style.container}>
      <Link to="/">{HomeIcon}</Link>
      <Link to="/shop" className={style.shop}>
        Shop
      </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
