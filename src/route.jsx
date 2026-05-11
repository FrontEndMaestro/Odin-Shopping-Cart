import ErrorPage from "./components/ErrorPage";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
const routes = [
  {
    path: "/",
    element: <Home />,
    children: [{ index: true, element: <Nav /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [{ index: true, element: <Nav /> }],
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [{ index: true, element: <Nav /> }],
  },
];

export default routes;
