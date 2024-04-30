"use server";
import { auth, signIn, signOut } from "auth";
import Link from "next/link";
import React from "react";

async function AppBarSignInCatto() {
  const session = await auth();
  return (
    <>
      <form
        action={async () => {

          await signIn();
        }}
      >
        <button className="text-white" type="submit">Sign In</button>
      </form>
    </>
  );
}

export default AppBarSignInCatto;
