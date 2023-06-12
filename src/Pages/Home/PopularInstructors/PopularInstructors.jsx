import { useEffect, useState } from "react";
import SingleInstructors from "./SingleInstructor/SingleInstructors";
import { Fade, Slide } from "react-awesome-reveal";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="mt-20 mb-20">
            <Slide>
                <h1 className="text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto border-slate-800">Popular Instructors</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Here you will see our popular instructors</p>
            </Fade>
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