import React, { useContext } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const CandidateMeetings = () => {
	const {user} = useContext(AuthContext)
	console.log(user)
	
	return (
		<div className="mx-12 bg-gray-100 rounded-xl my-8">
			<div className="mx-6 py-6 text-xl">
				<h3>My Meetings</h3>
			</div>
			<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
				<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-md">
					<div className="space-y-4">
						<div className="space-y-2 flex justify-center items-center">
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
							<p className="text-3xl mx-2">
								<FiLink2 />
							</p>
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
						</div>
						<div className="flex items-center ">
							<div className="flex justify-between items-center gap-1 w-full">
								{" "}
								<p className="flex items-center gap-2">
									<BsCalendar2Date /> 25 Feb 2023
								</p>
								<p className="flex items-center gap-2">
									<BiTimeFive /> 09:15 PM
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<Link rel="noopener noreferrer" to="#" className="block ">
								<h3 className="text- font-semibold dark:text-violet-400">
									Facere ipsa nulla corrupti praesentium pariatur architecto
								</h3>
							</Link>

							<button className="btn_primary flex w-full justify-center disabled:bg-blue-50 disabled:text-gray-500" >Join Now</button>
						</div>
					</div>
				</div>
				<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-md">
					<div className="space-y-4">
						<div className="space-y-2 flex justify-center items-center">
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
							<p className="text-3xl mx-2">
								<FiLink2 />
							</p>
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
						</div>
						<div className="flex items-center ">
							<div className="flex justify-between items-center gap-1 w-full">
								{" "}
								<p className="flex items-center gap-2">
									<BsCalendar2Date /> 25 Feb 2023
								</p>
								<p className="flex items-center gap-2">
									<BiTimeFive /> 09:15 PM
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<Link rel="noopener noreferrer" to="#" className="block ">
								<h3 className="text- font-semibold dark:text-violet-400">
									Facere ipsa nulla corrupti praesentium pariatur architecto
								</h3>
							</Link>

							<button className="btn_primary flex w-full justify-center disabled:bg-blue-50 disabled:text-gray-500" >Join Now</button>
						</div>
					</div>
				</div>
				<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-md">
					<div className="space-y-4">
						<div className="space-y-2 flex justify-center items-center">
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
							<p className="text-3xl mx-2">
								<FiLink2 />
							</p>
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
						</div>
						<div className="flex items-center ">
							<div className="flex justify-between items-center gap-1 w-full">
								{" "}
								<p className="flex items-center gap-2">
									<BsCalendar2Date /> 25 Feb 2023
								</p>
								<p className="flex items-center gap-2">
									<BiTimeFive /> 09:15 PM
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<Link rel="noopener noreferrer" to="#" className="block ">
								<h3 className="text- font-semibold dark:text-violet-400">
									Facere ipsa nulla corrupti praesentium pariatur architecto
								</h3>
							</Link>

							<button className="btn_primary flex w-full justify-center disabled:bg-blue-50 disabled:text-gray-500" >Join Now</button>
						</div>
					</div>
				</div>
				<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-md">
					<div className="space-y-4">
						<div className="space-y-2 flex justify-center items-center">
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
							<p className="text-3xl mx-2">
								<FiLink2 />
							</p>
							<img
								src="https://source.unsplash.com/random/480x360/?4"
								alt=""
								className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
							/>
						</div>
						<div className="flex items-center ">
							<div className="flex justify-between items-center gap-1 w-full">
								{" "}
								<p className="flex items-center gap-2">
									<BsCalendar2Date /> 25 Feb 2023
								</p>
								<p className="flex items-center gap-2">
									<BiTimeFive /> 09:15 PM
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<Link rel="noopener noreferrer" to="#" className="block ">
								<h3 className="text- font-semibold dark:text-violet-400">
									Facere ipsa nulla corrupti praesentium pariatur architecto
								</h3>
							</Link>

							<button className="btn_primary flex w-full justify-center disabled:bg-blue-50 disabled:text-gray-500" >Join Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CandidateMeetings;
