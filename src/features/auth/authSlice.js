import { createSlice } from "@reduxjs/toolkit"

// this collects directly from localstorage instead of waiting for ouAuthStateChange
function getUserInfoFromLocalStorage() {
	for (i in window.localStorage) {
		if (i.match(/firebase:authUser:.*/)) return JSON.parse(window.localStorage.getItem(i))
	}
}

const initialState = {
	count: getUserInfoFromLocalStorage(),
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

	}
})
