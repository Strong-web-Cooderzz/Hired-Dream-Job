import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/shared/DashboardNavbar/DashboardNavbar';
import Navbar from '../components/shared/Navbar/Navbar';
import CandidateAddpost from './../components/Pages/Dashboard/CandidatesDashboard/CandidateAddpost/CandidateAddpost';

const DashboardLayout = () => {
    return (
        <div>
          <Navbar > </Navbar>
           <DashboardNavbar  > </DashboardNavbar>
             <Outlet > </Outlet>
     <div class="flex space-x-2 lg:hidden">
  <div>
  
    <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      Button with data-bs-target
    </button>

    <div class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header flex items-center justify-between p-4">
        <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel"> Dream Hired Job</h5>
        <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
        <div>

        </div>

        <div class="  mt-4">
         <DashboardNavbar> </DashboardNavbar>


        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;