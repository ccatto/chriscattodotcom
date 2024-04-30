// import { useSession } from "next-auth/react";
import React from 'react';
import { auth } from 'auth';

export default async function Page() {
  const session = await auth();
  // const { data: session } = useSession();
  console.log('99auth protected session: ', session);
  if (!session || !session.user) {
    return (
      <div className="m-3 mt-20 text-white">
        <h2>NOT LOgged in auth protected fun page2</h2>
      </div>
    );
  } else {
    return (
      <>
        <hr className="m-3" />
        <div className="mt-20 text-white">
          <h2 className="mt-20 text-white">2 auth protected fun page2</h2>
        </div>
        <hr className="m-3" />
      </>
    );
  }
}
