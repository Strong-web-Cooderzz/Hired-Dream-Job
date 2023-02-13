import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { setAuthInfo } from './features/auth/authSlice'
import { router } from './routes/routes'

function App() {
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth.auth)

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			currentUser && dispatch(setAuthInfo(currentUser))
		})
		return unSubscribe
	}, [])

	return (
		<div className="max-w-[1400px] mx-auto">
			<RouterProvider router={router} />
			<Toaster />
		</div>
	)
}

export default App
