'use client'

// import React from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const GitSimpleTestNavCatto = () => {
  const [isNavOpen3, setIsNavOpen3] = useState(true);
  const handleClick = () => {
    setIsNavOpen3(!isNavOpen3);
    console.log('\||||||||||||||||||| inside SIMPLE');
  };
  const pathName = usePathname();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          <button onClick={handleClick} type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isNavOpen3 ? "hidden" : "block"} w-full `}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  onClick={handleClick}
                  className={clsx(
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/',
                    },
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/',
                    },
                  )}
                >
                  <span>Home </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/code"
                  onClick={handleClick}
                  className={clsx(
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/code',
                    },
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/code',
                    },
                  )}
                >
                  <span>Code </span>
                </Link>
              </li>
              {/* <li>
                        <Link
                            href="/sports"
                            className={clsx(
                                {
                                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/sports',
                                },
                                {
                                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/sports',
                                },
                              )}
                        >
                            <span>Sports</span>
                        </Link>
                        </li> */}
              {/* <li>
                        <Link
                            href="/media"
                            className={clsx(
                                {
                                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/media',
                                },
                                {
                                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/media',
                                },
                              )}
                        >
                            <span>Media</span>
                        </Link>
                        </li> */}
              <li>
                <Link
                  href="/about"
                  onClick={handleClick}
                  className={clsx(
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName === '/about',
                    },
                    {
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent": pathName !== '/about',
                    },
                  )}
                >
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}
export default GitSimpleTestNavCatto
