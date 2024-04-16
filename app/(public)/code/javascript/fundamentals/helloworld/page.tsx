import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
// import hljs from 'highlight.js'
// import 'highlight.js/styles/default.css';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import { useEffect } from 'react';
// SyntaxHighlightingCatto
import SyntaxHighlightingCatto from '@/app/components/Utils/SyntaxHighlightingCatto/SyntaxHighlightingCatto'
// SyntaxHighlightingReactCatto
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto'

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals'
}

const fundamentals = () => {

  // useEffect(() => {
  //   hljs.initHighlighting();
  //   }, []);

  // hljs.highlightAll();

  // let codeBlock = ['one', 'two'];
  let codeBlock = 'line 1 \n line 2';

  return (
    <>
      <div className="flex flex-col flex-nowrap h-screen w-full ">
        {/* <SyntaxHighlightingCatto/>
        <pre>
          <code className="javascript">
            32 alert( 'Hello, world!' );
          </code>
        </pre> */}
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Hello World"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] m-4 dark:bg-[#f7df1e] text-black p-2'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Hello World
          </h2>
          <h3>top</h3>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
          {/* <SyntaxHighlightingReactCatto codeString='<span>Hello<br />Hi</span>'/> */}
          {/* <SyntaxHighlightingReactCatto codeString='(num) => num + 1<br/> next + " \n " + address'/> */}

        </div>
      </div>
    </>
  )
}

export default fundamentals;
