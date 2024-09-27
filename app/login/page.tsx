"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  return (
    <main>
      <div>Hello</div>
      <button onClick={() => signIn("google", { callbackUrl: "/links" })}>Continue with Google</button>
    </main>
  );
}