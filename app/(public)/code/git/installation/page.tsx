import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Source Control',
  description: 'Chris Catto Code Git Source Control'
}

export default function Page() {
  return (
    <>
      <div className='flex flex-col flex-nowrap justify-center items-center w-full h-full'>
        <div className='flex-1 w-full bg-slate-500 justify-center items-center text-center'>
          <JumbotronCattoFlexible
            title="Git Installation"
            description="Git installation is pretty straight forward"
          />
        </div>
        <div className='flex-1 bg-red-300'>
          middle
        </div>
        <div className='flex-1 bg-green-500'>
          bottom
        </div>
      </div>
    </>
  )
}