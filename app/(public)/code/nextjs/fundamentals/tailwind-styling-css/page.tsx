import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Chris Catto Code Next.js Tutorial Fundamentals Styling with TailwindCSS',
  description: 'Chris Catto Next.js Styling with TailwindCSS',
};

const helloworld = () => {
  let codeBlock = '<div className="text-white">foo bar</div>';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Styling with TailwindCSS"
            description="Next.js fundamentals Styling with TailwindCSS."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Styling with TailwindCSS
          </h2>
          <div className="text-xl font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li className="m-5">
                Tailwind is a CSS framework where we can utilize utility
                classes. For example if we want our text to be white we can use
                "text-white".
              </li>
              <li className="m-5">
                This is the official TailwindCSS page. It's a great reference
                and one hotkey I really enjoy is cmd+K which brings up a search
                bar and we can search for any css docs such as height then we
                can see all the utility classes for height:{' '}
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind CSS Official Page
                </Link>
              </li>
            </ul>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default helloworld;
