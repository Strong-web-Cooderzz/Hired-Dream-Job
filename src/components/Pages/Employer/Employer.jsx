import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillBagFill, BsBagFill, BsClock, BsFacebook, BsGithub, BsJournalBookmark } from "react-icons/bs";
import { BsTelephone, BsLinkedin, BsBookmark } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiCash } from "react-icons/gi";
import fetchData from "../../../api/fetchData";
import moment from "moment";

export default function Employer() {
	const employerId = useParams().id;
	const [employer, setEmployer] = useState([]);
	useEffect(() => {

		fetchData.get(`/employ/${employerId}`)
			.then(response => {
				setEmployer(response.data[0])
			})
	}, []);

const [employerJobs,setEmployerJobs] = useState([])
	useEffect(()=>{
		fetch(`http://localhost:5000/jobsFindByEmail?email=${employer?.email}`)
		.then(res=>res.json())
		.then(data=>setEmployerJobs(data))
	  },[employer])

	console.log(employerJobs);
	return (
		<>
			<main className="flex flex-col-reverse lg:flex-col mb-16">
				{/* short details */}
				<div className="bg-gradient-to-r from-sky-400 to-purple-400 hidden lg:flex items-center px-12 py-6">
					<img src={employer?.employData?.photo || employer?.photo} className="w-24 h-24 rounded-full object-cover" />


					{/* name */}
					<div className="ml-4 flex flex-col gap-3">
						<span className="text-2xl text-white font-semibold">{employer?.fullName}</span>
						<div className="flex items-center gap-4 text-sm text-white">
							<span className="flex items-center gap-1"><FaMapMarkerAlt />{employer?.address?.city + ', ' + employer?.address?.country}</span>
							<span className="flex items-center gap-1"><BsFillBagFill />{employer?.type}</span>
							<span className="flex items-center gap-1"><BsTelephone />{employer?.phoneNumber || 'N/A'}</span>
							<span className="flex items-center gap-1"><HiOutlineMail />{employer?.email}</span>
						</div>
						<div>
							<span className="text-xs text-blue-700 bg-blue-200 px-6 py-1 mt-1 rounded-full">Open Jobs - {employer?.jobs.length}</span>
						</div>
					</div>

					{/* button
				<div className="ml-auto">
					<button className="btn_primary w-full">Private Message</button>
				</div>
					</div>
					*/}
				</div>

				{/* details */}
				<secction className="px-6 md:px-12 flex flex-col lg:flex-row gap-8 md:gap-16 mt-16">
					<div className="lg:w-9/12 flex flex-col">
						<span className="text-2xl font-bold">About Company</span>
						<span className="text-md mt-2 text-gray-600">{employer.employData?.Company_Bio}</span>
						<span className="text-xl font-medium mt-8">{employer.jobs.length} other jobs available</span>
						{/* cards */}
						<div className="flex flex-col gap-4 mt-4">
							{
								employer.jobs.map(job => <>
									<div className="p-5 border rounded-md flex flex-col gap-4">
										<span className="font-medium">{job.title}</span>
										<div className="flex text-xs text-gray-600 gap-4">
											<span className="flex items-center gap-2"><BsBagFill /><span>{job.category}</span></span>
											<span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>{job.location}</span></span>
											<span className="md:flex items-center gap-2 hidden"><BsClock /><span>{moment(job.postTime).fromNow()}</span></span>
											<span className="md:flex items-center gap-2 hidden"><GiCash /> <span>${job.salaryMin} - ${job.salaryMax}</span></span>
										</div>
										<div className="text-xs flex gap-4">
											<span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">{job.jobType}</span>
											<span className="py-1 px-4 bg-green-100 rounded-full text-green-700">{job.companyType}</span>
											{
												job.urgent &&
												<span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
											}
										</div>
									</div>
								</>
								)
							}
						</div>
					</div>


					<div className="lg:w-3/12">
						{/* shows only on mobile device */}
						<div className="lg:hidden">
							<div className="ml-auto mb-4 text-xs flex items-center gap-4">
								<button className="bg-blue-600 py-3 px-12 rounded-lg text-white hover:bg-blue-800 w-full">Private Message</button>
								<span className="text-lg text-blue-700 bg-blue-100 p-3 rounded-lg"><BsBookmark /></span>

							</div>
						</div>
						<div className="flex flex-col bg-gray-50 p-6 gap-4">
							<div className="hidden md:flex lg:hidden items-center gap-4">
								{/* shows company image */}
								<div className="w-16 h-16 bg-red-300 rounded-full">
								</div>
								<div className="flex flex-col">
									<span className="text-xl font-bold">{employer?.name}</span>
									<span className="bg-blue-200 px-4 rounded-full py-1 text-xs">Open Jobs - {employer?.available}</span>
								</div>
							</div>
							<span className="flex items-center justify-between text-md">Company Size: <span className="text-gray-500 text-md">{employer.employData?.team}</span></span>
							<span className="flex items-center justify-between text-md">Founded in: <span className="text-gray-500 text-md">{moment(employer.founded).fromNow()}</span></span>
							<span className="flex items-center justify-between text-md">Phone: <span className="text-gray-500 text-md">{employer.employData?.phoneNumber}</span></span>
							<span className="flex items-center justify-between text-md">Location: <span className="text-gray-500 text-md">{employer.address?.city + ', ' + employer.address?.country}</span></span>
							<span className="flex items-center justify-between text-md">Social media:
								<span className="text-gray-500 text-sm flex items-center gap-2">
									<a href={employer.social?.facebook} className="text-lg"><BsFacebook /></a>
									<a href={employer.social?.linkedin} className="text-lg"><BsLinkedin /></a>
									<a href={employer.employData?.github} className="text-lg"><BsGithub /></a>
								</span>
							</span>

							<a className="bg-blue-200 flex justify-center py-3 text-blue-700 rounded-md" href={employer.website}>{employer.website || 'No link found'}</a>

						</div>
					</div>
				</secction>
			</main>
		</>
	)
}



// single Employer job

export const singleEmployerJob = (job) =>{
	
}