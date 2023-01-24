import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { BsBookmark, BsSearch } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';

export default function Employers() {
	const [employ, setEmploy] = useState([])
	const [dataLoading, setDataLoading] = useState(true);
	useEffect(() => {
		fetch(`http://localhost:5000/employ?type=Agency`)
			.then(res => res.json())
			.then(data => {
				setEmploy(data);
				setDataLoading(false);
			})
			.finally(() => {
			})
	}, [])
	function SearchResultCard({ employer }) {
		const { _id, fullName, email, type, employData, photo, available } = employ;
		return (
			<>
				{
					employ.map(data => <div className="rounded-md border border-gray-200 flex flex-col justify-center items-center py-6 text-sm relative hover:shadow-sm group">
						<img src={data?.employData?.photo || data?.photo} className="rounded-full w-20 h-20 bg-red-400 object-cover" />
						<Link to={`/employer/${data._id}`} className="mt-2 text-lg hover:text-blue-600">{data?.employData?.companyName || data?.fullName}</Link>
						<span className="mt-4 text-gray-500 flex items-center gap-2"><FaMapMarkerAlt />{data.employData?.City + ',' + data.employData?.Country}</span>
						<span className="mt-2 text-gray-500 flex items-center gap-2"><BiShoppingBag />{data.type}</span>
						<span className="mt-3 text-blue-800 bg-blue-200 py-1 px-4 rounded-full text-xs">Open Jobs - {available}</span>

						{/* featured */}
						<span className="absolute top-2 left-2 bg-green-100 text-green-700 py-1 px-4 text-xs rounded-full">Featured</span>

						{/* bookmark icon */}
						<span className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hidden group-hover:block cursor-pointer"><BsBookmark /></span>
					</div>)
				}
			</>
		);
	}

	const [search, setSearch] = useState([]);

	useEffect(() => {
		fetch('/data/employers.json')
			.then(res => res.json())
			.then(data => setSearch(data));
	}, []);

	return (
		<main className="w-full mb-16">
			{/* search form starts here */}
			<section className="bg-blue-50 w-full justify-center py-8 px-4 md:p-12 grid items-center gap-6">
				{/* search form */}
				<form className="w-[90vw] bg-transparent lg:w-full flex flex-col lg:flex-row gap-8 lg:px-8 lg:py-4 rounded-md lg:bg-white">
					{/* search by name */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div>
							<BsSearch />
						</div>
						<input className="outline-none w-content" type="text" placeholder="Job title, keywords, or company" />
					</div>

					{/* search by location */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div>
							<FaMapMarkerAlt />
						</div>
						<input className="outline-none" type="text" placeholder="City or postcode" />
					</div>

					{/* category list */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div>
							<BiShoppingBag />
						</div>
						<select className="bg-transparent text-gray-500 w-content">
							<option value="">Choose a category</option>
							<option>Test</option>
							<option>Test</option>
							<option>Test</option>
						</select>
					</div>

					{/* search button */}
					<div className="w-full">
						<button className="bg-blue-600 text-white py-4 px-12 rounded-md w-full text-xs">Find Jobs</button>
					</div>
				</form>

				<div className="grid place-content-center text-xs">
					<select className="bg-blue-100 px-6 py-3 rounded-md" name="founded-date" id="founded-date">
						<option value="">Founded Date</option>
						<option value="">Test</option>
						<option value="">Test</option>
						<option value="">Test</option>
					</select>
				</div>
			</section>

			{/* spinner */}
			{
				dataLoading && <>
					<div className='w-36 h-36 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-transparent animate-spin mt-16'>
					</div>
				</>
			}

			{/* search results */}
			{
				!dataLoading && <>
					<section className="px-12 py-12">
						<div className="grid grid-cols-2 gap-y-6 md:gap-y-0 md:flex justify-between items-center">
							{/* shows how many jobs available */}
							<span className="col-start-1 col-end-3 text-center text-sm md:text-md">
								<span className="font-medium">{employ.length}</span> jobs
							</span>

							{/* sorting options */}
							<div className="flex md:gap-4 col-start-1 col-end-3 justify-center gap-3 text-xs md:text-md">
								<select className="bg-gray-100 px-6 py-2" name="sort-by" id="sort-by">
									<option value="">Sort by (default)</option>
								</select>

								<select className="bg-gray-100 px-6 py-2 rounded-md" name="pagination" id="pagination">
									<option value="">All</option>
								</select>
							</div>
						</div>
					</section>
				</>
			}

			{/* cards */}
			{
				!dataLoading && <>
					<div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<SearchResultCard />
					</div>
				</>
			}
		</main>
	)
}
