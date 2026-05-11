import { Outlet } from "react-router";
import { Link } from "react-router";




export default function Home() {
  return (
    <>
      <Outlet />
      <div>HOME</div>
      <Link to="shop">Btn</Link>
    </>
  );
}
