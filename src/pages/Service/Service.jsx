import service1 from '../../assets/images/service-1.png';
import service2 from '../../assets/images/service-2.png';
import service3 from '../../assets/images/service-3.png';

const Service = () => {
    return (
        <div>
            <section className="my-16">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                <span className="text-title-primary mb-2 block text-lg font-semibold">
                                    Our Services
                                </span>
                                <h2
                                    className="text-title-secondary mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    What We Offer
                                </h2>
                                <p className="text-body-color text-base">
                                    There are many variations of passages of Lorem Ipsum available but
                                    the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] mx-auto flex flex-wrap gap-10 justify-center'>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-title-primary"> Free shipping on
                                    first order</h2>
                                <p>Sign up for updates and get free shipping</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-title-primary">  Best quality
                                    guarantee</h2>
                                <p> We use only the best ingredients to cook the tasty fresh food for you.</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={service3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-title-primary">Variety of Menu Items</h2>
                                <p> In our menu you will find a wide variety of dishe, desserts, and driks.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Service;