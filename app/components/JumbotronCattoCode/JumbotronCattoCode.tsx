'use client';

import Link from 'next/link';

const JumbotronCattoCode = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Code; Technology & Software Development
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
            I enjoy documenting & writing about when I am developing software.
            This is broken down into different technologies & languages such as
            JavaScript & SFCC.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code/javascript"
              className="bg-orange mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-yellow-300"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
                {/* <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/> */}
              </svg>
              JavaScript
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              JavaScript
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              JavaScript in my opinion is the fundamental scripting language in
              this day in age. The language is so large & currently has so many
              frameworks & packages. It's truly a foundation for coding.
            </p>
            <a
              href="/code/javascript"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <div className="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400">
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              SFCC
            </div>
            {/* </Link> */}
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Salesforce Commerce Cloud
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Salesforce Commerce Cloud is a SASS eCommerce solution where the
              platform allows brands to sell products online. I have been in the
              space for over 7 years now and enjoy the platform.
            </p>
            <Link
              href="/code/sfcc"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* 2nd Row */}
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Git section */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code/git/overview"
              className="bg-orange mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-orange-400"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Git Version Control
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Git Version Control
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Git in an industry standard. It's truly a foundation for coding.
            </p>
            <Link
              href="/code/git"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more Git
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          {/* Next.js */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code/nextjs"
              className="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Next.js
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Next.js
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Next.js is react framework to build high quality web applications.
              I have been enjoying utilizing framework & this site is currently
              built on it.
            </p>
            <Link
              href="/code/nextjs"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more on Next.js
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* 3rd Row */}
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Env Setup section */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code/mac-environment-setup"
              className="bg-orange mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-orange-400"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Mac Env Setup
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Environmental Setup
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Environmental Setup is a key fundamental piece of developing
              software. Take a look what I like to install to setup my
              development environment.
            </p>
            <Link
              href="/code/mac-environment-setup"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more Env Setup
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          {/* Next.js */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code/orm/prisma"
              className="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              ORM Prisma
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              ORM Prisma
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              Object Relationship Mappings are very functional piece of software
              development. I have enjoyed using Prisma; Sequelize & Entity
              Framework to name a few over the years.
            </p>
            <Link
              href="/code/orm/prisma"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Read more on Prisma ORM
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JumbotronCattoCode;
