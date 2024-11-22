
const Hero = () => {
    return (
        <div>
            <div className="hero bg-[#F9F9FF] min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
                    <img src="/public/images/user.png" className="lg:relative lg:left-[10%] max-h-[90vh]" />
                    <div>
                        <h1 className="font-extrabold text-7xl text-balance">One Step Closer To Your <span className="text-[#8C81FF]">Dream Job</span></h1>
                        <p className="py-6 font-medium text-lg text-balance">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary font-extrabold text-xl text-white bg-gradient-to-r from-[#8D80FE] to-[#BC71FF]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;