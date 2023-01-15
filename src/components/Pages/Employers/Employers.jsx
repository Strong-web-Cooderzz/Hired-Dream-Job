import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { BsBookmark } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Employers() {
	function SearchResultCard({ employer }) {
		const { id, name, location, type, available } = employer;
		return (
			<div className="rounded-md border border-gray-200 flex flex-col justify-center items-center py-6 text-sm relative hover:shadow-sm group">
				<div className="rounded-full w-20 h-20 bg-red-400"></div>
				<Link to={`/employer/${id}`} className="mt-2 text-lg hover:text-blue-600">{name}</Link>
				<span className="mt-4 text-gray-500 flex items-center gap-2"><FaMapMarkerAlt />{location}</span>
				<span className="mt-2 text-gray-500 flex items-center gap-2"><BiShoppingBag />{type}</span>
				<span className="mt-3 text-blue-800 bg-blue-200 py-1 px-4 rounded-full text-xs">Open Jobs - {available}</span>

				{/* featured */}
				<span className="absolute top-2 left-2 bg-green-100 text-green-500 py-1 px-4 text-xs rounded-full">Featured</span>

				{/* bookmark icon */}
				<span className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hidden group-hover:block cursor-pointer"><BsBookmark /></span>
			</div>
		);
	}

	const [search, setSearch] = useState([]);

	useEffect(() => {
		fetch('/data/employers.json')
			.then(res => res.json())
			.then(data => setSearch(data));
	}, []);

	return (
		<main className="w-full">
			{/* search form starts here */}
			<section className="bg-blue-50 w-full justify-center p-12 grid items-center gap-6">
				{/* search form */}
				<form className="flex gap-8 px-8 py-4 rounded-md bg-white">
					{/* search by name */}
					<div className="flex items-center gap-4">
						<div>
							<BsSearch />
						</div>
						<input className="outline-none" type="text" placeholder="Job title, keywords, or company" />
					</div>

					{/* search by location */}
					<div className="flex items-center gap-4">
						<div>
							<FaMapMarkerAlt />
						</div>
						<input className="outline-none" type="text" placeholder="City or postcode" />
					</div>

					{/* category list */}
					<div className="flex items-center gap-4">
						<div>
							<BiShoppingBag />
						</div>
						<select className="bg-transparent text-gray-500">
							<option value="">Choose a category</option>
							<option>Test</option>
							<option>Test</option>
							<option>Test</option>
						</select>
					</div>

					{/* search button */}
					<div className="">
						<button className="bg-blue-600 text-white py-4 px-12 rounded-md">Find Jobs</button>
					</div>
				</form>

				<div className="grid place-content-center">
					<select className="bg-blue-100 px-6 py-3 rounded-md" name="founded-date" id="founded-date">
						<option value="">Founded Date</option>
						<option value="">Test</option>
						<option value="">Test</option>
						<option value="">Test</option>
					</select>
				</div>
			</section>

			{/* search results */}
			<section className="px-12 py-12">
				<div className="flex justify-between items-center">
					{/* shows how many jobs available */}
					<span>
						{search.length} jobs
					</span>

					{/* sorting options */}
					<div className="flex gap-4">
						<select className="bg-gray-100 px-6 py-2" name="sort-by" id="sort-by">
							<option value="">Sort by (default)</option>
						</select>

						<select className="bg-gray-100 px-6 py-2 rounded-md" name="pagination" id="pagination">
							<option value="">All</option>
						</select>
					</div>
				</div>
			</section>

			{/* cards */}
			<div className="px-12 grid grid-cols-4 gap-6">
				{
					search.length && search.map((i, id) => <SearchResultCard key={id} employer={i} />)
				}
			</div>
		</main>
	)
}