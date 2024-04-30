// 'use client';

import React, { ReactNode, useState } from 'react';
import GitNavDrawerCatto from '@/app/components/Git/GitNavDrawerCatto/GitNavDrawerCatto';
import PageDrawerCattoDataProviderWrapper from '@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';

import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';
import Image from 'next/image';
import ButtonCatto from '@/app/components/AtomicDesign/atoms/ButtonCatto/ButtonCatto';
import ImageCatto from '@/app/components/ImageCatto/ImageCatto';
import GitDrawerSideNavCatto from '@/app/components/GitDrawerSideNavCatto/GitDrawerSideNavCatto';

// import React, { useState } from 'react';
// import GitDrawerOpenButtonCatto from "@/app/components/atoms/GitDrawerOpenButtonCatto/GitDrawerOpenButtonCatto";
// import React, { useEffect, useRef, useState } from 'react'
// GitNavDrawerCatto - NEW
// import PageDrawerCattoDataProvider from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// import PageDrawerCattoDataProviderWrapper from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// import { usePageDrawerCattoDataContext } from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// PageDrawerCattoDataProviderWrapper

type LayoutProps = {
  children: ReactNode;
};

const GitLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-27rem)]">
        <PageDrawerCattoDataProviderWrapper>
          {/* <GitDrawerSideNavCatto /> */}
          <aside className="h-full lg:flex-[20]">
            <GitNavDrawerCatto />
          </aside>
          <article className=" h-full lg:flex-[80]">{children}</article>
        </PageDrawerCattoDataProviderWrapper>
      </div>
      <hr className="m-3" />
    </>
  );
};
export default GitLayout;

// console.log('1 isGitDrawerOpen === ', isGitDrawerOpen);
// let { isPageDrawerOpen2 } = usePageDrawerCattoDataContext();
// console.log("------ Context isPageDrawerOpen2 === ", isPageDrawerOpen2);
// const clickSideNavHandler = () => {
//   // const [isGitDrawerOpen, setGitDrawerOpen] = useState(true);
//   // const handleClick = () => {
//   //   setGitDrawerOpen(!isGitDrawerOpen);
//   // };
//   // console.log('00 22 00 isGitDrawerOpen === ', isGitDrawerOpen);
//   // return (event: React.MouseEvent) => {
//   //   // console.log('1 isGitDrawerOpen === ', isGitDrawerOpen);
//   //   // console.log('inside PREVIOUS CLICK');
//   //   setGitDrawerOpen(!isGitDrawerOpen);
//   //   console.log('setGitDrawerOpen === ', isGitDrawerOpen);
//   //   // if (currentImg === 0 ) {
//   //   //     console.log('inside AT beginning');
//   //   //     setCurrentImg(totalSlides - 1);
//   //   // } else {
//   //   //     console.log('not at end yet');
//   //   //     setCurrentImg(currentImg - 1);
//   //   // }
//   //   event.preventDefault();
//   // }
// }
