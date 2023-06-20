import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Key)

const PaymentConfirm = () => {

    const {user} = useContext(AuthContext)

    const [selectedClasses, setSelectedClasses] = useState([])
    // console.log(selectedClasses)

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/selectedClasses/${user?.email}`)
        .then(res => {
            // console.log(res.data)
            setSelectedClasses(res.data)
        })
    }, [axiosSecure, user])

    const total = selectedClasses.reduce((sum, selectedClass) => sum + selectedClass.price, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-9/12 mx-auto">
            <div>
                <h1 className="text-4xl text-center font-bold mb-5">Total Price: ${price}</h1>
            </div>
            <Elements stripe={stripePromise}>
                <Checkout selectedClasses={selectedClasses} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default PaymentConfirm;