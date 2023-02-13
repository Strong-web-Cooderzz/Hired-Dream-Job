import React, { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useContext } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegComment } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import fetchData from '../../../../api/fetchData';
import ConfirmModal from '../../../shared/Modal/ConfirmModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthInfo } from '../../../../features/auth/authSlice';
import { toast } from 'react-hot-toast';

const SingelArticles = () => {
	const [post, setPost] = useState({});
	const [isEmpty, setIsEmpty] = useState(true);
	// delete confirmation modal
	const [hidden, setHidden] = useState(true);
	const { user, dbUser } = useContext(AuthContext)
	const location = useLocation();
	const postId = useParams().id;
	const shareURL = `https://hired-dream-job.vercel.app${location.pathname}`
	const authInfo = useSelector(state => state.auth.authInfo)
	const userInfo = useSelector(state => state.user.userInfo)
	const token = authInfo.stsTokenManager?.accessToken
	const dispatch = useDispatch()
	const [commentId, setCommentId] = useState('');

	useEffect(() => {
		async function fetchPost() {
			const response = await fetchData.get(`/blogPost/${postId}`)
			setPost(response.data[0])
		}

		fetchPost();
	}, [])

	const handlePostComment = async e => {
		e.preventDefault();
		const comment = e.target.comment.value;
		const commentDetails = {
			userId: userInfo._id,
			postId: post._id,
			comment,
		}
		const response = await fetchData.post('/post-comment', commentDetails)
		console.log(response.data);
	}

	const handleDeleteComment = async () => {
		dispatch(setAuthInfo());
		const response = await fetchData.delete('/delete-comment', {
			headers: {
				Authorization: `Bearer ${token}`
			},
			params: {
				commentId,
				postId: post._id,
			}
		})
		if (response.data.deletedCount > 0) {
			setHidden(true)
			toast.success('Comment deleted')
		} else toast.error('An error occured. Please try again or try to re-login again.')
	}

	return (
		<section>
			<div>
				<div className='w-11/12 mx-auto md:w-full px-8 lg:w-8/12'>
					<div className="flex items-center mt-12 gap-2 text-sm">
						<img className="h-12 w-12 rounded-full ring-2 ring-white" src={post.userImage} alt="" />
						<div>
							<h3 className="text-lg">Alison Dawn</h3>
							<span className="mr-2 text-gray-600">August 31, 2021</span>
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
					{/* <!-- Comment --> */}
					<div className='text-xl text-gray-600 flex gap-6 items-center'>
						<span><FiThumbsUp /></span>
						<span className='flex items-center gap-2'><FaRegComment /> <span>{post.comments?.length}</span></span>
					</div>
					{
						userInfo.email ?
							<form onSubmit={handlePostComment} className='mt-4'>
								<div className='sm:flex w-full gap-1 items-center flex-col'>
									<textarea onChange={e => {
										e.target.value.length > 0 ? setIsEmpty(false) : setIsEmpty(true)
									}} required name="comment" className='resize-none p-2 w-full h-16 border border-blue-400 focus-visible:outline-blue-600 rounded-xl'></textarea>
									<button disabled={isEmpty} className={`mt-2 mr-auto ${isEmpty ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-100 text-blue-700'} text-sm px-4 py-2 rounded-md`}>Add Comment</button>
								</div>
							</form>
							:
							<Link className='text-blue-600 font-bold' to={'/login'}>Please Login To Comment</Link>
					}
					{
						post.comments?.map(comment => <div className="flex my-8">
							<div className='w-1/12'>
								<img className="h-14 w-14 rounded-full object-cover" src={comment.user.photo} alt={comment.user.fullName} />
							</div>
							<div className='w-11/12'>
								<div className="bg-gray-200 rounded-lg px-4 py-2">
									<h2 className="font-bold">{comment.user.fullName}</h2>
									<p className="mt-3">{comment.comment}</p>
								</div>
								<div className='text-sm mt-1 flex gap-2 text-gray-700'>
									<button>Report</button>
									<button className={`${userInfo.email !== comment.user.email && 'hidden'} hover:text-red-500`} onClick={() => {
										setHidden(false)
										setCommentId(comment._id)
									}}>Delete</button>
									<ConfirmModal hidden={hidden} setHidden={setHidden} confirmFunction={handleDeleteComment} />
								</div>
							</div>
						</div>
						)}
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
		</section>
	);
};

export default SingelArticles;
