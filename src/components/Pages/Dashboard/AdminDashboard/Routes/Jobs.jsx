import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { BsPen, BsPencil } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { TbUserOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import fetchData from "../../../../../api/fetchData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Loading from "../../../../Loading/Loading";

const Jobs = () => {
	const { user } = useContext(AuthContext)
	const [jobType, setJobType] = useState(true);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [dataType, setDataType] = useState("user");
	const [jobs, setJobs] = useState([]);

	function deleteJob(jobId) {
		fetchData.delete('/delete-job', {
			params: {
				'job-id': jobId
			},
			headers: {
				'Authorization': `Bearer ${user.accessToken}`
			}
		})
			.then(response => {
				if (response.data.acknowledged) toast.success('Job deleted successfully')
				else toast.error('Please try again or re-login')
			})
	}

	console.log(jobs);
	useEffect(() => {
		setLoading(true);
		fetch(`${import.meta.env.VITE_API}/jobs?type=${jobType}`)
			.then((res) => res.json())
			.then((data) => {
				setJobs(data);
				setLoading(false);
			});
	}, [dataType, jobType]);

	return (
		<>
			{loading ? (
				<>
					<Loading />
				</>
			) : (
				<div className="flex flex-col">
					<div className="overflow-x-auto ">
						<div className="py-2 inline-block min-w-full ">
							<div className="overflow-hidden">
								<table className="min-w-full">
									<thead className="border-b">
										<tr>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Thumb
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Name({jobs.length})
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Email
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												<div className="">
													<div className="w-32">
														<select
															onChange={(e) => setJobType(e.target.value)}
															className="form-select appearance-none block w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
															aria-label="Default select example"
														>
															<option
																selected={jobType === "ture"}
																value="true"
															>
																Active
															</option>
															<option
																selected={jobType === "false"}
																value="false"
															>
																Deactive
															</option>
														</select>
													</div>
												</div>
											</th>
											<th
												scope="col"
												className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{jobs.map((job) => (
											<>
												<tr key={job._id} className="border-b">
													<td className="px-6 py-4 text-sm font-medium text-gray-900">
														<img
															src={job.logo}
															className="w-12 h-12 rounded-full"
															alt=""
														/>
													</td>
													<td className="text-sm text-gray-900 text-left font-light px-6 py-4 whitespace-nowrap">
														{job.title}{" "}
														<span className="bg-orange-100 text-orange-600 px-2 rounded-md ">
															3
														</span>
													</td>
													<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
														{job.jobEmail}
													</td>
													<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
														{job.isVisible ? "Active" : "Dective"}
													</td>
													<td className="text-sm flex gap-1 font-light px-6 py-4 whitespace-nowrap">
														<Link
															to={`/edit-job/${job._id}`}
															className="inline-block bg-blue-100 px-2 py-2 rounded-md text-blue-600 shadow-md hover:bg-blue-400 hover:text-white"
														>
															<BsPencil />
														</Link>
														{/* Warning Btn */}

														<Link
															data-bs-toggle="modal"
															data-bs-target="#exampleModal"
															className="inline-block bg-orange-100 px-2 py-2 rounded-md text-orange-600 shadow-md hover:bg-orange-400 hover:text-white"
														>
															<IoWarningOutline />
														</Link>

														{/* Delete Job */}

														<div className="flex justify-center">
															<div>
																<div className="dropstart relative">
																	<Link
																		id="dropdownMenuButton1s"
																		data-bs-toggle="dropdown"
																		aria-expanded="false"
																		className=" dropdown-toggle inline-block bg-rose-100 px-2 py-2 rounded-md text-rose-600 shadow-md hover:bg-rose-400 hover:text-white"
																	>
																		<BiTrash />
																	</Link>
																	<ul
																		className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none "
																		aria-labelledby="dropdownMenuButton1s"
																	>
																		<li>
																			<button
																				className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
																			>
																				Cancel
																			</button>
																		</li>
																		<li>
																			<button
																				className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
																				onClick={() => deleteJob(job._id)}
																			>
																				Confirm
																			</button>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</td>
												</tr>
											</>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Warning Modal */}
					<div
						className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
						id="exampleModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog relative w-auto pointer-events-none">
							<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
								<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
									<h5
										className="text-xl font-medium leading-normal text-gray-800"
										id="exampleModalLabel"
									>
										Job Warning...
									</h5>
									<button
										type="button"
										className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body relative p-4">
									<textarea
										className="h-64 w-full border border-blue-400 rounded-md p-4"
										placeholder="Write Report"
									></textarea>
								</div>
								<div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
									<button
										type="button"
										className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-dismiss="modal"
									>
										Close
									</button>
									<button
										type="button"
										className="px-6 py-2.5 bg-orange-100 text-orange-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-300 hover:shadow-lg focus:bg-orange-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
									>
										Send Warning
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Jobs;
