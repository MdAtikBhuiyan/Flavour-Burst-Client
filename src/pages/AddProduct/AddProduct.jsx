import { Link } from "react-router-dom";
import addImg from '../../assets/images/addproduct.png'

const AddProduct = () => {
    return (
        <div className="w-[90%] mx-auto mt-14">
            {/* <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold text-title-secondary">Add Product</h2>
                <p className="text-text-secondary">Explore the brands that have earned a special place in the hearts of consumers worldwide, for a variety of compelling reasons.</p>
            </div> */}

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center">
                <div className="justify-self-center">
                    <img src={addImg} alt="" />
                </div>
                <section className="p-4 md:py-20 md:px-16 shadow-md bg-title-primary">
                    <h1 className="text-center text-3xl md:text-5xl font-semibold text-white font-londrina mb-14">
                        Add New Product
                    </h1>

                    <form onSubmit={''} className="">
                        <div>
                            <label className="text-white text-base font-bold">
                                Image URL:
                            </label>
                            <input
                                name="image"
                                required
                                type="text"
                                placeholder="Image URl"
                                className="block w-full px-4 py-2 mt-2  border bg-slate-100 text-black focus:border-title-primary outline-0"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
                            <div>
                                <label className="text-white text-base font-bold">
                                    Name:
                                </label>
                                <input
                                    name="name"
                                    type="text"
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
                                    type="number" required

                                    placeholder="rating"
                                    className="block w-full px-4 py-2 mt-2  border focus:border-title-primary bg-slate-100 text-black outline-0"
                                />
                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <button type="submit" className="btn w-full bg-title-secondary text-white rounded-full border-0 h-auto px-8 py-3 font-bold text-base hover:bg-[#6e53e6]">Get Started</button>
                        </div>
                    </form>
                </section>


            </div>

        </div>
    );
};

export default AddProduct;

