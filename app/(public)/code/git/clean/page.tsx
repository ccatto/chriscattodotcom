import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Branch',
  description: 'Chris Catto Code Git Tutorial Commands Branch',
};

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Clean"
          description="Clean lets us if we have untracked files & we don't care about them & want to get back to regular version we can git clean -f to stop the untracked files."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git clean -f"
          output="remove unwanted files from your working directory"
        />
        <p>
          If there are directories that are untracked & we want to remove
          untracked files which are actually directories/folders we can run
        </p>
        <CommandPromptDisplay
          command="git clean -fd"
          output="Removing directoryName/"
        />
      </div>
    </div>
  );
}
