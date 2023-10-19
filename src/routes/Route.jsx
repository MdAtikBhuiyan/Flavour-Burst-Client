import { createBrowserRouter, useParams } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetails from "../pages/AllProducts/ProductDetails";

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