import React from 'react';
import CandidateDashboardRight from './CandidateDashboardRight/CandidateDashboardRight';
import CandidatesNotificationsFollower from'./CandidatesNotificationsFollower/CandidatesNotificationsFollower';
import RecentAppliedCompany from './RecentAppliedCompany/RecentAppliedCompany';

const CandidatesDashboard = () => {
  
    return (
       <section className='w-full px-5'>
         <div className='w-full  lg:flex gap-5 '>
            {/* Left side of dashboard 
            <div className='bg-slate-300 lg:w-[25%] w-full h-14 p-3 lg:mb-0 mb-3'>
             <Link to={'/'} className=' flex items-center gap-2 hover:text-blue-700' > 
             <BiHomeAlt className='text-blue-600' /> Candidates Dashboard</Link> 
            </div> */}

            {/* right  side of dashboard  */}
            <div className='bg-slate-200 w-full  px-3 py-4 '>
               <CandidateDashboardRight > </CandidateDashboardRight>
            {/* candidates notification and follower   */}
            
             <CandidatesNotificationsFollower>  </CandidatesNotificationsFollower> 
            
             {/* Candidate recent applied company show with details  */}
             <RecentAppliedCompany > </RecentAppliedCompany>

            </div>
        
         </div>
       </section>
    );
};

export default CandidatesDashboard;