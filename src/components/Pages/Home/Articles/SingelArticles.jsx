import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLocation, useParams } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegComment } from 'react-icons/fa';
import fetchData from '../../../../api/fetchData';
import Comments from './Comments';
import { FiThumbsUp } from 'react-icons/fi';

const SingelArticles = () => {
	const [post, setPost] = useState({});
	const [dataLoading, setDataLoading] = useState(true);
	const [hideComments, setHideComments] = useState(true);
	const location = useLocation();
	const postId = useParams().id;
	console.log(post)
	const shareURL = `https://hired-dream-job.vercel.app${location.pathname}`

	useEffect(() => {
		async function fetchPost() {
			const response = await fetchData.get(`/blogPost/${postId}`)
			setPost(response.data[0])
			setDataLoading(false)
		}

		fetchPost();
	}, [])

	const showDate = (date) => {
		if (date) {
			const newDate = new Date(date);
			const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(newDate);
			const day = newDate.getDate();
			const year = newDate.getFullYear();
			const fullDate = `${month} ${day}, ${year}`;
			return fullDate;
		}
	}

	return (
		<section className='relative overflow-x-hidden'>
			{/* spinner */}
			{
				dataLoading && <>
					<div className='w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin my-16'>
					</div>
				</>
			}
			{
				!dataLoading &&
				<div className='mb-16'>
					<div className='w-11/12 mx-auto md:w-full px-8 lg:w-8/12'>
						<div className="flex items-center gap-2 text-sm pt-16">
							<img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src={post.author?.photo} alt="" />
							<div>
								<h3 className="text-lg">{post.author?.fullName}</h3>
								<span className="mr-2 text-gray-600">{showDate(post.date)}</span>
								<span className='text-sm mr-2 text-gray-600'>&#x2022;</span>
								<span className='text-gray-600'>{post.comments?.length} Comment{post.comments?.length ? 's' : ''}</span>
							</div>
							{/* <!-- Share this post --> */}
							<div className="ml-auto">
								<div className="flex items-center">
									<div className='flex gap-4 items-center text-gray-600'>
										<a target={"_blank"} href={`https://facebook.com/sharer.php?u=${shareURL}`} className="text-lg"><FaFacebookF /></a>
										<a target={"_blank"} href={`https://twitter.com/share?u=${shareURL}`} className="text-lg"><FaTwitter /></a>
										<button type="button" className="text-lg"><FaLinkedinIn /></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-8 mt-4 w-full flex justify-center">
						<img className="" src={post.image} alt="" />
					</div>
					<div className="my-8 lg:w-8/12 md:w-full px-4 sm:px-8 lg:mx-auto">
						<h2 className="font-semibold text-4xl mt-5">{post.title}</h2>
						<div className='prose lg:prose-xl font-serif'>
							<ReactMarkdown children={post.details} />
						</div>
						<div className="my-6 mt-12 flex items-center justify-between">
							{/* Tags */}
							<div className='flex items-center gap-1'>
								{
									post?.tags?.map(tag => <button type="button" className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded focus:outline-none hover:bg-blue-400 hover:text-white" >{tag.label}</button>)
								}
							</div>
						</div>
						<div className='text-xl text-gray-600 flex gap-6 items-center overflow-scroll'>
							<span><FiThumbsUp /></span>
							<span className='flex items-center gap-2'><span onClick={() => setHideComments(!hideComments)} className="cursor-pointer"><FaRegComment /></span> <span>{post.comments?.length}</span></span>
						</div>
						<div>
							<Comments post={post} hideComments={hideComments} setHideComments={setHideComments} />
						</div>
						{/* <!-- Contact --> */}
						{/*<div>
						<section className="bg-white dark:bg-gray-900 ">
							<div className="py-8 lg:py-16 px-4 border-gray-600">
								<h2 className="my-6 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Leave your thought here</h2>
								<form action="#" className="space-y-8">
									<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
										<div>
											<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
											<input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
										</div>
										<div>
											<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
											<input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" required />
										</div>
									</div>
									<div>
										<label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
										<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
									</div>
									<div className="sm:col-span-2">
										<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
										<textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
									</div>
									<button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
								</form>
							</div>
						</section>
					</div>*/}
					</div>
				</div>
			}
		</section>
	);
};

export default SingelArticles;
