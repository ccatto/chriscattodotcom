import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How do I Delete A Git Branch Locally And Remotely Simply Explained ChrisCatto.com documentation',
  description: 'How do I Delete A Git Branch Locally And Remotely Simply Explained in detail ChrisCatto.com documentation',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/git/how-do-i-delete-a-git-branch-locally-and-remotely',
  },
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Tutorial How do I Delete A Git Branch Locally And Remotely"
          description="In Git we occasionally have to delete a branch & we want to do this both locally & remotely. This page descripbes how we delete a git branch locally & remotely. "
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Delete a <span className="font-bold text-blue-500">remote</span>{' '}
          branch
        </h2>
        <h6>Terminal example:</h6>
        <CommandPromptDisplay
          command="git push origin -d branchName"
          output=" - [deleted]         branchName"
        />
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Delete a <span className="font-bold text-blue-500">local</span> branch
        </h2>
        <h6>Terminal example:</h6>
        <CommandPromptDisplay
          command="git branch -D branchName"
          output="Deleted branch branchName (was a5f2b57)."
        />
      </div>
      <div className="border-slate-100-400 m-5 flex-[80] rounded-2xl border-2 border-b-[1px] p-5 text-slate-900 dark:bg-gray-400">
        When we delete a branch ensure that we are not on that branch so just
        checkout a different branch.
        <br />
        We have 3 different branches that are involved. We have:
        <div className="pl-10">
          <ul className="indent- list-disc">
            <li>the local branch</li>
            <li>The remote origin branch</li>
            <li>The local remote-tracking branch</li>
          </ul>
        </div>
        <br />
        To delete the remote branch we need to utilize the "push origin" so it
        will be "git push origin --delete branchName"
        <br />
        Here is the{' '}
        <Link
          target="_blank"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href="https://git-scm.com/book/en/v2/Git-Branching-Branch-Management"
        >
          official Git documentation for Branch Management.
        </Link>
        <br />
        Here is the{' '}
        <Link
          target="_blank"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href="https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches"
        >
          official Git documentation for Remote Branches.
        </Link>
      </div>
    </div>
  );
}
