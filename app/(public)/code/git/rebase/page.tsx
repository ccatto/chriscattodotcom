import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Rebase ',
  description: 'Chris Catto Code Git Tutorial Commands Rebase',
};

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Rebase"
          description="Rebase is a command we can use to rebase our local branch which could be a feature onto another branch such as develop."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className="pl-10">
          <CommandPromptDisplay
            command="git rebase develop"
            output="First, rewinding head to replay your work on top of it."
          />
        </div>
      </div>
    </div>
  );
}
