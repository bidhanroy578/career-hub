import { NavLink } from "react-router-dom";

const Navbar = () => {

    let list = <>
        <li className="mr-4"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-4"><NavLink to='/stat'>Statistics</NavLink></li>
        <li className="mr-4"><NavLink to='/applied'>Applied Jobs</NavLink></li>
        <li className=""><NavLink to='/blog'>blog</NavLink></li>
    </>

    return (
        <div className="bg-[#F9F9FF]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1"> 
                        {/* menu menu-horizontal */}
                        {/* flex focus:underline focus:text-[#8B80FE] */}

                       {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary font-extrabold text-xl text-white bg-gradient-to-r from-[#8D80FE] to-[#BC71FF]">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;