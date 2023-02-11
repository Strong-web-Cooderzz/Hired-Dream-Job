export default function ConfirmModal({hidden, setHidden}) {
	return (
		<div className={`backdrop-blur-sm fixed inset-0 ${hidden && 'hidden'}`}>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md border-2 shadow">
				<p className="text-3xl">Are You Sure?</p>
				<p className="text-lg mt-2">This can not be undone. Think again if you really want to do this.</p>
				<div className="mt-6 flex gap-4 text-white">
					<button className="text-lg px-4 py-1 rounded-md bg-blue-400">Confirm</button>
					<button className="text-lg px-4 py-1 rounded-md bg-blue-400" onClick={() => setHidden(true)}>Cancel</button>
				</div>
			</div>
		</div>
	)
}
