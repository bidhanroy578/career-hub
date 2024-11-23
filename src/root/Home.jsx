import Hero from "../components/hero/Hero";
import CategoryList from "../components/jobcategory/CategoryList";
import FeaturedJob from "../components/featuredJob/FeaturedJob";


const Home = () => {
    return (
        <>
                <Hero></Hero>
                <CategoryList></CategoryList>
                <FeaturedJob></FeaturedJob>
        </>
    );
};

export default Home;