import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Commands Branch',
  description: 'Chris Catto Code Git Tutorial Commands Branch'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-[20]'>
        <JumbotronCattoFlexible
          title="Git Command Branch"
          description="Branch lets us create; delete & switch branches in our repo."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-[80] dark:bg-gray-700 p-2'>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='git branch'
            output='lists the branches then we can type q to exit.'
          />
        </div>
      </div>
      <div className='p-5 m-5  flex-1 border-2 border-white rounded-2xl bg-[#f0efe7] '>
        <h2 className='text-[#f14e32]'>
          Some git branches examples:
        </h2>
        <br/>
        <p className='text-[#4e443c]'>
          git branch
          <br />
          # lists all branches & displays what current branch we are on by an * prefixing the name
          <br />
          <br />
          git branch -D nameOfBranch
          <br />
          # -D flag will delete a branch
          <br />
          <br />
          git branch -vv
          <br />
          # this -vv flag is Doubly verbose & provides us more info about the branch
        </p>
      </div>







    </div>
  )
}
