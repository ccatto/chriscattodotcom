import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals',
};

const fundamentals = () => {
  // let codeBlock = '<script>\n    alert( \'Hello, world!\' );\n</script>';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-[20]">
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Data Types"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Data Types
          </h2>
          {/* <SyntaxHighlightingReactCatto codeString={codeBlock} /> */}
          <ul className="list-inside list-disc space-y-1 indent-4">
            <li>Seven primitive data types:</li>
            <li>
              number for numbers of any kind: integer or floating-point,
              integers are limited by ±(253-1).
            </li>
            <li>bigint for integer numbers of arbitrary length.</li>
            <li>
              string for strings. A string may have zero or more characters,
              there’s no separate single-character type. boolean for true/false.
            </li>
            <li>
              null for unknown values – a standalone type that has a single
              value null.
            </li>
            <li>
              undefined for unassigned values – a standalone type that has a
              single value undefined.
            </li>
            <li>symbol for unique identifiers.</li>
            <li>
              And one non-primitive data type: object for more complex data
              structures.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default fundamentals;
