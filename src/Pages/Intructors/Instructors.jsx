import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Fade, Slide } from "react-awesome-reveal";


const Instructors = () => {

    useTitle('Instructors')

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-learning-server-side.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="mb-10">
            <Slide>
                <h1 className="mt-10 text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto border-slate-800">All Instructors</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Here you will see our Instructors</p>
            </Fade>
            <div className="w-9/12 mx-auto bg-slate-800 rounded-xl mt-10 text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white font-bold text-xl">Image</th>
                                <th className="text-white font-bold text-xl">Name</th>
                                <th className="text-white font-bold text-xl">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructors.map(singleInstructor => <tr
                                    key={singleInstructor._id}
                                >
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleInstructor.image || singleInstructor.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleInstructor.name}
                                    </td>
                                    <td>{singleInstructor.email}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructors;