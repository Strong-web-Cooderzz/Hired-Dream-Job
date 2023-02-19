import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import { BsBell } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
// import { socket } from "../../../../api/socket";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


export default function Notification() {
	const { user, socket, socketConnected } = useContext(AuthContext)
	const [newNotification, setNewNotification] = useState(false);

	useEffect(() => {
		if (socketConnected) {
			socket.on("notification", (data) => {
				toast.success(data);
				setNewNotification(true);
			});
		}
	}, [socketConnected])

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
