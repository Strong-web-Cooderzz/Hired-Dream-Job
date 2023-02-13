import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		auth: authReducer
	}
})
