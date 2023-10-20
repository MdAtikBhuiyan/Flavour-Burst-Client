import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
    // console.log(product, brandName);
    const { _id, image, title, price, rating, details, type, brandName } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl max-h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-title-primary text-2xl md:text-3xl font-bold font-londrina">{title}</h2>
                <p>{details.slice(0, 100)}...</p>
                <div className="flex justify-between text-sm w-full">
                    <p>Rating: {rating}</p>
                    <p>Type: {type}</p>
                </div>
                <p className="font-extrabold text-2xl md:text-5xl text-title-secondary mt-4">${price}</p>

                <div className="w-full flex justify-between mt-6">
                    <Link to={`/brandProducts/${brandName}/${_id}`}>
                    <button className="btn bg-title-primary text-white rounded-full border-0 h-fit min-h-fit px-8 py-2 font-bold text-base hover:bg-title-secondary capitalize">Details</button>
                    </Link>
                    <Link to={`/updateProduct`} state={product}>
                    <button className="btn bg-title-primary text-white rounded-full border-0 h-fit min-h-fit px-8 py-2 font-bold text-base hover:bg-title-secondary capitalize">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;