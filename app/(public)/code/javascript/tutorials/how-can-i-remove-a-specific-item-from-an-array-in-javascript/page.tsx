import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';

export const metadata: Metadata = {
  title:
    'How Can I Remove a Specific Item From an Array In Javascript Chris Catto js docs',
  description:
    'How Can I Remove a Specific Item From an Array In Javascript Chris Catto Javascript Frameworks Nextjs documentation',
};

const HowToSetPortInNextJs = () => {
  const codeBlock =
    'let valueToBeRemoved = 4;\nlet array = [1, 2, 3, 4, 5];\narray = array.filter(item => item !== valueToBeRemoved);\nconsole.log(\'array after filter & value is removed", array);\n// [ 1, 2, 3, 5 ]';

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="How Can I Remove a Specific Item From an Array In Javascript using Filter not Split"
            description="How Can I Remove a Specific Item From an Array In Javascript ES6 using Filter not Split"
          />
        </div>
      </div>
      <div className="m-4 flex-[80] rounded-2xl p-4 text-white ring-2 ring-gray-300 dark:bg-black dark:ring-gray-500">
        <div className="mb-4 inline-block text-lg font-extrabold tracking-tight">
          How Can I Remove a Specific Item From an Array In Javascript ES6 using
          Filter not Split
        </div>
        <SyntaxHighlightingReactCatto codeString={codeBlock} />
      </div>
    </>
  );
};
export default HowToSetPortInNextJs;
