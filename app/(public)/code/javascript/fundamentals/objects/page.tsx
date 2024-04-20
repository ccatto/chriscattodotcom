import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto'

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals Objects',
  description: 'Chris Catto JavaScript Fundamentals Objects'
}

const objects = () => {

  const codeBlock = ' // create a simple object \nconst simpleObject = {}; \nconst simpleObject2 = new Object();';
  const codeBlock2 = '// example of simple object \nconst person = {\n  firstName: \'Chris\',\n  lastName: \'Catto\'\n};';

  return (
    <>
      <div className="flex flex-col flex-nowrap h-full w-full ">
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Objects"
            description="JavaScript fundamentals Objects "
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] m-4 dark:bg-[#f7df1e] text-black p-2'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Objects
          </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
          <br/>
          <h2>ES6 Objects </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock2} />
          <div>
            Objects are a collection of key value pairs.
            <br />
            {/* Values passed to a function as parameters are copied to its local variables.
            <br />
            A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
            <br />
            A function can return a value. If it doesn’t, then its result is undefined. */}
          </div>
        </div>
      </div>
    </>
  )
}

export default objects;
