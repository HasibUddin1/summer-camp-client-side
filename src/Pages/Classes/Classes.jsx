// import { useEffect, useState } from "react";
import Class from "./Class/Class";
import { useQuery } from "@tanstack/react-query";


const Classes = () => {

    // const [classes, setClasses] = useState([])

    const {data: classes=[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
    })

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-10">All Available Classes</h1>
            <div className="grid md:grid-cols-3 gap-10 w-9/12 mx-auto mt-10">
                {
                    classes.map(singleClass => <Class
                        key={singleClass._id}
                        singleClass={singleClass}
                        refetch={refetch}
                    >
                    </Class>)
                }
            </div>
        </div>
    );
};

export default Classes;