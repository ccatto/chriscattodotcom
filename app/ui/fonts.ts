import { Inter, Lusitana, Montserrat, Urbanist } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const montserrat = Montserrat({
  weight: ['100', '200', '400', '500', '700'],
  subsets: ['latin'],
});

export const urbanist = Urbanist({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
});
