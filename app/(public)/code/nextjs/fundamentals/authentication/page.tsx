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
  const codeBlock2 = 'AUTH_SECRET=""\nAUTH_GOOGLE_ID=""\nAUTH_GOOGLE_SECRET=""';
  const codeBlock3 = 'openssl rand -base64 32';
  const codeBlock4SessionProvider =
    'import { SessionProvider } from "next-auth/react";\n\nreturn (\n  <SessionProvider>\n    <html>\n        <body ...Inside-of-Layout\n    </html>\n  </SessionProvider>\n';
  const codeblock4authts =
    'import NextAuth from "next-auth”\nimport GithubProvider from "next-auth/providers/github”\n\nexport const authOptions = {\n // Configure auth providers here\n providers: [ GithubProvider({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET,\n }),\n // ...add more providers here such as fb or apple\n ],\n}';
  const codeblockAPIRoute = "export { GET, POST } from 'auth';";
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
                choose to use the package 'next-auth'. There is currently v5
                which has some breaking changes to v4; this tutorial of setting
                up authenticaion in Next.js 14 is utlizing v5.
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
          <p className="flex justify-center text-2xl">
            <span className="pr-2 font-bold">Summary</span>of setting up
            next-auth in Next.js includes the following:
          </p>
          <div className="mt-4 flex justify-center">
            <ol className="w-[30rem] space-y-4">
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
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
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">2. Define .env var</h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      2.5 Create OAuth Id's & Secrete's
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">3. Create auth.ts file</h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      4. Add SessionProvider & wrap layout
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      5. Add API ...nextauth route
                    </h3>
                  </div>
                </div>
              </li>
              {/* <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">6. Add signIn; signOut's</h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      7. Create Protected sections
                    </h3>
                  </div>
                </div>
              </li> */}
            </ol>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <p className="flex justify-center text-2xl">
            <span className="pr-2 font-bold">Details</span> of setting up
            next-auth in Next.js includes the following:
          </p>
          <div className="mt-4">
            <ol className="w-full space-y-4">
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    {/* <span className="sr-only">User info 88</span> */}
                    <h3 className="basis-1/4 font-medium">
                      1. Install next-auth
                    </h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2 indent-4">
                      To install next-auth we add the package.
                      <SyntaxHighlightingReactCatto codeString={codeBlock} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">
                      2. Define .env var
                    </h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2">
                      <div className="indent-4">
                        In our .env file we add the follow: <br />
                        In v5 the naming convention is nicer since it's all
                        prefixed with "Auth":
                        <ol>
                          <li>* prefix with AUTH_</li>
                          <li>* then Provider name</li>
                          <li>* Suffix is ID || Client</li>
                        </ol>
                        For example something like: AUTH_Provider_ ID || CLIENT
                      </div>
                      <SyntaxHighlightingReactCatto codeString={codeBlock2} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">
                      2.5 Create OAuth Id's & Secret's
                    </h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2 indent-4">
                      The OAuth provider Id & Secrete is obtained from each
                      provider & is slightly different for each.
                      <br />
                      For example this is a good resource for{' '}
                      <Link
                        href="https://support.google.com/cloud/answer/6158849"
                        target="_blank"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Setting up Google Oauth 2.0 documentation
                      </Link>{' '}
                      <br />
                      There are is a whole large{' '}
                      <Link
                        href="https://authjs.dev/reference/core/providers"
                        target="_blank"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        list of Auth.js OAuth providers
                      </Link>
                      <SyntaxHighlightingReactCatto codeString={codeBlock3} />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">3. auth.ts</h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2">
                      <div className=" indent-4">
                        Creating auth.ts in root directory allows us to add
                        config & authentication for our providers.
                      </div>
                      <SyntaxHighlightingReactCatto
                        codeString={codeblock4authts}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">
                      4. Add SessionProvider & wrap layout
                    </h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2">
                      <div className="indent-4">
                        Session provider we can add the import & the wrap our
                        layout.
                      </div>
                      <SyntaxHighlightingReactCatto
                        codeString={codeBlock4SessionProvider}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center">
                    <h3 className="basis-1/4 font-medium">
                      5. Add API ...nextauth route
                    </h3>
                    <div className="ml-5 basis-3/4 rounded-2xl bg-slate-600 p-2">
                      <div className="indent-4">
                        We need to add the API route & the relative path is
                        `app/api/auth/[...nextauth]/route.ts`
                        <br />
                        In next-auth v5 this file is much simplified and the
                        config is in our auth.ts file;
                      </div>
                      <SyntaxHighlightingReactCatto
                        codeString={codeblockAPIRoute}
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">6. Add signIn; signOut's</h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                  role="alert"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      7. Create Protected sections
                    </h3>
                  </div>
                </div>
              </li> */}
            </ol>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <p>
            Then next we can create login & out sections. Also protect our
            pages. This section covers the basics of next-auth v5.
          </p>
          <br />
          <p>
            Then next we move on to roles{' '}
            <Link
              href="https://authjs.dev/guides/role-based-access-control"
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Official Auth JS Role based access
            </Link>
          </p>
          <br />
          <p>
            We can also implement middleware to cover the whole app & here is
            some documentation:{' '}
            <Link
              href="https://nextjs.org/docs/app/building-your-application/routing/middleware"
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Middleware official page on Next.js
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default authentication;
