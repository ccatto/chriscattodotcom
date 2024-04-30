import React, { ReactNode, useState } from 'react';
import JSNavDrawerCatto from '@/app/components/JavaScript/JSNavDrawerCatto/JSNavDrawerCatto';

type LayoutProps = {
  children: ReactNode;
};

const JavaScriptLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-full">
        {/* <aside className="lg:flex-[20] h-full"> */}
        <aside className="h-full lg:flex-[20]">
          <JSNavDrawerCatto />
        </aside>
        <article className="h-full lg:flex-[80]">{children}</article>
      </div>
      <hr className="m-3" />
    </>
  );
};

export default JavaScriptLayout;
