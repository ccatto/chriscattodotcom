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
          title="Git Command Checkout"
          description="Checkout lets us checkout & switch to a branch."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git checkout -b branchName"
          output="# allows us to create a new branch and name it"
        />
      </div>
      <div className="mx-12 mt-3 flex-1  rounded-2xl border-2 border-white bg-[#f0efe7] p-5 ">
        <h2 className="text-[#f14e32]">Some git checkout examples:</h2>
        <br />
        <p className="text-[#4e443c]">
          git checkout develop
          <br />
          # will switch our brach to a branch name develop
          <br />
          <br />
          git checkout branchName
          <br />
          # will switch our brach to a branch name branchName
          <br />
        </p>
      </div>
    </div>
  );
}
