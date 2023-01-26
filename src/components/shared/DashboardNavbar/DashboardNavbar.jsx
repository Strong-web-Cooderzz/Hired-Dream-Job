import { useContext, useState } from "react";
import { FaAlignRight, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function AdminNavbar() {
  const navigate = useNavigate()
  const [navbar, setNavbar] = useState(false);
  const { logOut, user, loading } = useContext(AuthContext);

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
              {/* dashboard navbar button  */}
              <button
                class="lg:hidden inline-block px-6 py-2.5  text-slate-600 hover:text-slate-800 hover:bg-gray-50 font-medium text-xs leading-tight uppercase rounded shadow-md  focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-gray-300  transition duration-150 ease-in-out"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <FaAlignRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-all ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  duration-1000">
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Find Jobs</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Employers</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/candidates">Candidates</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Blog</Link>
              </li>
              <li className="text-white">
                {user?.uid ? (
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="sortbox"
                      className="hidden absolute"
                    />
                    <label
                      htmlFor="sortbox"
                      className={`flex items-center space-x-1 cursor-pointer ${
                        user?.photoURL ? "w-[32px]" : "w-full"
                      }`}
                    >
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt=""
                          className="rounded-full"
                        />
                      ) : (
                        <FaUserCircle className="text-black text-xl" />
                      )}
                    </label>

                    <div
                      id="sortboxmenu"
                      className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-white transition delay-75 ease-in-out z-10 font-semibold"
                    >
                      <ul className="block text-gray-900">
                        <li className="block px-3 py-2 hover:bg-gray-200">
                          <Link to="">
                            {user?.displayName ? user?.displayName : "Unknown"}
                          </Link>
                        </li>
                        <li className="block px-3 py-2 hover:bg-gray-200">
                          <Link to="">Account Settings</Link>
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
