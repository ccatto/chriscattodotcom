import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SideNavGitCatto from '@/app/components/SideNavGitCatto/SideNavGitCatto'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Source Control',
  description: 'Chris Catto Code Git Source Control'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-full w-full ">
      <div className='flex-1'>
        <JumbotronCattoFlexible
          title="Git Source Control"
          description="Git is the industry standard for source control. This section I am displaying some of the main concepts & the commands that I use frequently."
        />
      </div>
      <div className='flex-1 p-5 m-5 border-2 border-white rounded-2xl bg-[#f0efe7] text-[#4e443c] '>
        {/* <div className= ''> */}
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/code/git/overview" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path fill-rule="evenodd" d="M6,9 C6.55228,9 7,9.44772 7,10 L7,14 C7,14.5523 6.55228,15 6,15 L2,15 C1.44772,15 1,14.5523 1,14 L1,10 C1,9.44772 1.44772,9 2,9 L6,9 Z M14,13 C14.5523,13 15,13.4477 15,14 C15,14.5523 14.5523,15 14,15 L10,15 C9.44772,15 9,14.5523 9,14 C9,13.4477 9.44772,13 10,13 L14,13 Z M5,11 L3,11 L3,13 L5,13 L5,11 Z M14,9 C14.5523,9 15,9.44772 15,10 C15,10.5523 14.5523,11 14,11 L10,11 C9.44772,11 9,10.5523 9,10 C9,9.44772 9.44772,9 10,9 L14,9 Z M6,1 C6.55228,1 7,1.44772 7,2 L7,6 C7,6.55228 6.55228,7 6,7 L2,7 C1.44772,7 1,6.55228 1,6 L1,2 C1,1.44772 1.44772,1 2,1 L6,1 Z M14,5 C14.5523,5 15,5.44772 15,6 C15,6.51283143 14.613973,6.93550653 14.1166239,6.9932722 L14,7 L10,7 C9.44772,7 9,6.55228 9,6 C9,5.48716857 9.38604429,5.06449347 9.88337975,5.0067278 L10,5 L14,5 Z M5,3 L3,3 L3,5 L5,5 L5,3 Z M14,1 C14.5523,1 15,1.44772 15,2 C15,2.55228 14.5523,3 14,3 L10,3 C9.44772,3 9,2.55228 9,2 C9,1.44772 9.44772,1 10,1 L14,1 Z" />
              </svg>
              <span className="ms-3">Git Overview</span>
            </a>
          </li>
          <li>
            <a href="/code/git/installation" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
              {/* <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.059 10.898l-3.171-7.927A1.543 1.543 0 0 0 14.454 2H12.02l.38 4.065h2.7L10 10.293 4.9 6.065h2.7L7.98 2H5.546c-.632 0-1.2.384-1.434.971L.941 10.898a4.25 4.25 0 0 0-.246 2.272l.59 3.539A1.544 1.544 0 0 0 2.808 18h14.383c.755 0 1.399-.546 1.523-1.291l.59-3.539a4.22 4.22 0 0 0-.245-2.272zm-2.1 4.347a.902.902 0 0 1-.891.755H3.932a.902.902 0 0 1-.891-.755l-.365-2.193A.902.902 0 0 1 3.567 12h12.867c.558 0 .983.501.891 1.052l-.366 2.193z" />
              </svg> */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-[#4e443c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M19.059 10.898l-3.171-7.927A1.543 1.543 0 0 0 14.454 2H12.02l.38 4.065h2.7L10 10.293 4.9 6.065h2.7L7.98 2H5.546c-.632 0-1.2.384-1.434.971L.941 10.898a4.25 4.25 0 0 0-.246 2.272l.59 3.539A1.544 1.544 0 0 0 2.808 18h14.383c.755 0 1.399-.546 1.523-1.291l.59-3.539a4.22 4.22 0 0 0-.245-2.272zm-2.1 4.347a.902.902 0 0 1-.891.755H3.932a.902.902 0 0 1-.891-.755l-.365-2.193A.902.902 0 0 1 3.567 12h12.867c.558 0 .983.501.891 1.052l-.366 2.193z" />
              </svg>
              <span className="ms-3">Installation</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group dark:hover:text-white">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-[#4e443c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V7H20V6C20 5.44772 19.5523 5 19 5H5ZM4 18V9H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18ZM7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.58579 14L6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071L9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L7.70711 11.2929Z" />
              </svg>
              <span className="ms-3">Commands</span>
            </a>
            <ul id="dropdown-example" className="indent-4 py-2 space-y-2">
              <li>
                <a href="/code/git/version" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Version
                </a>
              </li>
              <li>
                <a href="/code/git/status" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Status
                </a>
              </li>
              <li>
                <a href="/code/git/log" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Log
                </a>
              </li>
              <li>
                <a href="/code/git/branch" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Branch
                </a>
              </li>
              <li>
                <a href="/code/git/clean" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Clean
                </a>
              </li>
              <li>
                <a href="/code/git/clone" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Clone
                </a>
              </li>
              <li>
                <a href="/code/git/pull" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Pull
                </a>
              </li>
              <li>
                <a href="/code/git/reset" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Reset
                </a>
              </li>
              <li>
                <a href="/code/git/init" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Init
                </a>
              </li>
              <li>
                <a href="/code/git/add" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Add
                </a>
              </li>
              <li>
                <a href="/code/git/commit" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Commit
                </a>
              </li>
              <li>
                <a href="/code/git/push" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white">
                  Push
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group dark:hover:text-white">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-[#4e443c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group dark:hover:text-white">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-[#4e443c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="flex-1 w-full overflow-hidden relative">
        <Image
          src="/images/git-orange.svg"
          alt="Git version control"
          layout="fill"
        />
      </div> */}
      <hr className="m-3" />
    </div>
  )
}