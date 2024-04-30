import { auth, signIn, signOut } from 'auth';
// import Link from "next/link";
import React from 'react';

async function NextAuthLoginOutCatto() {
  const session = await auth();
  return (
    <div className="flex gap-2 bg-gradient-to-b from-slate-800 to-slate-600 p-2 ">
      <div className="ml-auto mt-20 text-white">
        {session && session.user ? (
          <div className="flex gap-2">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit">Sign Out 55</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <button type="submit">Sign In 55</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default NextAuthLoginOutCatto;
