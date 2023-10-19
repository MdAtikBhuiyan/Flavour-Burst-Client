import bellImg from '../../assets/images/notification-bell.png'

const Subscribe = () => {
    return (
        <div className="bg-title-secondary py-20 px-2 my-24">


            <img src={bellImg} className='h-40 text-center mx-auto mb-8' alt="" />

            <div className="text-center space-y-6">
                <h4 className="text-3xl md:text-6xl font-bold font-londrina text-white text-center">Stay In Touch</h4>
                <p className="text-white opacity-90">Subscribe today and embark on a mouthwatering adventure with Savory Bites Digest. Your taste buds will thank you! </p>

                <form>
                    <div className="relative w-[90%] md:w-[70%] lg:w-1/2 mx-auto mt-12">
                        <input type="search" id="default-search" className="block w-full bg-white p-3 md:p-5 px-6 text-sm rounded-full focus:outline-none" placeholder="Enter Email" required />
                        <button type="submit" className="text-white absolute right-3 bottom-1 md:bottom-1.5 bg-title-primary focus:outline-none font-bold text-sm md:text-base rounded-full px-4 py-2 md:px-8 md:py-3">Subscribe</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Subscribe;