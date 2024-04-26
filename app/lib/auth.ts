import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { EmailProvider } from "next-auth/providers/email";
import db from "./dbPrisma";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
// import AppleProvider from 'next-auth/providers/apple';

export const options = {
  session: {
    strategy: "database",
    // max age 30 days:
    maxAge: 30 * 24 * 60 * 60,
  },
  // adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : "user",
         }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID ?? '',
    //   clientSecret: process.env.APPLE_SECRET ?? '',
    // }),
  ],
  // pages: {
  //   signIn: "auth/signin",
  //   verifyRequest: "/auth/verify-request",
  // },

  // callbacks: {
  //   async session({ session, user }) {
  //     session.user = user;
  //     // return{ ...token, ...user};
  //     //   if(user) token.role = user.role
  //       return session;
  //   },
  //   // events: {
  //   //   async signIn({user}) {
  //   //     console.log({user}, 'Signed In YO');
  //   //   }
  //   // },
  // }
} satisfies AuthOptions;

// } satisfies AuthOptions;