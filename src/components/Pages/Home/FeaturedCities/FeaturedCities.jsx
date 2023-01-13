import { useEffect, useState } from "react";

export default function FeaturedCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('/data/cities.json')
      .then(res => res.json())
      .then(data => setCities(data));
  }, []);

  // shows image for each city
  function City({ city }) {
    const { name, jobs, image } = city;
    return (
      <div className="w-full  mx-auto">
        <div className="flex justify-center overflow-hidden rounded-lg relative">
          <img src={image} alt={name} className="object-cover h-60 w-full rounded-lg hover:scale-110 transition-transform" />
          <p className="absolute text-white bottom-12 left-4 font-bold text-xl">{name}</p>
          <p className="absolute text-white bottom-4 left-4 text-sm">{jobs} {jobs > 0 ? 'Jobs' : 'Job'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-5 ">
      <div className="my-6 text-center">
        <p className="font-bold text-3xl">Featured Cities</p>
        <p>Get all of the job informations from the top cities</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-content-center max-w-screen-2xl 2xl:mx-auto w-full gap-8">
        {
          cities.length && cities.map(city => <City city={city} key={city.id} />)
        }
      </section>
    </div>
  );
}