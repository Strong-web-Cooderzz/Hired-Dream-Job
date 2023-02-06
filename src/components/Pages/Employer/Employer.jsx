import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillBagFill, BsBagFill, BsClock, BsFacebook, BsGithub } from "react-icons/bs";
import { BsTelephone, BsLinkedin, BsBookmark } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiCash } from "react-icons/gi";

export default function Employer() {
	const employerId = useParams().id;
	const [employer, setEmployer]=useState([]);
	useEffect(() => {
		fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/employ/${employerId}`)
			.then(res => res.json())
			.then(data => setEmployer(data));
	}, []);

	console.log(employer);
	return (
		<>
		<main className="flex flex-col-reverse lg:flex-col mb-16">
			{/* short details */}
			<section className="bg-blue-50 hidden lg:flex items-center px-12 py-16">
				<img src={employer?.employData?.photo || employer?.photo}  className="w-24 h-24 bg-green-300 rounded-full" />

				{/* name */}
				<div className="ml-4 flex flex-col gap-3">
					<span className="text-2xl font-semibold">{employer?.employData?.companyName || employer?.fullName}</span>
					<div className="flex items-center gap-4 text-xs text-gray-600">
						<span className="flex items-center gap-1"><FaMapMarkerAlt />{employer?.employData?.City + ', ' +employer?.employData?.Country}</span>
						<span className="flex items-center gap-1"><BsFillBagFill />{employer?.type}</span>
						<span className="flex items-center gap-1"><BsTelephone />{employer?.employData?.phoneNumber}</span>
						<span className="flex items-center gap-1"><HiOutlineMail />{employer?.email}</span>
					</div>
					<div>
						<span className="text-xs text-blue-700 bg-blue-200 px-6 py-1 rounded-full">Open Jobs - {employer?.available}</span>
					</div>
				</div>

				{/* button */}
				<div className="ml-auto">
					<button className="bg-blue-600 py-3 px-12 rounded-lg text-white hover:bg-blue-800">Private Message</button>
				</div>
			</section>

			{/* details */}
			<secction className="px-6 md:px-12 flex flex-col lg:flex-row gap-8 md:gap-16 mt-16">
				<div className="lg:w-9/12 flex flex-col">
					<span className="text-lg font-bold">About Company</span>
					<span className="text-sm mt-4 text-gray-600">{employer.employData?.Company_Bio}</span>
					<span className="text-xl font-medium mt-6">3 others jobs available</span>
					<span className="text-gray-600 text-xs">2020 jobs live - 293 added today</span>
					{/* cards */}
					<div className="flex flex-col gap-8 mt-4">
						<div className="p-5 border rounded-md flex flex-col gap-4">
							<span className="font-medium">Software Engineer</span>
							<div className="flex text-xs text-gray-600 gap-4">
								<span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
								<span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
								<span className="md:flex items-center gap-2 hidden"><BsClock /> <span>11 hours ago</span></span>
								<span className="md:flex items-center gap-2 hidden"><GiCash /> <span>$35k -$45k</span></span>
							</div>
							<div className="text-xs flex gap-4">
								<span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
								<span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
								<span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
							</div>
						</div>
						<div className="p-5 border rounded-md flex flex-col gap-4">
							<span className="font-medium">Software Engineer</span>
							<div className="flex text-xs text-gray-600 gap-4">
								<span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
								<span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
								<span className="md:flex items-center gap-2 hidden"><BsClock /> <span>11 hours ago</span></span>
								<span className="md:flex items-center gap-2 hidden"><GiCash /> <span>$35k -$45k</span></span>
							</div>
							<div className="text-xs flex gap-4">
								<span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
								<span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
								<span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
							</div>
						</div>
						<div className="p-5 border rounded-md flex flex-col gap-4">
							<span className="font-medium">Software Engineer</span>
							<div className="flex text-xs text-gray-600 gap-4">
								<span className="flex items-center gap-2"><BsBagFill /> <span>Segment</span></span>
								<span className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Segment</span></span>
								<span className="md:flex items-center gap-2 hidden"><BsClock /> <span>11 hours ago</span></span>
								<span className="md:flex items-center gap-2 hidden"><GiCash /> <span>$35k -$45k</span></span>
							</div>
							<div className="text-xs flex gap-4">
								<span className="py-1 px-4 bg-blue-100 rounded-full text-blue-700">Full Time</span>
								<span className="py-1 px-4 bg-green-100 rounded-full text-green-700">Private</span>
								<span className="py-1 px-4 bg-yellow-100 rounded-full text-yellow-700">Urgent</span>
							</div>
						</div>
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
					<div className="flex flex-col bg-blue-50 p-6 gap-4">
						<div className="hidden md:flex lg:hidden items-center gap-4">
							{/* shows company image */}
							<div className="w-16 h-16 bg-red-300 rounded-full">
							</div>
							<div className="flex flex-col">
								<span className="text-xl font-bold">{employer?.name}</span>
								<span className="bg-blue-200 px-4 rounded-full py-1 text-xs">Open Jobs - {employer?.available}</span>
							</div>
						</div>
						<span className="flex items-center justify-between text-md">Primary industry: <span className="text-gray-500 text-sm">Software</span></span>
						<span className="flex items-center justify-between text-md">Company Size: <span className="text-gray-500 text-sm">{employer.employData?.team}</span></span>

						<span className="flex items-center justify-between text-md">Founded in: <span className="text-gray-500 text-sm">{employer.employData?.build}</span></span>
						<span className="flex items-center justify-between text-md">Phone: <span className="text-gray-500 text-sm">{employer.employData?.phoneNumber}</span></span>
						<span className="flex items-center justify-between text-md">Location: <span className="text-gray-500 text-sm">{employer.employData?.City+', '+employer.employData?.Country}</span></span>
						<span className="flex items-center justify-between text-md">Social media:
						 <span className="text-gray-500 text-sm flex items-center gap-1">
							<a href={employer.employData?.facebook} className="text-lg"><BsFacebook /></a>
							<a href={employer.employData?.linkedin} className="text-lg"><BsLinkedin /></a>
							<a href={employer.employData?.github} className="text-lg"><BsGithub /></a>
							</span>
							</span>

						<a className="bg-blue-200 flex justify-center py-3 text-blue-700 rounded-md" href={employer.employData?.website}><button>{employer.employData?.website}</button></a>

					</div>
				</div>
			</secction>
		</main>
		</>
	)
}
