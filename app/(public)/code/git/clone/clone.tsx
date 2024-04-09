import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Clone',
  description: 'Chris Catto Code Git Tutorial Commands Clone'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command clone"
          description="Clone is a command we can use to create a clone or copy of an existing repo locally."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='git clone'
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
