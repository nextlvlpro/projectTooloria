"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
    >
      Sign in with Google
    </button>
  );
}
