import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";


const AddAClass = () => {

    useTitle('Add A Class')

    const { user } = useContext(AuthContext)
    // console.log(user.displayName, user.email)
    const [axiosSecure] = useAxiosSecure()

    const handleAddClass = event => {
        event.preventDefault()

        const form = event.target
        const className = form.className.value
        const classImage = form.classImage.value
        const instructorName = form.instructorName.value
        const instructorEmail = form.instructorEmail.value
        const availableSeats = form.availableSeats.value
        const price = form.price.value

        const classInfo = {
            name: className,
            image: classImage,
            instructorName,
            instructorEmail,
            availableSeats,
            price,
            status: 'pending',
            students: 0
        }
        // console.log(classInfo)
        axiosSecure.post('/addAClass', classInfo)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Your class has been successfully added',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleAddClass} className="w-9/12 mx-auto p-10 bg-slate-200 rounded-xl">
                <div className="mb-5">
                    <label className="label label-text">Class Name*</label>
                    <input type="text" name="className" placeholder="Class Name" className="input input-bordered w-full" />
                </div>
                <div className="mb-5">
                    <label className="label label-text">Class Image*</label>
                    <input type="text" name="classImage" placeholder="Class Image" className="input input-bordered w-full" />
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
                        <input type="number" name="availableSeats" placeholder="Available Seats" className="input input-bordered w-full" />
                    </div>
                    <div className="w-1/2">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="bg-slate-800 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-slate-500 ease-in-out duration-200" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;