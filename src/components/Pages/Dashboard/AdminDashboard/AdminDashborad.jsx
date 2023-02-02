import { useEffect, useState } from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { BsFillTrashFill } from "react-icons/bs"

export default function AdminDashboard() {
	const [candidates, setCandidates] = useState([]);
	const [employers, setEmployers] = useState([]);
	const [userType, setUserType] = useState('candidates');
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/get/users?type=${userType}`)
			.then(res => res.json())
			.then(data => {
				setUsers(data);
				setLoading(false);
			});
	}, [userType]);

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

	function ShowUserTable() {
		return (
			<table className="border-2 w-full">
				<thead>
					<tr className="[&>th]:py-2 border-2">
						<th>Avater</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map(i => <UserRow key={i._id} i={i} />)
					}
				</tbody>
			</table>
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
					{
						loading ?
							<div className='w-24 h-24 bg-transparent rounded-full mx-auto border-[5px] border-blue-300 border-x-gray-200 border-b-gray-200 animate-spin mt-16'>
							</div>
							:
								users.length ? <ShowUserTable /> : <div className="text-2xl text-center font-semibold mt-6">Nothing but cricket &#x1f997;</div>
					}
				</section>
			</main>
		</>
	)
}
