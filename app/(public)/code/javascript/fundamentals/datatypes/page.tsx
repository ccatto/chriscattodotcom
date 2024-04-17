import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto'

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals'
}

const fundamentals = () => {

  let codeBlock = '<script>\n    alert( \'Hello, world!\' );\n</script>';

  return (
    <>
      <div className="flex flex-col flex-nowrap h-screen w-full ">
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals Data Types"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] m-4 dark:bg-[#f7df1e] text-black p-2'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals Data Types
          </h2>
          <SyntaxHighlightingReactCatto codeString={codeBlock} />
          <div>
          Seven primitive data types:
          <br />
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
<br />
bigint for integer numbers of arbitrary length.
<br />
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
<br />
null for unknown values – a standalone type that has a single value null.
<br />
undefined for unassigned values – a standalone type that has a single value undefined.
<br />
symbol for unique identifiers.
<br />
And one non-primitive data type:
<br />
object for more complex data structures.
          </div>
        </div>
      </div>
    </>
  )
}

export default fundamentals;
