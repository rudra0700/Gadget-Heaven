import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
              <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
              <Outlet></Outlet>
            </div>
              <Footer></Footer>
        </div>
    );
};

export default MainLayout;