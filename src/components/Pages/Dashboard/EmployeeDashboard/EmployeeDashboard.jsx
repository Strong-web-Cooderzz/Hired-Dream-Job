import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import EmployerDashboardRight from './EmployerDashboardRight/EmployerDashboardRight';
import EmployerNotificationsFollower from './EmployerNotificationAndFollowers/EmployerNotificationsAndFollowers';
import RecentAppliedCandidate from './RecentAppliedCandidate/RecentAppliedCandidate';


const EmployeeDashboard = () => {
    return (
    <section className='w-full mt-5 px-5'>
       <div className='lg:flex w-full gap-5 '>
          {/* Left side of dashboard  */}
          <div className='bg-slate-300 lg:w-[25%] w-full h-14 p-3 lg:mb-0 mb-3'>
             <Link to={'/'} className=' flex items-center gap-2 hover:text-blue-700' > <BiHomeAlt className='text-blue-600' /> Employer Dashboard</Link> 
            </div>

            {/* right  side dashboard of employer  */}
            <div  className='w-full bg-slate-200 p-3 '>
             <EmployerDashboardRight> </EmployerDashboardRight>

             {/* employer dashboard notification and follower  */}
             <EmployerNotificationsFollower > </EmployerNotificationsFollower>

             {/* recent applied candidates  */}
             <RecentAppliedCandidate > </RecentAppliedCandidate>
            </div>
       </div>


     </section>
    );
};

export default EmployeeDashboard;