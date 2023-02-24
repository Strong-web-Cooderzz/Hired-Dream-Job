import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';

const DashboardSidebar = () => {
  const {dbUser} = useContext(AuthContext)
    return (
        <div>
 <div className="w-[20vw] sticky top-0 h-full   px-1 ">
  <ul className="relative">
    <li className="relative">
						{/* <NavLink to='/dashboard' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"  data-mdb-ripple="true" data-mdb-ripple-color="dark">Dashboard</NavLink> */}
						<p className='font-bold text-lg text-center py-2'>Dashboard</p>
    </li>
{
  dbUser?.type==='Agency' ?   <li className="relative">
      <NavLink to='/dashboard/profile' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"> My Profile   </NavLink>
    </li>
    :
    <li className="relative">
    <NavLink to='/dashboard/profile' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200">My Profile</NavLink>
  </li>
}
  
{
  dbUser?.type==='Agency' && <>
   <li className="relative">
      <NavLink to='/dashboard/addpost' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">   Add 
      New Job </NavLink>
    </li>
    <li className="relative">
      <NavLink to='/dashboard/manage-jobs' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Manage Jobs</NavLink>
    </li>

    <li className="relative">
      <NavLink to='/dashboard/applied_candidates' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"> Applied candidates </NavLink>
    </li>
  </>
}
{
  dbUser?.type==='Candidate' && <>
   <li className="relative">
      <NavLink to='/dashboard/add_blog' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200" href="#!">   Add 
      New Blog </NavLink>
    </li>
   <li className="relative">
      <NavLink to='/dashboard/my_blogs' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200" href="#!"> Manage Blogs</NavLink>
    </li>
    <li className="relative">
      <NavLink to='/dashboard/applied-jobs' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200" href="#!">All Applied Jobs</NavLink>
    </li>
    <li className="relative">
      <NavLink to='/dashboard/my-meetings' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200" href="#!">My Meetings</NavLink>
    </li>
  </>
}
   
    
  </ul>
</div>
 </div>
    );
};

export default DashboardSidebar;
