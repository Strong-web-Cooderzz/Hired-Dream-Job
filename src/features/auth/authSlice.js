import { createSlice } from "@reduxjs/toolkit"

// this collects directly from localstorage instead of waiting for ouAuthStateChange
export function getAuthInfoFromLocalStorage() {
	return JSON.parse(window.localStorage.getItem('firebase:authUser:AIzaSyCyooty3MgCBzDW9A_iZDGdQk0-jGGoqTo:[DEFAULT]')) || {}
}

const initialState = {
	authInfo: getAuthInfoFromLocalStorage(),
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// this actually resets since jwt expires after few moments
		setAuthInfo: state => {
			state.authInfo = getAuthInfoFromLocalStorage()
		},

		// this is for log out
		resetAuthInfo: state => {
			state.authInfo = {}
		}
	}
})

export const { setAuthInfo, resetAuthInfo } = authSlice.actions;

export default authSlice.reducer;
