import { useEffect, useState } from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { BsFillTrashFill } from "react-icons/bs"

export default function AdminDashboard() {
	const [candidates, setCandidates] = useState([]);
	const [employers, setEmployers] = useState([]);
	const [userType, setUserType] = useState('candidates');

	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/get/users`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				const newCandidate = data.filter(i => i.type === 'Candidate');
				setCandidates(newCandidate);
				const newEmployers = data.filter(i => i.type === 'Agency');
				setEmployers(newEmployers);
			});
	}, []);

	function UserRow({ i }) {
		function removeUser(user) {
			if (userType === 'candidates') {
				const newUsers = candidates.filter(i => i._id !== user);
				setCandidates(newUsers);
			}
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

	return (
		<>
			<Navbar />
			{/* user type */}
			<main className="flex w-full">
				<section className="lg:w-3/12">
					<div className="flex flex-col [&>span]:py-2 [&>span]:cursor-pointer [&>span]:rounded-md [&>span]:px-6 [&>span:hover]:bg-gray-300">
						<span onClick={() => setUserType('candidates')} className={`${userType === 'candidates' && 'bg-gray-200'}`}>Candidates</span>
						<span onClick={() => setUserType('employers')} className={`${userType === 'employers' && 'bg-gray-200'}`}>Employers</span>
					</div>
				</section>
				{/* table */}
				<section className="w-9/12">
					<table className="border-2 w-full">
						<thead>
							<tr className="[&>th]:text-center border-2">
								<th>Avater</th>
								<th>Name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								userType === 'candidates' && candidates.map(i => <UserRow key={i._id} i={i} />)
							}
							{
								userType === 'employers' && employers.map(i => <UserRow key={i._id} i={i} />)
							}
						</tbody>
					</table>
				</section>
			</main>
		</>
	)
}
