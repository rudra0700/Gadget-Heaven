import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <Heading></Heading>
           <div className="flex gap-4 mt-12">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home;