import React from 'react';
import './JobFeauter.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobFeaturedCard = ({ data }) => {
	// console.log(data)
	const { company, location, logo, title, jobType, companyType, urgent } = data;
	return (
		<Link to={`/jobs/${data._id}`}>
			<div className='job-card w-full rounded-lg mx-auto py-2 '>
				<div className=''>
					<div className='flex justify-between'>
						<button className=' px-4 rounded-full text-green-500  bg-green-100 ' > {companyType}  </button>
						<button className='job-feature-btn bg-blue-100 text-blue-500 mr-3' > {jobType} </button>
					</div>
					<button className='job-feature-btn-left bg-orange-100 text-orange-500 mt-2'>  {urgent === true ? 'Urgent' : 'Any Time'}</button>
				</div>
				<div className='flex justify-center relative -mt-6'>
					<img className='w-16 h-16 bg-blue-50 rounded-full ml-4 object-cover' src={logo} alt='' />
				</div>

				<div className='text-center px-2 mt-4 mb-6'>
					<h2 className='text-green-500 font-semibold'> {title} </h2>

					<p className='text-blue-500'>{company}</p>
					<h3 className='flex justify-center text-gray-400 items-center'>
						<FaMapMarkerAlt /> {location}
					</h3>
				</div>
			</div>
		</Link>
	);
};

export default JobFeaturedCard;
