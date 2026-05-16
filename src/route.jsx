import ErrorPage from "./components/ErrorPage";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

import Home from "./components/Home";
import App from "./App";
const routes = [
  {
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
