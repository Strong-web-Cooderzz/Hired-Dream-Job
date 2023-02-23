import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyAllJobAppliedCard from "./MyAllJobAppliedCard";

const MyAllPost = () => {
  const { user } = useContext(AuthContext);
  const [appliedJobData, setAppliedJobData] = useState([]);

  const url = `https://hdj-server.vercel.app/job-applied-post/${user?.uid}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobData(data);
      });
  }, []);

  return (
    <div className="w-[90%] mx-12">
			<div className="flex justify-start">
				{/* <h2 className="text-2xl">Add new Blog</h2> */}
			</div>
			<div className=" mx-auto bg-gray-100 my-6 px-3 rounded-xl">
				<div className="w-full">
					<h2 className="text-xl px-3 py-5">All Applied Jobs</h2>
				</div>
      {/* See all  applied job post   */}
      <div className="grid lg:grid-cols-2 lg:gap-0 gap-y-5">
        {appliedJobData.map((appliedJobInfo) => (
          <MyAllJobAppliedCard
            key={appliedJobInfo._id}
            appliedJobInfo={appliedJobInfo}
          >
            {" "}
          </MyAllJobAppliedCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyAllPost;
