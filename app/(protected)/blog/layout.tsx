import React, { ReactNode } from 'react';
import GitNavDrawerCatto from '@/app/components/Git/GitNavDrawerCatto/GitNavDrawerCatto';
// import PageDrawerCattoDataProviderWrapper from '@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';

type LayoutProps = {
  children: ReactNode;
};

const GitLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-27rem)] flex-col flex-nowrap ">
        {children}
      </div>
      <hr className="m-3" />
    </>
  );
};
export default GitLayout;
