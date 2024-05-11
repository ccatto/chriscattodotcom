import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Init',
  description: 'Chris Catto Code Git Tutorial Commands Init',
};

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Tutorial How do I Delete A Git Branch Locally And Remotely"
          description="In Git we occasionally have to delete a branch & we want to do this both locally & remotely. This page descripbes how we delete a git branch locally & remotely. "
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Delete a remote branch
          <br />
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git push origin -d branchName"
          output=""
        />
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Delete a local branch
          <br />
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git branch -D branchName"
          output=""
        />
      </div>
    </div>
  );
}
