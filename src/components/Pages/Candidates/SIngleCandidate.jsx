import React, { useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';

const SingleCandidate = ({ candidate }) => {
	const [date, setDate] = useState("");
	const [hover, setHover] = useState();

	const { fullName, type, photo, candidateData, email, _id } = candidate
	return (
		<div>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className="lg:flex gap-3 items-center justify-between w-full border p-6 rounded-md"
			>
				<div className="md:w-full flex justify-center w-full lg:w-[20rem] lg:h-24">
					<img
						className="md:w-44 lg:w-24 lg:h-24 rounded-full"
						src={photo}
						alt=""
					/>
				</div>
				<div className="flex w-full justify-center lg:justify-start lg:text-left text-center">
					<div className="flex flex-col gap-2 justify-center lg:justify-start">
						<Link to={`/candidate/${_id}`}><h3 className="text-md font-bold">{fullName}</h3></Link>
						<div className="flex flex-wrap md:w-96 gap-3">
							<p className="w-24">{candidateData?.Category}</p>
							<p className="flex items-center justify-center gap-2">
								<GrLocation />
								{
									candidateData?.City ?
										<p className="w-max text-sm">{candidateData?.City.replace(/\b\w/g, i => i.toUpperCase()) + ', ' + candidateData?.Country}</p>
										:
										<p className="w-max text-sm">Not Shared</p>
								}
							</p>
							<div className="flex items-center justify-center gap-2">
								<GiMoneyStack /> <p className="w-max text-sm">$99 / hour</p>
							</div>
						</div>
						<div className="flex gap-3">
            <div className="flex my-2 items-center gap-3 flex-wrap">
                    <p
                      className="px-2 text-blue-500 bg-blue-200 rounded-full"
                    >{
                      candidate?.candidateData?.skills?.length>0 && candidate?.candidateData?.skills[0].value
                    }
                    </p>
                    <p
                      className="px-2 text-blue-500 bg-blue-200 rounded-full"
                    >{
                      candidate?.candidateData?.skills?.length>0 && candidate?.candidateData?.skills[1].value
                    }
                    </p>
                    <p
                      className="px-2 text-blue-500 bg-blue-200 rounded-full"
                    >{
                      candidate?.candidateData?.skills?.length>0 && candidate?.candidateData?.skills[2].value
                    }
                    </p>
                </div>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:gap-5">
					{hover ? (
						<div className=" ">
							<FiBookmark className="text-4xl mt-3 duration-500 bg-gray-200 rounded-full p-2" />
						</div>
					) : (
						<div className=" ">
							<FiBookmark className="text-4xl duration-500 text-transparent rounded-full p-2" />
						</div>
					)}
					<div>
						<Link to={`/candidate/${_id}`} className="bg-blue-100 inline-block my-7 hover:bg-blue-500 hover:text-white hover:transition transition hover:duration-700 duration-700 px-6 py-2 rounded-md text-blue-500">
							Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCandidate;
