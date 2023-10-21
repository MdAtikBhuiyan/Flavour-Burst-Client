import { Outlet } from "react-router-dom";
import Theme from "../Theme";
import Theme2 from "../Theme2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            {/* <Theme />*/}
            <Navbar />
            <div className="overflow-hidden">
                <Outlet />
            </div>
            <Footer />


            {/* toastify container */}
            <ToastContainer
                position="top-right"
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