import { Link, Outlet } from "react-router-dom";
import useStudent from "../../hooks/useStudent";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const Dashboard = () => {

    const [isStudent] = useStudent()
    // isStudent = false
    // console.log(isStudent)
    const [isAdmin] = useAdmin()
    // console.log(isAdmin)
    const [isInstructor] = useInstructor()
    // console.log(isInstructor)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-800 text-white">
                    {/* Sidebar content here */}
                    {
                        isStudent ?
                            <>
                                <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/'>Home</Link></li>
                                <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/selectedClasses'>My Selected Classes</Link></li>
                                <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/enrolledClasses'>My Enrolled Classes</Link></li>
                                <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/paymentHistory'>Payment History</Link></li>
                            </> : isAdmin ?
                                <>
                                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/'>Home</Link></li>
                                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
                                    <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
                                </> : isInstructor ?
                                    <>
                                        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/'>Home</Link></li>
                                        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/addAClass'>Add A Class</Link></li>
                                        <li className="font-semibold text-xl hover:bg-slate-400 ease-in-out duration-200 rounded-xl"><Link to='/dashboard/instructorClasses'>My Classes</Link></li>
                                    </> :
                                    <>
                                    </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;