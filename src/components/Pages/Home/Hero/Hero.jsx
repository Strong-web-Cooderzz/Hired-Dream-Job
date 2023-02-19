import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Companies from "./Companies";
import { Form } from "react-router-dom";
import fetchData from "../../../../api/fetchData";
import Lottie from "lottie-react";
import hero from "../../../../assets/Loatte/hero4.json";
import blob from '../../../../assets/Hero/1.svg'
import blob2 from '../../../../assets/Hero/2.svg'
import bg from '../../../../assets/Hero/bg.svg'
import Loading from "../../../Loading/Loading";

const Hero = () => {
  const [formLoading, setFormLoading] = useState(false);
  // check whether form is empty or not
  const [isEmpty, setIsEmpty] = useState(true);
  const [jobCount, setJobCount] = useState("...");
  useEffect(() => {
    const fetchJobCount = async () => {
      try {
        const response = await fetchData.get("/job-counter");
        console.log(response);
        setJobCount(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobCount();
  }, []);

  return (
    <div className="md:pl-20 overflow-hidden lg:pl-24 ">
      <div className="w-full flex flex-col-reverse sm:flex-row text-black text-center sm:text-left  relative">
		<img className="absolute bottom-0 sm:top-0 w-44 opacity-20" src={blob} alt="" />
		{/* <img className="absolute top-20 left-96 w-44 opacity-20" src={blob2} alt="" /> */}
   
        <div className="lg:w-1/2 sm:pl-4 w-full lg:mx-0 z-10 flex items-center justify-center sm:justify-start pt-4 sm:pt-56">
          <div className="mb-2">
            {/* Title */}
            <h2 className="lg:text-4xl hero-font md:text-3xl sm:text-3xl text-3xl font-bold">
              There Are{" "}
              <span className="sm:text-[#1967d2] text-blue-200">
                {jobCount? jobCount:<Loading />}
              </span>{" "}
              <br />
              Postings Here For you!
            </h2>
            {/* Small title */}
            <p className="lg:py-6 md:py-4 py-3 text-sm">
              Postings Here For you! Find Jobs, Employment & Career
              Opportunities
            </p>


            <div>
              <div>
                {/* Search Form */}
                <Form
                  onSubmit={() => setFormLoading(true)}
                  method="post"
                  action="/jobs"
                  className="sm:flex items-center sm:border sm:border-[#ddd] sm:bg-white md:w-full rounded-full"
                >
                  <div className="relative">
                    <span className="absolute left-2 top-5 ">
                      <FiSearch className="text-md" />
                    </span>
                    {/* Input for keyword or title */}
                    <input
                      placeholder="Job title, keywords, or company"
                      className="border-2 text-black my-1 sm:my-0 sm:border-none px-8 w-full sm:w-auto outline-none md:px-8 rounded-full text-sm py-4"
                      type="text"
                      name="job-title"
                      required={isEmpty}
                    />
                  </div>
                  <div className="relative lg:mt-0 md:mt-0 mt-0 ">
                    <span className="absolute left-2 top-5 ">
                      <GoLocation className="text-md" />
                    </span>
                    {/* Input for city or post code */}
                    <input
                      onChange={(e) => e.target.value && setIsEmpty(false)}
                      placeholder="City or postcode"
                      className="outline-none px-8 my-1 sm:my-0 text-black w-full sm:w-auto text-sm border-2 sm:border-none rounded-full py-4"
                      type="text"
                      name="job-location"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`btn_round w-full sm:w-32 ${
                      formLoading &&
                      "bg-gray-300 hover:bg-gray-300 cursor-not-allowed lg:w-32"
                    }`}
                    disabled={formLoading}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 border-t-gray-600 border-x-transparent border-b-transparent animate-spin ${
                        !formLoading && "hidden"
                      }`}
                    ></div>
                    <span>Find jobs</span>
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* Right side image */}
          <div className="w-full sm:opacity-100 sm:absolute md:absolute lg:relative right-0 sm:w-96 lg:w-full">
            <Lottie className="w-full" animationData={hero} loop={true} />
          </div>
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
