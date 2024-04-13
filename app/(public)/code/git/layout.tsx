// 'use client';

import React, { ReactNode, useState } from "react";
// import React, { useState } from 'react';
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';
import Image from "next/image";
import ButtonCatto from "@/app/components/atoms/ButtonCatto/ButtonCatto";
// import React, { useEffect, useRef, useState } from 'react'
import ImageCatto from "@/app/components/ImageCatto/ImageCatto";
// import GitDrawerOpenButtonCatto from "@/app/components/atoms/GitDrawerOpenButtonCatto/GitDrawerOpenButtonCatto";
import GitDrawerSideNavCatto from "@/app/components/GitDrawerSideNavCatto/GitDrawerSideNavCatto";
// import PageDrawerCattoDataProvider from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// import PageDrawerCattoDataProviderWrapper from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// import { usePageDrawerCattoDataContext } from "@/app/components/Utils/PageDrawerCattoDataProvider/PageDrawerCattoDataProvider";
// PageDrawerCattoDataProviderWrapper
import PageDrawerCattoDataProviderWrapper from "@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider";


type LayoutProps = {
  children: ReactNode;
}

// let app

const GitLayout = ({ children }: LayoutProps) => {
  // console.log('1 isGitDrawerOpen === ', isGitDrawerOpen);
  // let { isPageDrawerOpen2 } = usePageDrawerCattoDataContext();
  // console.log("------ Context isPageDrawerOpen2 === ", isPageDrawerOpen2);

  return (
    <>
      <div className="flex h-full">
        <PageDrawerCattoDataProviderWrapper>
          <GitDrawerSideNavCatto />
          <article className="flex-[80] lg:flex-[80] h-full">
            {children}
          </article>
        </PageDrawerCattoDataProviderWrapper>
      </div>
      <hr className="m-3" />
    </>
  )
}
export default GitLayout;


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
