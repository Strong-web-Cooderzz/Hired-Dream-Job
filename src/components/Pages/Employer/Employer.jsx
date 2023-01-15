import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Employer() {
	const employerId = useParams().id;
	const [employer, setEmployer] = useState([]);

	useEffect(() => {
		fetch('/data/employers.json')
			.then(res => res.json())
			.then(data => {
				const newData = data.filter(i => employerId === i.id + '');
				setEmployer(newData);
			});
	}, []);

	return (
		<main>

		</main>
	)
}