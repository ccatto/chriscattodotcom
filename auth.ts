// import { CredentialsProvider } from 'next-auth/providers/';
// import { GitHubProvider } from 'next-auth/providers/github';


import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name"

    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials){
    if( credentials.username === "cc" && credentials.password === "123" ) {
      return {
        name: "Chris Catto",
      }
    } else return null;
  }
})

const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID, 
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    credentialsConfig,
  ],
  // this callback section is used for Middleware protect sections but need to resolve some typescript type errors yeah!
  // callbacks: {
  //   authorized({ request, auth }){
  //     const { pathname } = request.nextUrl;
  //     if(pathname === "/auth-protected-middleware") return !!auth; 
  //     return true
  //   }
  // }
}

export const { 
  handlers: { GET, POST}, 
  auth, 
  signIn, 
  signOut 
} = NextAuth(config);

// old working:
// export const { handlers: { GET, POST}, auth, signIn, signOut } = NextAuth({ 
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID, 
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//     GitHubProvider({
//       clientId: process.env.AUTH_GITHUB_ID,
//       clientSecret: process.env.AUTH_GITHUB_SECRET,
//     }),
//   ]
// })


// #TODO could move this to /lib folder or /actions folder



// import { SignupFormSchema, FormState } from '@/app/lib/definitions'
 
// export async function signup(state: FormState, formData) {
//   // Validate form fields
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//   })
 
//   // If any form fields are invalid, return early
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }
 
//   // Call the provider or db to create a user...
// }