import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
import HeaderCatto from './components/HeaderCatto/HeaderCatto';
import FooterCatto from './components/Footer/FooterCatto';
import GA4TagCatto from './components/Utils/GA4TagCatto/GA4TagCatto';
import { Metadata } from 'next'

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
    <html lang="en" className="dark">
      <body className={`${montserrat.className} overflow-x-hidden w-screen absolute bg-gray-800 antialiased flex flex-col min-h-screen m-0`}>
        <div className='bg-orange-500 grow'>
          <HeaderCatto />
          <div className='bg-blue-500 mt-20 min-h-[calc(100vh-26rem)]'>
            <div className='bg-red-400 min-h-[calc(100vh-26rem)]'>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              <h1>body simple</h1>
              <br/>
              
            </div>

          </div>

          <FooterCatto />
        </div>
        {/* <HeaderCatto /> */}
        {/* <div className='flex mt-20 h-full'>
          <div className='flex-[1] h-full bg-gradient-to-r from-gray-500 to-gray-900'></div>
          <main className='flex-[98] bg-gray-700'>
            {children}
          </main>
          <div className='flex-[1] bg-gradient-to-r from-gray-900 to-gray-500'></div>
        </div> */}
        {/* <FooterCatto /> */}
      </body>
      <GA4TagCatto />
    </html>
  );
}
