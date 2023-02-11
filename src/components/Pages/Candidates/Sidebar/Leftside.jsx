const Leftside = ({ setCandidates, fetchData, setLoading }) => {
	const handleFormSubmit = e => {
		e.preventDefault()
		setLoading(true)
		fetchData.get('/candidate', {
			params: {
				type: 'Candidate',
				candidate: e.target.candidate.value,
			}
		})
			.then(response => {
				setCandidates(response.data)
				setLoading(false)
			})
	}

	return (
		<div className="bg-blue-50 p-4 md:w-4/12 absolute md:relative -left-96 md:left-0 rounded-md flex flex-col gap-3">
			<form onSubmit={handleFormSubmit}>
				<div>
					<p className="text-lg my-2">Search by Keywords</p>
					<label htmlFor="Search" className="hidden">Search</label>
					<input type="search" name="candidate" placeholder="Search Candidates" className="w-32 md:w-full py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none" />
				</div>
			</form>
		</div>
	);
};

export default Leftside;
