import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript DayJS',
  description: 'Chris Catto Code JavaScript DayJS',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/javascript/dayjs',
  },
};

export default function Page() {
  const codeBlock =
    'import dayjs from "dayjs";\nconst currentDate = dayjs();\nconst formattedDate = currentDate.format(\'YYYY-MM-DD HH:mm:ss\');\nconsole.log(formattedDate);';
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript DayJS"
            description="JavaScript DayJS is a good library to alter dates."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <p>
            DayJS is a small js library that parses; validates & manipulates
            dates & times. It's very similar to moment but better. We often have
            to alter dates from ISO time to time zones to date formats so this
            is a good library to utilize.
          </p>
          <p>A simple example that demonstrates the use is below:</p>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
      </div>
    </>
  );
}
