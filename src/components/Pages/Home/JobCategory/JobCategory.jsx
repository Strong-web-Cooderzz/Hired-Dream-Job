import React, { useEffect, useState } from "react";
import { FaCogs, FaHandHoldingUsd, FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { MdOutlineDesignServices, MdPersonSearch } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { GiHealthNormal } from "react-icons/gi";
import fetchData from "../../../../api/fetchData";

const JobCategory = () => {
	const [count, setCount] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		async function fetchJobCounter() {
			const response = await fetchData.get('/job-counter-by-category');
			setCount(response.data);
		}

		fetchJobCounter();
	}, []);

	useEffect(() => {
		if (count.length) {
			const returnCount = (category) => {
				const counter = count.filter(i => i._id === category);
				const categoryCount = counter[0]?.count || 0
				return categoryCount;
			}
			setCategory([
				{
					Name: "Accounting / Finance",
					icon: <FaHandHoldingUsd className="text-4xl text-blue-500 child2 duration-1000" />,
					Positions: returnCount('Accounting / Finance'),
				},
				{
					Name: "Marketing",
					icon: (
						<GoMegaphone className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Marketing'),
				},
				{
					Name: "Design",
					icon: (
						<MdOutlineDesignServices className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Design'),
				},
				{
					Name: "Development",
					icon: (
						<FaLaptopCode className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount("Development"),
				},
				{
					Name: "Human Resource",
					icon: (
						<MdPersonSearch className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Human Resource'),
				},
				{
					Name: "Automotive Jobs",
					icon: (
						<RxRocket className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Automotive Jobs'),
				},
				{
					Name: "Customer Service",
					icon: <FaHandsHelping className="text-4xl text-blue-500 child2 duration-1000" />,
					Positions: returnCount('Customer Service'),
				},
				{
					Name: "Health and Care",
					icon: (
						<GiHealthNormal className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Health and Care'),
				},
				{
					Name: "Project Management",
					icon: (
						<FaCogs className="text-4xl text-blue-500 child2 duration-1000" />
					),
					Positions: returnCount('Project Management'),
				},
			]);
		}
	}, [count]);

	return (
		<>
			<section className="w-full  mx-auto py-20 px-5">
				<div className="text-center space-y-4">
					<h2 className="text-3xl font-semibold">Popular Job Categories</h2>
					<p className="text-md text-[#b3b3b3]">9 Categories are available</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
					{
						category.length ?
							<>
								{category.map(({ Name, icon, Positions }, index) => (
									<div
										key={index}
										className="flex justify-start hover:bg-blue-100 items-center gap-5 cursor-pointer parent border border-cyan-400/30 p-5 rounded-lg"
									>
										<div className="p-4 bg-black/5 rounded-lg child duration-1000">
											<span>{icon}</span>
										</div>
										<div>
											<p className="text-xl font-semibold">{Name}</p>
											<p className="text-sm text-gray-400">
												{`${Positions} open position${Number(Positions) > 0 ? 's' : ''}`}
											</p>
										</div>
									</div>
								))}
							</> : <span>Loading</span>
					}
				</div>
			</section>
		</>
	);
};

export default JobCategory;
