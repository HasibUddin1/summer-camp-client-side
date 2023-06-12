import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTitle from "../../../../hooks/useTitle";


const UpdateAClass = () => {

    useTitle('Update A Class')

    const { user } = useContext(AuthContext)

    const { id } = useParams()

    const [axiosSecure] = useAxiosSecure()

    const [singleClass, setSingleClass] = useState({})

    useEffect(() => {
        axiosSecure.get(`/getAClassToUpdate/${id}`)
            .then(res => {
                console.log(res.data)
                setSingleClass(res.data)
            })
    }, [axiosSecure, id])

    const handleUpdateClass = event => {
        event.preventDefault()

        const form = event.target
        const className = form.className.value
        const classImage = form.classImage.value
        const instructorName = form.instructorName.value
        const instructorEmail = form.instructorEmail.value
        const availableSeats = form.availableSeats.value
        const price = form.price.value

        const updateClassInfo = {
            name: className,
            image: classImage,
            instructorName,
            instructorEmail,
            availableSeats: parseInt(availableSeats),
            price: parseFloat(price),
            status: singleClass.status,
            students: singleClass.students,
            feedback: singleClass?.feedback
        }

        // console.log(updateClassInfo)
        axiosSecure.put(`/updateAClass/${id}`, updateClassInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You successfully updated the class',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleUpdateClass} className="w-9/12 mx-auto p-10 bg-slate-200 rounded-xl">
                <div className="mb-5">
                    <label className="label label-text">Class Name*</label>
                    <input type="text" defaultValue={singleClass.name} name="className" placeholder="Class Name" className="input input-bordered w-full" />
                </div>
                <div className="mb-5">
                    <label className="label label-text">Class Image*</label>
                    <input type="text" defaultValue={singleClass.image} name="classImage" placeholder="Class Image" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-between gap-6 mb-5">
                    <div className="w-1/2">
                        <label className="label label-text">Instructor Name*</label>
                        <input type="text" defaultValue={user.displayName} name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full" readOnly />
                    </div>
                    <div className="w-1/2">
                        <label className="label label-text">Instructor Email*</label>
                        <input type="text" defaultValue={user.email} name="instructorEmail" placeholder="Instructor Email" className="input input-bordered w-full" readOnly />
                    </div>
                </div>
                <div className="mb-5 flex w-full gap-6">
                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" defaultValue={singleClass.availableSeats} name="availableSeats" placeholder="Available Seats" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" defaultValue={singleClass.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="bg-slate-800 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-slate-500 ease-in-out duration-200" type="submit" value="Update Class" />
            </form>
        </div>
    );
};

export default UpdateAClass;