import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const FacebookSignIn = (authProvider) => {
    return signInWithPopup(auth, authProvider);
  };

  const GoogleSignIn = (authProvider) => {
    return signInWithPopup(auth, authProvider);
  };

  const GithubSignIn = (authProvider) => {
    return signInWithPopup(auth, authProvider);
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
    FacebookSignIn,
    GoogleSignIn,
    GithubSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
