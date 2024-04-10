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
          title="Git Tutorial Command Clone"
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
            command='git clone urlOfRepo'
            output='git clone creates a working copy of a repo. When on a github page there is a "clone" button in the top right usually where we can get the path to use. We can use ssh or https;'
          />
        </div>
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  )
}
