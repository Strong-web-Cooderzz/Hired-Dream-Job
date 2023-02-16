import React from 'react';
import Lottie from "lottie-react";
import profile from "../../assets/Loatte/profile.json";
const Loading = () => {
    return (
        <div className='h-screen fixed-top bg-white  flex items-center'>
            <div className=' md:w-1/3 mx-auto'>
            <Lottie animationData={profile} loop={true} />
            </div>
        </div>
    );
};

export default Loading;