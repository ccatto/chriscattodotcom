'use client'
import Link from "next/link"

const JumbotronCattoCode = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                    Code; Technology & Software Development
                </h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                    I enjoy documenting & writing about when I am developing software. This is broken down into different technologies & languages such as JavaScript & SFCC.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <Link href="/code" 
                        className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-orange-400 bg-orange mb-2">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                        </svg>
                        JavaScript
                    </Link>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                        JavaScript 
                    </h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        JavaScript in my opinion is the fundamental scripting language in this day in age. The language is so large & currently has so many frameworks & packages. It's truly a foundation for coding.
                    </p>
                    {/* <a href="/code" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a> */}
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                        </svg>
                        SFCC
                    </a>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Salesforce Commerce Cloud</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Salesforce Commerce Cloud is a SASS eCommerce solution where the platform allows brands to sell products online. I have been in the space for over 7 years now and enjoy the platform.
                    </p>
                    {/* <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                </div>
            </div>
        </div>
    </section>
  )
}
export default JumbotronCattoCode
