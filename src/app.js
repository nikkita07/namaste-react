import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Shimmer from "./component/Shimmer.js";
// import Grocery from "./component/Grocery.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import Cart from "./component/Cart.js";
//for better optimization:
//chunking
//code splitting
//ddynamic buning 
//lazy loading 
//on demand loading

//lazy is a function given by react as named export
//suspense is a component in React
const Grocery = lazy(()=> import("./component/Grocery.js"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
          path:"/grocery",
          element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      }, 
      {
        //dynamic routing
        path:"/restaurants/:resId",
        element :<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element :<Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
