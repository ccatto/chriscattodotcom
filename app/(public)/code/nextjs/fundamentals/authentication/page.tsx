import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Authentication Tutorial',
  description: 'Chris Catto Next.js Authentication Tutorial',
};

const helloworld = () => {
  let codeBlock = '\n npx create-next-app@latest \n';

  return (
    <>
      <div className="flex h-screen w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Authentication"
            description="Next.js fundamentals Authentication."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Authentication
          </h2>
          <div>
            <p>
              Authentication is an important piece of many sites. I currently
              choose to use the package{' '}
              <Link
                target="_blank"
                href="https://authjs.dev/reference/next-auth"
              >
                next-auth
              </Link>
              . In this page let us highlight some important pieces of
              authorization within Next.js.
            </p>
            <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
              <li className="m-5">
                Authentication is an important piece of many sites. I currently
                choose to use the package{' '}
                <Link
                  target="_blank"
                  href="https://authjs.dev/reference/next-auth"
                >
                  next-auth
                </Link>
                . In this page let us highlight some important pieces of
                authorization within Next.js.
              </li>
              <li className="m-5">
                There are some nice templates to check out here on the official
                page:{' '}
                <Link
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Next.js starter templates
                </Link>
              </li>
            </ul>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default helloworld;
