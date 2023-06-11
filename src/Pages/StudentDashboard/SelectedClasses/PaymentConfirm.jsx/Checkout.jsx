import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const Checkout = ({ selectedClasses, price }) => {
    // console.log(selectedClasses)

    const [clientSecret, setClientSecret] = useState('')
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const { user } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown Email',
                        name: user?.displayName || 'Unknown Name'
                    }
                }
            }
        )

        if (confirmError) {
            console.log(confirmError)
        }

        console.log('paymentIntent', paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                quantity: selectedClasses.length,
                date: new Date(),
                price,
                status: 'completed',
                cartItems: selectedClasses.map(singleClass => singleClass._id),
                selectedClassesId: selectedClasses.map(singleClass => singleClass.selectedClassId),
                classesName: selectedClasses.map(singleClass => singleClass.name)
            }
            axiosSecure.post('/payments', paymentInfo)
                .then(res => {
                    // console.log(res.data.insertResult.insertedId)
                    if (res.data.insertResult.insertedId) {
                        // display sweet alert
                        // axiosSecure.patch('/selectedClasses', {selectedClasses})
                        //     .then(res => {
                        //         console.log(res.data)
                        //         if (res.data.modifiedCount > 0) {
                        //         }
                        //     })
                        selectedClasses.map(singleClass => {
                            // console.log(singleClass)
                            axiosSecure.patch(`/selectedClasses/${singleClass.selectedClassId}`, singleClass)
                                .then(res => {
                                    // console.log(res.data)
                                    if (res.data.modifiedCount > 0) {
                                        // display sweetAlert
                                    }
                                })

                            axiosSecure.patch(`/updateStudentsCount/${singleClass.selectedClassId}`, singleClass)
                                .then(res => {
                                    if (res.data.modifiedCount > 0) {
                                        // display sweetAlert
                                    }
                                })
                        })
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="border-2 p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="w-9/12 mx-auto mt-5">
                    <button className="btn btn-primary w-full" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-600">Transaction has been completed successfully. Your transaction Id:{transactionId}</p>}
        </>
    );
};

export default Checkout;