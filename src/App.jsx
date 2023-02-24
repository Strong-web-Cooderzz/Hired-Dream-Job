import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

function App() {
	return (
		<div className="max-w-[1400px] mx-auto">
			<RouterProvider router={router} />
			<Toaster position='top-center' />
		</div>
	)
}

export default App
