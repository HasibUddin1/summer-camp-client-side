// import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
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
            <Slide>
                <h1 className="mt-10 text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 w-1/5 mx-auto border-slate-800">All Available Classes</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Here you will see our classes</p>
            </Fade>
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