import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPen, BiTrash } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { RiSuitcase2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import EditJob from './Modal/EditJob';


const ManageJob = ({job,setUpdate,update}) => {
  const [loading,setLoading] = useState(false)
  const [dLoading,setDLoading] = useState(false)
  const [visible,setVisible] = useState(!job.isVisible)
  const visiblity = {
    isVisible: visible
  }
    const handleUpdateVisiblity = (id) =>{
      setLoading(true)
      setVisible(!visible)
      fetch(`http://localhost:5000/jobs/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(visiblity)
    })
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      console.log(data);
      setUpdate(!update)
    })
    }


    // Delete Data
    const handleDeleteData = (id) =>{
      setDLoading(true)
      fetch(`http://localhost:5000/deleteJob/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        setUpdate(!update)
        console.log(data);
        setDLoading(false)
      })
    }
    const [editData,setEditData] = useState({})

    return (
            <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className='flex items-center gap-2 '>
                    <img className='w-[54px] h-[54px] rounded-md' src={job.logo} alt="" />
                    <div className='text-left'>
                        <Link to={`/find-jobs/single-job/${job._id}`}>
                        <p className='hover:text-blue-600'>{job.title}</p>
                        </Link>
                        <p className='flex gap-4 text-xs font-normal mt-2'>
                            <span className='flex items-center gap-1'>
                                <RiSuitcase2Line />
                                {job.company}</span>
                            <span className='flex items-center gap-1'>
                                <GoLocation />
                                {job.location}</span>
                        </p>
                    </div>
                  </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <Link className='text-blue-700 underline font-medium'>3+ Applied</Link>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                   <p className='text-xs'> October 27, 2017</p>
                   <p className='text-xs'>April 25, 2011</p>
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <p className={`${job.isVisible?'text-green-600 bg-green-50':'bg-red-50 text-red-600'} p-3 rounded-md`}>{job.isVisible? 'Active':'Deactived'}</p>
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                   <div className='flex gap-1 items-center'>
                    <button onClick={()=>handleUpdateVisiblity(job._id)} title="Deactive Job" className='bg-blue-50 p-2 text-blue-700 hover:bg-blue-500 hover:text-white rounded-md'>
                        {/* Hide / Unhide Job */}

                       {
                        loading?<p className='animate-bounce'>...</p>:  job.isVisible? <HiEyeOff /> : <HiEye />
                       }
                        </button>
                        {/* Edit Job */}
                    <Link to={`/edit-job/${job._id}`} title="Edit Job" className='bg-blue-50 p-2 text-blue-700 hover:bg-blue-500 hover:text-white rounded-md'><BiPen /></Link>
                        {/* Delete Job */}
                    <button onClick={()=>handleDeleteData(job._id)} title="Delete Job" className='bg-rose-50 p-2 text-red-700 hover:bg-red-500 hover:text-white rounded-md'>{
                      dLoading ? <p className='animate-ping'>...</p>:<BiTrash />
                    }</button>
                   </div>
                    </td>
                  </tr>
    );
};

export default ManageJob;