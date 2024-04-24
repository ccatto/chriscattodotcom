import ImageCatto from "../ImageCatto/ImageCatto";
import TechStackImages3x3 from "../TechStackImages3x3/TechStackImages3x3";

const About5050Catto3x3TechGrid = () => {
  return (
    <>
      <div className="flex lg:m-4 h-[28rem]">
        <div className="w-1/2 bg-gray-400 h-full">
          <TechStackImages3x3 />
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
