import React from 'react';
import { Link } from 'react-router-dom';

const MyAllJobAppliedCard = ({appliedJobInfo}) => {
    const {candidateName,applyDate,candidateMessage , candidateResume,company,companyLocation,companyType,jobTitle,jobType
    } = appliedJobInfo ;
    console.log(appliedJobInfo)
    return (
        <div>
    <div className="flex justify-center ">
  <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div className="py-3 px-6 border-b border-gray-300">
      Company  name:   <span className='font-semibold'> {company} </span>
    </div>
     <p> Company  type: {companyType} </p>
    <div className="p-6 text-start">
      <h5 className="text-gray-900 text-xl mb-2"> {jobTitle} </h5>
      <h2 > Candidate name:  {candidateName} </h2>
      <h2> Job type: {jobType} </h2>
      <p className="text-gray-700 text-base mb-4">
        {candidateMessage}
      </p>
      <p> Company location:  {companyLocation} </p>
      <p> Applied date: {applyDate} </p>
       <a className='text-blue-500 font-medium hover:text-blue-700 ' href={candidateResume} > My Resume </a> 
      <button type="button" className=" inline-block float-right mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out">  Delete </button>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default MyAllJobAppliedCard;