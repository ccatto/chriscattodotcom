// export {GET, POST} from "../../../../auth";
export {GET, POST} from "auth";

// import { prisma } from '@/prisma/client';
// import NextAuth, { AuthOptions } from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// cannot find below:
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import db from '@/app/lib/dbPrisma';
// import FacebookProvider from 'next-auth/providers/facebook';
// import AppleProvider from 'next-auth/providers/apple';
// import { AuthOptions } from 'next-auth';
// import { options } from './../../../lib/auth';
// import { GithubProfile } from 'next-auth/providers/github';

// import { PrismaClient } from "@prisma/client";
// const prismaLocal = new PrismaClient();

// export const authOptions = {
// const authOptions = {
// const authOptions: AuthOptions = {
//   // session: {
//   //   // strategy: "jwt",
//   //   strategy: "database",
//   //   // max age 30 days:
//   //   maxAge: 30 * 24 * 60 * 60,
//   // },
//   // adapter: PrismaAdapter(prismaLocal),
//   // adapter: PrismaAdapter(prisma),
//   // adapter: PrismaAdapter(db),
//   // secret: process.env.NEXTATUTH_SECRET,
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID ?? '',
//       clientSecret: process.env.GITHUB_SECRET ?? '',
//       profile(profile: GithubProfile) {
//         console.log('profile === ', profile);
//         //   async profile(profile) {
//         return {
//           ...profile,
//           role: profile.role ?? 'user',
//           id: profile.id.toString(),
//           image: profile.avatar_url,

//           //     // // id: tokens.id_token || profile.sub,
//           //     name: `${profile.given_name} ${profile.family_name}`,
//           //     email: profile.email,
//           //     image: profile.picture,
//           //     role: profile.role ? profile.role : "user",
//         };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_SECRET ?? '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
//     }),
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID ?? '',
//     //   clientSecret: process.env.APPLE_SECRET ?? '',
//     // }),
//   ],

//   callbacks: {
//     // https://authjs.dev/guides/role-based-access-control
//     async jwt({ token, user }) {
//       if (user) token.role = user.role;
//       return token;
//       // Persist the OAuth access_token to the token right after signin
//       // if (account) {
//       //   token.accessToken = account.access_token;
//       // }
//       return token;
//     },
//     // if we want to utilize the role in client components
//     async session({ session, token }) {
//       if (session?.user) session.user.role = token.role;
//       // Send properties to the client, like an access_token from a provider.
//       // session.accessToken = token.accessToken
//       return session;
//     },
//   },

//   // callbacks: {
//   //   async session({ session, user }) {
//   //     session.user = user;
//   //     // return{ ...token, ...user};
//   //     //   if(user) token.role = user.role
//   //       return session;
//   //   },
//   //   // events: {
//   //   //   async signIn({user}) {
//   //   //     console.log({user}, 'Signed In YO');
//   //   //   }
//   //   // }

//   // //   async session({ session, token }) {
//   // //     session.user.role = token.role;
//   // //     return session;
//   // //   }
//   // }
// };

// const handler = NextAuth(options);

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
