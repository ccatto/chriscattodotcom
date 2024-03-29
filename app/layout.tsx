import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
// import FooterCatto from './components/Footer/FooterCatto';
import Header from './components/Header/Header';
import FooterCatto from './components/Footer/FooterCatto';
import SimpleHeader from './components/SimpleHeader/SimpleHeader';
import SimpleFooter from './components/SimpleFooter/SimpleFooter';
import SimpleMain from './components/SimpleMain/SimpleMain';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased flex flex-col min-h-screen m-0 `}>
        <Header/>
          <main className="flex-1 m-20 w-full overflow-auto">
            {children}
          </main>
          <FooterCatto/>
          {/* <footer className="bg-green-500 ">
            footer Text
        </footer> */}
      </body>
    </html>
  );
}
