
import { createBrowserRouter } from "react-router-dom";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidates from "../components/Pages/Candidates/Candidates";
import CandidatesDashboard from "../components/Pages/Dashboard/CandidatesDashboard/UserDashboard";
import DashboardAddPost from "../components/Pages/Dashboard/DashboardAddPost/DashboardAddPost";
import MyAllPost from "../components/Pages/Dashboard/MyAllPost/MyAllPost";
import MyProfile from "../components/Pages/Dashboard/MyProfle/MyProfile";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login&Register/Login/Login";
import ResetPass from "../components/Pages/Login&Register/Login/ResetPass";
import Register from "../components/Pages/Login&Register/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
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
        path: "/candidates",
        element: <Candidates />,
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
    path: '*' , 
    element: <NotFound />
   },
   {
    path: '/dashboard', 
    element: <DashboardLayout > </DashboardLayout> ,
    children: [
      {
        path: '/dashboard',
        element:<CandidatesDashboard > </CandidatesDashboard>
      },
      {
        path:  '/dashboard/my_dashboard',
        element: <CandidatesDashboard > </CandidatesDashboard>
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
   }
]);
