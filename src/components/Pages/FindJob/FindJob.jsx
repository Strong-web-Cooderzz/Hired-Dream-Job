import React, { useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useActionData } from "react-router-dom";

const FindJob = () => {
	const dataFromForm = useActionData();
	// requires when searching from home page
	const [firstTime, setFirstTime] = useState(true);
	const formRef = useRef();
	const [newer, setNewer] = useState(true);
	const [jobType, setJobType] = useState('');
	const [time, setTime] = useState(0);
	// how many cards will be shown per page
	const [perPage, setPerPage] = useState(10);
	// which page user currently in
	const [page, setPage] = useState(1);
	const [category, setCategory] = useState('');
	// 1 seconds = 1000 miliseconds
	const second = 1000;
	const [experience, setExperience] = useState(0);

	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([]);
	const [dataLoading, setDataLoading] = useState(true);

	const fetchFromServer = (e) => {
		if (e) {
			e.preventDefault();
		}
		const form = formRef.current;
		const searchString = form.search.value;
		const location = form.location.value;
		const sort = newer ? 'new' : 'old';
		setDataLoading(true);
		// https://hired-dream-job-server.vercel.app
		fetch(`http://localhost:5000/find-jobs?search=${searchString}&location=${location}&sort=${sort}&type=${jobType}&time=${time}&per-page=${perPage}&page=${page}&experience=${experience}&category=${category}`)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setDataLoading(false);
				setIsOpen(false);
			});
	};

	function search(e) {
		fetchFromServer(e);
	};

	// sends new fetch request when date posted or job type or is changed
	useEffect(() => {
		// fetch(`https://hired-dream-job-server.vercel.app/find-jobs?search=${searchString}&location=${location}&sort=${sort}&type=${jobType}&time=${time}&per-page=${perPage}`)
		if (dataFromForm && firstTime) {
			setData(dataFromForm.fetchedData);
			setDataLoading(false);
			formRef.current.search.value = dataFromForm.form.title;
			formRef.current.location.value = dataFromForm.form.location;
			setFirstTime(false);
		} else {
			fetchFromServer();
		}
	}, [time, jobType, newer, perPage, experience, category]);

	return (
		<main className="mb-16">
			<div className="bg-[#e8eefa] flex flex-col justify-center items-center min-h-[200px]">
				<h1 className="font-semibold text-2xl">Find Jobs</h1>
				<p className="text-gray-900">
					<Link to="/" className="hover:text-[#696998]">
						Home
					</Link>
					/<span className="text-gray-600">Jobs</span>
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
					<div className={`left-0 ${isOpen ? 'left-0' : '-translate-x-full'} lg:translate-x-0 transition-transform lg:col-span-1 bg-[#e8eefa] p-6 pt-10 md:pt-6 absolute lg:static top-16 right-0 lg:top-auto lg:right-auto z-10`}>
						<div>
							<button onClick={() => setIsOpen(!isOpen)} type="button" className="absolute top-3 right-3 text-4xl lg:hidden"><AiOutlineCloseCircle /></button>
						</div>
						<form ref={formRef} onSubmit={e => search(e)}>
							<div>
								<h1 className="text-md mb-1">Search by keywords</h1>
								<div className="relative text-gray-600 focus-within:text-gray-400">
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
										className="py-3 text-sm text-gray-600 w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
										placeholder="Job title, keywords or company"
										autoComplete="off"
									/>
								</div>
							</div>
							<div className="mt-8">
								<h1 className="text-md mb-1">Location</h1>
								<div className="relative text-gray-600 focus-within:text-gray-400">
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
										className="py-3 text-sm text-gray-600 w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
										placeholder="City or Postcode"
										autoComplete="off"
									/>
								</div>
							</div>
						</form>
						<div className="mt-8">
							<h1 className="text-md mb-1">Category</h1>
							<div onChange={e => setCategory(e.target.value)} className="relative text-gray-600 focus-within:text-gray-400">
								<span className="absolute inset-y-0 left-0 flex items-center pl-2">
									<button
										type="submit"
										className="p-1 focus:outline-none focus:shadow-outline"
									>
										<BiCategory className="text-xl" />
									</button>
								</span>
								<select className="py-3 text-sm w-full rounded-md pl-10 focus:outline-blue-500 bg-white focus:text-gray-900">
									<option value="">Select One Category</option>
									<option value="Accounting / Finance">
										Accounting / Finance
									</option>
									<option value="Marketing">Marketing</option>
									<option value="Design">Design</option>
									<option value="Development">Development</option>
									<option value="Human Resource">Human Resource</option>
									<option value="Automotive Jobs">Automotive Jobs</option>
									<option value="Customer Service">Customer Service</option>
									<option value="Health and Care">Health and Care</option>
									<option value="Project Management">Project Management</option>
								</select>
							</div>
						</div>
						<div>
							<div onChange={e => {
								const value = e.target.value;
								if (value === 'full-time') {
									setJobType('Full Time');
								} else if (value === 'part-time') {
									setJobType('Part Time');
								} else if (value === 'temporary') {
									setJobType('Temporary');
								} else {
									setJobType('');
								}
							}} className="mt-5 [&>div>label]:text-gray-600 [&>div>label]:ml-2">
								<h1 className="text-md mb-1">Job type</h1>
								<div className="flex my-0">
									<input type="radio" name="job-type" value="all" id="all" />
									<label htmlFor="all">All</label>
								</div>
								<div className="flex my-0">
									<input type="radio" name="job-type" value="full-time" id="full-time" />
									<label htmlFor="full-time">Full Time</label>
								</div>
								<div className="flex my-0">
									<input type="radio" name="job-type" value="part-time" id="part-time" />
									<label htmlFor="part-time">Part Time</label>
								</div>
								<div className="flex my-0">
									<input type="radio" name="job-type" value="temporary" id="temporary" />
									<label htmlFor="temporary">Temporary</label>
								</div>
							</div>
						</div>
						<div onChange={e => {
							const value = e.target.value;
							if (value === 'all') {
								setTime(0);
							} else if (value === 'last-hour') {
								setTime(60 * 60 * second);
							} else if (value === 'last-day') {
								setTime(24 * 60 * 60 * second);
							} else if (value === 'seven-day') {
								setTime(7 * 24 * 60 * 60 * second);
							} else if (value === 'fourteen-day') {
								setTime(14 * 24 * 60 * 60 * second);
							} else if (value === 'one-month') {
								setTime(30 * 24 * 60 * 60 * second);
							} else {
								setTime(0);
							}
						}} className="mt-6 [&>div>label]:text-sm [&>div>label]:text-gray-600 [&>div>label]:ml-2">
							<h1 className="text-md mb-1">Date Posted</h1>
							<div className="my-1">
								<input id="all-date" type="radio" value="all" name="date-posted" />
								<label htmlFor="all-date">All</label>
							</div>
							<div className="my-1">
								<input id="last-hour" type="radio" value="last-hour" name="date-posted" />
								<label htmlFor="last-hour">Last Hour</label>
							</div>
							<div className="my-1">
								<input id="last-day" type="radio" name="date-posted" value="last-day" />
								<label htmlFor="last-day">Last 24 Hour</label>
							</div>
							<div className="my-1">
								<input id="seven-day" type="radio" name="date-posted" value="seven-day" />
								<label htmlFor="seven-day">Last 7 Days</label>
							</div>
							<div className="my-1">
								<input id="fourteen-day" type="radio" name="date-posted" value="fourteen-day" />
								<label htmlFor="fourteen-day">Last 14 days</label>
							</div>
							<div className="my-1">
								<input id="one-month" type="radio" name="date-posted" value="one-month" />
								<label htmlFor="one-month">Last 30 Days</label>
							</div>
						</div>
						<div>
							<div onChange={e => setExperience(parseInt(e.target.value))} className="mt-6 [&>div>label]:text-sm [&>div>label]:text-gray-500 [&>div>label]:ml-2">
								<h1 className="text-md mb-1">Experience Level</h1>
								<div className="flex my-1">
									<input id="xp-0" type="radio" name="experience" value="0" />
									<label htmlFor="xp-0">No Experience</label>
								</div>
								<div className="flex my-1">
									<input id="xp-1" type="radio" name="experience" value="1" />
									<label htmlFor="xp-1">1 Year</label>
								</div>
								<div className="flex my-1">
									<input id="xp-2" type="radio" name="experience" value="2" />
									<label htmlFor="xp-2">2 Year</label>
								</div>
								<div className="flex my-1">
									<input id="xp-3" type="radio" name="experience" value="3" />
									<label htmlFor="xp-3">3 Year</label>
								</div>
								<div className="flex my-1">
									<input id="xp-4" type="radio" name="experience" value="4" />
									<label htmlFor="xp-4">4 Year</label>
								</div>
								<div className="flex my-1">
									<input id="xp-5" type="radio" name="experience" value="5" />
									<label htmlFor="xp-5">5 Year</label>
								</div>
								<div className="flex my-1">
									<input id="xp-6" type="radio" name="experience" value="6" />
									<label htmlFor="xp-6">5 Year+</label>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3">
						<div className="px-5">
							<div className="flex lg:justify-end items-center justify-center lg:my-4 my-5">
								<select onChange={() => setNewer(!newer)} className="mr-3 bg-gray-200 focus:outline-none py-3 px-4 rounded-md text-sm">
									<option value="Newest">Newest</option>
									<option value="Oldest">Oldest</option>
								</select>
								<select onChange={e => setPerPage(e.target.value)} className="bg-gray-200 focus:outline-none py-3 px-4 rounded-md text-sm">
									<option value="10">10 per Page</option>
									<option value="20">20 per Page</option>
									<option value="30">30 per Page</option>
								</select>
							</div>

							{/* spinner */}
							{
								dataLoading && <>
									<div className='w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin mt-16'>
									</div>
								</>
							}

							{
								!dataLoading && !data.length &&
								<span className="text-center block font-semibold text-2xl">Nothing to show</span>
							}

							{/* Single Job */}
							{
								!dataLoading && <>
									<div className="grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2  mt-0 lg:mt-5">
										{
											data.map(job =>
												<>
													{
														job.isVisible && <div key={job._id}>
															<div className="rounded-lg h-[310px] border min-h-[12] bg-white shadow border-1 pt-6 flex flex-col">
																<img
																	src={job.logo}
																	className="w-24 h-24 rounded-full mx-auto object-cover"
																	alt=""
																/>
																<div className="p-4 flex flex-col flex-grow">
																	<h3 className="text-md text-center font-medium text-gray-900">
																		<Link to={`single-job/${job._id}`}>
																			{job.title}
																		</Link>
																	</h3>
																	<p className="mt-3 text-sm text-gray-500 text-justify">
																		{job.jobDescription.slice(0, 100)}
																		{job.jobDescription.length >= 100 && <span>...</span>}
																	</p>
																	<div className="flex gap-2 mt-auto">
																		<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
																			{job.jobType}
																		</span>
																		{
																			job.urgent &&
																			<span hidden={job.urgent} className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-500">
																				{job.urgent ? 'Urgent' : ''}
																			</span>
																		}
																		<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
																			Private
																		</span>
																	</div>
																</div>
															</div>
														</div>
													}
												</>

											)
										}
									</div>
								</>
							}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default FindJob;
