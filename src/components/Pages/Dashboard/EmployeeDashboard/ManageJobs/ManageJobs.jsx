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
  console.log(jobs)
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API}/jobsFindByEmail?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[user,update])

 
    return (
      <div className="w-full text-gray-700 h-full bg-gray-100 ">
      <div className="mx-12 py-7">
        <h2 className="text-xl ">Manage Jobs</h2>
      </div>
            <div className='mx-8 p-5 bg-white rounded-xl'>
            <div className='flex justify-between items-center mx-8'>
                <div>
                My Job Listings
                </div>
                <div className=''>
                <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <select className="form-select appearance-none
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
        <div className="">
          <div className="py-4 inline-block w-full  overflow-auto">
            <div className="">
              <table className="min-w-full text-center">
                <thead className="text-left border-b bg-blue-50 text-blue-600 w-full">
                  <tr>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                    Title
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                    Applications
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                    Created & Expired	
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                    Status
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                    Action
                    </th>
                  </tr>
                </thead >
                <tbody>
                  {
                    jobs.map((job,i)=><ManageJob update={update} setUpdate={setUpdate} key={i} job={job} />)
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
