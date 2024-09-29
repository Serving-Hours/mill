"use client";

import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { nunito } from "@/app/ui/fonts";

export default function Login() {
  const { status } = useSession();

  if (status === "authenticated") {
    return redirect("/dashboard/links");
  }

  return (
    <main className="flex flex-col items-center h-screen justify-center gap-8">
      <header className={`${nunito.className} text-4xl md:text-5xl text-center tracking-tight`}>
        Home for Your Links
      </header>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard/links" })}
        className="flex p-4 md:w-[360px] justify-center bg-[#EAEAEA] items-center gap-2 rounded-full font-medium md:font-semibold text-[#777777]"
      >
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_0_582)">
            <path d="M10.4998 8.18176V12.0545H15.8816C15.6452 13.2999 14.9361 14.3545 13.8724 15.0636L17.1179 17.5818C19.0088 15.8364 20.0997 13.2728 20.0997 10.2273C20.0997 9.51824 20.0361 8.83636 19.9179 8.18187L10.4998 8.18176Z" fill="#4285F4" />
            <path d="M4.89568 11.9033L4.16371 12.4636L1.57275 14.4818C3.2182 17.7454 6.59068 20 10.4997 20C13.1997 20 15.4633 19.1091 17.1179 17.5818L13.8724 15.0636C12.9815 15.6636 11.8451 16.0273 10.4997 16.0273C7.89976 16.0273 5.69073 14.2728 4.89976 11.9091L4.89568 11.9033Z" fill="#34A853" />
            <path d="M1.57265 5.51819C0.890868 6.86359 0.5 8.38179 0.5 9.99994C0.5 11.6181 0.890868 13.1363 1.57265 14.4817C1.57265 14.4907 4.89998 11.8999 4.89998 11.8999C4.69998 11.2999 4.58177 10.6636 4.58177 9.99984C4.58177 9.33612 4.69998 8.69979 4.89998 8.0998L1.57265 5.51819Z" fill="#FBBC05" />
            <path d="M10.4999 3.98182C11.9727 3.98182 13.2818 4.49089 14.3272 5.47272L17.1908 2.60912C15.4545 0.990971 13.2 0 10.4999 0C6.59089 0 3.2182 2.24545 1.57275 5.51819L4.89998 8.10001C5.69084 5.73635 7.89996 3.98182 10.4999 3.98182Z" fill="#EA4335" />
          </g>
          <defs>
            <clipPath id="clip0_0_582">
              <rect width="20" height="20" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
        <span>Continue with Google</span>
      </button>
      <p className="max-w-[360px] font-medium text-center text-xs text-[#A3A3A3]">
        By clicking “Continue with Google”, you acknowledge that you you agree to our Terms of Service and Privacy Policy
      </p>
      {/* <button onClick={() => signIn("github", { callbackUrl: "/links" })}>Continue with github</button> */}
    </main>
  );
}