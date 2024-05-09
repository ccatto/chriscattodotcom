
import { Metadata } from 'next';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Async/Await',
  description: 'Chris Catto Code JavaScript Async/Await - working with promises calling & calling an api',
};

const page = () => {
  let codeBlock = "const getDogData = async () => {\n    const responsePageData = await fetch('https://dog.ceo/api/breeds/image/random');\n    const dogData = await responsePageData.json();\n    console.log(\"Our dog data will be here! \", dogData);\n};\ngetDogData();";
  
  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex">
          <JumbotronCattoFlexible
            title="JavaScript Async/Await"
            description="In JavaScript Async/Await introduced in ES8 is great since it makes our code cleaner compared to promise chains. Let's take a look at a real world example of using async/await in calling an API."
          />
        </div>
        <div className="m-4 flex-[80] rounded-2xl p-4 text-black ring-2 ring-gray-300 dark:bg-[#f7df1e] dark:ring-gray-500">
          <ul className="space-y-2 font-medium">
            <li>
              We can declare a function async by adding the keyword. This will return a promise; each async function will contain an await expression which makes js wait until that promise returns the result.
            </li>
            <li>
              Below is a good real world example & <Link target='_blank' href="https://codepen.io/ccatto/pen/VwOwKwm?editors=1111" className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>checkout my codepen</Link> if you want to try it
            </li>
            <li>
              <SyntaxHighlightingReactCatto codeString={codeBlock} />
            </li>
          </ul>
        </div>
      </div>
    </>

  );


}

export default page;