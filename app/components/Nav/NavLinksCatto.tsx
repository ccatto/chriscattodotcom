'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import NavLeftNameImageCatto from './NavLeftNameImageCatto';
import AuthClientInOutWrapperCatto from '../Auth/AuthClientInOutWrapperCatto/AuthClientInOutWrapperCatto';

const NavLinksCatto = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavLevel1Item1Open, setIsNavLevel1Item1Open] = useState(false);
  const [isNavLevel2Item1Open, setIsNavLevel2Item1Open] = useState(false);
  const [isNavLevel2NextOpen, setIsNavLevel2NextOpen] = useState(false);
  const [isNavLevel3Item1Open, setIsNavLevel3Item1Open] = useState(false);

  const handleHamburgClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleCloseAllClick = () => {
    setIsNavOpen(false);
    setIsNavLevel1Item1Open(false);
    setIsNavLevel2Item1Open(false);
    setIsNavLevel3Item1Open(false);
    setIsNavLevel2NextOpen(false);
  };
  const handleNavHomeClick = () => {
    handleCloseAllClick();
  };
  const handleNavAboutClick = () => {
    handleCloseAllClick();
  };

  const pathName = usePathname();

  return (
    <>
      {/* Hamburg icon | Mobile */}
      <div className="flex w-full items-center justify-end space-x-3 pr-4 text-gray-200 rtl:space-x-reverse md:hidden">
        <button
          // className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          // className="h-10 w-10 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          className="pr-3"
          onClick={handleHamburgClick}
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {/* Nav Links & sub nav links */}
      <div
        className={`${!isNavOpen ? 'hidden' : 'block'} w-full pt-20 md:block md:w-auto lg:pt-0 `}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 ">
          {/* Main Nav Level-1 Section  */}
          <ul className=" flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            {/* Home Link */}
            <li>
              <Link
                href="/"
                onClick={handleNavHomeClick}
                className={clsx(
                  {
                    'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white':
                      pathName === '/',
                  },
                  {
                    'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500':
                      pathName !== '/',
                  },
                )}
              >
                Home
              </Link>
            </li>
            {/* Code link section */}
            <li>
              {/* Code nav link level 1  */}
              <button
                className={clsx(
                  {
                    'flex rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white':
                      pathName === '/code',
                  },
                  {
                    'flex rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500':
                      pathName !== '/code',
                  },
                )}
                onClick={() => setIsNavLevel1Item1Open(!isNavLevel1Item1Open)}
              >
                Code
                <svg
                  className="ms-2.5 mt-2 h-2.5 w-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Nav level 1 expanded div */}
              <div
                className={`${isNavLevel1Item1Open ? 'block' : 'hidden'} h-100 absolute z-10 mt-3 rounded-lg  bg-gray-900 px-3  py-2 text-sm font-medium text-white shadow-sm dark:bg-gray-700 lg:ml-[-2em]`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  {/* Nav Code / Code Home */}
                  <li>
                    <Link
                      href="/code"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-300 dark:hover:bg-gray-600"
                      onClick={handleCloseAllClick}
                    >
                      Code Home
                    </Link>
                  </li>
                  {/* Nav code JavaScript */}
                  <li>
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-blue-300 dark:hover:bg-gray-600"
                      onClick={() =>
                        setIsNavLevel2Item1Open(!isNavLevel2Item1Open)
                      }
                    >
                      JavaScript
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Nav 2nd level JavaScript Menu */}
                    <div
                      className={`${isNavLevel2Item1Open ? 'block' : 'hidden'} z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-500`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            href="/code/javascript/overview"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            JS Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/fundamentals/helloworld"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Hello World
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/fundamentals/datatypes"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Data Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/fundamentals/functions"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Functions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/fundamentals/objects"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Objects
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Nav code Next.js */}
                  <li>
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-blue-300 dark:hover:bg-gray-600"
                      onClick={() =>
                        setIsNavLevel2NextOpen(!isNavLevel2NextOpen)
                      }
                    >
                      Next.js
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Nav 2nd level NextJS Menu */}
                    <div
                      className={`${isNavLevel2NextOpen ? 'block' : 'hidden'} z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-500`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            href="/code/nextjs/overview"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Next Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/nextjs/fundamentals/helloworld"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Next Hello World
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/nextjs/fundamentals/tailwind-styling-css"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Tailwind Styling CSS
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/nextjs/fundamentals/navigation"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Navigation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/nextjs/fundamentals/authentication"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Next Auth
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Nav Code Git */}
                  <li>
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-blue-300 dark:hover:bg-gray-600"
                      onClick={() =>
                        setIsNavLevel3Item1Open(!isNavLevel3Item1Open)
                      }
                    >
                      Git
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Nav 2nd level Git Menu h-100 overflow-y-auto*/}
                    <div
                      className={`${isNavLevel3Item1Open ? 'block' : 'hidden'} h-100 z-10 w-44 divide-y divide-gray-100 overflow-auto rounded-lg bg-white shadow dark:bg-gray-500`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            href="/code/git/overview"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Git Overview
                          </Link>
                        </li>
                        {/* #todo make this nav look better when it's long list */}
                        <div className="hidden">
                          <li>
                            <Link
                              href="/code/git/installation"
                              className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={handleCloseAllClick}
                            >
                              Installation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/code/git/version"
                              className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={handleCloseAllClick}
                            >
                              Version
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/code/git/status"
                              className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={handleCloseAllClick}
                            >
                              Status
                            </Link>
                          </li>
                        </div>
                        <li>
                          <Link
                            href="/code/git/log"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Log
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/branch"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Branch
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/checkout"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/clean"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Clean
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/clone"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Clone
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/pull"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Pull
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/reset"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Reset
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/init"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Init
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/add"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Add
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/commit"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Commit
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/git/push"
                            className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCloseAllClick}
                          >
                            Push
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            {/* About Link */}
            <li>
              <Link
                href="/about"
                onClick={handleNavAboutClick}
                className={clsx(
                  {
                    'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white':
                      pathName === '/about',
                  },
                  {
                    'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500':
                      pathName !== '/about',
                  },
                )}
              >
                <span>About</span>
              </Link>
            </li>
            {/* Next-Auth Login Logout */}
            {/* <li>
              <AuthClientInOutWrapperCatto>
                {children}
              </AuthClientInOutWrapperCatto>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavLinksCatto;
