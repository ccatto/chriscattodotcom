import { auth, signIn, signOut } from 'auth';
// import Link from "next/link";
import React from 'react';

async function NextAuthLoginOutCatto() {
  // const session = await auth();
  return (
    <div className="mx-auto p-4">
      <h1>test</h1>
      {/* <div className=" text-white">
        {session && session.user ? (
          <div className="flex gap-2">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit">🔐 Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <button type="submit">🔐 Sign In</button>
          </form>
        )}
      </div> */}
    </div>
  );
}

export default NextAuthLoginOutCatto;
