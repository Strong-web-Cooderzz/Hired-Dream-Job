import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Articles = () => {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://hired-dream-job-server-sparmankhan.vercel.app/blogPosts')
			.then(res => res.json())
			.then(data => {
				setPosts(data)
				setLoading(false)
			})
	}, [loading])
	console.log(posts);

	const showDate = (date) => {
		const newDate = new Date();
		const month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(newDate);
		const day = newDate.getDay();
		const year = newDate.getFullYear();
		const fullDate = `${month} ${day}, ${year}`;
		return fullDate;
	}

	return (
		<div className="px-4 mt-10  w-full mb-8  mx-auto">
			<h2 className="text-3xl font-semibold text-center">Recent News Articles</h2>
			<p className="text-center mt-2 mb-4">Fresh job related news content posted each day.</p>
			{
				loading ?
					<div className='grid grid-cols-3 w-full'>

						<div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
							<div className="h-48 rounded-t bg-gray-300"></div>
							<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-3/4 h-6 rounded bg-gray-300"></div>
							</div>
						</div>


						<div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
							<div className="h-48 rounded-t bg-gray-300"></div>
							<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-3/4 h-6 rounded bg-gray-300"></div>
							</div>
						</div>

						<div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
							<div className="h-48 rounded-t bg-gray-300"></div>
							<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-full h-6 rounded bg-gray-300"></div>
								<div className="w-3/4 h-6 rounded bg-gray-300"></div>
							</div>
						</div>
					</div>

					:
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
						{


							posts.map(post => <div key={post._id} className="w-full mt-5 rounded-md overflow-hidden border-2">
								{/* image */}
								<div className="overflow-hidden">
									<img className="w-full hover:scale-110 transition-transform h-40 object-cover" src={post.image} alt="Mountain" />
								</div>
								{/* text */}
								<div className="p-4">
									<div className="font-bold text-xl mb-2 flex gap-2">
										{post.title}
									</div>
									<p className='flex gap-2 text-xs text-blue-400'>  {post.categories?.map(category => <p className='capitalize'>
										{category.label}
									</p>)}</p>
									<div className="flex mt-3">
										<p className="mr-5 font-semibold text-gray-400">{showDate(post.date)}</p>
										<p className="font-semibold text-gray-400">12 Comments</p>
									</div>
									<p className="text-gray-700 text-base">
									</p>
								</div>
								<div className="px-4 pb-4">
									<Link className='w-full rounded-md bg-blue-100 flex justify-center py-3' to={`/blogs/${post._id}`}>
										<button className="text-md font-semibold text-sky-400">Read the article</button>
									</Link>
								</div>
							</div>)

						}
					</div>
			}

			<div className='mt-4 flex justify-center'>
				<button className=' bg-blue-500 hover:bg-blue-700 btn-normal  text-white  flex items-center gap-3  ' > Load more articles <FaArrowRight className='text-white ' />   </button>
			</div>
		</div>
	);
};

export default Articles;
