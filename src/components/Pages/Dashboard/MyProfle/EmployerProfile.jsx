import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import { Link } from "react-router-dom";
import fetchData from "../../../../api/fetchData";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";

const EmployerProfile = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	console.log(user);
	const [loading, setLoading] = useState(false);
	const [uploadingLoading, setUploadingLoading] = useState(false);
	const [updated, setUpdated] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetchData
			.get(`/user?email=${user?.email}`)
			.then((response) => {
				setUserData(response.data);
				setLoading(false);
			});
	}, [user, updated]);

	const imgbbAPIKEY = "baca7cebf7d1365bf97c10bb391342f9";

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	const handleUpdateEmployer = (data) => {
		setUploadingLoading(true)
		const image = data.image[0];
		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", "hired-dream-job");
		formData.append("cloud_name", "dcckbmhft");

		const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				const imageUrl = imageData.url;
				const updateData = {
					photo: imageUrl,
				};
				if (imageUrl) {
					fetchData
						.put(`/employ?email=${user.email}`, updateData, {
							headers: {
								Authorization: `Bearer ${user?.accessToken}`,
							},
						})
						.then((response) => {
							setUpdated(!updated)
							toast.success("Photo Updated!");
							reset()
							setUploadingLoading(false)
						});
				}
			});
	};

	return (
		<div className="w-full text-gray-700 h-full bg-gray-100 md:px-8">
			{loading && <Loading />}
			<h3 className="p-8 text-xl">My Profile</h3>
			<div className="bg-white md:px-8 px-4 rounded-md space-y-4">
				<form onSubmit={handleSubmit(handleUpdateEmployer)} className="">
					<div>
						{/* Photo Update */}
						<div className="flex relative items-center gap-2">
							<div className="mb-3 w-full flex justify-center">
								<label
									htmlFor="formFile"
									className="form-label overflow-hidden md:w-1/2 relative mx-auto inline-block mb-2 text-gray-700"
								>
									<div className="w-full flex justify-center ">
										<img
											className=" h-24 w-24 border-2 rounded-full my-2"
											src={userData.photo}
											alt=""
										/>
									</div>
									<input
										accept="image/*"
										type="file"
										name="file_upload"
										{...register("image", { required: true })}
										className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300  rounded transition ease-in-out  m-0 "
										id="formFile"
									/>
									<div className="flex justify-center">
										<button className="btn_primary justify-center my-2">
											{
												uploadingLoading ? 'Uploading...' : 'Update'
											}
										</button>

									</div>
								</label>
							</div>
						</div>
					</div>
				</form>

				<div className="flex justify-end ">
					<Link to={'edit-employer'} onClick={() => setModal(!modal)} className="btn_primary">Edit</Link>
				</div>

				<div className="w-full md:flex gap-2">
					<div className="md:w-1/2 bg-gray-100 rounded-md px-3 py-2">

						<h3 className="text-center text-xl font-semibold">User Info</h3>
						<div>
							{/* Email */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Name:</p>
								<p>{userData.fullName}</p>
							</div>
							{/* Email */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Email:</p>
								<p>{userData.email}</p>
							</div>
							{/* Phone Number */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Phone Number:</p>
								<p>{userData.phoneNumber}</p>
							</div>
							{/* Team */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Team:</p>
								<p>{userData.team}</p>
							</div>
							{/* Website */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Website:</p>
								<p>{userData.website}</p>
							</div>
							{/* Founded In */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Founded In:</p>
								<p>{userData.founded}</p>
							</div>
							{/* Account Created */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Account Created:</p>
								<p>{userData.createdAt}</p>
							</div>
						</div>
					</div>
					{/* Others Info */}
					<div className="md:w-1/2 bg-gray-100 rounded-md px-3 py-2">
						<h3 className="text-center text-xl font-semibold">Others Info</h3>
						<div>
							{/* Facebook */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Facebook:</p>
								<p>{userData?.social?.facebook.slice(0, 35)}...</p>
							</div>
							{/* Twitter */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Twitter:</p>
								<p>{userData?.social?.twitter.slice(0, 35)}...</p>
							</div>
							{/* Github */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Github:</p>
								<p>{userData?.social?.github.slice(0, 35)}...</p>
							</div>
							{/* LinkedIn */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">LinkedIn:</p>
								<p>{userData?.social?.linkedin.slice(0, 35)}...</p>
							</div>
							{/* Country */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Country or city:</p>
								<p>{userData.address?.country}, {userData.address?.city}</p>
							</div>
							{/* Zip Code */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Zip Code:</p>
								<p>{userData.address?.postal}</p>
							</div>
							{/* Street Address? */}
							<div className="flex items-center gap-2 bg-white px-2 border-b rounded-md py-1">
								<p className="font-semibold">Street Address?:</p>
								<p>{userData.address?.street}</p>
							</div>
						</div>
					</div>

				</div>
				{/* About */}
				<div className="w-full bg-gray-100 rounded-md px-3 py-2"></div>
				{/* Education */}
				<div className="w-full bg-gray-100 rounded-md px-3 py-2"></div>
			</div>
			<div>

			</div>
		</div>
	);
};

export default EmployerProfile;
