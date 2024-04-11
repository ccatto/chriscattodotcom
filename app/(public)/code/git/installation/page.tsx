import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'
import Link from 'next/link';
import LinkCatto from '@/app/components/atoms/LinkCatto/LinkCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Installation',
  description: 'Chris Catto Code Git Tutorial Installation'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-screen w-full ">
      <div className='h-56 flex-1'>
        <JumbotronCattoFlexible
          title="Installing Git"
          description="Git needs to be installed before we use it. This is assuming we have homebrew installed."
        />
      </div>
      <hr className="p-0" />
      <div className='flex-1 p-5 m-5 border-2 border-white rounded-2xl bg-[#f0efe7] text-[#4e443c] '>
        <div className='p-4 text-gray-400'>
          We need homebrew installed.
          <br />
          Also after to ensure git is installed we can check the using the <LinkCatto linkText='version command' href='/code/git/version' />.
        </div>
      </div>
      <section className='flex-1 m-5 border-2 border-white rounded-2xl bg-gray-900 text-gray-200 font-mono '>
        <div className="flex w-100 items-center h-10 px-4 border-2 bg-gray-700 rounded-t-2xl border-b-[1px] border-slate-900">
          <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="p-4 lg:p-52 text-slate-400">Terminal</div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex">
            <div className="lg:mr-2">&gt;</div>
            <div className="flex-1 pl-1 bg-gray-800 focus:outline-none">
              brew install git
            </div>
          </div>
          <div className="mt-2">
            <span className="text-green-500">&gt; Output:</span>
            <div className="bg-gray-800 p-2 mt-1">
              <p>
                ==&gt; installing git
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='lg:pl-10 flex-1'>
          <CommandPromptDisplay
            command='brew install git'
            output='==> installing git'
          />
        </div> */}
      {/* <div className='flex-1 lg:flex-[80] dark:bg-gray-700 p-2'>
        <div className='p-4 text-gray-400'>
          We need homebrew installed.
          <br />
          Also after to ensure git is installed we can check the using the <Link href="/code/git/version">version command</Link>.
        </div>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='lg:pl-10'>
          <CommandPromptDisplay
            command='brew install git'
            output='==> installing git'
          />
        </div>
      </div> */}
      {/* <hr className="m-3" /> */}
    </div>
  )
}
