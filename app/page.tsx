import { Metadata } from 'next'
import HomeCatto from './components/HomeCatto/HomeCatto';

export const metadata: Metadata = {
  title: 'Chris Catto\'s Personal Website - Family & Code tutorials including: JavaScript SFCC Next API\'s .NET AWS SQL CSS React GraphQL TypeScript.',
  description: 'Chris Catto\'s Personal Website - Family & Code tutorials including: JavaScript SFCC Next API\'s .NET AWS SQL CSS React GraphQL TypeScript.'
}

export default function Page() {
  return (
    <>
      <HomeCatto />
    </>
  );
}
