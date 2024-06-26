import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
// import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'
// import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Home',
  description: 'Chris Catto Code JavaScript Home',
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="Node.js"
            description="JavaScript Node.js has become very popular javascript runtime environment."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h3>Node JavaScript Overview</h3>
          <div>
            <Link
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://nodejs.org/en"
            >
              Node.js
            </Link>{' '}
            is a free open-source cross-platform JavaScript runtime environment.
          </div>
          <div>
            To install node we can leverage brew:
            <CommandPromptDisplay
              command="brew install node"
              output="==> Installing dependencies for node: ..."
            />
          </div>
          <div>
            Node needs to be installed. After it's installed we can check the
            version which will show that it's installed:
            <CommandPromptDisplay command="node -v" output="v20.9.0" />
          </div>
          <div>
            To create a simple node app we can we initialize it. If we create a
            new folder and navigate there in terminal then execute npm init
            which will prompt us some questions such as name of project then the
            folder will be a node app.
          </div>
          <div>
            NPM is the node package manager which we will utilize very often to
            install packages. It's similar to yarn.
          </div>
        </div>
        <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-blue-100 dark:bg-blue-700 md:my-10" />
      </div>
    </>
  );
}
