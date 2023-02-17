import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from '../../../shared/Modal/ConfirmModal';
import { toast } from 'react-hot-toast';
import { AiOutlineCloseCircle } from "react-icons/ai"
import fetchData from '../../../../api/fetchData';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import moment from 'moment';

export default function Comments({ post, hideComments, setHideComments, fetchPost }) {
	const { user } = useContext(AuthContext);
	const [isEmpty, setIsEmpty] = useState(true);
	const [commentId, setCommentId] = useState('');
	// delete confirmation modal
	const [hidden, setHidden] = useState(true);

	const [loading, setLoading] = useState(false)
	const [commentLoading, setCommentLoading] = useState(false)

	const handlePostComment = async e => {
		e.preventDefault();
		setLoading(true)
		const comment = e.target.comment.value;
		const commentDetails = {
			postId: post._id,
			comment,
		}
		const response = await fetchData.post('/post-comment', commentDetails, {
			headers: {
				Authorization: `Bearer ${user?.accessToken}`
			}
		})
		if (response.data.acknowledged) {
			console.log('running')
			fetchPost();
			setIsEmpty(true)
			e.target.reset();
		}
		console.log(response.data);
		setLoading(false)
		toast.success('Comment Added')
	}

	const handleDeleteComment = async () => {
		if (token) {
			setCommentLoading(true)
			const response = await fetchData.delete('/delete-comment', {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					commentId,
				}
			})
			if (response.data.success) {
				fetchPost()
				setHidden(true)
				toast.success('Comment deleted')
				setCommentLoading(false)
			} else toast.error('An error occured. Please try again or try to re-login again.')

		} else {
			toast.error('Something went wrong. Please login again.')
		}
	}

	return (
		<section className={`p-4 h-full  mx-auto`}>
			{/* <!-- Comment --> */}
			{
				user?.email ?
					<form onSubmit={handlePostComment} className='mt-4 flex justify-center'>
						<div className='sm:flex w-9/12 gap-1 items-center '>
							<textarea onChange={e => {
								e.target.value.length > 0 ? setIsEmpty(false) : setIsEmpty(true)
							}} required name="comment" className='resize-none p-2 w-full h-16 border border-blue-400 focus-visible:outline-blue-600 rounded-xl'></textarea>
							<button disabled={isEmpty} className={`mt-2 w-44 mr-auto ${isEmpty ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-blue-100 text-blue-700'} text-sm px-4 py-2 rounded-md`}>{loading ? 'loading...' : 'Add Comment'}</button>
						</div>
					</form>
					:
					<div className='flex items-cneter justify-center'>
						<Link className='text-blue-600 font-bold mx-auto' to={'/login'}>Please Login To Comment</Link>
					</div>
			}
			{
				post?.comments?.map(comment => <div className="flex my-8 gap-2">
					<div className=''>
						<img className="h-8 w-8 rounded-full object-cover" src={comment.user.photo} alt={comment.user.fullName} />
					</div>
					<div className='flex-grow border-2 border-r-0 border-t-0 border-l-0 pb-2'>
						<div className="rounded-lg">
							<h2 className="">{comment.user.fullName}</h2>
							<p className="mt-3 text-sm text-gray-600">{comment.comment}</p>
						</div>
						<div className='text-xs mt-1 grid text-gray-700 justify-items-end'>
							<div className='flex gap-4'>
								<span>{moment(comment.date).fromNow()}</span>
								<div className='flex gap-2'>
									{/* <button>Report</button> */}
									<button className={`${user?.email !== comment.user.email && 'hidden'} hover:text-red-500`} onClick={() => {
										setHidden(false)
										setCommentId(comment._id)
									}}>Delete</button>
								</div>
							</div>
							<ConfirmModal commentLoading={commentLoading} setCommentLoading={setCommentLoading} hidden={hidden} setHidden={setHidden} confirmFunction={handleDeleteComment} />
						</div>
					</div>
				</div>
				)}
		</section>
	)
}
