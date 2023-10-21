import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const [errorMessage, setErrorMessage] = useState()
    const { signIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()

    const handleLogin = (e) => {

        e.preventDefault()

        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // clear error message 
        setErrorMessage('')

        // login at firebase
        if (email && password) {
            signIn(email, password)
                .then(res => {
                    // console.log(res.user);
                    toast.success('Login Successful');
                    navigate(location?.state ? location.state : '/')
                })
                .catch(err => {
                    // console.log(err);
                    setErrorMessage(`${err.message}`)
                })

            // form field clear
            form.reset()
        }

    }

    const handleGoogleLogin = () => {
        setErrorMessage('')
        googleSignIn()
            .then(res => {
                // console.log(res.user);
                toast.success('Login Successful');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                // console.log(err);
                setErrorMessage(err.message)
            })
    }

    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[600px] overflow-hidden bg-title-secondary py-16 px-14 text-center sm:px-12 md:px-[60px]"
                            >
                                <div className="mb-10 text-center md:mb-16">
                                    <h2 className="text-white text-2xl md:text-3xl font-bold font-londrina">Sign In Your Account</h2>
                                </div>

                                <form onSubmit={handleLogin}>

                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="border-[#E9EDF4] w-full  border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-title-primary focus-visible:shadow-none"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="border-[#E9EDF4] w-full  border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-title-primary focus-visible:shadow-none"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="submit"
                                            value="Sign In"
                                            className="bg-title-primary text-white w-full cursor-pointer py-3 px-5 text-base font-bold transition hover:bg-[#ff63d0]"
                                        />
                                    </div>
                                </form>

                                <p className="text-black font-bold text-lg text-center italic mb-6">{errorMessage}</p>

                                <p className="mb-4 text-base text-white">Connect With</p>

                                <div className="mb-8 flex justify-center">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn hover:bg-transparent bg-transparent border-0">
                                        <FcGoogle className="text-5xl" />
                                    </button>
                                </div>

                                <p className="text-base text-white">
                                    <span className="pr-2">Do not have an account?</span>
                                    <Link to='/register' className="text-title-primary font-bold hover:underline">
                                        Sign Up
                                    </Link>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;