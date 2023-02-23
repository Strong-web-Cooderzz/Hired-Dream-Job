import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import AppliedCandidateCard from './AppliedCandidateCard';
import Loading from './../../../../Loading/Loading';

const AppliedCandidates = () => {
    const { user, dbUser, loading } = useContext(AuthContext)
    const [candidateData, setCandidateData] = useState([])
    console.log(candidateData)
    // console.log(dbUser?._id)

    // find candidate who is applied of my job post 
    useEffect(() => {
        fetch(`http://localhost:5000/get_applied_candidate`, {
            headers: {
                'authorization': `bearer ${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCandidateData(data)
            })
    }, [user])

    if (loading) {
        return <Loading> </Loading>
    }

    return (
        <section className='w-full  py-3  px-2 bg-slate-200'>
            <h2 className='text-2xl py-2 font-medium'> Who is   applied  for this job {candidateData.length} </h2>
            <div className='w-full  '>
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

