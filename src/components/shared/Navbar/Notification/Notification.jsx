import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsBell } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Notification() {
	const { socket, user } = useContext(AuthContext)
	const [newNotification, setNewNotification] = useState(false);

	useEffect(() => {
		if (user?.email) {
			return () => {
				socket.on("notification", (data) => {
					toast.success(data);
					setNewNotification(true);
				});
			}
		}
	}, [user])

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
