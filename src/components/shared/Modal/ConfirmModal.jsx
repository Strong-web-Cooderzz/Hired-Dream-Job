export default function ConfirmModal({commentLoading, hidden, setHidden, confirmFunction }) {
	return (
		<div className={`fixed after:fixed after:inset-0 after:bg-black after:opacity-5 inset-0 ${hidden && 'hidden'}`}>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-50 p-6 rounded-md">
				<p className="text-3xl">Are You Sure?</p>
				<p className="text-lg mt-2">This can not be undone. Think again if you really want to do this.</p>
				<div className="mt-6 flex gap-4 text-white">
					<button className="text-lg px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-600" onClick={confirmFunction}>{commentLoading?'Loading...':'Confirm'}</button>
					<button className="text-lg px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-600" onClick={() => setHidden(true)}>Cancel</button>
				</div>
			</div>
		</div>
	)
}
