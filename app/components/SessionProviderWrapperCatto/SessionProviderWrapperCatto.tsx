'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

const SessionProviderWrapperCatto = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
export default SessionProviderWrapperCatto;

// const SessionProviderWrapperCatto = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <>
//       <SessionProvider>{children}</SessionProvider>
//     </>
//   );
// };
// export default SessionProviderWrapperCatto;
