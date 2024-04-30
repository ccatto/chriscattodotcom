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
          title="Git Tutorial Command Init"
          description="Init is a command we can use to create a new git repo. It creates a .git subdirectory. "
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git init"
          output="Initialized empty Git repository in /Users/chriscatto/Documents/GitK8/TestGitInit/.git/"
        />
      </div>
    </div>
  );
}
