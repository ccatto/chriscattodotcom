import { auth, signIn, signOut } from 'auth';
import Link from 'next/link';
import React from 'react';

async function AppBarCattoBackup() {
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
          // <div className="flex gap-2">
          <div>
            <p>{session.user.name}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <button className="text-white" type="submit">
              Sign In4
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AppBarCattoBackup;
