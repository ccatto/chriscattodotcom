import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import JumbotronCattoFlexible from '../../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import SyntaxHighlightingReactCatto from '../../../../../components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';
import React from 'react';

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
                    Creating a common SDK component library is helpful to keep the <Link target='_blank' 
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</Link> principle & not repeat code. Especially when we have multiple repos utlizing the same components. 
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
                        <h3 className="font-medium">
                          1. This is a placeholder
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
                          1. Placeholder
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            To install the shadcn-ui table we add the following
                            packages:
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="indent-5">
                As we see we can leverage creating a common sdk component library.
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
