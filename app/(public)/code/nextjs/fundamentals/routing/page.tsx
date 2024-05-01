import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import JumbotronCattoFlexible from '../../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Routing',
  description: 'Chris Catto Next.js Routing',
};

const routing = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Routing"
            description="Next.js fundamentals Routing"
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block p-5 text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Routing
          </h2>
          <br />
          <div className="text-xl font-normal text-gray-700 dark:text-gray-400">
            <p className="p-2 indent-10">
              Routing currently is done in Next.js as of v13 & great as the "app
              router". Previous to this we utilized "page routing". So at the
              root of the project there is a directory named "app". Then inside
              that there are two key files a "page.tsx" & "layout.tsx". There is
              some detailed documentation on the official Next.js routing page
              here:{' '}
              <Link
                target="_blank"
                href="https://nextjs.org/docs/app/building-your-application/routing"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Next.js Routing docs
              </Link>
            </p>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <ul>
              <li className="m-5">
                A key concept to me is the directory based routing system. The
                "home" page will be the "page.tsx" file located in the app
                directory. Then if we want to create a route say
                domain.com/about we would create a folder "about" & inside that
                create a "page.tsx" file & that it basically it.
              </li>
              <li className="m-5">
                The layouts follow that directory routing system as well. So in
                each folder if there is a layout it will apply to all the pages
                with that directory.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default routing;
