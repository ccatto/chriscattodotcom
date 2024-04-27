import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js Fundamentals Hello World',
  description: 'Chris Catto Next.js Hello World',
};

const helloworld = () => {
  let codeBlock = "\n npx create-next-app@latest \n";

  return (
    <>
      <div className="flex h-screen w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js Fundamentals Hello World"
            description="Next.js fundamentals including a hello world / create app example."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js Fundamentals Hello World / Create app
          </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default helloworld;
