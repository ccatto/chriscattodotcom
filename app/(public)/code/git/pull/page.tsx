import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Pull',
  description: 'Chris Catto Code Git Tutorial Commands Pull'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Pull"
          description="Pull is a command we can use to obtain the latest code in an existing repo locally from a remote repo. Pull is used to fetch and download content from a remote repository and immediately update the local repository to match that content. Pull will sync our local repo with the upstream alters."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command='git pull'
          output='Already up to date.'
        />
      </div>
    </div>
  )
}
