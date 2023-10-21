import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
    // console.log(product, brandName);
    const { _id, image, title, price, rating, details, type, brandName } = product;

    return (
        // <div className="card bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src={image} alt="Shoes" className="rounded-xl max-h-40" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //     <p className="text-2xl text-title-secondary">{brandName}</p>
        //         <h2 className="text-title-primary text-2xl md:text-3xl font-bold font-londrina">{title}</h2>
        //         {/* <p>{details.slice(0, 100)}...</p> */}
        //         <p className="font-extrabold text-2xl md:text-5xl text-title-secondary mt-4">${price}</p>
        //         <div className="inline-block text-base w-full lowercase">
        //             <p>Rating: {rating}</p>
        //             <p>Type: {type}</p>
        //         </div>


        //         <div className="w-full flex flex-col gap-4 mt-6">
        //             <Link to={`/brandProducts/${brandName}/${_id}`}>
        //             <button className="btn bg-title-primary text-white rounded-full border-0 h-fit min-h-fit px-8 py-2 font-bold text-base hover:bg-title-secondary capitalize">Details</button>
        //             </Link>
        //             <Link to={`/updateProduct`} state={product}>
        //             <button className="btn bg-title-primary text-white rounded-full border-0 h-fit min-h-fit px-8 py-2 font-bold text-base hover:bg-title-secondary capitalize">Update</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>


        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow ">
            <a href="#">
                <img className="p-8 rounded-t-lg max-h-60 mx-auto" src={image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-title-secondary">{title}</h5>
                </a>
                <p className="mt-2">Rating: {rating}/5</p>
                <div className="flex gap-2 items-center mt-2.5 mb-4">
                    <p>Brand: {brandName}</p>
                    <p>Type: {type}</p>
                </div>
                <div className="mb-4">
                    <Link to={`/updateProduct`} state={product}>
                        <button className="btn bg-title-primary text-white rounded-sm border-0 h-fit min-h-fit px-4 py-1 text-sm hover:bg-title-secondary capitalize">Update</button>
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <span className="text-3xl font-bold text-title-secondary">${price}</span>
                    <Link to={`/brandProducts/${brandName}/${_id}`}>
                        <button className="btn bg-title-primary text-white rounded-full border-0 h-fit min-h-fit px-8 py-2 font-bold text-base hover:bg-title-secondary capitalize">Details</button>
                    </Link>
                </div>
            </div>
        </div >

    );
};

export default ProductsCard;