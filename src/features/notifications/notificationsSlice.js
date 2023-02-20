import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	notifications: {}
}

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers
})
