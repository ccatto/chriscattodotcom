import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Commands Version',
  description: 'Chris Catto Code Git Commands Version'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Log"
          description="Log is a command we can use to see the commit history in our repo ."
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
            output='commit 9d48c9f1b214e8002b7804cd47facd0691f09747
            Author: Catto <catto@somemail.com>
            Date:   Mon Apr 8 09:30:01 2013 -0400.'
          />
        </div>
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  )
}
