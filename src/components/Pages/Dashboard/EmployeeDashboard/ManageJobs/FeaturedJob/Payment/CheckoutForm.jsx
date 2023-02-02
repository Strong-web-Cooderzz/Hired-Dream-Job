import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutForm = ({jobManage}) => {
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [loading,setLoading] = useState(false)
    const price = 5;


    useEffect(() => {
    
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) =>{
          setClientSecret(data.clientSecret)
          setLoading(false)
        });
    }, [price]);

console.log(clientSecret);




  
    const handleSubmit = async (event) => {
      setLoading(true)
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setCardError(error.message)
        console.log('[error]', error);
      } else {
        setCardError('')
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
        className="border px-3 py-5 rounded-md"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "blue",
                "::placeholder": {
                  color: "#000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
            <p className="text-red-500 font-semibold">{cardError}</p>
         <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <Link to={'/dashboard/manage_jobs'} type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >Back</Link>
        <button  disabled={!stripe || !clientSecret} type="submit"
          class="inline-block disabled:bg-gray-400 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">{loading?'Loading...':'Pay Now'}</button>
      </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
