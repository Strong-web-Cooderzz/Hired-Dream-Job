
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CategorySelect } from "./Select/CategorySelect";
import { GenderSelect } from "./Select/GenderSelect";
import Leftside from "./Sidebar/Leftside";

const Candidates = () => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  console.log(minValue, maxValue);

  const [date, setDate] = useState("");
  const [hover, setHover] = useState();
  console.log(hover);

  return (
    <div className="bg-[#e5ecfa]">
      <div>
        <div className="text-center w-full h-44 flex justify-center items-center">
          <div>
            <h3 className="text-2xl font-semibold">Candidates</h3>
            <p className="text-sm">
              <Link to="/">Home</Link> / Candidates
            </p>
          </div>
        </div>
      
        <div className="md:flex bg-white px-6 py-6 gap-8 relative">
       
          {/* Left Side */}
         <Leftside />
          {/* Right side */}
          <div className="md:w-8/12 ">
         <div className="flex md:block justify-center">
         <div className="p-4 md:flex  justify-between">
          <div className="flex gap-2">
            <h3>10 Jobs</h3>
            <h3 className=" md:hidden">Filter</h3>
          </div>
          <div className="flex gap-2">
            <CategorySelect />
            <CategorySelect />
          </div>
        </div>
         </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="lg:flex gap-3 items-center justify-between w-full border p-6 rounded-md"
            >
              <div className="md:w-full flex justify-center w-full lg:w-64 lg:h-24">
                <img
                  className="md:w-44 lg:w-24 lg:h-24 rounded-full"
                  src="https://superio-next.vercel.app/images/resource/candidate-1.png"
                  alt=""
                />
              </div>
              <div className="flex w-full justify-center text-center">
               <div className="flex flex-col gap-2 justify-center">
               <h3 className="text-2xl">Darlene Robertson</h3>
                <div className="flex flex-wrap md:w-96 gap-3">
                  <p className="w-24">UI Designer</p>
                  <p className="flex items-center justify-center gap-2">
                    <GrLocation />
                   <p className="w-24"> London, UK</p>
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
                  <Link className="bg-blue-100 inline-block my-7 hover:bg-blue-500 hover:text-white hover:transition transition hover:duration-700 duration-700 px-7 py-4 rounded-md text-blue-500">
                     Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;