import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../../AuthProvider/AuthProvider';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const jobManage  = useLoaderData()[0]
  const {dbUser} = useContext(AuthContext)
console.log(jobManage);
  const [payId,setPayId] = useState('')

  const stripePromise = loadStripe(`pk_test_51M6FsBLZ3fbZi8VU5gadhGikUGJqOy3j6HYSA7i6kGqI4phbI7Kdaj04Fp2CwoLBVYr2karzbUd4MmcYcIjn0APp00es4mcT7i`);
 console.log(stripePromise)
  const [loading,setLoading] = useState(false)


  const handleSSLPayment = () =>{
    setLoading(true)
    const payJob ={
      id: jobManage._id,
      dbUser:dbUser
    }
    console.log(payJob);
    fetch(`${import.meta.env.VITE_API}/sslPay`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(payJob)
    })
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      window.location.replace(data.url)
    })
  }
    return (
        <div>


<div className=" w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800 flex items-center gap-2" id="exampleModalLabel">
        Pay <GrMoney /> <span className='bg-blue-100 text-blue-700 px-2 rounded-sm'> 5$ </span> for {jobManage.title.slice(0,25)+'...'}
        </h5>
       
      </div>
      <div className="modal-body relative p-4">
      <Elements stripe={stripePromise}>
      <CheckoutForm jobManage={jobManage} />
    </Elements>
    <div>

    </div>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;