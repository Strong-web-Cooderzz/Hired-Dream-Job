import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

function App() {
  return (
    <div className=" max-w-[1400px] mx-auto">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
