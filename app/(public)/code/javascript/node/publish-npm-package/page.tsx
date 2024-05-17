import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Node Publish NPM Package',
  description:
    'Chris Catto Code JavaScript Node Publish NPM Package steps taken',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/javascript',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript Node.js Publish NPM Package"
            description="JavaScript Node.js has become very popular javascript runtime environment. Let's take a closer look at the steps to take on how we can publish NPM package."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h3>Node JavaScript How to Publish an NPM package</h3>
          <p>
            <Link
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://nodejs.org/en"
            >
              Node.js
            </Link>{' '}
            is a free open-source cross-platform JavaScript runtime environment.
          </p>
          <p>
            Testing we can utilize "link":
            <CommandPromptDisplay
              command="yarn link"
              output="yarn link v1.22.22 success Registered common-sdk-catto. info You can now run `yarn link common-sdk-catto` in the projects where you want to use this package and it will be used instead."
            />
          </p>
          <p>
            Then in our project we want to use it we link it there & it creates
            it in our node_modules
            <CommandPromptDisplay
              command="yarn link common-sdk-catto"
              output="success Using linked package for common-sdk-catto."
            />
          </p>
          <p>
            To publish it we could use Github or the more famous npmjs.com. We
            need to authenticate to Github we can do so by updating our ~/.npmrc
            file (not in project it's in our mac by the .zshrc) #todo add a
            little more detail here.
          </p>
          <p></p>
        </div>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
      </div>
    </>
  );
}
