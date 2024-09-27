"use client";

import { useSession, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button>
      </>
    );
  }
}