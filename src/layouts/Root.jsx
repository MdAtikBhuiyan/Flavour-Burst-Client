import { Outlet } from "react-router-dom";
import Theme from "../Theme";
import Theme2 from "../Theme2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div className="overflow-hidden">
            {/* <Theme />*/}
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default Root;