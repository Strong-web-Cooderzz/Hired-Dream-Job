import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({jobManage}) => {
  const navigate = useNavigate()
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    console.log("clientSecret",clientSecret)
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [loading,setLoading] = useState(false)
    const price =jobManage.rateMax;
console.log(price);

 
useEffect(() => {
  fetch("http://localhost:5000/payment_intents", {
    method: "POST",
    headers: {
       "Content-Type": "application/json"
       },
    body: JSON.stringify({price}),
  })
    .then((res) => res?.json())
    .then((data) =>setClientSecret(data.clientSecret));
}, [price]);




      
    const handleSubmit = async (event) => {

      event.preventDefault();
    
  
      setLoading(true)
      // Block native form submission.
  
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
        return
      } else {
       
        setCardError('')
        
              const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
       clientSecret,
        {
          payment_method: {
            type: 'card',
            card: card,
            billing_details: {
              name: jobManage?.company,
              email: jobManage?.jobEmail,
              id: jobManage?._id,
            },
          },
        },
      );
      if(paymentMethod?.id){
        const tId = paymentMethod.id
        const payData  ={
          ...jobManage,
          tId,
        }
        fetch('http://localhost:5000/featured',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(payData)
        })
        .then(res=>res?.json())
        .then(data=>{
          setLoading(false)
          toast.success('Payment successfully')
          navigate('/dashboard/manage_jobs')
        })
      }
        // if(confirmError){
        //   setCardError(confirmError.message)
        //   return
        // }
        //   console.log('paymentIntent',paymentIntent);
          
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
