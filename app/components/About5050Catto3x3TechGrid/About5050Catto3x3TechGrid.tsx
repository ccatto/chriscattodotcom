// import Image from "next/image";
import ImageCatto from "../ImageCatto/ImageCatto";

const About5050Catto3x3TechGrid = () => {
  return (
    <>
      <div className="flex m-4 h-[33rem]">
      {/* <div className="flex m-4 lg:h-[30rem] md:h-[68rem]"> */}
      {/* 68rem need to make mobile height alter to bigger */}
        <div className="w-1/2 bg-gray-400 h-full mr-3">
          <div className="h-full w-full block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex h-[10rem] m-1">
              <div className="w-1/3 bg-orange-500 m-1"></div>
              <div className="w-1/3 bg-red-500 m-1"></div>
              <div className="w-1/3 bg-green-500 m-1"></div>
            </div>
            <div className="flex h-[10rem] m-1">
              <div className="w-1/3 bg-orange-500 h-[10rem] m-1"></div>
              <div className="w-1/3 bg-red-500 h-[10rem] m-1"></div>
              <div className="w-1/3 bg-green-500 h-[10rem] m-1"></div>
            </div>
            <div className="flex h-[10rem] m-1">
              <div className="w-1/3 bg-red-500 h-[10rem] m-1"></div>
              <div className="w-1/3 bg-orange-500 h-[10rem] m-1"></div>
              <div className="w-1/3 bg-green-500 h-[10rem] m-1"></div>
            </div>
            {/* <ImageCatto
                src="/images/Chris-Catto-SFCC-Certified-B2C-Commerce-Developer-Badge.png" 
                alt="cattoImage"
                priority={false}
                sizes="calc(49vw - 16px)"
              /> */}
          </div>
        </div>
        <div className="w-1/2 bg-gray-400 h-full ml-3">
          <div className="h-full w-full overflow-hidden relative rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              My favorite technologies & languages
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Blah
              </p>
              <ul className="w-full mt-2 mb-2">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  1 Next JS
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  2 Express JS
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  3 GraphQL
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  4 PostgreSQL
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  5 Node
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  6 .NET
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  7 SQL in General
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  8 Tailwind CSS 
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  9 React? 
                </li>
              </ul>
              {/* <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-3">

              </ul> */}
            </div>

          </div>
          {/* <ImageCatto photo="/images/Chris-Catto-SFCC-Certified-B2C-Commerce-Developer-Badge.png" /> */}

          {/* <Image 
            className="mt-20 rounded-full w-96 h-96" 
            src="/images/Chris-Catto-Sunrise.jpg"
            width={800}
            height={374}
            alt="Chris Catto Sunrise"/> */}
        </div>
      </div>
    </>
  )
}
export default About5050Catto3x3TechGrid
