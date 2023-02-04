import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Companies from "./Companies";
import { Form } from "react-router-dom";

const Hero = () => {
	const [formLoading, setFormLoading] = useState(false);
	// check whether form is empty or not
	const [isEmpty, setIsEmpty] = useState(true);

	return (
		<div className="md:pl-20 overflow-hidden lg:pl-24">
			<div className="w-full sm:flex text-white sm:text-black text-center sm:text-left  relative">
				<div className="lg:w-7/12 mx-8 z-10 flex items-center justify-center pt-4 sm:pt-56">
					<div className="mb-2">
						{/* Title */}
						<h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold">
							There Are <span className="sm:text-[#1967d2] text-blue-200">93,178</span> <br />
							Postings Here For you!
						</h2>
						{/* Small title */}
						<p className="lg:py-6 md:py-4 py-3 text-sm">
							Postings Here For you! Find Jobs, Employment & Career
							Opportunities
						</p>

						<div>
							<div>
								{/* Search Form */}
								<Form onSubmit={() => setFormLoading(true)} method="post" action="/find-jobs" className="sm:flex items-center sm:border sm:border-[#ddd] sm:bg-white md:w-full rounded-full">
									<div className="relative">
										<span className="absolute left-2 top-5 ">
											<FiSearch className="text-md" />
										</span>
										{/* Input for keyword or title */}
										<input
											placeholder="Job title, keywords, or company"
											className="border-2 text-black sm:border-none px-8 w-full sm:w-auto outline-none md:px-8 rounded-full text-sm py-4"
											type="text"
											name="job-title"
											required={isEmpty}
										/>
									</div>
									<div className="relative lg:mt-0 md:mt-0 mt-5 ">
										<span className="absolute left-2 top-5 ">
											<GoLocation className="text-md" />
										</span>
										{/* Input for city or post code */}
										<input onChange={e => e.target.value && setIsEmpty(false)}
											placeholder="City or postcode"
											className="outline-none px-8 text-black w-full sm:w-auto text-sm border-2 sm:border-none rounded-full py-4"
											type="text"
											name="job-location"
										/>
									</div>
									<button type="submit" className={`bg-blue-500 mt-4 md:mt-0 md:w-24 lg:w-28 w-full sm:w-full hover:bg-blue-400 h-12 mr-[2px] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 ${formLoading && 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed lg:w-32'}`} disabled={formLoading}>
										<div className={`w-5 h-5 rounded-full border-2 border-t-gray-600 border-x-transparent border-b-transparent animate-spin ${!formLoading && 'hidden'}`}></div>
										<span>Find jobs</span>
									</button>
								</Form>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-full">
					{/* Right side image */}
					<div className="sm:w-[800px] w-full h-[400px] bg-blue-700  -z-10 sm:h-[800px] sm:rounded-full left-0 sm:left-auto -top-0 absolute sm:-top-80 sm:-right-48 overflow-hidden">
						<img
							src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
							className="w-full h-full opacity-40 object-cover"
							alt=""
						/>
					</div>

				</div>

			</div>
			{/* Company Slider */}
			<div className="md:w-7/12 mt-12 flex justify-center w-full">
				<Companies />
			</div>
		</div>
	);
};

export const formAction = async ({ request }) => {
	const data = await request.formData();
	const form = {
		title: data.get('job-title'),
		location: data.get('job-location')
	}
	return form;
}

export default Hero;
