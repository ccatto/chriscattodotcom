'use client';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went very wrong! We have an error!</h2>
        {/* <button onClick={() => reset()}>Try again</button> */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
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
      </body>
    </html>
  );
}
