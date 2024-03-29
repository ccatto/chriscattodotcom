import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';
// import FooterCatto from './components/Footer/FooterCatto';
import Header from './components/Header/Header';
import FooterCatto from './components/Footer/FooterCatto';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${montserrat.className} antialiased flex flex-col `}>
        <Header/>
          <article className="pt-20 flex-1">
            {children}
          </article>
        <FooterCatto/>
      </body>
    </html>
  );
}
