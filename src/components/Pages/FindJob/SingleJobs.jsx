import React, { useContext, useEffect, useState } from "react";
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
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import ApplyJobModal from "./ApplyJobModal/ApplyJobModal";
import moment from "moment";
import fetchData from "../../../api/fetchData";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SingleJobs = () => {

	const navigate = useNavigate()
	const id = useParams().id;
	const [jobData, setJobData] = useState({});
	const [dataLoading, setDataLoading] = useState(true)
	const { user } = useContext(AuthContext)
	console.log(jobData)

	useEffect(() => {
		fetchData.get(`/jobs/${id}`)
			.then(response => {
				setJobData(response.data[0])
				console.log(response.data)
				setDataLoading(false)
			})
	}, [id])

	const handleBookMark = () => {
		if (!user) {
			toast.error('Login to add this job to bookmark')
		}
	}

	// console.log(singleJob);
	// const { company, companyType, expireDate, jobDescription, jobType, location, logo, postTime, rateMax, rateMin, responsibilities, salaryMax, salaryMin, skills, title, trems, urgent, workingHours, _id } = singleJobData;

	return (
		<>
			{
				dataLoading && <span>Loading</span>
			}
			{
				!dataLoading &&
				<div className="w-[98%] mx-auto">
					<div className="lg:flex block mt-10 mb-16 gap-10">
						<div className="basis-2/3">
							<div className="m-6 flex justify-between lg:m-6">
								<div>
									<h1 className="text-2xl font-medium ">{jobData.title} {new Date() > new Date(jobData.expireDate) && '(Expired)'}</h1>
									<div className="mt-2 flex gap-2">
										<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
											{jobData.jobType}
										</span>
										<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-500">
											{jobData.urgent ? 'Urgent' : ''}
										</span>
										<span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-500">
											{jobData.companyType}
										</span>
									</div>
								</div>
								<div className="flex items-center">
									<div className="flex items-center gap-4">
										{
											user &&
											<button className="bg-blue-500 w-full hover:bg-blue-600 px-6 py-3 text-sm rounded-md text-white cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" >
												Apply to job
											</button>
										}
										{
											!user &&
											<button disabled={new Date() > new Date(jobData.expireDate)} onClick={() => navigate('/login')} className={`${new Date() > new Date(jobData.expireDate) ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} w-full px-6 py-3 text-sm rounded-md text-white cursor-pointer`}>
												Login to apply
											</button>
										}
										<button onClick={handleBookMark} className="p-4 text-blue-500 bg-blue-50 rounded-md">
											<BsBookmark />
										</button>
									</div>
								</div>
							</div>
							<div>
								<div className="p-5 border mt-10 mb-6 rounded-md">
									<h3 className="text-xl font-medium mb-4">Summary</h3>
									<div className="grid md:grid-cols-2 grid-cols-1 lg:block">
										<div className="block lg:grid lg:grid-cols-4 place-content-center gap-10 md:my-2">
											<div className="flex items-center gap-5">
												<p>
													<AiOutlineCalendar className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Date Posted
													</span>
													<span className="text-sm">
														{moment(jobData.postTime).fromNow()}
													</span>
												</p>
											</div>
											<div className="flex items-center gap-5">
												<p>
													<BsHourglassSplit className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Expiration date
													</span>
													<span className="text-sm">
														{moment(jobData.expireDate).fromNow()}
													</span>
												</p>
											</div>
											<div className="flex items-center gap-5">
												<p>
													<GoLocation className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Location
													</span>
													<span className="text-sm">
														{jobData.location}
													</span>
												</p>
											</div>
											<div className="flex items-center gap-5">
												<p>
													<BiUser className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Job Title
													</span>
													<span className="text-sm">
														{jobData.title}
													</span>
												</p>
											</div>
										</div>
										<div className="block lg:grid grid-cols-4 place-content-center gap-10 md:my-5">
											<div className="flex items-center gap-5">
												<p>
													<BsClock className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Hours:
													</span>
													<span className="text-sm">
														{jobData.workingHours}h / week
													</span>
												</p>
											</div>
											<div className="flex items-center gap-5">
												<p>
													<RiCoinsFill className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Rate:
													</span>
													<span className="text-sm">
														${jobData.rateMin} - ${jobData.rateMax} / hour
													</span>
												</p>
											</div>
											<div className="flex items-center gap-5">
												<p>
													<GiMoneyStack className="text-2xl text-blue-500" />
												</p>
												<p className="text-black/75">
													<span className="block font-semibold text-black text-sm">
														Salary:
													</span>
													<span className="text-sm">
														${jobData.salaryMin} - ${jobData.salaryMax}
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="px-5">
								<div>
									<h1 className="text-xl font-medium mb-2">Description</h1>
									<p className="text-black/70 text-justify text-sm">
										{jobData.jobDescription}
									</p>
								</div>
								<div>
									<h1 className="text-xl font-medium mt-6 mb-2">Key Responsibilities</h1>
									<ul className="text-black/70 text-justify list-disc space-y-5 text-sm">
										{jobData.responsibilities}
									</ul>
								</div>
								<div>
									<h1 className="text-xl font-medium mt-6 mb-2">Skill & Experience</h1>
									<ul className="text-black/70 text-justify text-sm list-disc space-y-5">
										{jobData.skills}
									</ul>
								</div>
								<div className="mt-6 flex flex-col">
									<span className="text-xl font-medium mb-2">Share this job</span>
									<div className="flex gap-4 items-center text-xl text-gray-600">
										<span><BsFacebook /></span>
										<span><BsTwitter /></span>
										<span><BsLinkedin /></span>
									</div>
								</div>
							</div>
						</div>
						<div className="basis-1/3 px-5 lg:px-0">
							<div>

								{/* Job apply button part  */}
								<div className="flex gap-5 items-center">
									<ApplyJobModal singleJobData={jobData} user={user}></ApplyJobModal>
								</div>

								<div className="bg-gray-50 p-5 rounded-lg mt-8">
									<div className="flex gap-4 items-center">
										<img className="w-16 h-16 object-cover" src={jobData.company?.photo} alt="" />
										<div>
											<h3 className="text-lg font-medium">{jobData.company?.fullName}</h3>
											<Link to={`/employer/${jobData.company._id}`} className="text-blue-500 text-sm">
												View company profile
											</Link>
										</div>
									</div>
									<div className="mt-6 flex flex-col gap-4">
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">
												Company size:
											</p>
											<p className="font-medium text-black/50">{jobData.company?.team}</p>
										</div>
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">
												Founded in:
											</p>
											<p className="font-medium text-md text-black/50">{jobData.company.founded || 'N/A'}</p>
										</div>
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">Phone:</p>
											<p className="font-medium text-md text-black/50">{jobData.company?.phoneNumber || 'N/A'}</p>
										</div>
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">Email:</p>
											<p className="font-medium text-md text-black/50">{jobData.company?.email}</p>
										</div>
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">Location:</p>
											<p className="font-medium text-md text-black/50">{jobData?.company?.address?.city}, {jobData?.company?.address?.country}</p>
										</div>
										<div className="flex justify-between ">
											<p className="text-md text-black/80 font-medium">
												Social media:
											</p>
											<p className="font-medium flex items-center gap-1 text-black/50">
												<FaFacebookF />
												<AiOutlineTwitter />
												<AiOutlineInstagram />
												<FaLinkedinIn />
											</p>
										</div>
										<a href={jobData?.company.website} target="_blank" className="text-blue-500 bg-blue-200 text-center px-auto w-full py-2 rounded-md">
											{jobData?.company.website}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<div>
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
					</div>*/}
				</div>
			}
		</>
	);
};

export default SingleJobs;
