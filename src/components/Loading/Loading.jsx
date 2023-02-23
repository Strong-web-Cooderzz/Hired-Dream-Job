import React from 'react';
import Loading2 from './Loading2';
import Lottie from "lottie-react";
import loading from '../../assets/Loatte/paperplane.json'

const Loading = () => {
  return (
    <div>
      	<div className='flex justify-center items-center backdrop-blur-sm	 h-screen w-[100vw] z-50 absolute top-0 left-0'>
        <Lottie className="" animationData={loading} loop={true} />
        </div>
      <Loading2 />
    </div>
  );
};

export default Loading;