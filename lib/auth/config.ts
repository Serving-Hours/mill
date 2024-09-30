import type { NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/app/db";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
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
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
  },
} satisfies NextAuthOptions;