"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  return (
    <main className="grid place-items-center">
      <div>Hello</div>
      <button onClick={() => signIn("google", { callbackUrl: "/links" })}>Continue with Google</button>
      <button onClick={() => signIn("github" , {callbackUrl:"/links"})}>Continue with github</button>
      <button onClick={() => signOut()}>Signout </button>
    </main>
  );
}