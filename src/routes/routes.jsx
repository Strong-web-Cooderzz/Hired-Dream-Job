import { createBrowserRouter } from "react-router-dom";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidate from "../components/Pages/Candidates/Candidate";
import Candidates from "../components/Pages/Candidates/Candidates";
import Fqa from "../components/Pages/FQA/Fqa";
import FindJob from "../components/Pages/FindJob/FindJob";
import SingleJobs from "../components/Pages/FindJob/SingleJobs";
import Employer from "../components/Pages/Employer/Employer";
import Employers from "../components/Pages/Employers/Employers";
import Home from "../components/Pages/Home/Home";
import Invoice from "../components/Pages/Invoice/Invoice";
import Login from "../components/Pages/Login&Register/Login/Login";
import ResetPass from "../components/Pages/Login&Register/Login/ResetPass";
import Register from "../components/Pages/Login&Register/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import Pricing from "../components/Pages/Pricing/Pricing";
import Main from "../layout/Main";

export const router = createBrowserRouter([
	{
		path: "/",
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
				path: "/employers",
				element: <Employers />
			},
			{
				path: "/employer/:id",
				element: <Employer />
			},
			{
				path: "/candidates",
				element: <Candidates />,
			},

      {
        path: "/candidate",
        element: <Candidate />,
      },
			{
				path: "/fqa",
				element: <Fqa />,
			},
			{
				path: "/pricing",
				element: <Pricing />,
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
	{
		path: "/invoice",
		element: <Invoice />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
