import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../../api/fetchData";
import { CategorySelect } from "./Select/CategorySelect";
import { GenderSelect } from "./Select/GenderSelect";
import Leftside from "./Sidebar/Leftside";
import SingleCandidate from "./SIngleCandidate";
import { FaMapMarkerAlt } from 'react-icons/fa'

const Candidates = () => {
	const [dataLoading, setDataLoading] = useState(true);
	const [candidates, setCandidates] = useState([]);
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		fetchData.get('/candidate', {
			params: {
				type: 'Candidate'
			}
		})
			.then(response => {
				console.log(response.data)
				setCandidates(response.data)
				setDataLoading(false)
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

				<div className="md:grid lg:grid-cols-4 bg-white relative justify-between">
					{/* Left Side */}
					<Leftside isOpen={isOpen} setCandidates={setCandidates} fetchData={fetchData} setLoading={setDataLoading} />
					{/* Right side */}
					<div className="col-start-2 col-end-5">
						<div className="flex md:block justify-center">
							<div className="p-4 md:flex  justify-between">
								<div className="flex gap-2">
									<h3>{candidates.length} Candidates</h3>
									<h3 className=" md:hidden">Filter</h3>
								</div>
								<div className="flex gap-2">
									<CategorySelect />
								</div>
							</div>
						</div>
						{dataLoading ? (
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
							<>
								{
									!dataLoading && <>
										<div className="px-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 mt-0 lg:mt-5 pb-16">
											{
												candidates.map(job =>
													<div key={job._id}>
														<div onClick={() => navigate(`${job._id}`)} className="hover:shadow-xl cursor-pointer rounded-lg h-[310px] border min-h-[12] bg-white shadow border-1 pt-6 flex flex-col">
															<img
																src={job.photo}
																className="w-24 h-24 rounded-full mx-auto object-cover"
																alt=""
															/>
															<div className="p-4 flex flex-col flex-grow">
																<h3 className="text-md text-center font-medium text-gray-900">
																	<Link to={`${job._id}`}>
																		{job.fullName}
																	</Link>
																</h3>
																<div className="flex items-center gap-2 justify-center">
																	<span><FaMapMarkerAlt /></span>
																	<span>{job.address?.city || 'N/A'}</span>
																</div>
															</div>
														</div>
													</div>)
											}
										</div>
									</>
								}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Candidates;
