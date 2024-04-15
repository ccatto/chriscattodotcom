"use client";

import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Overview',
  description: 'Chris Catto JavaScript Overview'
}

const JSOverview = () => {
  return (
    <>
      <div className="flex flex-col flex-nowrap h-screen w-full ">
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Overview"
            description="JavaScript in my opinion currently is the most important programming language. It's executed in our browsers & servers. JavaScript is everywhere & everywhere; the most popular & used language currently."
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] dark:bg-gray-700 p-2'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            JavaScript
          </h2>
          <div className='pl-10'>
            <p>Hello World! </p>
            <br />
            <p>Fundamentals </p>
            <br />
            <p>Libraries </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default JSOverview;
