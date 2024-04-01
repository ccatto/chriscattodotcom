import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
import Header from './components/Header/Header';
import FooterCatto from './components/Footer/FooterCatto';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden w-screen absolute bg-gray-800 antialiased flex flex-col min-h-screen m-0`}>
          <Header/>
          <div className='flex mt-20 h-full'>
            <div className='flex-[1] bg-gradient-to-r from-gray-500' to-gray-900></div>
            <main className='flex-[98] bg-red-500'>
              {children}
            </main>
            <div className='flex-[1] bg-gradient-to-r from-gray-900 to-gray-500'></div>
          </div>
          <FooterCatto/>
      </body>
    </html>
  );
}
