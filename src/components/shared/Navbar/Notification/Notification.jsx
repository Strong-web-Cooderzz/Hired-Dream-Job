import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import { BsBell } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
// import { socket } from "../../../../api/socket";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


export default function Notification() {
	const { user, socket } = useContext(AuthContext)
	const [newNotification, setNewNotification] = useState(false);

	useEffect(() => {
		return () => {
			socket.on("notification", (data) => {
				toast.success(data);
				setNewNotification(true);
			});
		}
	}, [])

	return (
		<section>
			{newNotification ? (
				<span className="text-xl">
					<VscBellDot />
				</span>
			) : (
				<span className="text-xl">
					<BsBell />
				</span>
			)}
		</section>
	);
}
