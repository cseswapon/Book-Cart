import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializationApp from "../firebase/firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);
  initializationApp();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // google singIn method
  const googleSingIn = (location, navigate) => {
    setisLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?.from || "/");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setisLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  // singOut
  const singOut = () => {
    setisLoading(true);
    signOut(auth)
      .then(() => {
        setUser("");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  return {
    googleSingIn,
    singOut,
    user,
    error,
    isLoading,
  };
};
export default useFirebase;
