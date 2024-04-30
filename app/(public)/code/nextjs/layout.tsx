import React, { ReactNode, useState } from 'react';
import NextJSDrawerCatto from '@/app/components/NextJS/NextNavDrawerCatto/NextNavDrawerCatto';

type LayoutProps = {
  children: ReactNode;
};

const NextJSLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-27rem)]">
        {/* <aside className="lg:flex-[20] h-full"> */}
        <aside className="h-full lg:flex-[20]">
          <NextJSDrawerCatto />
        </aside>
        <article className="h-full lg:flex-[80]">{children}</article>
      </div>
      <hr className="m-3" />
    </>
  );
};

export default NextJSLayout;
