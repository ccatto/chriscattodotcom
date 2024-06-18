import React, { ReactNode, useState } from 'react';
import JSNavDrawerCatto from '@/app/components/JavaScript/JSNavDrawerCatto/JSNavDrawerCatto';
import CSSSideNavLinkList from '@/app/components/AtomicDesign/molecules/CSSSideNavLinkList/CSSSideNavLinkList';

type LayoutProps = {
  children: ReactNode;
};

const CSSLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-27rem)]">
        <aside className="h-full lg:flex-[20]">
          <CSSSideNavLinkList />
        </aside>
        <article className="h-full lg:flex-[80]">{children}</article>
      </div>
      <hr className="m-3" />
    </>
  );
};

export default CSSLayout;
