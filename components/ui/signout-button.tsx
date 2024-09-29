"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center h-8 px-3 bg-red-50 rounded-full font-medium text-red-500"
    >
      Sign out
    </button>
  );
}