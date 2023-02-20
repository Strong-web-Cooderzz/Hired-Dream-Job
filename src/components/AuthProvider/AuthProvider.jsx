import React, { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
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

export const AuthContext = createContext();
const auth = getAuth(app);
const authUser = auth.currentUser;

let socket;

const AuthProvider = ({ children }) => {
	const [socketConnected, setSocketConnected] = useState(false)
	const [user, setUser] = useState({});
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
		socket,
		socketConnected
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false)
			if (currentUser) {
				setUser(currentUser)
				socket = io('wss://hdj-server.onrender.com', {
					timeout: 5000,
					auth: {
						token: currentUser.accessToken
					}
				})
			} else {
				setUser({})
			}
			// setToken(currentUser.accessToken)
		})
		return () => unSubscribe()
	}, [])

	useEffect(() => {
		if (socket) {
			socket.on('connect', socket => {
				console.log('new connection')
				setSocketConnected(true)
			})
		}
	}, [socket])

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
