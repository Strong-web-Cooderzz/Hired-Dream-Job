import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import AppliedCandidateCard from './AppliedCandidateCard';
import Loading from './../../../../Loading/Loading';

const AppliedCandidates = () => {
    const {user,dbUser,loading} = useContext(AuthContext)
    const [candidateData, setCandidateData] = useState([])
    console.log(candidateData)
    // console.log(dbUser?._id)
    
    // find candidate who is applied of my job post 
    useEffect(()=>  {
        fetch(`https://hdj-server.vercel.app/get_applied_candidate/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setCandidateData(data)
        
        })
    },[user?.email])

    if(loading){
        return <Loading> </Loading>
    }

    return (
     <section className='w-full  py-3  px-2 bg-slate-200'>
         <h2 className='text-2xl py-2 font-medium'> Who is   applied  for this job {candidateData.length} </h2>
            <div className='w-full  grid lg:grid-cols-3 gap-4'>
             {
              candidateData.map(candidateInfo => <AppliedCandidateCard 
                 candidateInfo={candidateInfo}
                > 
                </AppliedCandidateCard>
              )
            
            
             }
              
            </div>
        </section>
    );
};

export default AppliedCandidates;

