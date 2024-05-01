import '@/app/ui/global.css';
import { montserrat } from './ui/fonts';
// import { montserrat } from '@/app/ui/fonts';
import HeaderCatto from './components/HeaderCatto/HeaderCatto';
import FooterCatto from './components/Footer/FooterCatto';
import GA4TagCatto from './components/Utils/GA4TagCatto/GA4TagCatto';
import { Metadata } from 'next';
import SessionProviderWrapperCatto from './components/SessionProviderWrapperCatto/SessionProviderWrapperCatto';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chris Catto',
  description: 'Chris Catto personal site home',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderWrapperCatto>
      <html lang="en" className="dark">
        <body
          className={`min-h-[calc(100vh-26rem)] ${montserrat.className} absolute m-0 flex w-screen flex-col overflow-x-hidden bg-gray-800 antialiased`}
        >
          <HeaderCatto />
          <hr />
          <div className="mt-20 flex h-full">
            <div className="h-full flex-[1] bg-gradient-to-r from-gray-500 to-gray-900"></div>
            <main className="flex-[98] bg-gray-700">
              {children}
            </main>
            <div className="flex-[1] bg-gradient-to-r from-gray-900 to-gray-500"></div>
          </div>
          <FooterCatto />
        </body>
        <GA4TagCatto />
      </html>
    </SessionProviderWrapperCatto>
  );
}
