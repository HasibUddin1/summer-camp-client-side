import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Class = ({ singleClass }) => {

    const { _id, name, image, instructorName, availableSeats, price, students } = singleClass

    const { user } = useContext(AuthContext)

    // const [classData, setClassData] = useState({})

    const [axiosSecure] = useAxiosSecure()

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const navigate = useNavigate()
    // TODO: must implement redirecting user to the page where he left off

    const handleSelect = () => {
        // console.log(classData)
        // classData.email = user?.email
        // classData.className = name
        if (user) {
            const selectedClass = {
                email: user?.email,
                name,
                instructorName,
                image,
                price,
                selectedClassId: _id,
                availableSeats,
                students
            }
            axiosSecure.post(`/selectedClasses/${_id}`, selectedClass)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success',
                            text: 'Your course has been added to your classes',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })

                    }

                    if (res.data.message) {
                        Swal.fire({
                            title: 'Error',
                            text: 'You already added this class',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: '',
                text: "You must be logged in to select this course",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

    }


    return (
        <div className={
            availableSeats === 0 ?
                'card w-96 bg-red-500 shadow-xl rounded-xl text-white' :
                'card w-96 bg-slate-800 shadow-xl rounded-xl text-white'
        }>
            <div className="flex flex-col justify-between">
                <div>
                    <figure><img className="mx-auto rounded-xl w-full h-[300px]" src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <div className="mb-5">
                        <h2 className="card-title font-bold">
                            {name}
                        </h2>
                        <p className="font-semibold">Available Seats : {availableSeats}</p>
                        <p className="font-semibold">Instructor : {instructorName}</p>
                        <p className="font-semibold">Price : ${price}</p>
                    </div>
                    <div className="card-actions justify-end mb-3">
                        <div className="badge badge-outline">Most Popular</div>
                        <div className="badge badge-outline">Services</div>
                    </div>
                    <button onClick={handleSelect} disabled={availableSeats === 0 || isAdmin || isInstructor} className={
                        availableSeats === 0 ?
                            'bg-slate-200 text-black font-bold py-2 rounded-xl' :
                            isAdmin ?
                            'bg-slate-200 text-black font-bold py-2 rounded-xl' :
                            isInstructor ?
                            'bg-slate-200 text-black font-bold py-2 rounded-xl' :
                            'bg-slate-200 text-black font-bold py-2 rounded-xl hover:bg-slate-400 ease-in-out duration-200'
                    }>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Class;