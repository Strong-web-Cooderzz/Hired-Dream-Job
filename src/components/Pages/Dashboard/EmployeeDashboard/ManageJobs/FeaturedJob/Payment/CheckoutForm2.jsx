import React, { useState } from 'react';


import './common.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({order}) => {
  const navigate = useNavigate()
  console.log(order)
        const stripe = useStripe();
        const [paid,setPaid] = useState('')
        const [error,setError] = useState('')
        const elements = useElements();
      const [loading,setLoading] = useState(false)
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
          if(error){
              setError(error.message)
              setLoading(false)
              setPaid('')
          }
          } else {
              if(paymentMethod?.id){
                  toast.success('Order Confirm Successful')
                  setPaid('Order Successfully Submited')
                  setLoading(false)
                  setError('')
                  fetch(`https://laptop-bazzar-sparmankhan.vercel.app/update-sold/${order?.id}`,{
                    method:'PUT'
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    fetch(`https://laptop-bazzar-sparmankhan.vercel.app/update-sold/${order?._id}`,{
                        method:'PATCH'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        toast.success('Payment Successful!')
                        navigate('/dashboard/manage_jobs')
                    })
                    console.log(data);
                  })
            }
            console.log('[PaymentMethod]', paymentMethod);
          }
        };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement className='w-96 border p-4'
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
      <button  className={`btn m-6 btn-warning btn-sm`} type="submit" disabled={!stripe&&loading}>
        
        {loading? 'Loading..':'Pay Now'}
      </button>
      <p className='text-success'>{paid}</p>
      <p className='text-error'>{error}</p>
    </form>
        </div>
    );
};

export default CheckoutForm;