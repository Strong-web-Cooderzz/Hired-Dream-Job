import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/notificationsSlice";

export const store = configureStore({
	reducer: {
		notifications: notificationsReducer
	}
})
