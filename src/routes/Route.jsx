import { createBrowserRouter, useParams } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetails from "../pages/AllProducts/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoute>
                    <AddProduct />
                </PrivateRoute>
            },
            {
                path: '/updateProduct',
                element: <PrivateRoute>
                    <AddProduct />
                </PrivateRoute>
            },
            {
                path: '/brandProducts/:brandName',
                element: <BrandProducts params={useParams} />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
            },
            {
                path: '/brandProducts/:brand/:id',
                element: <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}/${params.id}`)
            },
            {
                path: '/myCart/:user',
                element: <PrivateRoute>
                    <MyCart />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addCart/${params?.user}`)
            }
        ]
    },
]);

export default router;