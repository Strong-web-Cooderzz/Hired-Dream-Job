import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import fetchData from "../../../api/fetchData";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AccountClient = () => {
	const { user } = useContext(AuthContext);
	const [dbUser, setDbUser] = useState('')

	useEffect(() => {
		fetchData.get('/user', {
			params: {
				email: user?.email
			}
		})
		.then(response => setDbUser(response.data))
	}, [user?.email])

	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const handleFormSubmit = (data) => {
		const userData = {
			'email': user.email,
			'fullName': user.displayName,
			'type': dbUser?.type,
			'photo': user.photoURL,
			'candidateData': data
		}
		console.log(userData);
		fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/user/${dbUser?._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data) {
					toast.success('Profile Data Updated')
					navigate('/')
				}
			})
	};

	return (
		<section className=" py-1 bg-blueGray-50">
			<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
				<form
					onSubmit={handleSubmit(handleFormSubmit)}
					className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
				>
					<div className="rounded-t bg-white mb-0 px-6 py-6">
						<div className="text-center flex justify-between">
							<h6 className="text-blueGray-700 text-xl font-bold">
								My account
							</h6>
							<button
								className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
								type="submit"
							>
								Save
							</button>
						</div>
					</div>
					<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
						<div>
							<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
								User Information
							</h6>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Username
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											defaultValue={user?.displayName}
											disabled
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email address
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											defaultValue={user?.email}
											disabled
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Phone Number
										</label>
										<input
											type="number"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="+880 123456789"
											{...register("phoneNumber", {
												required: "Phone Number Is Required",
											})}
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Title
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Web Developer"
											{...register("title", {
												required: "Title Is Required",
											})}
										/>
									</div>
								</div>
								{/* Experience */}
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Experience
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("experience")}
										>
											<option defaultValue value="Fresher">
												Fresher
											</option>
											<option defaultValue value="0-1">
												0-2 Years
											</option>
											<option value="1-3">3-5 Years</option>
											<option value="3-5">6-8 Years</option>
											<option value="5-10">9-12 Years</option>
										</select>
									</div>
								</div>
								{/* Salary */}
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Current Salary:(if have)
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("salary")}
										>
											{/* Salary */}
											<option defaultValue value="0">
												0
											</option>
											<option defaultValue value="1K - 10K">
												1K - 10K
											</option>
											<option value="11K - 15K">11K - 15K</option>
											<option value="16K - 20K">16K - 20K</option>
											<option value="21K - 30K">21K - 30K</option>
											<option value="31K - 35K">31K - 35K</option>
											<option value="36K - 40K">36K - 40K</option>
										</select>
									</div>
								</div>
								{/* Expected Salary */}
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Expected Salary
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("expectedSalary")}
										>
											{/* Salary */}
											<option defaultValue value="1K - 10K">
												1K - 10K
											</option>
											<option value="11K - 15K">11K - 15K</option>
											<option value="16K - 20K">16K - 20K</option>
											<option value="21K - 30K">21K - 30K</option>
											<option value="21K - 30K">31K - 35K</option>
											<option value="36K - 40K">36K - 40K</option>
										</select>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Age
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("age")}
										>
											<option defaultValue value="0-1">
												15-20 Years
											</option>
											<option value="21-24">21-24 Years</option>
											<option value="25-28">25-28 Years</option>
											<option value="28-35">28-35 Years</option>
											<option value="35-50">35-50 Years</option>
										</select>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Education
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("education")}
										>
											<option defaultValue value="Certificate">
												Certificate
											</option>
											<option value="Associate Degree">Associate Degree</option>
											<option value="Bachelor Degree">Bachelor Degree</option>
											<option value="Master’s Degree">Master’s Degree</option>
											<option value="Doctorate Degree">Doctorate Degree</option>

										</select>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Language
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Bangla, English"
											{...register("language", {
												required: "Language Is Required",
											})}
										/>
									</div>
								</div>
								{/* Category */}
								<div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Category
									</label>
									<div className="flex justify-center">
										<div className="mb-3 w-full">
											<select
												className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												aria-label="Default select example"
												{...register("category", { required: 'Category Required' })}
											>
												<option defaultValue value="Accounting / Finance">
													Accounting / Finance
												</option>
												<option value="Marketing">Marketing</option>
												<option value="Design">Design</option>
												<option value="Development">Development</option>
												<option value="Human Resource">Human Resource</option>
												<option value="Automotive Jobs">Automotive Jobs</option>
												<option value="Customer Service">
													Customer Service
												</option>
												<option value="Health and Care">Health and Care</option>
												<option value="Project Management">
													Project Management
												</option>
											</select>
										</div>
									</div>
								</div>
								{/* Gender */}
								<div className="w-full lg:w-6/12 px-4">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Gender
									</label>
									<div className="flex justify-center">
										<div className="mb-3 w-full">
											<select
												className="form-select appearance-none block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												aria-label="Default select example"
												{...register("gender")}
											>
												<option defaultValue value="Male">
													Male
												</option>
												<option value="Female">Female</option>
												<option value="Others">Others</option>
											</select>
										</div>
									</div>
								</div>
								<div className="w-full">
									<div className="flex flex-wrap">
										<div className="w-full lg:w-12/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													About me
												</label>
												<textarea
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													rows="4"
													placeholder="BIO"
													{...register("bio", {
														required: "You BIO Is Required",
													})}
												></textarea>
											</div>
										</div>
									</div>
								</div>
							</div>

							<hr className="mt-6 border-b-1 border-blueGray-300" />

							<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
								Contact Information
							</h6>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-12/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Street
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="south shajahanpur, shahidbagh masjid gali, khilgaon, 1217"
											{...register("street", {
												required: "Street Is Required",
											})}
										/>
									</div>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											City
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Dhaka"
											{...register("city", {
												required: "City Is Required",
											})}
										/>
									</div>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Country
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Bangladesh"
											{...register("country", {
												required: "Country Is Required",
											})}
										/>
									</div>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Postal Code
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="1217"
											{...register("postal", {
												required: "Postal Code Is Required",
											})}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};
export default AccountClient;
