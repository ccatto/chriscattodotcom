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
  title: 'Chris Catto Code Next.js Shadcn-ui',
  description: 'Chris Catto Next.js Shadcn-ui component library',
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
            title="Next.js Shadcn-ui Data-Table"
            description="Next.js Shadcn-ui Data-Table is a great component where we can display tabular data."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Shadcn-ui Data-Table
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Tables displaying tabular data is critical for just about any
                  app. In Next.js one way we can accomplish this is utlizing
                  Shadcn-ui Data-Table which leverages the{' '}
                  <Link
                    target="_blank"
                    href="https://tanstack.com/table/latest"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    popular tanstack table.
                  </Link>{' '}
                  It takes a little customization as we have to define our
                  columns and choose which features we want to add such as
                  pagination but this component sure can save us some time while
                  adding consistancy to our tables.{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://ui.shadcn.com/docs/components/data-table"
                  >
                    Take a look at the official Shadcn-ui data-table doc page.
                  </Link>{' '}
                  It also is dependent upon the{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://classic.yarnpkg.com/en/package/@tanstack/react-table"
                  >
                    {' '}
                    tanstack/react-table package.
                  </Link>{' '}
                  The folder structure we need the 3 .tsx files including
                  columns; data-table & the page itself.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                Shadcn-ui in Next.js includes the following:
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
                          1. Add the table packages
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
                          2. Create file structure
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
                        <h3 className="font-medium">3. Define the columns</h3>
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
                          4. Create the DataTable component
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
                          5. Render the table on the page
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
                          6. Many customizations available
                        </h3>
                      </div>
                    </div>
                  </li>
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          1. Add the table packages
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
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          2. Create file structure
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-3 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            In our app directory we create a parent folder for
                            what ever the page we want named & inside that we
                            will create the following 3 files:
                            <ol className="ind ml-6 mt-2 list-outside list-disc">
                              <li>
                                page.tsx - this is the normal server page file
                                where we'll fetch data & render the table
                              </li>
                              <li>
                                columns.tsx - we define our columns of the table
                                here
                              </li>
                              <li>
                                data-table.tsx - this is the client component
                                which will contain the &lt;DataTable \&gt;
                                component
                              </li>
                            </ol>
                            <p className="mt-2">
                              This structure to me feels very logical.
                            </p>
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
                          3. Define the columns
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-3 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Columns are where we define what our table will look
                            like. The columns define the data that will be
                            displayed; how it will be formatted & filtered.
                            Basically the columns we define in an array. Below
                            shows how we import the ColumnDef from
                            tanstack/react-table and how we define it. Note the
                            TableNameType is defined as a Type and will the data
                            we are displaying:
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock2}
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
                          4. Create the DataTable component
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            This is where we add the data-table code from the{' '}
                            <Link
                              target="_blank"
                              href="https://ui.shadcn.com/docs/components/data-table"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                              shadcn-ui data-table docs
                            </Link>{' '}
                            into our data-table.tsx file.
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
                          5. Render the table on the page
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We import & render the data-table on our page.tsx.
                            Our data variable is basically an array of the data.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock3}
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
                          6. Many customizations available
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We customize our table including:
                            <ul className="ind ml-6 mt-2 list-outside list-disc">
                              <li>Cell Formatting</li>
                              <li>Row Actions such as an edit button</li>
                              <li>Pagination</li>
                              <li>Sorting</li>
                              <li>Filtering</li>
                              <li>Visibility</li>
                              <li>Row Selection via a chkbox</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="indent-5">
                As we see we can leverage the Shadcn-ui data-table component to
                display tabular data & it's quite flexible while saving us time.
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
