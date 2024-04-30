'use server';
import { auth, signIn, signOut } from 'auth';
import Link from 'next/link';
import React from 'react';

async function AppBarSignOutCatto() {
  const session = await auth();
  return (
    <div>
      <p>{session?.user.name}</p>
      <form
        action={async () => {
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}

export default AppBarSignOutCatto;
