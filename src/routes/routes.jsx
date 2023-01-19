import { createBrowserRouter } from "react-router-dom";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidates from "../components/Pages/Candidates/Candidates";
import CandidateDashboardRight from "../components/Pages/Dashboard/CandidatesDashboard/CandidateDashboardRight/CandidateDashboardRight";
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
        path: '/dashboard/candidates_dashboard',
        element: <CandidateDashboardRight > </CandidateDashboardRight>
      }
    ]
   }
]);
