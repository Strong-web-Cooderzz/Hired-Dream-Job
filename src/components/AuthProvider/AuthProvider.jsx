import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import fetchData from "../../api/fetchData";
import { io } from "socket.io-client";

const socket = io('ws://localhost:5000');

export const AuthContext = createContext();
const auth = getAuth(app);
const authUser = auth.currentUser;

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [dbUser, setDbUser] = useState([])
	// const [token, setToken] = useState('')

	const FacebookSignIn = (facebook) => {
		return signInWithPopup(auth, facebook);
	};

	const GoogleSignIn = (google) => {
		return signInWithPopup(auth, google);
	};

	const GithubSignIn = (github) => {
		return signInWithPopup(auth, github);
	};

	const createAccount = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const changePass = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	const updateUserProfile = (info) => {
		return updateProfile(auth.currentUser, info);
	};

	useEffect(() => {
		fetchData.get('/user', {
			params: {
				email: user?.email
			}
		})
		.then(response => setDbUser(response.data))
		// fetch(`http://localhost:5000/user?email=${user?.email}`)
		// 	.then(res => res.json())
		// 	.then(data => setDbUser(data))
	}, [user?.email])

	const authInfo = {
		auth,
		user,
		loading,
		FacebookSignIn,
		GoogleSignIn,
		GithubSignIn,
		createAccount,
		login,
		dbUser,
		logOut,
		changePass,
		updateUserProfile,
		// token,
		setDbUser,
		authUser,
		socket
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false)
			if (currentUser) {
				setUser(currentUser)
			} else {
				setUser(null)
			}
			// setToken(currentUser.accessToken)
		})
		return () => unSubscribe()
	}, [])

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
