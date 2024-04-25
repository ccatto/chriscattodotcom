import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals',
};

const fundamentals = () => {
  let codeBlock = "<script>\n    alert( 'Hello, world!' );\n</script>";

  return (
    <>
      <div className="flex h-screen w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Hello World"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-1 rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Hello World
          </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
        </div>
      </div>
    </>
  );
};

export default fundamentals;
