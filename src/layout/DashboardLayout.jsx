import React, { useState } from "react";
import { useContext } from "react";
import { set } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { FcMenu, FcTodoList } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import AuthProvider, { AuthContext } from "../components/AuthProvider/AuthProvider";
import DashboardNavbar from "../components/shared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../components/shared/DashboardSidebar/DashboardSidebar";


const DashboardLayout = () => {
  const {dbUser} = useContext(AuthContext)
	const {loading} = useContext(AuthContext)
  console.log(dbUser);
  const [side, setSide] = useState(false);
  return (
    <div className="w-full" >
     <DashboardNavbar > </DashboardNavbar> 

      <div className="flex gap-4 ">
       <div >
        <div className="w-full p-0 m-0 hidden lg:inline-block">
						{!loading && <DashboardSidebar></DashboardSidebar>}
        </div>
     
       </div>
    
      <Outlet/>

  <div>

    <div className=" offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">Dashboard</h5>
        <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
       <ul>

          <NavLink to='/dashboard/ ' >  <li className="w-full active hover:bg-gray-200 px-4 py-2 text-base focus:bg-gray-200">My Dashboard </li></NavLink>

          {
  dbUser?.type==='Agency' ?   <li className="relative">
      <NavLink to='/dashboard/my_profile' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"> My Profile   </NavLink>
    </li>
    :
    <li className="relative">
    <NavLink to='/dashboard/my_profile' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out"> My Profile   </NavLink>
  </li>
}
  
{
  dbUser?.type==='Agency' &&  <li className="relative">
      <NavLink to='/dashboard/addpost' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200" href="#!"> Add 
      New Job </NavLink>
    </li>
}
    
          <NavLink to='/dashboard/my_allpost'>  <li className="w-full hover:bg-gray-200 px-4 py-2 text-base focus:bg-gray-200"> All Applicants</li></NavLink>
          <NavLink to='/'>  <li className="w-full hover:bg-gray-200 px-4 py-2 text-base 
          flex gap-2 items-center focus:bg-gray-200"> <FaHome className="text-blue-500" /> Back Home  </li></NavLink>
       </ul>
      </div>
    </div> 
    <div className='w-full '  >
   {/* <Outlet/> */}
   </div>
  </div>

 </div>
</div>
  );
};

export default DashboardLayout;
