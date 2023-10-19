import { useNavigate } from 'react-router-dom';
import brand1 from '../../assets/images/brand-1.png';
import brand2 from '../../assets/images/brand-2.png';
import brand3 from '../../assets/images/brand-3.png';
import brand4 from '../../assets/images/brand-4.png';
import brand5 from '../../assets/images/brand-5.png';
import brand6 from '../../assets/images/brand-6.png';

const brands = [
    { id: 1, title: 'Coca Cola', image: brand1 },
    { id: 2, title: 'Nestle', image: brand2 },
    { id: 3, title: 'Pepsi', image: brand3 },
    { id: 4, title: 'Pran', image: brand4 },
    { id: 5, title: 'Starbucks', image: brand5 },
    { id: 6, title: 'McDonalds', image: brand6 },
]

const Brands = () => {

    const navigate = useNavigate()
    const handleBrand = (brand) => {
        console.log(brand);
        navigate(`/brandProducts/${brand}`, {state: brand})
    }

    return (
        <div className="mt-16">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold text-title-secondary">Brands We Love</h2>
                <p className="text-text-secondary">Explore the brands that have earned a special place in the hearts of consumers worldwide, for a variety of compelling reasons.</p>
            </div>

            <div className='flex flex-wrap gap-4 md:gap-8 justify-center items-center my-12'>
                {
                    brands.map(brand => (
                        <div
                        onClick={() => handleBrand(brand.title.replace(/\s+/g, '-'))} 
                        className='relative group shadow-lg bg-bg-primary h-56 p-3 md:p-6 rounded-xl flex flex-col justify-center items-center my-auto transition-all active:scale-105' key={brand.id}>
                            <div className='absolute bg-[#7c5ef5e7] h-full w-full rounded-xl left-0 top-0 transition-all opacity-0 group-hover:opacity-100'></div>
                            <div>
                                <img src={brand.image} className='w-28 md:w-40 xl:w-52 h-full' alt="" />
                            </div>

                            <div className='absolute text-center w-full text-[white] font-extrabold font-londrina text-3xl md:text-5xl z-20 left-1/2 -translate-x-1/2 transition-all opacity-0 group-hover:opacity-100 group-hover:top-[40%] group-hover:left-1/2 top-3/4'>
                                <h2>
                                    {brand.title}
                                </h2>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;