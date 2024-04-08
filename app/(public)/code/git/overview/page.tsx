import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'
// import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Installation',
  description: 'Chris Catto Code Git Installation'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git overview"
          description="Git has a bunch of info"
        />
      </div>
      <hr className="p-0" />
      {/* <div className='flex-[80] dark:bg-gray-700 p-2'>
        <div className='p-4 text-gray-400'>
          We need homebrew installed. 
          <br/>
          Also after to ensure git is installed we can check the using the <Link href="/code/git/version">version command</Link>.
        </div>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='brew install git'
            output='==> installing git'
          />
        </div>
      </div> */}
      {/* <hr className="m-3" /> */}
    </div>
  )
}
