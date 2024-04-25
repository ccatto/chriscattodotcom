import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Commit',
  description: 'Chris Catto Code Git Tutorial Commands Commit',
};

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Commit"
          description="Commit is a command we can use to create commit which is a snapshot of our repo.  We often use the option -m with a comment after it wrapped in double quotes."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command='git commit -m "feat/Tix-044: my commit message."'
          output="7 files changed, 100 insertions(+), 12 deletions(-)"
        />
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  );
}
