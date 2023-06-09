import { useEffect, useState } from "react";
import Class from "./Class/Class";


const Classes = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-10">All available classes</h1>
            <div className="grid md:grid-cols-3 gap-10 w-9/12 mx-auto mt-10">
                {
                    classes.map(singleClass => <Class
                        key={singleClass._id}
                        singleClass={singleClass}
                    >
                    </Class>)
                }
            </div>
        </div>
    );
};

export default Classes;