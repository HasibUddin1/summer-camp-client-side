// import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import useTitle from "../../hooks/useTitle";
import Class from "./Class/Class";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";


const Classes = () => {

    useTitle('Classes')

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    // const [classes, setClasses] = useState([])

    const { data: classes = [], refetch } = useQuery({
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
                <h1 className="mt-10 text-4xl text-center font-bold mb-5 text-slate-800 border-t-4 border-b-4 py-2 lg:w-1/5 mx-auto border-slate-800">All Available Classes</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className="text-center text-xl mb-5">Here you will see our classes</p>
            </Fade>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                        {
                            classes.slice(0, 6).map(singleClass => <Class
                                key={singleClass._id}
                                singleClass={singleClass}
                                refetch={refetch}
                            >
                            </Class>)
                        }
                    </div>
                </SwiperSlide>
                {
                    classes.length > 6 && <SwiperSlide>
                        <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                            {
                                classes.slice(6, 12).map(singleClass => <Class
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                >
                                </Class>)
                            }
                        </div>
                    </SwiperSlide>
                }
                {
                    classes.length > 12 && <SwiperSlide>
                        <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                            {
                                classes.slice(12, 18).map(singleClass => <Class
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                >
                                </Class>)
                            }
                        </div>
                    </SwiperSlide>
                }
                {
                    classes.length > 18 && <SwiperSlide>
                        <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                            {
                                classes.slice(18, 24).map(singleClass => <Class
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                >
                                </Class>)
                            }
                        </div>
                    </SwiperSlide>
                }
                {
                    classes.length > 24 && <SwiperSlide>
                        <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                            {
                                classes.slice(24, 30).map(singleClass => <Class
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                >
                                </Class>)
                            }
                        </div>
                    </SwiperSlide>
                }
                {
                    classes.length > 30 && <SwiperSlide>
                        <div className="grid lg:grid-cols-3 w-9/12 mx-auto gap-10 mt-10 mb-10">
                            {
                                classes.slice(30, 36).map(singleClass => <Class
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}
                                >
                                </Class>)
                            }
                        </div>
                    </SwiperSlide>
                }
            </Swiper>
        </div>
    );
};

export default Classes;