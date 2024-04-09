import { Metadata } from 'next'
import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible"
import CommandPromptDisplay from '@/app/components/Utils/CommandPromptDisplay/CommandPromptDisplay'
// import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chris Catto Code Git Tutorial Overview',
  description: 'Chris Catto Code Git Tutorial Overview'
}

export default function Page() {
  return (
    <div className="flex flex-col flex-nowrap h-full w-full ">
      <div className='h-56'>
        <JumbotronCattoFlexible
          title="Git Overview"
          description="Git has a bunch of info "
        />
      </div>
      <hr className="p-1" />
     
      <div className= 'p-5 m-5  flex-1 border-2 border-white rounded-2xl bg-[#f0efe7] '>
          <h2 className='text-[#f14e32]'>
            HEADER 2
          </h2>
          <p className='text-[#4e443c]'>
            inside tex
          </p>
          <br/>
          2
          <br/>
          12
          <br/>
          23423
          <br/>
          1
          <br/>
          2
          <br/>
          1
          <br/>
          223423
          <br/>
          1
          <br/>
          2
          <br/>
          12
          <br/>
          23423
          <br/>
          1888888
          <br/>
          2
          <br/>
          1
          <br/>
          223423
          <br/>
          1
          <br/>
          2
          <br/>
          12
          <br/>
          23423
          <br/>
          1
          <br/>
          2
          <br/>
          1
          <br/>
          223423 ;l12k3j4123;l4kj
          <br/>

          1888888
          <br/>
          2
          <br/>
          1
          <br/>
          223423 ;21lk34j1;23l4kj21
          <br/>
          1
          <br/>
          2
          <br/>
          12
          <br/>
          23423  ;234l;kj2;3l4kj123;4l
          <br/>
          1
          <br/>
          2 blue
          <br/>
          1
          <br/>
          orange
          <br/>

  
      </div>
 
      {/* <div className='flex-[80] dark:bg-gray-700 p-2'>
        <div className='p-4 text-gray-400'>
          We need homebrew installed. 
          <br/>
          Also after to ensure git is installed we can check the using the <Link href="/code/git/version">version command</Link>.
        </div>
        <h2 className="inline-block mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Terminal example:
        </h2>
        <div className='pl-10'>
          <CommandPromptDisplay
            command='brew install git'
            output='==> installing git'
          />
        </div>
      </div> */}
      {/* <hr className="m-3" /> */}
    </div>
  )
}
