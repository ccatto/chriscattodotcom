'use client'

// import React from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ImageCatto from '../../ImageCatto/ImageCatto';
import SideNavGitCatto from '../../SideNavGitCatto/SideNavGitCatto';
// SideNavGitCatto

// usePageDrawerDataCattoContext

// SideNavGitCatto


const GitSimpleTestNavCatto = () => {
  const [isDrawerOpen4, setIsDrawerOpen4] = useState(false);

  // const [isNavOpen3, setIsNavOpen3] = useState(false);
  // const handleClick = () => {
  //   setIsNavOpen3(!isNavOpen3);
  //   console.log('\||||||||||||||||||| inside SIMPLE');
  // };
  // const pathName = usePathname();

  const clickCloseDrawer = () => {
    console.log('inside clickCloseDrawer');
    setIsDrawerOpen4(!isDrawerOpen4);
    console.log('\||||||||||||||||||| inside SIMPLE');
  };
  const pathName = usePathname();

  return (
    <>
      <aside className={` ${isDrawerOpen4 ? "hidden" : "block"} lg:flex-[20]`} aria-label="Sidebar">
        <button
          className=" focus:ring-1  rounded-lg px-1 py-1 me-1 mb-1 "
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
        <SideNavGitCatto />
      </aside>
      {/* <div className={`${isNavOpen3 ? "hidden" : "block"} w-full `}>
          <div className='bg-orange-500 h-60 w-52'>
            Inside show hide stuff
          </div>
        </div> */}
      {/* <button onClick={handleClick} type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */}

      {/* <aside className={`lg:flex-[20]  ${isDrawerOpen ? "hidden" : "block"} `} aria-label="Sidebar"> */}
      {/* ${isNavOpen3 ? "hidden" : "block"} */}

      {/* <aside className={`lg:flex-[20] bg-lime-600 ${isNavOpen3 ? "hidden" : "block"} `} aria-label="Sidebar"> */}
      {/* <aside className={`lg:flex-[20] bg-lime-600 `} aria-label="Sidebar"> */}

    </>
  )
}
export default GitSimpleTestNavCatto
