import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import JumbotronCattoFlexible from '../../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import SyntaxHighlightingReactCatto from '../../../../../components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';
import React from 'react';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Common SDK',
  description: 'Chris Catto Common SDK component library',
};

const page = () => {
  const codeBlock =
    'npx shadcn-ui@latest add table\nyarn add @tanstack/react-table';
  const codeBlock2 =
    'import { ColumnDef } from "@tanstack/react-table";\nexport const columns: ColumnDef<TableNameType>[] = [';
  const codeBlock3 =
    'import { DataTable } from "./data-table"\n<DataTable columns={columns} data={data} />';
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
            title="Common SDK Component Library"
            description="Common SDK Component Library"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Common SDK Component Library
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Creating a common SDK component library is helpful to keep the{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                  >
                    DRY
                  </Link>{' '}
                  principle & not repeat code. Especially when we have multiple
                  repos utlizing the same components.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                Building a common sdk component library includes the following:
              </p>
              <div className="mt-4 flex justify-center">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">1. New folder & init</h3>
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
                          2. Install react & typescript
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
                          3. Update .tsconfig.json
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
                          4. Create folder structure & component
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
                          5. Rollup bundling & packaging
                        </h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Details</span> of setting up
                common sdk component library includes the following:
              </p>
              <div className="mt-4">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          1. Create a new folder & npm init
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Create a new folder where we want our project to be;
                            then navigate there and run "npm init". This create
                            a simple node app.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          2. Install react & typescript
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Install react & typescript with the following
                            command:
                          </div>
                          <CommandPromptDisplay
                            command="npm install react typescript @types/react --save-dev"
                            output="installed.."
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          3. Update our tsconfig.json file
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            We have to update our configuration for typescript.
                            #todo add code details here
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          4. Create folder structure & sample component
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            We can create a simple component as a 1st one and
                            create the folder structure with index files
                            including the exports. #todo add code details here
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          5. Rollup bundling & packaging; Update
                          rollup.config.js
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            We add rollup. Need to install multiple packages &
                            run the rollup. #todo add code details here
                          </div>
                          npm install rollup @rollup/plugin-node-resolve
                          @rollup/plugin-commonjs @rollup/plugin-typescript
                          rollup-plugin-peer-deps-external @rollup/plugin-terser
                          rollup-plugin-dts --save-dev
                          <div className="indent-4">
                            We need to update our rollup.config.js; #todo add
                            code details here
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="indent-5">
                As we see we can leverage creating a common sdk component
                library.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
