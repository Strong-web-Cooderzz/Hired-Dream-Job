import { useEffect, useState } from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { BsFillTrashFill, BsGrid1X2, BsTrash2 } from "react-icons/bs"
import {RxCrossCircled } from "react-icons/rx";
import {IoWarningOutline } from "react-icons/io5";
import {MdOutlineWorkOutline } from "react-icons/md";
import {FiSettings, FiUsers } from "react-icons/fi";
import {HiOutlineUsers } from "react-icons/hi";
import Users from "./Routes/Users";
import { Link, Outlet } from "react-router-dom";
import { BiImageAlt } from "react-icons/bi";

export default function AdminDashboard() {
	


	return (
		<>
			<Navbar />
			{/* user type */}
			<main className="flex w-full mb-16">
				<section className="lg:w-3/12 border-r">
					<div className="hidden md:flex flex-col [&>a]:py-2 [&>a]:cursor-pointer [&>a]:rounded-md [&>a]:px-6 [&>a:hover]:bg-gray-300">
						<Link to={''} className={`flex false items-center gap-2 `}><BsGrid1X2 /> Dashboard</Link>

						<Link to={'users'} className={`flex false items-center gap-2 `}><FiUsers /> Users</Link>

						<Link to={'jobs'} className={`flex  items-center gap-2 `}><MdOutlineWorkOutline /> Jobs</Link>

						<Link to={'blogs'} className={`flex  items-center gap-2 `}><FiSettings />Blogs</Link>

						<Link to={'jobs'} className={`flex  items-center gap-2 `}><BiImageAlt />Themes</Link>
					</div>
					
				</section>
						<div className="w-full">
						<Outlet/>
						</div>
			</main>
		</>
	)
}
