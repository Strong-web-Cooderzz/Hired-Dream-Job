import { format } from "date-fns";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import fetchData from "../../../../../api/fetchData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const CandidateMeetings = () => {
	const [meetings, setMeetings] = useState([])
	const { user } = useContext(AuthContext)
	console.log(meetings)
	useEffect(() => {
		if (user?.uid) {
			fetchData.get('/get-meetings', {
				headers: {
					'Authorization': `Bearer ${user.accessToken}`
				}
			})
				.then(response => {
					setMeetings(response.data)
				})
		}
	}, [user])

	return (
		<div className="mx-12 bg-gray-100 rounded-xl my-8">
			<div className="mx-6 py-6 text-xl">
				<h3>My Meetings</h3>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{
					meetings.map(meeting => <div className="">
						<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-md">
							<div className="space-y-4">
								<div className="space-y-2 flex justify-center items-center">
									<img
										src={user?.photoURL}
										alt=""
										className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
									/>
									<p className="text-3xl mx-2">
										<FiLink2 />
									</p>
									<img
										src={meeting.company.photo}
										alt=""
										className="block object-cover object-center w-24 h-24 rounded-full dark:bg-gray-500"
									/>
								</div>
								<div className="flex items-center ">
									<div className="flex justify-between items-center gap-1 w-full">
										{" "}
										<p className="flex items-center gap-2">
											<BsCalendar2Date /> {format(new Date(meeting.meetingTime), 'PP')}
										</p>
										<p className="flex items-center gap-2">
											<BiTimeFive /> {format(new Date(meeting.meetingTime), 'p')}
										</p>
									</div>
								</div>
								<div className="space-y-2">
									<Link rel="noopener noreferrer" to="#" className="block ">
										<h3 className="text- font-semibold dark:text-violet-400">
											{meeting.company?.job?.title} - {meeting.company.fullName}
										</h3>
									</Link>

									<a className="btn_primary flex w-full justify-center disabled:bg-blue-50 disabled:text-gray-500" href={`https://video-hired-dream-job.onrender.com/${meeting.meetingLink}`}>Join Now</a>
								</div>
							</div>
						</div>
					</div>
					)
				}
			</div>
		</div>
	);
};

export default CandidateMeetings;
