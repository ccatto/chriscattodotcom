'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const JSSideNavLinkList = () => {
  const [isJSFundamentalsDrawerOpen, setIsJSFundamentalsDrawerOpen] =
    useState(false);
  const clickJSFundamentalsDrawer = () => {
    setIsJSFundamentalsDrawerOpen(!isJSFundamentalsDrawerOpen);
  };

  return (
    <>
      <div className="hidden h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800 lg:block">
        <ul className="space-y-2 font-medium">
          {/* JS Home */}
          <li className="h-14">
            <Link
              href="/code/javascript"
              className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
              <span className="ms-3">JavaScript Home</span>
            </Link>
          </li>

          <li>
            {/* Next.JS Section */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="ms-3">Next.js</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/overview"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 21"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6,9 C6.55228,9 7,9.44772 7,10 L7,14 C7,14.5523 6.55228,15 6,15 L2,15 C1.44772,15 1,14.5523 1,14 L1,10 C1,9.44772 1.44772,9 2,9 L6,9 Z M14,13 C14.5523,13 15,13.4477 15,14 C15,14.5523 14.5523,15 14,15 L10,15 C9.44772,15 9,14.5523 9,14 C9,13.4477 9.44772,13 10,13 L14,13 Z M5,11 L3,11 L3,13 L5,13 L5,11 Z M14,9 C14.5523,9 15,9.44772 15,10 C15,10.5523 14.5523,11 14,11 L10,11 C9.44772,11 9,10.5523 9,10 C9,9.44772 9.44772,9 10,9 L14,9 Z M6,1 C6.55228,1 7,1.44772 7,2 L7,6 C7,6.55228 6.55228,7 6,7 L2,7 C1.44772,7 1,6.55228 1,6 L1,2 C1,1.44772 1.44772,1 2,1 L6,1 Z M14,5 C14.5523,5 15,5.44772 15,6 C15,6.51283143 14.613973,6.93550653 14.1166239,6.9932722 L14,7 L10,7 C9.44772,7 9,6.55228 9,6 C9,5.48716857 9.38604429,5.06449347 9.88337975,5.0067278 L10,5 L14,5 Z M5,3 L3,3 L3,5 L5,5 L5,3 Z M14,1 C14.5523,1 15,1.44772 15,2 C15,2.55228 14.5523,3 14,3 L10,3 C9.44772,3 9,2.55228 9,2 C9,1.44772 9.44772,1 10,1 L14,1 Z"
                          />
                        </svg>
                        <span className="ms-3">Next.js Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/fundamentals"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 21"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V7H20V6C20 5.44772 19.5523 5 19 5H5ZM4 18V9H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18ZM7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.58579 14L6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071L9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L7.70711 11.2929Z"
                          />
                        </svg>
                        <span className="ms-3">Fundamentals</span>
                      </Link>
                      <ul
                        id="dropdown-example"
                        className="space-y-2 py-2 indent-4"
                      >
                        <li>
                          <a
                            href="/code/javascript/frameworks/nextjs/fundamentals/helloworld"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Hello World
                          </a>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/frameworks/nextjs/fundamentals/routing"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Routing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/frameworks/nextjs/fundamentals/navigation"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Navigation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/frameworks/nextjs/fundamentals/tailwind-styling-css"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            <svg
                              className="h-5 w-5 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#9cafa3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                            </svg>
                            <span>Styling - Tailwind</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/frameworks/nextjs/fundamentals/authentication"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            <svg
                              className="h-5 w-5 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="#9cafa3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                              />
                            </svg>
                            <span>Next-Auth</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/code/javascript/frameworks/nextjs/fundamentals/metadata"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Metadata
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/shadcn-ui"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-5 w-5 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#9cafa3"
                            strokeWidth="2"
                            d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                          />
                        </svg>
                        <span className="ms-3">Shadcn-ui</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/shadcn-ui/data-table"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-6 w-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#9cafa3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z"
                            clipRule="evenodd"
                          />
                          <path d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z" />
                        </svg>
                        <span className="ms-3">Tables</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/component-library-common-sdk"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">
                          Component Library Common SDK
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nextjs/react-hook-form"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">React Hook Form</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="code/javascript/frameworks/nextjs/how-to-set-port-in-next-js"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">Change port</span>
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          {/* Node.js Section */}
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Link
                    href="/code/javascript/frameworks/nodejs"
                    className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Node.js
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/semantic-versioning-semver"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">Semantic Versioning</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/publish-npm-package"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">Publish Npm Package</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/whats-the-difference-between-tilde-and-caret-in-package-json"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">Package difference ~ & ^</span>
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          {/* Javascript topics */}
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="pl-2">JavaScript Topics</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {/* JS Overview */}
                    <li>
                      <Link
                        href="/code/javascript/overview"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 21"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6,9 C6.55228,9 7,9.44772 7,10 L7,14 C7,14.5523 6.55228,15 6,15 L2,15 C1.44772,15 1,14.5523 1,14 L1,10 C1,9.44772 1.44772,9 2,9 L6,9 Z M14,13 C14.5523,13 15,13.4477 15,14 C15,14.5523 14.5523,15 14,15 L10,15 C9.44772,15 9,14.5523 9,14 C9,13.4477 9.44772,13 10,13 L14,13 Z M5,11 L3,11 L3,13 L5,13 L5,11 Z M14,9 C14.5523,9 15,9.44772 15,10 C15,10.5523 14.5523,11 14,11 L10,11 C9.44772,11 9,10.5523 9,10 C9,9.44772 9.44772,9 10,9 L14,9 Z M6,1 C6.55228,1 7,1.44772 7,2 L7,6 C7,6.55228 6.55228,7 6,7 L2,7 C1.44772,7 1,6.55228 1,6 L1,2 C1,1.44772 1.44772,1 2,1 L6,1 Z M14,5 C14.5523,5 15,5.44772 15,6 C15,6.51283143 14.613973,6.93550653 14.1166239,6.9932722 L14,7 L10,7 C9.44772,7 9,6.55228 9,6 C9,5.48716857 9.38604429,5.06449347 9.88337975,5.0067278 L10,5 L14,5 Z M5,3 L3,3 L3,5 L5,5 L5,3 Z M14,1 C14.5523,1 15,1.44772 15,2 C15,2.55228 14.5523,3 14,3 L10,3 C9.44772,3 9,2.55228 9,2 C9,1.44772 9.44772,1 10,1 L14,1 Z"
                          />
                        </svg>
                        <span className="ms-3">Javascript Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/async-await"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-5 w-5 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#9cafa3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                          />
                        </svg>
                        <span className="ms-3">Async/Await</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/dayjs"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">DayJS</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/tutorials/how-can-i-remove-a-specific-item-from-an-array-in-javascript"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <span className="ms-3">Remove item from array</span>
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          {/* JS Fundamentals */}
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="ms-3">JS Fundamentals</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul id="dropdown-example" className="space-y-2 py-2 indent-4">
                    <li>
                      <a
                        href="/code/javascript/fundamentals/helloworld"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Hello World
                      </a>
                    </li>
                    <li>
                      <a
                        href="/code/javascript/fundamentals/datatypes"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Data Types
                      </a>
                    </li>
                    <li>
                      <a
                        href="/code/javascript/fundamentals/functions"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Functions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/code/javascript/fundamentals/objects"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Objects
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  );
};
export default JSSideNavLinkList;
