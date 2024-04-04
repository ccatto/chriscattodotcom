import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
import HeaderCatto from './components/HeaderCatto/HeaderCatto';
import FooterCatto from './components/Footer/FooterCatto';
import GA4TagCatto from './components/Utils/GA4TagCatto/GA4TagCatto';
import { Metadata } from 'next'
// import HeadCatto from './components/HeadCatto/HeadCatto';

export const metadata: Metadata = {
  title: 'Chris Catto',
  description: 'Chris Catto personal site home'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden w-screen absolute bg-gray-800 antialiased flex flex-col min-h-screen m-0`}>
          <HeaderCatto/>
          <div className='flex mt-20 h-full'>
            <div className='flex-[1] bg-gradient-to-r from-gray-500 to-gray-900'></div>
            <main className='flex-[98] bg-gray-700'>
              {children}
            </main>
            <div className='flex-[1] bg-gradient-to-r from-gray-900 to-gray-500'></div>
          </div>
          <FooterCatto/>
      </body>
      <GA4TagCatto/>
    </html>
  );
}
