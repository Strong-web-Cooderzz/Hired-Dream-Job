import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

export default function Employers() {
	return (
		<main className="w-full">
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
		</main>
	)
}