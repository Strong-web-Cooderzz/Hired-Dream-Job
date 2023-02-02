import { useEffect, useState } from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { BsFillTrashFill } from "react-icons/bs"

export default function AdminDashboard() {
	const [userType, setUserType] = useState('candidates');
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [dataType, setDataType] = useState('user');
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		if (dataType === 'user') {
			setLoading(true);
			fetch(`https://hired-dream-job-server.vercel.app/api/v1/get/users?type=${userType}`)
				.then(res => res.json())
				.then(data => {
					setUsers(data);
					setLoading(false);
				});
		} else {
			fetch('https://hired-dream-job-server.vercel.app/jobs')
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setJobs(data);
					setLoading(false);
				})
		}
	}, [userType, dataType]);

	function UserRow({ i }) {
		function removeUser(user) {
			const newUsers = users.filter(i => i._id !== user);
			setUsers(newUsers);
		}

		return (
			<tr className="[&>td]:text-center border-2 [&>td]:py-4">
				<td><img src={i.photo} className="w-10 h-10 rounded-full mx-auto object-cover" /></td>
				<td>{i.fullName}</td>
				<td>{i.email}</td>
				<td><div className="text-red-400 text-2xl mx-auto flex justify-center"><span onClick={() => removeUser(i._id)} className="cursor-pointer"><BsFillTrashFill /></span></div></td>
			</tr>
		)
	}

	function JobRow({ i }) {
		function removeJob(job) {
			const newJobs = jobs.filter(i => i._id !== job);
			setJobs(newJobs);
		}

		return (
			<tr className="[&>td]:text-center border-2 [&>td]:py-4">
				<td><img src={i.logo} className="w-10 h-10 rounded-full mx-auto object-cover" /></td>
				<td>{i.title}</td>
				<td>{i.company}</td>
				<td><div className="text-red-400 text-2xl mx-auto flex justify-center"><span onClick={() => removeJob(i._id)} className="cursor-pointer"><BsFillTrashFill /></span></div></td>
			</tr>
		)
	}

	function ShowTable({ type }) {
		return (
			<table className="border-2 w-full">
				<thead>
					<tr className="[&>th]:py-2 border-2">
						{
							type === 'user' ?
								<>
									<th>Avater</th>
									<th>Name</th>
									<th>Email</th>
									<th>Actions</th>
								</>
								: <>
									<th>Image</th>
									<th>Title</th>
									<th>Company</th>
									<th>Actions</th>
								</>
						}
					</tr>
				</thead>
				<tbody>
					{
						type === 'user' ? users.map(i => <UserRow key={i._id} i={i} />)
							: jobs.map(i => <JobRow key={i._id} i={i} />)
					}
				</tbody>
			</table>
		)
	}

	return (
		<>
			<Navbar />
			{/* user type */}
			<main className="flex w-full mb-16">
				<section className="lg:w-3/12">
					<div className="flex flex-col [&>span]:py-2 [&>span]:cursor-pointer [&>span]:rounded-md [&>span]:px-6 [&>span:hover]:bg-gray-300">
						<span onClick={() => {
							setUserType('candidates');
							setDataType('user');
						}} className={`${dataType === 'user' && userType === 'candidates' && 'bg-gray-200'}`}>Candidates</span>
						<span onClick={() => {
							setUserType('employers');
							setDataType('user');
						}} className={`${dataType === 'user' && userType === 'employers' && 'bg-gray-200'}`}>Employers</span>
						<span onClick={() => setDataType('job')} className={`${dataType === 'job' && 'bg-gray-200'}`}>Jobs</span>
					</div>
				</section>
				{/* table */}
				<section className="w-9/12">
					{
						loading ?
							<div className='w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin mt-16'>
							</div>
							: dataType === 'user' ?
								users.length ? <ShowTable type={'user'} /> : <div className="text-2xl text-center font-semibold mt-6">Nothing but cricket &#x1f997;</div>
								:
								jobs.length ? <ShowTable type={'job'} /> : <div className="text-2xl text-center font-semibold mt-6">Nothing but cricket &#x1f997;</div>
					}
				</section>
			</main>
		</>
	)
}
