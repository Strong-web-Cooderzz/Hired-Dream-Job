import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Employer() {
	const employerId = useParams().id;
	const [employer, setEmployer] = useState({});

	useEffect(() => {
		fetch('/data/employers.json')
			.then(res => res.json())
			.then(data => {
				const newData = data.filter(i => employerId === i.id + '');
				setEmployer(newData[0]);
			});
	}, []);

	return (
		<main>
			{/* name, email, phone */}
			<section className="bg-blue-50 flex items-center px-12 py-16">
				<div className="w-24 h-24 bg-green-300 rounded-full">
				</div>

				{/* name */}
				<div className="ml-4 flex flex-col gap-3">
					<span className="text-2xl font-semibold">{employer.name}</span>
					<div className="flex items-center gap-4">
						<span className="flex items-center gap-2"><FaMapMarkerAlt />{employer.location}</span>
						<span className="flex items-center gap-2"><BsFillBagFill />{employer.type}</span>
						<span className="flex items-center gap-2"><BsTelephone />123123123</span>
						<span className="flex items-center gap-2"><HiOutlineMail />info@info.info</span>
					</div>
				</div>

				{/* button */}
				<div className="ml-auto">
					<button className="bg-blue-600 py-3 px-12 rounded-lg text-white hover:bg-blue-800">Private Message</button>
				</div>
			</section>
		</main>
	)
}