import { auth, signIn, signOut } from 'auth';
import Link from 'next/link';
import React from 'react';
// import AppBarSignOutCatto from "../AppBarSignOutCatto/AppBarSignOutCatto";
// import AppBarSignInCatto from "../AppBarSignInCatto/AppBarSignInCatto";

import AuthSignOutButtonCatto from '../zzzAuthSignOutButtonCatto/AuthSignOutButtonCatto';
import AppBarSignOutCatto from '../zzzAppBarSignOutCatto/AppBarSignOutCatto';

async function AuthSignOutButtonParentCatto({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <AuthSignOutButtonCatto>{children}</AuthSignOutButtonCatto>
    </>
  );
}

export default AuthSignOutButtonParentCatto;
