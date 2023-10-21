import { Link, useLocation, useRouteError } from "react-router-dom";
import errorImg from '../../assets/images/error-img.png'
const ErrorPage = () => {

    const error = useRouteError();

    // console.log(location.pathname);


    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center">

            <img src={errorImg} className="max-w-sm" alt="" />

            <div className="space-y-3 mt-4">

                <p className="text-4xl uppercase italic text-red-600 font-semibold font-londrina">
                    {
                        error.status === 404 ? 'Page Not Found' : `${error.statusText}`
                    }
                </p>

                <p className="text-lg text-red-500 italic">{error.data}</p>
                <div>
                    <Link to='/'>
                        <button className="btn my-4 text-white bg-title-secondary rounded-full font-bold px-8 py-4 hover:bg-title-primary">Go to home</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;