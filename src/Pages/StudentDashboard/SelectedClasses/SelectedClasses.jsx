import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";


const SelectedClasses = () => {

    const [axiosSecure] = useAxiosSecure()

    const [selectedClasses, setSelectedClasses] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        axiosSecure.get(`/selectedClasses/${user?.email}`)
            .then(res => {
                setSelectedClasses(res.data)
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
                                <th className="text-white font-bold text-xl">Email</th>
                                <th className="text-white font-bold text-xl">Price</th>
                                <th className="text-white font-bold text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map(selectedClass => <tr
                                    key={selectedClass._id}
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
                                    <td>{selectedClass.email}</td>
                                    <td>${selectedClass.price}</td>
                                    <td><Link to='/dashboard/paymentConfirm'><button className="btn">Pay</button></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClasses;