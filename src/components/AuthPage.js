import React from "react";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function AuthPage({ setIsAuth }) {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container p-5 w-1/3">
      <p class="block text-gray-900 text-xl mb-2">Sign in with google</p>
      <button
        className=" text-white bg-blue-500 px-3 py-1 border"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}
