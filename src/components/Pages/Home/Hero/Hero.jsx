import React from "react";
import heroImg from "../../../../assets/hero2.png";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Companies from "./Companies";

const Hero = () => {
  return (
    <div className="md:pl-20 lg:pl-24">
      <div className="w-full flex text-center sm:text-left  relative">
        <div className="lg:w-7/12 mx-8 z-10 flex items-center justify-center pt-24 sm:pt-56">
          <div>
            {/* Title */}
            <h2 className="text-4xl font-bold">
              There Are <span className="text-[#1967d2]">93,178</span> <br />
              Postings Here For you!
            </h2>
            {/* Small title */}
            <p className="py-6 text-sm">
              Postings Here For you! Find Jobs, Employment & Career
              Opportunities
            </p>

            <div>
              <div>
                {/* Search Form */}
                <form className="sm:flex  items-center sm:border-for-form  border-none bg-white md:w-full rounded-full">
                  <div className="relative">
                    <span className="absolute left-2 top-5 ">
                      <FiSearch className="text-md" />
                    </span>
                    {/* Input for keyword or title */}
                    <input
                      placeholder="Job title, keywords, or company"
                      className="border-2 sm:border-none px-8 w-full sm:w-auto outline-none md:px-8 rounded-full text-sm py-4"
                      type="text"
                    />
                  </div>
                  <div className="relative ">
                    <span className="absolute left-2 top-5 ">
                      <GoLocation className="text-md" />
                    </span>
                    {/* Input for city or post code */}
                    <input
                      placeholder="City or postcode"
                      className=" outline-none px-8 w-full sm:w-auto text-sm border-2 sm:border-none rounded-full py-4"
                      type="text"
                    />
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-400 h-12 my-1 mr-1 text-white w-28 rounded-full px-4 py-2">
                    Find jobs
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full">
            {/* Right side image */}
          <img
            src={heroImg}
            className="w-full left-40 sm:left-auto sm:w-[65%] absolute top-0 sm:right-0"
            alt=""
          />
        </div>
       
      </div>
      {/* Company Slider */}
      <div className="md:w-7/12 mt-12 flex justify-center w-full">
     <Companies />
     </div>
    </div>
  );
};

export default Hero;
