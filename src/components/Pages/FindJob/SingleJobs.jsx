import React from "react";
import { TfiBag } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import { BsBookmark, BsClock, BsHourglassSplit } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import {
  AiOutlineCalendar,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiCoinsFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../assets/logos/figma.png";
import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";

const SingleJobs = () => {
  return (
    <div>
      <div className="lg:flex block mt-10 gap-10">
        <div className="basis-2/3">
          <div className="m-6 lg:m-0">
            <h1 className="text-2xl font-medium ">Product Manager, Studio</h1>
            <div className="flex items-center gap-5 flex-wrap">
              <p className="flex items-center gap-1">
                <span>
                  <TfiBag />
                </span>
                Invision
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <GoLocation />
                </span>
                London, UK
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <BsClock />
                </span>
                11 hours ago
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <GiMoneyStack />
                </span>
                $35k - $45k
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                Full Time
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-500">
                Urgent
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-500">
                Private
              </span>
            </div>
          </div>
          <div>
            <div className="p-5 border mt-10 mb-5 rounded-md">
              <h3 className="text-xl font-medium mb-3">Job Description</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 lg:block">
                <div className="block lg:flex gap-10 md:my-5">
                  <div className="flex items-center gap-5">
                    <p>
                      <AiOutlineCalendar className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Date Posted:
                      </span>
                      Posted 1 hours ago
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      <BsHourglassSplit className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Expiration date:
                      </span>
                      April 06, 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      <GoLocation className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Location:
                      </span>
                      London, UK
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      <BiUser className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Job Title:
                      </span>
                      Designer
                    </p>
                  </div>
                </div>
                <div className="block lg:flex gap-10 md:my-5">
                  <div className="flex items-center gap-5">
                    <p>
                      <BsClock className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Hours:
                      </span>
                      50h / week
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      <RiCoinsFill className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Rate:
                      </span>
                      $15 - $25 / hour
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      <GiMoneyStack className="text-2xl text-blue-500" />
                    </p>
                    <p className="text-black/75">
                      <span className="block font-semibold text-black">
                        Salary:
                      </span>
                      $35k - $45k
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div>
              <h1 className="text-xl font-medium mb-3">Job Description</h1>
              <p className="text-black/70 text-justify">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-medium my-5">Key Responsibilities</h1>
              <ul className="text-black/70 text-justify list-disc space-y-5">
                <li>
                  Be involved in every step of the product design cycle from
                  discovery to developer handoff and user acceptance testing.
                </li>
                <li>
                  Work with BAs, product managers and tech teams to lead the
                  Product Design
                </li>
                <li>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately reflect the
                  design specifications.
                </li>
                <li>
                  Accurately estimate design tickets during planning sessions.
                </li>
                <li>
                  Contribute to sketching sessions involving
                  non-designersCreate, iterate and maintain UI deliverables
                  including sketch files, style guides, high fidelity
                  prototypes, micro interaction specifications and pattern
                  libraries.
                </li>
                <li>
                  Ensure design choices are data led by identifying assumptions
                  to test each sprint, and work with the analysts in your team
                  to plan moderated usability test sessions.
                </li>
                <li>
                  Design pixel perfect responsive UI’s and understand that
                  adopting common interface patterns is better for UX than
                  reinventing the wheel
                </li>
                <li>
                  Present your work to the wider business at Show & Tell
                  sessions.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-medium my-5">Skill & Experience</h1>
              <ul className="text-black/70 text-justify list-disc space-y-5">
                <li>
                  You have at least 3 years’ experience working as a Product
                  Designer.
                </li>
                <li>
                  You have experience using Sketch and InVision or Framer X
                </li>
                <li>
                  You have some previous experience working in an agile
                  environment – Think two-week sprints.
                </li>
                <li>
                  You are familiar using Jira and Confluence in your workflow
                </li>
              </ul>
            </div>
            <div className="my-16 flex flex-wrap items-center">
              <span className="text-xl font-medium my-5">Share this job</span>
              <div>
                <button className="bg-indigo-900 py-2 px-4 text-white rounded-md ml-6">
                  Facebook
                </button>
                <button className="bg-indigo-400 py-2 px-4 text-white rounded-md ml-6">
                  Twitter
                </button>
                <button className="bg-indigo-600 py-2 px-4 text-white rounded-md ml-6">
                  Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 px-5 lg:px-0">
          <div>
            <div className="flex gap-5 items-center">
              <button className="bg-blue-500 w-full py-3 rounded-md text-white cursor-pointer">
                Apply For Job
              </button>
              <button className="p-4 text-blue-500 bg-blue-50 rounded-md">
                <BsBookmark />
              </button>
            </div>
            <div className="bg-black/5 p-5 rounded-lg mt-8">
              <div className="flex gap-5 items-center">
                <img src={logo} alt="" />
                <div>
                  <h3 className="text-xl font-medium">Invision</h3>
                  <Link to="/" className="text-blue-500 text-sm">
                    View company profile
                  </Link>
                </div>
              </div>
              <div className="mt-5 space-y-5">
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">
                    Primary industry:
                  </p>
                  <p className="font-medium text-black/50">Software</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">
                    Company size:
                  </p>
                  <p className="font-medium text-black/50">501-1,000</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">
                    Founded in:
                  </p>
                  <p className="font-medium text-black/50">2011</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">Phone:</p>
                  <p className="font-medium text-black/50">123 456 7890</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">Email:</p>
                  <p className="font-medium text-black/50">info@joio.com</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">Location:</p>
                  <p className="font-medium text-black/50">London, UK</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-lg text-black/80 font-medium">
                    Social media:
                  </p>
                  <p className="font-medium flex items-center gap-1 text-black/50">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                    <FaLinkedinIn />
                  </p>
                </div>
                <button className="text-blue-500 bg-blue-200 w-full py-3 rounded-md">
                  https://hdj.netlify.app/
                </button>
              </div>
            </div>
            <div className="bg-black/5 p-5 rounded-lg mt-8">
              <div>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-8">
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mt-8">
                <textarea
                  className="w-full h-32 bg-white resize-none text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-medium mt-5">Related Jobs</h1>
        <p className="text-black/70 mt-3">2020 jobs live - 293 added today.</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-10">
          <div className="rounded-lg bg-white shadow">
            <img
              src={logo}
              className="aspect-video mx-auto object-cover"
              alt=""
            />
            <div className="p-4">
              <h3 className="text-xl text-center font-medium text-gray-900">
                Software Engineer (Android), Libraries
              </h3>
              <p className="mt-1 text-gray-500">
                Sailboat UI helps streamline software projects, sprints, tasks,
                and bug tracking.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Full Time
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
                  Urgent
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  Private
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow">
            <img
              src={logo}
              className="aspect-video mx-auto object-cover"
              alt=""
            />
            <div className="p-4">
              <h3 className="text-xl text-center font-medium text-gray-900">
                Software Engineer (Android), Libraries
              </h3>
              <p className="mt-1 text-gray-500">
                Sailboat UI helps streamline software projects, sprints, tasks,
                and bug tracking.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Full Time
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
                  Urgent
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  Private
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow">
            <img
              src={logo}
              className="aspect-video mx-auto object-cover"
              alt=""
            />
            <div className="p-4">
              <h3 className="text-xl text-center font-medium text-gray-900">
                Software Engineer (Android), Libraries
              </h3>
              <p className="mt-1 text-gray-500">
                Sailboat UI helps streamline software projects, sprints, tasks,
                and bug tracking.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Full Time
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
                  Urgent
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  Private
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow">
            <img
              src={logo}
              className="aspect-video mx-auto object-cover"
              alt=""
            />
            <div className="p-4">
              <h3 className="text-xl text-center font-medium text-gray-900">
                Software Engineer (Android), Libraries
              </h3>
              <p className="mt-1 text-gray-500">
                Sailboat UI helps streamline software projects, sprints, tasks,
                and bug tracking.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Full Time
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
                  Urgent
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  Private
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobs;
