import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Add',
  description: 'Chris Catto Code Git Tutorial Commands Add'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Add"
          description="Add is a command we can use to add the changes in the working directory to the staging area. If we use a dot (.) after git add it will add all the altered files to the staging area. After a git add we often run git commit."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <CommandPromptDisplay
          command='git add .'
          output='no message just goes shows next prompt.'
        />
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  )
}
