import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";
import useTitle from "../../../hooks/useTitle";


const EnrolledClasses = () => {

    useTitle('My Enrolled Classes')

    const [axiosSecure] = useAxiosSecure()

    const { user } = useContext(AuthContext)

    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosSecure.get(`https://summer-camp-learning-server-side.vercel.app/enrolledClasses/${user?.email}`)
        .then(res => {
            setClasses(res.data)
        })
    }, [axiosSecure, user])

    return (
        <div className="w-full">
            <h1 className="text-4xl text-center font-bold mt-10">Your Selected Classes</h1>
            <div className="w-9/12 mx-auto bg-slate-800 rounded-xl mt-10 text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white font-bold text-xl">Image</th>
                                <th className="text-white font-bold text-xl">Name</th>
                                <th className="text-white font-bold text-xl">Price</th>
                                <th className="text-white font-bold text-xl">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map(selectedClass => <tr
                                    key={selectedClass._id}
                                    className="p-5"
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectedClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {selectedClass.name}
                                    </td>
                                    <td>${selectedClass.price}</td>
                                    <td className="font-bold">Enrolled</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClasses;