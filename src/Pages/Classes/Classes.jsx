// import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Class from "./Class/Class";
import { useQuery } from "@tanstack/react-query";


const Classes = () => {

    useTitle('Classes')

    // const [classes, setClasses] = useState([])

    const {data: classes=[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-learning-server-side.vercel.app/classes')
            return res.json()
        }
    })
    // console.log(classes)

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-10">All Available Classes</h1>
            <div className="grid md:grid-cols-3 gap-10 w-9/12 mx-auto mt-10 mb-10">
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