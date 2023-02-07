import { useContext, useState } from "react";
import { FaAlignRight, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function AdminNavbar() {
  const navigate = useNavigate()
  const [navbar, setNavbar] = useState(false);
  const { logOut, user,dbUser ,loading } = useContext(AuthContext);

  const LogOut = () => {
    logOut();
    navigate('/')
  };

  return (
    <nav className="w-full bg-white shadow">
    <div className="justify-between px-4 md:items-center md:flex md:px-8">
      <div>
        <div className="flex items-center justify-between py-3 md:py-2 md:block">
          <Link to="/">
            <img src={logo} alt="" className="w-12" />
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center   justify-center space-y-8 md:flex md:space-x-6 md:space-y-0   transition duration-150 ease-in-out ">
            <li className="text-gray-600 hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <Link to="/find-jobs">Find Jobs</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <Link to="/employers">Employers</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <Link to="/candidates">Candidates</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <Link to="/blogs">Blog</Link>
            </li>

            <li className="text-white">
              {user ? (
                <div className="relative">
                  <input
                    type="checkbox"
                    id="sortbox"
                    className="hidden absolute"
                  />
                  <label
                    htmlFor="sortbox"
                    className={`flex items-center space-x-1 cursor-pointer ${
                      dbUser?.photo  ? "!w-8 rounded-full !h-8" : "w-full"
                    }`}
                  >
                    {
                      user.reloadUserInfo?.providerUserInfo[0].providerId==='google.com' ? <div>
                          <FaUserCircle className="text-black text-3xl" />
                      </div>
                      :
                      <div title="Company Logo">
                          {dbUser?.photo ? (
                 <img className="w-8 h-8 rounded-full border border-black" src={dbUser?.employData?.photo} alt="" />
                    ) : (
                      <FaUserCircle className="text-black text-3xl" />
                    )}
                      </div>
                    }
                  
                  </label>

                  <div
                    id="sortboxmenu"
                    className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-white transition delay-75 ease-in-out z-10 font-semibold"
                  >
                    <ul className="block text-gray-900">
                      <li className="block px-3 py-2 hover:bg-gray-200">
                        <p>
                          {user?.displayName ? user?.displayName : "Unknown"}
                        </p>
                      </li>
                      <li className="block px-3 py-2 hover:bg-gray-200">
                        <p>Account Settings</p>
                      </li>
                      <li className="block px-3 py-2 hover:bg-gray-200">
                        <Link to="/dashboard"> Dashboard </Link>
                      </li>
                      <li className="block px-3 py-2">
                        <button
                          onClick={LogOut}
                          className="py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 w-full"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button className="py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600">
                  <Link to="/login">LogIn</Link>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
}
