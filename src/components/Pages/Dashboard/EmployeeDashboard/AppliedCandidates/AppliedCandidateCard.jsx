import React from 'react';

const AppliedCandidateCard = ({candidateInfo}) => {
  const 
{candidateName,candidateMessage,candidateEmail,applyDate,jobTitle,jobType,candidateResume,_id} = candidateInfo;

console.log(candidateInfo)
    return (
        <div>
          <div className="flex justify-center w-full h-full">
  <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div className="py-3 px-6 border-b border-gray-300">
      Candidate  name:   <span className='font-semibold'> {candidateName} </span>
    </div>
    <div className="p-6 text-start">
      <h5 className="text-gray-900 text-xl mb-2"> {jobTitle} </h5>
      <h2> Job type: {jobType} </h2>
      <p className="text-gray-700 text-base mb-4">
        {candidateMessage}
      </p>
      <p> Email: {candidateEmail} </p>
      <p> Applied date: {applyDate} </p>
       <a className='text-blue-500 font-medium hover:text-blue-700 ' href={candidateResume} > My Resume </a> 
      <button type="button" className=" inline-block float-right mt-2 mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out">  Delete </button>
    </div>
  
  </div>
   </div>
    </div>
    );
};

export default AppliedCandidateCard;