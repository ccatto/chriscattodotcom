import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Mobile Ionic ',
  description: 'Chris Catto Mobile Ionic',
  alternates: {
    canonical: 'https://www.chriscatto.com/mobile/capacitor',
  },
};

export default function Page() {
  const pathName =
    'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';
  const codeBlock =
    "/* Ionic CSS Imports */\n/* Core CSS required for Ionic components to work properly */\nimport '@ionic/react/css/core.css';\n\n/* Basic CSS for apps built with Ionic */\nimport '@ionic/react/css/normalize.css';\nimport '@ionic/react/css/structure.css';\nimport '@ionic/react/css/typography.css';\n\n/* Optional CSS utils that can be commented out */\nimport '@ionic/react/css/padding.css';\nimport '@ionic/react/css/float-elements.css';\nimport '@ionic/react/css/text-alignment.css';\nimport '@ionic/react/css/text-transformation.css';\nimport '@ionic/react/css/flex-utils.css';\nimport '@ionic/react/css/display.css';\n";
  const codeBlock2 = '<html lang="en" className="hydrated">';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Chris Catto Mobile Ionic"
            description="Chris Catto Mobile Ionic"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Mobile Ionic
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Ionic is a cross-platform mobile SDK. Official{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://ionic.io/"
                  >
                    Ionic.io page.
                  </Link>{' '}
                  Ionic is a very good option kinda similar to react native but
                  we can add it to our Next.js app to build native IOS & android
                  apps. We can also combine it with Capacitor. Ionic is
                  basically a set of native mobile components as Capacitor is
                  tool build the native app. We are able to create a new Ionic
                  app which is quite when it's a greenfield. Let's take a look
                  how we can add Ionic to an existing Next.js app.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                Ionic in Next.js includes the following which is based from the
                dashboard of{' '}
                <Link
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="https://ionicframework.com/"
                >
                  official ionic framework docs
                </Link>
                :
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
                          1. Install Ionic cli & @capacitor/assets <br />
                          npm install -g @ionic/cli @capacitor/assets native-run
                        </h3>
                        <br />I am not entirely sure on if native-run is needed
                        but I've installed it when trying to resolve an xcode
                        simulator error just to eliminate that as a possibility.
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
                          2. Add to existing app install @ionic/react
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
                          3. Add Iconic CSS to layout.tsx
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
                        <h3 className="font-medium">4.</h3>
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
                              output="added 1 package, and audited 361 packages in 1s"
                            />
                            <CommandPromptDisplay
                              command="npm I -D @capacitor/cli "
                              output="added 77 packages, and audited 438 packages in 4s"
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
                          2. Add to existing app install @ionic/react
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            So to start we need to install by adding these 2
                            Ionic react packages:
                            <CommandPromptDisplay
                              command="npm install @ionic/react"
                              output="added 4 packages, and audited 444 packages in 3s"
                            />
                            <CommandPromptDisplay
                              command="npm install @ionic/react-router"
                              output="added 11 packages, and audited 455 packages in 3s"
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
                          3. Add in the Layout.tsx file the Iconic styles;
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            We can add the styles to our Layout.tsx file. It
                            would probably be better to add them to our
                            .globals.css however it would require some slight of
                            hand to import css file from the node_modules with
                            tailwind in that file that maybe someday I will
                            spend to figure out.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock}
                          />
                          <p>
                            In addition we need to apply the "hydrated" class to
                            our html element which I'd like to thank{' '}
                            <Link
                              href="https://www.bassa-solutions.at/"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                              target="_blank"
                            >
                              Kevin Bassa
                            </Link>{' '}
                            for posting in an Iconic form.
                          </p>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock2}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
                <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
                <div className="flex w-full justify-center pb-4">
                  So as we see it's a little bit to get capacitor added to our
                  Next.js app but it sure is worth it.
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
