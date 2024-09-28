"use client";

import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
  const { status } = useSession();

  if (status === "authenticated") {
    return redirect("/links");
  }

  return (
    <main className="grid place-items-center">
      <div>Hello</div>
      <button onClick={() => signIn("google", { callbackUrl: "/links" })}>Continue with Google</button>
      <button onClick={() => signIn("github", { callbackUrl: "/links" })}>Continue with github</button>
    </main>
  );
}