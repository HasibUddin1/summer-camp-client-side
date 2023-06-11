import { useEffect, useState } from "react";
import SingleClass from "./SingleClass/SingleClass";



const PopularClasses = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    // console.log(classes)

    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-10 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto">Popular Classes</h1>
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