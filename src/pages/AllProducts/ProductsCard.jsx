import { Link } from "react-router-dom";

const ProductsCard = ({ product, brandName }) => {
    console.log(product, brandName);
    const { image, name, price, rating, description, type, brand } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src='https://i.ibb.co/4ppzKMr/coffe5.png' alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-title-primary text-2xl md:text-3xl font-bold">{name}</h2>
                <p>{description}</p>
                <p className="font-bold text-2xl md:text-3xl text-title-secondary my-4">${price}</p>
                <div className="flex justify-between w-full">
                    <p>Rating: {rating}</p>
                    <p>{type}</p>
                </div>
                <div className="card-actions mt-8">
                    <Link to={`/brandProducts/${brandName}/${type}`}>
                        <button className="btn bg-title-primary text-white rounded-full border-0 h-auto px-8 py-1 font-bold text-base hover:bg-title-secondary capitalize">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;