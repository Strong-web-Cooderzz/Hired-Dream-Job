import React, { useContext, useEffect } from 'react';
import {AuthContext } from '../../AuthProvider/AuthProvider'
const UserProfile = () => {
  const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user?.email])
    return (
        <div>
            
        </div>
    );
};

export default UserProfile;