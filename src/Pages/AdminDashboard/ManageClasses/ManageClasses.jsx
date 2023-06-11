import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminClasses')
            return res.data
        }
    })
    // console.log(classes, refetch)

    const handleApprove = (id) => {
        // console.log('button clicked')
        axiosSecure.patch(`/approveClass/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    title: 'Success',
                    text: 'You approved this class',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    const handleDeny = (id) => {
        // console.log('button clicked', id)
        axiosSecure.patch(`/denyClass/${id}`)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    title: '',
                    text: 'You rejected this class',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

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
                                <th className="text-white font-bold text-xl text-center">Action</th>
                                <th className="text-white font-bold text-xl text-center">Action</th>
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
                                    <td className="text-center"><button onClick={() => handleApprove(singleClass._id)} disabled={singleClass.status === 'approved'} className={
                                        singleClass.status === 'approved' ?
                                            'text-start px-6 font-semibold py-2' :
                                            'text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200'
                                    }>{singleClass.status === 'approved' ? 'Approved' : 'Approve'}</button></td>
                                    <td className="text-center"><button onClick={() => handleDeny(singleClass._id)} disabled={singleClass.status === 'denied'} className={
                                        singleClass.status === 'denied' ?
                                            'text-start px-6 bg-slate-300 text-slate-500 font-semibold py-2 rounded-xl' :
                                            'text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200'
                                    }>Deny</button></td>
                                    <td className="text-center"><button className='text-start px-6 bg-slate-300 text-black font-semibold py-2 rounded-xl hover:bg-slate-500 ease-in-out duration-200'>Send Feedback</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;