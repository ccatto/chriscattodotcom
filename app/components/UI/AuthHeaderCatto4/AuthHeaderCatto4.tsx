

import React from "react";
import { auth, signIn, signOut } from "auth";
import Link from "next/link";
// import SignOutCatto from "../SignOutCatto.tsx/SignOutCatto";
// import { auth } from "auth";
// import SignOutCatto from "./SignOutCatto.tsx/SignOutCatto";
// import ImageCatto from "../ImageCatto/ImageCatto";
// import { Button } from "@/app/ui/button";
// import { auth, signIn, signOut } from "../../../auth";
// import { auth, signIn, signOut } from "auth";
// import ButtonCatto from "../AtomicDesign/atoms/ButtonCatto/ButtonCatto";


type Props = {}
function SignOut() {
  return (
    <>
      <div className="text-white">
        <h1>sign out</h1>
        {/* <SignOutCatto /> */}
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
const AuthHeaderCatto4 = async (props: Props) => {

  // const session = await auth();
  // console.log("Session in AuthHeader 2342 === ", session);
  return (
    <>

      <div>
        <h1 className="text-white">logged in </h1>
      </div>
      ) : (
      <div>
        <Link href="/api/auth/signin">
          {/* <button variant="link"> */}
          Sign in6
          {/* </button> */}
        </Link>
        )
        {/* } */}
      </div >

    </>
  )
}

export default AuthHeaderCatto4