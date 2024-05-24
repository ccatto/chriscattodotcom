// what-is-the-difference-between-git-pull-and-git-fetch

import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'What is the Difference Between git pull and git fetch simply explained ChrisCatto.com documentation',
  description:
    'What is the Difference Between git pull and git fetch simply explained ChrisCatto.com documentation Git Tutorial',
  alternates: {
    canonical:
      'https://www.chriscatto.com/code/git/tutorial/what-is-the-difference-between-git-pull-and-git-fetch',
  },
};

const gitPullAndFetch = () => {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Tutorial What is the Difference Between git pull and git fetch simply explained"
          description="Git docs: The Difference Between git pull and git fetch is a fundamental key concept in Git. Let's take a look at this in a bit of detail"
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] pl-5 pt-5 dark:bg-gray-700">
        <h3 className="mb-4 inline-block indent-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          &gt; "git pull" does a "git fetch" followed by a "git merge"
        </h3>
        <ul className="ml-6 mt-2 list-outside list-disc">
          <li>
            <Link
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://git-scm.com/docs/git-fetch"
            >
              "git fetch"
            </Link>{' '}
            updates our remote-tracking branches which we can safely execute
            anytime since it doesn't change any of our local branches.
          </li>
          <li>
            <Link
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://git-scm.com/docs/git-pull"
            >
              "git pull"
            </Link>{' '}
            brings a local branch up to date with it's remote branch; while also
            updating our other remote-tracking branches.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default gitPullAndFetch;
