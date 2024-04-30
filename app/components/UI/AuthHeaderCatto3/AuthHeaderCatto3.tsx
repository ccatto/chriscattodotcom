import React from "react";
import { auth, signIn, signOut } from "auth";
import Link from "next/link";
import SignOutCatto from "../SignOutCatto.tsx/SignOutCatto";
// import { auth } from "auth";
// import SignOutCatto from "./SignOutCatto.tsx/SignOutCatto";
// import ImageCatto from "../ImageCatto/ImageCatto";
// import { Button } from "@/app/ui/button";
// import { auth, signIn, signOut } from "../../../auth";
// import { auth, signIn, signOut } from "auth";
// import ButtonCatto from "../AtomicDesign/atoms/ButtonCatto/ButtonCatto";


type Props = {}

function SignIn2() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button type="submit">Sign In</button>
      </form>

    </>
    // <form
    //   action={async () => {
    //     'use server';
    //     await signOut();
    //   }}
    // >
    //   <button type="submit">Sign out</button>
    // </form>
  );
}

function SignOut() {
  return (
    <>
      <div className="text-white">
        <h1>sign out</h1>
        <SignOutCatto />
      </div>

    </>
    // <form
    //   action={async () => {
    //     'use server';
    //     await signOut();
    //   }}
    // >
    //   <button type="submit">Sign out</button>
    // </form>
  );
}
const AuthHeaderCatto3 = async (props: Props) => {

  const session = await auth();
  console.log("Session in AuthHeader 2342 === ", session);
  return (
    <>

      <div className="ml-auto">
        {session && session.user ? (
          <div className="flex gap-2">
            <p>{session.user.name}</p>
            <SignOut />
            {/* <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form> */}
          </div>
        ) : (
          <>
            <SignIn2 />
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

    </>
  )
}

export default AuthHeaderCatto3