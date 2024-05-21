import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Hello World',
  description: 'Chris Catto Next.js Hello World',
};

const helloworld = () => {
  let codeBlock = '\n npx create-next-app@latest \n';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Hello World"
            description="Next.js fundamentals including a hello world / create app example."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Hello World / Create app
          </h2>
          <div>
            <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
              <li className="m-5">
                To create a "Hello World" Next.js app we use the CLI tool to
                simply create it. After creating it just run `yarn install` &
                then `yarn dev`.
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
              <li>
                npx create-next-app@latest . - the dot will use the existing
                directory if not it will make a new folder;
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
