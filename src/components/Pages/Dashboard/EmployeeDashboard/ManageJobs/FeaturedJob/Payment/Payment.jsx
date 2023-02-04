import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const jobManage  = useLoaderData()

  const [payId,setPayId] = useState('')

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  console.log(stripePromise);
    return (
        <div>


<div class=" w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800 flex items-center gap-2" id="exampleModalLabel">
        Pay <GrMoney /> 5$ for {jobManage.title}
        </h5>
       
      </div>
      <div class="modal-body relative p-4">
      <Elements stripe={stripePromise}>
      <CheckoutForm jobManage={jobManage} />
    </Elements>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;