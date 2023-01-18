import React from "react";
import { BiBookmark, BiCalendar, BiDollar, BiUser } from "react-icons/bi";
import { BsClock, BsCurrencyExchange } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { IoLanguage } from "react-icons/io5";
import {
    FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMoneyBill,
  FaMoneyBillWave,
  FaMoneyBillWaveAlt,
  FaTwitter,
} from "react-icons/fa";
import { GiMoneyStack, GiSandsOfTime } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter } from "react-icons/fi";

const Candidate = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 flex-wrap justify-center items-center md:justify-between px-12 py-11 ptext-blue-500 y-12 bg-blue-50">
          <div className="flex gap-2 flex-wrap justify-center md:text-left text-center items-center "text-blue-500 >
            <div>
              <img
                src="https://superio-next.vercel.app/images/resource/candidate-1.png"
                alt=""
              />
            </div>
            <div className="flex gap-2 justify-center">
              <div className="text-gray-7text-blue-500 00 md:text-left text-center ">
                <h2 className="text-xl font-semibold">Darlene Robertson</h2>
                <div className="flex flex-wrap items-center gap-3">
                  <p>UI Designer</p>
                  <p className="flex items-center gap-1">
                    <GoLocation /> London, UK
                  </p>
                  <p className="flex items-center gap-1">
                    <GrMoney /> $99 / hour
                  </p>
                  <p className="flex items-center gap-1">
                    <BsClock /> Member Since,Aug 19, 2020
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="px-2 text-blue-5text-blue-500 00 bg-blue-200 rounded-full">
                    App
                  </p>
                  <p className="px-2 text-blue-500 bg-blue-200 rounded-full">
                    Design
                  </p>
                  <p className="px-2 text-blue-500 bg-blue-200 rounded-full">
                    Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  gap-3">
              <Link className="bg-blue-600 text-white px-6 rounded-md py-4">
                Download CV
              </Link>
              <button className="bg-blue-100 flex text-blue-500 justify-center items-center w-16 text-xl rounded-md">
                <BiBookmark />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="gap-2 md:flex  md:mx-12">
        <div className="md:w-8/12 ">
          <div className="my-2 mx-7 text-xl">
            <h3 className="text-lg">Candidates About</h3>
          </div>
          <div className="px-2">
            <img
              className="w-full"
              src="https://superio-next.vercel.app/images/resource/video-img.jpg"
              alt=""
            />
            <p className="my-6">
              Hello my name is Nicole Wells and web developer from Portland. In
              pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla
              id orci laoreet tempor non consequat enim. Sed vitae aliquam
              velit. Aliquam ante erat, blandit at pretium et, accumsan ac est.
              Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem
              condimentum, et pulvinar tortor luctus. Suspendisse condimentum
              lorem ut elementum aliquam.
            </p>
            <p className="my-6">
              Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
              blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
              molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar
              tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
              Mauris nec erat ut libero vulputate pulvinar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 ">
              <img
                src="https://superio-next.vercel.app/images/resource/employers-single-1.png"
                alt=""
              />
              <img
                src="https://superio-next.vercel.app/images/resource/employers-single-2.png"
                alt=""
              />
              <img
                src="https://superio-next.vercel.app/images/resource/employers-single-3.png"
                alt=""
              />
              <img
                src="https://superio-next.vercel.app/images/resource/employers-single-4.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w-4/12 mx-3 mt-12 flex flex-col gap-3">
          <div className="w-full flex-col flex gap-4 bg-blue-50 rounded-md p-5">
            <div className="flex gap-2">
              <BiCalendar className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Experience:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <GiSandsOfTime className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Age:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <BsCurrencyExchange className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Current Salary:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <GiMoneyStack className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Expected Salary:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <BiUser className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Gender:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <IoLanguage className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Language:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <SlGraduation className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-lg">Education Level:</h3>
                <p>0-2 Years</p>
              </div>
            </div>
          </div>
          <div className="w-full flex-col flex gap-4 bg-blue-50 rounded-md p-5">
           <div className="flex items-center justify-between">
            <h3>Social media</h3>
            <div className="flex items-center gap-2">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
            </div>
           </div>
          </div>
          <div className="w-full flex-col flex gap-4 bg-blue-50 rounded-md p-5">
           <div className=" items-center justify-between">
            <h3>Professional Skills</h3>
            <div className="flex flex-wrap items-center gap-2">
               <p className="px-2 bg-blue-100 rounded-full">HTML</p>
               <p className="px-2 bg-blue-100 rounded-full">HTML</p>
               <p className="px-2 bg-blue-100 rounded-full">HTML</p>
               <p className="px-2 bg-blue-100 rounded-full">HTML</p>
               <p className="px-2 bg-blue-100 rounded-full">HTML</p>
            </div>
           </div>
          </div>
          <div className="w-full flex-col flex gap-4 bg-blue-50 rounded-md p-5">
           <div className=" items-center justify-between">
            <h3 className="py-3">Contact Us</h3>
            <div className="flex flex-wrap items-center gap-2">
              <input className="px-3 py-3 w-full" type="text" name="" id="" placeholder="Your Name" />
              <input className="px-3 py-3 w-full" placeholder="Email Address" type="text" name="" id="" />
              <textarea className=" w-full h-32 p-4" placeholder="Message" ></textarea>
              <button className="w-full h-12 bg-blue-600 mt-3 hover:bg-blue-500 rounded-md text-white">Send Message</button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
