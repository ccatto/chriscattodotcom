import { Metadata } from 'next';
import HomeCatto from './components/HomeCatto/HomeCatto';
// import ButtonCatto from './components/AtomicDesign/atoms/ButtonCatto/ButtonCatto';
import { Button } from './ui/button';
import { LoginButtonCatto } from './components/Auth/login-button-catto';

export const metadata: Metadata = {
  title:
    "Chris Catto's Personal Website - Family & Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
  description:
    "Chris Catto's Personal Website - Family & Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
};

export default function Page() {
  return (
    <>
      <h1 className='text-white'>
        Home
      </h1>
      <hr />
      <div className='text-white mt-20'>
        <h2>Auth stuff</h2>
        <LoginButtonCatto>
          <Button>
            Sign In 77
          </Button>
        </LoginButtonCatto>

      </div>
      {/* <HomeCatto /> */}
    </>
  );
}
