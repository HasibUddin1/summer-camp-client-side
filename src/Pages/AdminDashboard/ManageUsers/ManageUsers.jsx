import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure()

    const [users, setUsers] = useState([])

    useEffect(() => {
        axiosSecure.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure])

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
                                <th className="text-white font-bold text-xl text-center">Action</th>
                                <th className="text-white font-bold text-xl text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr
                                    key={user._id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>
                                    <td className="text-center"><button className="text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200">Make Instructor</button></td>
                                    <td className="text-center"><button className="text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200">Make Admin</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;