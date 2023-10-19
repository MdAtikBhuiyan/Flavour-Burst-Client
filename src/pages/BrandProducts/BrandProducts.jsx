import { useLocation } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";
import Banner from "../../components/Banner/Banner";

const products = [
    {
        "id": 1,
        "image": "coca_cola_classic.jpg",
        "name": "Coca-Cola Classic",
        "brand name": "Coca-Cola",
        "type": "Beverage",
        "price": 1.99,
        "short description": "The classic, refreshing cola with a signature taste.",
        "rating": 4.7
    },
    {
        "id": 2,
        "image": "diet_coke.jpg",
        "name": "Diet Coke",
        "brand name": "pepsi",
        "type": "Beverage",
        "price": 1.99,
        "short description": "A calorie-free cola with the same great taste.",
        "rating": 4.5
    },
    {
        "id": 3,
        "image": "coca_cola_zero_sugar.jpg",
        "name": "Coca-Cola Zero Sugar",
        "brand name": "Coca-Cola",
        "type": "Beverage",
        "price": 1.99,
        "short description": "All the flavor, zero sugar.",
        "rating": 4.6
    },
    {
        "id": 4,
        "image": "sprite.jpg",
        "name": "Sprite",
        "brand name": "pepsi",
        "type": "Beverage",
        "price": 1.79,
        "short description": "A lemon-lime flavored soft drink for a crisp, clean taste.",
        "rating": 4.4
    },
    {
        "id": 5,
        "image": "fanta.jpg",
        "name": "Fanta",
        "brand name": "pran",
        "type": "Beverage",
        "price": 1.89,
        "short description": "A fruity and fun carbonated soft drink.",
        "rating": 4.3
    },
    {
        "id": 6,
        "image": "smartwater.jpg",
        "name": "smartwater",
        "brand name": "pran",
        "type": "Bottled Water",
        "price": 1.49,
        "short description": "Vapor-distilled water for a pure and crisp taste.",
        "rating": 4.8
    }
];



const BrandProducts = ({ params }) => {
    const { id } = params()
    const location = useLocation();
    console.log(location, id);


    return (
        <div>
            <Banner banners={products} />
            <AllProducts brand={'name'} />
        </div>
    );
};

export default BrandProducts;