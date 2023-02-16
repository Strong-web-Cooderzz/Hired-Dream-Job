import { AiOutlineCloseCircle, } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Leftside = ({ setCandidates, fetchData, setLoading, isOpen }) => {
	const handleFormSubmit = e => {
		e.preventDefault()
		setLoading(true)
		fetchData.get('/candidate', {
			params: {
				candidate: e.target.candidate.value,
				location: e.target.location.value
			}
		})
			.then(response => {
				setCandidates(response.data)
				setLoading(false)
			})
	}

	return (
		<div className={`left-0 ${isOpen ? 'left-0' : '-translate-x-full'} bg-gray-50 lg:translate-x-0 transition-transform lg:col-span-1 p-6 pt-10 md:pt-6 absolute lg:static top-16 right-0 lg:top-auto lg:right-auto z-10`}>
			<div>
				<button onClick={() => setIsOpen(!isOpen)} type="button" className="absolute top-3 right-3 text-4xl lg:hidden"><AiOutlineCloseCircle /></button>
			</div>
			<form onSubmit={handleFormSubmit}>
				<div>
					<h1 className="text-md mb-1">Search by keywords</h1>
					<div className="relative text-gray-600 focus:text-gray-400">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<button
								type="submit"
								className="p-1 focus:outline-none focus:shadow-outline"
							>
								<FiSearch className="text-xl" />
							</button>
						</span>
						<input
							type="search"
							name="candidate"
							className="py-3 text-sm text-gray-600 w-full border-2 border-gray-200 rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
							placeholder="Job title, keywords or company"
							autoComplete="off"
						/>
					</div>
				</div>
				<div className="mt-8">
					<h1 className="text-md mb-1">Location</h1>
					<div className="relative text-gray-600 focus:text-gray-400">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<button
								type="submit"
								className="p-1 focus:outline-none focus:shadow-outline"
							>
								<GoLocation />
							</button>
						</span>
						<input
							type="search"
							name="location"
							className="border-2 border-gray-200 py-3 text-sm text-gray-600 w-full rounded-md pl-10 focus:outline-blue-500 focus:bg-white focus:text-gray-900"
							placeholder="City or Postcode"
							autoComplete="off"
						/>
					</div>
				</div>
			</form>
			<div className="mt-8">
				<h1 className="text-md mb-1">Category</h1>
				<div onChange={e => {
					categoryRef.current = e.target.value;
					setPage(1)
					fetchFromServer();
				}} className="border-2 border-gray-200 relative text-gray-600 focus-within:text-gray-400">
				</div>
			</div>
		</div>
	);
};

export default Leftside;
