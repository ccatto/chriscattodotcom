import React from "react";
import { auth, signIn, signOut } from "auth";
import Link from "next/link";
import SignOutCatto from "./SignOutCatto.tsx/SignOutCatto";
// import { auth } from "auth";
// import SignOutCatto from "./SignOutCatto.tsx/SignOutCatto";
// import ImageCatto from "../ImageCatto/ImageCatto";
// import { Button } from "@/app/ui/button";
// import { auth, signIn, signOut } from "../../../auth";
// import { auth, signIn, signOut } from "auth";
// import ButtonCatto from "../AtomicDesign/atoms/ButtonCatto/ButtonCatto";


type Props = {}

const AuthHeaderCatto = async (props: Props) => {

  const session = await auth();
  console.log("Session in AuthHeader 2342 === ", session);
  return (
    <>
      {/* <h1>simple header</h1> */}
      <div className="ml-auto">
        {session && session.user ? (
          <>
            <h1 className="text-white">
              loggedIn
            </h1>
            <Link href="/api/auth/signout"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            > | sign out | </Link>
          </>
          // <SignOutCatto/>
          // <div className="flex gap-2">
          //   <p>{session.user.name}</p>
          //   <form
          //     action={async () => {
          //       "use server";
          //       await signOut();
          //     }}
          //   >
          //     <button type="submit">Sign Out</button>
          //   </form>
          // </div>
        ) : (
          <>
            <h1 className="text-white">
              simple logged out
            </h1>
            <Link href="/api/auth/signin"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >Sign In3</Link>
          </>
          // <form
          //   action={async () => {
          //     "use server";
          //     await signIn();
          //   }}
          // >
          //   <button type="submit">Sign In</button>
          // </form>
        )}
      </div>
      {/* <h1 className="text-white">
        Auth Header -
        {
          session?.user ? (
            // Logged In
            <div>
              logged in session.user.name
              <SignOutCatto />
            </div>
          ) : (
            // Not Logged In
            <>
              <div>Not logged in</div>
              <Link href="/api/auth/signin"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Sign In</Link>
            </>
          )
        }
      </h1> */}
    </>
  )
}

export default AuthHeaderCatto