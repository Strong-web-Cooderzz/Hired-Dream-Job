import React, { useEffect, useState } from 'react';
import softIt from '../../../../../assets/logos/softIt.png';
import figma from '../../../../../assets/logos/figma.png';
import marketing from '../../../../../assets/logos/marketing.png';
import android from '../../../../../assets/logos/android-soft.png';
import linkedin from '../../../../../assets/logos/linkedin.png';
import skype from '../../../../../assets/logos/skype.png';
import tech from '../../../../../assets/logos/tech.png';
import upwork from '../../../../../assets/logos/upwork.png';
import JobFeaturedCard from './JobFeaturedCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const JobFeauters = () => {
    const api = import.meta.env.VITE_API + 'jobs'
    const [jobFeaturesData,setJobFeaturesData] = useState([])
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(data=>setJobFeaturesData(data))
    },[])
    console.log(jobFeaturesData);
    return (
        <section className='mx-auto w-full px-5 '>
         <div className='text-center mb-4 '>
         <h2 className='text-3xl  font-semibold'> Featured Jobs </h2>
         <p className=''> Know your worth and find the job that qualify your life </p>

         </div>
         {/*  job featured card section   */}
          <div className=' mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6  gap-y-8'>
        
           {
          jobFeaturesData.map(data => <JobFeaturedCard key={data.id} data={data} > 
           </JobFeaturedCard> )
           }
          </div>            
         
            <div className=' flex justify-center mt-8'>
                <Link > <button className='btn-normal bg-blue-500 hover:bg-blue-700 flex  items-center gap-2 '> Load More Listing <FaArrowRight /> </button> </Link>
            </div>
        </section>
    );
};

export default JobFeauters 