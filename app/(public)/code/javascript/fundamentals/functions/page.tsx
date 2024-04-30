import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals',
};

const fundamentals = () => {
  const codeBlock =
    'function name(parameter1, parameter2) {\n    /* code */\n}';
  const codeBlock2 =
    'const functionName = (parameter1, parameter2) => {\n    /* code */\n}';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-[20]">
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Functions"
            description="JavaScript fundamentals Functions "
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Functions
          </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
          <br />
          <h2>ES6 Function Declaration with arrow syntax</h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock2} />
          <div>
            Functions are the main “building blocks” of the program. They allow
            the code to be called many times without repetition.
            <br />
            Values passed to a function as parameters are copied to its local
            variables.
            <br />
            A function may access outer variables. But it works only from inside
            out. The code outside of the function doesn’t see its local
            variables.
            <br />A function can return a value. If it doesn’t, then its result
            is undefined.
          </div>
        </div>
      </div>
    </>
  );
};

export default fundamentals;
