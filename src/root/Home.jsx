import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import CategoryList from "../components/jobcategory/CategoryList";
import FeaturedJob from "../components/featuredJob/FeaturedJob";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <Hero></Hero>
                <CategoryList></CategoryList>
                <FeaturedJob></FeaturedJob>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Home;