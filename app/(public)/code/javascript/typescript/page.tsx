import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Typescript',
  description: 'Chris Catto Code JavaScript TypeScript',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/javascript/typescript',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript Typescript"
            description="JavaScript"
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <p>This will eventually be a typescript section but at this time just a place holder. </p>
          <p>
            Let's add this error: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
            Type 'undefined' is not assignable to type 'string'.ts(2345)
          </p><p>
            Solution what we do is add an exclamation point at the end to say it will be a string;
          </p>
        </div>
        {/* <hr className="m-3" /> */}
      </div>
    </>
  );
}
