import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <div>
 <div className="w-[20vw] h-screen shadow-md bg-slate-50 px-1 ">
  <ul className="relative">
    <li className="relative">
      <NavLink to='/dashboard/my_dashboard' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"  data-mdb-ripple="true" data-mdb-ripple-color="dark"> My Dashboard </NavLink>
    </li>

    <li className="relative">
      <NavLink to='/dashboard/my_profile' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark"> My Profile   </NavLink>
    </li>

    <li className="relative">
      <NavLink to='/dashboard/addpost' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"> Add 
      New Post </NavLink>
    </li>
    <li className="relative">
      <NavLink to='/dashboard/my_allpost' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"> My All Post  </NavLink>
    </li>
  </ul>
</div>
 </div>
    );
};

export default DashboardSidebar;