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
      <div className="flex h-screen">
        <aside className="flex-[20]" aria-label="Sidebar">
          <SideNavGitCatto />
        </aside>
        <article className="flex-[80] bg-blue-500">
          <JumbotronCattoFlexible
            title="Git Source Control"
            description="Git is the industry standard for source control. This section I am displaying some of the commands that I use frequently."
          />
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}