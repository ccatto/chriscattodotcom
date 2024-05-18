import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Node Semantic Versioning Semver',
  description: 'Chris Catto Code JavaScript Node Semantic Versioning Semver',
  alternates: {
    canonical:
      'https://www.chriscatto.com/code/javascript/node/semantic-versioning-semver',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript Node.js Semantic Versioning Semver"
            description="JavaScript Node.js has become very popular javascript runtime environment. Let's take a closer look at the steps to take on how we can publish NPM package."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h3>Node JavaScript Semantic Versioning Semver</h3>
          <div>
            <Link
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://www.semver.org"
            >
              Semver
            </Link>{' '}
            is an industry standard naming convention for versions of apps.
          </div>
          {/* <div>
            Testing we can utilize "link":
            <CommandPromptDisplay
              command="yarn link"
              output="yarn link v1.22.22 success Registered common-sdk-catto. info You can now run `yarn link common-sdk-catto` in the projects where you want to use this package and it will be used instead."
            />
          </div> */}
          <div>Given a version number MAJOR.MINOR.PATCH, (ex. 2.4.1):</div>
          <ol>
            <li>MAJOR version - breaking changes</li>
            <li>MINOR change</li>
            <li>PATCH - bug fixes</li>
          </ol>
          <div>
            One way we can increment is to utilize yarn version
            --strategyKeyWord where the strategyKeyWord is major || minor ||
            patch
            <CommandPromptDisplay
              command="yarn version --minor"
              output="info Current version: 1.0.0 info New version: 1.1.0"
            />
          </div>
        </div>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
      </div>
    </>
  );
}
