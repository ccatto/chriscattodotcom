'use client'

import React, { useState } from 'react';
import ImageCatto from '../../ImageCatto/ImageCatto';
import SideNavGitCatto from '../../SideNavGitCatto/SideNavGitCatto';

const GitNavDrawerCatto = () => {

  const [isGitDrawerOpen, setIsGitDrawerOpen] = useState(false);
  const clickCloseGitDrawer = () => {
    setIsGitDrawerOpen(!isGitDrawerOpen);
  }
  const clickOpenGitDrawer = () => {
    setIsGitDrawerOpen(!isGitDrawerOpen);
  }

  return (
    <>
      <div className="h-full">
        {/* Closed */}
        <div className={`${!isGitDrawerOpen ? "hidden" : "block"} h-full w-5`}>
          <div className="flex justify-end">
            <button
              className="focus:ring-1 rounded-lg px-1 py-1 me-1 mb-1 m-auto"
              onClick={clickOpenGitDrawer}
            >
              <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
                <ImageCatto
                  src="/images/icons/drawer.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </button>
          </div>
        </div>
        {/* Open */}
        <div className={`${isGitDrawerOpen ? "hidden" : "block"} h-full w-full`}>
          <div className="relative w-full">
            <div className="absolute w-full block lg:hidden">
              <div className="flex justify-end">
                <button
                  className="focus:ring-1 rounded-lg px-1 py-1 me-1 mb-1 m-auto"
                  onClick={clickCloseGitDrawer}
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
            </div>
            <SideNavGitCatto />
          </div>
        </div>
      </div>
    </>
  )
}

export default GitNavDrawerCatto
