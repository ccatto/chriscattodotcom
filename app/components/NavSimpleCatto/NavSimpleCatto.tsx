'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import AuthClientInOutWrapperCatto from '../Auth/AuthClientInOutWrapperCatto/AuthClientInOutWrapperCatto';

const NavSimpleCatto = ({ children }: { children: React.ReactNode }) => {
  const [isNavLevel1Item1Open, setIsNavLevel1Item1Open] = useState(true);

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* Top left Site name */}
          <span className="flex items-center space-x-3 rtl:space-x-reverse self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Site Name
          </span>
          {/* Main Nav Level-1 Section  */}
          <div
            className={`w-full md:block md:w-auto`}
          >
            <ul className=" flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              {/* Home Link */}
              <li>
                {/* <li className='h-2.5 leading-[2.5rem] justify-center'> */}
                <Link
                  href="/"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                {/* <li className='h-2.5 leading-[2.5rem] justify-center'> */}
                <Link
                  href="/about"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                {/* <li className='h-2.5 leading-[2.5rem] justify-center'> */}
                <Link
                  href="/code"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Code
                </Link>
              </li>
              {/* Code link section */}
              <li>
                {/* <li className='h-2.5 leading-[2.5rem] justify-center'> */}
                {/* Code nav link level 1  */}
                <button
                  className='flex rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                  onClick={() => setIsNavLevel1Item1Open(!isNavLevel1Item1Open)}
                >
                  Code Btn
                </button>
                {/* Nav level 1 expanded div */}
                <div
                  className={`${isNavLevel1Item1Open ? 'block' : 'hidden'} h-100 absolute z-10 mt-3 rounded-lg  bg-gray-900 px-3  py-2 text-sm font-medium text-white shadow-sm dark:bg-gray-700 lg:ml-[-2em]`}
                >
                  <div
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                
                  >
                    <h1>inside block displayed by click</h1>
                  </div>
                </div>
              </li>
              {/* Next-Auth Login Logout */}
              <li>
                <AuthClientInOutWrapperCatto>
                  {children}
                </AuthClientInOutWrapperCatto>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSimpleCatto;
