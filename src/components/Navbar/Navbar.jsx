import { NavLink } from "react-router-dom";
import userImg from '../../assets/images/user.png'
import Theme2 from "../../Theme2";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {

    const navLinks = <>

        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/addProduct'>Add Product</NavLink>
        </li>
        <li>
            <NavLink to='/myCart'>My Cart</NavLink>
        </li>
        <li>
            <NavLink to='/login'>Login</NavLink>
        </li>

    </>

    return (
        <div className="navbar bg-white p-0">

            <div className="navbar-start">
                <p className="text-2xl lg:text-4xl font-londrina text-title-primary">Flavour Burst</p>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 px-1 font-bold text-lg">
                    {
                        navLinks
                    }
                </ul>
            </div>

            <div className="navbar-end">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-text-primary">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <div className="flex gap-4">
                    <button className="btn bg-transparent hover:bg-transparent border-0 p-0">
                        {/* <img src={userImg} className="w-12" alt="" /> */}
                        <FaCircleUser className="text-title-primary text-3xl" />
                    </button>
                    <Theme2 />
                </div>

                {/* <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        
                        <label htmlFor="my-drawer-4" className="drawer-button btn">Open drawer</label>
                        <p htmlFor="my-drawer-4" className="drawer-button btn">_==_</p>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-1/2 lg:w-80 min-h-full bg-base-200 text-base-content">
                           
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;