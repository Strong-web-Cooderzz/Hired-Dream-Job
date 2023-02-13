import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from '../../../shared/Modal/ConfirmModal';
import { toast } from 'react-hot-toast';
import { AiOutlineCloseCircle } from "react-icons/ai"
import fetchData from '../../../../api/fetchData';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

export default function Comments({ post, hideComments, setHideComments, fetchPost }) {
	const [isEmpty, setIsEmpty] = useState(true);
	const [commentId, setCommentId] = useState('');
	// delete confirmation modal
	const [hidden, setHidden] = useState(true);
	const { user } = useContext(AuthContext);
	const token = user?.accessToken

	const userInfo = useSelector(state => state.user.userInfo)

	const handlePostComment = async e => {
		e.preventDefault();
		const comment = e.target.comment.value;
		const commentDetails = {
			postId: post._id,
			comment,
		}
		const response = await fetchData.post('/post-comment', commentDetails, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		if (response.data.acknowledged) {
			console.log('running')
			fetchPost();
			setIsEmpty(true)
			e.target.reset();
		}
		console.log(response.data);
	}

	const handleDeleteComment = async () => {
		if (token) {
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
			} else toast.error('An error occured. Please try again or try to re-login again.')
		} else {
			toast.error('Something went wrong. Please login again.')
		}
	}

	return (
		<section className={`${hideComments ? 'translate-x-full' : ''}  transition-all absolute top-0 right-0 bg-gray-100 w-1/2 p-4 h-full overflow-scroll`}>
			<div onClick={() => setHideComments(true)} className='absolute top-4 right-4 text-3xl'>
				<AiOutlineCloseCircle />
			</div>
			{/* <!-- Comment --> */}
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
					<div className='flex items-cneter justify-center'>
						<Link className='text-blue-600 font-bold mx-auto' to={'/login'}>Please Login To Comment</Link>
					</div>
			}
			{
				post.comments?.map(comment => <div className="flex my-8 gap-2">
					<div className='w-12 h-12'>
						<img className="h-12 w-12 rounded-full object-cover" src={comment.user.photo} alt={comment.user.fullName} />
					</div>
					<div className='flex-grow'>
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
		</section>
	)
}
