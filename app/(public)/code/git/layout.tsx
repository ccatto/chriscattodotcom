// 'use client';

import React, { ReactNode, useState } from "react";
// import React, { useState } from 'react';
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto';
import Image from "next/image";
import ButtonCatto from "@/app/components/atoms/ButtonCatto/ButtonCatto";
// import React, { useEffect, useRef, useState } from 'react'
import ImageCatto from "@/app/components/ImageCatto/ImageCatto";

type LayoutProps = {
  children: ReactNode;
}

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

const GitLayout = ({ children }: LayoutProps) => {
  // console.log('1 isGitDrawerOpen === ', isGitDrawerOpen);
  return (
    <>


      <div className="flex h-full">
        <aside className={`lg:flex-[20] `} aria-label="Sidebar">

          {/* working below simple no button or hiding */}
          {/* <aside className="hidden lg:block lg:flex-[20]" aria-label="Sidebar"> */}


          {/* <!-- drawer init and toggle --> */}
          {/* <div className="text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
              Show drawer
            </button>
          </div> */}
          <SideNavGitCatto />
        </aside>
        <article className="flex-[80] lg:flex-[80] h-full">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            // onClick={clickSideNavHandler()}
          >
            Show Drawer2
            <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
              <ImageCatto
                src="/images/icons/drawer-nav.svg"
                alt="cattoImage"
                priority={false}
                sizes="calc(49vw - 16px)"
              />
            </div>
          </button>

          {children}
        </article>
      </div>
      <hr className="m-3" />
    </>
  )
}
export default GitLayout;
