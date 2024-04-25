import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
import HeaderCatto from './components/HeaderCatto/HeaderCatto';
import FooterCatto from './components/Footer/FooterCatto';
import GA4TagCatto from './components/Utils/GA4TagCatto/GA4TagCatto';
import { Metadata } from 'next'

import { getServerSession } from 'next-auth';
import SessionProviderWrapperCatto from './components/SessionProviderWrapperCatto/SessionProviderWrapperCatto';
// import SessionProvider from './components/SessionProvider';
// import SessionProvider from './components/SessionProvider';
// import { SessionProvider } from 'next-auth/react';

// import { SessionProvider } from 'next-auth/react';

// import SessionProvider from "./components/SessionProvider";
// import SessionProvider from "/SessionProvider";

export const metadata: Metadata = {
  title: 'Chris Catto',
  description: 'Chris Catto personal site home'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();

  return (
    <SessionProviderWrapperCatto>
    <html lang="en" className="dark">
      {/*  */}
      <body className={`min-h-[calc(100vh-26rem)] ${montserrat.className} overflow-x-hidden w-screen absolute bg-gray-800 antialiased flex flex-col m-0`}>
        {/* <body className={`min-h-screen ${montserrat.className} m-0 overflow-x-hidden w-screen absolute bg-gray-800 antialiased flex flex-col`}> */}

        {/* <SessionProvider session={session}> */}

          <HeaderCatto />
          <div className='flex mt-20 h-full'>
            <div className='flex-[1] h-full bg-gradient-to-r from-gray-500 to-gray-900'></div>
            <main className='flex-[98] bg-gray-700'>
              {children}
            </main>
            <div className='flex-[1] bg-gradient-to-r from-gray-900 to-gray-500'></div>
          </div>
          <FooterCatto />

        {/* </SessionProvider> */}

      </body>
      <GA4TagCatto />
    </html>
    </SessionProviderWrapperCatto>

  );
}
