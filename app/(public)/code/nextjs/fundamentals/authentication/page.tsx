import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Authentication Tutorial',
  description: 'Chris Catto Next.js Authentication Tutorial',
};

const authentication = () => {
  const codeBlock = 'yarn add next-auth';
  const codeBlock2 = 'NEXTAUTH_SECRET=""\nGOOGLE_CLIENT_ID=""\nGOOGLE_CLIENT_SECRET=""';
  const codeBlock3 = 'openssl rand -base64 32';
  const codeblock4apinextauth = 'import NextAuth from "next-auth”\nimport GithubProvider from "next-auth/providers/github”\n\nexport const authOptions = {\n // Configure auth providers here\n providers: [ GithubProvider({ clientId: process.env.GITHUB_ID,\n clientSecret: process.env.GITHUB_SECRET,\n }),\n // ...add more providers here such as fb or apple\n ],\n}'

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Authentication"
            description="Next.js fundamentals Authentication"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Authentication
          </h2>
          <div>
            {/* <p>
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
            </p> */}
            <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
              <li className="m-5">
                Authentication is an important piece of many sites. I currently
                choose to use the package{' '}
                <Link
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://authjs.dev/reference/next-auth"
                >
                  next-auth
                </Link>
                . In this page let us highlight some important pieces of
                authorization within Next.js.
              </li>
              {/* <li className="m-5">
                There are some nice templates to check out here on the official
                page:{' '}
                <Link
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Next.js starter templates
                </Link>
              </li> */}
            </ul>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <p className='flex justify-center text-2xl'>
            <span className='font-bold pr-2'>Summary</span>of setting up next-auth in Next.js includes the following:
          </p>
          <div className='flex justify-center mt-4'>
            <ol className="space-y-4 w-[30rem]">
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    {/* <span className="sr-only">User info 88</span> */}
                    <h3 className="font-medium">1. Install next-auth</h3>
                    {/* <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg> */}
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">2. Define .env var</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">2.5 Create OAuth Id's & Secrete's</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">3. Create Middleware.ts file </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">4. Add SessionProvider & wrap layout</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">5. Add API ...nextauth route</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">6. Add signIn; signOut's</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">7. Create Protected sections</h3>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <p className='flex justify-center text-2xl'>
            <span className='font-bold pr-2'>Details</span> of setting up next-auth in Next.js includes the following:
          </p>
          <div className='mt-4'>
            <ol className="space-y-4 w-full">
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    {/* <span className="sr-only">User info 88</span> */}
                    <h3 className="basis-1/4 font-medium">1. Install next-auth</h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2 indent-4'>
                      To install next-auth we add the package.
                      <SyntaxHighlightingReactCatto codeString={codeBlock} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">2. Define .env var</h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2'>
                      <div className='indent-4'>
                        In our .env file we add the follow:
                      </div>
                      <SyntaxHighlightingReactCatto codeString={codeBlock2} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">2.5 Create OAuth Id's & Secret's</h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2 indent-4'>
                      The OAuth provider Id & Secrete is obtained from each provider & is slightly different for each. For example this is a good resource for <Link
                        href="https://support.google.com/cloud/answer/6158849"
                        target='_blank'
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                        Setting up Google Oauth 2.0 documentation
                      </Link>
                      <SyntaxHighlightingReactCatto codeString={codeBlock3} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">3. Middleware.ts</h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2 indent-4'>
                      Creating middleware.ts in root directory allows us to run code before a request is completed. We can check session cookies before granting access to protected pages & API routes. <Link
                        href="https://nextjs.org/docs/app/building-your-application/routing/middleware"
                        target="_blank"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Middleware official page on Next.js
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">4. Add SessionProvider & wrap layout</h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2 indent-4'>
                      Session provider we can add the component & the wrap our layout.
                      <SyntaxHighlightingReactCatto codeString={codeBlock3} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">
                      5. Add API ...nextauth route
                    </h3>
                    <div className='basis-3/4 ml-5 bg-slate-600 rounded-2xl p-2'>
                      <div className='indent-4'>
                        We need to add the API route & the relative path is `app/api/auth/[...nextauth]/route.ts`
                      </div>
                      <SyntaxHighlightingReactCatto codeString={codeblock4apinextauth} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">6. Add signIn; signOut's</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full p-4 text-slate-200 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-slate-200" role="alert">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">7. Create Protected sections</h3>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          DETails
          Roles https://authjs.dev/guides/role-based-access-control

        </div>
      </div>
    </>
  );
};

export default authentication;
