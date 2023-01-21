
import { createBrowserRouter } from "react-router-dom";
import About from "../components/Pages/About/About";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidate from "../components/Pages/Candidates/Candidate";
import Candidates from "../components/Pages/Candidates/Candidates";

import CandidatesDashboard from "../components/Pages/Dashboard/CandidatesDashboard/UserDashboard";
import DashboardAddPost from "../components/Pages/Dashboard/DashboardAddPost/DashboardAddPost";
import MyAllPost from "../components/Pages/Dashboard/MyAllPost/MyAllPost";
import MyProfile from "../components/Pages/Dashboard/MyProfle/MyProfile";

import Articles from "../components/Pages/Home/Articles/Articles";
import SingelArticles from "../components/Pages/Home/Articles/SingelArticles";
import Contact from "../components/Pages/Contact/Contact";
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
import TremsPages from "../components/Pages/TermsPages/TremsPages";
import Pricing from "../components/Pages/Pricing/Pricing";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import UserDashboard from "../components/Pages/Dashboard/CandidatesDashboard/UserDashboard";
import Fqa from "../components/Pages/FQA/Fqa";

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
				path: "/candidates",
				element: <Candidates />,
			},

			{
				path: "/find-jobs",
				element: <FindJob />,
			},
			{
				path: "/find-jobs/single-job",
				element: <SingleJobs />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: '/about',
				element: <About></About>
			},
			{
				path: '/singelArticles',
				element: <SingelArticles></SingelArticles>
			},
			{
				path: "/trems",
				element: <TremsPages></TremsPages>
			},
			{
				path: "/blogs",
				element: <Articles></Articles>
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
				element: <SingleJobs />
			},
			{
				path: "/find-jobs/single-job/:id",
				element: <SingleJobs />,
				loader: ({ params }) => fetch(`https://hired-dream-server.vercel.app/jobs/${params.id}`)
			},
			{
				path: "/resetPass",
				element: <ResetPass />,
			},
			{
				path: "/employers",
				element: <Employers />
			},
			{
				path: "/employer/:id",
				element: <Employer />
			}
		]
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
		path: "/invoice",
		element: <Invoice />,
	},
	{
		path: "/accountAgency",
		element: <AccountAgency />,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout > </DashboardLayout>,
		children: [
			{
				path: '/dashboard',
				element: <UserDashboard > </UserDashboard>
			},
			{
				path: '/dashboard/my_dashboard',
				element: <UserDashboard > </UserDashboard>
			},
			{
				path: '/dashboard/my_profile',
				element: <MyProfile> </MyProfile>
			},
			{
				path: '/dashboard/addpost',
				element: <DashboardAddPost> </DashboardAddPost>
			},
			{
				path: '/dashboard/my_allpost',
				element: <MyAllPost> </MyAllPost>
			}
		]
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
