'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageCatto from '../../ImageCatto/ImageCatto';
import SideNavGitCatto from '../../SideNavGitCatto/SideNavGitCatto';

// usePageDrawerDataCattoContext
import { usePageDrawerDataCattoContext } from '../../Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';

const GitNavDrawerCatto = () => {

  let { isPageDrawerOpen, setIsPageDrawerOpen } = usePageDrawerDataCattoContext();
  console.log('---------------- inside Nav Drawer isPageDrawerOpen === ', isPageDrawerOpen);

  const [isDrawerOpen4, setIsDrawerOpen4] = useState(false);

  const clickCloseDrawer = () => {
    console.log('inside clickCloseDrawer');

    setIsPageDrawerOpen(false);
    console.log('------ After Update ---------- inside Nav Drawer isPageDrawerOpen === ', isPageDrawerOpen);

    // state
    setIsDrawerOpen4(!isDrawerOpen4);

    // context: 
    isPageDrawerOpen = true;

    console.log('\||||||||||||||||||| inside SIMPLE');
  };

  return (
    <>
      <aside className={` ${isDrawerOpen4 ? "hidden" : "block"} lg:flex-[20]`} aria-label="Sidebar">
        <div className="flex justify-end">
          <button
            className="focus:ring-1 rounded-lg px-1 py-1 me-1 mb-1 m-auto"
            onClick={clickCloseDrawer}
          >
            <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
              <ImageCatto
                src="/images/icons/close-x.svg"
                alt="cattoImage"
                priority={false}
                sizes="calc(49vw - 16px)"
              />
            </div>
          </button>
        </div>

        <SideNavGitCatto />
      </aside>
    </>
  )
}
export default GitNavDrawerCatto
