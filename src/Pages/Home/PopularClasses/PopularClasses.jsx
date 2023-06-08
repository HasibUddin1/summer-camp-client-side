import { useEffect, useState } from "react";


const PopularClasses = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl text-center font-bold">Popular Classes: {classes.length}</h1>
            
        </div>
    );
};

export default PopularClasses;