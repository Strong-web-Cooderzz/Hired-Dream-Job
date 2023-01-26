import React, { useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';

const SIngleCandidate = ({candidate}) => {

    

    const [date, setDate] = useState("");
    const [hover, setHover] = useState();

    const {fullName,type,photo,candidateData,email,_id} = candidate
    return (
        <div>
                <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="lg:flex gap-3 items-center justify-between w-full border p-6 rounded-md"
            >
              <div className="md:w-full flex justify-center w-full lg:w-[20rem] lg:h-24">
                <img
                  className="md:w-44 lg:w-24 lg:h-24 rounded-full"
                  src={photo}
                  alt=""
                />
              </div>
              <div className="flex w-full justify-center lg:justify-start lg:text-left text-center">
               <div className="flex flex-col gap-2 justify-center lg:justify-start">
               <Link to={`/candidate/${_id}`}><h3 className="text-2xl">{fullName}</h3></Link>
                <div className="flex flex-wrap md:w-96 gap-3">
                  <p className="w-24">{candidateData?.Category}</p>
                  <p className="flex items-center justify-center gap-2">
                    <GrLocation />
                   <p className="w-24">{candidateData?.City +', '+ candidateData?.Country}</p>
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <GiMoneyStack /> <p className="w-24">$99 / hour</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <p className="bg-blue-100 text-gray-500 px-3 rounded-full">
                    App
                  </p>
                  <p className="bg-blue-100 text-gray-500 px-3 rounded-full">
                    Design
                  </p>
                  <p className="bg-blue-100 text-gray-500 px-3 rounded-full">
                    Digital
                  </p>
                </div>
               </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:gap-5">
                {hover ? (
                  <div className=" ">
                    <FiBookmark className="text-4xl mt-3 duration-500 bg-gray-200 rounded-full p-2" />
                  </div>
                ) : (
                  <div className=" ">
                    <FiBookmark className="text-4xl duration-500 text-transparent rounded-full p-2" />
                  </div>
                )}
                <div>
                  <Link to={'/candidate'} className="bg-blue-100 inline-block my-7 hover:bg-blue-500 hover:text-white hover:transition transition hover:duration-700 duration-700 px-7 py-4 rounded-md text-blue-500">
                     Profile
                  </Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default SIngleCandidate;