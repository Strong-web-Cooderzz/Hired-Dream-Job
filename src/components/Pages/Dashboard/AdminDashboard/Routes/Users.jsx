import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsListOl, BsPen, BsPencil } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import fetchData from "../../../../../api/fetchData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Loading from "../../../../Loading/Loading";
import ConfirmModal from "../../../../shared/Modal/ConfirmModal";

const Users = () => {
	const { token} = useContext(AuthContext)
  const [userType, setUserType] = useState("candidates");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataType, setDataType] = useState("user");
  const [jobs, setJobs] = useState([]);
	const [hidden, setHidden] = useState(true)
	const [toBeDeletedUserId, setToBeDeletedUserId] = useState('')

  useEffect(() => {
    setLoading(true);
		fetchData(`/api/v1/get/users?type=${userType}`)
		.then(response => {
        setUsers(response.data);
        setLoading(false);
		})
  }, [userType, dataType]);
     
	const deleteUser = async () => {
		fetchData.delete(`/delete-user?id=${toBeDeletedUserId}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
			})
			.then(response => {
				console.log(response)
				if (response.data.acknowledged) {
					setHidden(true)
					toast.success('User deleted successfully')
				}
				if (result.status = 401) {
					setHidden(true)
					toast.error('You are not an admin')
				}
		})
	}
  
  return (
    <>
			<ConfirmModal hidden={hidden} setHidden={setHidden} confirmFunction={deleteUser}/>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div class="flex flex-col">
          <div class="overflow-x-auto ">
            <div class="py-2 inline-block min-w-full ">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Thumb
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name({users.length})
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        IP
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        <div class="">
                          <div class="w-32">
                            <select
                              onChange={(e) => setUserType(e.target.value)}
                              class="form-select appearance-none
      block
      w-full
      px-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              aria-label="Default select example"
                            >
                              <option
                                selected={userType === "candidates"}
                                value="candidates"
                              >
                                Candidates
                              </option>
                              <option
                                selected={userType === "employers"}
                                value="employers"
                              >
                                Employers
                              </option>
                              <option value="3">Admins</option>
                            </select>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <>
                        <tr key={user._id} class="border-b">
                          <td class="px-6 py-4 text-sm font-medium text-gray-900">
                            <img
                              src={user.photo}
                              className="w-12 h-12 rounded-full object-cover"
                              alt=""
                            />
                          </td>
                          {/* Full Name */}
                          <td class="text-sm text-gray-900 text-left font-light px-6 py-4 whitespace-nowrap">
                            {user.fullName}{" "}
                            <span className="bg-orange-100 text-orange-600 px-2 rounded-md ">
                              3
                            </span>
                          </td>
                          {/* Email */}
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.email}
                          </td>
                          {/* IP */}
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user?.ip}
                          </td>
                          {/* User type */}
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.type}
                          </td>
                          <td class="text-sm flex gap-1 font-light px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`edit/${user._id}`}
                              className="inline-block bg-blue-100 px-2 py-2 rounded-md text-blue-600 shadow-md hover:bg-blue-400 hover:text-white"
                            >
                              <BsPencil />
                            </Link>

                            {/* Warning btn */}
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#UserWarning"
                              className="inline-block bg-orange-100 !px-2 !py-2 rounded-md text-orange-600 shadow-md hover:bg-orange-400 hover:text-white"
                            >
                              <IoWarningOutline />
                            </Link>

                            {/* User Action */}
 

                           <div class="flex justify-center">
  <div>
    <div class="dropstart relative">
      {/* <button
        class="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1s"
        data-bs-toggle="dropdown"
      
      >
        Dropstart
      </button> */}
      {/* Action BTN */}
      <Link
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                className="h-full flex items-center dropdown-toggle w-full bg-rose-100 !px-2 !py-2 rounded-md text-rose-600 shadow-md hover:bg-rose-400 hover:text-white"
                              >
                                <BsListOl />
                              </Link>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
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
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1s"
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
              text-orange-700
              border-b-2
              hover:bg-gray-100
            "
            href="#"
            >
              Ban User
              </a
          >
        </li>
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
              text-red-700
              border-b-2
              hover:bg-gray-100
            "
            href="#"
            >Block IP</a
          >
        </li>
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
              text-blue-700
              border-b-2
              hover:bg-blue-100
            "
            href="#"
            >
               {user.type==='Candidate' ? 'Make Employer':'Make Candidate'}
              </a
          >
        </li>
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
              border-b-2
              text-green-700
              hover:bg-green-100
            "
            href="#"
            >
               Make Admin
              </a
          >
        </li>
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
              text-rose-700
              hover:bg-red-100
            "
            href=""
																					onClick={e => {
																						e.preventDefault()
																						setHidden(false)
																						setToBeDeletedUserId(user._id)
																					}}
            >
               Delete User
              </a
          >
        </li>
      </ul>
    </div>
  </div>
</div>






                            <div class="flex justify-center">
                              <div></div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Warning Modal */}
          <div
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="UserWarning"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog relative w-auto pointer-events-none">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    class="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalLabel"
                  >
                    User Warning...
                  </h5>
                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body relative p-4">
                  <textarea
                    className="h-64 w-full border border-blue-400 rounded-md p-4"
                    placeholder="Write Report"
                  ></textarea>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    class="px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="px-6
      py-2.5
      bg-orange-100
      text-orange-700
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-orange-300 hover:shadow-lg
      focus:bg-orange-300 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-orange-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                  >
                    Send Warning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
