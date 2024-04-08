import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Source Control',
  description: 'Chris Catto Code Git Source Control'
}

export default function Page() {
  return (
    // flex-nowrap justify-center items-center text-center
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='flex-1 bg-green-500'>
        <JumbotronCattoFlexible
          title="Git Source Control"
          description="Git is the industry standard for source control. This section I am displaying some of the main concepts & the commands that I use frequently."
        />
      </div>
      <div className='flex-1 bg-blue-500'>
        middle
      </div>
      <div className='flex-1 bg-red-500'>
        bottom
      </div>

      <hr className="m-3" />
    </div>
  )
}