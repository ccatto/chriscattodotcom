'use client';

import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Overview',
  description: 'Chris Catto JavaScript Overview',
};

const JSOverview = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-[20]">
          <JumbotronCattoFlexible
            title="JavaScript Overview"
            description="JavaScript in my opinion currently is the most important programming language. It's executed in our browsers & servers. JavaScript is everywhere & everywhere; the most popular & used language currently."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            JavaScript Overview
          </h2>
          <div>
            <ol className="list-inside list-disc space-y-1 indent-4">
              <li>
                <Link
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  JavaScript
                </Link>{' '}
                in my opinion is the best & most used language these days.
              </li>
              <li>
                JS is an event based language which responds in real time to
                user interactions.
              </li>
              <li>
                There are many JS frameworks these days such as Next; React;
                Angular; Vue; Svelte which make it very powerful.
              </li>
              <li>
                I remember in the late 90's utilizing Perl scripts in Netscape
                Navigator which is is when{' '}
                <Link
                  href="https://en.wikipedia.org/wiki/Brendan_Eich"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Brendan Eich
                </Link>{' '}
                invented JS in 1995.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default JSOverview;
