import React, { useEffect, useState } from "react";
import JobFeaturedCard from "./JobFeaturedCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import api from "../../../../../api/fetchData";

const JobFeauters = () => {
  const [loading, setLoading] = useState(true);
  const [jobFeaturesData, setJobFeaturesData] = useState([]);

  useEffect(() => {
		async function fetchJobs() {
			try {
				const response = await api.get("/jobs", {params: {limit: 6}});
				setJobFeaturesData(response.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
		fetchJobs();
  }, []);

  return (
    <section className="mx-auto w-full px-5 ">
      <div className="text-center mb-4 ">
        <h2 className="text-3xl  font-semibold"> Featured Jobs </h2>
        <p className="">
          {" "}
          Know your worth and find the job that qualify your life{" "}
        </p>
      </div>
      {loading ? (
        <div className="w-full  mx-auto ">
          <div className="w-36 h-36 flex justify-center bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-transparent animate-spin mt-16"></div>
        </div>
      ) : (
        <div className="w-full  mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6  gap-y-8">
          {/*  job featured card section   */}
          {jobFeaturesData.map((data) => (
            <JobFeaturedCard key={data.id} data={data}></JobFeaturedCard>
          ))}
        </div>
      )}

      <div className=" flex justify-center mt-8">
        <Link to={'/find-jobs'} >

          <button className="btn-normal bg-blue-500 hover:bg-blue-700 flex  items-center gap-2 ">
           See All Jobs<FaArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default JobFeauters;
