import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CategorySelect } from "./Select/CategorySelect";
import { GenderSelect } from "./Select/GenderSelect";

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
        <div className="flex bg-white px-6 py-6 gap-8">
          {/* Left Side */}
          <div className="bg-blue-50 p-4 w-4/12 rounded-md flex flex-col gap-3">
            <div>
              <p className="text-lg my-2">Search by Keywords</p>
              <fieldset className="w-full space-y-1 dark:text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-gray-100"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Job title, keywords, or company..."
                    className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <p className="text-lg my-2">Location</p>
              <fieldset className="w-full space-y-1 dark:text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <GrLocation />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder=" City or postcode"
                    className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <p className="text-sm my-2">Radius around selected destination</p>
              <MultiRangeSlider
                min={0}
                max={100}
                step={5}
                ruler={false}
                label={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
              />
              <div className="flex justify-center">
                <p className="bg-blue-300 w-20 text-center rounded-md p-1 text-sm">
                  {maxValue}km
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg my-2">Category</p>
              <CategorySelect />
            </div>
            <div>
              <p className="text-lg my-2">Candidate Gender</p>
              <GenderSelect />
            </div>
            <div>
              <p className="text-lg my-2">Date Posted</p>

              <div>
                <h3
                  onClick={() => setDate("all")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "all"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "all" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  All
                </h3>
                <h3
                  onClick={() => setDate("last")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "last"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "last" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  Last Hour
                </h3>

                <h3
                  onClick={() => setDate("24")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "24"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "24" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  Last 24 Hour
                </h3>
                <h3
                  onClick={() => setDate("7day")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "7day"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "7day" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  Last 7 Days
                </h3>
                <h3
                  onClick={() => setDate("14day")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "14day"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "14day" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  Last 14 Days
                </h3>
                <h3
                  onClick={() => setDate("30day")}
                  className="flex select-none cursor-pointer items-center"
                >
                  <p
                    className={`${
                      date === "30day"
                        ? "border bg-blue-600 rounded-full w-5 flex justify-center items-center h-5 mr-3"
                        : " bg-white-400 border-2 rounded-full w-5 h-5 mr-3"
                    }`}
                  >
                    {date === "30day" && (
                      <AiOutlineCheck className="text-white text-xs" />
                    )}{" "}
                  </p>{" "}
                  Last 30 Days
                </h3>
              </div>
            </div>
            <div>
              <p className="text-lg my-2">Experience</p>
              <div className="flex flex-col">
                <label
                  htmlFor="fresh"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input id="fresh" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Fresh
                </label>
                <label
                  htmlFor="1year"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input id="1year" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  1 Year
                </label>
                <label
                  htmlFor="2year"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input id="2year" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  2 Year
                </label>
                <label
                  htmlFor="3year"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input id="3year" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  3 Year
                </label>
                <label
                  htmlFor="4year"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input id="4year" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  4 Year
                </label>
              </div>
            </div>
            {/* Qualification */}
            <div>
              <p className="text-lg my-2">Qualification</p>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Certificate"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input
                      id="Certificate"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Certificate
                </label>
                <label
                  htmlFor="Associate"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input
                      id="Associate"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Associate Degree
                </label>
                <label
                  htmlFor="Bachelor"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input
                      id="Bachelor"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Bachelor Degree
                </label>
                <label
                  htmlFor="Master"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input
                      id="Master"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Master’s Degree
                </label>
                <label
                  htmlFor="Doctorate"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                >
                  <span className="relative mr-4">
                    <input
                      id="Doctorate"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-blue-600"></div>
                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                  </span>
                  Doctorate Degree
                </label>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="w-8/12">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex gap-3 items-center justify-between w-full border p-6 rounded-md"
            >
              <div>
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://superio-next.vercel.app/images/resource/candidate-1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl">Darlene Robertson</h3>
                <div className="flex gap-3">
                  <p>UI Designer</p>
                  <p className="flex items-center justify-center gap-2">
                    <GrLocation />
                    London, UK
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <GiMoneyStack /> $99 / hour
                  </p>
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
              <div className="flex items-center gap-5">
                {hover ? (
                  <div className=" ">
                    <FiBookmark className="text-4xl duration-500 bg-gray-200 rounded-full p-2" />
                  </div>
                ) : (
                  <div className=" ">
                    <FiBookmark className="text-4xl duration-500 text-transparent rounded-full p-2" />
                  </div>
                )}
                <div>
                  <Link className="bg-blue-100 hover:bg-blue-500 hover:text-white hover:transition transition hover:duration-700 duration-700 px-7 py-4 rounded-md text-blue-500">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex gap-3 items-center mt-6 justify-between w-full border p-6 rounded-md"
            >
              <div>
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://superio-next.vercel.app/images/resource/candidate-1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl">Darlene Robertson</h3>
                <div className="flex gap-3">
                  <p>UI Designer</p>
                  <p className="flex items-center justify-center gap-2">
                    <GrLocation />
                    London, UK
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <GiMoneyStack /> $99 / hour
                  </p>
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
              <div className="flex items-center gap-5">
                {hover ? (
                  <div className=" ">
                    <FiBookmark className="text-4xl duration-500 bg-gray-200 rounded-full p-2" />
                  </div>
                ) : (
                  <div className=" ">
                    <FiBookmark className="text-4xl duration-500 text-transparent rounded-full p-2" />
                  </div>
                )}
                <div>
                  <Link className="bg-blue-100 hover:bg-blue-500 hover:text-white hover:transition transition hover:duration-700 duration-700 px-7 py-4 rounded-md text-blue-500">
                    View Profile
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
