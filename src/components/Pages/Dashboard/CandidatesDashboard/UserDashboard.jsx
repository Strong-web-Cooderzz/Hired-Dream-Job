import React from 'react';
import DashboardNotificationsFollower from './DashboardNotificationsFollower/DashboardNotificationsFollower';
import RecentAppliedData from './RecentAppliedData/RecentAppliedData';
import UserDashboardRightPart from './UserDashboardRightPart/UserDashboardRightPart';

const UserDashboard = () => {
  
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
       
             <UserDashboardRightPart > </UserDashboardRightPart>
            {/* candidates notification and follower   */}
            
             <DashboardNotificationsFollower > </DashboardNotificationsFollower>            
             {/* Candidate recent applied company show with details  */}
             <RecentAppliedData > </RecentAppliedData>
            </div>
        
         </div>
       </section>
    );
};

export default UserDashboard;