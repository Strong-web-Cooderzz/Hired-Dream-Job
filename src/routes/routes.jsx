import { createBrowserRouter } from "react-router-dom";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidates from "../components/Pages/Candidates/Candidates";
import Fqa from "../components/Pages/FQA/Fqa";

import FindJob from "../components/Pages/FindJob/FindJob";
import SingleJobs from "../components/Pages/FindJob/SingleJobs";

import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login&Register/Login/Login";
import ResetPass from "../components/Pages/Login&Register/Login/ResetPass";
import Register from "../components/Pages/Login&Register/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import Pricing from "../components/Pages/Pricing/Pricing";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

   {
    path: "/candidates",
    element: <Candidates />,
  },
  {
    path: "/fqa",
    element: <Fqa/>,
  },
  {
    path: "/pricing",
    element: <Pricing/>,
  },

      {
        path: "/find-jobs",
        element: <FindJob />,
      },
      {
        path: "/find-jobs/single-job",
        element: <SingleJobs />,
      },

    ],
  },
  {
    path: "/resetPass",
    element: <ResetPass />,
  },

  {
    path: "/accountClient",
    element: <AccountClient />,
  },
  {
    path: "/accountAgency",
    element: <AccountAgency />,
  },
]);
