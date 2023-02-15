import React, { useContext, useEffect, useState } from "react";
import { TfiBag } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import { BsBookmark, BsClock, BsHourglassSplit } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import {
	AiOutlineCalendar,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiCoinsFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import ApplyJobModal from "./ApplyJobModal/ApplyJobModal";
import moment from "moment";
import fetchData from "../../../api/fetchData";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SingleJobs = () => {
	const id = useParams().id;
	const [singleJobData, setSingleJobData] = useState({});
	useEffect(() => {
		fetchData.get(`/jobs/${id}`)
			.then(response => {
				setSingleJobData(response.data[0])
			})
	}, [id])

	const { user } = useContext(AuthContext)

	// console.log(singleJob);
	const { company, companyType, expireDate, jobDescription, jobType, location, logo, postTime, rateMax, rateMin, responsibilities, salaryMax, salaryMin, skills, title, trems, urgent, workingHours, _id } = singleJobData;

	return (
		<div className="w-[98%] mx-auto">
			<div className="lg:flex block mt-10 gap-10">
				<div className="basis-2/3">
					<div className="m-6 lg:m-6">
						<h1 className="text-2xl font-medium ">{title}</h1>
						<div className="mt-4 flex gap-2">
							<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
								{jobType}
							</span>
							<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-500">
								{urgent ? 'Urgent' : ''}
							</span>
							<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-500">
								{companyType}
							</span>
						</div>
					</div>
					<div>
						<div className="p-5 border mt-10 mb-5 rounded-md">
							<h3 className="text-xl font-medium mb-3">Job Description</h3>
							<div className="grid md:grid-cols-2 grid-cols-1 lg:block">
								<div className="block lg:flex gap-10 md:my-5">
									<div className="flex items-center gap-5">
										<p>
											<AiOutlineCalendar className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Date Posted
											</span>
											{moment(postTime).fromNow()}
										</p>
									</div>
									<div className="flex items-center gap-5">
										<p>
											<BsHourglassSplit className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Expiration date
											</span>
											{moment(expireDate).fromNow()}
										</p>
									</div>
									<div className="flex items-center gap-5">
										<p>
											<GoLocation className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Location
											</span>
											{location}
										</p>
									</div>
									<div className="flex items-center gap-5">
										<p>
											<BiUser className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Job Title
											</span>
											{title}
										</p>
									</div>
								</div>
								<div className="block lg:flex gap-10 md:my-5">
									<div className="flex items-center gap-5">
										<p>
											<BsClock className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Hours:
											</span>
											{workingHours}h / week
										</p>
									</div>
									<div className="flex items-center gap-5">
										<p>
											<RiCoinsFill className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Rate:
											</span>
											${rateMin} - ${rateMax} / hour
										</p>
									</div>
									<div className="flex items-center gap-5">
										<p>
											<GiMoneyStack className="text-2xl text-blue-500" />
										</p>
										<p className="text-black/75">
											<span className="block font-semibold text-black">
												Salary:
											</span>
											${salaryMin} - ${salaryMax}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-5">
						<div>
							<h1 className="text-xl font-medium mb-3">Job Description</h1>
							<p className="text-black/70 text-justify">
								{jobDescription}
							</p>
						</div>
						<div>
							<h1 className="text-xl font-medium my-5">Key Responsibilities</h1>
							<ul className="text-black/70 text-justify list-disc space-y-5">
								{responsibilities}
							</ul>
						</div>
						<div>
							<h1 className="text-xl font-medium my-5">Skill & Experience</h1>
							<ul className="text-black/70 text-justify list-disc space-y-5">
								{skills}
							</ul>
						</div>
						<div className="my-16 flex flex-wrap items-center">
							<span className="text-xl font-medium my-5">Share this job</span>
							<div>
								<button className="bg-indigo-900 py-2 px-4 text-white rounded-md ml-6">
									Facebook
								</button>
								<button className="bg-indigo-400 py-2 px-4 text-white rounded-md ml-6">
									Twitter
								</button>
								<button className="bg-indigo-600 py-2 px-4 text-white rounded-md ml-6">
									Linkedin
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="basis-1/3 px-5 lg:px-0">
					<div>

						{/* Job apply button part  */}
						<div className="flex gap-5 items-center">
							<button className="bg-blue-500 w-full hover:bg-blue-600 py-3 rounded-md text-white cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								Apply To Job
							</button>
							<button className="p-4 text-blue-500 bg-blue-50 rounded-md">
								<BsBookmark />
							</button>
							<ApplyJobModal singleJobData={singleJobData} user={user}></ApplyJobModal>
						</div>

						<div className="bg-gray-50 p-5 rounded-lg mt-8">
							<div className="flex gap-5 items-center">
								<img className="w-24 h-24 object-cover" src={company?.photo} alt="" />
								<div>
									<h3 className="text-xl font-medium">{company?.fullName}</h3>
									<Link to="/" className="text-blue-500 text-sm">
										View company profile
									</Link>
								</div>
							</div>
							<div className="mt-5 space-y-5">
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">
										Primary industry:
									</p>
									<p className="font-medium text-black/50">Software</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">
										Company size:
									</p>
									<p className="font-medium text-black/50">501-1,000</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">
										Founded in:
									</p>
									<p className="font-medium text-black/50">2011</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">Phone:</p>
									<p className="font-medium text-black/50">123 456 7890</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">Email:</p>
									<p className="font-medium text-black/50">{company?.email}</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">Location:</p>
									<p className="font-medium text-black/50">London, UK</p>
								</div>
								<div className="flex justify-between ">
									<p className="text-lg text-black/80 font-medium">
										Social media:
									</p>
									<p className="font-medium flex items-center gap-1 text-black/50">
										<FaFacebookF />
										<AiOutlineTwitter />
										<AiOutlineInstagram />
										<FaLinkedinIn />
									</p>
								</div>
								<button className="text-blue-500 bg-blue-200 w-full py-3 rounded-md">
									https://hdj.netlify.app/
								</button>
							</div>
						</div>
						<div className="bg-black/5 p-5 rounded-lg mt-8">
							<div>
								<input
									className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
									placeholder="Your Name"
								/>
							</div>
							<div className="mt-8">
								<input
									className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="email"
									placeholder="Your Email"
								/>
							</div>
							<div className="mt-8">
								<textarea
									className="w-full h-32 bg-white resize-none text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									placeholder="Message"
								></textarea>
							</div>
							<div className="mt-8">
								<button className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-3xl font-medium mt-5">Related Jobs</h1>
				<p className="text-black/70 mt-3">2020 jobs live - 293 added today.</p>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-10">
					<div className="rounded-lg bg-white shadow">
						<img
							src={logo}
							className="aspect-video mx-auto object-cover"
							alt=""
						/>
						<div className="p-4">
							<h3 className="text-xl text-center font-medium text-gray-900">
								Software Engineer (Android), Libraries
							</h3>
							<p className="mt-1 text-gray-500">
								Sailboat UI helps streamline software projects, sprints, tasks,
								and bug tracking.
							</p>
							<div className="mt-4 flex gap-2">
								<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
									Full Time
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
									Urgent
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
									Private
								</span>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-white shadow">
						<img
							src={logo}
							className="aspect-video mx-auto object-cover"
							alt=""
						/>
						<div className="p-4">
							<h3 className="text-xl text-center font-medium text-gray-900">
								Software Engineer (Android), Libraries
							</h3>
							<p className="mt-1 text-gray-500">
								Sailboat UI helps streamline software projects, sprints, tasks,
								and bug tracking.
							</p>
							<div className="mt-4 flex gap-2">
								<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
									Full Time
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
									Urgent
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
									Private
								</span>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-white shadow">
						<img
							src={logo}
							className="aspect-video mx-auto object-cover"
							alt=""
						/>
						<div className="p-4">
							<h3 className="text-xl text-center font-medium text-gray-900">
								Software Engineer (Android), Libraries
							</h3>
							<p className="mt-1 text-gray-500">
								Sailboat UI helps streamline software projects, sprints, tasks,
								and bug tracking.
							</p>
							<div className="mt-4 flex gap-2">
								<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
									Full Time
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
									Urgent
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
									Private
								</span>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-white shadow">
						<img
							src={logo}
							className="aspect-video mx-auto object-cover"
							alt=""
						/>
						<div className="p-4">
							<h3 className="text-xl text-center font-medium text-gray-900">
								Software Engineer (Android), Libraries
							</h3>
							<p className="mt-1 text-gray-500">
								Sailboat UI helps streamline software projects, sprints, tasks,
								and bug tracking.
							</p>
							<div className="mt-4 flex gap-2">
								<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
									Full Time
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-500">
									Urgent
								</span>
								<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
									Private
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleJobs;
