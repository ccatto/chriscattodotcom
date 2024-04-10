import { ReactNode } from "react";
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
}

const GitLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-full">
        <aside className="hidden lg:block lg:flex-[20]" aria-label="Sidebar">
          <SideNavGitCatto />
        </aside>
        <article className="flex-[80] lg:flex-[80] h-full">
          {children}
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}
export default GitLayout;
