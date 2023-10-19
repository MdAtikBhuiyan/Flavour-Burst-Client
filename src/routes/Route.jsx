import { createBrowserRouter, useParams } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetails from "../pages/AllProducts/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: '',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addProduct',
                element: <AddProduct />
            },
            {
                path: '/brandProducts/:id',
                element: <BrandProducts params={useParams} />
            },
            {
                path: '/brandProducts/:brandName/:id',
                element: <ProductDetails />
                // loader: ({params}) => console.log(params)
            },
            {
                path: '/myCart',
                element: <MyCart />
            }
        ]
    },
]);

export default router;