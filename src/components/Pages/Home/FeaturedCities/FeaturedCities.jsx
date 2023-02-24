import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

export default function FeaturedCities() {
	const [cities, setCities] = useState([]);
	const [location, setLocation] = useState(null);
	const formSubmit = useRef();

	useEffect(() => {
		fetch("/data/cities.json")
			.then((res) => res.json())
			.then((data) => setCities(data));
	}, []);

	// shows image for each city
	function City({ city, formSubmit }) {
		const { name, jobs, image } = city;
		return (
			<div onClick={() => {
				setLocation(name)
				formSubmit.current.click()
			}} className="w-full mx-auto">
				<div className="flex justify-center overflow-hidden rounded-lg relative">
					<img
						src={image}
						alt={name}
						className="object-cover h-60 w-full rounded-lg hover:scale-110 transition-transform"
					/>
					<p className="absolute text-white bottom-4 left-4 font-bold text-xl">
						{name}
					</p>
				</div>
			</div>
		);
	}

	return (
		<Form method="post" action="/jobs" className="w-full">
			<div className="w-full mx-auto px-5 ">
				<div className="my-6 text-center">
					<p className="font-bold text-3xl">Featured Cities</p>
					<p>Get all of the job informations from the top cities</p>
				</div>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3	place-content-center max-w-screen-2xl 2xl:mx-auto w-full gap-8">
					{cities.length &&
						cities.map((city) => (
							<City city={city} setLocation={setLocation} formSubmit={formSubmit} key={city.id} />
						))}
				</section>
			</div>
			<input type="text" name="job-location" className="hidden" value={location || ''} />
			<button ref={formSubmit} className="hidden" type="submit"></button>
		</Form>
	);
}
