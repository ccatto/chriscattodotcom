// whats-the-difference-between-tilde-and-caret-in-package-json

import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
// import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title:
    'Whats the Difference Between ~ Tilde and ^ Caret in Package-json Simple Explanation documentation ChrisCatto.com',
  description:
    'Whats the Difference Between ~ Tilde and ^ Caret in Package-json Explanation documentation ChrisCatto.com',
  alternates: {
    canonical:
      'https://www.chriscatto.com/code/javascript/node/semantic-versioning-semver',
  },
};

const packageTildeCaret = () => {
  const codeBlock =
    'let valueToBeRemoved = 4;\nlet array = [1, 2, 3, 4, 5];\narray = array.filter(item => item !== valueToBeRemoved);\nconsole.log(\'array after filter & value is removed", array);\n// [ 1, 2, 3, 5 ]';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Whats the Difference Between ~ Tilde and ^ Caret in Package-json"
            description="Whats the Difference Between ~ Tilde and ^ Caret in Package-json Explanation documentation ChrisCatto.com"
          />
        </div>
      </div>
      <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
        <div className="mb-4 inline-block text-lg tracking-tight">
          Whats the Difference Between ~ Tilde and ^ Caret in Package-json
          Explanation documentation:
          <ul className="ml-6 mt-2 list-outside list-disc">
            <li>
              ~version “Approximately equivalent to version”, will update you to
              all future patch versions, without incrementing the minor version.
              ~2.4.5 will use releases from 2.4.5 to &lt;2.6.0. It provides us
              "bug-fix" releases.
            </li>
            <li>
              ^version “Compatible with version”, will update you to all future
              minor/patch versions, without incrementing the major version.
              ^2.4.5 will use releases from 2.4.5 to &lt;3.0.0. It provides us
              "backward-compatible" new functionality.
            </li>
          </ul>
        </div>
        <p>
          <Link
            href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies"
            target="_blank"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Official NPM.js docs on package.json dependencies
          </Link>
        </p>
        {/* <SyntaxHighlightingReactCatto codeString={codeBlock} /> */}
      </div>
    </>
  );
};
export default packageTildeCaret;
