import React, { ReactNode, useState } from 'react';
import JSNavDrawerCatto from '@/app/components/JavaScript/JSNavDrawerCatto/JSNavDrawerCatto';

type LayoutProps = {
  children: ReactNode;
};

const PostgresqlLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-27rem)]">
        <aside className="h-full lg:flex-[20]">
          <JSNavDrawerCatto />
        </aside>
        <article className="h-full lg:flex-[80]">{children}</article>
      </div>
      <hr className="m-3" />
    </>
  );
};

export default PostgresqlLayout;
