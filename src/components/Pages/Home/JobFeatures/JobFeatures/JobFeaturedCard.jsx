import React from 'react';
import './JobFeauter.css'
import { FaMapMarkerAlt } from "react-icons/fa";



const JobFeaturedCard = ({data}) => {
    console.log(data)
    const {company,location,logo,title} = data ;
    return (
        <div className='job-card w-full  mx-auto  py-2 '>
            <div className=''>
              <div className='flex justify-between'>
                 <button className='job-feature-btn-left bg-zinc-200 ' > Internship </button>
                 <button className='job-feature-btn bg-zinc-300 text-blue-600 mr-3' > Full time </button>
              </div>
              <button className='job-feature-btn-left bg-orange-100 text-orange-500 mt-2'>  Part time </button>
            </div>
         <div className='flex justify-center relative -mt-6'>
         <img className='w-16 h-16 rounded-full ml-4 ' src={logo}  alt='' />
         </div>
            
            <div className='text-center mt-4 mb-6'>
                <h2 className='text-green-500 font-semibold'> {title} </h2>
                <h3 className='flex justify-center items-center'>
                <FaMapMarkerAlt className='text-slate-600' /> {location}  
                </h3>
            </div>
        </div>
    );
};

export default JobFeaturedCard;