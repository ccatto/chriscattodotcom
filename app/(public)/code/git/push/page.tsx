import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Push',
  description: 'Chris Catto Code Git Tutorial Commands Push'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Push"
          description="Push is a command we can use to upload local repo content to a remote repo."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='git push'
            output='remote: Resolving deltas: 100% (8/8), completed with 4 local objects.'
          />
          {/* 
            Enumerating objects: 29, done.
            Counting objects: 100% (29/29), done.
            Delta compression using up to 12 threads
            Compressing objects: 100% (11/11), done.
            Writing objects: 100% (18/18), 2.18 KiB | 2.18 MiB/s, done.
            Total 18 (delta 8), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (8/8), completed with 4 local objects.
            To https://github.com/ccatto/chriscattodotcom.git
               82fdfcc..3e7bf87  feat/cc-001-init -> feat/cc-001-init */}
        </div>
      </div>
      {/* <hr className="m-3" /> */}
    </div>
  )
}
