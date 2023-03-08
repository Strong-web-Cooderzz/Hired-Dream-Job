import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsBell } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../../../api/fetchData";
import { addNotificationFromSocket, addNotification } from "../../../../features/notifications/notificationsSlice";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Notification() {
	const { user, socket, socketConnected } = useContext(AuthContext);
	const dispatch = useDispatch();
	const notifications = useSelector(state => state.notifications.notifications)
	console.log(notifications)
	const [newNotification, setNewNotification] = useState(false);
	let notificationCount = 0;

	useEffect(() => {
		if (socketConnected) {
			socket.on("notification", (data) => {
				toast.success(data, {
					duration: 5000
				});
				setNewNotification(true);
				dispatch(addNotificationFromSocket(data))
			});
		}
	}, [socketConnected, dispatch, socket]);

	function fetchNotification() {
		fetchData.get('/notifications', {
			headers: {
				'Authorization': `Bearer ${user.accessToken}`
			},
			params: {
				skip: notificationCount
			}
		})
			.then(response => {
				console.log(response.data)
				const oldNotifications = [...notifications]
				const newNotifications = oldNotifications.concat(response.data)
				console.log(newNotifications)
				dispatch(addNotification(newNotifications))
			})
	}

	useEffect(() => {
		fetchNotification()
	}, [user, fetchNotification])

	return (
		<section>
			{newNotification ? (
				<span className="text-xl">
					<div className="dropdown relative ">
						<a
							onClick={() => setNewNotification(false)}
							className="dropdown-toggle flex items-center hidden-arrow"
							id="dropdownMenuButton2"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<VscBellDot />
						</a>

						<ul
							className="dropdown-menu w-96 p-3 absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg border-3 mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
							aria-labelledby="dropdownMenuButton2"
						>
							<div className="border-b pb-2">
								<h3 className="text-xl">Notifications</h3>
							</div>
							<span
								className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 "
							>
								{
									notifications.map(notification =>
										<li key={notification._id} className="border-b pb-2 whitespace-normal hover:underline">
											{notification.notification}
										</li>)
								}
							</span>

							<button
								onClick={() => {
									notificationCount++
									fetchNotification()
								}}
								className="flex justify-center px-4 py-1 hover:underline mx-auto"
							>
								See more notifications
							</button>
						</ul>
					</div>
				</span>
			) : (
				<span className="text-xl">
					{/* Notification Without Dot */}

					<div className="dropdown relative">
						<a
							className="dropdown-toggle flex items-center hidden-arrow"
							href=""
							id="dropdownMenuButton2"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<BsBell />
						</a>

						<ul
							className="dropdown-menu w-96 p-3 absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg border-3 mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
							aria-labelledby="dropdownMenuButton2"
						>
							<div className="border-b pb-2">
								<h3 className="text-xl">Notifications</h3>
							</div>
							<span
								className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 "
							>
								{
									notifications.slice(0,10).map(notification =>
										<li className="border-b pb-2 whitespace-normal hover:underline">
											{notification.notification}
										</li>)
								}
							</span>

							<button
								onClick={() => {
									notificationCount++
									fetchNotification()
								}}
								className="flex justify-center px-4 py-1 hover:underline mx-auto"
							>
								See more notifications
							</button>
						</ul>
					</div>
				</span>
			)}
		</section>
	);
}
