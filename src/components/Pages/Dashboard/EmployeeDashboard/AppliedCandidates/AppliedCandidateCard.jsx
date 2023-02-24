import moment from 'moment';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import fetchData from '../../../../../api/fetchData';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const AppliedCandidateCard = ({ candidateInfo }) => {
	const { user } = useContext(AuthContext)
	const handleMeeting = () => {
		const time = new Date()
		const meetingInfo = {
			candidateId: candidateInfo.user._id,
			meetingTime: time
		}
		fetchData.post('/add-meeting', meetingInfo, {
			headers: {
				'Authorization': `Bearer ${user?.accessToken}`
			}
		})
		.then(response => {
				if (response.data.acknowledged) toast.success('Meeting submitted')
		})
	}
	const
		{ candidateName, candidateMessage, candidateEmail, applyDate, jobTitle, jobType, candidateResume, _id } = candidateInfo;

	console.log(candidateInfo)
	return (
		<div>
			<div className="flex justify-center w-full h-full">
				<div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
					<div className="py-3 px-6 border-b border-gray-300">
						Candidate  name:   <span className='font-semibold'> {candidateInfo.user.fullName} </span>
					</div>
					<div className="p-6 text-start">
						<h5 className="text-gray-900 text-xl mb-2"> {jobTitle} </h5>
						<h2> Job type: {jobType} </h2>
						<p className="text-gray-700 text-base mb-4">
							{candidateMessage}
						</p>
						<p> Email: {candidateInfo.user.email} </p>
						<p> Applied date: {moment(applyDate).fromNow()} </p>
						<div className='flex items-center justify-center gap-4 mt-4'>
							<a className='text-blue-500 font-medium hover:text-blue-700 ' href={candidateResume} > My Resume </a>
							<button type="button" className=" inline-block float-right mt-2 mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out">  Delete </button>
						</div>
						<div>
							<button onClick={handleMeeting} type="button" className=" inline-block float-right mt-2 mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out">Set meeting with candidate</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppliedCandidateCard;
