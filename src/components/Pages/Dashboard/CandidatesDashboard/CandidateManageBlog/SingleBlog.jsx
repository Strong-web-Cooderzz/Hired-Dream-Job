import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleBlog = ({blog}) => {
    const handleDeletePost = id =>{
        fetch(`${import.meta.env.VITE_API}/deletePost/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.error('Post Deleted!')
        })
    }
    return (
        <div className='bg-blue-50 shadow-sm mt-2 rounded-md flex items-center gap-2 '>
        <div className='w-24 rounded-xl h-20'>
            <img src={blog.image} className='w-24 rounded-xl h-20 object-cover object-center' alt="" />
        </div>
        <div className='w-full'>
            <h3 className='font-bold text-blue-600'>{blog.title}</h3>
            <p>{blog.details.slice(0,150)}</p>
           <div className='flex '>
           <Link className='text-blue-500 mx-3 font-bold' to={`/dashboard/edit_blog/${blog._id}`}>Edit</Link>
            <Link className='text-green-500 mx-3 font-bold' to={`/singelArticles/${blog._id}`}>View</Link>
<div>
<div className="dropdown inline-block">
  <button
    className="
    text-rose-600
    font-bold
      dropdown-toggle
      items-center
    "
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   Delete
  </button>
  <ul
    className="
      dropdown-menu
      min-w-max
      absolute
      bg-white
      border
      text-base
      z-50
      float-left
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
    "
    aria-labelledby="dropdownMenuButton1"
  >
    <div className='flex  gap-3'>
        <Link className='text-blue-700 bg-blue-100 py-3 px-4 border-blue-500 border rounded-md'>Cancel</Link>
        <button onClick={()=>handleDeletePost(blog._id)} className='rounded-md py-3 bg-rose-100 text-rose-500 border-red-500 border px-4 font-bold'>Confirm</button>
    </div>
   
  </ul>
</div>
</div>
           </div>
</div>
            
        </div>
    );
};

export default SingleBlog;