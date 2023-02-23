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
  const jobManage  = useLoaderData()
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
    fetch('http://localhost:5000/sslPay',{
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
        Pay <GrMoney /> <span className='bg-blue-100 text-blue-700 px-2 rounded-sm'> 5$ </span> for {jobManage.title}
        </h5>
       
      </div>
      <div className="modal-body relative p-4">
      <Elements stripe={stripePromise}>
      <CheckoutForm jobManage={jobManage} />
    </Elements>
    <div>
<div className='flex justify-center'> 
<button onClick={()=>handleSSLPayment()} type="button"
          className="  px-6 py-2.5 bg-blue-100 text-blue-700   flex gap-2 font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-300 mr-2 active:shadow-lg transition duration-150 ease-in-out"
        >{loading ? 'Loading...':'Pay with'} <img className='w-24' src="https://ci3.googleusercontent.com/proxy/oe3FUQn0kM8cv4a-gftkBlZ1oDAl6iKYTxSkU_qCSbemcV_bVCGWtFYSPJFc4c2-JfTpVZJFigAi76l05Ag470HVtTne_r68-sYw2uE=s0-d-e1-ft#https://developer.sslcommerz.com/registration/img/logo.png" alt="" /></button>
</div>
    </div>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;