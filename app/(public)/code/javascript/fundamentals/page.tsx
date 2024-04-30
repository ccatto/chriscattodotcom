import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals',
};

const fundamentals = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-[20]">
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals
          </h2>
          <div className="pl-10">
            <ul>
              <li>
                <Link
                  href="/code/javascript/fundamentals/helloworld"
                  className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Hello World!
                </Link>
              </li>
              <li>
                <Link
                  href="/code/javascript/fundamentals/fundamentals"
                  className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link
                  href="/code/javascript/fundamentals/functions"
                  className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Functions
                </Link>
              </li>
              <li>
                <Link
                  href="/code/javascript/fundamentals/objects"
                  className="group flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Objects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default fundamentals;
