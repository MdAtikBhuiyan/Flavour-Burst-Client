import ProductsCard from "./ProductsCard";

const products = [
    {
        "id": 1,
        "image": "coca_cola_classic.jpg",
        "name": "Coca-Cola Classic",
        "brand": "Coca-Cola",
        "type": "Beverage",
        "price": 1.99,
        "description": "The classic, refreshing cola with a signature taste.",
        "rating": 4.7
    },
    {
        "id": 2,
        "image": "diet_coke.jpg",
        "name": "Diet Coke",
        "brand": "Coca-Cola",
        "type": "Beverage",
        "price": 1.99,
        "description": "A calorie-free cola with the same great taste.",
        "rating": 4.5
    },
    {
        "id": 3,
        "image": "coca_cola_zero_sugar.jpg",
        "name": "Coca-Cola Zero Sugar",
        "brand": "Coca-Cola",
        "type": "Beverage",
        "price": 1.99,
        "description": "All the flavor, zero sugar.",
        "rating": 4.6
    },
    {
        "id": 4,
        "image": "sprite.jpg",
        "name": "Sprite",
        "brand": "Coca-Cola",
        "type": "Beverage",
        "price": 1.79,
        "description": "A lemon-lime flavored soft drink for a crisp, clean taste.",
        "rating": 4.4
    },
    {
        "id": 5,
        "image": "fanta.jpg",
        "name": "Fanta",
        "brand": "Coca-Cola",
        "type": "Beverage",
        "price": 1.89,
        "description": "A fruity and fun carbonated soft drink.",
        "rating": 4.3
    },
    {
        "id": 6,
        "image": "smartwater.jpg",
        "name": "smartwater",
        "brand": "Coca-Cola",
        "type": "Bottled Water",
        "price": 1.49,
        "description": "Vapor-distilled water for a pure and crisp taste.",
        "rating": 4.8
    }
]


const AllProducts = ({brand}) => {
    
    return (
        <div className="my-16">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold text-title-secondary">Explore Our Products</h2>
                <p className="text-text-secondary">Explore the brands that have earned a special place in the hearts of consumers worldwide, for a variety of compelling reasons.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
                {
                    products.map(product => <ProductsCard key={product.id} product={product} brandName={brand} />)
                }
            </div>

        </div>
    );
};

export default AllProducts;