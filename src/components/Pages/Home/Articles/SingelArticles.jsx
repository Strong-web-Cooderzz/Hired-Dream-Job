import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLocation, useParams } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegComment } from 'react-icons/fa';
import fetchData from '../../../../api/fetchData';
import Comments from './Comments';
import { FiThumbsUp } from 'react-icons/fi';
import moment from 'moment';

const SingelArticles = () => {
	const [post, setPost] = useState({});
	const [dataLoading, setDataLoading] = useState(true);
	const [hideComments, setHideComments] = useState(true);
	const location = useLocation();
	const postId = useParams().id;
	console.log(post)
	const shareURL = `https://hired-dream-job.vercel.app${location.pathname}`

	async function fetchPost() {
		const response = await fetchData.get(`/blogPost/${postId}`)
		setPost(response.data[0])
	}

	useEffect(() => {
		fetchPost().then(() => setDataLoading(false));
	}, [])

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
								<span className="mr-2 text-gray-600">{moment(post.date).fromNow()}</span>
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
							<Comments post={post} hideComments={hideComments} setHideComments={setHideComments} fetchPost={fetchPost} />
						</div>
					</div>
				</div>
			}
		</section>
	);
};

export default SingelArticles;
