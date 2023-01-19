import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import Candidate from './../../Pages/Candidates/Candidate';

const DashboardNavbar = () => {
    return (
        <div>
         <div className="w-60 h-full shadow-md bg-white px-1 absolute">
  <ul className="relative">
    <li className="relative">
      <Link to='/dashboard/candidates_dashboard' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"  data-mdb-ripple="true" data-mdb-ripple-color="dark"> Candidate dashboard </Link>
    </li>

    <li className="relative">
      <Link to='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</Link>
    </li>
    <li className="relative">
      <Link to='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Sidenav link 2</Link>
    </li>
  </ul>
</div>
 </div>
    );
};

export default DashboardNavbar;