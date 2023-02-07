import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import SingleBlog from './SingleBlog';

const CandidateManageBlog = () => {
    const {user,dbUser} = useContext(AuthContext)
    const [deleted,setDeleted] = useState(false)
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/blogPost?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            console.log(data);
        })
    }, [user?.email,blogs,dbUser,deleted]);
    return (
        <div className='bg-gray-100 w-full md:mx-12 mt-6 rounded-2xl p-4
        '>
            <div>
                <h3 className='text-xl'>Manage Blogs</h3>
            </div>
            <div className=''>
                {
                    blogs.map(blog=><SingleBlog setDeleted={setDeleted} deleted={deleted} key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default CandidateManageBlog;