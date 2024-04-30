import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Version',
  description: 'Chris Catto Code Git Tutorial Commands Version',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Version"
          description="Version is a command we can use to tell if Git is installed & what version we are using."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        {/* <div className=''> */}
        <CommandPromptDisplay
          command="git --version"
          output="git version 2.37.1 (Apple Git-137.1)"
        />
        {/* </div> */}
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  );
}
