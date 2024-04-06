import ImageCatto from "../ImageCatto/ImageCatto";
import TechStackImages3x3 from "../TechStackImages3x3/TechStackImages3x3";

const About5050Catto3x3TechGrid = () => {
  return (
    <>
      <div className="flex lg:m-4 h-[28rem]">
        <div className="w-1/2 bg-gray-400 h-full">
          <TechStackImages3x3/>
        </div>
        <div className="w-1/2 bg-gray-400 h-full ml-[2px] lg:ml-3">
          <div className="h-full w-full overflow-hidden relative rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="ml-3 mt-5 mb-2 text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              My favorite technologies & languages
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <ul className="w-full mt-2 mb-2 text-xs lg:text-base ">
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  JavaScript it's all over the world as our scripting language. In the late 90's I used Perl; HA.
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  Next.js - React based powerful framework; feature rich; increasing in popularity for good reason.
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  AWS - many services such as Route53; S3; EC2 & Amplify (also use other cloud platforms GCP)
                </li>
                {/* <div>
                  <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>Read More</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                  </button>
                </div> */}
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  PostgreSQL - I am proficient  with many db's such as MongoDB & SQL Server
                </li>
                <div className="hidden lg:block">
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Express.js & Node - Express for API's and Node as our fundamental platform
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    Tailwind CSS - have utilized many CSS frameworks over the years this is my favorite currently
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    TypeScript - strongly typed JS; an industry standard now a days
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    GraphQL - data queries for API's fetching the exact data we need.
                  </li>
                  <li className="w-full px-4 py-2 rounded-b-lg">
                    React - frontend JS library; I prefer this architecture over Angular; Vue & Svelte these days
                  </li>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About5050Catto3x3TechGrid
