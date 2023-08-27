import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../hooks/useTitle";


const SelectedClasses = () => {

    useTitle('My Selected Classes')

    const [axiosSecure] = useAxiosSecure()

    // const [selectedClasses, setSelectedClasses] = useState([])

    const { user } = useContext(AuthContext)

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/${user?.email}`)
            return res.data
        }
    })

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                axiosSecure.delete(`/deleteSelectedClasses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
            {
                selectedClasses.length === 0 ?
                <h1 className="text-4xl font-bold">You do not have any selected classes</h1> :
                <div className="w-full">
                    <div className="w-1/2 mx-auto">
                        <div className="flex items-center justify-center"><h1 className="text-4xl text-center font-bold">Proceed to Payment:</h1>
                            <Link to='/dashboard/paymentConfirm'>
                                <button className="bg-slate-800 text-white px-12 py-2 hover:bg-slate-600 ease-in-out duration-200 rounded-xl gap-5">Pay</button>
                            </Link>
                        </div>
                    </div>
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
                                            <td><button onClick={() => handleDelete(selectedClass._id)} className="btn">Delete</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SelectedClasses;