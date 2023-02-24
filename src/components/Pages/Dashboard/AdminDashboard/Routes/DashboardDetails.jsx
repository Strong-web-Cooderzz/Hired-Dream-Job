import React, { PureComponent, useState } from "react";
import { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import fetchData from "../../../../../api/fetchData";
import Loading from "../../../../Loading/Loading";
import Chart from "./Chart";
import PieCharts from "./PieChart";
import PieChart from "./PieChart";

const DashboardDetails = () => {
	const [loading, setLoading] = useState(true)
	const [jobs, setJobs] = useState(null)
	const [users, setUsers] = useState([])

	useEffect(() => {
		setLoading(true)
		fetchData.get('/job-counter', {

			})
			.then(response => {
				setJobs(response.data)
				console.log(response.data)
				setLoading(false)
			})
	}, [])

	useEffect(() => {
		setLoading(true)
		fetchData.get('/users')
			.then(response => {
				setUsers(response.data)
				setLoading(false)
			})
	}, [])

	return (
		<>
			{
				loading ? <Loading />
					:
					<div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 px-5 py-4">
							<div className=" bg-blue-100 text-blue-700 px-4 py-2 rounded-md">
								<div className="flex gap-2 items-center text-right text-xs lg:text-sm">
									<BiUser className="text-5xl bg-blue-200 p-2 md:w-12 lg:w-24 rounded-md " />
									<p className="flex flex-col w-full">
										Totol Users
										<span>{users.length}</span>
									</p>
								</div>
							</div>
							<div className=" bg-emerald-100 text-emerald-700 px-4 py-2 rounded-md">
								<div className="flex gap-2 items-center text-right text-xs lg:text-sm">
									<BiUser className="text-5xl bg-emerald-200 p-2 md:w-12 lg:w-24 rounded-md " />
									<p className="flex flex-col w-full">
										Totol Jobs
										<span>{jobs}</span>
									</p>
								</div>
							</div>
							<div className=" bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
								<div className="flex gap-2 items-center text-right text-xs lg:text-sm">
									<BiUser className="text-5xl bg-indigo-200 p-2 md:w-12 lg:w-24 rounded-md " />
									<p className="flex flex-col w-full">
										Totol Users
										<span>400</span>
									</p>
								</div>
							</div>
							<div className=" bg-orange-100 text-orange-700 px-4 py-2 rounded-md">
								<div className="flex gap-2 items-center text-right text-xs lg:text-sm">
									<BiUser className="text-5xl bg-orange-200 p-2 md:w-12 lg:w-24 rounded-md " />
									<p className="flex flex-col w-full">
										Totol Users
										<span>400</span>
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-2 w-full">
							<div className="w-full md:w-1/2">
								<div className="flex flex-col w-full py-2 px-4 my-2 bg-blue-100 text-blue-700">Total Users</div>
								<div className="w-full">
									<Chart />
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<div className="flex flex-col w-full py-2 px-4 my-2 bg-blue-100 text-blue-700">Total Users</div>
							</div>
						</div>
					</div>
			}
		</>
	);
};

export default DashboardDetails;
