import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allProducts',
            element: <AllProducts></AllProducts>
        },
        {
            path:'/products/:id',
            element: <ProductDetails></ProductDetails>,
            loader: ()=> fetch('/public/productsData.json')
        },
        {
          path:'/cart',
          element: <Cart></Cart>,
          loader: ()=> fetch('/public/productsData.json')
        }
    ]
  },
]);