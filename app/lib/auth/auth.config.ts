import type { NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/app/db";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { config } from "dotenv";

config({ path: ".env" });

export const authConfig = {
  adapter: DrizzleAdapter(db) as Adapter,
  pages: {
    signIn: "/login"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!
    })
  ],
  callbacks: {
    async session({ session }) {
      console.log(session);
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      return true;
    },
  },
} satisfies NextAuthOptions;