import { useContext, useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
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
	// use states
	const [value, setValue] = useState("");
	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const [postTags, setPostTags] = useState([]);
	const [postCategory, setPostCategory] = useState([]);

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const { user } = useContext(AuthContext);
	const token = user.accessToken

	const mdParser = new MarkdownIt();

	const animatedComponents = makeAnimated();

	// sends two request in one use effect
	useEffect(() => {
		fetchData.get('/categories').then(response => setCategories(response.data))
		fetchData.get('/tags').then(response => setTags(response.data))
	}, [])

	const handlePostChange = ({ html, text }) => {
		setValue(text);
	}

	const handleAddPost = (data) => {
		const image = data.image[0];
		console.log(image)
		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", "hired-dream-job");
		formData.append("cloud_name", "dcckbmhft");

		// save image to cloud
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
					image: thumb,
					details: value,
					categories: postCategory,
					tags: postTags,
				};

				// post blog with image
				async function postBlog() {
					const response = await fetchData.post('/postBlog', JSON.stringify(postDetails), {
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
						}
					});

					if (response.data.acknowledged) {
						toast.success("Successfully added blog");
					}
				}

				postBlog();
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
								htmlFor="title"
								class="form-label inline-block mb-2 text-gray-700"
							>
								Title
							</label>
							<input
								{...register("title", { required: true })}
								type="text"
								class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-30 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="title"
								placeholder="Title"
							/>
						</div>
						<div className=" w-full">
							<label
								htmlFor="title"
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
									htmlFor="formFile"
									class="form-label inline-block mb-2 text-gray-700"
								>
									Featured Image
								</label>
								<input
									{...register("image", { required: true })}
									class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
					</div>
					<button
						type="submit"
						className="w-full bg-blue-100 text-blue-700 my-6 py-2 flex justify-center "
					>
						{' Add Post'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CandidateAddpost;
