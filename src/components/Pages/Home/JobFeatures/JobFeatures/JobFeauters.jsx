import React, { useEffect, useState } from "react";
import JobFeaturedCard from "./JobFeaturedCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import api from "../../../../../api/fetchData";
import Loading from "../../../../Loading/Loading";

const JobFeauters = () => {
  const [loading, setLoading] = useState(true);
  const [jobFeaturesData, setJobFeaturesData] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await api.get("/featured");
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-2  gap-y-8">
          <div className="border rounded-lg py-4 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-1 py-2 space-y-4">
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300"></div>
              <div className="w-full h-4 rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="border rounded-lg py-4 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-1 py-2 space-y-4">
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300"></div>
              <div className="w-full h-4 rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="border rounded-lg py-4 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-1 py-2 space-y-4">
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300"></div>
              <div className="w-full h-4 rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="border rounded-lg py-4 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-1 py-2 space-y-4">
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
                <div className="flex justify-center gap-12">
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                  <div className="w-full h-3 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300"></div>
              <div className="w-full h-4 rounded bg-gray-300"></div>
            </div>
          </div>
          <Loading />
        </div>
      ) : (
        <div className="w-full  mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-2  gap-y-8">
          {/*  job featured card section   */}
          {jobFeaturesData.map((data) => (
            <JobFeaturedCard key={data.id} data={data}></JobFeaturedCard>
          ))}
        </div>
      )}

      <div className=" flex justify-center mt-8">
        <Link to={"/jobs"}>
          <button className="btn_round w-full">
            See All Jobs
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default JobFeauters;
