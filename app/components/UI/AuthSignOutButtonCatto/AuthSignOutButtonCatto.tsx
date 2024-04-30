import { auth, signIn, signOut } from "auth";
import Link from "next/link";
import React from "react";
import AppBarSignOutCatto from "../AppBarSignOutCatto/AppBarSignOutCatto";
import AppBarSignInCatto from "../AppBarSignInCatto/AppBarSignInCatto";

async function AuthSignOutButtonCatto({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    // <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-2 ">
    <div className="mt-20 ">
      {/* <Link href={"/clientPage"}>Client Page</Link>
      <Link href={"/serverPage"}>Server Page</Link>
      <Link href={"/middlewareProtected"}>Middleware Protected Page</Link>
      <Link href={"/about"}>About</Link> */}
      {/* <div className="ml-auto"> */}
      <div className="text-white">
        {session && session.user ? (
          // <AppBarSignOutCatto />
          <>
            <h1>sign out</h1>
            {children}
          </>
        ) : (
          // <AppBarSignInCatto />
          <>

            <h1>sign in8</h1>

          </>

        )}
      </div>
    </div>
  );
}

export default AuthSignOutButtonCatto;
