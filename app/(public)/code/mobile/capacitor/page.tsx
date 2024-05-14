import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Mobile Capacitor Pages',
  description: 'Chris Catto Mobile Capacitor Pages',
  alternates: {
    canonical: 'https://www.chriscatto.com/mobile/capacitor',
  },
};

export default function Page() {

  const pathName = 'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';
  const codeBlock = "const nextConfig = {\n    webDir: 'out',"
  const codeBlock2 = "output: export"

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Chris Catto Mobile Capacitor"
            description="Chris Catto Mobile Capacitor"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Mobile Capacitor
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Capacitor is a cross-platform native run time for apps. Official <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://capacitorjs.com/docs"
                  >
                    Capacitor page.
                  </Link> Capacitor is a very good option kinda similar to react native but we can add it to our Next.js app to build native IOS & android apps. We can also combine it with Iconic which we'll get to later.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                Capacitor in Next.js includes the following which is based from the <Link
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://capacitorjs.com/docs/getting-started">official capacitor install docs</Link>:
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
                          1. Install capacitor core & cli
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
                          2. Initialize app npx cap init
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
                          3. Update capacitor.config.ts && Change webDir to "out"
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
                          4. Create Android & IOS projects
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
                          5. Build app
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
                          6. Update nextjs.config for static exports - "output: export"
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
                          7. Build app
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
                          8. Synchronize app
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
                          9. Run app in xcode npx cap open iOS
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
                          1. Install capacitor core & cli
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Install capacitor core & cli.
                            <CommandPromptDisplay
                              command="npm I @capacitor/core"
                              output='installed'
                            />
                            <CommandPromptDisplay
                              command="npm I -D @capacitor/cli "
                              output='installed'
                            />
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
                          2. Initialize app npx cap init
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            The CLI will ask you a few questions, starting with your app name, and the package ID you would like to use for your app.
                            <CommandPromptDisplay
                              command="npm cap init"
                              output='installed'
                            />
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
                          3. Update capacitor.config.ts && Change webDir to "out"
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Update capacitor.config.ts
                          </div>
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          4. Create Android & IOS projects
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Create Android & IOS projects:
                          </div>
                          <CommandPromptDisplay
                            command="npm I @capacitor/android @capacitor/iOS"
                            output='installed'
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
                          5.  Build app
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div>
                            <CommandPromptDisplay
                              command="npm run build"
                              output='installed'
                            />
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
                          6. Update nextjs.config for static exports - "output: export"
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Update nextjs.config for static exports - "output: export"
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          7. Build app
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Now this will add our "out" directory
                            <CommandPromptDisplay
                              command="npm run build"
                              output='installed'
                            />
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
                          8. Synchronize app
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Synchronize app
                          </div>
                          <CommandPromptDisplay
                            command="Npx cap sync "
                            output='sync d'
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
                          9. Run our app in IOS
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Run the app in xcode; we need to have xcode installed for this:
                          </div>
                          <CommandPromptDisplay
                            command="npx cap open iOS"
                            output='sync d'
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
                <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
                <div className="flex justify-center pb-4 w-full">
                  So as we see it's a little bit to get capacitor added to our Next.js app but it sure is worth it.
                </div>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
