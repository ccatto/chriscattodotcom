"use client";

import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Overview',
  description: 'Chris Catto JavaScript Overview'
}

const JSOverview = () => {
  return (
    <>
      <div className="flex flex-col flex-nowrap h-full w-full ">
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Overview"
            description="JavaScript in my opinion currently is the most important programming language. It's executed in our browsers & servers. JavaScript is everywhere & everywhere; the most popular & used language currently."
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] m-4 p-4 rounded-2xl dark:bg-[#f7df1e] text-black ring-2 ring-gray-300 dark:ring-gray-500'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight">
            JavaScript Overview
          </h2>
          <div>
            <ol className="indent-4 space-y-1 list-disc list-inside">
              <li>
                <Link href="https://en.wikipedia.org/wiki/JavaScript" rel="noopener noreferrer" target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">JavaScript</Link> in my opinion is the best & most used language these days.
              </li>
              <li>
                JS is an event based language which responds in real time to user interactions.
              </li>
              <li>
                There are many JS frameworks these days such as Next; React; Angular; Vue; Svelte which make it very powerful.
              </li>
              <li>
                I remember in the late 90's utilizing Perl scripts in Netscape Navigator which is is when <Link href="https://en.wikipedia.org/wiki/Brendan_Eich" rel="noopener noreferrer" target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Brendan Eich</Link> invented JS in 1995.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default JSOverview;
