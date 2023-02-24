import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const MangeAdminJob = () => {
  const editData = useLoaderData()
  const navigate = useNavigate('')
    const [startDate, setStartDate] = useState(new Date());
    const [jobType,setJobType] = useState('')
    const [urgent,setUrgent] = useState(false)
    const [companyType,setCompanyType] = useState('')
    const { register, handleSubmit,reset ,watch, formState: { errors } } = useForm({
      defaultValues: {
        'title':editData.title,
        'jobDescription':editData.jobDescription,
        'responsibilities':editData.responsibilities,
        'skills':editData.skills,
        'jobEmail':editData.jobEmail,
        'location':editData.location,
        'logo': editData.logo,
        'urgent':editData.urgent,
        'jobType':editData.jobType,
        'companyType':editData.companyType,
        'company':editData.company,
        'postTime':'1 hours ago',
        'expireDate':editData.expireDate,
        'trems':editData.trems,
        'workingHours':editData.workingHours,
        'salaryMin':editData.salaryMin,
        'salaryMax':editData.salaryMax,
        'rateMin':editData.rateMin,
        'rateMax':editData.rateMax,
        timestamp:1,
        isVisible:editData.isVisible
      }
    });
    const { logOut, user, dbUser } = useContext(AuthContext);

    const [loading,setLoading] = useState(false)

    const handleAddNewJob = (data) =>{ 
        // setLoading(true)
        const jobDetails = {
            'title':data.title,
            'jobDescription':data.jobDescription,
            'responsibilities':data.responsibilities,
            'skills':data.skills,
            'jobEmail':user.email,
            'location':data.location,
            'logo': dbUser.employData.photo,
            'urgent':urgent,
            'jobType':jobType,
            'companyType':companyType,
            'company':dbUser.employData.companyName,
            'postTime':'1 hours ago',
            'expireDate':startDate,
            'trems':data.trems,
            'workingHours':data.workingHours,
            'salaryMin':data.salaryMin,
            'salaryMax':data.salaryMax,
            'rateMin':data.rateMin,
            'rateMax':data.rateMax,
            timestamp:1,
            isVisible:true
            
            
        }
        console.log(jobDetails);
        fetch(`${import.meta.env.VITE_API}/jobsUpdate/${editData._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(jobDetails)             
        })
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
          console.log(data);
          toast.success('Job Updated')
          navigate('/dashboard/manage-jobs')
        })
    }


    return (
<div className="" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div className="modal-dialog max-w-2xl modal-dialog-centered relative w-full pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          Edit {editData?.title}
        </h5>
       
      </div>
      <form className='p-6 ' onSubmit={handleSubmit(handleAddNewJob)}>
    <div className="form-group mb-6 w-full">
      <input defaultValue={editData?.title}  {...register("title", { required: true })} type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Job Title"/>
    </div>
    <div className="form-group mb-6 w-full">
      <input defaultValue={editData?.location} {...register("location", { required: true })} type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Location"/>
    </div>
    {/* Action */}
    <div className=" flex ">
  <div className="mb-3 w-24">
    <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="1">Active</option>
        <option value="2">DeActive</option>
    </select>
  </div>
   {/* Action */}
   <div className="mb-3 w-24">
    <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Action</option>
        <option value="1">Delete</option>
        <option value="2">Edit</option>
        <option value="3">View</option>
    </select>
  </div>

</div>

   




    {/* Trems and condition */}
    <div className="form-group form-check text-center mb-6">
      <input type="checkbox"
        {...register("trems", { required: true })}
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck87" />
      <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Accept job Treams and condition</label>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" disabled={loading}>{loading?'Updating...':'Update Job'}</button>
  </form>
    
    </div>
  </div>
</div>
    );
};

export default MangeAdminJob;
