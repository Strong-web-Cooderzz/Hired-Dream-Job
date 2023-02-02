import { useEffect, useState } from "react";
import Navbar from "../../../shared/Navbar/Navbar";

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
	console.log(candidates)
	console.log(employers)

	return (
		<>
			<Navbar />
			<section>
				<div className="flex flex-col lg:w-3/12 [&>span]:py-2 [&>span]:cursor-pointer [&>span]:rounded-md [&>span]:px-6 [&>span:hover]:bg-gray-300">
					<span onClick={() => setUserType('candidates')} className={`${userType === 'candidates' && 'bg-gray-200'}`}>Candidates</span>
					<span onClick={() => setUserType('employers')} className={`${userType === 'employers' && 'bg-gray-200'}`}>Employers</span>
				</div>
			</section>
		</>
	)
}
