import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Mac Environment Setup ',
  description: 'Chris Catto Mac Environment Setup',
  alternates: {
    canonical: 'https://www.chriscatto.com/mac-environment-setup',
  },
};

export default function Page() {
  const pathName =
    'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';
  const codeBlock = "const CapacitorConfig = {\n    webDir: 'out',";
  const codeBlock2 = 'const nextConfig = {\n  output: export';
  const codeBlock3 =
    'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm \n\nexport PATH=/opt/homebrew/bin:$PATH \nexport NVM_DIR="$HOME/.nvm" \n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm \n[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Chris Catto Mac Environment Setup"
            description="Chris Catto Mac Environment Setup"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Mac Environment Setup
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Setting up our Mac developer environment is a fundamental
                  piece of software development where we install software that
                  we will utilize.
                </li>
                {/* <li className="m-5">
                  This page is a placeholder now & needs a bit more work #todo.
                </li> */}
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up our
                mac for development:
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
                          1. Install Browsers & extensions - Chrome
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
                        <h3 className="font-medium">2. Install Homebrew</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">3. Install Git & tools</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">4. Install IDE's</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">5. Communication Apps</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">6. Install Postman</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">7. Install Docker</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">8. .zshrc configuration</h3>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">9. PDF Reader</h3>
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          1. Install Browsers & extensions - Chrome
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            <p>Install Browsers & extensions - Chrome</p>
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
                          2. Install Homebrew
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Installing{' '}
                            <Link
                              href="https://brew.sh/"
                              target="_blank"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                              Homebrew
                            </Link>{' '}
                            is very helpful package management system which
                            helps us tremendously to install software. Check the
                            official page to get the exact command but it goes a
                            little something like this:
                            <CommandPromptDisplay
                              command="/bin/bash -c \'\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\'"
                              output="homebrew installed message"
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
                          3. Install Git & tools
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            Git on new mac's is installed by default. Git is the
                            industry standard for software versioning. There are
                            some good UI tools tool
                          </div>
                          <ul>
                            <li>Sourcetree</li>
                            <li>GitHub Desktop</li>
                          </ul>
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
                          4. Install IDE's
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Iterated Development Environment's are essential for
                            software development. Here are a few of my favorite.
                          </div>
                          <ul className='className="max-w-md list-inside list-disc space-y-1'>
                            <li>
                              <Link
                                target="_blank"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                href="https://code.visualstudio.com/download"
                              >
                                VS Code
                              </Link>
                            </li>
                            <li>
                              Xcode - download from app store on your mac;
                            </li>
                            <li>
                              <Link
                                target="_blank"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                href="https://developer.android.com/studio"
                              >
                                Android Studio
                              </Link>
                            </li>
                            <li>
                              <Link
                                target="_blank"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                href="https://dbeaver.io/download/"
                              >
                                DBeaver
                              </Link>{' '}
                              I've grown to like DBeaver for Postgresql however
                              I do like others. I grew up on SSMS for .NET & for
                              Mongo I often use for Compass
                            </li>
                            <li>
                              Compass; SQL Server Management Studio SSMS & PG
                              Admin - optional database IDE's
                            </li>
                            <li>
                              Eclipse - boo (I need this for old SFCC dev but do
                              not like it)
                            </li>
                          </ul>
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
                          5. Communication Apps
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div>
                            <ul className='className="max-w-md list-inside list-disc space-y-1'>
                              <li>Slack - great chat app</li>
                              <li>
                                Discord - There are some good developer servers
                                to join
                              </li>
                              <li>
                                What's App - I use this for more social and
                                messaging friends & group chats
                              </li>
                              <li>
                                Teams & Outlook - If working in a Microsoft shop
                                these are essential; however now a days kinda
                                feel old
                              </li>
                              <li>
                                Zoom - I don't love zoom but often business's
                                use it{' '}
                              </li>
                              <li>
                                Skype - deprecated - haven't used it in quite
                                some time now
                              </li>
                              <li>WebEx - optional</li>
                            </ul>
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
                          6. Install Postman
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Postman is a good app that we cn utilize to test
                            API's
                            <Link
                              target="_blank"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                              href="https://www.postman.com/"
                            >
                              Official Postman page.
                            </Link>
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
                          7. Install Docker
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Docker is a good free app that let's us use
                            containers to help build software. One example is we
                            can have a database container so it's easy to spin
                            up and not have to install it all locally.
                            <Link
                              target="_blank"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                              href="https://www.docker.com/"
                            >
                              Official Docker page.
                            </Link>
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
                          8. .zshrc file configuration
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            The .zshrc file configuration is essential for
                            Z-Shell scripting. In our directory of Macintosh HD
                            &gt; Users &gt; userName we have (if not there we
                            can create) a file named .zshrc. All files starting
                            with a dot are "hidden" and we can view hidden files
                            in finder by pressing cmd+shift+. So opening the
                            file to me I like to simply use the app TextEdit
                            (others use vim or text editing methods). Then here
                            are some important lines we can add to our .zshrc
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock3}
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
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          8. .zshrc file configuration
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Infrequently we have to edit PDF. There are quite a
                            few popular tools. Adobe reader or PDF Expert are
                            decent https://pdfexpert.com/
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ol>
                <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
                <div className="flex w-full justify-center pb-4">
                  So as we see our mac's environmental setup is fundamental &
                  requires installing a bunch of software.
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
