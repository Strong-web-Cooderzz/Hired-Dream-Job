import { createBrowserRouter } from "react-router-dom";
import About from "../components/Pages/About/About";
import AccountAgency from "../components/Pages/Account/AccountAgency";
import AccountClient from "../components/Pages/Account/AccountClient";
import Candidates from "../components/Pages/Candidates/Candidates";
import Articles from "../components/Pages/Home/Articles/Articles";
import SingelArticles from "../components/Pages/Home/Articles/SingelArticles";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login&Register/Login/Login";
import ResetPass from "../components/Pages/Login&Register/Login/ResetPass";
import Register from "../components/Pages/Login&Register/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import TremsPages from "../components/Pages/TermsPages/TremsPages";
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
    path:'/about',
    element:<About></About>
  },
  {
    path:'/singelArticles',
    element:<SingelArticles></SingelArticles>
  },
  {
    path:"/trems",
    element:<TremsPages></TremsPages>
  },{
    path:"/blogs",
    element:<Articles></Articles>
  }

]);
