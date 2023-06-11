import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";


const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure()

    const { user } = useContext(AuthContext)

    const [payments, setPayments] = useState([])

    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
            .then(res => {
                setPayments(res.data)
            })
    }, [axiosSecure, user])

    // TODO: Payment History component is left
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center font-bold mt-10">Payment History</h1>
            <div className="w-9/12 mx-auto bg-slate-800 rounded-xl mt-10 text-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-white font-bold text-xl text-center">Name</th>
                                <th className="text-white font-bold text-xl text-center">Transaction ID</th>
                                <th className="text-white font-bold text-xl">Price</th>
                                <th className="text-white font-bold text-xl">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(payment => <tr
                                    key={payment._id}
                                    className="p-5"
                                >
                                    <td className="text-center">
                                        {payment.name}
                                    </td>
                                    <td className="text-center">
                                        {payment.transactionId}
                                    </td>
                                    <td>${payment.price}</td>
                                    <td className="font-bold">{payment.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;