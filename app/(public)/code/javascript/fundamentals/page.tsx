import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"

export const metadata: Metadata = {
  title: 'Chris Catto Code JavaScript Fundamentals',
  description: 'Chris Catto JavaScript Fundamentals'
}

const fundamentals = () => {
  return (
    <>
      <div className="flex flex-col flex-nowrap h-screen w-full ">
        <div className='flex-[20]'>
          <JumbotronCattoFlexible
            title="JavaScript Fundamentals"
            description="JavaScript fundamentals including a hello world example; variables data types; operations; functions ect. "
          />
        </div>
        <hr className="p-0" />
        <div className='flex-[80] dark:bg-[#f7df1e] text-black p-2'>
          <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight">
            JavaScript Fundamentals
          </h2>
          <div className='pl-10'>
            <p>Hello World! </p>
            <br />
            <p>Fundamentals </p>
            <br />
            <p>Libraries </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default fundamentals;
