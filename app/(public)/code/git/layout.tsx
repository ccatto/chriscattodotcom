// import { Metadata } from 'next'
// import { ReactNode } from "react";
import { ReactNode } from "react";
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';
import { LayoutProps } from "@/.next/types/app/page";

// import { LayoutProps } from "@/.next/types/app/layout";

// const type LayoutProps = {
//   children: ReactNode;
// }
// const interface LayoutProps2 = {
//   children: ReactNode;
//   // Your other props here.
// }

const GitLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-screen">
        <aside className="flex-[20]" aria-label="Sidebar">
          <SideNavGitCatto />
        </aside>
        <article className="flex-[80] bg-blue-500">
          {children}
          {/* <JumbotronCattoFlexible
            title="Git Source Control"
            description="Git is the industry standard for source control. This section I am displaying some of the commands that I use frequently."
          /> */}
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}
export default GitLayout;
