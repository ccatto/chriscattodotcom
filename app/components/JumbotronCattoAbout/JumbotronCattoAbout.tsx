'use client'
import Link from "next/link"

const JumbotronCattoAbout = () => {
  return (


<section className="bg-center bg-no-repeat bg-[url('/images/ChrisCatto-Sunset.png')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Chris Catto</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Insightful, results-driven application developer with notable successes automating business processes in support of company objectives. Excels at working on individual & team projects, providing clear and concise communication with team members and management. Extensive hands-on experience coordinating all aspects of software development, including analysis, user interface, design, architecture, coding, documentation, tes5ng, implementation, and training.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            With over 20 years of experience in developing software I still enjoy coding. I have worked for large fortune 500 companies to small startups. I have enjoyed working with many different technologies, earlier on in my career it was much more Microsoft .NET & currently have been utilizing Salesforce Commerce Cloud to build eCommerce sites. 
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>

    // <section className="bg-white dark:bg-gray-900">
    //     <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
    //         <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
    //             <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Welcome to ChrisCatto.com</h1>
    //             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
    //                 Hey Now! My name is Chris Catto & this is my public personal website where I combine my passion for developing software with my personal life.
    //             </p>
    //             <Link href="/about" 
    //                 className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    //                 Read more
    //                 <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //                 </svg>
    //             </Link>
    //         </div>
    //         <div className="grid md:grid-cols-2 gap-8">
    //             <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    //                 <Link href="/code" 
    //                     className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-orange-400 bg-orange mb-2">
    //                     <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
    //                     </svg>
    //                     Code
    //                 </Link>
    //                 <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
    //                     Technology 
    //                 </h2>
    //                 <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
    //                     I've enjoyed developing software all of my life. Professionally I have utilized many different technologies currently focused on JavaScript, API's, databases & eCommerce including Salesforce Commerce Commerce Cloud.
    //                 </p>
    //                 <a href="/code" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
    //                     <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //                 </svg>
    //                 </a>
    //             </div>
    //             <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    //                 <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
    //                     <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    //                         <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
    //                     </svg>
    //                     About
    //                 </a>
    //                 <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Personal Life</h2>
    //                 <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
    //                     In my personal time I enjoy spending with my family also many hobbies including playing sports, listing to music & coding. 
    //                 </p>
    //                 <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
    //                     <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    //                     </svg>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}
export default JumbotronCattoAbout
