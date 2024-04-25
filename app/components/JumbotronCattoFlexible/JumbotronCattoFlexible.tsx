'use client';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  // isButton?: boolean,
  // buttonText: string,
};

const JumbotronCattoFlexible = ({ title, description }: Props) => {
  // const JumbotronCattoFlexible = ({ title, description, isButton, buttonText}: Props ) => {
  return (
    <section className="m-2 bg-gray-700 bg-center bg-no-repeat bg-blend-multiply">
      <div className="mb-2 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
          {title}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="hidden">
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
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default JumbotronCattoFlexible;
