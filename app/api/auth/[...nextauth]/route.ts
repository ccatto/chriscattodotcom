import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ]
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



// const handler = NextAuth({
//   ...
// })

// export { handler as GET, handler as POST }

// import type { NextApiRequest, NextApiResponse } from "next"
// // import NextAuth from "next-auth"

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   // Do whatever you want here, before the request is passed down to `NextAuth`
//   return await NextAuth(req, res, {
//     // ...
//     // console.log('blah');
//   })
// }