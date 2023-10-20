import { NavLink } from "react-router-dom";
import userImg from '../../assets/images/user.png'
import Theme2 from "../../Theme2";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

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

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfull")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

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

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-20 p-2 pl-6 py-4 space-y-4 shadow bg-base-100 rounded-box w-52 font-bold text-text-primary">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <div className="flex gap-4">



                    {
                        user ? <>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <label tabIndex={1} className="m-1">
                                    <button className="btn bg-transparent hover:bg-transparent border-0 p-0">
                                        <img src={user?.photoURL} className="w-10 h-10 mx-auto rounded-full" alt="" />
                                    </button>
                                </label>
                                <ul tabIndex={1} className="dropdown-content z-20 p-2 shadow bg-white text-black rounded-box w-52">
                                    <li className="text-center text-xl font-bold my-3">
                                        <p>{user?.displayName}</p>
                                        <p className="text-sm mb-4">{user?.email}</p>
                                        <button
                                        onClick={handleLogout} 
                                        className="btn bg-title-secondary text-white rounded-full border-0 min-h-fit h-fit px-8 py-2 font-bold text-sm hover:bg-title-primary capitalize">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </>
                            :
                            <NavLink to='/login'>
                                <button className="btn bg-transparent hover:bg-transparent border-0 p-0">
                                    <FaCircleUser className="text-title-primary text-3xl" />
                                </button>
                            </NavLink>
                    }

                    <Theme2 />

                </div>


            </div>
        </div>
    );
};

export default Navbar;