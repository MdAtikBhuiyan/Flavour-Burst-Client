import { Outlet } from "react-router-dom";
import Theme from "../Theme";
import Theme2 from "../Theme2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="overflow-hidden">
            {/* <Theme />*/}
            <Navbar />
            <Outlet />
            {/* <Footer /> */}


            {/* toastify container */}
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="light"
            />

        </div>
    );
};

export default Root;