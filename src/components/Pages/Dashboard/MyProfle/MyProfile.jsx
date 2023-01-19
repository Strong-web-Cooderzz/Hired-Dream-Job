import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-full h-screen bg-slate-200'>
           <div>
            <h2 className='text-2xl font-semibold '>{user?.user?.displayName} </h2>
           <h3> Update  My Profile  </h3>

            </div>            
        </div>
    );
};

export default MyProfile;