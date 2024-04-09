import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Version',
  description: 'Chris Catto Code Git Tutorial Commands Version'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-full w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Status"
          description="Status is a command we can use to tell if Git is installed & what version we are using."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='git status'
            output='Your branch is up to date with development.'
          />
        </div>
        <div className='p-10'>
          <section className="flex flex-col h-auto w-[40rem] bg-gray-900 text-gray-200 font-mono rounded-xl border-2 border-gray-300 ">
            {/* Top bar */}
            <div className="flex items-center h-10 px-4 bg-gray-800 rounded-t-xl border-b-[1px] border-gray-500">
              <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="p-52 text-slate-400">Terminal</div>
            </div>
            {/* CMD body */}
            <div className="flex-1 p-4">
              <div className="flex">
                <div className="mr-2">&gt;</div>
                <div className="flex-1 bg-gray-800 focus:outline-none">
                  git status
                </div>
              </div>
              <div className="mt-2">
                <span className="text-green-500">&gt; Output:</span>
                <div className="bg-gray-800 p-2 mt-1">
                  <p>
                    On branch branchName
                    <br />
                    Your branch is up to date with 'origin/branchName'.
                    <br />
                    <br />
                    Changes not staged for commit:
                    <br />
                    (use "git add file..." to update what will be committed)
                    <br />
                    (use "git restore file..." to discard changes in working directory)
                    <br />
                  </p>
                  <br />
                  <p className='text-red-600'>
                    modified:   app/(public)/code/git/layout.tsx
                  </p>
                  <br />
                  Untracked files:
                  <br />
                  (use "git add file..." to include in what will be committed)
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  )
}
