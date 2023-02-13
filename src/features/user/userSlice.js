import { createSlice } from "@reduxjs/toolkit"

export function getUserInfoFromLocalStorage() {
	return JSON.parse(window.localStorage.getItem('userInfo')) || {}
}

const initialState = {
	userInfo: getUserInfoFromLocalStorage()
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload
		},
		resetUserInfo: state => {
			state.userInfo = {}
		}
	}
})

export const { setUserInfo, resetUserInfo } = userSlice.actions;

export default userSlice.reducer;
