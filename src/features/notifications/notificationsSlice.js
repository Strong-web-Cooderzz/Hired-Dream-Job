import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	notifications: []
}

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		addNotificationFromSocket: (state, action) => {
			let newNotifications = [];
			const notificationObject = {};
			notificationObject._id = Math.round(Math.random() * 1000000)
			notificationObject.notification = action.payload
			if (state.notifications.length) newNotifications = [...state.notifications]
			newNotifications.unshift(notificationObject)
			state.notifications = newNotifications
		},
		addNotification: (state, action) => {
			const oldNotifications = [...state.notifications]
			const newNotifications = oldNotifications.concat(action.payload)
			state.notifications = newNotifications
		}
	}
})

export const { addNotificationFromSocket, addNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
