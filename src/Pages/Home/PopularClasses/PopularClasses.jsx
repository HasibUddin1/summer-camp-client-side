import { useEffect, useState } from "react";
import SingleClass from "./SingleClass/SingleClass";
import { Fade, Slide } from "react-awesome-reveal";



const PopularClasses = () => {


    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-learning-server-side.vercel.app/popularClasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    // console.log(classes)

    return (
        <div>
            <Slide>
                <h1 className="text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto border-slate-800">Popular Classes</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Here you will see our popular classes</p>
            </Fade>
            <div className="grid md:grid-cols-3 gap-5 w-9/12 mx-auto">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;