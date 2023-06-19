import { Link } from "react-router-dom";
import logo from '../../assets/images/logos/pngwing.com.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";



const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged out',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/'>Home</Link></li>
        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/instructors'>Instructors</Link></li>
        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/classes'>Classes</Link></li>
        {
            user ?
                <>
                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard'>Dashboard</Link></li>
                    <li>
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img className="rounded-full w-[30px] h-[30px]" src={user?.photoURL} alt="" />
                        </div>
                    </li>
                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><button onClick={handleLogout}>Logout</button></li>
                </> :
                <>
                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/login'>Login</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar bg-slate-800 justify-between py-2 lg:px-44 relative z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="flex items-center text-xl font-bold text-white"><img className="w-[80px] h-[80px]" src={logo} alt="" /> Language Club</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;