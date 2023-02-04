import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyAllJobAppliedCard from './MyAllJobAppliedCard';

const MyAllPost = () => {
const {user} = useContext(AuthContext)
const [appliedJobData, setAppliedJobData ] = useState([])


const url  = `http://localhost:5000/job-applied-post/${user?.uid}`
useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setAppliedJobData(data)

    })

},[])


    return (
        <section className='bg-slate-200 w-full   h-full px-2 lg:py-8 py-5 ' >
          <div>
           <h2 className='text-xl font-semibold text-center mb-6'> All Job applied post  </h2>
         </div>
         {/* See all  applied job post   */}
         <div className='grid lg:grid-cols-2 lg:gap-0 gap-y-5'>
           {
            appliedJobData.map(appliedJobInfo => <MyAllJobAppliedCard key= 
                 {appliedJobInfo._id}
                 appliedJobInfo={appliedJobInfo}

            > </MyAllJobAppliedCard>)
           }
         </div>
        </section>
    );
};

export default MyAllPost;
