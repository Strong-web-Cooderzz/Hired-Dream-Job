import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CompanyInfo = ({companyInfoData}) => {
    const {name, logo, location} = companyInfoData ;
    return (
        <div className='border lg:mt-0 mt-5 flex gap-10 p-4 hover:bg-slate-50 shadow-md rounded-md'>
            <div className='w-16 h-16 rounded-full flex items-center justify-center bg-slate-200'>
            <img  src={logo} alt='logo' className='w-12 h-12 rounded-full ' />
            </div>
            <div className=''>
                <h2 className='font-semibold'> {name} </h2>
                <h4 className='flex items-center'> <FaMapMarkerAlt /> {location} </h4>
            </div>
            
        </div>
    );
};

export default CompanyInfo;