import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useRef } from "react";
import Swal from "sweetalert2";


const SendFeedback = () => {
    // console.log(id)

    const feedbackRef = useRef()

    const [axiosSecure] = useAxiosSecure()
    const {id} = useParams()
    // console.log(id)
    const handleFeedback = event => {
        // axiosSecure.put(`/sendFeedback/${id}`, )
        event.preventDefault()
        const feedback = feedbackRef.current.value

        axiosSecure.put(`/sendFeedback/${id}`, {feedback})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You sent a feedback',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }



    return (
        <div className="w-full">
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleFeedback}>
                    <input type="text" ref={feedbackRef} placeholder="Type here" className="input w-full border-slate-500" />
                    <div className="text-center mt-5">
                        <button className="bg-slate-800 text-white font-bold px-6 py-2 hover:bg-slate-600 ease-in-out duration-200 rounded-xl">Send Feedback</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendFeedback;