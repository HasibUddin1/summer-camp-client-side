import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const InstructorClasses = () => {

    const { user } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()

    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosSecure.get(`/instructorClasses/${user?.email}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosSecure, user])

    return (
        <div className="w-full">
            <h1 className="text-4xl text-center font-bold mt-10">Your Added Classes</h1>
            <div className="w-9/12 mx-auto bg-slate-800 rounded-xl mt-10 text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white font-bold text-xl">Image</th>
                                <th className="text-white font-bold text-xl">Name</th>
                                <th className="text-white font-bold text-xl">Status</th>
                                <th className="text-white font-bold text-xl text-center">Total Enrolled Students</th>
                                <th className="text-white font-bold text-xl text-center">Feedback</th>
                                <th className="text-white font-bold text-xl text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map(singleClass => <tr
                                    key={singleClass._id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleClass.name}
                                    </td>
                                    <td className="font-bold">{singleClass.status}</td>
                                    <td className="font-bold text-center">{singleClass.students}</td>
                                    <td className="font-bold text-center">{singleClass?.feedback}</td>
                                    <td className="text-center"><Link to={`/dashboard/updateAClass/${singleClass._id}`}>
                                        <button className='text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200'>Update</button>
                                    </Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InstructorClasses;