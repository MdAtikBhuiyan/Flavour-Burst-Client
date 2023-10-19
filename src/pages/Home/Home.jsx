import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';

import Banner from '../../components/Banner/Banner';
import AllProducts from '../AllProducts/AllProducts';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';

const banners = [
    { id: 1, title: "Explore culinary delights from around the globe", image: banner1 },
    { id: 2, title: "Take your taste buds on a wild adventure", image: banner2 },
    { id: 3, title: "An explosion of spices and flavors", image: banner3 },
]

const Home = () => {

    return (
        <div>
            <Banner banners={banners} />

            <div className='w-[90%] mx-auto'>
                <Brands />
                <AllProducts />
                <Subscribe />

            </div>

            <Footer />
        </div>
    );
};

export default Home;