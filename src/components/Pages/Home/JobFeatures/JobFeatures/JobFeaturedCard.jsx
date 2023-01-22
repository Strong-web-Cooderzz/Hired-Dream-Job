import React from 'react';
import './JobFeauter.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobFeaturedCard = ({ data }) => {
	// console.log(data)
	const { company, location, logo, title, jobType, companyType, urgent } = data;
	return (
		<Link to={`/find-jobs/single-job/${data._id}`}>
			<div className='job-card w-full  mx-auto  py-2 '>
				<div className=''>
					<div className='flex justify-between'>
						<button className='job-feature-btn-left bg-zinc-200 ' > {companyType}  </button>
						<button className='job-feature-btn bg-zinc-300 text-blue-600 mr-3' > {jobType} </button>
					</div>
					<button className='job-feature-btn-left bg-orange-100 text-orange-500 mt-2'>  {urgent === true ? 'urgent' : 'Any Time'}</button>
				</div>
				<div className='flex justify-center relative -mt-6'>
					<img className='w-16 h-16 rounded-full ml-4 object-cover' src={logo} alt='' />
				</div>

				<div className='text-center mt-4 mb-6'>
					<h2 className='text-green-500 font-semibold'> {title} </h2>

					<p>{company}</p>
					<h3 className='flex justify-center items-center'>
						<FaMapMarkerAlt className='text-slate-600' /> {location}
					</h3>
				</div>
			</div>
		</Link>
	);
};

export default JobFeaturedCard;
