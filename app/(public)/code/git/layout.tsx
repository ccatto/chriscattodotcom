import { ReactNode } from "react";
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';

type LayoutProps = {
  children: ReactNode;
}

const GitLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-screen">
        <aside className="flex-[20]" aria-label="Sidebar">
          <SideNavGitCatto />
        </aside>
        <article className="flex-[80]">
          {children}
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}
export default GitLayout;
