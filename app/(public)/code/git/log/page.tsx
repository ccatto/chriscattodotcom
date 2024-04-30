import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Log',
  description: 'Chris Catto Code Git Tutorial Commands Log',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col flex-nowrap ">
      <div className="flex-[20]">
        <JumbotronCattoFlexible
          title="Git Command Log"
          description="Log is a command we can use to see the commit history in our repo."
        />
      </div>
      <hr className="p-0" />
      <div className="flex-[80] p-2 dark:bg-gray-700">
        <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command="git log"
          output="commit 9d48c9f1b214e8002b7804cd47facd0691f09747
            Author: Catto <catto@somemail.com>
            Date:   Mon Apr 8 09:30:01 2013 -0400."
        />
        <div>
          <div className="m-5 flex-1  rounded-2xl border-2 border-white bg-[#f0efe7] p-5 ">
            <h2 className="text-[#f14e32]">Some git log examples:</h2>
            <p className="text-[#4e443c]">
              git log
              <br />
              `q` quit to get back to terminal shell prompt;
              <br />
              git log --oneline
              <br />
              # A nice flag for log
              <br />
              git log --pretty=format:"%h%x09%an%x09%ad%x09%s"
              <br />
              # some ASCII art
              <br />
              git log --graph --oneline --decorate --all
              <br />
              # search - need beter examles for this flag
              <br />
              git log -S
              <br />
              git log --all --simplify-by-decoration
              <br />
              # fun with flags:
              <br />
              git log --graph --oneline
            </p>
          </div>
        </div>
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  );
}
