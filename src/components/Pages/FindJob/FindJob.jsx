import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/figma.png";

const FindJob = () => {
	const [value, setValue] = useState(100);
	const [salary, setSalary] = useState(20000);

	const [isOpen, setIsOpen] = useState(false);
	const [enabled, setEnabled] = useState(false);
	const [data, setData] = useState([]);
	const [dataLoading, setDataLoading] = useState(true);
	useEffect(() => {
		fetch(`https://hired-dream-server.vercel.app/jobs`)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setDataLoading(false);
			})
	}, [])
	function search(e) {
		const searchString = e.target.value;
		if (e.key === 'Enter') {
			setDataLoading(true);
			fetch(`http://localhost:5000/find-jobs?search=${searchString}`)
				.then(res => res.json())
				.then(data => {
					setData(data);
					setDataLoading(false);
				});
		}
	}
	console.log(data);
	return (
		<>
			<div className="bg-[#e8eefa] flex flex-col justify-center items-center min-h-[200px]">
				<h1 className="font-semibold text-2xl">Find Jobs</h1>
				<p className="text-gray-900">
					<Link to="/" className="hover:text-[#696998]">
						Home
					</Link>
					/<span className="text-gray-600">Jobs</span>
				</p>
			</div>
			<div className="mt-14">
				<div>
					<div className={`lg:hidden flex items-center justify-center`}>
						<button
							className={`text-blue-500 flex items-center justify-center py-3 px-4 rounded-md bg-blue-200`}
							onClick={() => setIsOpen(!isOpen)}
						>
							<BsFilter className="mr-2" /> Filter
						</button>
					</div>
					<div
						className={` ${isOpen ? "block" : "hidden"
							} lg:block overflow-y-auto fixed top-0 left-0 h-screen w-80 bg-gray-100 px-3 py-1 z-50 transition duration-1000 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
							} `}
						style={{ transition: "transform 1s" }}
					>
						<div className="text-right ">
							<button
								className={`px-2 pt-2 text-3xl rounded-md`}
								onClick={() => setIsOpen(!isOpen)}
							>
								<IoIosCloseCircleOutline />
							</button>
						</div>
						<div className="">
							<div>
								<h1 className="text-xl mb-3">Search by keywords</h1>
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
										name="q"
										className="py-3 text-sm text-white w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
										placeholder="Job title, keywords or company"
										autoComplete="off"
									/>
								</div>
							</div>
							<div className="mt-8">
								<h1 className="text-xl mb-3">Location</h1>
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
										name="q"
										className="py-3 text-sm text-white w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
										placeholder="City or Postcode"
										autoComplete="off"
									/>
								</div>
							</div>
							<div>
								<p className="text-gray-600 text-sm my-2">
									Radius around selected destination
								</p>
								<input
									type="range"
									className="block w-full rounded-md focus:outline-none focus:shadow-outline-blue-500"
									min={0}
									max={100}
									value={value}
									onChange={(e) => setValue(e.target.value)}
								/>
								<div className="flex justify-center mt-3 mb-5">
									<button className="text-blue-500 py-1 px-3 bg-blue-200 rounded-md">
										{value}km
									</button>
								</div>
							</div>
							<div className="mt-8">
								<h1 className="text-xl mb-3">Category</h1>
								<div className="relative text-gray-600 focus-within:text-gray-400">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<button
											type="submit"
											className="p-1 focus:outline-none focus:shadow-outline"
										>
											<BiCategory className="text-xl" />
										</button>
									</span>
									<select className="py-3 text-sm w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900">
										<option defaultValue>Select One Category</option>
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
										<option value="Project Management">
											Project Management
										</option>
									</select>
								</div>
							</div>
							<div>
								<div className="mt-5">
									<h1 className="text-xl mb-3">Job type</h1>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">
												Freelancer
											</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">
												Full Time
											</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">
												Part Time
											</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">
												Temporary
											</span>
										</label>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<h1 className="text-xl mb-3">Date Posted</h1>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault1"
									>
										All
									</label>
								</div>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault2"
									>
										Last Hour
									</label>
								</div>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault2"
									>
										Last 24 Hour
									</label>
								</div>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault2"
									>
										Last 7 Days
									</label>
								</div>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault2"
									>
										Last 14 Days
									</label>
								</div>
								<div className="my-4">
									<input
										className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="ml-2 text-sm text-gray-500"
										htmlFor="flexRadioDefault2"
									>
										Last 30 Days
									</label>
								</div>
							</div>
							<div>
								<div className="mt-5">
									<h1 className="text-xl mb-3">Experience Level</h1>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">Fresh</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">1 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">2 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">3 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">4 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">5 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">6 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">7 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">8 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">9 Year</span>
										</label>
									</div>
									<div className="flex my-4">
										<label className="inline-flex relative items-center mr-5 cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={enabled}
												readOnly
											/>
											<div
												onClick={() => {
													setEnabled(!enabled);
												}}
												className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
											></div>
											<span className="ml-2 text-sm text-gray-500">
												10 Year
											</span>
										</label>
									</div>
								</div>
							</div>
							<div>
								<h1 className="text-xl mb-3">Salary</h1>
								<input
									type="range"
									className="block w-full rounded-md focus:outline-none focus:shadow-outline-blue-500"
									min={0}
									max={20000}
									value={salary}
									onChange={(e) => setSalary(e.target.value)}
								/>
								<div className="flex justify-center mt-3 mb-5">
									<button className="text-blue-500 py-1 px-3 bg-blue-200 rounded-md">
										${salary}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative rounded-md grid lg:grid-cols-4">
					<div className="lg:col-span-1 bg-[#e8eefa] p-6 rounded-md hidden lg:block">
						<div>
							<h1 className="text-xl mb-3">Search by keywords</h1>
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
									name="q"
									className="py-3 text-sm text-gray-600 w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
									placeholder="Job title, keywords or company"
									autoComplete="off"
									onKeyDown={e => search(e)}
								/>
							</div>
						</div>
						<div className="mt-8">
							<h1 className="text-xl mb-3">Location</h1>
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
									name="q"
									className="py-3 text-sm text-white w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
									placeholder="City or Postcode"
									autoComplete="off"
								/>
							</div>
						</div>
						<div>
							<p className="text-gray-600 text-sm my-2">
								Radius around selected destination
							</p>
							<input
								type="range"
								className="block w-full rounded-md focus:outline-none focus:shadow-outline-blue-500"
								min={0}
								max={100}
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<div className="flex justify-center mt-3 mb-5">
								<button className="text-blue-500 py-1 px-3 bg-blue-200 rounded-md">
									{value}km
								</button>
							</div>
						</div>
						<div className="mt-8">
							<h1 className="text-xl mb-3">Category</h1>
							<div className="relative text-gray-600 focus-within:text-gray-400">
								<span className="absolute inset-y-0 left-0 flex items-center pl-2">
									<button
										type="submit"
										className="p-1 focus:outline-none focus:shadow-outline"
									>
										<BiCategory className="text-xl" />
									</button>
								</span>
								<select className="py-3 text-sm w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900">
									<option defaultValue>Select One Category</option>
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
							<div className="mt-5">
								<h1 className="text-xl mb-3">Job type</h1>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">
											Freelancer
										</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">
											Full Time
										</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">
											Part Time
										</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">
											Temporary
										</span>
									</label>
								</div>
							</div>
						</div>
						<div className="mt-6">
							<h1 className="text-xl mb-3">Date Posted</h1>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault1"
								>
									All
								</label>
							</div>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault2"
								>
									Last Hour
								</label>
							</div>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault2"
								>
									Last 24 Hour
								</label>
							</div>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault2"
								>
									Last 7 Days
								</label>
							</div>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault2"
								>
									Last 14 Days
								</label>
							</div>
							<div className="my-4">
								<input
									className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
								/>
								<label
									className="ml-2 text-sm text-gray-500"
									htmlFor="flexRadioDefault2"
								>
									Last 30 Days
								</label>
							</div>
						</div>
						<div>
							<div className="mt-5">
								<h1 className="text-xl mb-3">Experience Level</h1>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">Fresh</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">1 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">2 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">3 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">4 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">5 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">6 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">7 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">8 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">9 Year</span>
									</label>
								</div>
								<div className="flex my-4">
									<label className="inline-flex relative items-center mr-5 cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
											checked={enabled}
											readOnly
										/>
										<div
											onClick={() => {
												setEnabled(!enabled);
											}}
											className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
										></div>
										<span className="ml-2 text-sm text-gray-500">10 Year</span>
									</label>
								</div>
							</div>
						</div>
						<div>
							<h1 className="text-xl mb-3">Salary</h1>
							<input
								type="range"
								className="block w-full rounded-md focus:outline-none focus:shadow-outline-blue-500"
								min={0}
								max={20000}
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							/>
							<div className="flex justify-center mt-3 mb-5">
								<button className="text-blue-500 py-1 px-3 bg-blue-200 rounded-md">
									${salary}
								</button>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3">
						<div className="px-5">
							<div className="flex lg:justify-end items-center justify-center lg:my-0 my-5">
								<select className="border mr-3 border-gray-900 bg-gray-100 focus:outline-none py-3 px-2 rounded-md">
									<option value="Sort by (default)">Sort by (default)</option>
									<option value="Newest">Newest</option>
									<option value="Oldest">Oldest</option>
								</select>
								<select className="border border-gray-900 bg-gray-100 focus:outline-none py-3 px-2 rounded-md">
									<option value="Sort by (default)">All</option>
									<option value="Newest">10 per Page</option>
									<option value="Oldest">20 per Page</option>
									<option value="Oldest">30 per Page</option>
								</select>
							</div>


							{
								dataLoading && <>
									<div className='w-36 h-36 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-transparent animate-spin mt-16'>
									</div>
								</>
							}

							{/* Single Job */}
							{
								!dataLoading && <>
									<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-0 lg:mt-5">
										{
											data.map(job =>
												<div key={job._id} className="rounded-lg bg-white shadow">
													<img
														src={job.logo}
														className=" w-24 h-24 rounded-full mx-auto object-cover"
														alt=""
													/>
													<div className="p-4">
														<h3 className="text-xl text-center font-medium text-gray-900">
															<Link to={`single-job/${job._id}`}>
																{job.title}
															</Link>
														</h3>
														<p className="mt-1 text-gray-500">
															{job.jobDescription.slice(0, 100)}
														</p>
														<div className="mt-4 flex gap-2">
															<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
																{job.jobType}
															</span>
															<span hidden={job.urgent} className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
																{job.urgent ? 'Urgent' : ''}
															</span>
															<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
																Private
															</span>
														</div>
													</div>
												</div>
											)
										}
									</div>
								</>
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FindJob;
