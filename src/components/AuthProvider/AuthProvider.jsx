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

  const Login = (email, password) => {
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
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    FacebookSignIn,
    GoogleSignIn,
    GithubSignIn,
    createAccount,
    Login,
    logOut,
    changePass,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;