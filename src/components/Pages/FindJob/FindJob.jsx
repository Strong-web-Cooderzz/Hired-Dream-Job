import React, { useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import {
  AiOutlineCloseCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link, useActionData, useNavigate } from "react-router-dom";
import ScrollToTop from "../../../ScrollUp/ScrollToTop";
import fetchData from "../../../api/fetchData";

const FindJob = () => {
  const dataFromForm = useActionData();
  // requires when searching from home page
  // const [firstTime, setFirstTime] = useState(true);
  const firstTime = useRef(true);
  const formRef = useRef();
  const [newer, setNewer] = useState(true);
  const [jobType, setJobType] = useState("");
  const [time, setTime] = useState(0);
  // how many cards will be shown per page
  const [perPage, setPerPage] = useState("10");
  // which page user currently in
  const [page, setPage] = useState(1);
  // 1 seconds = 1000 miliseconds
  const second = 1000;
  const [experience, setExperience] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [count, setCount] = useState(0);
  const categoryRef = useRef();
  const navigate = useNavigate();

  const fetchFromServer = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const form = formRef.current;
    const searchString = form.search.value;
    const location = form.location.value;
    const sort = newer ? "new" : "old";
    setDataLoading(true);
    try {
      const response = await fetchData.get(`/find-jobs`, {
        params: {
          search: searchString,
          location,
          sort,
          type: jobType,
          time,
          "per-page": perPage,
          page,
          experience,
          category: categoryRef.current || "",
        },
      });
      console.log(response.data);
      setData(response.data.data);
      setCount(response.data.count);
      setDataLoading(false);
      setIsOpen(false);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  function search(e) {
    fetchFromServer(e);
  }

  // sends new fetch request when date posted or job type or is changed
  useEffect(() => {
    // fetch(`http://localhost:5000/find-jobs?search=${searchString}&location=${location}&sort=${sort}&type=${jobType}&time=${time}&per-page=${perPage}`)
    if (dataFromForm && firstTime.current) {
      console.log(dataFromForm);
      setDataLoading(true);
      if (dataFromForm.title || dataFromForm.location) {
        formRef.current.search.value = dataFromForm.title;
        formRef.current.location.value = dataFromForm.location;
      } else if (dataFromForm.category) {
        categoryRef.current = dataFromForm.category;
      }
      fetchFromServer();
      firstTime.current = false;
    } else {
      fetchFromServer();
    }
  }, [time, jobType, newer, perPage, experience, page]);

  return (
    <main className="">
      <div className="bg-gradient-to-r from-sky-400 to-purple-400 flex flex-col justify-center items-center py-6">
        <h1 className="font-semibold text-2xl text-white">Find Jobs</h1>
        <p className="text-white flex gap-2">
          <Link to="/" className="text-white underline">
            Home
          </Link>
          /<span className="text-white underline">Jobs</span>
        </p>
      </div>
      <div className="mt-0 relative lg:static">
        <div>
          <div className={`lg:hidden flex items-center justify-center mt-4`}>
            <button
              className={`text-blue-500 flex items-center justify-center py-3 px-4 rounded-md bg-blue-200`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <BsFilter className="mr-2" /> Filter
            </button>
          </div>
        </div>
        <div className="rounded-md grid lg:grid-cols-4">
          <div
            className={`left-0 ${
              isOpen ? "left-0" : "-translate-x-full"
            } bg-gray-50 lg:translate-x-0 transition-transform lg:col-span-1 p-6 pt-10 md:pt-6 absolute lg:static top-16 right-0 lg:top-auto lg:right-auto z-10`}
          >
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="absolute top-3 right-3 text-4xl lg:hidden"
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
            <form ref={formRef} onSubmit={(e) => search(e)}>
              <div>
                <h1 className="text-md mb-1">Search by keywords</h1>
                <div className="relative text-gray-600 focus:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <FiSearch className="text-xl" />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="search"
                    className="input_primary"
                    placeholder="Job title, keywords or company"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h1 className="text-md mb-1">Location</h1>
                <div className="relative text-gray-600 focus:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <GoLocation />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="location"
                    className="input_primary"
                    placeholder="City or Postcode"
                    autoComplete="off"
                  />
                </div>
              </div>
            </form>
            <div className="mt-8">
              <h1 className="text-md mb-1">Category</h1>
              <div
                onChange={(e) => {
                  categoryRef.current = e.target.value;
                  setPage(1);
                  fetchFromServer();
                }}
                className="border-2 border-gray-200 relative text-gray-600 focus-within:text-gray-400"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <BiCategory className="text-xl" />
                  </button>
                </span>
                <select className="select_primary pl-10">
                  <option value="">Select One Category</option>
                  <option
                    value="Accounting / Finance"
                    selected={dataFromForm?.category === "Accounting / Finance"}
                  >
                    Accounting / Finance
                  </option>
                  <option
                    value="Marketing"
                    selected={dataFromForm?.category === "Marketing"}
                  >
                    Marketing
                  </option>
                  <option
                    value="Design"
                    selected={dataFromForm?.category === "Design"}
                  >
                    Design
                  </option>
                  <option
                    value="Development"
                    selected={dataFromForm?.category === "Development"}
                  >
                    Development
                  </option>
                  <option
                    value="Human Resource"
                    selected={dataFromForm?.category === "Human Resource"}
                  >
                    Human Resource
                  </option>
                  <option
                    value="Automotive Jobs"
                    selected={dataFromForm?.category === "Automotive Jobs"}
                  >
                    Automotive Jobs
                  </option>
                  <option
                    value="Customer Service"
                    selected={dataFromForm?.category === "Customer Service"}
                  >
                    Customer Service
                  </option>
                  <option
                    value="Health and Care"
                    selected={dataFromForm?.category === "Health and Care"}
                  >
                    Health and Care
                  </option>
                  <option
                    value="Project Management"
                    selected={dataFromForm?.category === "Project Management"}
                  >
                    Project Management
                  </option>
                </select>
              </div>
            </div>
            <div>
              <div
                onChange={(e) => {
                  const value = e.target.value;
                  setPage(1);
                  if (value === "full-time") {
                    setJobType("Full Time");
                  } else if (value === "part-time") {
                    setJobType("Part Time");
                  } else if (value === "temporary") {
                    setJobType("Temporary");
                  } else {
                    setJobType("");
                  }
                }}
                className="mt-5 [&>div>label]:text-gray-600 [&>div>label]:ml-2"
              >
                <h1 className="text-md mb-1">Job type</h1>
                <div className="flex my-0">
                  <input type="radio" name="job-type" value="all" id="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div className="flex my-0">
                  <input
                    type="radio"
                    name="job-type"
                    value="full-time"
                    id="full-time"
                  />
                  <label htmlFor="full-time">Full Time</label>
                </div>
                <div className="flex my-0">
                  <input
                    type="radio"
                    name="job-type"
                    value="part-time"
                    id="part-time"
                  />
                  <label htmlFor="part-time">Part Time</label>
                </div>
                <div className="flex my-0">
                  <input
                    type="radio"
                    name="job-type"
                    value="temporary"
                    id="temporary"
                  />
                  <label htmlFor="temporary">Temporary</label>
                </div>
              </div>
            </div>
            <div
              onChange={(e) => {
                const value = e.target.value;
                setPage(1);
                if (value === "all") {
                  setTime(0);
                } else if (value === "last-hour") {
                  setTime(60 * 60 * second);
                } else if (value === "last-day") {
                  setTime(24 * 60 * 60 * second);
                } else if (value === "seven-day") {
                  setTime(7 * 24 * 60 * 60 * second);
                } else if (value === "fourteen-day") {
                  setTime(14 * 24 * 60 * 60 * second);
                } else if (value === "one-month") {
                  setTime(30 * 24 * 60 * 60 * second);
                } else {
                  setTime(0);
                }
              }}
              className="mt-6 [&>div>label]:text-md [&>div>label]:text-gray-600 [&>div>label]:ml-2"
            >
              <h1 className="text-md mb-1">Date Posted</h1>
              <div className="my-0">
                <input
                  id="all-date"
                  type="radio"
                  value="all"
                  name="date-posted"
                />
                <label htmlFor="all-date">All</label>
              </div>
              <div className="my-0">
                <input
                  id="last-hour"
                  type="radio"
                  value="last-hour"
                  name="date-posted"
                />
                <label htmlFor="last-hour">Last Hour</label>
              </div>
              <div className="my-0">
                <input
                  id="last-day"
                  type="radio"
                  name="date-posted"
                  value="last-day"
                />
                <label htmlFor="last-day">Last 24 Hour</label>
              </div>
              <div className="my-0">
                <input
                  id="seven-day"
                  type="radio"
                  name="date-posted"
                  value="seven-day"
                />
                <label htmlFor="seven-day">Last 7 Days</label>
              </div>
              <div className="my-0">
                <input
                  id="fourteen-day"
                  type="radio"
                  name="date-posted"
                  value="fourteen-day"
                />
                <label htmlFor="fourteen-day">Last 14 days</label>
              </div>
              <div className="my-0">
                <input
                  id="one-month"
                  type="radio"
                  name="date-posted"
                  value="one-month"
                />
                <label htmlFor="one-month">Last 30 Days</label>
              </div>
            </div>
            <div>
              <div
                onChange={(e) => {
                  setExperience(parseInt(e.target.value));
                  setPage(1);
                }}
                className="mt-6 [&>div>label]:text-md [&>div>label]:text-gray-600 [&>div>label]:ml-2"
              >
                <h1 className="text-md mb-1">Experience Level</h1>
                <div className="flex my-0">
                  <input id="xp-0" type="radio" name="experience" value="0" />
                  <label htmlFor="xp-0">No Experience</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-1" type="radio" name="experience" value="1" />
                  <label htmlFor="xp-1">1 Year</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-2" type="radio" name="experience" value="2" />
                  <label htmlFor="xp-2">2 Year</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-3" type="radio" name="experience" value="3" />
                  <label htmlFor="xp-3">3 Year</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-4" type="radio" name="experience" value="4" />
                  <label htmlFor="xp-4">4 Year</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-5" type="radio" name="experience" value="5" />
                  <label htmlFor="xp-5">5 Year</label>
                </div>
                <div className="flex my-0">
                  <input id="xp-6" type="radio" name="experience" value="6" />
                  <label htmlFor="xp-6">5 Year+</label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="px-5">
              <div className="flex lg:justify-end items-center justify-center lg:my-4 my-5">
                <select
                  onChange={() => {
                    setNewer(!newer);
                    setPage(1);
                  }}
                  className="select_secondary"
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
                <select
                  onChange={(e) => {
                    setPerPage(e.target.value);
                    setPage(1);
                  }}
                  className="select_secondary"
                >
                  <option value="10">10 per page</option>
                  <option value="20">20 per page</option>
                  <option value="30">30 per page</option>
                </select>
              </div>

              {/* spinner */}
              {dataLoading && (
                <>
                  <div className="w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin mt-16"></div>
                </>
              )}

              {!dataLoading && !data.length && (
                <span className="text-center block font-semibold text-2xl">
                  Nothing to show
                </span>
              )}

              {/* Single Job */}
              {!dataLoading && (
                <>
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 mt-0 lg:mt-5 pb-16">
                    {data.map((job) => (
                      <>
                        {
                          <div key={job._id}>
                            <div
                              onClick={() => navigate(`${job._id}`)}
                              className="hover:shadow-xl cursor-pointer rounded-lg h-[310px] border min-h-[12] bg-white shadow border-1 pt-6 flex flex-col"
                            >
                              <img
                                src={job.company[0]?.photo}
                                className="w-24 h-24 rounded-full mx-auto object-cover"
                                alt=""
                              />
                              <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-md text-center font-medium text-gray-900">
                                  <Link to={`${job._id}`}>{job.title}</Link>
                                </h3>
                                <p className="mt-3 text-sm text-gray-500 text-justify">
                                  {job.jobDescription.slice(0, 100)}
                                  {job.jobDescription.length >= 100 && (
                                    <span>...</span>
                                  )}
                                </p>
                                <div className="flex gap-2 mt-auto">
                                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                    {job.jobType}
                                  </span>
                                  {job.urgent && (
                                    <span
                                      hidden={job.urgent}
                                      className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-500"
                                    >
                                      {job.urgent ? "Urgent" : ""}
                                    </span>
                                  )}
                                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                                    Private
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </>
                    ))}
                  </div>
                  {/* pagination */}
                  {
                     count > 11 && <div className="flex itemx-center justify-center gap-4 mb-16">
                    <button
                      onClick={() => {
                        setPage(Number(page) - 1);
                      }}
                      disabled={page === 1}
                      className={`${page === 1?'btn_none':'btn_page'}`}
                      type="button"
                    >
                      <AiOutlineArrowLeft />
                    </button>
                    <button
                      className="btn_page"
                      type="button"
                    >
                      {page}
                    </button>
                    
                      <button
                      onClick={() => setPage(Number(page) + 1)}
                      disabled={page === Math.ceil(count / perPage) || count===0 }
                      className={`${page === Math.ceil(count / perPage) || count===0 ? 'btn_none':'btn_page'}`}
                      type="button"
                    >
                      <AiOutlineArrowRight />
                    </button>
                    
                    
                  </div>
                  }
                  
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
};

export default FindJob;
