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
          <main className="flex-1 mt-20">
            {children}
          </main>
          <FooterCatto/>
      </body>
    </html>
  );
}
