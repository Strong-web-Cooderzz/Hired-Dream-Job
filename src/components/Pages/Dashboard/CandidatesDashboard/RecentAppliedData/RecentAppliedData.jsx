import React, { useState } from 'react';
import { useEffect } from 'react';
import CompanyInfo from './RecentAppliedInfo';

const RecentAppliedData = () => {
    const [companyInfo , setCompanyInfo]  = useState([])
    useEffect(()=> {
        fetch('/data/RecentAppliedCompany/RecentAppliedCompany.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCompanyInfo(data)
        })
    },[])
    return (
        <section className='mt-8 bg-white  rounded-md'>
            <div className='grid lg:grid-cols-2 py-5 px-3 gap-x-10 gap-y-5 grid-cols-1 mx-auto '>

              {
                companyInfo.map(companyInfoData => <CompanyInfo key={companyInfo.id}
                    companyInfoData ={companyInfoData}
                    > </CompanyInfo>)
              }
            </div> 
        </section>
    );
};

export default RecentAppliedData;    