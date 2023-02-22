import React from 'react';
import { useContext } from 'react';
import { FaBell, FaBriefcase,  FaRegBookmark, FaRegCommentAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../../../AuthProvider/AuthProvider' ;

const EmployerDashboardRight = () => {
const {user} = useContext(AuthContext);
    return (
        <section >
        <div>
        <h2 className='font-semibold '>Hurray  {user?.displayName} </h2>
        <h3> Lets jump for find your Candidates . </h3>
        </div>
          {/* dashboard right top section  */}
          <div className='grid  mt-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-4  '>
           <Link to="/" >  
           <div className='bg-white  flex  p-2 lg:w-10/12 md:w-11/12 sm:w-full w-full justify-between rounded-sm cursor-pointer hover:bg-yellow-50'>
             <div className='h-12 w-12 flex justify-center items-center   bg-slate-200'>
               <FaBriefcase  className='text-blue-500 text-2xl ' />
             </div>
             <div>
                <h2 className='text-xl font-semibold text-blue-600 m-0'> 24</h2>
                <h3 className='py-0 m-0'> Job Posted </h3>
             </div>
            </div>
           </Link>

            <Link to="/" >  
            <div className='bg-white flex  p-2  justify-between lg:w-10/12 md:w-11/12 sm:w-full w-full  rounded-sm  hover:bg-yellow-50 '>
             <div className='h-12 w-12 flex justify-center items-center   bg-red-100'>
               <FaBell  className='text-red-500 text-2xl ' />
             </div>
             <div>
                <h2 className='text-xl font-semibold text-red-400 m-0'> 670 </h2>
                <h3 className='py-0 m-0'> Applications  </h3>
             </div>
            </div>
            </Link>


          <Link to="/"> 
          <div className='bg-white flex  p-2  justify-between lg:w-10/12 md:w-11/12 sm:w-full w-full  rounded-sm  hover:bg-yellow-50'>
             <div className='h-12 w-12 flex justify-center items-center   bg-yellow-100'>
               <FaRegCommentAlt  className='text-yellow-600 text-2xl ' />
             </div>
             <div>
                <h2 className='text-xl font-semibold text-blue-600 m-0'> 54</h2>
                <h3 className='py-0 m-0'> Message  </h3>
             </div>
            </div>
          </Link>

           <Link  to="/"> 
           <div className='bg-white flex  p-2  justify-between lg:w-10/12 md:w-11/12 sm:w-full w-full  rounded-sm  hover:bg-yellow-50'>
             <div className='h-12 w-12 flex justify-center items-center   bg-green-100'>
               <FaRegBookmark  className='text-green-500 text-2xl ' />
             </div>
             <div>
                <h2 className='text-xl font-semibold text-green-500 m-0'> 24</h2>
                <h3 className='py-0 m-0'> Short List </h3>
             </div>
            </div>
           </Link>


          </div>
        </section>
    );
};

export default EmployerDashboardRight;