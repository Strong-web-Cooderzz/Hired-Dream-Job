import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiTrash } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import fetchData from "../../../../../api/fetchData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Loading from "../../../../Loading/Loading";

const Blogs = () => {
	const { user } = useContext(AuthContext)
	const [jobType, setJobType] = useState(true);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [dataType, setDataType] = useState("user");
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetchData.get("/blogPosts").then((response) => {
			setBlogs(response.data);
			setLoading(false);
		});
	}, [dataType, jobType]);

	function handleDelete(id) {
		fetchData.delete(`/deletePost/${id}`, {
			headers: {
				Authorization: `Bearer ${user.accessToken}`
			}
		})
			.then(response => {
				if (response.data.acknowledged) toast.success('Successfully deleted blog')
			})
		.catch(err => {
				console.log(err)
				if(err.response.status === 401) toast.error('Unauthorized access')
		})
	}

	// Delete Blog post
	// const handleDelete = (id) => {
	// 	fetch(`http://localhost:5000`, {
	// 		method: "DELETE",
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// };

	return (
		<>
			{loading ? (
				<>
					<Loading />
				</>
			) : (
				<div class="flex flex-col">
					<div class="overflow-x-auto ">
						<div class="py-2 inline-block min-w-full ">
							<div class="overflow-hidden">
								<table class="min-w-full">
									<thead class="border-b">
										<tr>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Thumb
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Name({blogs.length})
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Email
											</th>
											{/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										<div class="">
	<div class="w-32">
		<select onChange={(e)=>setJobType(e.target.value)} class="form-select appearance-none
			block
			w-full
			px-3
			text-base
			font-normal
			text-gray-700
			bg-white bg-clip-padding bg-no-repeat
			border border-solid border-gray-300
			rounded
			transition
			ease-in-out
			m-0
			focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
				<option selected={jobType==='ture'} value='true'>Active</option>
				<option  selected={jobType==='false'} value='false'>Deactive</option>
		</select>
	</div>
</div>
										</th> */}
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
											>
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{!loading &&
											blogs.map((blog) => (
												<>
													<tr key={blog._id} class="border-b">
														<td class="px-6 py-4 text-sm font-medium text-gray-900">
															<img
																src={blog.image}
																className="w-12 h-12 rounded-full"
																alt=""
															/>
														</td>
														<td class="text-sm text-gray-900 text-left font-light px-6 py-4 whitespace-nowrap">
															{blog.title}
														</td>
														<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
															{blog.author.email}
														</td>
														{/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{blog.isVisible ? 'Active':'Dective'}
												</td> */}
														<td class="text-sm flex gap-1 font-light px-6 py-4 whitespace-nowrap">
															<Link
																to={`/edit-blog/${blog._id}`}
																className="inline-block bg-blue-100 px-2 py-2 rounded-md text-blue-600 shadow-md hover:bg-blue-400 hover:text-white"
															>
																<BsPencil />
															</Link>
															{/* Warning Btn */}

															{/* <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className='inline-block bg-orange-100 px-2 py-2 rounded-md text-orange-600 shadow-md hover:bg-orange-400 hover:text-white'><IoWarningOutline /></Link> */}

															{/* Delete btn */}

															<div class="flex justify-center">
																<div>
																	<div class="dropstart relative">
																		<Link
																			id="dropdownMenuButton1s"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																			className=" dropdown-toggle inline-block bg-rose-100 px-2 py-2 rounded-md text-rose-600 shadow-md hover:bg-rose-400 hover:text-white"
																		>
																			<BiTrash />
																		</Link>
																		<ul
																			class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none "
																			aria-labelledby="dropdownMenuButton1s"
																		>
																			<li>
																				<a
																					class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
																					href="#"
																				>
																					Cancel
																				</a>
																			</li>
																			<li>
																				<a
																					onClick={() => handleDelete(blog._id)}
																					class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-rose-700 hover:bg-rose-100 "
																					href="#"
																				>
																					Confirm
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</td>
													</tr>
												</>
											))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Warning Modal */}
					<div
						class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
						id="exampleModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog relative w-auto pointer-events-none">
							<div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
								<div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
									<h5
										class="text-xl font-medium leading-normal text-gray-800"
										id="exampleModalLabel"
									>
										Job Warning...
									</h5>
									<button
										type="button"
										class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div class="modal-body relative p-4">
									<textarea
										className="h-64 w-full border border-blue-400 rounded-md p-4"
										placeholder="Write Report"
									></textarea>
								</div>
								<div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
									<button
										type="button"
										class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-dismiss="modal"
									>
										Close
									</button>
									<button
										type="button"
										class="px-6 py-2.5 bg-orange-100 text-orange-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-300 hover:shadow-lg focus:bg-orange-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
									>
										Send Warning
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Blogs;
