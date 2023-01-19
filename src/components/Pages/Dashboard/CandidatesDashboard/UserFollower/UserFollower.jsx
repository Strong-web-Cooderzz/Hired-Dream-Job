import React from 'react';

const UserFollowers = ({data}) => {
    const {name, image} = data ;
    return (
        <div className='bg-slate-50   hover:bg-slate-100 px-3 '>
            <div className='flex justify-start '>
            <img src={image}  className='w-10 h-10 my-2 rounded-full' alt='' />
            <div className='flex  flex-col ml-5'>
            <h2 className='font-semibold '> {name} </h2>
             <form > 
                <input type={'button'} value="Follow +" className='px-1 w-[80px] rounded-md h-6 py-0 border hover:bg-blue-300  cursor-pointer ' />
             </form>
            </div>
            </div>
            
        </div>
    );
};

export default UserFollowers;