import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import fetchData from "../../../api/fetchData";
import { CategorySelect } from "./Select/CategorySelect";
import { GenderSelect } from "./Select/GenderSelect";
import Leftside from "./Sidebar/Leftside";
import SingleCandidate from "./SIngleCandidate";

const Candidates = () => {
	const [loading, setLoading] = useState(true);
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		fetchData.get('/candidate', {
			params: {
				type: 'Candidate'
			}
		})
			.then(response => {
				setCandidates(response.data)
				setLoading(false)
			})
		// fetch(
		// 	"https://hired-dream-job-server-sparmankhan.vercel.app/candidate?type=Candidate"
		// )
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setCandidates(data);
		// 		setLoading(false);
		// 	});
	}, []);

	return (
		<div className="bg-[#e5ecfa]">
			<div>
				<div className="bg-gradient-to-r from-sky-400 to-purple-400 flex flex-col justify-center items-center py-6">
					<div>
						<h3 className="font-semibold text-2xl text-white text-center">Candidates</h3>
						<p className="items-center justify-center text-white flex gap-2">
							<Link to="/" className="text-white underline">
								Home
							</Link>
							/<span className="text-white underline">Candidates</span>
						</p>
					</div>
				</div>

				<div className="md:flex bg-white px-6 py-6 gap-8 relative">
					{/* Left Side */}
					<Leftside setCandidates={setCandidates} fetchData={fetchData} setLoading={setLoading} />
					{/* Right side */}
					<div className="md:w-8/12 ">
						<div className="flex md:block justify-center">
							<div className="p-4 md:flex  justify-between">
								<div className="flex gap-2">
									<h3>{candidates.length} Candidates</h3>
									<h3 className=" md:hidden">Filter</h3>
								</div>
								<div className="flex gap-2">
									<CategorySelect />
									<CategorySelect />
								</div>
							</div>
						</div>
						{loading ? (
							<div>
								<div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
									<div className="flex p-4 space-x-4 sm:px-8">
										<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
										<div className=" flex w-full gap-5">
											<div className="flex-1 py-2 space-y-4">
												<div className="w-64 h-3 rounded bg-gray-300"></div>
												<div className="w-8/12 h-3 rounded bg-gray-300"></div>
												<div className="flex gap-2 ">
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
												</div>
											</div>
											<div>
												<div className="w-24 h-12 rounded bg-gray-300"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
									<div className="flex p-4 space-x-4 sm:px-8">
										<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
										<div className=" flex w-full gap-5">
											<div className="flex-1 py-2 space-y-4">
												<div className="w-64 h-3 rounded bg-gray-300"></div>
												<div className="w-8/12 h-3 rounded bg-gray-300"></div>
												<div className="flex gap-2 ">
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
												</div>
											</div>
											<div>
												<div className="w-24 h-12 rounded bg-gray-300"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="py-4 rounded shadow-md w-full sm:w-full animate-pulse bg-gray-50">
									<div className="flex p-4 space-x-4 sm:px-8">
										<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
										<div className=" flex w-full gap-5">
											<div className="flex-1 py-2 space-y-4">
												<div className="w-64 h-3 rounded bg-gray-300"></div>
												<div className="w-8/12 h-3 rounded bg-gray-300"></div>
												<div className="flex gap-2 ">
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
													<div className="bg-gray-300 h-5 w-12 rounded-full"></div>
												</div>
											</div>
											<div>
												<div className="w-24 h-12 rounded bg-gray-300"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="flex flex-col gap-4">
								{candidates.map((candidate) => (
									<SingleCandidate key={candidate._id} candidate={candidate} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Candidates;
