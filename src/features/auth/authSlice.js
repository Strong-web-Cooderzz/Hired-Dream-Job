import { createSlice } from "@reduxjs/toolkit"

// this collects directly from localstorage instead of waiting for ouAuthStateChange
export function getUserInfoFromLocalStorage() {
	for (let i in window.localStorage) {
		if (i.match(/firebase:authUser:.*/)) return JSON.parse(window.localStorage.getItem(i))
	}
	return {}
}

const initialState = {
	authInfo: getUserInfoFromLocalStorage(),
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// this actually resets since jwt expires after few moments
		setAuthInfo: state => {
			state.authInfo = getUserInfoFromLocalStorage()
		},

		// this is for log out
		setLogOut: state => {
			state.authInfo = {}
		}
	}
})

export const { setAuthInfo, setLogOut } = authSlice.actions;

export default authSlice.reducer;
