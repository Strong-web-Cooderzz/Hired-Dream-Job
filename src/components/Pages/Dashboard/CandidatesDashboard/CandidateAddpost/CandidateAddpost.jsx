import React, { useContext, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from "markdown-it";
import 'react-markdown-editor-lite/lib/index.css';
import { useNavigate } from "react-router-dom";
import 'react-markdown-editor-lite/lib/index.css';
import fetchData from "../../../../../api/fetchData";
import { toast } from "react-hot-toast";

const CandidateAddpost = () => {
	const mdParser = new MarkdownIt();
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm();
	const { user, dbUser } = useContext(AuthContext);
	const navigate = useNavigate()
	const [preview, setPreview] = useState(false)

	const [loading, setLoading] = useState(false)

	const animatedComponents = makeAnimated();

	const [value, setValue] = React.useState("");

	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	const date = new Date();
	const handlePostChange = ({ html, text }) => {
		setValue(text);
	}

	const [postTags, setPostTags] = useState([]);
	const [postCategory, setPostCategory] = useState([]);
	const handleAddPost = (data) => {
		// const image = data.image[0];
		// console.log(image)
		// const formData = new FormData();
		// formData.append("file", image);
		// formData.append("upload_preset", "hired-dream-job");
		// formData.append("cloud_name", "dcckbmhft");
		const postDetails = {
			title: data.title,
			email: user?.email,
			userID: dbUser._id,
			userImage: dbUser.photo,
			name: dbUser.fullName,
			// image: thumb,
			details: value,
			date,
			categories: postCategory,
			tags: postTags,
		};

		async function postBlog() {
			const response = await fetchData.post('/postBlog', JSON.stringify(postDetails), {
				headers: {
					"Content-Type": "application/json"
				}
			});

			if (response.data.acknowledged) {
				toast.success("Successfully added blog");
			}
		}

		postBlog();


		// const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
		// fetch("https://hired-dream-job-server-sparmankhan.vercel.app/postBlog", {
		// 	method: "POST",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(postDetails),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
		// fetch(url, {
		//   method: "POST",
		//   body: formData,
		// })
		//   .then((res) => res.json())
		//   .then((imageData) => {
		//     const thumb = imageData.url;
		//     const postDetails = {
		//       title: data.title,
		//       email: user.email,
		//       userID: dbUser._id,
		//       userImage: dbUser.photo,
		//       name: dbUser.fullName,
		//       image: thumb,
		//       details: value,
		//       date: currentDate,
		//       categories: postCategory,
		//       tags: postTags,
		//     };
		//   });

		const url = `https://api.cloudinary.com/v1_1/dcckbmhft/image/upload`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				const thumb = imageData.url;
				const postDetails = {
					title: data.title,
					email: user.email,
					userID: dbUser._id,
					userImage: dbUser.photo,
					name: dbUser.fullName,
					image: thumb,
					details: value,
					date: currentDate,
					categories: postCategory,
					tags: postTags,
				};
				fetch("http://localhost:5000/postBlog", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(postDetails),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						toast.success('Post Added!')
						setLoading(false)
						reset()
						navigate('/dashboard/my_blogs')
					});
			});
	};

	return (
		<div className="w-[90%] mx-12">
			<div className="flex justify-start">
				{/* <h2 className="text-2xl">Add new Blog</h2> */}
			</div>
			<div className=" mx-auto bg-gray-100 my-6 px-3 rounded-xl">
				<div className="w-full">
					<h2 className="text-xl px-3 py-5">Add a new blog</h2>
				</div>
				<form onSubmit={handleSubmit(handleAddPost)} action="">
					<div className=" w-full sm:flex gap-3 my-3 ">
						<div class="w-full">
							<label
								for="title"
								class="form-label inline-block mb-2 text-gray-700"
							>
								Title
							</label>
							<input
								{...register("title", { required: true })}
								type="text"
								class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
								id="title"
								placeholder="Title"
							/>
						</div>

						<div className=" w-full">
							<label
								for="title"
								class="form-label inline-block w-full text-gray-700"
							>
								Select Category
							</label>
							<Select
								onChange={(e) => setPostTags(e)}
								options={categories}
								isMulti
								className="my-2 !w-full"
								closeMenuOnSelect={false}
								components={animatedComponents}
							/>
						</div>
					</div>
					<div className="md:flex gap-3">
						<div class=" w-full">
							<div class="mb-3">
								<label
									for="formFile"
									class="form-label inline-block mb-2 text-gray-700"
								>
									Featured Image
								</label>
								<input
									{...register("image", { required: false })}
									class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									type="file"
									id="formFile"
								/>
							</div>
						</div>
						<div className=" w-full">
							<label
								for="title"
								class="form-label inline-block w-full text-gray-700"
							>
								Select Tags
							</label>
							<CreatableSelect
								onChange={(e) => setPostCategory(e)}
								options={tags}
								isMulti
								className="my-2 !w-full"
								closeMenuOnSelect={false}
								components={animatedComponents}
								isClearable
							/>
						</div>
					</div>
					<div className="w-full gap-3">
						<MdEditor className="h-96" renderHTML={text => mdParser.render(text)} onChange={handlePostChange} />
					</div >
					<button
						type="submit"
						className="w-full bg-blue-100 text-blue-700 my-6 py-2 flex justify-center "
					>
						{loading ? <div class="flex justify-center items-center">
							<div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						</div> : ' Add Post'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default CandidateAddpost;
