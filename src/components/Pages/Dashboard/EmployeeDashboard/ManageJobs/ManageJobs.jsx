import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { BiPen, BiTrash } from 'react-icons/bi';
import { FaSuitcase } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { HiEye } from 'react-icons/hi';
import { RiSuitcase2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import ManageJob from './ManageJob';

const ManageJobs = () => {
  const {user} = useContext(AuthContext)
  const [update,setUpdate] = useState('')
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/jobsFindByEmail?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[user,update])

 
    return (
        <div class="flex bg-gray-100 flex-col w-full p-3        ">
            <div >
            <h3 className='text-3xl'>Manage jobs!</h3>
<p className='text-xs'>Ready to jump back in?</p>
            </div>
            <div className='bg-white p-3 m-3 rounded-lg'>
            <div className='flex justify-between items-center mx-8'>
                <div>
                My Job Listings
                </div>
                <div className=''>
                <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      px-3
      w-32
      py-1.5
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      text-sm
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="1" className='text-xs'>Last 6 Month</option>
        <option value="2" className='text-xs'>Last 12 Month</option>
        <option value="3" className='text-xs'>Last 16 Month</option>
        <option value="3" className='text-xs'>Last 24 Month</option>
        <option value="3" className='text-xs'>Last 5 year</option>
    </select>
  </div>
</div>
                </div>
            </div>
        <div class="">
          <div class="py-4 inline-block w-full  overflow-auto">
            <div class="">
              <table class="min-w-full text-center">
                <thead class="text-left border-b bg-blue-50 text-blue-600 w-full">
                  <tr>
                    <th scope="col" class="text-sm font-medium px-6 py-4">
                    Title
                    </th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">
                    Applications
                    </th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">
                    Created & Expired	
                    </th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">
                    Status
                    </th>
                    <th scope="col" class="text-sm font-medium px-6 py-4">
                    Action
                    </th>
                  </tr>
                </thead >
                <tbody>
                  {
                    jobs.map(job=><ManageJob update={update} setUpdate={setUpdate} key={job._id} job={job} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
            </div>
    );
};

export default ManageJobs;