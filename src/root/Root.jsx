import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import CategoryList from "../components/jobcategory/CategoryList";
import FeaturedJob from "../components/featuredJob/FeaturedJob";



const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;