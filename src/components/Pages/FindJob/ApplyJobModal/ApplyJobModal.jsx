import React from 'react';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import fetchData from '../../../../api/fetchData';

const ApplyJobModal = ({ singleJobData, user }) => {
	const closeButton = useRef()
	const { company, companyType, expireDate, jobType, location, title, workingHours, _id } = singleJobData;
	//  get data from input form 
	const jobApplyFormHandlar = (e) => {
		e.preventDefault()
		const form = e.target;
		const candidateName = form.name.value;
		const candidateEmail = form.email.value;
		const candidateResume = form.resume.value;
		const candidateMessage = form.message.value;

		const jobApplyInfo = { candidateResume, candidateMessage, company, companyType, jobType, jobTitle: title, companyId: company._id, companyLocation: location }
		// send and save  data in database 
		fetchData.post('/candidate/applyjobs', jobApplyInfo, {
			headers: {
				'Authorization': `Bearer ${user?.accessToken}`
			}
		})
			.then(response => {
				if (response.data.acknowledged) {
					toast.success(`${user?.displayName} Your job apply hasbeen submitted `)
					form.reset()
					closeButton.current.click();
				}
			})
		// fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/candidate/applyjobs`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json'
		// 	},
		// 	body: JSON.stringify(jobApplyInfo)
		//
		// 	})
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		if (data.acknowledged === true) {
		// 			toast.success(`${user?.displayName} Your job apply hasbeen submitted `)
		// 			form.reset()
		// 			closeButton.current.click();
		//
		// 		}
		// 		console.log(data)
		// 	})
		// 	.catch(err => console.log(err))
	}

	return (
		<div>
			{/* <!-- Button trigger modal --> */}


			{/* <!-- Modal --> */}
			<div className="modal h-full fade fixed top-0 left-0 hidden w-full  outline-none overflow-x-hidden overflow-y-auto"
				id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog relative w-auto pointer-events-none">
					<div
						className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
						<div
							className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
							<h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel"> {company?.fullName} </h5>
							<button ref={closeButton} type="button"
								className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
								data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body relative px-4 py-6">
							<div className='ml-6'>
								<h2 classNameName='font-semibold'> {title} </h2>
							</div>


							{/* -----------apply job form start here ---------  */}
							<div className="block p-6 rounded-lg bg-white max-w-md">
								<form onSubmit={jobApplyFormHandlar} >
									<div className="form-group mb-3 ">
										<label >Name : </label>
										<input type="text" name='name' required className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
											defaultValue={user?.displayName}
											placeholder="Enter your name" />
									</div>
									<div className="form-group mb-3">
										<label > Email :</label>
										<input type="email" required name='email' className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
											defaultValue={user?.email}
											placeholder="Email address" />
									</div>

									<div className="form-group mb-3">
										<label>Resume drive link:</label>
										<input type="text" name='resume' accept='application/pdf' className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
											placeholder="Enter your resume drive link" />
									</div>

									<div className="form-group mb-3">
										<label > Write your message :</label>
										<textarea
											required
											name='message'
											className="
        form-control resize-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
											id="exampleFormControlTextarea13"
											rows="3"
											placeholder="Why should we hired you ?"
										></textarea>
									</div>

									<button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"> Send </button>
								</form>
							</div>
							{/* -----------apply job form end here ---------  */}


						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyJobModal;
