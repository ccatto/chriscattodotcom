import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

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
            <p>
              Setting up next-auth in Next.js includes the following:
            </p>
            <div className='flex justify-center'>
              <ol className="space-y-4 w-[30rem]">
                <li>
                  <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">User info</span>
                      <h3 className="font-medium">1. User info</h3>
                      {/* <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg> */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Account info</span>
                      <h3 className="font-medium">2. Account info</h3>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Social accounts</span>
                      <h3 className="font-medium">3. Social accounts</h3>
                      <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Review</span>
                      <h3 className="font-medium">4. Review</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Confirmation</span>
                      <h3 className="font-medium">5. Confirmation</h3>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />

          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default helloworld;
