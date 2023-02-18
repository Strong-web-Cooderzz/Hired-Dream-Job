import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BsBell, BsBellFill } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Notification() {
	const { socket } = useContext(AuthContext);
	const [newNotification, setNewNotification] = useState(false);

	socket.on("notification", (data) => {
		toast.success(data);
		setNewNotification(true);
	});

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
