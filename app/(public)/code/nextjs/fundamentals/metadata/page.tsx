import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Metadata',
  description: 'Chris Catto Next.js Metadata',
};

const metadataFunction = () => {
  let codeBlock =
    "import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n    title: 'Page Title',\n    description: 'Page Description',\n};";

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Metadata"
            description="Next.js fundamentals metadata provides details about a webpage embedded within our <head> element."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Metadata
          </h2>
          <div>
            <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
              <li className="m-5">
                Metadata provides details about a webpage embedded within our
                &lt;head&gt; element.
              </li>
              <li className="m-5">
                Metadata details can be located here:{' '}
                <Link
                  href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Next.js Metadata official page
                </Link>
              </li>
              <li className="m-5">
                favicon.ico which we place in our \public is another form of
                static metadata.
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

export default metadataFunction;
