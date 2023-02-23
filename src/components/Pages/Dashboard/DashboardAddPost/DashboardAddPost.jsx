import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import fetchData from "../../../../api/fetchData";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DashboardAddPost = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [jobType, setJobType] = useState("");
	const [urgent, setUrgent] = useState(false);
	const [companyType, setCompanyType] = useState("");
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm();
	const { logOut, user, dbUser, token } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const handleAddNewJob = (data) => {
		console.log(data);
		setLoading(true);
		const jobDetails = {
			title: data.title,
			jobDescription: data.jobDescription,
			responsibilities: data.responsibilities,
			skills: data.skills,
			jobEmail: user.email,
			location: data.location,
			urgent: urgent,
			category: data.category,
			jobType: jobType,
			companyType: companyType,
			postTime: "1 hours ago",
			expireDate: startDate,
			trems: data.trems,
			workingHours: data.workingHours,
			salaryMin: data.salaryMin,
			salaryMax: data.salaryMax,
			rateMin: data.rateMin,
			rateMax: data.rateMax,
			timestamp: 1,
			isVisible: true,
		};
		console.log(jobDetails);
		fetchData
			.post("/jobs", jobDetails, {
				headers: {
					Authorization: `Bearer ${user?.accessToken}`,
				},
			})
			.then((response) => {
				toast.success("Job Added");
				setLoading(false);
				reset();
			});
	};

	return (
		<div className="md:w-7/12 h-screen mx-auto">
			<h2 className="text-xl "> Add New Job </h2>
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
				<form onSubmit={handleSubmit(handleAddNewJob)}>
					<div className="form-group mb-6 w-full">
						<input
							{...register("title", { required: true })}
							type="text"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput7"
							placeholder="Job Title"
						/>
					</div>
					<div className="form-group mb-6 w-full">
						<input
							{...register("location", { required: true })}
							type="text"
							className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput7"
							placeholder="Location"
						/>
					</div>
					<div className="my-5">
						<div>
							{/* Selece Category */}
							<div className="wfu">
								<select
									{...register("category", { required: true })}
									className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									aria-label="Default select example"
								>
									<option selected>Select Category</option>
									<option value="Accounting / Finance">
										Accounting / Finance
									</option>
									<option value="Marketing">Marketing</option>
									<option value="Design">Design</option>
									<option value="Development">Development</option>
									<option value="Human Resource">Human Resource</option>
									<option value="Automotive Jobs">Automotive Jobs</option>
									<option value="Customer Service">Customer Service</option>
									<option value="Health and Care">Health and Care</option>
									<option value="Project Management">Project Management</option>
								</select>
							</div>
						</div>
					</div>

					{/* Job TYpe */}
					<div className="form-group mb-6 w-full">
						<div className="flex flex-wrap items-center">
							<h3 className="mr-2">Job Type: </h3>
							<div className="form-check form-check-inline">
								<label
									className="form-check-label inline-block text-gray-800"
									htmlFor="inlineRadio10"
								>
									<input
										onChange={(e) => setJobType(e.target.value)}
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="Full Time"
									/>
									Full Time
								</label>
							</div>
							<div className="form-check form-check-inline">
								<label
									className="form-check-label inline-block text-gray-800"
									htmlFor="inlineRadio20"
								>
									<input
										onChange={(e) => setJobType(e.target.value)}
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="Part Time"
									/>
									Part Time
								</label>
							</div>
							<div className="form-check form-check-inline">
								<label
									className="form-check-label inline-block text-gray-800"
									htmlFor="inlineRadio20"
								>
									<input
										onChange={(e) => setJobType(e.target.value)}
										className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="Temporary"
									/>
									Temporary
								</label>
							</div>
							<div>
								{/* Job Urgent */}
								<div className="flex justify-center">
									<div>
										<div className="form-check">
											<input
												onClick={() => setUrgent(!urgent)}
												className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-3"
												type="checkbox"
												value="Urgent"
												id="flexCheckChecked3"
											/>{" "}
											Urgent
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Compnay Type */}
					<div className="flex ">
						<div className="flex gap-6 my-4">
							<h3>Company Type:</h3>
							<div className="form-check">
								<input
									onClick={() => setCompanyType("Private")}
									className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<label
									className="form-check-label inline-block text-gray-800"
									htmlFor="flexRadioDefault1"
								>
									Private
								</label>
							</div>
							<div className="form-check">
								<input
									onClick={() => setCompanyType("Public")}
									className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<label
									className="form-check-label inline-block text-gray-800"
									htmlFor="flexRadioDefault1"
								>
									Public
								</label>
							</div>
						</div>
					</div>

					<div className="form-group mb-6 flex	items-center gap-2">
						<div>
							{/* Working Hours */}
							<p>Working Hours</p>
							<div className="flex items-center gap-1">
								<input
									{...register("workingHours", { required: true })}
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="50"
								/>
								h/week
							</div>
						</div>
						<div>
							{/* Salary */}
							<p>Salary: </p>
							<div className="flex items-center gap-2">
								<input
									{...register("salaryMin", { required: true })}
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="35k"
								/>
								-
								<input
									{...register("salaryMax", { required: true })}
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="45k"
								/>
								/m
							</div>
						</div>
					</div>

					{/* Date picker */}
					<div className="flex gap-2 my-2">
						<div>
							<h2>Expire Date</h2>

							<DatePicker
								className="border-2 bg-white rounded-sm outline-none px-2 py-1.5"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
						<div>
							<h3>Rate</h3>
							<div className="flex gap-2 items-center">
								<input
									{...register("rateMin", { required: true })}
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="15"
								/>
								-
								<input
									{...register("rateMax", { required: true })}
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="25"
								/>
								/hour
							</div>
						</div>
					</div>

					{/* Job Description */}
					<div className="form-group mb-6">
						<h3>Job Description</h3>
						<textarea
							{...register("jobDescription", { required: true })}
							className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Job Description"
						></textarea>
					</div>

					{/* Key Responsibilities */}
					<div className="form-group mb-6">
						<h3>Key Responsibilities</h3>
						<textarea
							{...register("responsibilities", { required: true })}
							className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Job Description"
						></textarea>
					</div>

					{/* Skill & Experience */}
					<div className="form-group mb-6">
						<h3>Skill & Experience</h3>
						<textarea
							{...register("skills", { required: true })}
							className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Job Description"
						></textarea>
					</div>

					{/* Trems and condition */}
					<div className="form-group form-check text-center mb-6">
						<input
							type="checkbox"
							{...register("trems", { required: true })}
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
							id="exampleCheck87"
						/>
						<label
							className="form-check-label inline-block text-gray-800"
							htmlFor="exampleCheck87"
						>
							Accept job Treams and condition
						</label>
					</div>
					<button
						type="submit"
						className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						disabled={loading}
					>
						{loading ? "Adding..." : "Add Job"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default DashboardAddPost;
