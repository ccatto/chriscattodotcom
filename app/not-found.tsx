import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Oh Dear! Error Page;
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
            Hey Now! You have found a page that doesn't exist. 404 error.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Back to Home
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
    </section>
  );
}
