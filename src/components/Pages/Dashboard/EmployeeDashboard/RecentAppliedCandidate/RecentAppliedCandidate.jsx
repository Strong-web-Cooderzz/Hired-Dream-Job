import React, { useState } from 'react';
import { useEffect } from 'react';
import CandidateInfo from './CandidateInfo';

const RecentAppliedCandidate = () => {
    const [candidateInfo , setCandidateInfo]  = useState([])
    useEffect(()=> {
        fetch('/data/RecentAppliedCandidate/RecentAppliedCandidate.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCandidateInfo(data)
        })
    },[])
    return (
        <section className='mt-8 bg-white  rounded-md px-3 pt-3'>
            <h2 className='font-semibold'> Recent Applied Candidates  </h2>
            <div className='grid lg:grid-cols-2 py-5 px-3 gap-x-10 gap-y-5 grid-cols-1 mx-auto '>

              {
                candidateInfo.map(candidateInfoData => <CandidateInfo key={candidateInfoData.id}
                    candidateInfoData ={candidateInfoData}
                    > </CandidateInfo>)
              }
            </div> 
        </section>
    );
};

export default RecentAppliedCandidate;    