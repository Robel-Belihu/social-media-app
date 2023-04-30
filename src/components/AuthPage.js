import React from "react";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";

export function AuthPage() {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div>
      <p>Sign in with google</p>
      <button
        className=" text-white bg-blue-500 px-3 py-1 border"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}
