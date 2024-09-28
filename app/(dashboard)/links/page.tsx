"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <>
      Signed in as {session?.user?.name} <br />
      <button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button>
    </>
  );
}