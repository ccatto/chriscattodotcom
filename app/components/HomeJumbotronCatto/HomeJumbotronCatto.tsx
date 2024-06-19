'use client';
import Link from 'next/link';

const HomeJumbotronCatto = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Welcome to ChrisCatto.com
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
            Hey Now! My name is Chris Catto & this is my public personal website
            where I combine my passion for developing software with my personal
            life.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
              p
            </svg>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/code"
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
              Code
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Technology
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              I've enjoyed developing software all of my life. Professionally I
              have utilized many different technologies currently focused on
              JavaScript, API's, databases & eCommerce including Salesforce
              Commerce Commerce Cloud.
            </p>
            <Link
              href="/code"
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <Link
              href="/about"
              className="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
            >
              <svg
                className="me-1.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              About
            </Link>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              Personal Life
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              In my personal time I enjoy spending with my family also many
              hobbies including playing sports, listing to music & coding.
            </p>
            <Link
              href="/about"
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
      </div>
    </section>
  );
};
export default HomeJumbotronCatto;
