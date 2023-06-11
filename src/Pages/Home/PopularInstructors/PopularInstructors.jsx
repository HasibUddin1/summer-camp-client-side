import { useEffect, useState } from "react";
import SingleInstructors from "./SingleInstructor/SingleInstructors";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="mt-20 mb-20">
            <h1 className="text-4xl text-center font-bold mb-10 text-slate-800 border-t-4 border-b-4 w-1/5 mx-auto py-2">Popular Instructors</h1>
            <div className="w-9/12 mx-auto grid md:grid-cols-3 gap-5">
                {
                    instructors.map(instructor => <SingleInstructors
                        key={instructor._id}
                        instructor={instructor}
                    ></SingleInstructors>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;