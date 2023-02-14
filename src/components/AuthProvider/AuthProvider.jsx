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

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [dbUser, setDbUser] = useState([])
	const [token, setToken] = useState('')

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
		fetch(`https://hired-dream-job-server-sparmankhan.vercel.app/user?email=${user?.email}`)
			.then(res => res.json())
			.then(data => setDbUser(data))
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
		token
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			currentUser ? setUser(currentUser) : setUser(null)
			setToken(currentUser.accessToken)
			setLoading(false)
		})
		return unSubscribe
	}, [])

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
