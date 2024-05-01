import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import JumbotronCattoFlexible from '../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '../../../..//components/Utils/CommandPromptDisplay/CommandPromptDisplay';

import React from 'react';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Branch',
  description: 'Chris Catto Code Git Tutorial Commands Branch',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Branch"
          description="Branch lets us create; delete & switch branches in our repo."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git branch"
          output="lists the branches then we can type q to exit."
        />
      </div>
      <div className="m-5 flex-1 rounded-2xl border-2 border-white bg-[#f0efe7] p-5 ">
        <h2 className="text-[#f14e32]">Some git branches examples:</h2>
        <br />
        <p className="text-[#4e443c]">
          git branch
          <br />
          # lists all branches & displays what current branch we are on by an *
          prefixing the name
          <br />
          <br />
          git branch -D nameOfBranch
          <br />
          # -D flag will delete a branch
          <br />
          <br />
          git branch -vv
          <br /># this -vv flag is Doubly verbose & provides us more info about
          the branch
        </p>
      </div>
    </div>
  );
}
