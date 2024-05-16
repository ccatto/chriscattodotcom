import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Mobile Ios Environmental Setup',
  description: 'Chris Catto Mobile Ios Environmental Setup',
  alternates: {
    canonical: 'https://www.chriscatto.com/mobile/capacitor',
  },
};

export default function Page() {
  const pathName =
    'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';
  const codeBlock = 'brew install cocoapods';
  const codeBlock2 = 'output: export';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Chris Catto Mobile Ios Environmental Setup"
            description="Chris Catto Mobile Ios Environmental Setup"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Ios Environmental Setup
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  Android Studio is an IDE for developing android apps. Official{' '}
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://developer.android.com/"
                  >
                    Android page.
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up Ios
                Environmental Setup for mobile apps.
              </p>
              <li>
                Install XCode; Xcode is Apple's IDE for creating native macOS,
                iOS. We can install it from the apple app store. We often have
                to update our Xcode app too. The simulator & the version of
                Xcode is always updating as of May 2024 the simulator version is
                "The iOS 17.4 Simulator (21E213)".{' '}
                <Link
                  href="https://developer.apple.com/support/xcode/"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Official Xcode developer page from Apple.
                </Link>
              </li>
              <li>
                Install Cocopods
                <CommandPromptDisplay
                  command="brew install cocoapods"
                  output="==> Installing cocoapods"
                />
                <p>confirm it's installed by checking version:</p>
                <CommandPromptDisplay command="pod --version" output="1.15.2" />
              </li>

              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
