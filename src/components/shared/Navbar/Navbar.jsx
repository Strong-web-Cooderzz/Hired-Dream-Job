import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import ScrollToTop from "../../../ScrollUp/ScrollToTop";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const { authUser, user, logOut, dbUser, loading, token } =
    useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2 md:block">
            <Link className="w-24 h-7 inline-block" to="/">
              <img src={logo} alt="" className="w-24" />
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
                <Link to="/jobs">Find Jobs</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/employers">Employers</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/candidates">Candidates</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/blogs">Blogs</Link>
              </li>

              <li className="text-white">
                {user?.email ? (
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="sortbox"
                      className="hidden absolute"
                    />
					<div class="dropdown relative">
                      <a
                        class="dropdown-toggle flex items-center hidden-arrow"
                        href="#"
                        id="dropdownMenuButton2"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                       {user?.photo ? (
                            <img
                              className="w-8 h-8 rounded-full object-cover"
                              src={user?.photo}
                              alt=""
                            />
                          ) : (
                            <FaUserCircle className="text-black text-3xl" />
                          )}
                      </a>
                      <ul
                        class="
    dropdown-menu
    min-w-max
    absolute
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a
                            class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                            href="#"
                          >
                            {user?.displayName ? user?.displayName : "Unknown"}
                          </a>
                        </li>
                        <li>
                          <Link
                            class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                            to="/dashboard"
                          >
                            {" "}
                            Dashboard{" "}
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogOut}
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-rose-700 hover:bg-rose-100 " >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                    
                   
                  </div>
                ) : (
                  <Link
                    className="py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600"
                    to="/login"
                  >
                    Log in
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </nav>
  );
}
