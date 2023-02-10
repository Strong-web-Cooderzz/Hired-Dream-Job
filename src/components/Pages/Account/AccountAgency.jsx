import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AccountAgency = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const [userData, setUserData] = useState('')

	useEffect(() => {
		fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/user?email=${user?.email}`)
			.then(res => res.json())
			.then(data => {
				setUserData(data)
			})
	}, [user?.email])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const OnSubmit = (data) => {
		const employInfo = {
			'email': userData.email,
			'fullName': userData.fullName,
			'photo': userData.photo,
			'type': userData.type,
			'employData': data
		}
		console.log(employInfo);
		fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/user/${userData._id}`, {
			method: "PUT",
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(employInfo)
		})
		navigate("/");
	};

	return (
		<section className=" py-1 bg-blueGray-50">
			<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
				<form
					onSubmit={handleSubmit(OnSubmit)}
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
								Company Information
							</h6>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Company name
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
											Phone
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
											Website
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="www.abc.com"
											{...register("website", {
												required: "Website is required",
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
											Est. Since
										</label>
										<input
											type="date"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											{...register("build", {
												required: "Year of manufacture is required",
											})}
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4">
									<div className="mb-3 xl:w-96">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Team Size
										</label>
										<select
											className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											aria-label="Default select example"
											{...register("team", {
												required: "Team Is Required",
											})}
										>
											<option value="50 - 100">50 - 100</option>
											<option value="100 - 150">100 - 150</option>
											<option value="150 - 300">150 - 300</option>
											<option value="300 - 500">300 - 500</option>
											<option value="500 - 1000">500 - 1000</option>
											<option value="1000">1000+</option>
										</select>
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
													About Company
												</label>
												<textarea
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													rows="4"
													placeholder="Company Bio"
													{...register("Company_Bio", {
														required: "Company BIO Is Required",
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
											{...register("Street", {
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
											{...register("City", {
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
											{...register("Country", {
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
											{...register("Postal", {
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

export default AccountAgency;
