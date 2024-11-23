import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center text-4xl">
            <h3 className="my-10">Oppos !! No data found in this directory . </h3>
            <Link to='/'>
                <button className="btn btn-primary font-extrabold text-xl text-white bg-gradient-to-r from-[#8D80FE] to-[#BC71FF]">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default Error;