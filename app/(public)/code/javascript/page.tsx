import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Home',
  description: 'Chris Catto Code JavaScript Home',
  alternates: {
    canonical: 'https://www.chriscatto.com/code/javascript',
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript"
            description="JavaScript has become so important & a massively large language; this section is my way of trying to define; outline & learn .js"
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/code/javascript/overview"
                className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 "
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
                <span className="ms-3">JavaScript Overview</span>
              </a>
            </li>
            <li>
              <Link
                href="/code/javascript/fundamentals"
                className="group flex items-center rounded-lg  p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-[#4e443c]"
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
                <span className="ms-3">JS Fundamentals</span>
              </Link>
              <ul id="dropdown-example" className="space-y-2 py-2 indent-4">
                <li>
                  <a
                    href="/code/javascript/fundamentals/helloworld"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 transition duration-75 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Hello World
                  </a>
                </li>
                <li>
                  <a
                    href="/code/javascript/fundamentals/functions"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 transition duration-75 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Functions
                  </a>
                </li>
                <li>
                  <a
                    href="/code/javascript/fundamentals/objects"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 transition duration-75 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Objects
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/code/javascript/async-await"
                className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                  />
                </svg>
                <span className="ms-3">Async-Await</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <hr className="m-3" /> */}
      </div>
    </>
  );
}
