'use server';
import { auth, signIn, signOut } from 'auth';
import Link from 'next/link';
import React from 'react';

async function AppBarSignInCatto() {
  const session = await auth();
  return (
    <>
      {session && session.user ? (
        <>
          <h1>sign out 87</h1>
        </>
      ) : (
        <>
          <h1>sign in8</h1>
          <Link
            href="/api/auth/signin"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign In 44
          </Link>
          {/* <form
            action={async () => {
              await signIn();
            }}
          >
            <button className="text-white" type="submit">Sign In</button>
          </form> */}
        </>
      )}
    </>
  );
}

export default AppBarSignInCatto;
