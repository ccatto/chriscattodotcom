'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NavCatto = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavLevel1Item1Open, setIsNavLevel1Item1Open] = useState(false);

  const handleHamburgClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavL1I2Click = () => {
    setIsNavLevel1Item1Open(!isNavLevel1Item1Open);
  }

  const handleCloseAllClick = () => {
    setIsNavLevel1Item1Open(false);
    setIsNavOpen(false);
  }

  const handleNavHomeClick = () => {
    handleCloseAllClick();
  }

  const handleNavAboutClick = () => {
    handleCloseAllClick();
  }

  const pathName = usePathname();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Top left Site name & image */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/Chris-Catto-dot-com.png"
              width={107}
              height={50}
              className="hidden md:block rounded-2xl"
              alt="ChrisCatto.com"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ChrisCatto.com
            </span>
          </Link>
          {/* Hamburg icon */}
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleHamburgClick} type="button" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          {/* Main Nav Level-1 Section  */}
          <div className={`${!isNavOpen ? "hidden" : "block"} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Home Link */}
              <li>
                <Link
                  href="/"
                  onClick={handleNavHomeClick}
                  className={clsx(
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/',
                    },
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/',
                    },
                  )}
                >
                  <span>
                    Home
                  </span>
                </Link>
              </li>
              {/* Code link section */}
              <li>
                <button
                  className={clsx(
                    {
                      "flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/code',
                    },
                    {
                      "flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/code',
                    },
                  )}
                  onClick={() => setIsNavLevel1Item1Open(!isNavLevel1Item1Open)}
                >
                  Code
                  <svg
                    className="mt-2 w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div className={`${isNavLevel1Item1Open ? "block" : "hidden"} absolute z-10 mt-3 lg:ml-[-2em]  px-3 py-2  text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link
                        href="/code"
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-200'
                        onClick={handleCloseAllClick}
                      >
                        Code Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript"
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-200'
                        onClick={handleCloseAllClick}
                      >
                        JavaScript
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/git"
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-200'
                        onClick={handleCloseAllClick}
                      >
                        Git
                      </Link>
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
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/about',
                    },
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/about',
                    },
                  )}
                >
                  <span>
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}
export default NavCatto