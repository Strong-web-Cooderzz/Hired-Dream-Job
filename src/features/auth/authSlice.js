import { createSlice } from "@reduxjs/toolkit"
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const initialState = {
	authInfo: {},
	auth
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthInfo: (state, action) => {
			state.authInfo = action.payload
		},
	}
})

export const { setAuthInfo, login } = authSlice.actions;

export default authSlice.reducer;
