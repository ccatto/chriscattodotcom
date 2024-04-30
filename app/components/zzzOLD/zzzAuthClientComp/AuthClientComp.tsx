'use client';

import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';

const AuthClientComp = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);

  if (session.data?.user) {
    // logged in set state open
    setOpen(true);
  } else {
    signIn();
  }
  console.log('session authClientComp === ', session);

  return (
    <>
      <div className="h-96 bg-red-800">AuthClientComp Logged out</div>
      if (open === true)
      {
        <div className="h-96 bg-green-800">
          logged in yo inside this little client comp
        </div>
      }
    </>
  );
};

export default AuthClientComp;
