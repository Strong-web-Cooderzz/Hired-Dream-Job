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
	}, []);

	function searchJob(e) {
		e.preventDefault();
		const form = e.target;
		const search = form.search.value;
		const location = form.location.value;
		setDataLoading(true);
		fetch(`http://localhost:5000/find-employer?search=${search}&location=${location}`)
			.then(res => res.json())
			.then(data => {
				setEmploy(data);
				setDataLoading(false);
			});
	}

	function SearchResultCard() {
		return (
			<>
				{
					employ.map(data => <div className="rounded-md border border-gray-200 flex flex-col justify-center items-center py-6 text-sm relative hover:shadow-sm group">

						<img src={data?.employData?.photo || data?.photo} className="rounded-full w-20 h-20 object-cover" />
						<Link to={`/employer/${data._id}`} className="mt-2 text-lg hover:text-blue-600">{data?.employData?.companyName || data?.fullName}</Link>
						<span className="mt-4 text-gray-500 flex items-center gap-2"><FaMapMarkerAlt />{data.employData?.City + ',' + data.employData?.Country}</span>

						<span className="mt-2 text-gray-500 flex items-center gap-2"><BiShoppingBag />{data.type}</span>
						<span className="mt-3 text-blue-800 bg-blue-200 py-1 px-4 rounded-full text-xs">Open Jobs - {data.available}</span>

						{/* featured */}
						<span className="absolute top-2 left-2 bg-green-100 text-green-700 py-1 px-4 text-xs rounded-full">Featured</span>

						{/* bookmark icon */}
						<span className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hidden group-hover:block cursor-pointer"><BsBookmark /></span>
					</div>)
				}
			</>
		);
	}

	return (
		<main className="w-full mb-16">
			{/* search form starts here */}
			<section className="bg-gradient-to-r from-blue-400 to-purple-400 w-full justify-center py-12 px-4 md:p-12 md:py-6 grid items-center gap-3">
				{/* search form */}
				<form onSubmit={e => searchJob(e)} className="w-[90vw] bg-transparent text-sm lg:w-full flex flex-col lg:flex-row gap-8 lg:px-4 lg:py-2 rounded-md lg:bg-white">
					{/* search by name */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div className='text-gray-600'>
							<BsSearch />
						</div>
						<input name='search' className="outline-none w-content" type="text" placeholder="Job title, keywords or company" />
					</div>

					{/* search by location */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div className='text-gray-600'>
							<FaMapMarkerAlt />
						</div>
						<input name='location' className="outline-none" type="text" placeholder="City or postcode" />
					</div>

					{/* category list */}
					<div className="flex items-center gap-4 w-full bg-white p-4 lg:p-0 rounded-md lg:rounded-none shadow lg:shadow-none">
						<div className='text-gray-600'>
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
						<button className="bg-blue-600 text-white py-4 px-12 rounded-md w-full text-sm">Find Jobs</button>
					</div>
				</form>

				<div className="grid place-content-center text-xs">
					<select className="bg-white text-gray-500 px-6 py-3 rounded-md" name="founded-date" id="founded-date">
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
					<div className='w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin mt-16'>
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
								<select className="bg-white border-2 rounded-md px-6 py-2" name="sort-by" id="sort-by">
									<option value="">Sort by (default)</option>
								</select>

								<select className="bg-white border-2 px-6 py-2 rounded-md" name="pagination" id="pagination">
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
