import React, { ReactNode, useState } from 'react';
import JSNavDrawerCatto from '@/app/components/JavaScript/JSNavDrawerCatto/JSNavDrawerCatto';
import PrismaSideNavLinkList from '@/app/components/AtomicDesign/molecules/PrismaSideNavLinkList/PrismaSideNavLinkList';

type LayoutProps = {
  children: ReactNode;
};

const PrismaLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-27rem)]">
        <aside className="h-full lg:flex-[20]">
          <PrismaSideNavLinkList />
        </aside>
        <article className="h-full lg:flex-[80]">{children}</article>
      </div>
      <hr className="m-3" />
    </>
  );
};

export default PrismaLayout;
