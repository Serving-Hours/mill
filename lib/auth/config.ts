import type { NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/app/db";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { config } from "dotenv";
import { users } from "@/app/db/schema";
import { eq } from "drizzle-orm";

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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // if (!session.user.email) return session;

      // const results = await db
      //   .select({
      //     id: users.id,
      //   })
      //   .from(users)
      //   .where(eq(users.email, session.user.email));

      // if (results.length === 0) return session;

      // session.user.id = results[0].id;

      // console.log(session);

      session.user.id = token.sub!;
      return session;
    },
    // async signIn({ profile }) {
    //   console.log(profile);
    //   return true;
    // },
  },
} satisfies NextAuthOptions;