import React from 'react';
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

    const jobFeaturesData = [
        {  "id": 1,
            "company":"softIt",
            "title":"Software engineer",
            "location":"Dhaka, BD",
             "logo": softIt 
        },
        {
            "id": 2,
            "company":"UI-Master",
            "title":" Figma UI/UX Designer  ",
            "location":"Dhaka, BD",
             "logo":  figma 
        },
        {
            "id": 3,
            "company":"it-lab",
            "title":" Android Software Engineer",
            "location":"Kolkata ,India",
             "logo":  android
        },
        {
            "id": 4,
            "company":"Linkedin",
            "title":" Web Developer ",
            "location":" USA , UK",
             "logo":  linkedin  
        },
        {
            "id": 5,
            "company":"Skype",
            "title":" Front-end Developer ",
            "location":" Dhaka, BD ",
             "logo":  skype
        },
        {
            "id": 6,
            "company":"TechIt",
            "title":" Mern Stack Developer ",
            "location":"California,USA",
             "logo":  tech 
        },
        {
            "id": 7,
            "company":"Money-exchange",
            "title":"Marketing  Officer ",
            "location":"California,USA",
             "logo":  marketing
        },
        {
            "id": 8,
            "company":"upwork",
            "title":"PHP , Laravel Developer ",
            "location":"Washington,USA",
             "logo":  upwork 
        }

    ]
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