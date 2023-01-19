import React, { useEffect, useState } from 'react';
import {BiBriefcase ,BiChevronRight} from "react-icons/bi";
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CandidateFollower from '../CandidateFollower/CandidateFollower';


const CandidatesNotificationsFollower = () => {

    const [follower,setFollower] = useState([]);
    useEffect(()=>{
        fetch('/data/followerData/followerData.json')
        .then(res => res.json())
        .then(data =>{
            setFollower(data)
        })
    },[])

    console.log(follower)

    const CandidateNotifyData = [
        {
            "id":'1',
            "name":'Rakib',
            "description":'Applied for a job  Web Developer post ',
            
        },
        {
            "id":'2',
            "name":'Sakib',
            "description":'Applied for a job Android Developer post ',
            
        },
        {
            "id":'3',
            "name":'Aakib',
            "description":'Applied for a job  Web Developer post ',
            
        },
        {
            "id":'4',
            "name":'Maruf ',
            "description":'Applied for a job  Front-end Developer post ',
            
        },
        {
            "id":'5',
            "name":'Tanjim ',
            "description":'Applied for a job  Full stack Developer post ',
            
        },
        {
            "id":'6',
            "name":'Imtiaj ',
            "description":'Applied for a job Mern Stack Developer post ',
            
        }, {
            "id":'7',
            "name":'Saiful Islam',
            "description":'Applied for a job  Softwere Engineer post ',
            
        }, {
            "id":'8',
            "name":'Nowshad ',
            "description":'Applied for a job  Marketing Manager post ',
            
        }
    ]
    return (
        <section className='w-full lg:flex  gap-8 mx-auto bg-slate-200  mt-7' >
            {/* Notifications part  */}
            <div className='lg:w-2/3 md:w-full sm-full bg-white py-4 px-3 rounded-md  '>
                <h2 className='flex gap-2 items-center font-bold'> Notifications <FaBell className='text-blue-300' />  </h2>
            {
            CandidateNotifyData.map(data => 
            <div className='flex items-start gap-1  font-semibold  hover:text-blue-500  mt-2'>  <BiBriefcase className='text-xl text-blue-600 mr-2' />  
             {data.name} 
             {data.description} </div> )
            }
            <button className='mt-3'> <Link className=' py-1 px-10 border rounded-lg flex items-center hover:bg-blue-200 ' > 
            Load more <BiChevronRight />
            </Link> </button>
            </div>   

            
            {/* Follower part     */}
            <div className='lg:w-1/3 md:w-full sm-full w-full mx-auto lg:mt-0 md:mt-5 mt-7 bg-white rounded-md h-96 py-4 px-2 overflow-y-scroll'>
              <h2 className='font-semibold  '> Who  is  followed you  ?   </h2>
              <div className='pl-3 grid lg:grid-cols-1 md:grid-cols-2 md:gap-4 mt-2'>
               {
                follower.map(data => <CandidateFollower 
                    key={data.id} 
                    data = {data}
                 >  </CandidateFollower>)
               }
              </div>
            </div>
        </section>
    );
};

export default CandidatesNotificationsFollower;