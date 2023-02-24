import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import SingleBlog from './SingleBlog';

const CandidateManageBlog = () => {
    const {user,dbUser} = useContext(AuthContext)
    const [loading,setLoading] = useState(true)
    const [deleted,setDeleted] = useState(false)
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/blogPost?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            console.log(data);
            setLoading(false)
        })
    }, [user?.email,blogs,dbUser,deleted]);
    return (
        <div className='bg-gray-100 w-full md:mx-12 mt-6 rounded-2xl p-4
        '>
            <div>
                <h3 className='text-xl'>Manage Blogs</h3>
            </div>
                 {
                    loading ?
                    <div>
				 <div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
                <div className="flex p-4 space-x-4 sm:px-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-300"></div>
                  <div className=" flex w-full gap-5">
                    <div className="flex-1 py-2 space-y-4">
                      <div className="w-64 h-3 rounded bg-gray-300"></div>
                      <div className="w-8/12 h-3 rounded bg-gray-300"></div>
                      <div className="flex gap-2 ">
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
                <div className="flex p-4 space-x-4 sm:px-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-300"></div>
                  <div className=" flex w-full gap-5">
                    <div className="flex-1 py-2 space-y-4">
                      <div className="w-64 h-3 rounded bg-gray-300"></div>
                      <div className="w-8/12 h-3 rounded bg-gray-300"></div>
                      <div className="flex gap-2 ">
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
                <div className="flex p-4 space-x-4 sm:px-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-300"></div>
                  <div className=" flex w-full gap-5">
                    <div className="flex-1 py-2 space-y-4">
                      <div className="w-64 h-3 rounded bg-gray-300"></div>
                      <div className="w-8/12 h-3 rounded bg-gray-300"></div>
                      <div className="flex gap-2 ">
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                        <div className="bg-gray-300 h-5 w-12 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
			 </div>
                    : 
                    <div className=''>
                {
                    blogs.map(blog=><SingleBlog  setDeleted={setDeleted} deleted={deleted} key={blog._id} blog={blog} />)
                }
            </div>
                 }
            
           
        </div>
    );
};

export default CandidateManageBlog;