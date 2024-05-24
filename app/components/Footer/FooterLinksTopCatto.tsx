import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FooterLinksTopCatto = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl ">
      <div className="grid grid-cols-1 gap-8 rounded-3xl bg-slate-800 px-4 py-6 md:grid-cols-4 lg:py-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            JavaScript
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <span className="ms-3">JS Fundamentals</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul
                      id="dropdown-example"
                      className="space-y-2 py-2 indent-4"
                    >
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
            <li className="mb-4">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <span className="pl-2">JavaScript Topics</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      {/* JS Overview */}
                      <li className="-scroll-mt-3">
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
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Next.JS
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
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
            <li className="mb-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <span className="ms-3">Fundamentals</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul
                      id="dropdown-example"
                      className="space-y-2 py-2 indent-4"
                    >
                      <li>
                        <Link
                          href="/code/javascript/frameworks/nextjs/fundamentals/helloworld"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Hello World
                        </Link>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li className="mb-4">
              <ul>
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
                    <span className="ms-3">Component Library Common SDK</span>
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
                    href="/code/javascript/frameworks/nextjs/how-to-set-port-in-next-js"
                    className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="ms-3">Change Port</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Git
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link
                href="/code/git/overview"
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
                <span className="ms-3">Git Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/code/git/installation"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M19.059 10.898l-3.171-7.927A1.543 1.543 0 0 0 14.454 2H12.02l.38 4.065h2.7L10 10.293 4.9 6.065h2.7L7.98 2H5.546c-.632 0-1.2.384-1.434.971L.941 10.898a4.25 4.25 0 0 0-.246 2.272l.59 3.539A1.544 1.544 0 0 0 2.808 18h14.383c.755 0 1.399-.546 1.523-1.291l.59-3.539a4.22 4.22 0 0 0-.245-2.272zm-2.1 4.347a.902.902 0 0 1-.891.755H3.932a.902.902 0 0 1-.891-.755l-.365-2.193A.902.902 0 0 1 3.567 12h12.867c.558 0 .983.501.891 1.052l-.366 2.193z" />
                </svg>
                <span className="ms-3">Installation</span>
              </Link>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Commands</AccordionTrigger>
                  <AccordionContent>
                    <ul
                      id="dropdown-example"
                      className="space-y-2 py-2 indent-4"
                    >
                      <li>
                        <a
                          href="/code/git/version"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Version
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/status"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Status
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/log"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Log
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/branch"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Branch
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/checkout"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/clean"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Clean
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/clone"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Clone
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/pull"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Pull
                        </a>
                      </li>
                      <li>
                        <a
                          href="/code/git/reset"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Reset
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/code/git/init"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Init
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/code/git/add"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/code/git/commit"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Commit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/code/git/push"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Push
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/code/git/how-do-i-delete-a-git-branch-locally-and-remotely"
                          className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <svg
                            className="h-6 w-6 text-gray-800 dark:text-white"
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
                              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <span className="ms-3">Delete Branches</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/code/git/tutorial/what-is-the-difference-between-git-pull-and-git-fetch"
                          className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <span className="ms-3">Diff Git Pull & Fetch</span>
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
          {/* Node.js */}
          <div className="mt-0">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Node.js</AccordionTrigger>
                <AccordionContent>
                  <ul id="dropdown-example" className="space-y-2 py-2">
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/semantic-versioning-semver"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Semantic Versioning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/publish-npm-package"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Publish NPM Package
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/code/javascript/frameworks/nodejs/whats-the-difference-between-tilde-and-caret-in-package-json"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Package difference ~ & ^
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Prisma - ORM
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link
                href="/code/orm/prisma"
                className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Prisma Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/code/orm/prisma/getting-started"
                className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Prisma Getting Started
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/code/orm/prisma/updates"
                className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Prisma Making Updates
              </Link>
            </li>
            <h2 className="mb-6 mt-5 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              <Link
                href="/code/mac-environment-setup"
                className="hover:underline"
              >
                Environment Setup
              </Link>
            </h2>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterLinksTopCatto;
