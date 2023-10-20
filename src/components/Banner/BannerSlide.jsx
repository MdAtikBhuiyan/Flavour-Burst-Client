import { Link } from "react-router-dom";

const BannerSlide = ({ bannerDetails }) => {
    const { title = bannerDetails.text, image = bannerDetails.img } = bannerDetails;
    return (
        <div>
            <div className="relative w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-5 before:h-full before:w-full before:bg-[#121281] before:opacity-30">
                <img src={image} alt="" className="h-[75vh] w-full object-cover" />

                <div className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-center z-10">
                    <h2 className="text-2xl md:text-5xl xl:text-7xl mb-8 font-bold text-white font-londrina">{title}</h2>
                    <p className="md:w-4/5 mx-auto text-white mb-5">We are dedicated to sourcing the finest ingredients, promoting sustainable practices, and creating flavors that bring people together. Our mission is to enhance everyday life through the joy of food and drink.</p>
                    <Link to='/'>
                        <button className="btn bg-title-primary text-white rounded-full border-0 h-auto px-8 py-3 font-bold text-base hover:bg-title-secondary">Get Started</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BannerSlide;