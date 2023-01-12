import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import NotFound from "../components/Pages/NotFound/NotFound";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])