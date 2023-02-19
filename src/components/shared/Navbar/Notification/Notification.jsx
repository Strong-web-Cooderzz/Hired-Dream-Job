import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import { BsBell } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { Link } from "react-router-dom";
// import { socket } from "../../../../api/socket";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Notification() {
  const { user, socket, socketConnected } = useContext(AuthContext);
  const [newNotification, setNewNotification] = useState(false);

  useEffect(() => {
    if (socketConnected) {
      socket.on("notification", (data) => {
        toast.success(data);
        setNewNotification(true);
      });
    }
  }, [socketConnected]);

  return (
    <section>
      {newNotification ? (
        <span className="text-xl">
              
			  <div class="dropdown relative">
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <VscBellDot />
            </a>
           
              <ul
                class="
    dropdown-menu
	w-96
	p-3
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
	border-3
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
				<div className="border-b pb-2">
				<h3 className="text-xl">Notifications</h3>
				</div>
                  <Link
                    class="dropdown-itemtext-smpy-2px-4font-normalblockw-fullwhitespace-nowrapbg-transparenttext-gray-700hover:bg-gray-100"
                    href="#"
                  >
                <li className="border-b pb-2">
                    Arman Khan applied your job{" "}
                    <span className="text-blue-400">
                      Senior Full Stack Engineer...
                    </span>
                </li>
                  </Link>
				
                  <Link
                    class="dropdown-itemtext-smpy-2px-4font-normalblockw-fullwhitespace-nowrapbg-transparenttext-gray-700hover:bg-gray-100"
                    href="#"
                  >
					<li className="border-b pb-2">
                    Arman Ali Khan applied your job{" "}
                    <span className="text-blue-400">
                      Senior Full Stack Engineer...
                    </span>
                </li> 
				</Link>
				<Link to={'#'} className="flex justify-center px-4 py-1 hover:underline">See All Notifications</Link>
              </ul>
          </div>
        </span>
      ) : (
        <span className="text-xl">
          {/* Notigication Without Dot */}

          <div class="dropdown relative">
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsBell />
            </a>
           
              <ul
                class="
    dropdown-menu
	w-96
	p-3
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
	border-3
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
				<div className="border-b pb-2">
				<h3 className="text-xl">Notifications</h3>
				</div>
                  <Link
                    class="dropdown-itemtext-smpy-2px-4font-normalblockw-fullwhitespace-nowrapbg-transparenttext-gray-700hover:bg-gray-100"
                    href="#"
                  >
                <li className="border-b pb-2">
                    Arman Khan applied your job{" "}
                    <span className="text-blue-400">
                      Senior Full Stack Engineer...
                    </span>
                </li>
                  </Link>
				
                  <Link
                    class="dropdown-itemtext-smpy-2px-4font-normalblockw-fullwhitespace-nowrapbg-transparenttext-gray-700hover:bg-gray-100"
                    href="#"
                  >
					<li className="border-b pb-2">
                    Arman Ali Khan applied your job{" "}
                    <span className="text-blue-400">
                      Senior Full Stack Engineer...
                    </span>
                </li> 
				</Link>
				<Link to={'#'} className="flex justify-center px-4 py-1 hover:underline">See All Notifications</Link>
              </ul>
          </div>
        </span>
      )}
    </section>
  );
}
