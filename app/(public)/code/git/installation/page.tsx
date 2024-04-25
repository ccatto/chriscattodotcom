import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay';
import Link from 'next/link';
import LinkCatto from '@/app/components/AtomicDesign/atoms/LinkCatto/LinkCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Installation',
  description: 'Chris Catto Code Git Tutorial Installation',
};

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col flex-nowrap ">
      <div className="h-56 flex-1">
        <JumbotronCattoFlexible
          title="Installing Git"
          description="Git needs to be installed before we use it. This is assuming we have homebrew installed."
        />
      </div>
      <hr className="p-0" />
      <div className="m-5 flex-1 rounded-2xl border-2 border-white bg-[#f0efe7] p-5 text-[#4e443c] ">
        <div className="p-4 text-gray-400">
          We need homebrew installed.
          <br />
          Also after to ensure git is installed we can check the using the{' '}
          <LinkCatto linkText="version command" href="/code/git/version" />.
        </div>
      </div>
      <section className="m-5 flex-1 rounded-2xl border-2 border-white bg-gray-900 font-mono text-gray-200 ">
        <div className="w-100 flex h-10 items-center rounded-t-2xl border-2 border-b-[1px] border-slate-900 bg-gray-700 px-4">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="p-4 text-slate-400 lg:p-52">Terminal</div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex">
            <div className="lg:mr-2">&gt;</div>
            <div className="flex-1 bg-gray-800 pl-1 focus:outline-none">
              brew install git
            </div>
          </div>
          <div className="mt-2">
            <span className="text-green-500">&gt; Output:</span>
            <div className="mt-1 bg-gray-800 p-2">
              <p>==&gt; installing git</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
