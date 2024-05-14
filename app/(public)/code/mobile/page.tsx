import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CodeGistsCatto from '@/app/components/AtomicDesign/atoms/CodeGistsCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Mobile Xcode',
  description: 'Chris Catto Mobile Xcode',
  alternates: {
    canonical: 'https://www.chriscatto.com/mobile/xcode',
  },
};

export default function Page() {

  const pathName = 'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fccatto%2Fgists%2Fblob%2Fmain%2Fstripe-webhook.ts&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Chris Catto Mobile XCode"
            description="Chris Catto Mobile XCode"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
          XCode is the IDE to develop IOS apps.
          </h2>
          <div>
            This is a placeholder for mobile development documentation.
          </div>
        </div>
      </div>
    </>
  );
}
