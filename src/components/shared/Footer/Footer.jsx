import { IoIosArrowUp } from "react-icons/io";
import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const [height, setHeight] = useState(window.scrollY);

	useEffect(() => {
		window.onscroll = () => {
			setHeight(window.scrollY);
		};
	}, []);

	const moveToTop = () => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="text-gray-600 w-full 2xl:mx-auto">
			{/* links and logo, first part */}
			<div className="flex  flex-col lg:flex-row  md:px-12 border-solid border-2 border-gray-100 border-l-0 border-t-0 border-r-0 gap-6 ">
				{/* logo, phone and address */}
				<div className="flex flex-col lg:pl-6  gap-4 lg:text-left md:text-left  sm:text-center text-center  pl-6 md:pl-0">
					<img src={logo} alt="Hired Dream Job" className="w-20" />
					<div className="flex flex-col gap-2">
						<span className="text-lg font-bold">Call us at</span>
						<Link to="tel:+8801234567890" className="text-blue-600">
							+880123456789
						</Link>
					</div>
					<address className="w-9/12">
						329 Whatever Street, Dhaka 2000, Bangladesh
					</address>
					<a href="mailto:support@hireddreamjob.com">support@hireddreamjob</a>
				</div>

				{/* links */}
				<div className="pl-6 w-full justify-evenly lg:text-left md:text-left [&>div>ul>li>a:hover]:text-blue-600 sm:text-center text-center  flex flex-col lg:gap-16 md:gap-8 sm:gap-6 gap-5 py-10 lg:flex lg:flex-row md:pl-0 md:grid md:grid-cols-2">
					<div className="flex flex-col gap-3">
						<span className="font-4xl font-bold text-gray-900">
							For Candidates
						</span>
						<ul className="text-sm flex flex-col gap-4">
							<li>
								<Link to="/find-jobs">Browse Jobs</Link>
							</li>
							<li>
								<Link to="#">Browse Categories</Link>
							</li>
							<li>
								<Link to="#">Candidate Dashboard</Link>
							</li>
							<li>
								<Link to="#">Job Alerts</Link>
							</li>
							<li>
								<Link to="#">My Bookmarks</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<span className="font-4xl font-bold text-gray-900">
							For Employers
						</span>
						<ul className="text-sm flex flex-col gap-4">
							<li>
								<Link to="#">Browse Candidates</Link>
							</li>
							<li>
								<Link to="#">Employer Dashboard</Link>
							</li>
							<li>
								<Link to="#">Add Job</Link>
							</li>
							<li>
								<Link to="#">Job Packages</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<span className="font-4xl font-bold text-gray-900">About Us</span>
						<ul className="text-sm flex flex-col gap-4">
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<Link to="#">Join Page Invoice</Link>
							</li>
							<li>
								<Link to="#">Terms Page</Link>
							</li>
							<li>
								<Link to="#">Blog</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/fqa">FAQ</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<span className="font-4xl font-bold text-gray-900">
							Helpful Resources
						</span>
						<ul className="text-sm flex flex-col gap-4">
							<li>
								<Link to="#">Site Map</Link>
							</li>
							<li>
								<Link to="/trems">Terms of Use</Link>
							</li>
							<li>
								<Link to="#">Privacy Center</Link>
							</li>
							<li>
								<Link to="#">Security Center</Link>
							</li>
							<li>
								<Link to="#">Accesibility Center</Link>
							</li>
							<li>
								<Link to="pricing">Pricing</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* social icons and copyright */}
			<div className="flex items-center flex-col gap-6 py-8 text-gray-600 md:flex-row-reverse md:justify-between md:px-12 md:py-12">
				<div className="flex gap-6">
					<span>
						<FaFacebookF />
					</span>
					<span>
						<FaTwitter />
					</span>
					<span>
						<FaYoutube />
					</span>
					<span>
						<FaLinkedinIn />
					</span>
				</div>
				<span className="text-sm">
					&copy; 2023 Hired Dream Job. All Right Reserved.
				</span>
			</div>
			{/* button to scroll to top */}
			<span
				onClick={moveToTop}
				className={`${height > 100 ? "" : "hidden"
					} cursor-pointer font-black font-2xl text-blue-700 fixed bottom-6 right-6 md:bottom-16 md:right-16 bg-blue-200 p-3 rounded-full z-10`}
			>
				<IoIosArrowUp />
			</span>
		</footer>
	);
}
