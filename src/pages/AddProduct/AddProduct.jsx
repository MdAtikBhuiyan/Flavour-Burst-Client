
import Swal from 'sweetalert2';
import addImg from '../../assets/images/addproduct.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const AddProduct = () => {

    const { state } = useLocation();

    const [updateProduct, setUpdateProduct] = useState(null);

    useEffect(() => {
        setUpdateProduct(state)
    }, [state])

    const { _id, image, title, price, rating, details, type, brandName } = updateProduct ? updateProduct : '';


    const handleAddProduct = (e) => {

        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.productTitle.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;

        const newProduct = { image, title, brandName, type, price, details, rating };
        // console.log(newProduct);

        fetch('https://asn-flavour-brust-10-server-mpkg126i6.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product added successfully',
                        text: "Do you want to continue",
                        confirmButtonText: "Yes"
                        // showConfirmButton: false,
                        // timer: 2000
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Opps... Failed !!',
                    text: `${err.message}`,
                    confirmButtonText: "Continue"
                    // showConfirmButton: false,
                    // timer: 2000
                })
            })

        // form clear
        form.reset()
    };
    console.log(updateProduct);


    // update product
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.productTitle.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;

        const newProduct = { image, title, brandName, type, price, details, rating };
        // console.log(newProduct);
        fetch(`https://asn-flavour-brust-10-server-mpkg126i6.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Update successfully',
                        text: "Do you want to continue",
                        confirmButtonText: "Yes"
                        // showConfirmButton: false,
                        // timer: 2000
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Opps... Failed !!',
                    text: `${err.message}`,
                    confirmButtonText: "Continue"
                    // showConfirmButton: false,
                    // timer: 2000
                })
            })


    }

    return (
        <div className="w-[90%] mx-auto my-16">
            {/* <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold text-title-secondary">Add Product</h2>
                <p className="text-text-secondary">Explore the brands that have earned a special place in the hearts of consumers worldwide, for a variety of compelling reasons.</p>
            </div> */}

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center">
                <div className={`justify-self-center ${updateProduct && 'order-2'}`}>
                    <img src={addImg} alt="" />
                </div>
                <section className={`p-4 md:py-20 md:px-16 shadow-md ${updateProduct ? 'bg-title-secondary' : 'bg-title-primary'}`}>
                    <h1 className="text-center text-3xl md:text-5xl font-semibold text-white font-londrina mb-14">
                        {
                            updateProduct ? "Update Product" : 'Add New Product'
                        }
                    </h1>

                    <form onSubmit={updateProduct ? handleUpdateProduct : handleAddProduct} className="">
                        <div>
                            <label className="text-white text-base font-bold">
                                Image URL:
                            </label>
                            <input
                                name="image"
                                defaultValue={image}
                                required
                                type="text"
                                placeholder="Image URl"
                                className="block w-full px-4 py-2 mt-2  border bg-slate-100 text-black focus:border-title-primary outline-0"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
                            <div>
                                <label className="text-white text-base font-bold">
                                    Product Title:
                                </label>
                                <input
                                    name="productTitle"
                                    type="text"
                                    defaultValue={title}
                                    required
                                    placeholder="Product Name"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Brand Name:
                                </label>
                                <input
                                    name="brandName"
                                    type="text"
                                    required
                                    defaultValue={brandName}
                                    placeholder="Brand Name"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Product Type:
                                </label>
                                <input
                                    name="type"
                                    type="text"
                                    required
                                    defaultValue={type}
                                    placeholder="Product Type"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Price:
                                </label>
                                <input
                                    name="price"
                                    type="number"
                                    required
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Details:
                                </label>
                                <input
                                    name="details"
                                    type="text"
                                    required
                                    defaultValue={details}
                                    placeholder="Details"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Rating:
                                </label>
                                <input
                                    name="rating"
                                    type="text"
                                    required
                                    defaultValue={rating}
                                    placeholder="rating"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <button
                                type="submit"
                                className={`btn w-full text-white rounded-full border-0 h-fit min-h-fit px-6 py-2 md:px-8 md:py-3 font-bold text-sm md:text-base ${updateProduct ? 'bg-title-primary hover:bg-[#ff6ed3]' : 'bg-title-secondary hover:bg-[#6e53e6]'}`}>
                                {updateProduct ?
                                    "Update Product"
                                    :
                                    "Add Product"
                                }
                            </button>
                        </div>
                    </form>
                </section>


            </div>

        </div>
    );
};

export default AddProduct;

