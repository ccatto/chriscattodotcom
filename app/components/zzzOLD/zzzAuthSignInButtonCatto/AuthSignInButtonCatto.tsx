import { auth, signIn, signOut } from 'auth';
// import Link from "next/link";
import React from 'react';
// import AppBarSignOutCatto from "../AppBarSignOutCatto/AppBarSignOutCatto";
// import AppBarSignInCatto from "../AppBarSignInCatto/AppBarSignInCatto";

// async function AuthSignInButtonCatto({
async function AuthSignInButtonCatto({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <div className="text-white">
      {session && session.user ? (
        // <AppBarSignOutCatto />
        <>
          <h1>sign out</h1>
          {/* {children} */}
        </>
      ) : (
        // <AppBarSignInCatto />
        <>
          <h1>sign in8</h1>
          {children}
        </>
      )}
    </div>
    // <div className="mt-20 ">
    //   <div className="text-white">
    //     if (!session || !session?.user) {
    //       <>
    //         <h1>sign in 14</h1>
    //         {children}
    //       </>
    //     }
    //   </div>
    // </div>
  );
}

export default AuthSignInButtonCatto;
