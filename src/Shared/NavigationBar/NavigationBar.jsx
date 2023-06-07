import { Link } from "react-router-dom";
import logo from '../../assets/images/logos/logo-for-assignment.jpg'


const NavigationBar = () => {

    const navOptions = <>
        <li className="font-semibold text-xl"><Link to='/'>Home</Link></li>
        <li className="font-semibold text-xl"><Link to='/instructors'>Instructors</Link></li>
        <li className="font-semibold text-xl"><Link to='/classes'>Classes</Link></li>
        <li className="font-semibold text-xl"><Link to='/dashboard'>Dashboard</Link></li>
    </>

    return (
        <div className="w-9/12 mx-auto">
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold"><img className="w-[150px]" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;