import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import JumbotronCattoFlexible from '../../../../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '../../../../../../../components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Navigation & Links',
  description: 'Chris Catto Next.js Navigation & Links',
};

const helloworld = () => {
  let codeBlock =
    'import Link from \'next/link\';\n\n<Link href="about">About<Link> \n';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Navigation & Links"
            description="Next.js fundamentals Navigation & Links."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Navigation & Links
          </h2>
          <div className="text-xl font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li className="m-5">
                Navigation between pages are done so with the "next\Link"
                component.
              </li>
              <li className="m-5">
                There are some nice templates to check out here on the official
                page:{' '}
                <Link
                  href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Next.js official Linking & Routing page
                </Link>
              </li>
            </ul>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          </div>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default helloworld;
